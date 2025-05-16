import { Prisma } from "@/generated/prisma";
import { prisma } from "./prisma";
import { BaseRepository } from "./base/BaseRepository";
import { CharacterWorldState as DbCharacterWorldState } from "@/types/database";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";

/**
 * Repository for character-world state related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class CharacterWorldStateRepository extends BaseRepository {
  /**
   * Create a new CharacterWorldStateRepository instance
   */
  constructor() {
    super("CharacterWorldState");
  }

  /**
   * Gets all world states for a specific character
   *
   * @param characterId - The character ID to filter by
   * @param options - Optional pagination options
   * @returns Array of character-world associations for the specified character
   */
  async getCharacterWorldStates(
    characterId: string,
    options?: { limit?: number; offset?: number }
  ): Promise<DbCharacterWorldState[]> {
    return this.executeOperation(
      (client) =>
        client.characterWorldState.findMany({
          where: {
            characterId,
          },
          include: {
            world: true,
          },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getCharacterWorldStates"
    );
  }

  /**
   * Gets a specific character-world association
   *
   * @param characterId - The character ID
   * @param worldId - The world ID
   * @returns The character-world association
   * @throws RecordNotFoundError if the association does not exist
   */
  async getCharacterWorldState(characterId: string, worldId: string) {
    return this.executeOperation(async (client) => {
      const state = await client.characterWorldState.findUnique({
        where: {
          characterId_worldId: {
            characterId,
            worldId,
          },
        },
        include: {
          world: true,
        },
      });

      if (!state) {
        throw new RecordNotFoundError(
          "CharacterWorldState",
          `${characterId}_${worldId}`
        );
      }

      return state;
    }, "getCharacterWorldState");
  }

  /**
   * Checks if a character-world association exists
   *
   * @param characterId - The character ID
   * @param worldId - The world ID
   * @returns True if the association exists, false otherwise
   */
  async characterWorldStateExists(
    characterId: string,
    worldId: string
  ): Promise<boolean> {
    return this.executeOperation(async (client) => {
      const count = await client.characterWorldState.count({
        where: {
          characterId,
          worldId,
        },
      });
      return count > 0;
    }, "characterWorldStateExists");
  }

  /**
   * Find a character-world association (returns null if not found)
   *
   * @param characterId - The character ID
   * @param worldId - The world ID
   * @returns The character-world association or null if not found
   */
  async findCharacterWorldState(characterId: string, worldId: string) {
    return this.executeOperation(
      (client) =>
        client.characterWorldState.findUnique({
          where: {
            characterId_worldId: {
              characterId,
              worldId,
            },
          },
          include: {
            world: true,
          },
        }),
      "findCharacterWorldState"
    );
  }

  /**
   * Creates a new character-world association
   *
   * @param data - The character-world state data to create
   * @returns The created character-world association
   */
  async createCharacterWorldState(data: Prisma.CharacterWorldStateCreateInput) {
    return this.executeOperation(
      (client) =>
        client.characterWorldState.create({
          data,
          include: {
            world: true,
          },
        }),
      "createCharacterWorldState"
    );
  }

  /**
   * Creates or updates a character-world association
   *
   * @param characterId - The character ID
   * @param worldId - The world ID
   * @param data - Additional data to update (excluding the IDs)
   * @returns The created or updated character-world association
   */
  async upsertCharacterWorldState(
    characterId: string,
    worldId: string,
    data: Omit<Prisma.CharacterWorldStateCreateInput, "character" | "world">
  ) {
    return this.executeOperation(
      (client) =>
        client.characterWorldState.upsert({
          where: {
            characterId_worldId: {
              characterId,
              worldId,
            },
          },
          update: data,
          create: {
            character: {
              connect: { id: characterId },
            },
            world: {
              connect: { id: worldId },
            },
            ...data,
          },
          include: {
            world: true,
          },
        }),
      "upsertCharacterWorldState"
    );
  }

  /**
   * Updates an existing character-world association
   *
   * @param characterId - The character ID
   * @param worldId - The world ID
   * @param data - The data to update
   * @returns The updated character-world association
   * @throws RecordNotFoundError if the association does not exist
   */
  async updateCharacterWorldState(
    characterId: string,
    worldId: string,
    data: Prisma.CharacterWorldStateUpdateInput
  ) {
    try {
      return await this.executeOperation(
        (client) =>
          client.characterWorldState.update({
            where: {
              characterId_worldId: {
                characterId,
                worldId,
              },
            },
            data,
            include: {
              world: true,
            },
          }),
        "updateCharacterWorldState"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError(
          "CharacterWorldState",
          `${characterId}_${worldId}`
        );
      }
      throw error;
    }
  }

  /**
   * Updates the current location for a character in a world
   *
   * @param characterId - The character ID
   * @param worldId - The world ID
   * @param currentLocation - The new current location
   * @returns The updated character-world association
   * @throws RecordNotFoundError if the association does not exist
   */
  async updateCharacterLocation(
    characterId: string,
    worldId: string,
    currentLocation: string
  ) {
    try {
      return await this.executeOperation(
        (client) =>
          client.characterWorldState.update({
            where: {
              characterId_worldId: {
                characterId,
                worldId,
              },
            },
            data: {
              currentLocation,
              lastPlayedAt: new Date(),
            },
            include: {
              world: true,
            },
          }),
        "updateCharacterLocation"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError(
          "CharacterWorldState",
          `${characterId}_${worldId}`
        );
      }
      throw error;
    }
  }

  /**
   * Gets all characters associated with a specific world
   *
   * @param worldId - The world ID to filter by
   * @param options - Optional pagination options
   * @returns Array of character-world associations for the specified world
   */
  async getCharactersByWorldId(
    worldId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.characterWorldState.findMany({
          where: {
            worldId,
          },
          include: {
            character: true,
          },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getCharactersByWorldId"
    );
  }

  /**
   * Count character-world associations for a world
   *
   * @param worldId The world ID
   * @returns Number of characters in the world
   */
  async countCharactersByWorldId(worldId: string): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.characterWorldState.count({
          where: { worldId },
        }),
      "countCharactersByWorldId"
    );
  }

  /**
   * Count the worlds a character has been in
   *
   * @param characterId The character ID
   * @returns Number of worlds the character has been in
   */
  async countWorldsForCharacter(characterId: string): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.characterWorldState.count({
          where: { characterId },
        }),
      "countWorldsForCharacter"
    );
  }

  /**
   * Delete a character-world association
   *
   * @param characterId The character ID
   * @param worldId The world ID
   * @throws RecordNotFoundError if the association does not exist
   */
  async deleteCharacterWorldState(
    characterId: string,
    worldId: string
  ): Promise<void> {
    try {
      await this.executeOperation(
        (client) =>
          client.characterWorldState.delete({
            where: {
              characterId_worldId: {
                characterId,
                worldId,
              },
            },
          }),
        "deleteCharacterWorldState"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError(
          "CharacterWorldState",
          `${characterId}_${worldId}`
        );
      }
      throw error;
    }
  }
}

