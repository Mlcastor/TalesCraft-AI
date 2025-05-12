"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGameEngine } from "@/lib/game-engine";
import { GameCharacter, Location, DangerLevel } from "@/lib/ai/aiService";
import {
  createExampleLocation,
  createExampleCharacter,
} from "@/lib/ai/examples/narrativeDirectorExample";
import { NarrativeItem } from "@/types/narrative";
import { GameState } from "@/types/database";

// Define a type for worldState
interface WorldState {
  timeOfDay: string;
  discoveredLocations: string[];
  completedEvents: string[];
  npcRelationships: Record<string, number>;
  currentLocation?: Location;
}

// Character information from the game state
interface CharacterInfo {
  name?: string;
  backstory?: string;
  appearance?: string;
  personalityTraits?: {
    primary?: string;
    secondary?: string[];
    flaws?: string[];
    motivations?: string[];
  };
}

// Extended game state with world and location relationships
interface ExtendedGameState extends GameState {
  world?: { id: string; name?: string };
  location?: { id: string; name?: string };
  character?: CharacterInfo;
}

interface UseGameInitializationProps {
  characterId: string;
}

interface UseGameInitializationResult {
  initialized: boolean;
  isProcessing: boolean;
  loadingFromDB: boolean;
  playerCharacter: GameCharacter | null;
  currentLocation: Location;
  worldId: string | undefined;
  locationId: string | undefined;
  narrativeHistory: NarrativeItem[];
  setNarrativeHistory: React.Dispatch<React.SetStateAction<NarrativeItem[]>>;
  worldState: WorldState | null;
}

/**
 * Fetches location data and transforms it to the Location format used by the game
 *
 * @param worldId - World ID to fetch data for
 * @param locationId - Optional location ID to fetch specific location
 * @returns Promise that resolves to a Location object
 */
async function fetchLocationData(
  worldId: string,
  locationId?: string
): Promise<Location> {
  try {
    // Default location data in case the fetch fails
    const defaultLocation: Location = {
      id: "default-location",
      name: "Unknown Area",
      description: "An area shrouded in mystery.",
      connectedLocations: [],
      dangerLevel: DangerLevel.LOW,
    };

    console.log(
      `[fetchLocationData] Fetching location data - worldId: ${worldId}, locationId: ${
        locationId || "none"
      }`
    );

    // If no locationId is provided, try to get a starting location for the world
    if (!locationId) {
      const response = await fetch(
        `/api/world/${worldId}/locations?starting=true`
      );

      if (response.ok) {
        const startingLocations = await response.json();
        if (startingLocations && startingLocations.length > 0) {
          const location = startingLocations[0];
          console.log(
            `[fetchLocationData] Found starting location: ${location.name}`
          );

          // Transform to Location format
          return {
            id: location.id,
            name: location.name,
            description: location.description || "A mysterious location.",
            connectedLocations: location.connectedLocationIds || [],
            dangerLevel: location.dangerLevel || DangerLevel.LOW,
          };
        }
      }

      // If we couldn't get a starting location, try to get the world info to create a default one
      const worldResponse = await fetch(`/api/world/${worldId}`);
      if (worldResponse.ok) {
        const world = await worldResponse.json();
        defaultLocation.name = `${
          world.name || "Unknown World"
        } - Starting Point`;
        defaultLocation.description = `You find yourself at the beginning of your journey in ${
          world.name || "this world"
        }.`;
      }
    } else {
      // If locationId is provided, fetch that specific location
      const response = await fetch(`/api/location/${locationId}`);

      if (response.ok) {
        const location = await response.json();
        console.log(
          `[fetchLocationData] Found specific location: ${location.name}`
        );

        // Transform to Location format
        return {
          id: location.id,
          name: location.name,
          description: location.description || "A mysterious location.",
          connectedLocations: location.connectedLocationIds || [],
          dangerLevel: location.dangerLevel || DangerLevel.LOW,
        };
      }
    }

    return defaultLocation;
  } catch (error) {
    console.error("[fetchLocationData] Error fetching location data:", error);

    // Return a default location in case of error
    return createExampleLocation();
  }
}

/**
 * Custom hook to handle game initialization
 */
