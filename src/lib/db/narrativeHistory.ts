import { prisma } from "./prisma";
import type { AIResponse } from "@/lib/ai/aiService";
import type {
  NarrativeHistoryCreate,
  NarrativeHistory,
} from "@/types/database";
import { BaseRepository } from "./base/BaseRepository";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";

/**
 * Helper function to safely parse content from string to object
 * @param content - The content string to parse
 * @param type - The type of content (narrative or playerResponse)
 * @returns The parsed content or the original string if parsing fails
 */
function parseContent(content: string, type: string): any {
  if (type === "narrative") {
    try {
      const parsed = JSON.parse(content);

      // Ensure the AIResponse has all necessary properties
      if (parsed) {
        // Make sure there's a text property
        if (!parsed.text) {
          parsed.text = "The narrative continues...";
        }

        // Make sure there are choices
        if (
          !parsed.choices ||
          !Array.isArray(parsed.choices) ||
          parsed.choices.length === 0
        ) {
          parsed.choices = [
            { id: "continue_1", text: "Continue exploring" },
            { id: "continue_2", text: "Look around more carefully" },
          ];
        }

        // Make sure each choice has an id and text
        parsed.choices = parsed.choices.map((choice: any, index: number) => ({
          id: choice.id || `choice_${index + 1}`,
          text: choice.text || `Option ${index + 1}`,
          ...choice,
        }));

        // Make sure metadata exists
        if (!parsed.metadata) {
          parsed.metadata = {};
        }
      }

      return parsed;
    } catch (e) {
      console.error("Error parsing narrative content:", e);
      // Return a default AIResponse if parsing fails
      return {
        text: content || "The narrative continues...",
        choices: [
          { id: "fallback_1", text: "Continue exploring" },
          { id: "fallback_2", text: "Look around more carefully" },
        ],
        metadata: {},
      };
    }
  }
  // For player responses, just return the content as is
  return content;
}

