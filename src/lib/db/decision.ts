import { prisma } from "./prisma";
import type { Decision, DecisionCreate } from "@/types/database";
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
   * Create a new decision
   *
   * @param data Decision creation data
   * @returns The created decision
   */
  async createDecision(data: DecisionCreate) {
    return this.executeOperation(
      (client) =>
        client.decision.create({
          data: {
            ...data,
            relatedNpcIds: data.relatedNpcIds || [],
            consequences: data.consequences || {},
          },
        }),
      "createDecision"
    );
  }

  /**
   * Get a decision by ID
   *
   * @param id Decision ID
   * @returns The decision
   * @throws RecordNotFoundError if the decision does not exist
   */
  async getDecisionById(id: string) {
    return this.executeOperation(async (client) => {
      const decision = await client.decision.findUnique({
        where: { id },
      });

      return this.ensureExists(decision, id);
    }, "getDecisionById");
  }

  /**
   * Find a decision by ID (returns null if not found)
   *
   * @param id Decision ID
   * @returns The decision or null if not found
   */
  async findDecisionById(id: string) {
    return this.executeOperation(
      (client) =>
        client.decision.findUnique({
          where: { id },
        }),
      "findDecisionById"
    );
  }

  /**
   * Get all decisions for a game state
   *
   * @param gameStateId Game state ID
   * @param options Optional pagination options
   * @returns Array of decisions
   */
  async getDecisionsByGameStateId(
    gameStateId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.decision.findMany({
          where: { gameStateId },
          orderBy: { timestamp: "desc" },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getDecisionsByGameStateId"
    );
  }

  /**
   * Get all decisions for a specific decision point
   *
   * @param decisionPointId Decision point ID
   * @param options Optional pagination options
   * @returns Array of decisions
   */
  async getDecisionsByDecisionPointId(
    decisionPointId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.decision.findMany({
          where: { decisionPointId },
          orderBy: { timestamp: "desc" },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getDecisionsByDecisionPointId"
    );
  }

  /**
   * Get decisions involving specific NPCs
   *
   * @param npcIds NPC IDs
   * @param options Optional pagination options
   * @returns Array of decisions
   */
  async getDecisionsInvolvingNpcs(
    npcIds: string[],
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.decision.findMany({
          where: {
            relatedNpcIds: {
              hasSome: npcIds,
            },
          },
          orderBy: { timestamp: "desc" },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getDecisionsInvolvingNpcs"
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
  async updateDecision(
    id: string,
    data: Partial<Omit<DecisionCreate, "gameState" | "playerChoice">>
  ) {
    try {
      return await this.executeOperation(
        (client) =>
          client.decision.update({
            where: { id },
            data,
          }),
        "updateDecision"
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
   * @returns The deleted decision
   * @throws RecordNotFoundError if the decision does not exist
   */
  async deleteDecision(id: string) {
    try {
      return await this.executeOperation(
        (client) =>
          client.decision.delete({
            where: { id },
          }),
        "deleteDecision"
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
   * Count decisions for a game state
   *
   * @param gameStateId Game state ID
   * @returns Number of decisions
   */
  async countDecisionsForGameState(gameStateId: string): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.decision.count({
          where: { gameStateId },
        }),
      "countDecisionsForGameState"
    );
  }

  /**
   * Create multiple decisions in a transaction
   *
   * @param decisions Array of decision creation data
   * @returns Array of created decisions
   */
  async createManyDecisions(decisions: DecisionCreate[]): Promise<Decision[]> {
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
