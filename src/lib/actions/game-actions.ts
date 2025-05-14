"use server";

import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";
import { NarrativeRequest, NarrativeResponse } from "@/types/game";
import { logger } from "@/lib/utils/logger";
import { Prisma } from "@/generated/prisma";

/**
 * Helper function to ensure JSON value is safe for Prisma
 */
function ensurePrismaJson(value: unknown): Prisma.JsonValue {
  if (value === null || value === undefined) {
    return {} as Prisma.JsonObject;
  }
  return value as Prisma.JsonValue;
}

// This would be imported from your AI service
async function generateNarrativeResponse(
  request: NarrativeRequest
): Promise<NarrativeResponse> {
  // This is a placeholder that would be replaced with your actual AI service call
  // For now, we'll return a simple mock response
  return {
    narrativeText: `The narrative continues based on the player's choice to "${request.playerDecision.chosenOption}". The story unfolds further...`,
    newLocation: request.playerDecision.chosenOption.includes("leave")
      ? "New Location"
      : undefined,
    updatedCharacterState: request.characterState,
    updatedWorldState: request.worldState,
  };
}

/**
 * Advances the game state based on a player decision
 * @param sessionId - The current game session ID
 * @param decisionIndex - The index of the player's choice
 * @returns The updated game state
 */
export async function makeGameDecision(
  sessionId: string,
  decisionIndex: number
) {
  try {
    // Get the current game session and its latest state
    const session = await prisma.gameSession.findUnique({
      where: { id: sessionId },
      include: {
        gameStates: {
          orderBy: { saveTimestamp: "desc" },
          take: 1,
        },
      },
    });

    if (!session || !session.gameStates[0]) {
      throw new Error("Invalid game session");
    }

    const currentState = session.gameStates[0];

    // Get the current available options
    const currentOptions = await prisma.gameOption.findFirst({
      where: { gameStateId: currentState.id },
      orderBy: { timestamp: "desc" },
      take: 1,
    });

    if (
      !currentOptions ||
      !currentOptions.options ||
      currentOptions.options.length <= decisionIndex
    ) {
      throw new Error("Invalid option selection");
    }

    // Record the player's decision
    const decision = await prisma.decision.create({
      data: {
        gameStateId: currentState.id,
        gameOptionId: currentOptions.id,
        decisionContext: currentOptions.context,
        optionsPresented: currentOptions.options,
        playerChoice: decisionIndex,
        location: currentState.currentLocation,
      },
    });

    // Generate narrative response to the decision using AI
    const narrativeRequest: NarrativeRequest = {
      characterState: currentState.characterState,
      worldState: currentState.worldState,
      previousContext: currentState.narrativeContext || "",
      playerDecision: {
        context: currentOptions.context,
        options: currentOptions.options,
        chosenOption: currentOptions.options[decisionIndex],
      },
    };

    const narrativeResponse = await generateNarrativeResponse(narrativeRequest);

    // Parse the AI context safely
    const aiContext =
      typeof currentState.aiContext === "object" &&
      currentState.aiContext !== null
        ? (currentState.aiContext as Record<string, any>)
        : {};

    // Get the recent decisions safely
    const recentDecisions = Array.isArray(aiContext.recentDecisions)
      ? aiContext.recentDecisions
      : [];

    // Create the new AI context with updated decisions
    const newAiContext = {
      ...aiContext,
      recentDecisions: [
        ...recentDecisions.slice(-3),
        {
          context: currentOptions.context,
          decision: currentOptions.options[decisionIndex],
        },
      ],
    };

    // Create a new game state based on the narrative response
    const newGameState = await prisma.gameState.create({
      data: {
        sessionId: session.id,
        characterId: session.characterId,
        worldId: currentState.worldId,
        currentLocation:
          narrativeResponse.newLocation || currentState.currentLocation,
        saveTimestamp: new Date(),
        narrativeContext: narrativeResponse.narrativeText,
        // Use proper JSON types for Prisma
        aiContext: newAiContext as any,
        characterState: narrativeResponse.updatedCharacterState ?? ({} as any),
        worldState: narrativeResponse.updatedWorldState ?? ({} as any),
        isAutosave: true,
      },
    });

    // Create a new narrative history entry
    await prisma.narrativeHistory.create({
      data: {
        gameStateId: newGameState.id,
        type: "narrative",
        content: narrativeResponse.narrativeText,
      },
    });

    // Revalidate the game page
    revalidatePath(`/game/${sessionId}`);

    return {
      narrativeText: narrativeResponse.narrativeText,
    };
  } catch (error) {
    logger.error("Failed to process game decision", {
      error: error instanceof Error ? error.message : "Unknown error",
      context: "game",
    });
    throw new Error("Failed to process your decision. Please try again.");
  }
}

/**
 * Save the current game state manually
 */
export async function saveGameState(sessionId: string, saveName: string) {
  try {
    // Get the current game session
    const session = await prisma.gameSession.findUnique({
      where: { id: sessionId },
      include: {
        gameStates: {
          orderBy: { saveTimestamp: "desc" },
          take: 1,
        },
      },
    });

    if (!session || !session.gameStates[0]) {
      throw new Error("Invalid game session");
    }

    const currentState = session.gameStates[0];

    // Create a new save point
    await prisma.gameState.create({
      data: {
        sessionId: session.id,
        characterId: session.characterId,
        worldId: currentState.worldId,
        currentLocation: currentState.currentLocation,
        saveTimestamp: new Date(),
        savePointName: saveName,
        narrativeContext: currentState.narrativeContext,
        // Use proper JSON types for Prisma
        aiContext: currentState.aiContext as any,
        characterState: currentState.characterState as any,
        worldState: currentState.worldState as any,
        isAutosave: false,
      },
    });

    revalidatePath(`/game/${sessionId}`);
    return { success: true };
  } catch (error) {
    logger.error("Failed to save game state", {
      error: error instanceof Error ? error.message : "Unknown error",
      context: "game",
    });
    throw new Error("Failed to save game. Please try again.");
  }
}

/**
 * Load a saved game state
 */
export async function loadGameState(sessionId: string, gameStateId: string) {
  try {
    // Verify the game state belongs to the session
    const gameState = await prisma.gameState.findFirst({
      where: {
        id: gameStateId,
        sessionId: sessionId,
      },
      include: {
        narrativeHistory: true,
        decisions: true,
      },
    });

    if (!gameState) {
      throw new Error("Save not found");
    }

    // We don't actually need to modify anything in the database
    // The client will load this state from the session

    revalidatePath(`/game/${sessionId}`);
    return { success: true };
  } catch (error) {
    logger.error("Failed to load game state", {
      error: error instanceof Error ? error.message : "Unknown error",
      context: "game",
    });
    throw new Error("Failed to load saved game. Please try again.");
  }
}
