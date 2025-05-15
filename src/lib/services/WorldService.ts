import { ValidationError } from "@/lib/errors/DatabaseError";
import { BaseService } from "./base/BaseService";
import { WorldRepository } from "@/lib/db/world";
import { World } from "@/types/database";
import { WorldWithRelatedData, Event } from "@/types/game";
import { isNotEmpty } from "@/lib/utils/validation";
import { Prisma } from "@/generated/prisma";
import { logger } from "@/lib/utils/logger";

/**
 * Service for managing world-related operations
 * Handles world creation, updates, and retrieval
 */
export class WorldService extends BaseService {
  private readonly worldRepository: WorldRepository;

  /**
   * Create a new WorldService
   *
   * @param worldRepository - Repository for world operations
   */
  constructor(worldRepository: WorldRepository = new WorldRepository()) {
    super("WorldService", { worldRepository });
    this.worldRepository = worldRepository;
  }

  /**
   * Get all active worlds
   *
   * @param options - Optional pagination options
   * @returns Array of all active worlds
   */
  async getAllActiveWorlds(options?: {
    limit?: number;
    offset?: number;
  }): Promise<World[]> {
    return this.executeOperation(async () => {
      return await this.worldRepository.getAllActiveWorlds(options);
    }, "getAllActiveWorlds");
  }

  /**
   * Get a world by its ID
   *
   * @param id - The world ID to retrieve
   * @returns The world or null if not found
   */
  async getWorldById(id: string): Promise<World | null> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(id)) {
        throw new ValidationError(
          "World ID is required",
          { id: "World ID is required" },
          { entity: this.serviceName }
        );
      }

      return await this.worldRepository.findWorldById(id);
    }, "getWorldById");
  }

  /**
   * Transform database Event objects to match the game's Event interface
   * @param dbEvent - Event from the database
   * @returns Transformed Event conforming to game interface
   */
  private transformEvent(dbEvent: any): Event {
    // Parse JSON fields stored in the database to match expected interface structure
    return {
      ...dbEvent,
      // Transform triggerConditions from JSON to expected structure
      triggerConditions:
        typeof dbEvent.triggerConditions === "object"
          ? dbEvent.triggerConditions
          : { probability: 0, requiredItems: [], requiredDecisions: [] },
      // Transform outcomes from JSON to expected structure
      outcomes: Array.isArray(dbEvent.outcomes) ? dbEvent.outcomes : [],
    };
  }

  /**
   * Transform a database World with related data to match the expected WorldWithRelatedData interface
   * @param dbWorld - World with related data from the database
   * @returns Transformed WorldWithRelatedData object
   */
  private transformWorldWithRelatedData(dbWorld: any): WorldWithRelatedData {
    if (!dbWorld) return dbWorld;

    // Transform events to match the Event interface
    const transformedEvents = Array.isArray(dbWorld.events)
      ? dbWorld.events.map((event: any) => this.transformEvent(event))
      : [];

    return {
      ...dbWorld,
      events: transformedEvents,
      // Ensure other arrays are properly initialized if missing
      locations: Array.isArray(dbWorld.locations) ? dbWorld.locations : [],
      loreFragments: Array.isArray(dbWorld.loreFragments)
        ? dbWorld.loreFragments
        : [],
    };
  }

  /**
   * Get a world with its related data (locations, lore fragments, events)
   *
   * @param id - The world ID to retrieve
   * @returns The world with related data or null if not found
   */
  async getWorldWithRelatedData(
    id: string
  ): Promise<WorldWithRelatedData | null> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(id)) {
        throw new ValidationError(
          "World ID is required",
          { id: "World ID is required" },
          { entity: this.serviceName }
        );
      }

      try {
        const dbWorld = await this.worldRepository.getWorldWithRelatedData(id);
        // Transform the database result to match the expected interface
        return this.transformWorldWithRelatedData(dbWorld);
      } catch (error) {
        // If the error is that the world was not found, return null
        if (error instanceof Error && error.name === "RecordNotFoundError") {
          return null;
        }
        throw error;
      }
    }, "getWorldWithRelatedData");
  }

  /**
   * Create a new world
   *
   * @param data - The world data to create
   * @returns The created world
   */
  async createWorld(data: Prisma.WorldCreateInput): Promise<World> {
    return this.executeOperation(async () => {
      // Validate required fields
      if (!isNotEmpty(data.name)) {
        throw new ValidationError(
          "World name is required",
          { name: "World name is required" },
          { entity: this.serviceName }
        );
      }

      return await this.worldRepository.createWorld(data);
    }, "createWorld");
  }

  /**
   * Search for worlds by name
   *
   * @param name - The name to search for
   * @param options - Optional pagination options
   * @returns Worlds matching the search criteria
   */
  async searchWorldsByName(
    name: string,
    options?: { limit?: number; offset?: number }
  ): Promise<World[]> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(name)) {
        throw new ValidationError(
          "Search term is required",
          { name: "Search term is required" },
          { entity: this.serviceName }
        );
      }

      return await this.worldRepository.getWorldsByName(name, options);
    }, "searchWorldsByName");
  }

  /**
   * Count worlds in the database
   *
   * @param activeOnly - Whether to count only active worlds
   * @returns The number of worlds
   */
  async countWorlds(activeOnly = true): Promise<number> {
    return this.executeOperation(async () => {
      return await this.worldRepository.countWorlds(activeOnly);
    }, "countWorlds");
  }
}

// Export singleton instance for convenience
export const worldService = new WorldService(new WorldRepository());
