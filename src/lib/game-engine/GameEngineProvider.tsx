"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { GameSession, GameState } from "@/types/database";
import {
  startNewGameSession,
  resumeGameSession,
  updateGameStateAction,
  createCheckpointAction,
  endGameSessionAction,
  saveNarrativeHistoryAction,
  loadNarrativeHistoryAction,
} from "@/app/api/game/actions";

/**
 * Game engine context interface
 */
export interface GameEngineContextType {
  /**
   * Current game session
   */
  session: GameSession | null;

  /**
   * Current game state
   */
  gameState: GameState | null;

  /**
   * Whether the game is currently loading
   */
  isLoading: boolean;

  /**
   * Error message if any
   */
  error: string | null;

  /**
   * Start a new game for a character
   * @throws Error if the game fails to start
   */
  startNewGame: (characterId: string) => Promise<GameState>;

  /**
   * Resume an existing game for a character
   * @throws Error if the game fails to resume
   */
  resumeGame: (characterId: string) => Promise<GameState>;

  /**
   * End the current game session
   * @throws Error if the session fails to end
   */
  endGameSession: () => Promise<void>;

  /**
   * Update the current game state
   * @throws Error if the update fails
   */
  updateGameState: (updates: any) => Promise<GameState>;

  /**
   * Create a checkpoint in the game
   * @throws Error if checkpoint creation fails
   */
  createCheckpoint: (savePointName?: string) => Promise<GameState>;

  /**
   * Save narrative history for the current game state
   * @throws Error if the save fails
   */
  saveNarrativeHistory: (
    narrativeHistory: Array<{
      type: string;
      content: any;
    }>
  ) => Promise<boolean>;

  /**
   * Load narrative history for the current game state
   * @throws Error if the load fails
   */
  loadNarrativeHistory: () => Promise<
    Array<{
      id: string;
      type: string;
      content: any;
      timestamp: Date;
    }>
  >;
}

// Create context with default values
const GameEngineContext = createContext<GameEngineContextType>({
  session: null,
  gameState: null,
  isLoading: false,
  error: null,
  startNewGame: async () => {
    throw new Error("GameEngineProvider not initialized");
  },
  resumeGame: async () => {
    throw new Error("GameEngineProvider not initialized");
  },
  endGameSession: async () => {
    throw new Error("GameEngineProvider not initialized");
  },
  updateGameState: async () => {
    throw new Error("GameEngineProvider not initialized");
  },
  createCheckpoint: async () => {
    throw new Error("GameEngineProvider not initialized");
  },
  saveNarrativeHistory: async () => {
    throw new Error("GameEngineProvider not initialized");
  },
  loadNarrativeHistory: async () => {
    throw new Error("GameEngineProvider not initialized");
  },
});

/**
 * Game Engine Provider props
 */
interface GameEngineProviderProps {
  children: React.ReactNode;
  initialSession?: GameSession | null;
  initialGameState?: GameState | null;
  initialError?: string | null;
}

/**
 * Game Engine Provider component
 * Provides access to the game engine context
 */
