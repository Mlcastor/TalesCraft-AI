"use server";

import { revalidatePath } from "next/cache";
import { ValidationError } from "@/lib/errors/DatabaseError";
import { gameEngine } from "@/lib/game-engine";
import { narrativeService } from "@/lib/services/NarrativeService";
import { logger } from "@/lib/utils/logger";
import { NarrativeHistory } from "@/types/database";
import { verifyGameSession } from "./gameSession-actions";
import { isNotEmpty } from "@/lib/utils/validation";

/**
 * Generate narrative content for a game session
 *
 * @param sessionId The game session ID
 * @returns Object containing narrative text and available decisions
 */
export async function generateNarrative(sessionId: string): Promise<{
  narrativeText: string;
  decisions: Array<{ text: string; consequences?: string }>;
}> {
  try {
    // Validate inputs
    if (!isNotEmpty(sessionId)) {
      throw new ValidationError(
        "Session ID is required",
        { sessionId: "Session ID is required" },
        { entity: "narrative-actions" }
      );
    }

    // Verify the session exists and is active
    await verifyGameSession(sessionId);

    // Use the GameEngine to generate narrative
    // The GameEngine handles all the coordination between services
    const narrativeResponse = await gameEngine.generateNarrative(sessionId);

    logger.info("Narrative generated", {
      context: "server-action",
      metadata: {
        action: "generateNarrative",
        sessionId,
      },
    });

    return narrativeResponse;
  } catch (error) {
    logger.error("Failed to generate narrative", {
      context: "server-action",
      metadata: {
        action: "generateNarrative",
        sessionId,
        error,
      },
    });

    // Provide a fallback response for error cases
    return {
      narrativeText:
        "The path ahead seems momentarily unclear. You pause to gather your thoughts and consider your options.",
      decisions: [
        {
          text: "Wait and observe",
          consequences: "Take time to better understand the situation.",
        },
        {
          text: "Press onward cautiously",
          consequences: "Continue despite uncertainty.",
        },
        {
          text: "Retrace your steps",
          consequences: "Return to familiar territory.",
        },
        {
          text: "Try a different approach",
          consequences: "Seek an alternative solution.",
        },
      ],
    };
  }
}

/**
 * Get narrative history for a game state
 *
 * @param gameStateId The game state ID
 * @returns Array of narrative history entries
 */
export async function getNarrativeHistory(
  gameStateId: string
): Promise<NarrativeHistory[]> {
  try {
    // Validate inputs
    if (!isNotEmpty(gameStateId)) {
      throw new ValidationError(
        "Game state ID is required",
        { gameStateId: "Game state ID is required" },
        { entity: "narrative-actions" }
      );
    }

    // Load the game state through GameEngine first to establish context
    const gameState = await gameEngine.getGameState(gameStateId);
    if (!gameState) {
      throw new ValidationError(
        "Invalid game state ID",
        { gameStateId: "Game state does not exist" },
        { entity: "narrative-actions" }
      );
    }

    // Use the NarrativeService directly since GameEngine doesn't expose a
    // method for retrieving narrative history specifically
    const narrativeHistory = await narrativeService.getNarrativeHistory(
      gameStateId
    );

    logger.debug("Narrative history retrieved", {
      context: "server-action",
      metadata: {
        action: "getNarrativeHistory",
        gameStateId,
        entryCount: narrativeHistory.length,
      },
    });

    return narrativeHistory;
  } catch (error) {
    logger.error("Failed to get narrative history", {
      context: "server-action",
      metadata: {
        action: "getNarrativeHistory",
        gameStateId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Get recent narrative history for a game state
 *
 * @param gameStateId The game state ID
 * @param limit Maximum number of entries to return (default 10)
 * @returns Array of recent narrative history entries
 */
export async function getRecentNarrativeHistory(
  gameStateId: string,
  limit: number = 10
): Promise<NarrativeHistory[]> {
  try {
    // Validate inputs
    if (!isNotEmpty(gameStateId)) {
      throw new ValidationError(
        "Game state ID is required",
        { gameStateId: "Game state ID is required" },
        { entity: "narrative-actions" }
      );
    }

    // Load the game state through GameEngine first to establish context
    const gameState = await gameEngine.getGameState(gameStateId);
    if (!gameState) {
      throw new ValidationError(
        "Invalid game state ID",
        { gameStateId: "Game state does not exist" },
        { entity: "narrative-actions" }
      );
    }

    // Ensure limit is a positive number
    if (typeof limit !== "number" || limit < 1) {
      limit = 10;
    }

    // Use the NarrativeService directly since GameEngine doesn't expose a
    // method for retrieving recent narrative history
    const narrativeHistory = await narrativeService.getRecentNarrativeHistory(
      gameStateId,
      limit
    );

    logger.debug("Recent narrative history retrieved", {
      context: "server-action",
      metadata: {
        action: "getRecentNarrativeHistory",
        gameStateId,
        limit,
        retrievedCount: narrativeHistory.length,
      },
    });

    return narrativeHistory;
  } catch (error) {
    logger.error("Failed to get recent narrative history", {
      context: "server-action",
      metadata: {
        action: "getRecentNarrativeHistory",
        gameStateId,
        limit,
        error,
      },
    });

    throw error;
  }
}

/**
 * Record a player response in the narrative history
 *
 * @param sessionId The game session ID
 * @param gameStateId The game state ID
 * @param content The player response content
 * @returns The recorded narrative history entry
 */
export async function recordPlayerResponse(
  sessionId: string,
  gameStateId: string,
  content: string
): Promise<NarrativeHistory> {
  try {
    // Validate inputs
    if (!isNotEmpty(sessionId)) {
      throw new ValidationError(
        "Session ID is required",
        { sessionId: "Session ID is required" },
        { entity: "narrative-actions" }
      );
    }

    if (!isNotEmpty(gameStateId)) {
      throw new ValidationError(
        "Game state ID is required",
        { gameStateId: "Game state ID is required" },
        { entity: "narrative-actions" }
      );
    }

    if (!isNotEmpty(content)) {
      throw new ValidationError(
        "Content is required",
        { content: "Response content is required" },
        { entity: "narrative-actions" }
      );
    }

    // Verify the session exists and is active
    await verifyGameSession(sessionId);

    // Add the narrative entry to the GameEngine's context
    // This keeps the context up-to-date in memory
    gameEngine.on("NARRATIVE_UPDATED", (event) => {
      logger.debug("Narrative context updated", {
        context: "server-action",
        metadata: {
          action: "recordPlayerResponse",
          sessionId,
          gameStateId,
        },
      });
    });

    // Use the NarrativeService directly to record the entry in the database
    // The GameEngine doesn't directly expose a method for this persistence operation
    const entry = await narrativeService.recordNarrativeEntry(
      gameStateId,
      "playerResponse",
      content
    );

    logger.info("Player response recorded", {
      context: "server-action",
      metadata: {
        action: "recordPlayerResponse",
        sessionId,
        gameStateId,
        entryId: entry.id,
      },
    });

    return entry;
  } catch (error) {
    logger.error("Failed to record player response", {
      context: "server-action",
      metadata: {
        action: "recordPlayerResponse",
        gameStateId,
        content,
        error,
      },
    });

    throw error;
  }
}
