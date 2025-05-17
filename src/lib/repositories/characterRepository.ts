import { BaseRepository } from "./base/BaseRepository";
import { MVPCharacter, MVPCharacterWorldState } from "@/types/mvpTypes";
import {
  Prisma,
  MVPCharacter as PrismaMVPCharacter,
  MVPCharacterWorldState as PrismaMVPCharacterWorldState,
} from "@/generated/prisma";

/**
 * Repository for managing MVPCharacter data.
 * Handles database operations related to characters.
 */
export class CharacterRepository extends BaseRepository {
  /**
   * Creates an instance of CharacterRepository.
   */
  constructor() {
    super("MVPCharacter");
  }

  /**
   * Maps a Prisma MVPCharacter object to the MVPCharacter type defined in mvpTypes.
   * Handles null vs undefined and JSON type conversions.
   * @param prismaCharacter - The character object from Prisma.
   * @returns The mapped MVPCharacter object.
   */
  private _mapToMVPCharacter(
    prismaCharacter: PrismaMVPCharacter
  ): MVPCharacter {
    return {
      ...prismaCharacter,
      backstory: prismaCharacter.backstory ?? undefined,
      appearanceDescription: prismaCharacter.appearanceDescription ?? undefined,
      // Assuming personalityTraits is stored as a JSON array of strings in the DB
      personalityTraits: prismaCharacter.personalityTraits as string[],
      lastPlayedAt: prismaCharacter.lastPlayedAt ?? undefined,
    };
  }

  /**
   * Maps a Prisma MVPCharacterWorldState object to the MVPCharacterWorldState type defined in mvpTypes.
   * Handles null vs undefined and JSON type conversions.
   * @param prismaCharacterWorldState - The character world state object from Prisma.
   * @returns The mapped MVPCharacterWorldState object.
   */
  private _mapToMVPCharacterWorldState(
    prismaCharacterWorldState: PrismaMVPCharacterWorldState
  ): MVPCharacterWorldState {
    return {
      ...prismaCharacterWorldState,
      currentLocation: prismaCharacterWorldState.currentLocation ?? undefined,
      lastPlayedAt: prismaCharacterWorldState.lastPlayedAt ?? undefined,
    };
  }

  /**
   * Creates a new character in the database.
   * @param data - The data for the new character, excluding 'id', 'createdAt', and 'lastPlayedAt'.
   * @returns The created character.
   */
  async createCharacter(
    data: Omit<MVPCharacter, "id" | "createdAt" | "lastPlayedAt" | "userId"> & {
      userId: string;
    }
  ): Promise<MVPCharacter> {
    return this.executeOperation(async (client) => {
      const { userId, ...characterInputData } = data;
      const prismaCharacterData: Prisma.MVPCharacterCreateInput = {
        ...characterInputData,
        user: { connect: { id: userId } }, // Connect to existing user
        // personalityTraits will be handled by Prisma if it's a Json type in schema
        // If personalityTraits is an array of strings, Prisma expects it as such or Prisma.JsonArray.
        // The 'as unknown as Prisma.InputJsonValue' might be needed if types mismatch strictly.
        personalityTraits:
          characterInputData.personalityTraits as unknown as Prisma.InputJsonValue,
      };

      const createdCharacter = await client.mVPCharacter.create({
        data: prismaCharacterData,
      });
      return this._mapToMVPCharacter(createdCharacter);
    }, "createCharacter");
  }

  /**
   * Retrieves a character by its ID.
   * @param id - The ID of the character to retrieve.
   * @returns The character if found, otherwise null.
   */
  async getCharacterById(id: string): Promise<MVPCharacter | null> {
    return this.executeOperation(async (client) => {
      const character = await client.mVPCharacter.findUnique({
        where: { id },
      });
      return character ? this._mapToMVPCharacter(character) : null;
    }, "getCharacterById");
  }

  /**
   * Retrieves all characters associated with a specific user ID.
   * @param userId - The ID of the user.
   * @returns An array of characters belonging to the user.
   */
  async getCharactersByUserId(userId: string): Promise<MVPCharacter[]> {
    return this.executeOperation(async (client) => {
      const characters = await client.mVPCharacter.findMany({
        where: { userId },
      });
      return characters.map(this._mapToMVPCharacter);
    }, "getCharactersByUserId");
  }

  /**
   * Updates an existing character.
   * @param id - The ID of the character to update.
   * @param data - The partial data to update the character with.
   * @returns The updated character.
   * @throws RecordNotFoundError if the character to update is not found.
   */
  async updateCharacter(
    id: string,
    data: Partial<Omit<MVPCharacter, "id" | "userId" | "createdAt">>
  ): Promise<MVPCharacter> {
    return this.executeOperation(async (client) => {
      // Prepare data for Prisma, handling potential JSON fields
      const updateDataFormatted: Prisma.MVPCharacterUpdateInput = { ...data };
      if (data.personalityTraits) {
        updateDataFormatted.personalityTraits =
          data.personalityTraits as unknown as Prisma.InputJsonValue;
      }
      // Prisma handles Date conversion for lastPlayedAt automatically if it's a Date field

      const character = await client.mVPCharacter.update({
        where: { id },
        data: updateDataFormatted,
      });
      const ensuredCharacter = this.ensureExists(character, id);
      return this._mapToMVPCharacter(ensuredCharacter);
    }, "updateCharacter");
  }

  /**
   * Retrieves the world/character relationship for a character.
   * @param characterId - The ID of the character.
   * @param worldId - The ID of the world (needed for compound unique key).
   * @returns The world/character relationship.
   */
  async getCharacterWorldState(
    characterId: string,
    worldId: string
  ): Promise<MVPCharacterWorldState | null> {
    return this.executeOperation(async (client) => {
      const characterWorldState =
        await client.mVPCharacterWorldState.findUnique({
          where: {
            characterId_worldId: {
              characterId: characterId,
              worldId: worldId,
            },
          },
        });
      return characterWorldState
        ? this._mapToMVPCharacterWorldState(characterWorldState)
        : null;
    }, "getCharacterWorldState");
  }

  /**
   * Retrieves all character world states for a given character ID.
   * @param characterId - The ID of the character.
   * @returns An array of character world states.
   */
  async getCharacterWorldStatesByCharacterId(
    characterId: string
  ): Promise<MVPCharacterWorldState[]> {
    return this.executeOperation(async (client) => {
      const characterWorldStates = await client.mVPCharacterWorldState.findMany(
        {
          where: { characterId },
        }
      );
      return characterWorldStates.map(this._mapToMVPCharacterWorldState);
    }, "getCharacterWorldStatesByCharacterId");
  }

  /**
   * Retrieves all character world states for a given world ID.
   * @param worldId - The ID of the world.
   * @returns An array of character world states.
   */
  async getCharacterWorldStatesByWorldId(
    worldId: string
  ): Promise<MVPCharacterWorldState[]> {
    return this.executeOperation(async (client) => {
      const characterWorldStates = await client.mVPCharacterWorldState.findMany(
        {
          where: { worldId },
        }
      );
      return characterWorldStates.map(this._mapToMVPCharacterWorldState);
    }, "getCharacterWorldStatesByWorldId");
  }
}
