import { GameState } from "@/types/game";
import { GameEvent, GameEventType, GameEventPayload } from "@/types/engine";
import {
  GameStateManager,
  gameStateManager as defaultGameStateManager,
} from "./GameStateManager";
import {
  GameStateService,
  gameStateService as defaultGameStateService,
} from "@/lib/services/GameStateService";
import { logger } from "@/lib/utils/logger";

/**
 * Event handler function type
 */
type EventHandler<T extends GameEventType> = (event: GameEvent<T>) => void;

/**
 * Save point data structure
 * Contains metadata about a saved game state
 */
export interface SavePoint {
  id: string;
  sessionId: string;
  characterName: string;
  savePointName: string | null;
  location: string;
  timestamp: Date;
  isAutosave: boolean;
  isCompleted: boolean;
}

/**
 * Auto-save configuration options
 */
export interface AutoSaveConfig {
  enabled: boolean;
  interval: number; // in milliseconds
  maxAutoSaves: number;
}

/**
 * SaveLoadManager class
 *
 * Implements the save/load system, providing:
 * - Named save checkpoints
 * - Auto-save functionality
 * - Save browsing and management
 * - Save state verification
 */
export class SaveLoadManager {
  /**
   * Default auto-save configuration
   */
  private static readonly DEFAULT_AUTO_SAVE_CONFIG: AutoSaveConfig = {
    enabled: true,
    interval: 5 * 60 * 1000, // 5 minutes
    maxAutoSaves: 3,
  };

  /**
   * The underlying game state manager
   */
  private readonly gameStateManager: GameStateManager;

  /**
   * The service for interacting with game states in the database
   */
  private readonly gameStateService: GameStateService;

  /**
   * Auto-save configuration
   */
  private autoSaveConfig: AutoSaveConfig;

  /**
   * Auto-save interval ID for clearing
   */
  private autoSaveIntervalId: NodeJS.Timeout | null = null;

  /**
   * The ID of the session being managed
   */
  private sessionId: string | null = null;

  /**
   * Event handlers mapped by event type
   */
  private eventHandlers: Map<GameEventType, Set<EventHandler<any>>> = new Map();

  /**
   * Create a new SaveLoadManager
   *
   * @param gameStateManager - The game state manager to use
   * @param gameStateService - The game state service to use
   * @param autoSaveConfig - Auto-save configuration options
   */
  constructor(
    gameStateManager: GameStateManager = defaultGameStateManager,
    gameStateService: GameStateService = defaultGameStateService,
    autoSaveConfig: Partial<AutoSaveConfig> = {}
  ) {
    this.gameStateManager = gameStateManager;
    this.gameStateService = gameStateService;
    this.autoSaveConfig = {
      ...SaveLoadManager.DEFAULT_AUTO_SAVE_CONFIG,
      ...autoSaveConfig,
    };
  }

  /**
   * Initialize the save/load manager for a session
   *
   * @param sessionId - The session ID to manage saves for
   * @param initialState - Optional initial state to use
   */
  public initialize(sessionId: string, initialState?: GameState): void {
    this.sessionId = sessionId;

    // If we have an initial state, initialize the game state manager with it
    if (initialState) {
      this.gameStateManager.initialize(initialState);
    }

    // Set up auto-save if enabled
    if (this.autoSaveConfig.enabled) {
      this.setupAutoSave();
    }

    logger.debug("SaveLoadManager initialized", {
      context: "game-engine",
      metadata: {
        sessionId,
        autoSaveEnabled: this.autoSaveConfig.enabled,
        autoSaveInterval: this.autoSaveConfig.interval,
      },
    });
  }

