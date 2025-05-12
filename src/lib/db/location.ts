import { Prisma } from "@/generated/prisma";
import { prisma } from "./prisma";
import { BaseRepository } from "./base/BaseRepository";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";

/**
 * Repository for location-related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class LocationRepository extends BaseRepository {
  /**
   * Create a new LocationRepository instance
   */
  constructor() {
    super("Location");
  }

  /**
   * Gets all locations for a specific world
   *
   * @param worldId - The world ID to filter by
   * @param options - Optional pagination options
   * @returns Array of locations for the specified world
   */
  async getLocationsByWorldId(
    worldId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.location.findMany({
          where: {
            worldId,
          },
          orderBy: {
            name: "asc",
          },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getLocationsByWorldId"
    );
  }

  /**
   * Gets a single location by its ID
   *
   * @param id - The location ID to find
   * @returns The location
   * @throws RecordNotFoundError if the location does not exist
   */
  async getLocationById(id: string) {
    return this.executeOperation(async (client) => {
      const location = await client.location.findUnique({
        where: { id },
      });

      return this.ensureExists(location, id);
    }, "getLocationById");
  }

  /**
   * Find a location by ID (returns null if not found)
   *
   * @param id Location ID
   * @returns The location or null if not found
   */
  async findLocationById(id: string) {
    return this.executeOperation(
      (client) =>
        client.location.findUnique({
          where: { id },
        }),
      "findLocationById"
    );
  }

  /**
   * Gets a location with events that can occur there
   *
   * @param id - The location ID to find
   * @returns The location with related events
   * @throws RecordNotFoundError if the location does not exist
   */
  async getLocationWithEvents(id: string) {
    return this.executeOperation(async (client) => {
      const location = await client.location.findUnique({
        where: { id },
        include: {
          events: true,
        },
      });

      return this.ensureExists(location, id);
    }, "getLocationWithEvents");
  }

  /**
   * Gets all starting locations for a specific world
   *
   * @param worldId - The world ID to filter by
   * @param options - Optional pagination options
   * @returns Array of starting locations for the specified world
   */
  async getStartingLocationsByWorldId(
    worldId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.location.findMany({
          where: {
            worldId,
            isStartingLocation: true,
          },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getStartingLocationsByWorldId"
    );
  }

  /**
   * Gets connected locations based on the connectedLocationIds array
   *
   * @param locationId - The current location ID
   * @returns Array of locations connected to the specified location
   */
  async getConnectedLocations(locationId: string) {
    return this.executeOperation(async (client) => {
      const currentLocation = await client.location.findUnique({
        where: {
          id: locationId,
        },
        select: {
          connectedLocationIds: true,
        },
      });

      if (!currentLocation) {
        return [];
      }

      return client.location.findMany({
        where: {
          id: {
            in: currentLocation.connectedLocationIds,
          },
        },
      });
    }, "getConnectedLocations");
  }

  /**
   * Creates a new location
   *
   * @param data - The location data to create
   * @returns The created location
   */
  async createLocation(data: Prisma.LocationCreateInput) {
    return this.executeOperation(
      (client) =>
        client.location.create({
          data,
        }),
      "createLocation"
    );
  }

  /**
   * Updates an existing location
   *
   * @param id - The ID of the location to update
   * @param data - The data to update
   * @returns The updated location
   * @throws RecordNotFoundError if the location does not exist
   */
  async updateLocation(id: string, data: Prisma.LocationUpdateInput) {
    try {
      return await this.executeOperation(
        (client) =>
          client.location.update({
            where: { id },
            data,
          }),
        "updateLocation"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("Location", id);
      }
      throw error;
    }
  }

  /**
   * Connects two locations by updating their connectedLocationIds arrays
   *
   * @param locationId - The first location to connect
   * @param targetLocationId - The second location to connect
   * @returns The updated first location
   * @throws RecordNotFoundError if either location does not exist
   */
  async connectLocations(locationId: string, targetLocationId: string) {
    return this.executeTransaction(async (tx) => {
      // First, get the current connected locations for both locations
      const [location, targetLocation] = await Promise.all([
        tx.location.findUnique({
          where: { id: locationId },
          select: { connectedLocationIds: true },
        }),
        tx.location.findUnique({
          where: { id: targetLocationId },
          select: { connectedLocationIds: true },
        }),
      ]);

      if (!location || !targetLocation) {
        throw new RecordNotFoundError(
          "Location",
          !location ? locationId : targetLocationId
        );
      }

      // Then, update both locations to include the other in their connected locations
      // Only add the connection if it doesn't already exist
      const locationUpdate = location.connectedLocationIds.includes(
        targetLocationId
      )
        ? location.connectedLocationIds
        : [...location.connectedLocationIds, targetLocationId];

      const targetLocationUpdate = targetLocation.connectedLocationIds.includes(
        locationId
      )
        ? targetLocation.connectedLocationIds
        : [...targetLocation.connectedLocationIds, locationId];

      // Perform the updates within the transaction
      await Promise.all([
        tx.location.update({
          where: { id: locationId },
          data: { connectedLocationIds: locationUpdate },
        }),
        tx.location.update({
          where: { id: targetLocationId },
          data: { connectedLocationIds: targetLocationUpdate },
        }),
      ]);

      // Return the updated first location
      return tx.location.findUnique({
        where: { id: locationId },
      });
    });
  }

  /**
   * Disconnects two locations by removing them from each other's connectedLocationIds arrays
   *
   * @param locationId - The first location to disconnect
   * @param targetLocationId - The second location to disconnect
   * @returns The updated first location
   * @throws RecordNotFoundError if either location does not exist
   */
  async disconnectLocations(locationId: string, targetLocationId: string) {
    return this.executeTransaction(async (tx) => {
      // First, get the current connected locations for both locations
      const [location, targetLocation] = await Promise.all([
        tx.location.findUnique({
          where: { id: locationId },
          select: { connectedLocationIds: true },
        }),
        tx.location.findUnique({
          where: { id: targetLocationId },
          select: { connectedLocationIds: true },
        }),
      ]);

      if (!location || !targetLocation) {
        throw new RecordNotFoundError(
          "Location",
          !location ? locationId : targetLocationId
        );
      }

      // Remove the locations from each other's connected arrays
      const locationUpdate = location.connectedLocationIds.filter(
        (id) => id !== targetLocationId
      );

      const targetLocationUpdate = targetLocation.connectedLocationIds.filter(
        (id) => id !== locationId
      );

      // Perform the updates within the transaction
      await Promise.all([
        tx.location.update({
          where: { id: locationId },
          data: { connectedLocationIds: locationUpdate },
        }),
        tx.location.update({
          where: { id: targetLocationId },
          data: { connectedLocationIds: targetLocationUpdate },
        }),
      ]);

      // Return the updated first location
      return tx.location.findUnique({
        where: { id: locationId },
      });
    });
  }

  /**
   * Count locations for a specific world
   *
   * @param worldId The world ID to count locations for
   * @returns Number of locations
   */
  async countLocationsByWorldId(worldId: string): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.location.count({
          where: { worldId },
        }),
      "countLocationsByWorldId"
    );
  }
}

// Export singleton instance
export const locationRepository = new LocationRepository();

// Backwards compatibility exports for existing code
export const getLocationsByWorldId =
  locationRepository.getLocationsByWorldId.bind(locationRepository);
export const getLocationById =
  locationRepository.getLocationById.bind(locationRepository);
export const getLocationWithEvents =
  locationRepository.getLocationWithEvents.bind(locationRepository);
export const getStartingLocationsByWorldId =
  locationRepository.getStartingLocationsByWorldId.bind(locationRepository);
export const getConnectedLocations =
  locationRepository.getConnectedLocations.bind(locationRepository);
export const createLocation =
  locationRepository.createLocation.bind(locationRepository);
export const updateLocation =
  locationRepository.updateLocation.bind(locationRepository);
export const connectLocations =
  locationRepository.connectLocations.bind(locationRepository);
