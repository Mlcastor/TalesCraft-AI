import type { NarrativeHistory } from "@/types/database";
import { BaseRepository } from "./base/BaseRepository";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";
import { Prisma } from "@/generated/prisma";

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

      // Ensure the response has all necessary properties
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
      // Return a default response if parsing fails
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
   * Find a narrative history item by ID
   *
   * @param id Narrative history item ID
   * @returns The narrative history item or null if not found
   */
  async findById(id: string): Promise<NarrativeHistory | null> {
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
    }, "findById");
  }

  /**
   * Find multiple narrative history items based on query parameters
   *
   * @param options Query options
   * @returns Array of narrative history items matching the criteria
   */
  async findMany(options?: {
    where?: Record<string, any>;
    orderBy?: Record<string, "asc" | "desc">;
    take?: number;
    skip?: number;
  }): Promise<NarrativeHistory[]> {
    return this.executeOperation(async (client) => {
      const items = await client.narrativeHistory.findMany({
        where: options?.where,
        orderBy: options?.orderBy,
        take: options?.take,
        skip: options?.skip,
      });

      // Parse content for each item based on its type
      return items.map((item) => ({
        ...item,
        content: parseContent(item.content, item.type),
      }));
    }, "findMany");
  }

  /**
   * Create a new narrative history item
   *
   * @param data Narrative history item creation data
   * @returns The created narrative history item
   */
  async create(
    data: Prisma.NarrativeHistoryCreateInput
  ): Promise<NarrativeHistory> {
    return this.executeOperation(async (client) => {
      const item = await client.narrativeHistory.create({
        data,
      });

      return {
        ...item,
        content: parseContent(item.content, item.type),
      };
    }, "create");
  }

  /**
   * Update a narrative history item
   *
   * @param id Narrative history item ID
   * @param data Data to update
   * @returns The updated narrative history item
   * @throws RecordNotFoundError if the item does not exist
   */
  async update(
    id: string,
    data: Prisma.NarrativeHistoryUpdateInput
  ): Promise<NarrativeHistory> {
    try {
      return await this.executeOperation(async (client) => {
        const item = await client.narrativeHistory.update({
          where: { id },
          data,
        });

        return {
          ...item,
          content: parseContent(item.content, item.type),
        };
      }, "update");
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("NarrativeHistory", id);
      }
      throw error;
    }
  }

  /**
   * Delete a narrative history item
   *
   * @param id Narrative history item ID
   * @returns True if the item was deleted
   * @throws RecordNotFoundError if the item does not exist
   */
  async delete(id: string): Promise<boolean> {
    try {
      await this.executeOperation(
        (client) =>
          client.narrativeHistory.delete({
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
        throw new RecordNotFoundError("NarrativeHistory", id);
      }
      throw error;
    }
  }

  /**
   * Count narrative history items matching criteria
   *
   * @param where Filter criteria
   * @returns Number of matching items
   */
  async count(where?: Record<string, any>): Promise<number> {
    return this.executeOperation(
      (client) => client.narrativeHistory.count({ where }),
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
   * Find narrative history items by game state ID
   *
   * @param gameStateId Game state ID
   * @returns Array of narrative history items
   */
  async findByGameStateId(gameStateId: string): Promise<NarrativeHistory[]> {
    return this.findMany({
      where: { gameStateId },
      orderBy: { timestamp: "asc" },
    });
  }

  /**
   * Find narrative history items by game state ID and type
   *
   * @param gameStateId Game state ID
   * @param type Narrative item type
   * @returns Array of narrative history items
   */
  async findByGameStateIdAndType(
    gameStateId: string,
    type: string
  ): Promise<NarrativeHistory[]> {
    return this.findMany({
      where: { gameStateId, type },
      orderBy: { timestamp: "asc" },
    });
  }

  /**
   * Find recent narrative history items by game state ID
   *
   * @param gameStateId Game state ID
   * @param limit Maximum number of items to return
   * @returns Array of narrative history items
   */
  async findRecentByGameStateId(
    gameStateId: string,
    limit?: number
  ): Promise<NarrativeHistory[]> {
    return this.findMany({
      where: { gameStateId },
      orderBy: { timestamp: "desc" },
      take: limit,
    });
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
      content: any;
    }>
  ): Promise<NarrativeHistory[]> {
    return this.executeTransaction(async (tx) => {
      // First delete existing narrative history for this game state
      await tx.narrativeHistory.deleteMany({
        where: { gameStateId },
      });

      if (items.length === 0) {
        return [];
      }

      // Then serialize each content item and create new entries
      const serializedItems = items.map((item) => {
        // Handle content serialization based on type
        let serializedContent: string;
        if (typeof item.content === "string") {
          serializedContent = item.content;
        } else {
          // For objects, stringify them
          try {
            serializedContent = JSON.stringify(item.content);
          } catch (e) {
            console.error("Error serializing content:", e);
            serializedContent =
              typeof item.content === "object"
                ? JSON.stringify({ text: "Error serializing content" })
                : String(item.content);
          }
        }

        return tx.narrativeHistory.create({
          data: {
            gameStateId,
            type: item.type,
            content: serializedContent,
          },
        });
      });

      // Wait for all creations to complete
      const results = await Promise.all(serializedItems);

      // Parse content in returned items
      return results.map((item) => ({
        ...item,
        content: parseContent(item.content, item.type),
      }));
    });
  }

  /**
   * Delete all narrative history items for a game state
   *
   * @param gameStateId Game state ID
   * @returns Number of deleted items
   */
  async deleteByGameStateId(gameStateId: string): Promise<number> {
    const result = await this.executeOperation(
      (client) =>
        client.narrativeHistory.deleteMany({
          where: { gameStateId },
        }),
      "deleteByGameStateId"
    );

    return result.count;
  }
}

// Export singleton instance
export const narrativeHistoryRepository = new NarrativeHistoryRepository();