  /**
   * Create a named save checkpoint
   *
   * @param savePointName - The name for this save point
   * @returns The saved game state
   * @throws Error if no session is initialized
   */
  public async createSavePoint(savePointName: string): Promise<GameState> {
    this.ensureInitialized();

    try {
      logger.info("Creating save point", {
        context: "game-engine",
        metadata: {
          sessionId: this.sessionId,
          savePointName,
        },
      });

      // Use the GameStateManager to save the current state with the given name
      const savedState = await this.gameStateManager.saveState(savePointName);

      // Emit save event
      this.emitEvent("STATE_SAVED", {
        stateId: savedState.id,
        savePointName: undefined,
      });

      // Cleanup old auto-saves if needed
      await this.cleanupAutoSaves();

      return savedState;
    } catch (error) {
      logger.error("Failed to create save point", {
        context: "game-engine",
        metadata: {
          sessionId: this.sessionId,
          savePointName,
          error,
        },
      });
      throw error;
    }
  }

  /**
   * Create an auto-save
   * This is called automatically at the configured interval, but can also be called manually
   * at key game moments (like after major decisions)
   *
   * @returns The saved game state
   * @throws Error if no session is initialized
   */
  public async createAutoSave(): Promise<GameState> {
    this.ensureInitialized();

    try {
      logger.debug("Creating auto-save", {
        context: "game-engine",
        metadata: {
          sessionId: this.sessionId,
        },
      });

      // Get the current state from the manager and set auto-save flag
      const currentState = this.gameStateManager.getCurrentState();

      // Use the GameStateService directly to save with auto-save flag
      const savedState = await this.gameStateService.saveGameState(
        this.sessionId!,
        {
          ...currentState,
          isAutosave: true,
        }
      );

      // Update the state in GameStateManager to match what we saved
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

      // Emit save event
      this.emitEvent("STATE_SAVED", {
        stateId: savedState.id,
        savePointName: undefined,
      });

      // Clean up old auto-saves
      await this.cleanupAutoSaves();

      return gameState;
    } catch (error) {
      logger.error("Failed to create auto-save", {
        context: "game-engine",
        metadata: {
          sessionId: this.sessionId,
          error,
        },
      });
      throw error;
    }
  }

