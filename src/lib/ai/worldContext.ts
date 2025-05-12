/**
 * World Context Provider for AI Services
 * Connects database lore and world information to AI prompts
 */

import { getWorldById, getWorldWithRelatedData } from "@/lib/db/world";
import {
  getLoreFragmentsByWorldId,
  getLoreFragmentsByContextId,
} from "@/lib/db/loreFragment";
import {
  getLocationById,
  getConnectedLocations,
  getLocationWithEvents,
} from "@/lib/db/location";
import { DangerLevel, Location } from "./aiService";

/**
 * Represents world context for AI services
 */
export interface WorldContext {
  worldName: string;
  worldDescription: string;
  currentLocation?: Location;
  relevantLore: Array<{ title: string; content: string }>;
}

/**
 * Gets comprehensive world context for a specific world and location
 *
 * @param worldId - The ID of the world to get context for
 * @param locationId - Optional ID of the current location
 * @returns WorldContext object with world data, location, and relevant lore
 */
export async function getWorldContextForAI(
  worldId: string,
  locationId?: string
): Promise<WorldContext> {
  console.log(
    `Getting world context for worldId: ${worldId}, locationId: ${
      locationId || "none"
    }`
  );

  try {
    // Get the world with related data
    console.log(`Fetching world data from database for ID: ${worldId}`);
    const world = await getWorldWithRelatedData(worldId);

    if (!world) {
      console.error(`World with ID ${worldId} not found in database`);
      throw new Error(`World with ID ${worldId} not found`);
    }

    console.log(`Found world: ${world.name}`);

    // Initialize the world context
    const worldContext: WorldContext = {
      worldName: world.name,
      worldDescription: world.description || "",
      relevantLore: [],
    };

    // Get relevant lore fragments for the world
    console.log(`Fetching lore fragments for worldId: ${worldId}`);
    const loreFragments = await getLoreFragmentsByWorldId(worldId, false);
    console.log(`Found ${loreFragments.length} lore fragments for the world`);

    // Transform lore fragments to the format expected by AI service
    worldContext.relevantLore = loreFragments.map((fragment) => ({
      title: fragment.title,
      content: fragment.content,
    }));

    // If a location ID is provided, get that location's details
    if (locationId) {
      console.log(`Fetching location data for locationId: ${locationId}`);
      const location = await getLocationById(locationId);

      if (location) {
        console.log(`Found location: ${location.name}`);

        // Get connected locations
        console.log(
          `Fetching connected locations for locationId: ${locationId}`
        );
        const connectedLocations = await getConnectedLocations(locationId);
        const connectedLocationNames = connectedLocations.map(
          (loc) => loc.name
        );
        console.log(`Found ${connectedLocations.length} connected locations`);

        // Get location events (could be used for danger level inference)
        console.log(`Fetching events for locationId: ${locationId}`);
        const locationWithEvents = await getLocationWithEvents(locationId);
        const eventsCount = locationWithEvents?.events?.length || 0;
        console.log(`Found ${eventsCount} events for the location`);

        // Get location-specific lore
        console.log(
          `Fetching location-specific lore for locationId: ${locationId}`
        );
        const locationLore = await getLoreFragmentsByContextId(
          locationId,
          false
        );
        console.log(
          `Found ${locationLore.length} lore fragments specific to this location`
        );

        // Add location-specific lore to relevantLore
        worldContext.relevantLore.push(
          ...locationLore.map((fragment) => ({
            title: fragment.title,
            content: fragment.content,
          }))
        );

        // Create the Location object for the AI service
        worldContext.currentLocation = {
          id: location.id,
          name: location.name,
          description: location.description || "",
          connectedLocations: connectedLocationNames,
          dangerLevel: inferDangerLevel(locationWithEvents?.events || []),
        };
      } else {
        console.warn(`Location with ID ${locationId} not found in database`);
      }
    }

    console.log(
      `Completed world context with ${worldContext.relevantLore.length} total lore fragments`
    );
    return worldContext;
  } catch (error) {
    console.error("Error in getWorldContextForAI:", error);
    throw error;
  }
}

/**
 * Infer the danger level of a location based on its events
 *
 * @param events - The events at the location
 * @returns The inferred danger level
 */
function inferDangerLevel(events: any[]): DangerLevel {
  // Simple logic to infer danger level based on events
  // This could be made more sophisticated in the future

  if (!events.length) {
    return DangerLevel.LOW;
  }

  // Count events with dangerous keywords in their descriptions
  const dangerousEvents = events.filter((event) => {
    const description = event.description.toLowerCase();
    return (
      description.includes("danger") ||
      description.includes("threat") ||
      description.includes("enemy") ||
      description.includes("monster") ||
      description.includes("attack")
    );
  });

  const dangerRatio = dangerousEvents.length / events.length;

  if (dangerRatio >= 0.7) return DangerLevel.EXTREME;
  if (dangerRatio >= 0.5) return DangerLevel.HIGH;
  if (dangerRatio >= 0.3) return DangerLevel.MODERATE;
  if (dangerRatio > 0) return DangerLevel.LOW;

  return DangerLevel.NONE;
}
