import {
  GameEngine as GameEngineInterface,
  GameEvent,
  GameEventType,
} from "@/types/engine";
import { GameSession, GameState, NarrativeResponse } from "@/types/game";
import {
  GameStateManager,
  gameStateManager as defaultGameStateManager,
} from "./GameStateManager";
import { SessionController } from "./SessionController";
import {
  DecisionManager,
  decisionManager as defaultDecisionManager,
} from "./DecisionManager";
import {
  NarrativeContextManager,
  narrativeContextManager as defaultNarrativeContextManager,
} from "./NarrativeContextManager";
import { gameStateService } from "@/lib/services/GameStateService";
import { narrativeService } from "@/lib/services/NarrativeService";
import { logger } from "@/lib/utils/logger";
import { updateCharacterLocation } from "@/lib/actions/character-world-state-actions";

/**
 * Core Game Engine implementation
 *
 * Serves as the central coordination point for all game engine components,
 * providing a unified API for game operations while maintaining proper separation of concerns.
 * Implements the GameEngine interface from src/types/engine.ts
 */
export class GameEngine implements GameEngineInterface {
  // Component managers
  private readonly stateManager: GameStateManager;
  private readonly sessionController: SessionController;
  private readonly decisionManager: DecisionManager;
  private readonly narrativeManager: NarrativeContextManager;

  // Event system
  private eventListeners: Record<
    GameEventType,
    Array<(event: GameEvent) => void>
  > = {
    GAME_STARTED: [],
    GAME_ENDED: [],
    STATE_LOADED: [],
    STATE_SAVED: [],
    NARRATIVE_UPDATED: [],
    DECISION_MADE: [],
    LOCATION_CHANGED: [],
    CHARACTER_UPDATED: [],
    WORLD_UPDATED: [],
    ERROR_OCCURRED: [],
  };

  /**
   * Create a new GameEngine instance
   *
   * @param options - Configuration options for dependencies
   */
  constructor(
    options: {
      stateManager?: GameStateManager;
      sessionController?: SessionController;
      decisionManager?: DecisionManager;
      narrativeManager?: NarrativeContextManager;
    } = {}
  ) {
    // Initialize component managers with provided instances or defaults
    this.stateManager = options.stateManager || defaultGameStateManager;
    this.sessionController =
      options.sessionController || new SessionController();
    this.decisionManager = options.decisionManager || defaultDecisionManager;
    this.narrativeManager =
      options.narrativeManager || defaultNarrativeContextManager;

    logger.debug("GameEngine initialized", {
      context: "game-engine",
    });
  }

  /**
   * Emit an event to all registered listeners
   *
   * @param event - The game event to emit
   */
  private emitEvent<T extends GameEventType>(event: GameEvent<T>): void {
    // Type assertion needed because of TypeScript's limitations with the index signature
    const listeners = this.eventListeners[event.type] as Array<
      (event: GameEvent<T>) => void
    >;

    listeners.forEach((listener) => {
      try {
        listener(event);
      } catch (error) {
        logger.error("Error in event listener", {
          context: "game-engine",
          metadata: {
            eventType: event.type,
            error,
          },
        });
      }
    });

    // If this is a relevant event, update game state based on it
    if (
      this.stateManager &&
      event.type !== "ERROR_OCCURRED" &&
      event.type !== "GAME_STARTED" &&
      event.type !== "GAME_ENDED"
    ) {
      try {
        this.stateManager.handleEvent(event);
      } catch (error) {
        logger.error("Error handling event in state manager", {
          context: "game-engine",
          metadata: {
            eventType: event.type,
            error,
          },
        });
      }
    }
  }

  /**
   * Register an event listener
   *
   * @param eventType - The type of event to listen for
   * @param handler - The handler function to call when the event occurs
   */
  public on<T extends GameEventType>(
    eventType: T,
    handler: (event: GameEvent<T>) => void
  ): void {
    // Type assertion needed because of TypeScript's limitations with the index signature
    const listeners = this.eventListeners[eventType] as Array<
      (event: GameEvent<T>) => void
    >;
    listeners.push(handler);
  }

