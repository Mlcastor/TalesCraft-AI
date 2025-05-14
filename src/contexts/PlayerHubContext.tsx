"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type {
  Character,
  World,
  CharacterWorldStateWithWorld,
} from "@/types/database";
import { useRouter } from "next/navigation";
import {
  getUserCharacters,
  getAllCharacterWorldStates,
} from "@/lib/actions/character-actions";
import { getActiveWorlds } from "@/lib/actions/world-actions";

/**
 * Player Hub context interface
 */
export interface PlayerHubContextType {
  /**
   * List of available characters
   */
  characters: Character[];

  /**
   * Currently selected character ID
   */
  selectedCharacterId: string | null;

  /**
   * List of available worlds
   */
  worlds: World[];

  /**
   * Currently selected world ID
   */
  selectedWorldId: string | null;

  /**
   * Map of character-world states by character ID
   */
  characterWorldStates: Record<string, CharacterWorldStateWithWorld | null>;

  /**
   * Errors if any
   */
  error: string | null;

  /**
   * Whether data is loading
   */
  isLoading: boolean;

  /**
   * Set the selected character ID
   */
  selectCharacter: (characterId: string | null) => void;

  /**
   * Set the selected world ID
   */
  selectWorld: (worldId: string | null) => void;

  /**
   * Refresh all player hub data (characters, worlds, and states)
   */
  refreshData: () => Promise<void>;

  /**
   * Navigate to the character selection page for a world
   */
  navigateToWorld: (worldId: string) => void;

  /**
   * Navigate to the character detail page
   */
  navigateToCharacter: (characterId: string) => void;

  /**
   * Navigate to start a game with a character in a world
   */
  startGame: (characterId: string, worldId: string) => void;
}

// Create context with default values
const PlayerHubContext = createContext<PlayerHubContextType | undefined>(
  undefined
);

/**
 * Player Hub Provider props
 */
interface PlayerHubProviderProps {
  children: React.ReactNode;
  initialCharacters?: Character[];
  initialWorlds?: World[];
  initialCharacterWorldStates?: Record<
    string,
    CharacterWorldStateWithWorld | null
  >;
}

/**
 * Player Hub Provider component
 */
export function PlayerHubProvider({
  children,
  initialCharacters = [],
  initialWorlds = [],
  initialCharacterWorldStates = {},
}: PlayerHubProviderProps) {
  const router = useRouter();
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(
    null
  );
  const [worlds, setWorlds] = useState<World[]>(initialWorlds);
  const [selectedWorldId, setSelectedWorldId] = useState<string | null>(null);
  const [characterWorldStates, setCharacterWorldStates] = useState<
    Record<string, CharacterWorldStateWithWorld | null>
  >(initialCharacterWorldStates);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Refresh all player hub data
   */
  const refreshData = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      // Load characters
      const charactersResult = await getUserCharacters();
      setCharacters(charactersResult || []);

      // Load worlds
      const worldsResult = await getActiveWorlds();
      setWorlds(worldsResult || []);

      // Load character-world states
      if (charactersResult && charactersResult.length > 0) {
        const characterIds = charactersResult.map((char) => char.id);
        const statesResult = await getAllCharacterWorldStates(characterIds);

        // Convert the result to the correct type with default empty values
        const formattedStates: Record<
          string,
          CharacterWorldStateWithWorld | null
        > = {};

        // Initialize with null for all characters
        charactersResult.forEach((char) => {
          formattedStates[char.id] = null;
        });

        // Then update with actual data if present
        Object.entries(statesResult).forEach(([charId, states]) => {
          // If there are states for this character, use the first one
          // or keep it null if the array is empty
          if (states && states.length > 0) {
            formattedStates[charId] =
              states[0] as unknown as CharacterWorldStateWithWorld;
          }
        });

        setCharacterWorldStates(formattedStates);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load player hub data";
      setError(errorMessage);
      console.error("Failed to load player hub data:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initially load data if not provided
  useEffect(() => {
    if (
      initialCharacters.length === 0 ||
      initialWorlds.length === 0 ||
      Object.keys(initialCharacterWorldStates).length === 0
    ) {
      refreshData();
    }
  }, [
    initialCharacters,
    initialWorlds,
    initialCharacterWorldStates,
    refreshData,
  ]);

  /**
   * Set the selected character
   */
  const selectCharacter = useCallback((characterId: string | null) => {
    setSelectedCharacterId(characterId);
  }, []);

  /**
   * Set the selected world
   */
  const selectWorld = useCallback((worldId: string | null) => {
    setSelectedWorldId(worldId);
  }, []);

  /**
   * Navigate to world detail page
   */
  const navigateToWorld = useCallback(
    (worldId: string) => {
      router.push(`/player-hub/world/${worldId}`);
    },
    [router]
  );

  /**
   * Navigate to character detail page
   */
  const navigateToCharacter = useCallback(
    (characterId: string) => {
      router.push(`/player-hub/characters/${characterId}`);
    },
    [router]
  );

  /**
   * Start a game with a character in a world
   */
  const startGame = useCallback(
    (characterId: string, worldId: string) => {
      router.push(`/player-hub/characters/${characterId}/play/${worldId}`);
    },
    [router]
  );

  // Create context value
  const contextValue: PlayerHubContextType = {
    characters,
    selectedCharacterId,
    worlds,
    selectedWorldId,
    characterWorldStates,
    error,
    isLoading,
    selectCharacter,
    selectWorld,
    refreshData,
    navigateToWorld,
    navigateToCharacter,
    startGame,
  };

  return (
    <PlayerHubContext.Provider value={contextValue}>
      {children}
    </PlayerHubContext.Provider>
  );
}

/**
 * Custom hook to use the player hub context
 */
export function usePlayerHub() {
  const context = useContext(PlayerHubContext);

  if (context === undefined) {
    throw new Error("usePlayerHub must be used within a PlayerHubProvider");
  }

  return context;
}
