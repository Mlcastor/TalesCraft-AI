import { Prisma } from "@/generated/prisma";
import { prisma } from "./prisma";

/**
 * Gets all world states for a specific character
 *
 * @param characterId - The character ID to filter by
 * @returns Array of character-world associations for the specified character
 */
export async function getCharacterWorldStates(characterId: string) {
  return prisma.characterWorldState.findMany({
    where: {
      characterId,
    },
    include: {
      world: true,
    },
  });
}

/**
 * Gets a specific character-world association
 *
 * @param characterId - The character ID
 * @param worldId - The world ID
 * @returns The character-world association or null if not found
 */
export async function getCharacterWorldState(
  characterId: string,
  worldId: string
) {
  return prisma.characterWorldState.findUnique({
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
}

/**
 * Creates a new character-world association
 *
 * @param data - The character-world state data to create
 * @returns The created character-world association
 */
export async function createCharacterWorldState(
  data: Prisma.CharacterWorldStateCreateInput
) {
  return prisma.characterWorldState.create({
    data,
    include: {
      world: true,
    },
  });
}

/**
 * Creates or updates a character-world association
 *
 * @param characterId - The character ID
 * @param worldId - The world ID
 * @param data - Additional data to update (excluding the IDs)
 * @returns The created or updated character-world association
 */
export async function upsertCharacterWorldState(
  characterId: string,
  worldId: string,
  data: Omit<Prisma.CharacterWorldStateCreateInput, "character" | "world">
) {
  return prisma.characterWorldState.upsert({
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
  });
}

/**
 * Updates an existing character-world association
 *
 * @param characterId - The character ID
 * @param worldId - The world ID
 * @param data - The data to update
 * @returns The updated character-world association
 */
export async function updateCharacterWorldState(
  characterId: string,
  worldId: string,
  data: Prisma.CharacterWorldStateUpdateInput
) {
  return prisma.characterWorldState.update({
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
  });
}

/**
 * Updates the current location for a character in a world
 *
 * @param characterId - The character ID
 * @param worldId - The world ID
 * @param currentLocation - The new current location
 * @returns The updated character-world association
 */
export async function updateCharacterLocation(
  characterId: string,
  worldId: string,
  currentLocation: string
) {
  return prisma.characterWorldState.update({
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
  });
}

/**
 * Gets all characters associated with a specific world
 *
 * @param worldId - The world ID to filter by
 * @returns Array of character-world associations for the specified world
 */
export async function getCharactersByWorldId(worldId: string) {
  return prisma.characterWorldState.findMany({
    where: {
      worldId,
    },
    include: {
      character: true,
    },
  });
}