  /**
   * Remove an event listener
   *
   * @param eventType - The type of event to remove the listener from
   * @param handler - The handler function to remove
   */
  public off<T extends GameEventType>(
    eventType: T,
    handler: (event: GameEvent<T>) => void
  ): void {
    // Type assertion needed because of TypeScript's limitations with the index signature
    const listeners = this.eventListeners[eventType] as Array<
      (event: GameEvent<T>) => void
    >;
    const index = listeners.indexOf(handler);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  }

  /**
   * Start a new game session
   *
   * @param characterId - The character ID to use for the session
   * @param worldId - The world ID to set for the session
   * @returns Object containing the created session and initial state
   */
  public async startGame(
    characterId: string,
    worldId: string
  ): Promise<{
    session: GameSession;
    initialState: GameState;
  }> {
    try {
      // Create a new session
      const session = await this.sessionController.createSession(
        characterId,
        worldId
      );

      // Create initial game state
      const dbState = await gameStateService.createGameState(session.id, {
        characterId,
        worldId,
      });

      // Convert database state to game state
      const initialState: GameState = this.convertDbStateToGameState(dbState);

      // Initialize state manager with the initial state
      this.stateManager.initialize(initialState);

      // Initialize narrative context
      this.narrativeManager.resetContext();

      // Emit game started event
      this.emitEvent({
        type: "GAME_STARTED",
        payload: {
          sessionId: session.id,
          characterId,
          worldId,
        },
        timestamp: new Date(),
        sessionId: session.id,
      });

      logger.info("Game started", {
        context: "game-engine",
        metadata: {
          sessionId: session.id,
          characterId,
          worldId,
        },
      });

      return {
        session,
        initialState,
      };
    } catch (error) {
      logger.error("Failed to start game", {
        context: "game-engine",
        metadata: {
          characterId,
          worldId,
          error,
        },
      });

      // Emit error event
      this.emitEvent({
        type: "ERROR_OCCURRED",
        payload: {
          message: "Failed to start game",
          context: {
            characterId,
            worldId,
            error: error instanceof Error ? error.message : String(error),
          },
        },
        timestamp: new Date(),
        sessionId: "system",
      });

      throw error;
    }
  }

  /**
   * Load an existing game session
   *
   * @param sessionId - The session ID to load
   * @param options - Optional flags for controlling behavior
   * @returns Object containing the loaded session and state
   */
  public async loadGame(
    sessionId: string,
    options: { emitEvents?: boolean; alreadyProcessed?: boolean } = {
      emitEvents: true,
      alreadyProcessed: false,
    }
  ): Promise<{
    session: GameSession;
    state: GameState;
  }> {
    try {
      // Load the session
      const session = await this.sessionController.getSession(sessionId);
      if (!session) {
        throw new Error(`Session with ID ${sessionId} not found`);
      }

      // Get the latest state for this session
      const dbState = await gameStateService.getLatestGameState(sessionId);
      if (!dbState) {
        throw new Error(`No game state found for session ${sessionId}`);
      }

      // Convert database state to game state
      const state: GameState = this.convertDbStateToGameState(dbState);

      // Initialize state manager
      this.stateManager.initialize(state);

      // Load narrative context
      if (state.narrativeContext) {
        this.narrativeManager.resetContext();
        // Populate context from state.narrativeContext
        // This would depend on the specific format of your narrative context
      }

      // Emit state loaded event if not disabled
      if (options.emitEvents !== false) {
        this.emitEvent({
          type: "STATE_LOADED",
          payload: {
            stateId: state.id,
            sessionId,
            alreadyProcessed: options.alreadyProcessed,
          },
          timestamp: new Date(),
          sessionId,
        });
      }

      logger.info("Game loaded", {
        context: "game-engine",
        metadata: {
          sessionId,
          stateId: state.id,
        },
      });

      return {
        session,
        state,
      };
    } catch (error) {
      logger.error("Failed to load game", {
        context: "game-engine",
        metadata: {
          sessionId,
          error,
        },
      });

      // Emit error event
      this.emitEvent({
        type: "ERROR_OCCURRED",
        payload: {
          message: "Failed to load game",
          context: {
            sessionId,
            error: error instanceof Error ? error.message : String(error),
          },
        },
        timestamp: new Date(),
        sessionId: "system",
      });

      throw error;
    }
  }

