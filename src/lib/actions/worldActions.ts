"use server";

import { WorldRepository } from "@/lib/repositories/worldRepository";
import { MVPWorld, MVPWorldWithRelatedData } from "@/types/mvpTypes";
import { logger } from "@/lib/utils/logger";

/**
 * Retrieves all active worlds.
 * @returns An array of all active worlds.
 */
export async function getAllWorldsAction(): Promise<MVPWorld[]> {
  try {
    const worldRepository = new WorldRepository();
    const worlds = await worldRepository.getAllWorlds();
    logger.debug(`Fetched ${worlds.length} worlds`, {
      context: "world-actions",
    });
    return worlds;
  } catch (error) {
    logger.error("Error in getAllWorldsAction", {
      context: "world-actions",
      metadata: { error },
    });
    return [];
  }
}

/**
 * Retrieves a world by its ID.
 * @param worldId - The ID of the world to retrieve.
 * @returns The world with the given ID.
 */
export async function getWorldByIdAction(
  worldId: string
): Promise<MVPWorld | null> {
  try {
    const worldRepository = new WorldRepository();
    const world = await worldRepository.getWorldById(worldId);
    return world;
  } catch (error) {
    logger.error("Error in getWorldByIdAction", {
      context: "world-actions",
      metadata: { error },
    });
    return null;
  }
}

/**
 * Retrieves a world with related data by its ID.
 * @param worldId - The ID of the world to retrieve.
 * @returns The world with related data including locations, lore fragments, and events.
 */
export async function getWorldWithRelatedDataAction(
  worldId: string
): Promise<MVPWorldWithRelatedData | null> {
  try {
    const worldRepository = new WorldRepository();

    // Get the base world data
    const world = await worldRepository.getWorldById(worldId);
    if (!world) {
      logger.warn(`World with ID ${worldId} not found`, {
        context: "world-actions",
      });
      return null;
    }

    // Get related data from repositories
    const locations = await worldRepository.getLocationsByWorldId(worldId);
    const loreFragments = await worldRepository.getLoreForWorld(worldId);

    // Construct the MVPWorldWithRelatedData object
    const worldWithRelatedData: MVPWorldWithRelatedData = {
      ...world,
      locations,
      loreFragments,
      events: null, // As per MVP requirements, we're not using events yet
    };

    logger.debug(`Fetched world with related data for world ID: ${worldId}`, {
      context: "world-actions",
      metadata: {
        worldId,
        locationsCount: locations.length,
        loreFragmentsCount: loreFragments.length,
      },
    });

    return worldWithRelatedData;
  } catch (error) {
    logger.error("Error in getWorldWithRelatedDataAction", {
      context: "world-actions",
      metadata: { error },
    });
    return null;
  }
}
