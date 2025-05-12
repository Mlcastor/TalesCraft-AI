import { Prisma } from "@/generated/prisma";
import { prisma } from "./prisma";
import { BaseRepository } from "./base/BaseRepository";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";

/**
 * Repository for world-related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class WorldRepository extends BaseRepository {
  /**
   * Create a new WorldRepository instance
   */
  constructor() {
    super("World");
  }

  /**
   * Gets all active worlds from the database
   *
   * @param options Optional pagination options
   * @returns Array of all active worlds
   */
  async getAllActiveWorlds(options?: { limit?: number; offset?: number }) {
    return this.executeOperation(
      (client) =>
        client.world.findMany({
          where: {
            isActive: true,
          },
          orderBy: {
            name: "asc",
          },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getAllActiveWorlds"
    );
  }

  /**
   * Gets a world by its ID
   *
   * @param id - The world ID to find
   * @returns The world
   * @throws RecordNotFoundError if the world does not exist
   */
  async getWorldById(id: string) {
    return this.executeOperation(async (client) => {
      const world = await client.world.findUnique({
        where: { id },
      });

      return this.ensureExists(world, id);
    }, "getWorldById");
  }

  /**
   * Find a world by ID (returns null if not found)
   *
   * @param id World ID
   * @returns The world or null if not found
   */
  async findWorldById(id: string) {
    return this.executeOperation(
      (client) =>
        client.world.findUnique({
          where: { id },
        }),
      "findWorldById"
    );
  }

  /**
   * Creates a new world
   *
   * @param data - The world data to create
   * @returns The created world
   */
  async createWorld(data: Prisma.WorldCreateInput) {
    return this.executeOperation(
      (client) =>
        client.world.create({
          data,
        }),
      "createWorld"
    );
  }

  /**
   * Updates an existing world
   *
   * @param id - The ID of the world to update
   * @param data - The data to update
   * @returns The updated world
   * @throws RecordNotFoundError if the world does not exist
   */
  async updateWorld(id: string, data: Prisma.WorldUpdateInput) {
    try {
      return await this.executeOperation(
        (client) =>
          client.world.update({
            where: { id },
            data,
          }),
        "updateWorld"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("World", id);
      }
      throw error;
    }
  }

  /**
   * Gets a world with its locations, lore fragments, and events
   *
   * @param id - The world ID to find
   * @returns The world with related data
   * @throws RecordNotFoundError if the world does not exist
   */
  async getWorldWithRelatedData(id: string) {
    return this.executeOperation(async (client) => {
      const world = await client.world.findUnique({
        where: { id },
        include: {
          locations: true,
          loreFragments: true,
          events: true,
        },
      });

      return this.ensureExists(world, id);
    }, "getWorldWithRelatedData");
  }

  /**
   * Gets a world with only its locations that are marked as starting locations
   *
   * @param id - The world ID to find
   * @returns The world with starting locations
   * @throws RecordNotFoundError if the world does not exist
   */
  async getWorldWithStartingLocations(id: string) {
    return this.executeOperation(async (client) => {
      const world = await client.world.findUnique({
        where: { id },
        include: {
          locations: {
            where: {
              isStartingLocation: true,
            },
          },
        },
      });

      return this.ensureExists(world, id);
    }, "getWorldWithStartingLocations");
  }

  /**
   * Soft-delete a world by setting isActive to false
   *
   * @param id - The ID of the world to deactivate
   * @returns The updated world
   * @throws RecordNotFoundError if the world does not exist
   */
  async deactivateWorld(id: string) {
    try {
      return await this.executeOperation(
        (client) =>
          client.world.update({
            where: { id },
            data: {
              isActive: false,
            },
          }),
        "deactivateWorld"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("World", id);
      }
      throw error;
    }
  }

  /**
   * Get worlds by name (for search functionality)
   *
   * @param name The name to search for
   * @param options Optional pagination options
   * @returns Worlds matching the search criteria
   */
  async getWorldsByName(
    name: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.world.findMany({
          where: {
            name: {
              contains: name,
              mode: "insensitive",
            },
            isActive: true,
          },
          orderBy: {
            name: "asc",
          },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getWorldsByName"
    );
  }

  /**
   * Count worlds
   *
   * @param activeOnly Whether to count only active worlds
   * @returns Number of worlds
   */
  async countWorlds(activeOnly = true): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.world.count({
          where: activeOnly ? { isActive: true } : undefined,
        }),
      "countWorlds"
    );
  }
}

// Export singleton instance
export const worldRepository = new WorldRepository();

// Backwards compatibility exports for existing code
export const getAllActiveWorlds =
  worldRepository.getAllActiveWorlds.bind(worldRepository);
export const getWorldById = worldRepository.getWorldById.bind(worldRepository);
export const createWorld = worldRepository.createWorld.bind(worldRepository);
export const updateWorld = worldRepository.updateWorld.bind(worldRepository);
export const getWorldWithRelatedData =
  worldRepository.getWorldWithRelatedData.bind(worldRepository);
export const getWorldWithStartingLocations =
  worldRepository.getWorldWithStartingLocations.bind(worldRepository);
export const deactivateWorld =
  worldRepository.deactivateWorld.bind(worldRepository);
