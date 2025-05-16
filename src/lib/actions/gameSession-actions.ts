"use server";

import { ValidationError } from "@/lib/errors/DatabaseError";
import { gameEngine } from "@/lib/game-engine";
import { gameSessionService } from "@/lib/services/GameSessionService";
import { logger } from "@/lib/utils/logger";
import { GameSession, GameState } from "@/types/game";
import { isNotEmpty } from "@/lib/utils/validation";
import { sessionController } from "@/lib/game-engine/SessionController";
import { getLatestGameStateForSession } from "./game-state-actions";

/**
 * Start a new game session
 *
 * @param characterId The character ID to use for the session
 * @param worldId The world ID to use for the session
 * @returns Object containing the created session and initial game state
 */
export async function startGame(
  characterId: string,
  worldId: string
): Promise<{
  session: GameSession;
  initialState: GameState;
}> {
  try {
    // Validate inputs
    if (!isNotEmpty(characterId)) {
      throw new ValidationError(
        "Character ID is required",
        { characterId: "Character ID is required" },
        { entity: "gameSession-actions" }
      );
    }

    if (!isNotEmpty(worldId)) {
      throw new ValidationError(
        "World ID is required",
        { worldId: "World ID is required" },
        { entity: "gameSession-actions" }
      );
    }

    // Use the GameEngine to start the game (creates session and bare initial state)
    const { session, initialState: bareInitialState } =
      await gameEngine.startGame(characterId, worldId);
    logger.debug("Initial session and bare game state created", {
      context: "server-action",
      metadata: {
        action: "startGame",
        sessionId: session.id,
        stateId: bareInitialState.id,
      },
    });

    // Now, generate the initial narrative for this new session/state
    // This call should ensure the GameState in GameStateManager is updated and persisted.
    await gameEngine.generateNarrative(session.id);
    logger.debug("Initial narrative generated for session", {
      context: "server-action",
      metadata: { action: "startGame", sessionId: session.id },
    });

    // Fetch the latest game state ID for the session, which should now be populated
    const latestStateId = await getLatestGameStateForSession(session.id);
    if (!latestStateId) {
      logger.error(
        "Failed to retrieve latest game state ID after narrative generation.",
        {
          context: "server-action",
          metadata: { action: "startGame", sessionId: session.id },
        }
      );
      throw new Error(
        "Failed to retrieve latest game state after narrative generation."
      );
    }

    // Fetch the updated state which should now include the initial narrative and decisions
    const populatedInitialState = await gameEngine.getGameState(latestStateId);

    if (!populatedInitialState) {
      logger.error(
        "Failed to load populated initial game state even with latestStateId.",
        {
          context: "server-action",
          metadata: {
            action: "startGame",
            sessionId: session.id,
            latestStateId,
          },
        }
      );
      throw new Error("Failed to load populated initial game state.");
    }

    logger.debug("Populated initial game state fetched for startGame action", {
      context: "server-action",
      metadata: {
        action: "startGame",
        sessionId: session.id,
        stateId: populatedInitialState.id,
        hasNarrative: !!populatedInitialState.narrative?.text,
        decisionCount: populatedInitialState.decisions?.length || 0,
      },
    });

    return {
      session,
      initialState: populatedInitialState,
    };
  } catch (error) {
    logger.error("Failed to start game session action", {
      context: "server-action",
      metadata: {
        action: "startGame",
        characterId,
        worldId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Load an existing game session
 *
 * @param sessionId The session ID to load
 * @returns Object containing the loaded session and game state
 */
export async function loadGame(sessionId: string): Promise<{
  session: GameSession;
  state: GameState;
}> {
  try {
    // Validate inputs
    if (!isNotEmpty(sessionId)) {
      throw new ValidationError(
        "Session ID is required",
        { sessionId: "Session ID is required" },
        { entity: "gameSession-actions" }
      );
    }

    // Use the GameEngine to load the game
    const { session, state } = await gameEngine.loadGame(sessionId);

    logger.info("Game loaded", {
      context: "server-action",
      metadata: {
        action: "loadGame",
        sessionId,
      },
    });

    return { session, state };
  } catch (error) {
    logger.error("Failed to load game", {
      context: "server-action",
      metadata: {
        action: "loadGame",
        sessionId,
        error,
      },
    });

    throw error;
  }
}

/**
 * End an active game session
 *
 * @param sessionId The session ID to end
 * @returns The ended game session
 */
export async function endGame(sessionId: string): Promise<GameSession> {
  try {
    // Validate inputs
    if (!isNotEmpty(sessionId)) {
      throw new ValidationError(
        "Session ID is required",
        { sessionId: "Session ID is required" },
        { entity: "gameSession-actions" }
      );
    }

    // Use the GameEngine to end the game
    const session = await gameEngine.endGame(sessionId);

    logger.info("Game ended", {
      context: "server-action",
      metadata: {
        action: "endGame",
        sessionId,
        duration: session.durationSeconds,
      },
    });

    return session;
  } catch (error) {
    logger.error("Failed to end game", {
      context: "server-action",
      metadata: {
        action: "endGame",
        sessionId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Get all game sessions for a character
 *
 * @param characterId The character ID to get sessions for
 * @returns Array of game sessions
 */
export async function getGameSessions(
  characterId: string
): Promise<GameSession[]> {
  try {
    // Validate inputs
    if (!isNotEmpty(characterId)) {
      throw new ValidationError(
        "Character ID is required",
        { characterId: "Character ID is required" },
        { entity: "gameSession-actions" }
      );
    }

    // Use the GameEngine to get the game sessions
    const sessions = await gameEngine.getGameSessions(characterId);

    logger.debug("Game sessions retrieved", {
      context: "server-action",
      metadata: {
        action: "getGameSessions",
        characterId,
        sessionCount: sessions.length,
      },
    });

    return sessions;
  } catch (error) {
    logger.error("Failed to get game sessions", {
      context: "server-action",
      metadata: {
        action: "getGameSessions",
        characterId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Verify a game session exists and is active
 *
 * @param sessionId The session ID to verify
 * @returns The verified game session
 * @throws Error if session is invalid or inactive
 */
export async function verifyGameSession(
  sessionId: string
): Promise<GameSession> {
  try {
    // Validate input
    if (!isNotEmpty(sessionId)) {
      throw new ValidationError(
        "Session ID is required",
        { sessionId: "Session ID is required" },
        { entity: "gameSession-actions" }
      );
    }

    // Use the SessionController to get the session
    // This handles the proper type conversion from DB to engine types
    const session = await sessionController.getSession(sessionId);

    if (!session) {
      logger.warn(`Game session ${sessionId} not found`);
      throw new ValidationError(
        "Game session not found",
        { sessionId: "Invalid game session ID" },
        { entity: "gameSession-actions" }
      );
    }

    if (!session.isActive) {
      logger.warn(`Game session ${sessionId} is not active`);
      throw new ValidationError(
        "Game session is not active",
        { sessionId: "Session has ended" },
        { entity: "gameSession-actions" }
      );
    }

    // Update the session's activity timestamp
    await sessionController.updateSessionActivity(sessionId);

    return session;
  } catch (error) {
    logger.error("Failed to verify game session", {
      context: "server-action",
      metadata: {
        action: "verifyGameSession",
        sessionId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Get or create a game session for a character in a world
 *
 * @param characterId The character ID
 * @param worldId The world ID
 * @returns The session ID for the game session
 */
export async function getOrCreateGameSession(
  characterId: string,
  worldId: string
): Promise<string> {
  try {
    // First check if the character has any active sessions in this world
    const dbSessions = await gameSessionService.getSessions(characterId);

    const activeSessionInWorld = dbSessions.find(
      (session) =>
        session.isActive &&
        (session.sessionData as Record<string, any>)?.worldId === worldId
    );

    // If an active session exists, return its ID
    if (activeSessionInWorld) {
      // Update activity timestamp
      await gameSessionService.updateSessionActivity(activeSessionInWorld.id);
      return activeSessionInWorld.id;
    }

    // If no active session exists, create a new one using startGame
    const { session } = await startGame(characterId, worldId);

    return session.id;
  } catch (error) {
    logger.error("Failed to get or create game session", {
      context: "server-action",
      metadata: {
        action: "getOrCreateGameSession",
        characterId,
        worldId,
        error,
      },
    });
    throw error;
  }
}
