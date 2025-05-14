"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type {
  GameEngineContext,
  GameEngineProviderProps,
} from "@/types/engine";
import { GameSession, GameState } from "@/types/game";
import { GameEngine } from "../lib/game-engine/GameEngine";

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

  // Initialize game engine with initial state if provided
  useEffect(() => {
    if (initialState && initialSession) {
      // Initialize state manager with initial state
      try {
        engine
          .loadGame(initialSession.id)
          .then(({ session, state }) => {
            setCurrentSession(session);
            setCurrentState(state);
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

    // Handler for narrative updates
    const handleNarrativeUpdate = (event: any) => {
      // Update UI state based on narrative changes
      // This would typically update some UI state that shows the narrative
    };

    // Handler for state changes
    const handleStateLoaded = (event: any) => {
      // Update current state when state is loaded
      engine
        .getGameState(event.payload.stateId)
        .then((state) => {
          if (state) {
            setCurrentState(state);
          }
        })
        .catch((err) => {
          setError(`Failed to load game state: ${err.message}`);
        });
    };

    // Handler for errors
    const handleError = (event: any) => {
      setError(`Game engine error: ${event.payload.message}`);
    };

    // Register event listeners
    engine.on("NARRATIVE_UPDATED", handleNarrativeUpdate);
    engine.on("STATE_LOADED", handleStateLoaded);
    engine.on("ERROR_OCCURRED", handleError);

    // Clean up event listeners on unmount
    return () => {
      engine.off("NARRATIVE_UPDATED", handleNarrativeUpdate);
      engine.off("STATE_LOADED", handleStateLoaded);
      engine.off("ERROR_OCCURRED", handleError);
    };
  }, [engine]);

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