/**
 * Repository for narrative history-related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class NarrativeHistoryRepository extends BaseRepository {
  /**
   * Create a new NarrativeHistoryRepository instance
   */
  constructor() {
    super("NarrativeHistory");
  }

  /**
   * Create a new narrative history item
   *
   * @param data Narrative history item creation data
   * @returns The created narrative history item
   */
  async createNarrativeHistoryItem(data: NarrativeHistoryCreate) {
    return this.executeOperation(
      (client) =>
        client.narrativeHistory.create({
          data,
        }),
      "createNarrativeHistoryItem"
    );
  }

  /**
   * Get all narrative history items for a game state
   *
   * @param gameStateId Game state ID
   * @param options Optional pagination options
   * @returns Array of narrative history items
   */
  async getNarrativeHistoryByGameStateId(
    gameStateId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(async (client) => {
      const history = await client.narrativeHistory.findMany({
        where: { gameStateId },
        orderBy: { timestamp: "asc" }, // Order by timestamp ascending to maintain conversation flow
        ...(options?.limit ? { take: options.limit } : {}),
        ...(options?.offset ? { skip: options.offset } : {}),
      });

      // Parse content for each item based on its type
      return history.map((item) => ({
        ...item,
        content: parseContent(item.content, item.type),
      }));
    }, "getNarrativeHistoryByGameStateId");
  }

  /**
   * Get a single narrative history item by ID
   *
   * @param id Narrative history item ID
   * @returns The narrative history item
   * @throws RecordNotFoundError if the item does not exist
   */
  async getNarrativeHistoryItemById(id: string) {
    return this.executeOperation(async (client) => {
      const item = await client.narrativeHistory.findUnique({
        where: { id },
      });

      if (!item) {
        throw new RecordNotFoundError("NarrativeHistory", id);
      }

      return {
        ...item,
        content: parseContent(item.content, item.type),
      };
    }, "getNarrativeHistoryItemById");
  }

  /**
   * Find a narrative history item by ID (returns null if not found)
   *
   * @param id Narrative history item ID
   * @returns The narrative history item or null if not found
   */
  async findNarrativeHistoryItemById(id: string) {
    return this.executeOperation(async (client) => {
      const item = await client.narrativeHistory.findUnique({
        where: { id },
      });

      if (!item) {
        return null;
      }

      return {
        ...item,
        content: parseContent(item.content, item.type),
      };
    }, "findNarrativeHistoryItemById");
  }

  /**
   * Save multiple narrative history items at once
   *
   * @param gameStateId Game state ID
   * @param items Array of narrative items with type and content
   * @returns Array of created narrative history items
   */
  async saveNarrativeHistory(
    gameStateId: string,
    items: Array<{
      type: string;
      content: AIResponse | string;
    }>
  ) {
    return this.executeTransaction(async (tx) => {
      // First delete existing narrative history for this game state
      await tx.narrativeHistory.deleteMany({
        where: { gameStateId },
      });

      if (items.length === 0) {
        return [];
      }

      // Then serialize each content item
      const serializedItems = items.map((item) => {
        // Handle content serialization based on type
        let serializedContent: string;

        if (item.type === "playerResponse") {
          // For player responses, just store the string content
          serializedContent =
            typeof item.content === "string"
              ? item.content
              : String(item.content);
        } else {
          // For narrative items, ensure it's a properly formatted AIResponse
          if (typeof item.content === "string") {
            // If it's already a string, just use it
            serializedContent = item.content;
          } else {
            // Make sure the AIResponse has required properties before serializing
            const aiResponse = item.content as AIResponse;

            // Ensure choices exist and are properly formatted
            if (!aiResponse.choices || !Array.isArray(aiResponse.choices)) {
              aiResponse.choices = [
                { id: "save_1", text: "Continue exploring" },
                { id: "save_2", text: "Look around more carefully" },
              ];
            }

            // Serialize to JSON
            serializedContent = JSON.stringify(aiResponse);
          }
        }

        return {
          gameState: {
            connect: { id: gameStateId },
          },
          type: item.type,
          content: serializedContent,
        };
      });

      // Create all items in the transaction
      const results: NarrativeHistory[] = [];
      for (const item of serializedItems) {
        const result = await tx.narrativeHistory.create({ data: item });
        results.push(result);
      }

      return results;
    });
  }

  /**
   * Delete all narrative history for a game state
   *
   * @param gameStateId Game state ID
   * @returns Object with count of deleted items
   */
  async deleteNarrativeHistoryByGameStateId(gameStateId: string) {
    return this.executeOperation(
      (client) =>
        client.narrativeHistory.deleteMany({
          where: { gameStateId },
        }),
      "deleteNarrativeHistoryByGameStateId"
    );
  }

  /**
   * Count narrative history items for a game state
   *
   * @param gameStateId Game state ID
   * @returns Number of narrative history items
   */
  async countNarrativeHistoryByGameStateId(
    gameStateId: string
  ): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.narrativeHistory.count({
          where: { gameStateId },
        }),
      "countNarrativeHistoryByGameStateId"
    );
  }
}

// Export singleton instance
export const narrativeHistoryRepository = new NarrativeHistoryRepository();

// Backwards compatibility exports
export const createNarrativeHistoryItem =
  narrativeHistoryRepository.createNarrativeHistoryItem.bind(
    narrativeHistoryRepository
  );
export const getNarrativeHistoryByGameStateId =
  narrativeHistoryRepository.getNarrativeHistoryByGameStateId.bind(
    narrativeHistoryRepository
  );
export const saveNarrativeHistory =
  narrativeHistoryRepository.saveNarrativeHistory.bind(
    narrativeHistoryRepository
  );
export const deleteNarrativeHistoryByGameStateId =
  narrativeHistoryRepository.deleteNarrativeHistoryByGameStateId.bind(
    narrativeHistoryRepository
  );