  /**
   * End a game session
   *
   * @param sessionId - The session ID to end
   * @returns The ended session
   */
  public async endGame(sessionId: string): Promise<GameSession> {
    try {
      // Save final state before ending
      await this.saveGameState(sessionId, "final_save");

      // End the session
      const session = await this.sessionController.endSession(sessionId);

      // Emit game ended event
      this.emitEvent({
        type: "GAME_ENDED",
        payload: {
          sessionId,
          duration: session.durationSeconds || 0,
        },
        timestamp: new Date(),
        sessionId,
      });

      logger.info("Game ended", {
        context: "game-engine",
        metadata: {
          sessionId,
          duration: session.durationSeconds,
        },
      });

      return session;
    } catch (error) {
      logger.error("Failed to end game", {
        context: "game-engine",
        metadata: {
          sessionId,
          error,
        },
      });

      // Emit error event
      this.emitEvent({
        type: "ERROR_OCCURRED",
        payload: {
          message: "Failed to end game",
          context: {
            sessionId,
            error: error instanceof Error ? error.message : String(error),
          },
        },
        timestamp: new Date(),
        sessionId,
      });

      throw error;
    }
  }

  /**
   * Save the current game state
   *
   * @param sessionId - The session ID to save for
   * @param savePointName - Optional name for this save point
   * @returns The saved game state
   */
  public async saveGameState(
    sessionId: string,
    savePointName?: string
  ): Promise<GameState> {
    try {
      // Save the current state
      const savedState = await this.stateManager.saveState(savePointName);

      // Emit state saved event
      this.emitEvent({
        type: "STATE_SAVED",
        payload: {
          stateId: savedState.id,
          savePointName,
        },
        timestamp: new Date(),
        sessionId,
      });

      logger.debug("Game state saved", {
        context: "game-engine",
        metadata: {
          sessionId,
          stateId: savedState.id,
          savePointName,
        },
      });

      return savedState;
    } catch (error) {
      logger.error("Failed to save game state", {
        context: "game-engine",
        metadata: {
          sessionId,
          savePointName,
          error,
        },
      });

      // Emit error event
      this.emitEvent({
        type: "ERROR_OCCURRED",
        payload: {
          message: "Failed to save game state",
          context: {
            sessionId,
            savePointName,
            error: error instanceof Error ? error.message : String(error),
          },
        },
        timestamp: new Date(),
        sessionId,
      });

      throw error;
    }
  }

  /**
   * Load a specific game state
   *
   * @param stateId - The state ID to load
   * @param options - Optional flags for controlling behavior
   * @returns The loaded game state
   */
  public async loadGameState(
    stateId: string,
    options: { emitEvents?: boolean; alreadyProcessed?: boolean } = {
      emitEvents: true,
      alreadyProcessed: false,
    }
  ): Promise<GameState> {
    try {
      // Load the state
      const loadedState = await this.stateManager.loadState(stateId);

      // Emit state loaded event if not disabled
      if (options.emitEvents !== false) {
        this.emitEvent({
          type: "STATE_LOADED",
          payload: {
            stateId,
            sessionId: loadedState.sessionId,
            alreadyProcessed: options.alreadyProcessed,
          },
          timestamp: new Date(),
          sessionId: loadedState.sessionId,
        });
      }

      logger.debug("Game state loaded", {
        context: "game-engine",
        metadata: {
          stateId,
          sessionId: loadedState.sessionId,
        },
      });

      return loadedState;
    } catch (error) {
      logger.error("Failed to load game state", {
        context: "game-engine",
        metadata: {
          stateId,
          error,
        },
      });

      // Emit error event
      this.emitEvent({
        type: "ERROR_OCCURRED",
        payload: {
          message: "Failed to load game state",
          context: {
            stateId,
            error: error instanceof Error ? error.message : String(error),
          },
        },
        timestamp: new Date(),
        sessionId: "system",
      });

      throw error;
    }
  }

