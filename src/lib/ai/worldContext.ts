/**
 * World Context Provider for AI Services
 * Connects database lore and world information to AI prompts
 */

import { worldRepo } from "@/lib/repositories/worldRepository";
import { DangerLevel } from "@/types/ai";
import { MVPLocation, MVPLoreFragment, MVPEvent } from "@/types/mvpTypes";

/**
 * Represents world context for AI services
 */
export interface MVPWorldContext {
  worldName: string;
  worldDescription: string;
  currentLocation?: MVPLocation;
  relevantLore: MVPLoreFragment[];
}

/**
 * Gets comprehensive world context for a specific world and location
 *
 * @param worldId - The ID of the world to get context for
 * @param locationId - Optional ID of the current location
 * @returns MVPWorldContext object with world data, location, and relevant lore
 */
export async function getWorldContextForAI(
  worldId: string,
  locationId?: string
): Promise<MVPWorldContext> {
  console.log(
    `Getting world context for worldId: ${worldId}, locationId: ${
      locationId || "none"
    }`
  );

  try {
    // Get the world with related data
    console.log(`Fetching world data from database for ID: ${worldId}`);
    const world = await worldRepo.getWorldById(worldId);

    if (!world) {
      console.error(`World with ID ${worldId} not found in database`);
      throw new Error(`World with ID ${worldId} not found`);
    }

    console.log(`Found world: ${world.name}`);

    // Initialize the world context
    const worldContext: MVPWorldContext = {
      worldName: world.name,
      worldDescription: world.description || "",
      relevantLore: [],
    };

    // Get relevant lore fragments for the world
    console.log(`Fetching lore fragments for worldId: ${worldId}`);
    const loreFragments = await worldRepo.getLoreForWorld(worldId);
    console.log(`Found ${loreFragments.length} lore fragments for the world`);

    // Transform lore fragments to the format expected by AI service
    worldContext.relevantLore = loreFragments as MVPLoreFragment[];

    // If a location ID is provided, get that location's details
    if (locationId) {
      console.log(`Fetching location data for locationId: ${locationId}`);
      const location = await worldRepo.getLocationById(locationId);

      if (location) {
        console.log(`Found location: ${location.name}`);

        // Get connected locations
        console.log(
          `Fetching connected locations for locationId: ${locationId}`
        );
        const connectedLocations = await worldRepo.getLocationsByWorldId(
          worldId
        );
        const connectedLocationNames = connectedLocations.map(
          (loc) => loc.name
        );
        console.log(`Found ${connectedLocations.length} connected locations`);

        // Get location events (could be used for danger level inference)
        console.log(`Fetching events for locationId: ${locationId}`);
        const locationEvents = await worldRepo.getLocationWithEvents(
          locationId
        );
        const eventsCount = locationEvents?.MVPEvent
          ? Array.isArray(locationEvents.MVPEvent)
            ? locationEvents.MVPEvent.length
            : 0
          : 0;
        console.log(`Found ${eventsCount} events for the location`);

        // Get location-specific lore
        console.log(
          `Fetching location-specific lore for locationId: ${locationId}`
        );
        const locationLore = await worldRepo.getLoreForLocation(locationId);
        console.log(
          `Found ${locationLore.length} lore fragments specific to this location`
        );

        // Add location-specific lore to relevantLore
        worldContext.relevantLore = [
          ...worldContext.relevantLore,
          ...locationLore,
        ];

        // Create the Location object for the AI service
        worldContext.currentLocation = {
          id: location.id,
          worldId: location.worldId,
          name: location.name,
          description: location.description || "",
          connectedLocationIds: connectedLocationNames,
          dangerLevel: inferDangerLevel(locationEvents?.MVPEvent || []),
          isStartingLocation: location.isStartingLocation,
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
