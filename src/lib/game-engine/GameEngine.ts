import {
  GameEngine as GameEngineInterface,
  GameEvent,
  GameEventType,
} from "@/types/engine";
import {
  GameSession,
  GameState,
  NarrativeResponse,
  Decision,
} from "@/types/game";
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
import { NarrativeContext, NarrativeEvent } from "@/types/narrative";
import { gameStateService } from "@/lib/services/GameStateService";
import {
  NarrativeService,
  narrativeService,
} from "@/lib/services/NarrativeService";
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

      // Create initial game state - GameStateService now handles conversion
      const initialState = await gameStateService.createGameState(session.id, {
        characterId,
        worldId,
      });

      // Initialize state manager with the initial state
      this.stateManager.initialize(initialState);

      // Initialize narrative context manager with data from the new state
      this.narrativeManager.resetContext(); // Keep the reset for a clean start

      // Prepare character data for NarrativeContextManager, ensuring string types
      const characterContextData: NarrativeContext["character"] = {
        id: initialState.characterId,
        name:
          typeof initialState.characterState.name === "string"
            ? initialState.characterState.name
            : "Adventurer",
        traits: Array.isArray(initialState.characterState.traits)
          ? initialState.characterState.traits
          : [],
        backstory:
          typeof initialState.characterState.backstory === "string"
            ? initialState.characterState.backstory
            : undefined,
        appearance:
          typeof initialState.characterState.appearance === "string"
            ? initialState.characterState.appearance
            : undefined,
      };

      const worldContextData: NarrativeContext["world"] = {
        id: initialState.worldId || "unknown_world_id",
        name:
          typeof initialState.worldState.name === "string"
            ? initialState.worldState.name
            : "Mysterious World",
        description:
          typeof initialState.worldState.description === "string"
            ? initialState.worldState.description
            : "An enigmatic place.",
        locations: Array.isArray(initialState.worldState.locations)
          ? initialState.worldState.locations.map((loc: any) => ({
              id: loc.id,
              name: loc.name,
              description: loc.description,
              worldId: loc.worldId,
              isStartingLocation: loc.isStartingLocation,
              connectedLocationIds: loc.connectedLocationIds || [],
              thumbnailUrl: loc.thumbnailUrl,
            }))
          : [],
        loreFragments: Array.isArray(initialState.worldState.loreFragments)
          ? initialState.worldState.loreFragments.map((lore: any) => ({
              id: lore.id,
              title: lore.title,
              content: lore.content,
              type: lore.type,
              worldId: lore.worldId,
              contextId: lore.contextId,
              isRevealed: lore.isRevealed,
              keywords: lore.keywords || [],
            }))
          : [],
      };

      const locationContextData: NarrativeContext["location"] = {
        id: initialState.currentLocation || "unknown_starting_location", // currentLocation on GameState is string
        name: initialState.currentLocation || "A Vague Starting Point", // but could be empty, provide fallback
        // For location description, NarrativeContext expects a string. GameState doesn't store it directly on root.
        // We'll use a generic description as it's a starting point.
        description: "The adventure begins here.",
      };

      this.narrativeManager.initialize(
        characterContextData,
        worldContextData,
        locationContextData,
        [] // NPCs, GameState doesn't have a root 'npcs' field
      );

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
          code: "START_FAILED",
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
      logger.debug("Loading game session", {
        context: "game-engine",
        metadata: { sessionId },
      });

      // Load the session
      const session = await this.sessionController.getSession(sessionId);
      if (!session) {
        throw new Error(`Session with ID ${sessionId} not found`);
      }

      // Get the latest state for this session - GameStateService now handles conversion
      const state = await this.stateManager.loadState(session.id);
      if (!state) {
        throw new Error(`No game state found for session ${session.id}`);
      }

      // Initialize state manager
      this.stateManager.initialize(state);

      // Load narrative context
      this.narrativeManager.initialize(
        {
          id: state.characterId,
          name: state.characterState.name || "Unknown",
          traits: state.characterState.traits || [],
          backstory: state.characterState.backstory,
          appearance: state.characterState.appearance,
        },
        {
          id: state.worldState.id || "unknown",
          name: state.worldState.name || "Unknown World",
          description: state.worldState.description || "",
        },
        {
          id: state.currentLocation || "unknown",
          name: state.currentLocation || "Unknown Location",
          description: "",
        }
      );

      // Restore decisions from the loaded state
      if (state.decisions && state.decisions.length > 0) {
        this.decisionManager.setDecisions(state.decisions);
      } else {
        // Fallback if no decisions in saved state, or generate initial ones
        // This might involve a call to generateNarrative or a default set
        logger.warn(
          "No decision points found in loaded state, setting default.",
          { context: "game-engine", metadata: { sessionId: state.sessionId } }
        );
        this.decisionManager.setDecisions([{ text: "Continue exploring..." }]);
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

      logger.debug("Game loaded", {
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
          message: `Failed to load game: ${error}`,
          code: "LOAD_FAILED",
          context: { sessionId },
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
   * Generates the initial narrative and decisions for a game session,
   * updates the game state, and persists it.
   * This is typically called by a server action after a new game is started
   * and the initial bare state record has been created in the database.
   *
   * @param sessionId - The ID of the current game session.
   * @returns The generated narrative response containing the text and decisions.
   * @throws Error if no current game state is found or if narrative generation fails.
   */
  public async generateNarrative(
    sessionId: string
  ): Promise<NarrativeResponse> {
    logger.debug(
      `Generating initial narrative and decisions for session: ${sessionId}`,
      { context: "game-engine" }
    );

    const currentGameState = this.stateManager.getCurrentState();
    if (!currentGameState) {
      logger.error(
        "generateNarrative called but no current game state is available. Ensure stateManager is initialized.",
        {
          context: "game-engine",
          metadata: { sessionId },
        }
      );
      throw new Error(
        "Cannot generate narrative: No current game state available."
      );
    }
    if (!currentGameState.id) {
      logger.error(
        "generateNarrative: Current game state has no ID, cannot proceed with update.",
        {
          context: "game-engine",
          metadata: { sessionId },
        }
      );
      throw new Error("Current game state is missing an ID.");
    }

    const aiSystemResponse = await narrativeService.generateNarrative(
      currentGameState.id
    ); // aiSystemResponse: { text: string, suggestedDecisions?: Array<{ text: string }> }

    const narrativeText = aiSystemResponse.narrativeText;
    const decisions: Decision[] = (aiSystemResponse.decisions || []).map(
      (d, index) => ({
        id: `decision_${currentGameState.id}_init_${index}_${Date.now()}`, // Unique ID for the decision
        text: d.text,
        // Consequences are typically determined when a decision is *made*, not when it's presented.
      })
    );

    // 3. Prepare the NarrativeResponse object to be returned and emitted
    const narrativeResponse: NarrativeResponse = {
      text: narrativeText,
      decisions: decisions,
      // worldEvents, characterUpdates, etc., could be populated if AI provides them
    };

    // 4. Create the updated GameState object
    // We are updating the existing currentGameState object.
    const updatedState: GameState = {
      ...currentGameState,
      narrative: {
        currentText: narrativeText,
        history: [
          // Add to existing history if any, or start new
          ...(currentGameState.narrative?.history || []),
          {
            type: "narrative",
            content: narrativeText,
            timestamp: new Date(),
          } as NarrativeEvent, // Cast to NarrativeEvent
        ],
      },
      decisions: decisions,
      turnNumber: currentGameState.turnNumber
        ? currentGameState.turnNumber + 1
        : 1, // Start at turn 1 or increment
      lastModified: new Date(),
      // Ensure other relevant fields are preserved or updated
    };

    // 5. Update GameStateManager with this new state and persist it.
    this.stateManager.setCurrentState(updatedState); // Update in-memory state
    await this.stateManager.saveCurrentState(); // Persist changes to the DB (updates existing record)

    // 6. Emit event
    this.emitEvent({
      type: "NARRATIVE_GENERATED",
      payload: narrativeResponse,
      timestamp: new Date(),
      sessionId: sessionId,
    });

    logger.info(
      "Initial narrative and decisions generated, state updated and persisted.",
      {
        context: "game-engine",
        metadata: {
          sessionId,
          stateId: updatedState.id,
          decisionCount: decisions.length,
        },
      }
    );

    return narrativeResponse;
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
      // Get the text of the decision the player is currently choosing
      // BEFORE processDecision potentially changes the available decisions.
      const currentDecisionsPriorToProcessing =
        this.decisionManager.getCurrentDecisions();
      const chosenOptionText =
        currentDecisionsPriorToProcessing[decisionIndex]?.text ||
        "Unknown Decision";

      // Process the decision using DecisionManager (which now handles AI narrative generation)
      const { narrativeResponse, consequences } =
        await this.decisionManager.processDecision(decisionIndex);

      // DecisionManager.processDecision now handles:
      // 1. Adding player's choice to NarrativeContextManager
      // 2. Calling AIService.generateNarrative & parsing
      // 3. Updating GameState with new narrative text, history, and AI-suggested decisions
      // 4. Adding AI's narrative to NarrativeContextManager
      // 5. Setting new AI-suggested decisions in DecisionManager's currentDecisions

      // The GameEngine's role here is to orchestrate the event and apply direct consequences.

      // Apply direct consequences of the player's original decision to the game state
      // Note: narrativeResponse.updatedCharacterState etc. from AI are not yet explicitly handled here,
      // but processDecision in DecisionManager updates the GameState directly with AI narrative/decisions.
      // If AI suggests direct state changes, DecisionManager or this method would need to merge them.
      const currentState = this.stateManager.getCurrentState(); // Get the latest state AFTER DecisionManager updated it
      const updatedStateWithConsequences = this.stateManager.updateState({
        // Spread the current (potentially AI-modified) state first
        ...currentState,
        // Then apply direct consequences from the player's specifically chosen path
        // This assumes 'consequences' are things like stat changes, item gains/losses from the *original* decision object
        characterState: {
          ...currentState.characterState,
          ...(consequences?.character || {}),
        },
        worldState: {
          ...currentState.worldState,
          ...(consequences?.world || {}),
        },
        // newLocation from consequences would also be applied here if relevant
        currentLocation: consequences?.location || currentState.currentLocation,
      });
      logger.debug(
        "Applied direct consequences of player decision to game state",
        { context: "game-engine", metadata: { consequences } }
      );

      // The new decisions from the AI are already set by decisionManager.processDecision.
      // So, no need to call this.decisionManager.setDecisions(...) here again.

      // Emit decision made event with the correct chosen option text
      this.emitEvent({
        type: "DECISION_MADE",
        payload: {
          decisionIndex,
          chosenOption: chosenOptionText, // Use the text of the option the player actually picked
          consequences, // Consequences of the player's direct choice
        },
        timestamp: new Date(),
        sessionId,
      });

      logger.debug("Player decision processed by GameEngine", {
        context: "game-engine",
        metadata: {
          sessionId,
          decisionIndex,
          chosenOptionText,
          aiNarrativeTextLength: narrativeResponse.narrativeText.length,
          aiNewDecisionCount: narrativeResponse.newDecisionPoints.length,
        },
      });

      return {
        narrativeResponse, // Contains AI-generated text and new AI-suggested decisions
        updatedState: updatedStateWithConsequences, // The final state after AI narrative and direct consequences
      };
    } catch (error) {
      logger.error("Failed to process decision in GameEngine", {
        context: "game-engine",
        metadata: {
          sessionId,
          decisionIndex,
          error,
        },
      });

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
   * Load game state from the service
   *
   * @param stateId - The state ID to load
   * @param sessionId - The current session ID
   * @returns The loaded game state
   * @private
   */
  private async loadGameStateFromService(
    stateId: string,
    sessionId: string
  ): Promise<GameState> {
    if (!stateId) {
      logger.warn("No state ID provided to loadGameStateFromService", {
        context: "game-engine",
        metadata: { sessionId },
      });
      throw new Error("No state ID available to load game.");
    }

    // Use GameStateManager to load the state (which now uses GameStateService for conversion)
    const state = await this.stateManager.loadState(stateId);

    if (state.sessionId !== sessionId) {
      logger.warn("Loaded state session ID does not match current session ID", {
        context: "game-engine",
        metadata: {
          loadedSessionId: state.sessionId,
          currentSessionId: sessionId,
          stateId,
        },
      });
      // Depending on desired behavior, you might throw an error here
      // or allow it if it's a valid scenario (e.g. admin loading).
      // For now, we'll proceed but log a warning.
    }
    return state;
  }

  /**
   * Clear any error state
   * Implements the clearError method from the GameEngine interface
   */
  public clearError(): void {
    // Clear any error state in the current game state
    if (this.stateManager.getCurrentState()) {
      this.stateManager.updateState({
        error: null,
      });
    }

    // Emit event that error has been cleared
    this.emitEvent({
      type: "ERROR_OCCURRED",
      payload: {
        message: "Error cleared",
        code: "ERROR_CLEARED",
        context: { cleared: true },
      },
      timestamp: new Date(),
      sessionId: this.stateManager.getCurrentState()?.sessionId || "system",
    });
  }
}