  /**
   * Generate narrative content based on the current game state
   *
   * @param sessionId - The session ID to generate narrative for
   * @returns Object containing narrative text and available decisions
   */
  public async generateNarrative(sessionId: string): Promise<{
    narrativeText: string;
    decisions: Array<{ text: string; consequences?: string }>;
  }> {
    try {
      // Get the current state
      const currentState = this.stateManager.getCurrentState();

      // Generate narrative through the narrative service
      const response = await narrativeService.generateNarrative(
        currentState.id
      );

      // Set decisions in the decision manager
      this.decisionManager.setDecisions(response.decisions);

      // Add the narrative entry to context
      this.narrativeManager.addNarrativeEntry({
        type: "narrative",
        content: response.narrativeText,
      });

      // Emit narrative updated event
      this.emitEvent({
        type: "NARRATIVE_UPDATED",
        payload: {
          text: response.narrativeText,
          decisions: response.decisions,
        },
        timestamp: new Date(),
        sessionId,
      });

      return {
        narrativeText: response.narrativeText,
        decisions: response.decisions,
      };
    } catch (error) {
      logger.error("Failed to generate narrative", {
        context: "game-engine",
        metadata: {
          sessionId,
          error,
        },
      });

      // Emit error event
      this.emitEvent({
        type: "ERROR_OCCURRED",
        payload: {
          message: "Failed to generate narrative",
          context: {
            sessionId,
            error: error instanceof Error ? error.message : String(error),
          },
        },
        timestamp: new Date(),
        sessionId,
      });

      throw error;
    }
  }

  /**
   * Process a player decision
   *
   * @param sessionId - The session ID for this decision
   * @param decisionIndex - The index of the chosen decision
   * @returns Object containing the narrative response and updated game state
   */
  public async makeDecision(
    sessionId: string,
    decisionIndex: number
  ): Promise<{
    narrativeResponse: NarrativeResponse;
    updatedState: GameState;
  }> {
    try {
      // Process the decision
      const { narrativeResponse, consequences } =
        await this.decisionManager.processDecision(decisionIndex);

      // Get the current decisions as strings for the addDecision call
      const currentDecisionsAsStrings = this.decisionManager
        .getCurrentDecisions()
        .map((d) => d.text);

      // Add the decision to narrative context
      this.narrativeManager.addDecision({
        options: currentDecisionsAsStrings,
        chosenIndex: decisionIndex,
      });

      // Add the narrative response to context
      this.narrativeManager.addNarrativeEntry({
        type: "response",
        content: narrativeResponse.narrativeText,
      });

      // Update game state with consequences
      const currentState = this.stateManager.getCurrentState();
      const updatedState = this.stateManager.updateState({
        ...currentState,
        ...consequences,
      });

      // Set new decisions
      this.decisionManager.setDecisions(narrativeResponse.newDecisionPoints);

      // Emit decision made event
      this.emitEvent({
        type: "DECISION_MADE",
        payload: {
          decisionIndex,
          chosenOption:
            this.decisionManager.getCurrentDecisions()[decisionIndex]?.text ||
            "",
          consequences,
        },
        timestamp: new Date(),
        sessionId,
      });

      return {
        narrativeResponse,
        updatedState,
      };
    } catch (error) {
      logger.error("Failed to process decision", {
        context: "game-engine",
        metadata: {
          sessionId,
          decisionIndex,
          error,
        },
      });

      // Emit error event
      this.emitEvent({
        type: "ERROR_OCCURRED",
        payload: {
          message: "Failed to process decision",
          context: {
            sessionId,
            decisionIndex,
            error: error instanceof Error ? error.message : String(error),
          },
        },
        timestamp: new Date(),
        sessionId,
      });

      throw error;
    }
  }

  /**
   * Get all game sessions for a character
   *
   * @param characterId - The character ID to get sessions for
   * @returns Array of game sessions
   */
  public async getGameSessions(characterId: string): Promise<GameSession[]> {
    try {
      return await this.sessionController.getActiveSessionsByCharacter(
        characterId
      );
    } catch (error) {
      logger.error("Failed to get game sessions", {
        context: "game-engine",
        metadata: {
          characterId,
          error,
        },
      });

      throw error;
    }
  }

