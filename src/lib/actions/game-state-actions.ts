"use server";

import { GameState } from "@/types/game";
import { ValidationError } from "@/lib/errors/DatabaseError";
import { gameEngine } from "@/lib/game-engine";
import { gameStateService } from "@/lib/services/GameStateService";
import { logger } from "@/lib/utils/logger";
import { verifyGameSession } from "./gameSession-actions";
import { GameEngine } from "@/lib/game-engine/GameEngine";
import { isNotEmpty } from "@/lib/utils/validation";

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
    if (!isNotEmpty(sessionId)) {
      throw new ValidationError(
        "Session ID is required to save game state",
        { sessionId: "Session ID is required" },
        { entity: "game-state-actions" }
      );
    }

    // Verify the session exists and is active
    await verifyGameSession(sessionId);

    const engine = new GameEngine();
    const state = await engine.saveGameState(sessionId, savePointName);

    logger.debug("Game state saved", {
      context: "server-action",
      metadata: {
        action: "saveGameState",
        sessionId,
        stateId: state.id,
        savePointName,
      },
    });

    return state;
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
 * @param options Optional flags for loading behavior
 * @returns The loaded game state or null if not found
 */
export async function loadGameState(
  stateId: string,
  options: { alreadyProcessed?: boolean } = { alreadyProcessed: true }
): Promise<GameState | null> {
  try {
    if (!isNotEmpty(stateId)) {
      throw new ValidationError(
        "State ID is required to load game state",
        { stateId: "State ID is required" },
        { entity: "game-state-actions" }
      );
    }

    // Set alreadyProcessed to true by default if not specified
    const alreadyProcessed = options.alreadyProcessed ?? true;

    // Create a new GameEngine instance
    const engine = new GameEngine();

    // Load the state with the alreadyProcessed flag to prevent loops
    const state = await engine.loadGameState(stateId, {
      alreadyProcessed,
    });

    logger.debug("Game state loaded", {
      context: "server-action",
      metadata: {
        action: "loadGameState",
        stateId,
        sessionId: state.sessionId,
        alreadyProcessed,
      },
    });

    return state;
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
    const engine = new GameEngine();
    const state = await engine.getGameState(stateId);

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

    logger.debug("Latest game state retrieved", {
      context: "server-action",
      metadata: {
        action: "getLatestGameStateForSession",
        sessionId,
        stateId: latestState?.id || "none",
      },
    });

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
