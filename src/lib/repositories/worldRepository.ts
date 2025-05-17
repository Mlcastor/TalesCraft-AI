import { BaseRepository } from "./base/BaseRepository";
import {
  MVPWorld,
  MVPLocation,
  MVPLoreFragment,
  MVPEvent,
  MVPLocationWithEvents,
} from "@/types/mvpTypes";
import { Prisma } from "@/generated/prisma";

/**
 * Repository for managing world-related data, including worlds, locations, and lore fragments.
 */
export class WorldRepository extends BaseRepository {
  /**
   * Creates an instance of WorldRepository.
   */
  constructor() {
    super("MVPWorld"); // Primary entity name for logging, can be generic or specific
  }

  /**
   * Retrieves a world by its ID.
   * @param id - The ID of the world to retrieve.
   * @returns The world if found, otherwise null.
   */
  async getWorldById(id: string): Promise<MVPWorld | null> {
    return this.executeOperation(async (client) => {
      return client.mVPWorld.findUnique({
        where: { id },
      });
    }, "getWorldById");
  }

  /**
   * Retrieves all active worlds.
   * @returns An array of all active worlds.
   */
  async getAllWorlds(): Promise<MVPWorld[]> {
    return this.executeOperation(async (client) => {
      return client.mVPWorld.findMany({
        where: { isActive: true }, // As per common practice, only fetch active worlds
      });
    }, "getAllWorlds");
  }

  /**
   * Retrieves all locations associated with a specific world ID.
   * @param worldId - The ID of the world.
   * @returns An array of locations within the specified world.
   */
  async getLocationsByWorldId(worldId: string): Promise<MVPLocation[]> {
    const dbLocations = await this.executeOperation(async (client) => {
      return client.mVPLocation.findMany({
        where: { worldId },
      });
    }, "getLocationsByWorldId");
    return dbLocations as MVPLocation[];
  }

  /**
   * Retrieves a specific location by its ID.
   * @param locationId - The ID of the location to retrieve.
   * @returns The location if found, otherwise null.
   */
  async getLocationById(locationId: string): Promise<MVPLocation | null> {
    const dbLocation = await this.executeOperation(async (client) => {
      return client.mVPLocation.findUnique({
        where: { id: locationId },
      });
    }, "getLocationById");
    return dbLocation as MVPLocation | null;
  }

  /**
   * Retrieves the starting location for a specific world.
   * @param worldId - The ID of the world.
   * @returns The starting location if found, otherwise null.
   */
  async getStartingLocation(worldId: string): Promise<MVPLocation | null> {
    const dbLocation = await this.executeOperation(async (client) => {
      return client.mVPLocation.findFirst({
        where: {
          worldId,
          isStartingLocation: true,
        },
      });
    }, "getStartingLocation");
    return dbLocation as MVPLocation | null;
  }

  /**
   * Retrieves all lore fragments for a specific world.
   * @param worldId - The ID of the world.
   * @returns An array of lore fragments for the specified world.
   */
  async getLoreForWorld(worldId: string): Promise<MVPLoreFragment[]> {
    return this.executeOperation(async (client) => {
      const loreFragments = await client.mVPLoreFragment.findMany({
        where: { worldId },
      });
      // Prisma might return types where some fields are nullable,
      // ensure it matches MVPLoreFragment strict type.
      // For MVP, we'll cast. In a full app, a mapping/validation layer might be better.
      return loreFragments as MVPLoreFragment[];
    }, "getLoreForWorld");
  }

  async getLocationWithEvents(
    locationId: string
  ): Promise<MVPLocationWithEvents | null> {
    const dbLocation = await this.executeOperation(async (client) => {
      return client.mVPLocation.findUnique({
        where: { id: locationId },
        include: {
          MVPEvent: true,
        },
      });
    }, "getLocationWithEvents");
    return dbLocation as MVPLocationWithEvents | null;
  }

  async getLoreForLocation(locationId: string): Promise<MVPLoreFragment[]> {
    const dbLoreFragments = await this.executeOperation(async (client) => {
      return client.mVPLoreFragment.findMany({
        where: { locationId },
      });
    }, "getLoreForLocation");
    return dbLoreFragments as MVPLoreFragment[];
  }
}

export const worldRepo = new WorldRepository();
