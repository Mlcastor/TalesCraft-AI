import type { GameSession } from "@/types/database";
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
   * Find a game session by ID
   *
   * @param id Game session ID
   * @returns The game session or null if not found
   */
  async findById(id: string): Promise<GameSession | null> {
    return this.executeOperation(
      (client) =>
        client.gameSession.findUnique({
          where: { id },
        }),
      "findById"
    );
  }

  /**
   * Find multiple game sessions based on query parameters
   *
   * @param options Query options
   * @returns Array of game sessions matching the criteria
   */
  async findMany(options?: {
    where?: Record<string, any>;
    orderBy?: Record<string, "asc" | "desc">;
    take?: number;
    skip?: number;
  }): Promise<GameSession[]> {
    return this.executeOperation(
      (client) =>
        client.gameSession.findMany({
          where: options?.where,
          orderBy: options?.orderBy,
          take: options?.take,
          skip: options?.skip,
        }),
      "findMany"
    );
  }

  /**
   * Create a new game session
   *
   * @param data Game session creation data
   * @returns The created game session
   */
  async create(
    data: Omit<GameSession, "id" | "createdAt" | "updatedAt">
  ): Promise<GameSession> {
    return this.executeOperation(
      (client) =>
        client.gameSession.create({
          data: {
            ...data,
            startedAt: data.startedAt || new Date(),
            lastActivityAt: data.lastActivityAt || new Date(),
            isActive: data.isActive !== undefined ? data.isActive : true,
            sessionData: data.sessionData || {},
          },
        }),
      "create"
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
  async update(
    id: string,
    data: Prisma.GameSessionUpdateInput
  ): Promise<GameSession> {
    try {
      return await this.executeOperation(
        (client) =>
          client.gameSession.update({
            where: { id },
            data,
          }),
        "update"
      );
    } catch (error) {
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
   * Delete a game session
   *
   * @param id Game session ID
   * @returns True if the session was deleted
   * @throws RecordNotFoundError if the game session does not exist
   */
  async delete(id: string): Promise<boolean> {
    try {
      await this.executeOperation(
        (client) =>
          client.gameSession.delete({
            where: { id },
          }),
        "delete"
      );
      return true;
    } catch (error) {
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
   * Count game sessions matching criteria
   *
   * @param where Filter criteria
   * @returns Number of matching sessions
   */
  async count(where?: Record<string, any>): Promise<number> {
    return this.executeOperation(
      (client) => client.gameSession.count({ where }),
      "count"
    );
  }

  /**
   * Execute operations within a transaction
   *
   * @param fn Function containing operations to perform within a transaction
   * @returns Result of the transaction
   */
  async transaction<R>(fn: () => Promise<R>): Promise<R> {
    return this.executeTransaction(async (tx) => fn());
  }

  /**
   * Find all game sessions for a character
   *
   * @param characterId Character ID
   * @returns Array of game sessions
   */
  async findByCharacterId(characterId: string): Promise<GameSession[]> {
    return this.findMany({
      where: { characterId },
      orderBy: { startedAt: "desc" },
    });
  }

  /**
   * Find active game sessions for a character
   *
   * @param characterId Character ID
   * @returns Array of active game sessions
   */
  async findActiveByCharacterId(characterId: string): Promise<GameSession[]> {
    return this.findMany({
      where: {
        characterId,
        isActive: true,
        endedAt: null,
      },
      orderBy: { lastActivityAt: "desc" },
    });
  }

  /**
   * Update the last activity timestamp for a session
   *
   * @param id Game session ID
   * @returns The updated game session
   */
  async updateLastActivity(id: string): Promise<GameSession> {
    return this.update(id, {
      lastActivityAt: new Date(),
    });
  }

  /**
   * End a game session
   *
   * @param id Game session ID
   * @returns The updated game session
   */
  async endSession(id: string): Promise<GameSession> {
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
          isActive: false,
        },
      });
    });
  }
}

// Export singleton instance
export const gameSessionRepository = new GameSessionRepository();
