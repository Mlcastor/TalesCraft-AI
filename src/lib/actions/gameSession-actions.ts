"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { GameSession } from "@/types/database";
import { ValidationError } from "@/lib/errors/DatabaseError";
import { gameSessionService } from "@/lib/services/GameSessionService";
import { gameStateService } from "@/lib/services/GameStateService";
import { logger } from "@/lib/utils/logger";

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
    const activeSessions = await gameSessionService.getSessions(characterId);

    const activeSessionInWorld = activeSessions.find(
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

    // Create a new session
    const newSession = await gameSessionService.createSession(
      characterId,
      worldId
    );
    logger.info(
      `Created new game session ${newSession.id} for character ${characterId} in world ${worldId}`
    );

    return newSession.id;
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
    const session = await gameSessionService.getSession(sessionId);

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
    await gameSessionService.updateSessionActivity(sessionId);

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
 * End a game session
 *
 * @param sessionId The session ID to end
 * @returns The ended game session
 */
export async function endGameSession(sessionId: string): Promise<GameSession> {
  try {
    const session = await gameSessionService.endSession(sessionId);

    // Revalidate any cached pages that might show session lists
    revalidatePath("/player-hub");

    return session;
  } catch (error) {
    logger.error("Failed to end game session", {
      context: "server-action",
      metadata: {
        action: "endGameSession",
        sessionId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Get the latest game state for a session, useful for resuming gameplay
 *
 * @param sessionId The session ID
 * @returns The latest game state ID, or null if none exists
 */
export async function getLatestGameStateForSession(
  sessionId: string
): Promise<string | null> {
  try {
    // Verify the session exists and is active
    await verifyGameSession(sessionId);

    // Get the latest game state
    const latestState = await gameStateService.getLatestGameState(sessionId);

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
