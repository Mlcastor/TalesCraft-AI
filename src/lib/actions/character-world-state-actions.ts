"use server";

import { ValidationError } from "@/lib/errors/DatabaseError";
import { characterWorldStateService } from "@/lib/services/CharacterWorldStateService";
import { logger } from "@/lib/utils/logger";
import { isNotEmpty } from "@/lib/utils/validation";

/**
 * Update a character's location within a world
 *
 * @param characterId - The character ID
 * @param worldId - The world ID
 * @param newLocation - The new location name
 * @returns The updated character world state
 */
export async function updateCharacterLocation(
  characterId: string,
  worldId: string,
  newLocation: string
): Promise<any> {
  try {
    if (!isNotEmpty(characterId)) {
      throw new ValidationError(
        "Character ID is required",
        { characterId: "Character ID is required" },
        { entity: "character-world-state-actions" }
      );
    }

    if (!isNotEmpty(worldId)) {
      throw new ValidationError(
        "World ID is required",
        { worldId: "World ID is required" },
        { entity: "character-world-state-actions" }
      );
    }

    if (!isNotEmpty(newLocation)) {
      throw new ValidationError(
        "New location is required",
        { newLocation: "New location is required" },
        { entity: "character-world-state-actions" }
      );
    }

    const result = await characterWorldStateService.updateCharacterLocation(
      characterId,
      worldId,
      newLocation
    );

    logger.debug("Character location updated", {
      context: "server-action",
      metadata: {
        action: "updateCharacterLocation",
        characterId,
        worldId,
        newLocation,
      },
    });

    return result;
  } catch (error) {
    logger.error("Failed to update character location", {
      context: "server-action",
      metadata: {
        action: "updateCharacterLocation",
        characterId,
        worldId,
        newLocation,
        error,
      },
    });

    throw error;
  }
}

/**
 * Find a character world state without throwing an error if not found
 *
 * @param characterId - The character ID
 * @param worldId - The world ID
 * @returns The character world state or null if not found
 */
export async function findCharacterWorldState(
  characterId: string,
  worldId: string
): Promise<any | null> {
  try {
    return await characterWorldStateService.findCharacterWorldState(
      characterId,
      worldId
    );
  } catch (error) {
    logger.error("Failed to find character world state", {
      context: "server-action",
      metadata: {
        action: "findCharacterWorldState",
        characterId,
        worldId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Get all world states for a specific character
 *
 * @param characterId - The character ID
 * @param options - Optional pagination options
 * @returns Array of character-world associations
 */
export async function getCharacterWorldStates(
  characterId: string,
  options?: { limit?: number; offset?: number }
): Promise<any[]> {
  try {
    return await characterWorldStateService.getCharacterWorldStates(
      characterId,
      options
    );
  } catch (error) {
    logger.error("Failed to get character world states", {
      context: "server-action",
      metadata: {
        action: "getCharacterWorldStates",
        characterId,
        error,
      },
    });

    throw error;
  }
}