export function useGameInitialization({
  characterId,
}: UseGameInitializationProps): UseGameInitializationResult {
  const router = useRouter();
  const { gameState, session, isLoading, resumeGame, loadNarrativeHistory } =
    useGameEngine();

  const [initialized, setInitialized] = useState(false);
  const [narrativeHistory, setNarrativeHistory] = useState<NarrativeItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [loadingFromDB, setLoadingFromDB] = useState(false);
  const [playerCharacter, setPlayerCharacter] = useState<GameCharacter | null>(
    null
  );
  const [currentLocation, setCurrentLocation] = useState<Location>(
    createExampleLocation()
  );
  const [worldId, setWorldId] = useState<string | undefined>(undefined);
  const [locationId, setLocationId] = useState<string | undefined>(undefined);
  const [worldState, setWorldState] = useState<WorldState | null>(null);

  // Initialize the game when the component mounts
  useEffect(() => {
    async function initializeGame() {
      try {
        // Only set processing flag if not already in a loading state
        if (!isProcessing) {
          setIsProcessing(true);
        }

        if (!characterId) {
          router.push("/characters");
          return;
        }

        // Only try to resume the game if we don't already have a session and game state
        if (!session || !gameState) {
          // Attempt to resume an existing game, or start a new one if none exists
          setLoadingFromDB(true);
          await resumeGame(characterId);
          setLoadingFromDB(false);
        }

        // At this point we should have a game state
        if (gameState) {
          console.log("[initializeGame] Game state loaded");

          // Cast to extended game state to access properties safely
          const extendedState = gameState as unknown as ExtendedGameState;

          // Extract world and location IDs from game state
          let extractedWorldId: string | undefined = undefined;
          let extractedLocationId: string | undefined = undefined;

          // Try both possible structures: direct worldId or nested world.id
          if (extendedState.worldId) {
            console.log(
              "[initializeGame] Using worldId from gameState.worldId:",
              extendedState.worldId
            );
            extractedWorldId = extendedState.worldId;
            setWorldId(extendedState.worldId);
          } else if (extendedState.world?.id) {
            console.log(
              "[initializeGame] Using worldId from gameState.world.id:",
              extendedState.world.id
            );
            extractedWorldId = extendedState.world.id;
            setWorldId(extendedState.world.id);
          }

          if (extendedState.locationId) {
            console.log(
              "[initializeGame] Using locationId from gameState.locationId:",
              extendedState.locationId
            );
            extractedLocationId = extendedState.locationId;
            setLocationId(extendedState.locationId);
          } else if (extendedState.location?.id) {
            console.log(
              "[initializeGame] Using locationId from gameState.location.id:",
              extendedState.location.id
            );
            extractedLocationId = extendedState.location.id;
            setLocationId(extendedState.location.id);
          }

          // Extract world state information
          if (extendedState.worldState) {
            setWorldState(extendedState.worldState as unknown as WorldState);
          }

          // Create a character from the game state
          const characterInfo = extendedState.character || {};

          // Create a character from the game state
          const character: GameCharacter = {
            id: characterId,
            name: characterInfo.name || "Adventurer",
            backstory:
              characterInfo.backstory || "An adventurer seeking glory.",
            appearanceDescription:
              characterInfo.appearance || "A mysterious figure.",
            personalityTraits: {
              primary: characterInfo.personalityTraits?.primary || "Curious",
              secondary: characterInfo.personalityTraits?.secondary || [
                "Brave",
              ],
              flaws: characterInfo.personalityTraits?.flaws || ["Impulsive"],
              motivations: characterInfo.personalityTraits?.motivations || [
                "Adventure",
              ],
            },
          };

          // Set player character immediately so it's available for choices
          setPlayerCharacter(character);
          console.log(
            "[initializeGame] Player character initialized:",
            character.name
          );

          // Fetch real location data if we have a worldId
          if (extractedWorldId) {
            try {
              console.log(
                `[initializeGame] Fetching real location data for world: ${extractedWorldId}`
              );
              const locationData = await fetchLocationData(
                extractedWorldId,
                extractedLocationId
              );
              console.log(
                `[initializeGame] Using real location: ${locationData.name}`
              );
              setCurrentLocation(locationData);
            } catch (locationError) {
              console.error(
                "[initializeGame] Failed to fetch location data:",
                locationError
              );

              // Fallback to using example location
              console.log(
                "[initializeGame] Using example location as fallback"
              );
              setCurrentLocation(createExampleLocation());
            }
          } else {
            console.log(
              "[initializeGame] No worldId available, using example location"
            );
            setCurrentLocation(createExampleLocation());
          }

          // Log the world and location IDs for debugging
          console.log(
            "[initializeGame] Game initialized with worldId:",
            extractedWorldId,
            "and locationId:",
            extractedLocationId
          );

          // Load narrative history if available
          try {
            // Load narrative history from the database
            setLoadingFromDB(true);
            const history = await loadNarrativeHistory();
            setLoadingFromDB(false);

            if (history && history.length > 0) {
              setNarrativeHistory(history as NarrativeItem[]);
              console.log(
                "[initializeGame] Loaded narrative history:",
                history.length,
                "items"
              );
            }
          } catch (err) {
            console.error(
              "[initializeGame] Failed to load narrative history:",
              err
            );
          }
        }

        setInitialized(true);
      } catch (err) {
        console.error("[initializeGame] Failed to initialize game:", err);
      } finally {
        setIsProcessing(false); // Reset processing state after everything is done
        setLoadingFromDB(false);
      }
    }

    // Check if we already have state from server-side initialization
    if (session && gameState && !initialized && !isLoading) {
      initializeGame();
    } else if (!initialized && !isLoading) {
      initializeGame();
    }
  }, [
    characterId,
    initialized,
    isLoading,
    resumeGame,
    router,
    session,
    gameState,
    loadNarrativeHistory,
    isProcessing,
  ]);

  return {
    initialized,
    isProcessing,
    loadingFromDB,
    playerCharacter,
    currentLocation,
    worldId,
    locationId,
    narrativeHistory,
    setNarrativeHistory,
    worldState,
  };
}
