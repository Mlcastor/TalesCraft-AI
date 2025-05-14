import type { Decision } from "@/types/database";
import { BaseRepository } from "./base/BaseRepository";
import { Prisma } from "@/generated/prisma";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";

/**
 * Repository for decision-related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class DecisionRepository extends BaseRepository {
  /**
   * Create a new DecisionRepository instance
   */
  constructor() {
    super("Decision");
  }

  /**
   * Find a decision by ID
   *
   * @param id Decision ID
   * @returns The decision or null if not found
   */
  async findById(id: string): Promise<Decision | null> {
    return this.executeOperation(
      (client) =>
        client.decision.findUnique({
          where: { id },
        }),
      "findById"
    );
  }

  /**
   * Find multiple decisions based on query parameters
   *
   * @param options Query options
   * @returns Array of decisions matching the criteria
   */
  async findMany(options?: {
    where?: Record<string, any>;
    orderBy?: Record<string, "asc" | "desc">;
    take?: number;
    skip?: number;
  }): Promise<Decision[]> {
    return this.executeOperation(
      (client) =>
        client.decision.findMany({
          where: options?.where,
          orderBy: options?.orderBy,
          take: options?.take,
          skip: options?.skip,
        }),
      "findMany"
    );
  }

  /**
   * Create a new decision
   *
   * @param data Decision creation data
   * @returns The created decision
   */
  async create(data: Prisma.DecisionCreateInput): Promise<Decision> {
    return this.executeOperation(
      (client) =>
        client.decision.create({
          data: {
            ...data,
            relatedNpcIds: data.relatedNpcIds || [],
            consequences: data.consequences || {},
          },
        }),
      "create"
    );
  }

  /**
   * Update a decision
   *
   * @param id Decision ID
   * @param data Data to update
   * @returns The updated decision
   * @throws RecordNotFoundError if the decision does not exist
   */
  async update(
    id: string,
    data: Prisma.DecisionUpdateInput
  ): Promise<Decision> {
    try {
      return await this.executeOperation(
        (client) =>
          client.decision.update({
            where: { id },
            data,
          }),
        "update"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("Decision", id);
      }
      throw error;
    }
  }

  /**
   * Delete a decision
   *
   * @param id Decision ID
   * @returns True if the decision was deleted
   * @throws RecordNotFoundError if the decision does not exist
   */
  async delete(id: string): Promise<boolean> {
    try {
      await this.executeOperation(
        (client) =>
          client.decision.delete({
            where: { id },
          }),
        "delete"
      );
      return true;
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("Decision", id);
      }
      throw error;
    }
  }

  /**
   * Count decisions matching criteria
   *
   * @param where Filter criteria
   * @returns Number of matching decisions
   */
  async count(where?: Record<string, any>): Promise<number> {
    return this.executeOperation(
      (client) => client.decision.count({ where }),
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
   * Find decisions by game state ID
   *
   * @param gameStateId Game state ID
   * @param options Optional pagination options
   * @returns Array of decisions
   */
  async findByGameStateId(
    gameStateId: string,
    options?: { limit?: number; offset?: number }
  ): Promise<Decision[]> {
    return this.findMany({
      where: { gameStateId },
      orderBy: { timestamp: "desc" },
      take: options?.limit,
      skip: options?.offset,
    });
  }

  /**
   * Find decisions by decision point ID
   *
   * @param decisionPointId Decision point ID
   * @param options Optional pagination options
   * @returns Array of decisions
   */
  async findByDecisionPointId(
    decisionPointId: string,
    options?: { limit?: number; offset?: number }
  ): Promise<Decision[]> {
    return this.findMany({
      where: { decisionPointId },
      orderBy: { timestamp: "desc" },
      take: options?.limit,
      skip: options?.offset,
    });
  }

  /**
   * Find decisions involving specific NPCs
   *
   * @param npcIds NPC IDs
   * @param options Optional pagination options
   * @returns Array of decisions
   */
  async findInvolvingNpcs(
    npcIds: string[],
    options?: { limit?: number; offset?: number }
  ): Promise<Decision[]> {
    return this.findMany({
      where: {
        relatedNpcIds: {
          hasSome: npcIds,
        },
      },
      orderBy: { timestamp: "desc" },
      take: options?.limit,
      skip: options?.offset,
    });
  }

  /**
   * Find recent decisions by character ID
   *
   * @param characterId Character ID
   * @param limit Maximum number of decisions to return
   * @returns Array of decisions
   */
  async findRecentByCharacterId(
    characterId: string,
    limit?: number
  ): Promise<Decision[]> {
    return this.executeOperation(async (client) => {
      // First find all game state IDs associated with this character
      const gameSessions = await client.gameSession.findMany({
        where: { characterId },
        select: {
          id: true,
          gameStates: {
            select: { id: true },
          },
        },
      });

      // Extract all game state IDs
      const gameStateIds = gameSessions.flatMap((session) =>
        session.gameStates.map((state) => state.id)
      );

      // Find decisions for these game states
      return client.decision.findMany({
        where: {
          gameStateId: { in: gameStateIds },
        },
        orderBy: { timestamp: "desc" },
        take: limit,
      });
    }, "findRecentByCharacterId");
  }

  /**
   * Create multiple decisions in a transaction
   *
   * @param decisions Array of decision creation data
   * @returns Array of created decisions
   */
  async createMany(
    decisions: Prisma.DecisionCreateInput[]
  ): Promise<Decision[]> {
    return this.executeTransaction(async (tx) => {
      const results: Decision[] = [];

      for (const decision of decisions) {
        const created = await tx.decision.create({
          data: {
            ...decision,
            relatedNpcIds: decision.relatedNpcIds || [],
            consequences: decision.consequences || {},
          },
        });

        results.push(created);
      }

      return results;
    });
  }
}

// Export singleton instance
export const decisionRepository = new DecisionRepository();
