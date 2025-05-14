"use server";

import { characterRepository } from "@/lib/db/character";
import {
  getCharacterWorldState,
  getCharacterWorldStates,
  findCharacterWorldState,
  characterWorldStateRepository,
} from "@/lib/db/characterWorldState";
import { Character, CharacterWorldStateWithWorld } from "@/types/database";
import { getServerSession } from "@/lib/auth/session";

/**
 * Create a new character
 */
export async function createCharacter(data: {
  userId: string;
  name: string;
  backstory: string | null;
  appearanceDescription: string | null;
  personalityTraits: string[];
}) {
  try {
    if (!data.userId) {
      return { success: false, error: "User ID is required" };
    }

    if (!data.name || data.name.trim().length < 2) {
      return {
        success: false,
        error: "Character name must be at least 2 characters",
      };
    }

    // Create character using the repository
    const character = await characterRepository.createCharacter({
      user: { connect: { id: data.userId } },
      name: data.name,
      backstory: data.backstory,
      appearanceDescription: data.appearanceDescription,
      personalityTraits: data.personalityTraits,
      isActive: true,
      lastPlayedAt: null,
    });

    return { success: true, character };
  } catch (error) {
    console.error("Error creating character:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to create character",
    };
  }
}

/**
 * Get characters by the currently authenticated user
 */
export async function getUserCharacters() {
  const session = await getServerSession();

  if (!session || !session.user.id) {
    return null;
  }

  return characterRepository.getCharactersByUserId(session.user.id);
}

/**
 * Get character world states for a specific character
 */
export async function getCharacterWorldStatesAction(characterId: string) {
  return getCharacterWorldStates(characterId);
}

/**
 * Get character world states for multiple characters
 */
export async function getAllCharacterWorldStates(characterIds: string[]) {
  const characterWorldStatesByCharacter: Record<string, any[]> = {};

  for (const characterId of characterIds) {
    const states = await getCharacterWorldStates(characterId);
    characterWorldStatesByCharacter[characterId] = states;
  }

  return characterWorldStatesByCharacter;
}

/**
 * Get a specific character world state for a character and world
 *
 * This uses findCharacterWorldState instead of getCharacterWorldState
 * to return null instead of throwing an error when no state exists
 */
export async function getCharacterWorldStateForWorld(
  characterId: string,
  worldId: string
) {
  // Use findCharacterWorldState which returns null instead of throwing an error
  return findCharacterWorldState(characterId, worldId);
}
