import { Prisma } from "@/generated/prisma";
import { prisma } from "./prisma";
import { BaseRepository } from "./base/BaseRepository";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";

/**
 * Repository for event-related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class EventRepository extends BaseRepository {
  /**
   * Create a new EventRepository instance
   */
  constructor() {
    super("Event");
  }

  /**
   * Gets all events for a specific world
   *
   * @param worldId - The world ID to filter by
   * @param options - Optional pagination options
   * @returns Array of events for the specified world
   */
  async getEventsByWorldId(
    worldId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.event.findMany({
          where: {
            worldId,
          },
          include: {
            location: true,
          },
          orderBy: {
            title: "asc",
          },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getEventsByWorldId"
    );
  }

  /**
   * Gets all events for a specific location
   *
   * @param locationId - The location ID to filter by
   * @param options - Optional pagination options
   * @returns Array of events for the specified location
   */
  async getEventsByLocationId(
    locationId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.event.findMany({
          where: {
            locationId,
          },
          orderBy: {
            title: "asc",
          },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getEventsByLocationId"
    );
  }

  /**
   * Gets a single event by its ID
   *
   * @param id - The event ID to find
   * @returns The event
   * @throws RecordNotFoundError if the event does not exist
   */
  async getEventById(id: string) {
    return this.executeOperation(async (client) => {
      const event = await client.event.findUnique({
        where: { id },
        include: {
          location: true,
        },
      });

      return this.ensureExists(event, id);
    }, "getEventById");
  }

  /**
   * Find an event by ID (returns null if not found)
   *
   * @param id Event ID
   * @returns The event or null if not found
   */
  async findEventById(id: string) {
    return this.executeOperation(
      (client) =>
        client.event.findUnique({
          where: { id },
          include: {
            location: true,
          },
        }),
      "findEventById"
    );
  }

  /**
   * Creates a new event
   *
   * @param data - The event data to create
   * @returns The created event
   */
  async createEvent(data: Prisma.EventCreateInput) {
    return this.executeOperation(
      (client) =>
        client.event.create({
          data,
          include: {
            location: true,
          },
        }),
      "createEvent"
    );
  }

  /**
   * Updates an existing event
   *
   * @param id - The ID of the event to update
   * @param data - The data to update
   * @returns The updated event
   * @throws RecordNotFoundError if the event does not exist
   */
  async updateEvent(id: string, data: Prisma.EventUpdateInput) {
    try {
      return await this.executeOperation(
        (client) =>
          client.event.update({
            where: { id },
            data,
            include: {
              location: true,
            },
          }),
        "updateEvent"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("Event", id);
      }
      throw error;
    }
  }

  /**
   * Gets random events for a specific location based on probability
   *
   * @param locationId - The location ID to get events for
   * @param count - The maximum number of events to return
   * @returns Array of randomly selected events
   */
  async getRandomEventsForLocation(locationId: string, count = 1) {
    return this.executeOperation(async (client) => {
      // Get all events for the location
      const allEvents = await client.event.findMany({
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
    }, "getRandomEventsForLocation");
  }

  /**
   * Deletes an event
   *
   * @param id - The ID of the event to delete
   * @returns The deleted event
   * @throws RecordNotFoundError if the event does not exist
   */
  async deleteEvent(id: string) {
    try {
      return await this.executeOperation(
        (client) =>
          client.event.delete({
            where: { id },
          }),
        "deleteEvent"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("Event", id);
      }
      throw error;
    }
  }

  /**
   * Count events for a specific world
   *
   * @param worldId The world ID
   * @returns Number of events
   */
  async countEventsByWorldId(worldId: string): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.event.count({
          where: { worldId },
        }),
      "countEventsByWorldId"
    );
  }

  /**
   * Count events for a specific location
   *
   * @param locationId The location ID
   * @returns Number of events
   */
  async countEventsByLocationId(locationId: string): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.event.count({
          where: { locationId },
        }),
      "countEventsByLocationId"
    );
  }
}

// Export singleton instance
export const eventRepository = new EventRepository();

// Backwards compatibility exports
export const getEventsByWorldId =
  eventRepository.getEventsByWorldId.bind(eventRepository);
export const getEventsByLocationId =
  eventRepository.getEventsByLocationId.bind(eventRepository);
export const getEventById = eventRepository.getEventById.bind(eventRepository);
export const createEvent = eventRepository.createEvent.bind(eventRepository);
export const updateEvent = eventRepository.updateEvent.bind(eventRepository);
export const getRandomEventsForLocation =
  eventRepository.getRandomEventsForLocation.bind(eventRepository);
export const deleteEvent = eventRepository.deleteEvent.bind(eventRepository);
