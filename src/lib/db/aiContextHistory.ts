import { prisma } from "./prisma";
import type {
  AIContextHistory,
  AIContextHistoryCreate,
} from "@/types/database";
import { BaseRepository } from "./base/BaseRepository";
import { Prisma } from "@/generated/prisma";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";

/**
 * Repository for AI context history-related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class AIContextHistoryRepository extends BaseRepository {
  /**
   * Create a new AIContextHistoryRepository instance
   */
  constructor() {
    super("AIContextHistory");
  }

  /**
   * Create a new AI context history entry
   *
   * @param data AI context history creation data
   * @returns The created AI context history entry
   */
  async createAIContextHistory(data: AIContextHistoryCreate) {
    return this.executeOperation(
      (client) =>
        client.aIContextHistory.create({
          data,
        }),
      "createAIContextHistory"
    );
  }

  /**
   * Get an AI context history entry by ID
   *
   * @param id AI context history ID
   * @returns The AI context history entry
   * @throws RecordNotFoundError if the entry does not exist
   */
  async getAIContextHistoryById(id: string) {
    return this.executeOperation(async (client) => {
      const history = await client.aIContextHistory.findUnique({
        where: { id },
      });

      return this.ensureExists(history, id);
    }, "getAIContextHistoryById");
  }

  /**
   * Find an AI context history entry by ID (returns null if not found)
   *
   * @param id AI context history ID
   * @returns The AI context history entry or null if not found
   */
  async findAIContextHistoryById(id: string) {
    return this.executeOperation(
      (client) =>
        client.aIContextHistory.findUnique({
          where: { id },
        }),
      "findAIContextHistoryById"
    );
  }

  /**
   * Get all AI context history entries for a game state
   *
   * @param gameStateId Game state ID
   * @param options Optional pagination options
   * @returns Array of AI context history entries
   */
  async getAIContextHistoryByGameStateId(
    gameStateId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.aIContextHistory.findMany({
          where: { gameStateId },
          orderBy: { timestamp: "desc" },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getAIContextHistoryByGameStateId"
    );
  }

  /**
   * Get AI context history entries by context type
   *
   * @param contextType Context type
   * @param limit Maximum number of entries to return
   * @returns Array of AI context history entries
   */
  async getAIContextHistoryByType(contextType: string, limit: number = 10) {
    return this.executeOperation(
      (client) =>
        client.aIContextHistory.findMany({
          where: { contextType },
          orderBy: { timestamp: "desc" },
          take: limit,
        }),
      "getAIContextHistoryByType"
    );
  }

  /**
   * Get most relevant AI context history entries for a game state
   *
   * @param gameStateId Game state ID
   * @param minRelevanceScore Minimum relevance score
   * @param limit Maximum number of entries to return
   * @returns Array of AI context history entries
   */
  async getRelevantAIContextHistory(
    gameStateId: string,
    minRelevanceScore: number = 0.7,
    limit: number = 5
  ) {
    return this.executeOperation(
      (client) =>
        client.aIContextHistory.findMany({
          where: {
            gameStateId,
            relevanceScore: {
              gte: minRelevanceScore,
            },
          },
          orderBy: [{ relevanceScore: "desc" }, { timestamp: "desc" }],
          take: limit,
        }),
      "getRelevantAIContextHistory"
    );
  }

  /**
   * Get token usage statistics for a game state
   *
   * @param gameStateId Game state ID
   * @returns Object with total prompt and completion tokens
   */
  async getTokenUsageStats(gameStateId: string) {
    return this.executeOperation(async (client) => {
      const result = await client.aIContextHistory.aggregate({
        where: { gameStateId },
        _sum: {
          promptTokens: true,
          completionTokens: true,
        },
      });

      return {
        promptTokens: result._sum.promptTokens || 0,
        completionTokens: result._sum.completionTokens || 0,
      };
    }, "getTokenUsageStats");
  }

  /**
   * Save multiple AI context history entries in a transaction
   *
   * @param entries Array of AI context history entries to create
   * @returns Array of created entries
   */
  async bulkCreateAIContextHistory(entries: AIContextHistoryCreate[]) {
    return this.executeTransaction(async (tx) => {
      const results = [];

      for (const entry of entries) {
        const result = await tx.aIContextHistory.create({
          data: entry,
        });
        results.push(result);
      }

      return results;
    });
  }

  /**
   * Delete AI context history entries older than a specified date
   *
   * @param olderThan Date threshold for deletion
   * @param gameStateId Optional game state ID to filter by
   * @returns Number of deleted entries
   */
  async deleteOldContextHistory(olderThan: Date, gameStateId?: string) {
    return this.executeOperation(
      (client) =>
        client.aIContextHistory.deleteMany({
          where: {
            timestamp: {
              lt: olderThan,
            },
            ...(gameStateId ? { gameStateId } : {}),
          },
        }),
      "deleteOldContextHistory"
    );
  }
}

// Export singleton instance
export const aiContextHistoryRepository = new AIContextHistoryRepository();
