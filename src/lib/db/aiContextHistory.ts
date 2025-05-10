import { prisma } from "./prisma";
import type {
  AIContextHistory,
  AIContextHistoryCreate,
} from "@/types/database";

/**
 * Repository for AI context history-related database operations
 */
export const aiContextHistoryRepository = {
  /**
   * Create a new AI context history entry
   *
   * @param data AI context history creation data
   * @returns The created AI context history entry
   */
  async createAIContextHistory(data: AIContextHistoryCreate) {
    return prisma.aIContextHistory.create({
      data,
    });
  },

  /**
   * Get an AI context history entry by ID
   *
   * @param id AI context history ID
   * @returns The AI context history entry or null if not found
   */
  async getAIContextHistoryById(id: string) {
    return prisma.aIContextHistory.findUnique({
      where: { id },
    });
  },

  /**
   * Get all AI context history entries for a game state
   *
   * @param gameStateId Game state ID
   * @returns Array of AI context history entries
   */
  async getAIContextHistoryByGameStateId(gameStateId: string) {
    return prisma.aIContextHistory.findMany({
      where: { gameStateId },
      orderBy: { timestamp: "desc" },
    });
  },

  /**
   * Get AI context history entries by context type
   *
   * @param contextType Context type
   * @param limit Maximum number of entries to return
   * @returns Array of AI context history entries
   */
  async getAIContextHistoryByType(contextType: string, limit: number = 10) {
    return prisma.aIContextHistory.findMany({
      where: { contextType },
      orderBy: { timestamp: "desc" },
      take: limit,
    });
  },

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
    return prisma.aIContextHistory.findMany({
      where: {
        gameStateId,
        relevanceScore: {
          gte: minRelevanceScore,
        },
      },
      orderBy: [{ relevanceScore: "desc" }, { timestamp: "desc" }],
      take: limit,
    });
  },

  /**
   * Get token usage statistics for a game state
   *
   * @param gameStateId Game state ID
   * @returns Object with total prompt and completion tokens
   */
  async getTokenUsageStats(gameStateId: string) {
    const result = await prisma.aIContextHistory.aggregate({
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
  },
};
