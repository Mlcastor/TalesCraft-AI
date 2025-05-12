import { Prisma } from "@/generated/prisma";
import { prisma } from "./prisma";

/**
 * Gets all events for a specific world
 *
 * @param worldId - The world ID to filter by
 * @returns Array of events for the specified world
 */
export async function getEventsByWorldId(worldId: string) {
  return prisma.event.findMany({
    where: {
      worldId,
    },
    include: {
      location: true,
    },
    orderBy: {
      title: "asc",
    },
  });
}

/**
 * Gets all events for a specific location
 *
 * @param locationId - The location ID to filter by
 * @returns Array of events for the specified location
 */
export async function getEventsByLocationId(locationId: string) {
  return prisma.event.findMany({
    where: {
      locationId,
    },
    orderBy: {
      title: "asc",
    },
  });
}

/**
 * Gets a single event by its ID
 *
 * @param id - The event ID to find
 * @returns The event or null if not found
 */
export async function getEventById(id: string) {
  return prisma.event.findUnique({
    where: {
      id,
    },
    include: {
      location: true,
    },
  });
}

/**
 * Creates a new event
 *
 * @param data - The event data to create
 * @returns The created event
 */
export async function createEvent(data: Prisma.EventCreateInput) {
  return prisma.event.create({
    data,
    include: {
      location: true,
    },
  });
}

/**
 * Updates an existing event
 *
 * @param id - The ID of the event to update
 * @param data - The data to update
 * @returns The updated event
 */
export async function updateEvent(id: string, data: Prisma.EventUpdateInput) {
  return prisma.event.update({
    where: {
      id,
    },
    data,
    include: {
      location: true,
    },
  });
}

/**
 * Gets random events for a specific location based on probability
 *
 * @param locationId - The location ID to get events for
 * @param count - The maximum number of events to return
 * @returns Array of randomly selected events
 */
export async function getRandomEventsForLocation(
  locationId: string,
  count = 1
) {
  // Get all events for the location
  const allEvents = await prisma.event.findMany({
    where: {
      locationId,
    },
  });

  // Define the type for triggerConditions
  interface TriggerConditions {
    probability?: number;
    requiredItems?: string[];
    requiredDecisions?: string[];
  }

  // Filter events based on their probability
  const eligibleEvents = allEvents.filter((event) => {
    // Parse the JSON or use empty object if null
    const conditions = (event.triggerConditions as TriggerConditions) || {};
    const probability = conditions.probability || 0;
    return Math.random() <= probability;
  });

  // Shuffle the eligible events
  const shuffled = [...eligibleEvents].sort(() => 0.5 - Math.random());

  // Return the specified count or all eligible events if less than count
  return shuffled.slice(0, count);
}

/**
 * Deletes an event
 *
 * @param id - The ID of the event to delete
 * @returns The deleted event
 */
export async function deleteEvent(id: string) {
  return prisma.event.delete({
    where: {
      id,
    },
  });
}
