import { gameStateRepository } from "@/lib/db/gameState";
import { sessionManager } from "./SessionManager";
import type { GameState } from "@/types/database";
import { Prisma } from "@/generated/prisma/index";

/**
 * Default initial state for a new game
 */
const DEFAULT_INITIAL_STATE = {
  currentLocation: "village_center",
  characterState: {
    health: 100,
    inventory: [],
    questProgress: {},
    level: 1,
    experience: 0,
  },
  worldState: {
    timeOfDay: "morning",
    discoveredLocations: ["village_center"],
    completedEvents: [],
    npcRelationships: {},
  },
};

/**
 * GameStateManager is responsible for managing the game state,
 * providing methods to create, update, and retrieve game states.
 */
export class GameStateManager {
  private currentGameState: GameState | null = null;
  private characterId: string | null = null;
  private sessionId: string | null = null;

  /**
   * Initialize the game state manager with a character ID and session ID
   *
   * @param characterId - The ID of the character associated with this game state
   * @param sessionId - The ID of the session associated with this game state
   */
  constructor(
    characterId: string | null = null,
    sessionId: string | null = null
  ) {
    this.characterId = characterId;
    this.sessionId = sessionId;
  }

  /**
   * Set the character ID for the game state manager
   *
   * @param characterId - The ID of the character to associate with this game state manager
   */
  setCharacterId(characterId: string): void {
    this.characterId = characterId;
  }

  /**
   * Set the session ID for the game state manager
   *
   * @param sessionId - The ID of the session to associate with this game state manager
   */
  setSessionId(sessionId: string): void {
    this.sessionId = sessionId;
  }

  /**
   * Get the current game state
   *
   * @returns The current game state or null if no game state is loaded
   */
  getCurrentGameState(): GameState | null {
    return this.currentGameState;
  }

  /**
   * Initialize a new game state
   *
   * @param initialState - Optional initial state to override defaults
   * @returns Promise resolving to the created game state
   * @throws Error if characterId or sessionId is not set
   */
  async initializeGameState(
    initialState: Partial<typeof DEFAULT_INITIAL_STATE> = {}
  ): Promise<GameState> {
    if (!this.characterId || !this.sessionId) {
      throw new Error(
        "Cannot initialize game state: Character ID or Session ID not set"
      );
    }

    // Merge provided initial state with defaults
    const mergedInitialState = {
      currentLocation:
        initialState.currentLocation || DEFAULT_INITIAL_STATE.currentLocation,
      characterState: {
        ...DEFAULT_INITIAL_STATE.characterState,
        ...(initialState.characterState || {}),
      },
      worldState: {
        ...DEFAULT_INITIAL_STATE.worldState,
        ...(initialState.worldState || {}),
      },
    };

    // Create a new game state
    const newGameState = await gameStateRepository.createGameState({
      character: {
        connect: { id: this.characterId },
      },
      session: {
        connect: { id: this.sessionId },
      },
      currentLocation: mergedInitialState.currentLocation,
      characterState: mergedInitialState.characterState,
      worldState: mergedInitialState.worldState,
      narrativeContext:
        "Game begins in the village center. The player is a new adventurer.",
      aiContext: {},
    });

    this.currentGameState = newGameState;
    return newGameState;
  }

  /**
   * Load the latest game state for the character
   *
   * @returns Promise resolving to the loaded game state or null if not found
   * @throws Error if characterId is not set
   */
  async loadLatestGameState(): Promise<GameState | null> {
    if (!this.characterId) {
      throw new Error("Cannot load game state: Character ID not set");
    }

    const latestGameState =
      await gameStateRepository.getLatestGameStateForCharacter(
        this.characterId
      );

    if (latestGameState) {
      this.currentGameState = latestGameState;
    }

    return latestGameState;
  }

