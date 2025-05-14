"use server";

import { revalidatePath } from "next/cache";
import { GameState } from "@/types/game";
import { ValidationError } from "@/lib/errors/DatabaseError";
import { gameEngine } from "@/lib/game-engine";
import { gameStateService } from "@/lib/services/GameStateService";
import { logger } from "@/lib/utils/logger";
import { verifyGameSession } from "./gameSession-actions";

/**
 * Save the current game state to create a save point
 *
 * @param sessionId The game session ID
 * @param savePointName Optional name for this save point
 * @returns The saved game state
 */
export async function saveGameState(
  sessionId: string,
  savePointName?: string
): Promise<GameState> {
  try {
    // Validate inputs
    if (!sessionId) {
      throw new ValidationError(
        "Session ID is required",
        { sessionId: "Session ID is required" },
        { entity: "game-state-actions" }
      );
    }

    // Verify the session exists and is active
    await verifyGameSession(sessionId);

    // Use GameEngine to save the state
    const savedState = await gameEngine.saveGameState(sessionId, savePointName);

    logger.info("Game state saved", {
      context: "server-action",
      metadata: {
        action: "saveGameState",
        sessionId,
        stateId: savedState.id,
        savePointName,
      },
    });

    return savedState;
  } catch (error) {
    logger.error("Failed to save game state", {
      context: "server-action",
      metadata: {
        action: "saveGameState",
        sessionId,
        savePointName,
        error,
      },
    });

    throw error;
  }
}

/**
 * Load a specific game state
 *
 * @param stateId The state ID to load
 * @returns The loaded game state
 */
export async function loadGameState(stateId: string): Promise<GameState> {
  try {
    // Validate inputs
    if (!stateId) {
      throw new ValidationError(
        "State ID is required",
        { stateId: "State ID is required" },
        { entity: "game-state-actions" }
      );
    }

    // Use GameEngine to load the state
    const loadedState = await gameEngine.loadGameState(stateId);

    logger.info("Game state loaded", {
      context: "server-action",
      metadata: {
        action: "loadGameState",
        stateId,
        sessionId: loadedState.sessionId,
      },
    });

    return loadedState;
  } catch (error) {
    logger.error("Failed to load game state", {
      context: "server-action",
      metadata: {
        action: "loadGameState",
        stateId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Get a specific game state
 *
 * @param stateId The state ID to retrieve
 * @returns The game state or null if not found
 */
export async function getGameState(stateId: string): Promise<GameState | null> {
  try {
    // Validate inputs
    if (!stateId) {
      throw new ValidationError(
        "State ID is required",
        { stateId: "State ID is required" },
        { entity: "game-state-actions" }
      );
    }

    // Use GameEngine to get the state
    const state = await gameEngine.getGameState(stateId);

    logger.debug("Game state retrieved", {
      context: "server-action",
      metadata: {
        action: "getGameState",
        stateId,
        found: !!state,
      },
    });

    return state;
  } catch (error) {
    logger.error("Failed to get game state", {
      context: "server-action",
      metadata: {
        action: "getGameState",
        stateId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Get the latest game state for a session
 *
 * @param sessionId The session ID
 * @returns The latest game state ID, or null if none exists
 */
export async function getLatestGameStateForSession(
  sessionId: string
): Promise<string | null> {
  try {
    // Validate inputs
    if (!sessionId) {
      throw new ValidationError(
        "Session ID is required",
        { sessionId: "Session ID is required" },
        { entity: "game-state-actions" }
      );
    }

    // Verify the session exists and is active
    await verifyGameSession(sessionId);

    // Use GameStateService to get the latest state
    const latestState = await gameStateService.getLatestGameState(sessionId);

    // Return the state ID or null if no state exists
    return latestState?.id || null;
  } catch (error) {
    logger.error("Failed to get latest game state for session", {
      context: "server-action",
      metadata: {
        action: "getLatestGameStateForSession",
        sessionId,
        error,
      },
    });

    throw error;
  }
}
