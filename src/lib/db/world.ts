import { Prisma } from "@/generated/prisma";
import { prisma } from "./prisma";

/**
 * Gets all active worlds from the database
 *
 * @returns Array of all active worlds
 */
export async function getAllActiveWorlds() {
  return prisma.world.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      name: "asc",
    },
  });
}

/**
 * Gets a world by its ID
 *
 * @param id - The world ID to find
 * @returns The world or null if not found
 */
export async function getWorldById(id: string) {
  return prisma.world.findUnique({
    where: {
      id,
    },
  });
}

/**
 * Creates a new world
 *
 * @param data - The world data to create
 * @returns The created world
 */
export async function createWorld(data: Prisma.WorldCreateInput) {
  return prisma.world.create({
    data,
  });
}

/**
 * Updates an existing world
 *
 * @param id - The ID of the world to update
 * @param data - The data to update
 * @returns The updated world
 */
export async function updateWorld(id: string, data: Prisma.WorldUpdateInput) {
  return prisma.world.update({
    where: {
      id,
    },
    data,
  });
}

/**
 * Gets a world with its locations, lore fragments, and events
 *
 * @param id - The world ID to find
 * @returns The world with related data
 */
export async function getWorldWithRelatedData(id: string) {
  return prisma.world.findUnique({
    where: {
      id,
    },
    include: {
      locations: true,
      loreFragments: true,
      events: true,
    },
  });
}

/**
 * Gets a world with only its locations that are marked as starting locations
 *
 * @param id - The world ID to find
 * @returns The world with starting locations
 */
export async function getWorldWithStartingLocations(id: string) {
  return prisma.world.findUnique({
    where: {
      id,
    },
    include: {
      locations: {
        where: {
          isStartingLocation: true,
        },
      },
    },
  });
}

/**
 * Soft-delete a world by setting isActive to false
 *
 * @param id - The ID of the world to deactivate
 * @returns The updated world
 */
export async function deactivateWorld(id: string) {
  return prisma.world.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  });
}
