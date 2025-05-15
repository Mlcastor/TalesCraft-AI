"use server";

import { ValidationError } from "@/lib/errors/DatabaseError";
import { worldService } from "@/lib/services/WorldService";
import { logger } from "@/lib/utils/logger";
import { isNotEmpty } from "@/lib/utils/validation";
import { World } from "@/types/database";
import { Prisma } from "@/generated/prisma";
import { WorldWithRelatedData } from "@/types/game";
/**
 * Get all active worlds
 *
 * @param options Optional pagination options
 * @returns Array of all active worlds
 */
export async function getAllActiveWorlds(options?: {
  limit?: number;
  offset?: number;
}): Promise<World[]> {
  try {
    const worlds = await worldService.getAllActiveWorlds(options);

    logger.debug("Retrieved active worlds", {
      context: "server-action",
      metadata: {
        action: "getAllActiveWorlds",
        worldCount: worlds.length,
      },
    });

    return worlds;
  } catch (error) {
    logger.error("Failed to get active worlds", {
      context: "server-action",
      metadata: {
        action: "getAllActiveWorlds",
        error,
      },
    });

    throw error;
  }
}

/**
 * Get a world by ID
 *
 * @param worldId The world ID to retrieve
 * @returns The world or null if not found
 */
export async function getWorldById(worldId: string): Promise<World | null> {
  try {
    if (!isNotEmpty(worldId)) {
      throw new ValidationError(
        "World ID is required",
        { worldId: "World ID is required" },
        { entity: "world-actions" }
      );
    }

    const world = await worldService.getWorldById(worldId);

    logger.debug("Retrieved world by ID", {
      context: "server-action",
      metadata: {
        action: "getWorldById",
        worldId,
        found: !!world,
      },
    });

    return world;
  } catch (error) {
    logger.error("Failed to get world by ID", {
      context: "server-action",
      metadata: {
        action: "getWorldById",
        worldId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Get a world with its related data (locations, lore fragments, events)
 *
 * @param worldId The world ID to retrieve
 * @returns The world with related data or null if not found
 */
export async function getWorldWithRelatedData(
  worldId: string
): Promise<WorldWithRelatedData | null> {
  try {
    if (!isNotEmpty(worldId)) {
      throw new ValidationError(
        "World ID is required",
        { worldId: "World ID is required" },
        { entity: "world-actions" }
      );
    }

    const world = await worldService.getWorldWithRelatedData(worldId);

    logger.debug("Retrieved world with related data", {
      context: "server-action",
      metadata: {
        action: "getWorldWithRelatedData",
        worldId,
        found: !!world,
      },
    });

    return world;
  } catch (error) {
    logger.error("Failed to get world with related data", {
      context: "server-action",
      metadata: {
        action: "getWorldWithRelatedData",
        worldId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Search for worlds by name
 *
 * @param searchTerm The term to search for
 * @param options Optional pagination options
 * @returns Worlds matching the search criteria
 */
export async function searchWorldsByName(
  searchTerm: string,
  options?: { limit?: number; offset?: number }
): Promise<World[]> {
  try {
    if (!isNotEmpty(searchTerm)) {
      throw new ValidationError(
        "Search term is required",
        { searchTerm: "Search term is required" },
        { entity: "world-actions" }
      );
    }

    const worlds = await worldService.searchWorldsByName(searchTerm, options);

    logger.debug("Searched worlds by name", {
      context: "server-action",
      metadata: {
        action: "searchWorldsByName",
        searchTerm,
        resultCount: worlds.length,
      },
    });

    return worlds;
  } catch (error) {
    logger.error("Failed to search worlds by name", {
      context: "server-action",
      metadata: {
        action: "searchWorldsByName",
        searchTerm,
        error,
      },
    });

    throw error;
  }
}

/**
 * Count worlds in the database
 *
 * @param activeOnly Whether to count only active worlds
 * @returns Number of worlds
 */
export async function countWorlds(activeOnly = true): Promise<number> {
  try {
    const count = await worldService.countWorlds(activeOnly);

    logger.debug("Counted worlds", {
      context: "server-action",
      metadata: {
        action: "countWorlds",
        activeOnly,
        count,
      },
    });

    return count;
  } catch (error) {
    logger.error("Failed to count worlds", {
      context: "server-action",
      metadata: {
        action: "countWorlds",
        activeOnly,
        error,
      },
    });

    throw error;
  }
}

/**
 * Create a new world
 *
 * @param data The world data to create
 * @returns The created world
 */
export async function createWorld(
  data: Prisma.WorldCreateInput
): Promise<World> {
  try {
    if (!isNotEmpty(data.name)) {
      throw new ValidationError(
        "World name is required",
        { name: "World name is required" },
        { entity: "world-actions" }
      );
    }

    const world = await worldService.createWorld(data);

    logger.debug("Created new world", {
      context: "server-action",
      metadata: {
        action: "createWorld",
        worldId: world.id,
        worldName: world.name,
      },
    });

    return world;
  } catch (error) {
    logger.error("Failed to create world", {
      context: "server-action",
      metadata: {
        action: "createWorld",
        worldName: data.name,
        error,
      },
    });

    throw error;
  }
}