export function GameEngineProvider({
  children,
  initialSession = null,
  initialGameState = null,
  initialError = null,
}: GameEngineProviderProps) {
  const [session, setSession] = useState<GameSession | null>(initialSession);
  const [gameState, setGameState] = useState<GameState | null>(
    initialGameState
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(initialError);

  // Set the local game engine state if the initial values change
  useEffect(() => {
    if (initialSession) setSession(initialSession);
    if (initialGameState) setGameState(initialGameState);
    if (initialError) setError(initialError);
  }, [initialSession, initialGameState, initialError]);

  /**
   * Start a new game for a character
   */
  const startNewGame = useCallback(
    async (characterId: string): Promise<GameState> => {
      setIsLoading(true);
      setError(null);

      try {
        // Use the server action to start a new game session
        const result = await startNewGameSession(characterId);

        if (result.error || !result.gameState) {
          const errorMsg = result.error || "Failed to start new game";
          setError(errorMsg);
          throw new Error(errorMsg);
        }

        setSession(result.session);
        setGameState(result.gameState);
        return result.gameState;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to start new game";
        setError(errorMessage);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  /**
   * Resume an existing game for a character
   */
  const resumeGame = useCallback(
    async (characterId: string): Promise<GameState> => {
      setIsLoading(true);
      setError(null);

      try {
        // If we already have a session and game state, return the existing state
        if (session && gameState) {
          return gameState;
        }

        // Use the server action to resume the game session
        const result = await resumeGameSession(characterId);

        if (result.error || !result.gameState) {
          const errorMsg = result.error || "Failed to resume game";
          setError(errorMsg);
          throw new Error(errorMsg);
        }

        setSession(result.session);
        setGameState(result.gameState);
        return result.gameState;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to resume game";
        setError(errorMessage);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [session, gameState]
  );

  /**
   * End the current game session
   */
  const endGameSession = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      if (!session?.id) {
        throw new Error("No active session to end");
      }

      // Use the server action to end the game session
      const result = await endGameSessionAction(session.id);

      if (result.error) {
        setError(result.error);
        throw new Error(result.error);
      }

      setSession(null);
      // We don't clear the game state here as it could be needed for reference
      // even after the session ends
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to end game session";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [session]);

  /**
   * Update the current game state
   */
  const updateGameState = useCallback(
    async (updates: any): Promise<GameState> => {
      setIsLoading(true);
      setError(null);

      try {
        if (!session?.id || !gameState?.characterId) {
          throw new Error("No active session or game state");
        }

        // Use the server action to update the game state
        const result = await updateGameStateAction(
          session.id,
          gameState.characterId,
          updates
        );

        if (result.error || !result.gameState) {
          const errorMsg = result.error || "Failed to update game state";
          setError(errorMsg);
          throw new Error(errorMsg);
        }

        setGameState(result.gameState);
        return result.gameState;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to update game state";
        setError(errorMessage);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [session, gameState]
  );

  /**
   * Create a checkpoint in the game
   */
  const createCheckpoint = useCallback(
    async (savePointName?: string): Promise<GameState> => {
      setIsLoading(true);
      setError(null);

      try {
        if (!session?.id || !gameState?.characterId) {
          throw new Error("No active session or game state");
        }

        // Use the server action to create a checkpoint
        const result = await createCheckpointAction(
          session.id,
          gameState.characterId,
          savePointName
        );

        if (result.error || !result.gameState) {
          const errorMsg = result.error || "Failed to create checkpoint";
          setError(errorMsg);
          throw new Error(errorMsg);
        }

        setGameState(result.gameState);
        return result.gameState;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to create checkpoint";
        setError(errorMessage);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [session, gameState]
  );

  /**
   * Save narrative history for the current game state
   */
  const saveNarrativeHistory = useCallback(
    async (
      narrativeHistory: Array<{
        type: string;
        content: any;
      }>
    ): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      try {
        if (!gameState?.id) {
          throw new Error("No active game state");
        }

        // Use the server action to save narrative history
        const result = await saveNarrativeHistoryAction(
          gameState.id,
          narrativeHistory
        );

        if (result.error) {
          setError(result.error);
          throw new Error(result.error);
        }

        return true;
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Failed to save narrative history";
        setError(errorMessage);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [gameState]
  );

  /**
   * Load narrative history for the current game state
   */
  const loadNarrativeHistory = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!gameState?.id) {
        throw new Error("No active game state");
      }

      // Use the server action to load narrative history
      const result = await loadNarrativeHistoryAction(gameState.id);

      if (result.error || !result.narrativeHistory) {
        const errorMsg = result.error || "Failed to load narrative history";
        setError(errorMsg);
        throw new Error(errorMsg);
      }

      return result.narrativeHistory;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load narrative history";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [gameState]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // We could automatically end the session here, but it's better to do it explicitly
      // to ensure proper state management and prevent accidental session termination
    };
  }, []);

  // Create context value
  const contextValue: GameEngineContextType = {
    session,
    gameState,
    isLoading,
    error,
    startNewGame,
    resumeGame,
    endGameSession,
    updateGameState,
    createCheckpoint,
    saveNarrativeHistory,
    loadNarrativeHistory,
  };

  return (
    <GameEngineContext.Provider value={contextValue}>
      {children}
    </GameEngineContext.Provider>
  );
}

/**
 * Custom hook to use the game engine context
 */
export function useGameEngine() {
  const context = useContext(GameEngineContext);

  if (context === undefined) {
    throw new Error("useGameEngine must be used within a GameEngineProvider");
  }

  return context;
}
