"use server";

import { gameStateRepository } from "@/lib/db/gameState";
import { gameSessionRepository } from "@/lib/db/gameSession";
import { narrativeHistoryRepository } from "@/lib/db/narrativeHistory";
import { decisionRepository } from "@/lib/db/decision";
import type { GameSession, GameState } from "@/types/database";

// Default initial game state - matches the one in GameStateManager
const DEFAULT_INITIAL_STATE = {
  currentLocation: "village_square",
  narrativeContext:
    "You find yourself in the central square of a small village, bustling with activity.",
  characterState: {
    health: 100,
    stamina: 100,
    inventory: [],
    activeQuests: [],
    completedQuests: [],
    experience: 0,
    level: 1,
    stats: {
      strength: 10,
      dexterity: 10,
      intelligence: 10,
      charisma: 10,
    },
  },
  worldState: {
    timeOfDay: "morning",
    weather: "clear",
    discoveredLocations: ["village_square"],
    completedEvents: [],
    npcRelationships: {},
  },
  aiContext: {
    conversationHistory: [],
    playerBehaviorTags: [],
    narrativeThemes: ["adventure", "discovery"],
  },
};

/**
 * Get or create a game session for a character
 *
 * @param characterId The character ID
 * @returns The game session
 */
async function getOrCreateGameSession(
  characterId: string
): Promise<GameSession> {
  // Check if there's already an active session for this character
  const existingActiveSession =
    await gameSessionRepository.getActiveSessionForCharacter(characterId);

  if (existingActiveSession) {
    // Return the existing active session
    return existingActiveSession;
  }

  // Create a new session
  return gameSessionRepository.createGameSession({
    character: {
      connect: { id: characterId },
    },
    sessionData: {},
  });
}

/**
 * Check if a character has an existing game state
 *
 * @param characterId The character ID
 * @returns True if the character has an existing game state
 */
async function hasExistingGameState(characterId: string): Promise<boolean> {
  const latestGameState =
    await gameStateRepository.getLatestGameStateForCharacter(characterId);
  return !!latestGameState;
}

/**
 * Load the latest game state for a character
 *
 * @param characterId The character ID
 * @returns The latest game state or null if none exists
 */
async function loadLatestGameState(
  characterId: string
): Promise<GameState | null> {
  return gameStateRepository.getLatestGameStateForCharacter(characterId);
}

/**
 * Initialize a new game state
 *
 * @param characterId The character ID
 * @param sessionId The session ID
 * @param worldId The world ID (optional)
 * @param locationId The location ID (optional)
 * @param initialState Optional initial state overrides
 * @returns The created game state
 */
async function initializeGameState(
  characterId: string,
  sessionId: string,
  worldId?: string,
  locationId?: string,
  initialState: Partial<typeof DEFAULT_INITIAL_STATE> = {}
): Promise<GameState> {
  // Merge provided initial state with defaults
  const mergedInitialState = {
    currentLocation:
      initialState.currentLocation || DEFAULT_INITIAL_STATE.currentLocation,
    narrativeContext:
      initialState.narrativeContext || DEFAULT_INITIAL_STATE.narrativeContext,
    characterState: {
      ...DEFAULT_INITIAL_STATE.characterState,
      ...(initialState.characterState || {}),
    },
    worldState: {
      ...DEFAULT_INITIAL_STATE.worldState,
      ...(initialState.worldState || {}),
    },
    aiContext: {
      ...DEFAULT_INITIAL_STATE.aiContext,
      ...(initialState.aiContext || {}),
    },
  };

  // Create a new game state
  return gameStateRepository.createGameState({
    character: {
      connect: { id: characterId },
    },
    session: {
      connect: { id: sessionId },
    },
    world: worldId
      ? {
          connect: { id: worldId },
        }
      : undefined,
    location: locationId
      ? {
          connect: { id: locationId },
        }
      : undefined,
    currentLocation: mergedInitialState.currentLocation,
    narrativeContext: mergedInitialState.narrativeContext,
    characterState: mergedInitialState.characterState,
    worldState: mergedInitialState.worldState,
    aiContext: mergedInitialState.aiContext,
  });
}

/**
 * Start a new game session for a character
 *
 * @param characterId The ID of the character to start a game for
 * @returns The new game state and session
 */
export async function startNewGameSession(characterId: string): Promise<
  | {
      gameState: GameState;
      session: GameSession;
      error: null;
    }
  | {
      gameState: null;
      session: null;
      error: string;
    }
