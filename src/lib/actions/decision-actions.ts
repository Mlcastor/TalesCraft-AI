"use server";

import { ValidationError } from "@/lib/errors/DatabaseError";
import { gameEngine } from "@/lib/game-engine";
import { logger } from "@/lib/utils/logger";
import { GameState, NarrativeResponse } from "@/types/game";
import { verifyGameSession } from "./gameSession-actions";
import { isNotEmpty } from "@/lib/utils/validation";

/**
 * Make a decision in the game
 *
 * @param sessionId The game session ID
 * @param decisionIndex The index of the decision to make
 * @returns Object containing the narrative response and updated game state
 */
export async function makeDecision(
  sessionId: string,
  decisionIndex: number
): Promise<{
  narrativeResponse: NarrativeResponse;
  updatedState: GameState;
}> {
  try {
    // Validate inputs
    if (!isNotEmpty(sessionId)) {
      throw new ValidationError(
        "Session ID is required",
        { sessionId: "Session ID is required" },
        { entity: "decision-actions" }
      );
    }

    if (typeof decisionIndex !== "number" || decisionIndex < 0) {
      throw new ValidationError(
        "Decision index must be a non-negative number",
        { decisionIndex: "Invalid decision index" },
        { entity: "decision-actions" }
      );
    }

    // Verify the session exists and is active
    await verifyGameSession(sessionId);

    // Use the GameEngine to process the decision
    const result = await gameEngine.makeDecision(sessionId, decisionIndex);

    logger.info("Decision made", {
      context: "server-action",
      metadata: {
        action: "makeDecision",
        sessionId,
        decisionIndex,
      },
    });

    return result;
  } catch (error) {
    logger.error("Failed to make decision", {
      context: "server-action",
      metadata: {
        action: "makeDecision",
        sessionId,
        decisionIndex,
        error,
      },
    });

    throw error;
  }
}

/**
 * Get the current available decisions for a session
 *
 * @param sessionId The game session ID
 * @returns Array of available decisions
 */
export async function getCurrentDecisions(
  sessionId: string
): Promise<Array<{ text: string; consequences?: string }>> {
  try {
    // Validate input
    if (!isNotEmpty(sessionId)) {
      throw new ValidationError(
        "Session ID is required",
        { sessionId: "Session ID is required" },
        { entity: "decision-actions" }
      );
    }

    // Verify the session exists and is active
    await verifyGameSession(sessionId);

    // Load the game state via GameEngine
    const gameState = await gameEngine.getGameState(
      await getLatestStateIdForSession(sessionId)
    );

    // Verify we have a game state
    if (!gameState) {
      throw new ValidationError(
        "No game state found for session",
        { sessionId: "No game state exists for this session" },
        { entity: "decision-actions" }
      );
    }

    // Extract decisions from the game state, or get them from the DecisionManager
    // Prefer the decisions embedded in the game state if available
    const decisions = gameState.decisions || [];

    logger.debug("Current decisions retrieved", {
      context: "server-action",
      metadata: {
        action: "getCurrentDecisions",
        sessionId,
        decisionCount: decisions.length,
      },
    });

    return decisions;
  } catch (error) {
    logger.error("Failed to get current decisions", {
      context: "server-action",
      metadata: {
        action: "getCurrentDecisions",
        sessionId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Get previous decisions made in a session (decision history)
 *
 * @param sessionId The game session ID
 * @param limit Maximum number of previous decisions to retrieve
 * @returns Array of previous decisions with context
 */
export async function getPreviousDecisions(
  sessionId: string,
  limit?: number
): Promise<
  Array<{
    options: Array<{ text: string }>;
    chosenIndex: number;
    timestamp: Date;
  }>
> {
  try {
    // Validate input
    if (!isNotEmpty(sessionId)) {
      throw new ValidationError(
        "Session ID is required",
        { sessionId: "Session ID is required" },
        { entity: "decision-actions" }
      );
    }

    // Verify the session exists
    await verifyGameSession(sessionId);

    // Get narrative history which includes player decisions
    const gameState = await gameEngine.getGameState(
      await getLatestStateIdForSession(sessionId)
    );

    // Check if we have narrative history in the game state
    if (!gameState || !gameState.narrative || !gameState.narrative.history) {
      return [];
    }

    // Extract player responses from the narrative history
    const playerResponses = gameState.narrative.history
      .filter((entry) => entry.type === "playerResponse")
      .map((entry) => ({
        options: [{ text: entry.content }], // We only have the chosen option in history
        chosenIndex: 0, // Always 0 since we only have the chosen option
        timestamp: new Date(), // Use current date as we don't have the exact timestamp
      }));

    // Apply limit if specified
    if (typeof limit === "number" && limit > 0) {
      return playerResponses.slice(0, limit);
    }

    return playerResponses;
  } catch (error) {
    logger.error("Failed to get previous decisions", {
      context: "server-action",
      metadata: {
        action: "getPreviousDecisions",
        sessionId,
        limit,
        error,
      },
    });

    throw error;
  }
}

/**
 * Helper function to get the latest game state ID for a session
 *
 * @param sessionId The game session ID
 * @returns The latest game state ID for the session
 */
async function getLatestStateIdForSession(sessionId: string): Promise<string> {
  // Import dynamically to avoid circular dependencies
  const { getLatestGameStateForSession } = await import("./game-state-actions");

  const stateId = await getLatestGameStateForSession(sessionId);
  if (!stateId) {
    throw new ValidationError(
      "No game state found for session",
      { sessionId: "Session has no saved game states" },
      { entity: "decision-actions" }
    );
  }

  return stateId;
}
