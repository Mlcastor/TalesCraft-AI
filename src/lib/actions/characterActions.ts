"use server";

import { CharacterRepository } from "@/lib/repositories/characterRepository";
import { getServerSession } from "@/lib/auth/session";
import { MVPCharacter, MVPCharacterWorldState } from "@/types/mvpTypes";
import { logger } from "@/lib/utils/logger";

interface CreateCharacterData {
  name: string;
  backstory?: string;
  appearanceDescription?: string;
  personalityTraits: string[];
}

/**
 * Creates a new character for a user.
 * @param data - The data for the new character.
 * @returns The new character or an error if the character cannot be created.
 */
export async function createCharacterAction(
  data: CreateCharacterData
): Promise<MVPCharacter | { error: string }> {
  try {
    const session = await getServerSession();
    if (!session?.user?.id) {
      logger.warn("createCharacterAction: User not authenticated.", {
        context: "character-actions",
      });
      return { error: "User not authenticated. Cannot create character." };
    }
    const userId = session.user.id;

    const characterRepository = new CharacterRepository();
    const newCharacter = await characterRepository.createCharacter({
      ...data,
      userId,
      isActive: true, // Default to active on creation
    });
    logger.info("Character created successfully", {
      context: "character-actions",
      metadata: { characterId: newCharacter.id, userId },
    });
    return newCharacter;
  } catch (error) {
    logger.error("Error in createCharacterAction", {
      context: "character-actions",
      metadata: { error },
    });
    return {
      error:
        error instanceof Error ? error.message : "Failed to create character.",
    };
  }
}

/**
 * Retrieves all characters for a user.
 * @returns An array of characters for the user.
 */
export async function getMyCharactersAction(): Promise<MVPCharacter[] | null> {
  try {
    const session = await getServerSession();
    if (!session?.user?.id) {
      logger.warn("getMyCharactersAction: User not authenticated.", {
        context: "character-actions",
      });
      // Depending on desired behavior, could return empty array or error
      return null;
    }
    const userId = session.user.id;

    const characterRepository = new CharacterRepository();
    const characters = await characterRepository.getCharactersByUserId(userId);
    logger.debug(`Fetched ${characters.length} characters for user`, {
      context: "character-actions",
      metadata: { userId },
    });
    return characters;
  } catch (error) {
    logger.error("Error in getMyCharactersAction", {
      context: "character-actions",
      metadata: { error },
    });
    return null;
  }
}

/**
 * Retrieves the world state for a character in a specific world.
 * @param characterId - The ID of the character.
 * @param worldId - The ID of the world.
 * @returns The world state for the character in the world.
 */
export async function getCharacterWorldStateForWorldAction(
  characterId: string,
  worldId: string
): Promise<MVPCharacterWorldState | null> {
  try {
    const characterRepository = new CharacterRepository();
    const characterWorldState =
      await characterRepository.getCharacterWorldState(characterId, worldId);
    return characterWorldState;
  } catch (error) {
    logger.error("Error in getCharacterWorldStateForWorldAction", {
      context: "character-actions",
      metadata: { error },
    });
    return null;
  }
}

/**
 * Retrieves all character world states for a given character ID.
 * @param characterId - The ID of the character.
 * @returns An array of character world states.
 */
export async function getCharacterWorldStatesByCharacterIdAction(
  characterId: string
): Promise<MVPCharacterWorldState[]> {
  try {
    const characterRepository = new CharacterRepository();

    const characterWorldStates =
      await characterRepository.getCharacterWorldStatesByCharacterId(
        characterId
      );
    return characterWorldStates;
  } catch (error) {
    logger.error("Error in getCharacterWorldStatesByCharacterIdAction", {
      context: "character-actions",
      metadata: { error },
    });
    return [];
  }
}

/**
 * Retrieves a character by its ID.
 * @param characterId - The ID of the character.
 * @returns The character if found, otherwise null.
 */
export async function getCharacterByIdAction(
  characterId: string
): Promise<MVPCharacter | null> {
  try {
    const characterRepository = new CharacterRepository();
    const character = await characterRepository.getCharacterById(characterId);
    return character;
  } catch (error) {
    logger.error("Error in getCharacterByIdAction", {
      context: "character-actions",
      metadata: { error },
    });
    return null;
  }
}
