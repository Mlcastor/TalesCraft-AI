import { prisma } from "./prisma";
import type { CharacterCreate } from "@/types/database";
import { BaseRepository } from "./base/BaseRepository";
import { Prisma } from "@/generated/prisma";
import { logger } from "@/lib/utils/logger";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";

/**
 * Repository for character-related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class CharacterRepository extends BaseRepository {
  /**
   * Create a new CharacterRepository instance
   */
  constructor() {
    super("Character");
  }

  /**
   * Create a new character for a user
   *
   * @param data Character creation data
   * @returns The created character
   */
  async createCharacter(data: CharacterCreate) {
    return this.executeOperation(
      (client) => client.character.create({ data }),
      "createCharacter"
    );
  }

  /**
   * Get a character by ID
   *
   * @param id Character ID
   * @returns The character
   * @throws RecordNotFoundError if the character does not exist
   */
  async getCharacterById(id: string) {
    return this.executeOperation(async (client) => {
      const character = await client.character.findUnique({
        where: { id },
      });

      return this.ensureExists(character, id);
    }, "getCharacterById");
  }

  /**
   * Check if a character exists
   *
   * @param id Character ID
   * @returns True if the character exists, false otherwise
   */
  async characterExists(id: string): Promise<boolean> {
    return this.executeOperation(async (client) => {
      const count = await client.character.count({
        where: { id },
      });

      return count > 0;
    }, "characterExists");
  }

  /**
   * Get all characters for a user
   *
   * @param userId User ID
   * @param options Optional filtering and pagination options
   * @returns Array of characters
   */
  async getCharactersByUserId(
    userId: string,
    options?: {
      includeInactive?: boolean;
      limit?: number;
      offset?: number;
    }
  ) {
    return this.executeOperation((client) => {
      return client.character.findMany({
        where: {
          userId,
          ...(options?.includeInactive ? {} : { isActive: true }),
        },
        orderBy: { lastPlayedAt: "desc" },
        ...(options?.limit ? { take: options.limit } : {}),
        ...(options?.offset ? { skip: options.offset } : {}),
      });
    }, "getCharactersByUserId");
  }

  /**
   * Count characters for a user
   *
   * @param userId User ID
   * @param includeInactive Whether to include inactive characters
   * @returns Number of characters
   */
  async countCharactersByUserId(
    userId: string,
    includeInactive = false
  ): Promise<number> {
    return this.executeOperation((client) => {
      return client.character.count({
        where: {
          userId,
          ...(includeInactive ? {} : { isActive: true }),
        },
      });
    }, "countCharactersByUserId");
  }

  /**
   * Update a character
   *
   * @param id Character ID
   * @param data Data to update
   * @returns The updated character
   * @throws RecordNotFoundError if the character does not exist
   */
  async updateCharacter(id: string, data: Partial<CharacterCreate>) {
    try {
      return await this.executeOperation((client) => {
        return client.character.update({
          where: { id },
          data,
        });
      }, "updateCharacter");
    } catch (error) {
      // Specifically handle the Prisma not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("Character", id);
      }
      throw error;
    }
  }

  /**
   * Mark a character as inactive (soft delete)
   *
   * @param id Character ID
   * @returns The updated character
   * @throws RecordNotFoundError if the character does not exist
   */
  async deleteCharacter(id: string) {
    try {
      return await this.executeOperation((client) => {
        return client.character.update({
          where: { id },
          data: { isActive: false },
        });
      }, "deleteCharacter");
    } catch (error) {
      // Specifically handle the Prisma not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("Character", id);
      }
      throw error;
    }
  }
}

// Export singleton instance
export const characterRepository = new CharacterRepository();
