import {
  GameStateService,
  gameStateService as defaultGameStateService,
} from "@/lib/services/GameStateService";
import {
  GameEvent,
  GameStateManager as GameStateManagerInterface,
} from "@/types/engine";
import { GameState } from "@/types/game";
import { logger } from "@/lib/utils/logger";

/**
 * GameStateManager implementation
 *
 * Manages game state transitions and history, providing a centralized way to access and modify game state.
 * Implements the GameStateManager interface from src/types/engine.ts
 */
export class GameStateManager implements GameStateManagerInterface {
  /**
   * Current active game state
   */
  private currentState: GameState | null = null;

  /**
   * History of game states for this session
   */
  private stateHistory: GameState[] = [];

  /**
   * Maximum number of states to keep in memory
   */
  private readonly maxHistorySize: number;

  /**
   * Service for persisting game states
   */
  private readonly gameStateService: GameStateService;

  /**
   * Create a new GameStateManager
   *
   * @param stateService - Service for game state operations
   * @param options - Configuration options
   */
  constructor(
    stateService: GameStateService = defaultGameStateService,
    options: { maxHistorySize?: number } = {}
  ) {
    this.gameStateService = stateService;
    this.maxHistorySize = options.maxHistorySize || 10;
  }

  /**
   * Initialize the state manager with an initial state
   *
   * @param initialState - Initial game state to set
   */
  public initialize(initialState: GameState): void {
    this.currentState = initialState;
    this.stateHistory = [initialState];

    logger.debug("GameStateManager initialized", {
      context: "game-engine",
      metadata: {
        stateId: initialState.id,
        sessionId: initialState.sessionId,
      },
    });
  }

  /**
   * Get the current game state
   *
   * @returns The current game state
   * @throws Error if state is not initialized
   */
  public getCurrentState(): GameState {
    if (!this.currentState) {
      throw new Error("Game state not initialized");
    }
    return this.currentState;
  }

  /**
   * Get the history of game states
   *
   * @returns Array of game states in chronological order
   */
  public getStateHistory(): GameState[] {
    return [...this.stateHistory];
  }

  /**
   * Get a specific game state by ID
   *
   * @param stateId - The state ID to retrieve
   * @returns The game state or null if not found
   */
  public getStateById(stateId: string): GameState | null {
    // First check in-memory cache
    const cachedState = this.stateHistory.find((state) => state.id === stateId);
    if (cachedState) {
      return cachedState;
    }

    // State not in memory, return null (caller should load from service if needed)
    return null;
  }

  /**
   * Load a game state by ID
   *
   * @param stateId - The state ID to load
   * @returns The loaded game state
   * @throws Error if state cannot be loaded
   */
  public async loadState(stateId: string): Promise<GameState> {
    // First check if the state is already in memory
    const cachedState = this.getStateById(stateId);
    if (cachedState) {
      this.currentState = cachedState;
      return cachedState;
    }

    // Load from database
    const loadedState = await this.gameStateService.loadGameState(stateId);
    if (!loadedState) {
      throw new Error(`Game state with ID ${stateId} not found`);
    }

    // Convert database state to game state and handle null values
    const gameState: GameState = {
      ...loadedState,
      worldId: loadedState.worldId || undefined,
      locationId: loadedState.locationId || undefined,
      savePointName: loadedState.savePointName || undefined,
      narrativeContext: loadedState.narrativeContext || undefined,
      aiContext: loadedState.aiContext as Record<string, any>,
      characterState: loadedState.characterState as Record<string, any>,
      worldState: loadedState.worldState as Record<string, any>,
      isLoading: false,
      error: null,
    };

    // Set as current state and add to history
    this.currentState = gameState;
    this._addToHistory(gameState);

    logger.debug("Game state loaded", {
      context: "game-engine",
      metadata: {
        stateId: gameState.id,
        sessionId: gameState.sessionId,
      },
    });

    return gameState;
  }

  /**
   * Save the current game state
   *
   * @param savePointName - Optional name for this save point
   * @returns The saved game state
   * @throws Error if no current state exists or save fails
   */
  public async saveState(savePointName?: string): Promise<GameState> {
    if (!this.currentState) {
      throw new Error("Cannot save: no current game state");
    }

    // Create a new state snapshot with the current data
    const savedState = await this.gameStateService.saveGameState(
      this.currentState.sessionId,
      {
        ...this.currentState,
        savePointName,
      },
      savePointName
    );

    // Convert database state to game state and handle null values
    const gameState: GameState = {
      ...savedState,
      worldId: savedState.worldId || undefined,
      locationId: savedState.locationId || undefined,
      savePointName: savedState.savePointName || undefined,
      narrativeContext: savedState.narrativeContext || undefined,
      aiContext: savedState.aiContext as Record<string, any>,
      characterState: savedState.characterState as Record<string, any>,
      worldState: savedState.worldState as Record<string, any>,
      isLoading: false,
      error: null,
    };

    // Update current state and history
    this.currentState = gameState;
    this._addToHistory(gameState);

    logger.debug("Game state saved", {
      context: "game-engine",
      metadata: {
        stateId: gameState.id,
        sessionId: gameState.sessionId,
        savePointName,
      },
    });

    return gameState;
  }

  /**
   * Update the current state with partial updates
   * Does not persist changes to database (call saveState for that)
   *
   * @param updates - Partial game state updates to apply
   * @returns The updated game state
   * @throws Error if no current state exists
   */
  public updateState(updates: Partial<GameState>): GameState {
    if (!this.currentState) {
      throw new Error("Cannot update: no current game state");
    }

    // Create updated state (immutable approach)
    this.currentState = {
      ...this.currentState,
      ...updates,
    };

    return this.currentState;
  }