  /**
   * Get a specific game state
   *
   * @param stateId - The state ID to retrieve
   * @returns The game state or null if not found
   */
  public async getGameState(stateId: string): Promise<GameState | null> {
    try {
      // First check in state manager
      const cachedState = this.stateManager.getStateById(stateId);
      if (cachedState) {
        return cachedState;
      }

      // Load from service if not in cache (without emitting events to prevent loops)
      const dbState = await this.loadGameState(stateId, { emitEvents: false });
      if (!dbState) {
        return null;
      }

      return dbState;
    } catch (error) {
      logger.error("Failed to get game state", {
        context: "game-engine",
        metadata: {
          stateId,
          error,
        },
      });

      throw error;
    }
  }

  /**
   * Get character state for a session
   *
   * @param sessionId - The session ID to get character state for
   * @returns The character state or null if not found
   */
  public async getCharacterState(sessionId: string): Promise<any | null> {
    try {
      const state = await gameStateService.getLatestGameState(sessionId);
      return state ? state.characterState : null;
    } catch (error) {
      logger.error("Failed to get character state", {
        context: "game-engine",
        metadata: {
          sessionId,
          error,
        },
      });

      throw error;
    }
  }

  /**
   * Get world state for a session
   *
   * @param sessionId - The session ID to get world state for
   * @returns The world state or null if not found
   */
  public async getWorldState(sessionId: string): Promise<any | null> {
    try {
      const state = await gameStateService.getLatestGameState(sessionId);
      return state ? state.worldState : null;
    } catch (error) {
      logger.error("Failed to get world state", {
        context: "game-engine",
        metadata: {
          sessionId,
          error,
        },
      });

      throw error;
    }
  }

  /**
   * Update a character's location and persist it to the database
   *
   * @param characterId - The character ID
   * @param worldId - The world ID
   * @param newLocation - The new location name
   * @param previousLocation - The previous location name
   * @param sessionId - The session ID for emitting events
   */
  public async updateCharacterLocation(
    characterId: string,
    worldId: string,
    newLocation: string,
    previousLocation: string,
    sessionId: string
  ): Promise<void> {
    try {
      // Update the character's location in the database
      await updateCharacterLocation(characterId, worldId, newLocation);

      // Emit a location changed event
      this.emitEvent({
        type: "LOCATION_CHANGED",
        payload: {
          previousLocation,
          newLocation,
        },
        timestamp: new Date(),
        sessionId,
      });

      logger.debug("Character location updated", {
        context: "game-engine",
        metadata: {
          characterId,
          worldId,
          previousLocation,
          newLocation,
          sessionId,
        },
      });
    } catch (error) {
      logger.error("Failed to update character location", {
        context: "game-engine",
        metadata: {
          characterId,
          worldId,
          newLocation,
          previousLocation,
          sessionId,
          error,
        },
      });

      this.emitEvent({
        type: "ERROR_OCCURRED",
        payload: {
          message: "Failed to update character location",
          context: {
            characterId,
            worldId,
            newLocation,
            previousLocation,
            error: error instanceof Error ? error.message : String(error),
          },
        },
        timestamp: new Date(),
        sessionId,
      });

      throw error;
    }
  }

  /**
   * Convert database state to game state
   *
   * @param dbState - The database state to convert
   * @returns A properly typed GameState
   */
  private convertDbStateToGameState(dbState: any): GameState {
    return {
      id: dbState.id,
      sessionId: dbState.sessionId,
      characterId: dbState.characterId,
      worldId: dbState.worldId || undefined,
      locationId: dbState.locationId || undefined,
      savePointName: dbState.savePointName || undefined,
      currentLocation: dbState.currentLocation,
      saveTimestamp: dbState.saveTimestamp,
      narrativeContext: dbState.narrativeContext || undefined,
      aiContext: dbState.aiContext as Record<string, any>,
      characterState: dbState.characterState as Record<string, any>,
      worldState: dbState.worldState as Record<string, any>,
      isAutosave: dbState.isAutosave,
      isCompleted: dbState.isCompleted,
      isLoading: false,
      error: null,
    };
  }
}
