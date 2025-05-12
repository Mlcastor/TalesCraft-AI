import { prisma } from "./prisma";
import type { GameSession, GameSessionCreate } from "@/types/database";
import { BaseRepository } from "./base/BaseRepository";
import { Prisma } from "@/generated/prisma";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";

/**
 * Repository for game session-related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class GameSessionRepository extends BaseRepository {
  /**
   * Create a new GameSessionRepository instance
   */
  constructor() {
    super("GameSession");
  }

  /**
   * Create a new game session
   *
   * @param data Game session creation data
   * @returns The created game session
   */
  async createGameSession(data: GameSessionCreate) {
    return this.executeOperation(
      (client) =>
        client.gameSession.create({
          data: {
            ...data,
            startedAt: new Date(),
          },
        }),
      "createGameSession"
    );
  }

  /**
   * Get a game session by ID
   *
   * @param id Game session ID
   * @returns The game session
   * @throws RecordNotFoundError if the game session does not exist
   */
  async getGameSessionById(id: string) {
    return this.executeOperation(async (client) => {
      const session = await client.gameSession.findUnique({
        where: { id },
      });

      return this.ensureExists(session, id);
    }, "getGameSessionById");
  }

  /**
   * Check if a session exists
   *
   * @param id Session ID
   * @returns True if the session exists, false otherwise
   */
  async sessionExists(id: string): Promise<boolean> {
    return this.executeOperation(async (client) => {
      const count = await client.gameSession.count({
        where: { id },
      });

      return count > 0;
    }, "sessionExists");
  }

  /**
   * Get all game sessions for a character
   *
   * @param characterId Character ID
   * @param options Optional pagination options
   * @returns Array of game sessions
   */
  async getSessionsByCharacterId(
    characterId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.gameSession.findMany({
          where: { characterId },
          orderBy: { startedAt: "desc" },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getSessionsByCharacterId"
    );
  }

  /**
   * Get the most recent active game session for a character
   *
   * @param characterId Character ID
   * @returns The most recent active game session or null if not found
   */
  async getActiveSessionForCharacter(characterId: string) {
    return this.executeOperation(
      (client) =>
        client.gameSession.findFirst({
          where: {
            characterId,
            endedAt: null,
          },
          orderBy: {
            startedAt: "desc",
          },
        }),
      "getActiveSessionForCharacter"
    );
  }

  /**
   * Update a game session
   *
   * @param id Game session ID
   * @param data Data to update
   * @returns The updated game session
   * @throws RecordNotFoundError if the game session does not exist
   */
  async updateGameSession(
    id: string,
    data: Partial<Omit<GameSessionCreate, "character">>
  ) {
    try {
      return await this.executeOperation(
        (client) =>
          client.gameSession.update({
            where: { id },
            data,
          }),
        "updateGameSession"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("GameSession", id);
      }
      throw error;
    }
  }

  /**
   * End a game session
   *
   * @param id Game session ID
   * @returns The updated game session
   * @throws RecordNotFoundError if the game session does not exist
   */
  async endGameSession(id: string) {
    return this.executeTransaction(async (tx) => {
      // Find the session first to calculate duration
      const session = await tx.gameSession.findUnique({
        where: { id },
        select: { startedAt: true },
      });

      if (!session) {
        throw new RecordNotFoundError("GameSession", id);
      }

      const endedAt = new Date();
      const durationSeconds = Math.floor(
        (endedAt.getTime() - session.startedAt.getTime()) / 1000
      );

      // Update the session with end time and duration
      return tx.gameSession.update({
        where: { id },
        data: {
          endedAt,
          durationSeconds,
        },
      });
    });
  }

  /**
   * Count active sessions for a character
   *
   * @param characterId Character ID
   * @returns Number of active sessions
   */
  async countActiveSessionsForCharacter(characterId: string): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.gameSession.count({
          where: {
            characterId,
            endedAt: null,
          },
        }),
      "countActiveSessionsForCharacter"
    );
  }
}

// Export singleton instance
export const gameSessionRepository = new GameSessionRepository();