  /**
   * Update the current game state
   *
   * @param updates - Partial updates to apply to the game state
   * @returns Promise resolving to the updated game state or null if no game state is loaded
   */
  async updateGameState(updates: {
    currentLocation?: string;
    narrativeContext?: string;
    characterState?: Partial<any>;
    worldState?: Partial<any>;
    aiContext?: Record<string, any>;
  }): Promise<GameState | null> {
    if (!this.currentGameState || !this.currentGameState.id) {
      return null;
    }

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
        ...((this.currentGameState.aiContext as Record<string, any>) || {}),
        ...updates.aiContext,
      };
    }

    // Handle complex nested updates for characterState
    if (updates.characterState) {
      const currentCharacterState = this.currentGameState
        .characterState as Record<string, any>;
      updateData.characterState = {
        ...currentCharacterState,
        ...updates.characterState,
      };
    }

    // Handle complex nested updates for worldState
    if (updates.worldState) {
      const currentWorldState = this.currentGameState.worldState as Record<
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
      this.currentGameState.id,
      updateData
    );

    this.currentGameState = updatedGameState;
    return updatedGameState;
  }

  /**
   * Create a new game state with the current game state as the base
   * This is useful for creating save points or checkpoints
   *
   * @param savePointName - Optional name for the save point
   * @param isAutosave - Whether this is an autosave
   * @returns Promise resolving to the created game state or null if no current game state
   * @throws Error if sessionId is not set
   */
  async createNewStateFromCurrent(
    savePointName?: string,
    isAutosave: boolean = false
  ): Promise<GameState | null> {
    if (!this.currentGameState || !this.sessionId) {
      return null;
    }

    // Create a new game state based on the current one
    const newGameState = await gameStateRepository.createGameState({
      character: {
        connect: { id: this.currentGameState.characterId },
      },
      session: {
        connect: { id: this.sessionId },
      },
      savePointName,
      currentLocation: this.currentGameState.currentLocation,
      narrativeContext: this.currentGameState.narrativeContext || undefined,
      aiContext: this.currentGameState.aiContext as Prisma.InputJsonValue,
      characterState: this.currentGameState
        .characterState as Prisma.InputJsonValue,
      worldState: this.currentGameState.worldState as Prisma.InputJsonValue,
      isAutosave,
    });

    this.currentGameState = newGameState;
    return newGameState;
  }

  /**
   * Check if the player has already played before
   * This is used to determine if we should create a new game state or load an existing one
   *
   * @returns Promise resolving to true if the player has played before
   * @throws Error if characterId is not set
   */
  async hasExistingGameState(): Promise<boolean> {
    if (!this.characterId) {
      throw new Error("Cannot check game state: Character ID not set");
    }

    const latestGameState =
      await gameStateRepository.getLatestGameStateForCharacter(
        this.characterId
      );
    return !!latestGameState;
  }

  /**
   * Load or initialize a game state
   * If the player has played before, loads the latest game state
   * Otherwise, initializes a new game state
   *
   * @returns Promise resolving to the loaded or initialized game state
   * @throws Error if characterId or sessionId is not set
   */
  async loadOrInitializeGameState(): Promise<GameState> {
    if (!this.characterId || !this.sessionId) {
      throw new Error(
        "Cannot load or initialize game state: Character ID or Session ID not set"
      );
    }

    const hasExisting = await this.hasExistingGameState();

    if (hasExisting) {
      const gameState = await this.loadLatestGameState();
      if (gameState) {
        return gameState;
      }
    }

    // If no existing game state or loading failed, initialize a new one
    return this.initializeGameState();
  }

  /**
   * Get the state for specific NPCs
   *
   * @param npcIds - Array of NPC template IDs
   * @returns Promise resolving to the NPC states
   */
  async getNPCStates(npcIds: string[] = []): Promise<any[]> {
    if (!this.currentGameState || !this.currentGameState.id) {
      return [];
    }

    // This would typically call a function to get NPC states from the database
    // For now we'll return a simple array based on the world state
    const worldState = this.currentGameState.worldState as Record<string, any>;
    const npcRelationships = worldState.npcRelationships || {};

    return npcIds.map((id) => ({
      id,
      relationship: npcRelationships[id] || 0,
    }));
  }

  /**
   * Set up a new game by initializing a session and game state
   *
   * @param characterId - Character ID
   * @returns Promise resolving to the initialized game state
   */
  async setupNewGame(characterId: string): Promise<GameState> {
    // Set the character ID
    this.setCharacterId(characterId);
    sessionManager.setCharacterId(characterId);

    // Start a new session
    const session = await sessionManager.startSession();
    this.setSessionId(session.id);

    // Initialize a new game state
    return this.initializeGameState();
  }

  /**
   * Resume an existing game
   *
   * @param characterId - Character ID
   * @returns Promise resolving to the loaded game state
   */
  async resumeGame(characterId: string): Promise<GameState> {
    // Set the character ID
    this.setCharacterId(characterId);
    sessionManager.setCharacterId(characterId);

    // Resume or create a session
    const session = await sessionManager.resumeOrCreateSession();
    this.setSessionId(session.id);

    // Load or initialize the game state
    return this.loadOrInitializeGameState();
  }
}

// Create a singleton instance for global access
export const gameStateManager = new GameStateManager();
