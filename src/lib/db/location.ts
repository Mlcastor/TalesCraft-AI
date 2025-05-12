import { Prisma } from "@/generated/prisma";
import { prisma } from "./prisma";

/**
 * Gets all locations for a specific world
 *
 * @param worldId - The world ID to filter by
 * @returns Array of locations for the specified world
 */
export async function getLocationsByWorldId(worldId: string) {
  return prisma.location.findMany({
    where: {
      worldId,
    },
    orderBy: {
      name: "asc",
    },
  });
}

/**
 * Gets a single location by its ID
 *
 * @param id - The location ID to find
 * @returns The location or null if not found
 */
export async function getLocationById(id: string) {
  return prisma.location.findUnique({
    where: {
      id,
    },
  });
}

/**
 * Gets a location with events that can occur there
 *
 * @param id - The location ID to find
 * @returns The location with related events
 */
export async function getLocationWithEvents(id: string) {
  return prisma.location.findUnique({
    where: {
      id,
    },
    include: {
      events: true,
    },
  });
}

/**
 * Gets all starting locations for a specific world
 *
 * @param worldId - The world ID to filter by
 * @returns Array of starting locations for the specified world
 */
export async function getStartingLocationsByWorldId(worldId: string) {
  return prisma.location.findMany({
    where: {
      worldId,
      isStartingLocation: true,
    },
  });
}

/**
 * Gets connected locations based on the connectedLocationIds array
 *
 * @param locationId - The current location ID
 * @returns Array of locations connected to the specified location
 */
export async function getConnectedLocations(locationId: string) {
  const currentLocation = await prisma.location.findUnique({
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

  return prisma.location.findMany({
    where: {
      id: {
        in: currentLocation.connectedLocationIds,
      },
    },
  });
}

/**
 * Creates a new location
 *
 * @param data - The location data to create
 * @returns The created location
 */
export async function createLocation(data: Prisma.LocationCreateInput) {
  return prisma.location.create({
    data,
  });
}

/**
 * Updates an existing location
 *
 * @param id - The ID of the location to update
 * @param data - The data to update
 * @returns The updated location
 */
export async function updateLocation(
  id: string,
  data: Prisma.LocationUpdateInput
) {
  return prisma.location.update({
    where: {
      id,
    },
    data,
  });
}

/**
 * Connects two locations by updating their connectedLocationIds arrays
 *
 * @param locationId - The first location to connect
 * @param targetLocationId - The second location to connect
 * @returns The updated first location
 */
export async function connectLocations(
  locationId: string,
  targetLocationId: string
) {
  // First, get the current connected locations for both locations
  const [location, targetLocation] = await Promise.all([
    prisma.location.findUnique({
      where: { id: locationId },
      select: { connectedLocationIds: true },
    }),
    prisma.location.findUnique({
      where: { id: targetLocationId },
      select: { connectedLocationIds: true },
    }),
  ]);

  if (!location || !targetLocation) {
    throw new Error("One or both locations not found");
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

  // Perform the updates
  await Promise.all([
    prisma.location.update({
      where: { id: locationId },
      data: { connectedLocationIds: locationUpdate },
    }),
    prisma.location.update({
      where: { id: targetLocationId },
      data: { connectedLocationIds: targetLocationUpdate },
    }),
  ]);

  // Return the updated first location
  return prisma.location.findUnique({
    where: { id: locationId },
  });
}
