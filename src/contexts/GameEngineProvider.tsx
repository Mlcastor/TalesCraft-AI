"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import type {
  GameEngineContext,
  GameEngineProviderProps,
} from "@/types/engine";
import { GameSession, GameState } from "@/types/game";
import { GameEngine } from "../lib/game-engine/GameEngine";
import { logger } from "@/lib/utils/logger";

// Create the context with default values
const GameEngineContext = createContext<GameEngineContext>({
  engine: null,
  currentSession: null,
  currentState: null,
  isLoading: false,
  error: null,
});

/**
 * Hook to use the game engine context
 *
 * @returns The game engine context
 * @throws Error if used outside of GameEngineProvider
 */
export const useGameEngine = (): GameEngineContext => {
  const context = useContext(GameEngineContext);
  if (!context) {
    throw new Error("useGameEngine must be used within a GameEngineProvider");
  }
  return context;
};

/**
 * Provider component for the game engine
 *
 * Manages the game engine instance and provides access to it via context.
 *
 * @param props - The provider props
 * @returns A React component
 */
export const GameEngineProvider: React.FC<GameEngineProviderProps> = ({
  children,
  initialSession,
  initialState,
}) => {
  // Create game engine instance
  const [engine] = useState(() => new GameEngine());
  const engineInstanceIdRef = useRef(
    `engine-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
  );

  // State for current session and game state
  const [currentSession, setCurrentSession] = useState<GameSession | null>(
    initialSession || null
  );
  const [currentState, setCurrentState] = useState<GameState | null>(
    initialState || null
  );

  // Loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Keep track of already processed state IDs to prevent loops
  const processedStateIds = useRef<Map<string, number>>(new Map());
  const MAX_PROCESSING_ATTEMPTS = 2;
  const isHandlingStateEvent = useRef<boolean>(false);

  // Initialize game engine with initial state if provided
  useEffect(() => {
    if (initialState && initialSession) {
      // Initialize state manager with initial state
      try {
        logger.debug("GameEngineProvider: Initializing with initial state", {
          context: "game-engine-provider",
          metadata: {
            engineId: engineInstanceIdRef.current,
            sessionId: initialSession.id,
            stateId: initialState.id,
          },
        });

        engine
          .loadGame(initialSession.id, { alreadyProcessed: true })
          .then(({ session, state }) => {
            setCurrentSession(session);
            setCurrentState(state);
            // Track this state ID as processed
            processedStateIds.current.set(state.id, 1);

            logger.debug("GameEngineProvider: Initial state loaded", {
              context: "game-engine-provider",
              metadata: {
                engineId: engineInstanceIdRef.current,
                sessionId: session.id,
                stateId: state.id,
              },
            });
          })
          .catch((err) => {
            setError(`Failed to load initial game state: ${err.message}`);
          });
      } catch (err) {
        setError(
          `Failed to initialize game engine: ${
            err instanceof Error ? err.message : String(err)
          }`
        );
      }
    }
  }, [engine, initialState, initialSession]);

  // Set up event listeners
  useEffect(() => {
    if (!engine) return;

    // Capture the current value of the ref at the time the effect runs
    const currentEngineId = engineInstanceIdRef.current;

    logger.debug("GameEngineProvider: Setting up event listeners", {
      context: "game-engine-provider",
      metadata: {
        engineId: currentEngineId,
      },
    });

    // Handler for narrative updates
    const handleNarrativeUpdate = (event: any) => {
      // Could implement UI update logic here if needed
      logger.debug("GameEngineProvider: Narrative updated", {
        context: "game-engine-provider",
        metadata: {
          engineId: currentEngineId,
          sessionId: event.sessionId,
        },
      });
    };

    // Handler for location changes
    const handleLocationChange = (event: any) => {
      if (!currentSession || !currentState) {
        logger.warn(
          "GameEngineProvider: No active session or state for location change",
          {
            context: "game-engine-provider",
            metadata: {
              engineId: currentEngineId,
            },
          }
        );
        return;
      }

      const { newLocation } = event.payload;
      const { characterId } = currentSession;
      const { worldId } = currentState;

      // Validate required data
      if (!characterId || !worldId || !newLocation) {
        logger.error(
          "GameEngineProvider: Missing required data for location update",
          {
            context: "game-engine-provider",
            metadata: {
              engineId: currentEngineId,
              sessionId: event.sessionId,
              characterId,
              worldId,
              newLocation,
            },
          }
        );
        return;
      }

      // Location update is already handled by the emitter,
      // this handler is just for UI updates if needed
      logger.debug("GameEngineProvider: Received location change event", {
        context: "game-engine-provider",
        metadata: {
          engineId: currentEngineId,
          sessionId: event.sessionId,
          characterId,
          worldId,
          newLocation,
        },
      });

      // We could update UI state here if needed
      // For now we just log that we received the event
    };

    // Handler for state changes
    const handleStateLoaded = (event: any) => {
      // Check if this event was already processed at the source
      if (event.payload.alreadyProcessed) {
        logger.debug("GameEngineProvider: Skipping already processed state", {
          context: "game-engine-provider",
          metadata: {
            engineId: currentEngineId,
            stateId: event.payload.stateId,
          },
        });
        return;
      }

      // Debounce handling to prevent overlapping calls
      if (isHandlingStateEvent.current) {
        logger.debug(
          "GameEngineProvider: Already handling a state event, skipping",
          {
            context: "game-engine-provider",
            metadata: {
              engineId: currentEngineId,
              stateId: event.payload.stateId,
            },
          }
        );
        return;
      }

      // Prevent infinite loops by checking if we've already processed this state
      const stateId = event.payload.stateId;

      // Get the process count for this state ID
      const processCount = processedStateIds.current.get(stateId) || 0;

      // If we've exceeded the maximum processing attempts, ignore the event
      if (processCount >= MAX_PROCESSING_ATTEMPTS) {
        logger.warn(
          "GameEngineProvider: Maximum processing attempts reached for state",
          {
            context: "game-engine-provider",
            metadata: {
              engineId: currentEngineId,
              stateId,
              processCount,
              maxAttempts: MAX_PROCESSING_ATTEMPTS,
            },
          }
        );
        return;
      }

      // Mark this state ID as processed and increment count
      processedStateIds.current.set(stateId, processCount + 1);

      // Set handling flag to true
      isHandlingStateEvent.current = true;

      // Now update the current state
      setIsLoading(true);

      logger.debug("GameEngineProvider: Loading state from event", {
        context: "game-engine-provider",
        metadata: {
          engineId: currentEngineId,
          stateId,
          processCount: processCount + 1,
        },
      });

      engine
        .getGameState(stateId)
        .then((state) => {
          if (state) {
            setCurrentState(state);
          }
          setIsLoading(false);
          // Reset handling flag when done
          isHandlingStateEvent.current = false;
        })
        .catch((err) => {
          setError(`Failed to load game state: ${err.message}`);
          setIsLoading(false);
          // Reset handling flag on error
          isHandlingStateEvent.current = false;
        });
    };

    // Handler for errors
    const handleError = (event: any) => {
      setError(`Game engine error: ${event.payload.message}`);
      logger.error("GameEngineProvider: Error event received", {
        context: "game-engine-provider",
        metadata: {
          engineId: currentEngineId,
          message: event.payload.message,
          context: event.payload.context,
        },
      });
    };

    // Register event listeners
    engine.on("NARRATIVE_UPDATED", handleNarrativeUpdate);
    engine.on("LOCATION_CHANGED", handleLocationChange);
    engine.on("STATE_LOADED", handleStateLoaded);
    engine.on("ERROR_OCCURRED", handleError);

    // Clean up event listeners on unmount
    return () => {
      logger.debug("GameEngineProvider: Cleaning up event listeners", {
        context: "game-engine-provider",
        metadata: {
          engineId: currentEngineId,
        },
      });

      engine.off("NARRATIVE_UPDATED", handleNarrativeUpdate);
      engine.off("LOCATION_CHANGED", handleLocationChange);
      engine.off("STATE_LOADED", handleStateLoaded);
      engine.off("ERROR_OCCURRED", handleError);
    };
  }, [engine, currentSession, currentState]);

  // Provide the context value
  const contextValue: GameEngineContext = {
    engine,
    currentSession,
    currentState,
    isLoading,
    error,
  };

  return (
    <GameEngineContext.Provider value={contextValue}>
      {children}
    </GameEngineContext.Provider>
  );
};

export default GameEngineProvider;