// Export singleton instance
export const characterWorldStateRepository =
  new CharacterWorldStateRepository();

// Backwards compatibility exports
export const getCharacterWorldStates =
  characterWorldStateRepository.getCharacterWorldStates.bind(
    characterWorldStateRepository
  );
export const getCharacterWorldState =
  characterWorldStateRepository.getCharacterWorldState.bind(
    characterWorldStateRepository
  );
export const createCharacterWorldState =
  characterWorldStateRepository.createCharacterWorldState.bind(
    characterWorldStateRepository
  );
export const upsertCharacterWorldState =
  characterWorldStateRepository.upsertCharacterWorldState.bind(
    characterWorldStateRepository
  );
export const updateCharacterWorldState =
  characterWorldStateRepository.updateCharacterWorldState.bind(
    characterWorldStateRepository
  );
export const updateCharacterLocation =
  characterWorldStateRepository.updateCharacterLocation.bind(
    characterWorldStateRepository
  );
export const getCharactersByWorldId =
  characterWorldStateRepository.getCharactersByWorldId.bind(
    characterWorldStateRepository
  );

// Export findCharacterWorldState for direct usage
export const findCharacterWorldState = (characterId: string, worldId: string) =>
  characterWorldStateRepository.findCharacterWorldState(characterId, worldId);