  /**
   * Load a game state by ID
   *
   * @param stateId - The ID of the state to load
   * @returns The loaded game state
   * @throws Error if the state cannot be loaded
   */
  public async loadGameState(stateId: string): Promise<GameState> {
    try {
      logger.info("Loading game state", {
        context: "game-engine",
        metadata: {
          stateId,
        },
      });

      // Use the GameStateManager to load the state
      const loadedState = await this.gameStateManager.loadState(stateId);

      // Update our session ID from the loaded state
      this.sessionId = loadedState.sessionId;

      // Emit load event
      this.emitEvent("STATE_LOADED", {
        stateId: loadedState.id,
        sessionId: loadedState.sessionId,
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
      if (this.sessionId) {
        this.emitEvent("ERROR_OCCURRED", {
          message: `Failed to load game state: ${error}`,
          code: "LOAD_FAILED",
          context: { stateId },
        });
      }

      throw error;
    }
  }

  /**
   * Get all save points for the current session
   * This allows browsing available save points
   *
   * @param includeAutoSaves - Whether to include auto-saves in the results
   * @returns Array of save points
   * @throws Error if no session is initialized
   */
  public async getSavePoints(
    includeAutoSaves: boolean = true
  ): Promise<SavePoint[]> {
    this.ensureInitialized();

    try {
      // Get all game states for the session using repository directly
      const gameStateRepository = (this.gameStateService as any)
        .gameStateRepository;
      if (
        !gameStateRepository ||
        typeof gameStateRepository.findBySessionId !== "function"
      ) {
        throw new Error(
          "GameStateRepository not available or missing findBySessionId method"
        );
      }

      const gameStates = await gameStateRepository.findBySessionId(
        this.sessionId!
      );

      // Filter by auto-save if specified
      const filteredStates = includeAutoSaves
        ? gameStates
        : gameStates.filter((state: GameState) => !state.isAutosave);

      // Convert to SavePoint format with proper type handling
      return filteredStates.map((state: GameState) => ({
        id: state.id,
        sessionId: state.sessionId,
        characterName:
          ((state.characterState as Record<string, any>)?.name as string) ||
          "Unknown",
        savePointName: state.savePointName || null, // Convert undefined to null for type compatibility
        location: state.currentLocation,
        timestamp: state.saveTimestamp,
        isAutosave: state.isAutosave,
        isCompleted: state.isCompleted,
      }));
    } catch (error) {
      logger.error("Failed to get save points", {
        context: "game-engine",
        metadata: {
          sessionId: this.sessionId,
          error,
        },
      });
      throw error;
    }
  }

  /**
   * Verify a game state's integrity
   * Ensures the state is valid and compatible with the current game version
   *
   * @param state - The game state to verify
   * @returns True if the state is valid, false otherwise
   */
  public verifyGameState(state: GameState): boolean {
    try {
      // Check required fields
      if (!state.id || !state.sessionId || !state.characterId) {
        logger.warn("Game state missing required fields", {
          context: "game-engine",
          metadata: {
            stateId: state.id,
          },
        });
        return false;
      }

      // Check that essential state objects are present
      if (!state.characterState || !state.worldState) {
        logger.warn("Game state missing essential state objects", {
          context: "game-engine",
          metadata: {
            stateId: state.id,
          },
        });
        return false;
      }

      // Add more validation as needed
      // For example, check that character and world state have expected properties

      return true;
    } catch (error) {
      logger.error("Error verifying game state", {
        context: "game-engine",
        metadata: {
          stateId: state.id,
          error,
        },
      });
      return false;
    }
  }

  /**
   * Configure auto-save settings
   *
   * @param config - The new auto-save configuration
   */
  public configureAutoSave(config: Partial<AutoSaveConfig>): void {
    // Clear existing auto-save interval if any
    this.clearAutoSave();

    // Update config
    this.autoSaveConfig = {
      ...this.autoSaveConfig,
      ...config,
    };

    // Set up auto-save again if enabled and session exists
    if (this.autoSaveConfig.enabled && this.sessionId) {
      this.setupAutoSave();
    }

    logger.debug("Auto-save configured", {
      context: "game-engine",
      metadata: {
        sessionId: this.sessionId,
        autoSaveEnabled: this.autoSaveConfig.enabled,
        autoSaveInterval: this.autoSaveConfig.interval,
      },
    });
  }

  /**
   * Subscribe to game events
   *
   * @param eventType - The event type to subscribe to
   * @param handler - The handler function to call when the event occurs
   * @returns A function to unsubscribe the handler
   */
  public on<T extends GameEventType>(
    eventType: T,
    handler: EventHandler<T>
  ): () => void {
    // Get or create the set of handlers for this event type
    if (!this.eventHandlers.has(eventType)) {
      this.eventHandlers.set(eventType, new Set());
    }

    const handlers = this.eventHandlers.get(eventType)!;
    handlers.add(handler);

    // Return an unsubscribe function
    return () => {
      handlers.delete(handler);
      if (handlers.size === 0) {
        this.eventHandlers.delete(eventType);
      }
    };
  }

  /**
   * Unsubscribe from game events
   *
   * @param eventType - The event type to unsubscribe from
   * @param handler - The handler function to remove
   */
  public off<T extends GameEventType>(
    eventType: T,
    handler: EventHandler<T>
  ): void {
    const handlers = this.eventHandlers.get(eventType);
    if (handlers) {
      handlers.delete(handler);
      if (handlers.size === 0) {
        this.eventHandlers.delete(eventType);
      }
    }
  }

  /**
   * Shutdown the save/load manager
   * Cleans up auto-save interval and other resources
   */
  public shutdown(): void {
    this.clearAutoSave();
    this.sessionId = null;
    this.eventHandlers.clear();

    logger.debug("SaveLoadManager shutdown", {
      context: "game-engine",
    });
  }

  /**
   * Emit a game event to all subscribers
   *
   * @param eventType - The type of event to emit
   * @param payload - The event payload
   * @private
   */
  private emitEvent<T extends GameEventType>(
    eventType: T,
    payload: T extends keyof GameEventPayload ? GameEventPayload[T] : unknown
  ): void {
    // Don't emit if no session is initialized
    if (!this.sessionId) return;

    const handlers = this.eventHandlers.get(eventType);
    if (!handlers) return;

    const event: GameEvent<T> = {
      type: eventType,
      payload,
      timestamp: new Date(),
      sessionId: this.sessionId,
    };

    // Call all handlers with the event
    handlers.forEach((handler) => {
      try {
        handler(event);
      } catch (error) {
        logger.error("Error in event handler", {
          context: "game-engine",
          metadata: {
            eventType,
            error,
          },
        });
      }
    });
  }

  /**
   * Ensure the save/load manager is initialized with a session
   *
   * @throws Error if not initialized
   * @private
   */
  private ensureInitialized(): void {
    if (!this.sessionId) {
      throw new Error("SaveLoadManager not initialized with a session");
    }
  }

  /**
   * Set up auto-save interval
   *
   * @private
   */
  private setupAutoSave(): void {
    this.clearAutoSave();

    // Only set up if in browser environment
    if (typeof window !== "undefined") {
      this.autoSaveIntervalId = setInterval(() => {
        this.createAutoSave().catch((error) => {
          logger.error("Auto-save failed", {
            context: "game-engine",
            metadata: {
              sessionId: this.sessionId,
              error,
            },
          });
        });
      }, this.autoSaveConfig.interval);
    }
  }

  /**
   * Clear auto-save interval
   *
   * @private
   */
  private clearAutoSave(): void {
    if (this.autoSaveIntervalId) {
      clearInterval(this.autoSaveIntervalId);
      this.autoSaveIntervalId = null;
    }
  }

  /**
   * Cleanup old auto-saves to prevent excessive storage usage
   * Keeps only the most recent auto-saves according to configuration
   *
   * @private
   */
  private async cleanupAutoSaves(): Promise<void> {
    if (!this.sessionId) return;

    try {
      // Get repository references directly
      const gameStateRepository = (this.gameStateService as any)
        .gameStateRepository;
      if (
        !gameStateRepository ||
        typeof gameStateRepository.findBySessionId !== "function" ||
        typeof gameStateRepository.delete !== "function"
      ) {
        logger.warn("Cannot cleanup auto-saves: missing repository methods", {
          context: "game-engine",
        });
        return;
      }

      // Get all auto-saves for the session
      const allStates = await gameStateRepository.findBySessionId(
        this.sessionId
      );
      const autoSaves = allStates.filter(
        (state: GameState) => state.isAutosave
      );

      // If we have more than the max, delete the oldest ones
      if (autoSaves.length > this.autoSaveConfig.maxAutoSaves) {
        // Sort by timestamp (newest first)
        const sortedAutoSaves = autoSaves.sort(
          (a: GameState, b: GameState) =>
            new Date(b.saveTimestamp).getTime() -
            new Date(a.saveTimestamp).getTime()
        );

        // Keep the newest maxAutoSaves, delete the rest
        const savePointsToDelete = sortedAutoSaves.slice(
          this.autoSaveConfig.maxAutoSaves
        );

        // Delete old save points
        for (const savePoint of savePointsToDelete) {
          await gameStateRepository.delete(savePoint.id);
          logger.debug("Deleted old auto-save", {
            context: "game-engine",
            metadata: {
              stateId: savePoint.id,
              sessionId: this.sessionId,
            },
          });
        }
      }
    } catch (error) {
      logger.error("Failed to cleanup auto-saves", {
        context: "game-engine",
        metadata: {
          sessionId: this.sessionId,
          error,
        },
      });
      // Don't throw - this is a maintenance operation that shouldn't break the game
    }
  }
}

// Export singleton instance
export const saveLoadManager = new SaveLoadManager();