  /**
   * Reset the state to the initial state
   *
   * @returns The reset game state
   * @throws Error if state history is empty
   */
  public resetState(): GameState {
    if (this.stateHistory.length === 0) {
      throw new Error("Cannot reset: no state history available");
    }

    // Reset to the first state in history
    this.currentState = this.stateHistory[0];

    logger.debug("Game state reset to initial state", {
      context: "game-engine",
      metadata: {
        stateId: this.currentState.id,
        sessionId: this.currentState.sessionId,
      },
    });

    return this.currentState;
  }

  /**
   * Handle a game event and update state accordingly
   *
   * @param event - The game event to process
   * @returns The updated game state
   * @throws Error if the event cannot be handled
   */
  public handleEvent(event: GameEvent): GameState {
    if (!this.currentState) {
      throw new Error("Cannot handle event: no current game state");
    }

    let updatedState: GameState = { ...this.currentState };

    // Apply state transitions based on event type
    switch (event.type) {
      case "LOCATION_CHANGED":
        updatedState = this._handleLocationChange(updatedState, event);
        break;

      case "CHARACTER_UPDATED":
        updatedState = this._handleCharacterUpdate(updatedState, event);
        break;

      case "WORLD_UPDATED":
        updatedState = this._handleWorldUpdate(updatedState, event);
        break;

      case "NARRATIVE_UPDATED":
        updatedState = this._handleNarrativeUpdate(updatedState, event);
        break;

      case "DECISION_MADE":
        updatedState = this._handleDecisionMade(updatedState, event);
        break;

      default:
        // Log unhandled event types but don't throw
        logger.warn(`Unhandled event type: ${event.type}`, {
          context: "game-engine",
          metadata: {
            eventType: event.type,
            sessionId: event.sessionId,
          },
        });
        break;
    }

    // Update current state
    this.currentState = updatedState;
    return updatedState;
  }

  /**
   * Add a state to the history, managing history size
   *
   * @param state - The state to add to history
   * @private
   */
  private _addToHistory(state: GameState): void {
    // Add to history, keeping most recent states
    this.stateHistory.push(state);

    // Trim history if it exceeds max size
    if (this.stateHistory.length > this.maxHistorySize) {
      this.stateHistory = this.stateHistory.slice(-this.maxHistorySize);
    }
  }

  /**
   * Handle location change event
   *
   * @param state - Current state
   * @param event - Location changed event
   * @returns Updated state
   * @private
   */
  private _handleLocationChange(state: GameState, event: GameEvent): GameState {
    if (event.type !== "LOCATION_CHANGED") return state;

    const { previousLocation, newLocation } = event.payload as any;

    return {
      ...state,
      currentLocation: newLocation,
    };
  }

  /**
   * Handle character update event
   *
   * @param state - Current state
   * @param event - Character update event
   * @returns Updated state
   * @private
   */
  private _handleCharacterUpdate(
    state: GameState,
    event: GameEvent
  ): GameState {
    if (event.type !== "CHARACTER_UPDATED") return state;

    const { characterId, changes } = event.payload as any;

    // Update character state
    return {
      ...state,
      characterState: {
        ...state.characterState,
        ...changes,
      },
    };
  }

  /**
   * Handle world update event
   *
   * @param state - Current state
   * @param event - World update event
   * @returns Updated state
   * @private
   */
  private _handleWorldUpdate(state: GameState, event: GameEvent): GameState {
    if (event.type !== "WORLD_UPDATED") return state;

    const { worldId, changes } = event.payload as any;

    // Update world state
    return {
      ...state,
      worldState: {
        ...state.worldState,
        ...changes,
      },
    };
  }

  /**
   * Handle narrative update event
   *
   * @param state - Current state
   * @param event - Narrative update event
   * @returns Updated state
   * @private
   */
  private _handleNarrativeUpdate(
    state: GameState,
    event: GameEvent
  ): GameState {
    if (event.type !== "NARRATIVE_UPDATED") return state;

    const { text, decisions } = event.payload as any;

    // Get the existing history or create empty array
    const existingHistory = state.narrative?.history || [];

    // Update narrative and decisions in UI state
    return {
      ...state,
      narrative: {
        text,
        history: [
          ...existingHistory,
          { type: "narrative" as const, content: text },
        ],
      },
      decisions,
    };
  }

  /**
   * Handle decision made event
   *
   * @param state - Current state
   * @param event - Decision made event
   * @returns Updated state
   * @private
   */
  private _handleDecisionMade(state: GameState, event: GameEvent): GameState {
    if (event.type !== "DECISION_MADE") return state;

    const { decisionIndex, chosenOption, consequences } = event.payload as any;

    // Get existing history or create empty array
    const existingHistory = state.narrative?.history || [];

    // Update narrative history with player's choice
    const updatedState = {
      ...state,
      narrative: {
        text: state.narrative?.text || "",
        history: [
          ...existingHistory,
          { type: "playerResponse" as const, content: chosenOption },
        ],
      },
      // Clear decisions after one is made
      decisions: [],
    };

    // Apply any consequences to state
    if (consequences) {
      // Apply consequences to character state if needed
      if (consequences.character) {
        updatedState.characterState = {
          ...updatedState.characterState,
          ...consequences.character,
        };
      }

      // Apply consequences to world state if needed
      if (consequences.world) {
        updatedState.worldState = {
          ...updatedState.worldState,
          ...consequences.world,
        };
      }
    }

    return updatedState;
  }
}

// Export default instance
export const gameStateManager = new GameStateManager();