> {
  try {
    if (!characterId) {
      return {
        gameState: null,
        session: null,
        error: "No character ID provided",
      };
    }

    // Create a new session
    const session = await getOrCreateGameSession(characterId);

    // Initialize a new game state
    const gameState = await initializeGameState(characterId, session.id);

    return {
      gameState,
      session,
      error: null,
    };
  } catch (error) {
    console.error("Failed to start new game session:", error);
    return {
      gameState: null,
      session: null,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

/**
 * Resume an existing game for a character
 *
 * @param characterId The ID of the character to resume the game for
 * @param worldId The world ID (optional)
 * @param locationId The location ID (optional)
 * @returns The game state and session
 */
export async function resumeGameSession(
  characterId: string,
  worldId?: string,
  locationId?: string
): Promise<
  | {
      gameState: GameState;
      session: GameSession;
      error: null;
    }
  | {
      gameState: null;
      session: null;
      error: string;
    }
> {
  try {
    if (!characterId) {
      return {
        gameState: null,
        session: null,
        error: "No character ID provided",
      };
    }

    // Get or create a session
    const session = await getOrCreateGameSession(characterId);

    // Check if there's an existing game state
    const hasExisting = await hasExistingGameState(characterId);

    let gameState: GameState;

    if (hasExisting) {
      // Load the latest game state
      const loadedState = await loadLatestGameState(characterId);
      if (!loadedState) {
        // If loading failed, initialize a new state with worldId/locationId if provided
        gameState = await initializeGameState(
          characterId,
          session.id,
          worldId,
          locationId
        );
      } else {
        gameState = loadedState;

        // Prepare update data if needed
        const updateData: any = {};
        let needsUpdate = false;

        // Check if worldId is provided and different from the loaded game state's worldId
        if (worldId && worldId !== gameState.worldId) {
          console.log(
            `[resumeGameSession] Updating game state with new worldId: ${worldId}`
          );

          updateData.world = {
            connect: { id: worldId },
          };
          needsUpdate = true;
        }

        // Check if locationId is provided and different from the loaded game state's locationId
        if (locationId && locationId !== gameState.locationId) {
          console.log(
            `[resumeGameSession] Updating game state with new locationId: ${locationId}`
          );

          updateData.location = {
            connect: { id: locationId },
          };
          needsUpdate = true;
        }

        // Update the game state if needed
        if (needsUpdate) {
          gameState = await gameStateRepository.updateGameState(
            gameState.id,
            updateData
          );
        }
      }
    } else {
      // Initialize a new game state with worldId/locationId if provided
      gameState = await initializeGameState(
        characterId,
        session.id,
        worldId,
        locationId
      );
    }

    return {
      gameState,
      session,
      error: null,
    };
  } catch (error) {
    console.error("Failed to resume game session:", error);
    return {
      gameState: null,
      session: null,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

/**
 * Update the current game state
 *
 * @param sessionId The ID of the current session
 * @param characterId The ID of the character
 * @param updates The updates to apply to the game state
 * @returns The updated game state
 */
export async function updateGameStateAction(
  sessionId: string,
  characterId: string,
  updates: any
): Promise<
  | {
      gameState: GameState;
      error: null;
    }
  | {
      gameState: null;
      error: string;
    }
> {
  try {
    // First load the latest game state for this session
    const gameStates = await gameStateRepository.getGameStatesBySessionId(
      sessionId
    );
    if (!gameStates || gameStates.length === 0) {
      return {
        gameState: null,
        error: "No game states found for this session",
      };
    }

    // Use the most recent game state
    const currentGameState = gameStates[0];

    // Prepare the update data
    const updateData: any = {};

    if (updates.currentLocation) {
      updateData.currentLocation = updates.currentLocation;
    }

    if (updates.narrativeContext) {
      updateData.narrativeContext = updates.narrativeContext;
    }

    if (updates.aiContext) {
      updateData.aiContext = {
        ...((currentGameState.aiContext as Record<string, any>) || {}),
        ...updates.aiContext,
      };
    }

    // Handle world and location updates
    if (updates.worldId) {
      console.log(
        `[updateGameStateAction] Updating worldId to: ${updates.worldId}`
      );
      updateData.world = {
        connect: { id: updates.worldId },
      };
    }

    if (updates.locationId) {
      console.log(
        `[updateGameStateAction] Updating locationId to: ${updates.locationId}`
      );
      updateData.location = {
        connect: { id: updates.locationId },
      };
    }

    // Handle complex nested updates for characterState
    if (updates.characterState) {
      const currentCharacterState = currentGameState.characterState as Record<
        string,
        any
      >;
      updateData.characterState = {
        ...currentCharacterState,
        ...updates.characterState,
      };
    }

    // Handle complex nested updates for worldState
    if (updates.worldState) {
      const currentWorldState = currentGameState.worldState as Record<
        string,
        any
      >;
      updateData.worldState = {
        ...currentWorldState,
        ...updates.worldState,
      };
    }

    // Update the game state in the database
    const updatedGameState = await gameStateRepository.updateGameState(
      currentGameState.id,
      updateData
    );

    return {
      gameState: updatedGameState,
      error: null,
    };
  } catch (error) {
    console.error("Failed to update game state:", error);
    return {
      gameState: null,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

/**
 * Create a new checkpoint in the game
 *
 * @param sessionId The ID of the current session
 * @param characterId The ID of the character
 * @param savePointName Optional name for the save point
 * @returns The new game state
 */
export async function createCheckpointAction(
  sessionId: string,
  characterId: string,
  savePointName?: string
): Promise<
  | {
      gameState: GameState;
      error: null;
    }
  | {
      gameState: null;
      error: string;
    }
> {
  try {
    // First load the latest game state for this session
    const gameStates = await gameStateRepository.getGameStatesBySessionId(
      sessionId
    );
    if (!gameStates || gameStates.length === 0) {
      return {
        gameState: null,
        error: "No game states found for this session",
      };
    }

    // Use the most recent game state
    const currentGameState = gameStates[0];

    // Create a new game state based on the current one
    const newGameState = await gameStateRepository.createGameState({
      character: {
        connect: { id: characterId },
      },
      session: {
        connect: { id: sessionId },
      },
      savePointName,
      currentLocation: currentGameState.currentLocation,
      narrativeContext: currentGameState.narrativeContext || undefined,
      aiContext: currentGameState.aiContext || {},
      characterState: currentGameState.characterState || {},
      worldState: currentGameState.worldState || {},
      isAutosave: false,
    });

    return {
      gameState: newGameState,
      error: null,
    };
  } catch (error) {
    console.error("Failed to create checkpoint:", error);
    return {
      gameState: null,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

/**
 * End the current game session
 *
 * @param sessionId The ID of the session to end
 * @returns Success status
 */
export async function endGameSessionAction(sessionId: string): Promise<
  | {
      success: boolean;
      error: null;
    }
  | {
      success: false;
      error: string;
    }
> {
  try {
    if (!sessionId) {
      return {
        success: false,
        error: "No session ID provided",
      };
    }

    await gameSessionRepository.endGameSession(sessionId);

    return {
      success: true,
      error: null,
    };
  } catch (error) {
    console.error("Failed to end game session:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

/**
 * Save narrative history for a game state
 *
 * @param gameStateId The ID of the game state
 * @param narrativeHistory Array of narrative history items
 * @returns Array of created narrative history items or error message
 */
export async function saveNarrativeHistoryAction(
  gameStateId: string,
  narrativeHistory: Array<{
    type: string;
    content: any;
  }>
): Promise<
  | {
      success: true;
      error: null;
    }
  | {
      success: false;
      error: string;
    }
> {
  try {
    if (!gameStateId) {
      return {
        success: false,
        error: "No game state ID provided",
      };
    }

    // Save narrative history
    await narrativeHistoryRepository.saveNarrativeHistory(
      gameStateId,
      narrativeHistory
    );

    return {
      success: true,
      error: null,
    };
  } catch (error) {
    console.error("Failed to save narrative history:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

/**
 * Load narrative history for a game state
 *
 * @param gameStateId The ID of the game state
 * @returns Array of narrative history items or error message
 */
export async function loadNarrativeHistoryAction(gameStateId: string): Promise<
  | {
      narrativeHistory: Array<{
        id: string;
        type: string;
        content: any;
        timestamp: Date;
      }>;
      error: null;
    }
  | {
      narrativeHistory: null;
      error: string;
    }
> {
  try {
    if (!gameStateId) {
      return {
        narrativeHistory: null,
        error: "No game state ID provided",
      };
    }

    // Load narrative history from repository
    const history =
      await narrativeHistoryRepository.getNarrativeHistoryByGameStateId(
        gameStateId
      );

    // No need for additional parsing as it's handled in the repository
    const parsedHistory = history.map((item) => ({
      id: item.id,
      type: item.type,
      content: item.content,
      timestamp: item.timestamp,
    }));

    return {
      narrativeHistory: parsedHistory,
      error: null,
    };
  } catch (error) {
    console.error("Failed to load narrative history:", error);
    return {
      narrativeHistory: null,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}
