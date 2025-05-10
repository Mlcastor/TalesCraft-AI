'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { sessionManager } from './SessionManager';
import { gameStateManager } from './GameStateManager';
import type { GameSession, GameState } from '@/types/database';

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
   */
  startNewGame: (characterId: string) => Promise<GameState>;
  
  /**
   * Resume an existing game for a character
   */
  resumeGame: (characterId: string) => Promise<GameState>;
  
  /**
   * End the current game session
   */
  endGameSession: () => Promise<void>;
  
  /**
   * Update the current game state
   */
  updateGameState: (updates: any) => Promise<GameState | null>;

  /**
   * Create a checkpoint in the game
   */
  createCheckpoint: (savePointName?: string) => Promise<GameState | null>;
}

// Create context with default values
const GameEngineContext = createContext<GameEngineContextType>({
  session: null,
  gameState: null,
  isLoading: false,
  error: null,
  startNewGame: async () => {
    throw new Error('GameEngineProvider not initialized');
  },
  resumeGame: async () => {
    throw new Error('GameEngineProvider not initialized');
  },
  endGameSession: async () => {
    throw new Error('GameEngineProvider not initialized');
  },
  updateGameState: async () => {
    throw new Error('GameEngineProvider not initialized');
  },
  createCheckpoint: async () => {
    throw new Error('GameEngineProvider not initialized');
  },
});

/**
 * Game Engine Provider props
 */
interface GameEngineProviderProps {
  children: React.ReactNode;
}

/**
 * Game Engine Provider component
 * Provides access to the game engine context
 */
export function GameEngineProvider({ children }: GameEngineProviderProps) {
  const [session, setSession] = useState<GameSession | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Start a new game for a character
   */
  const startNewGame = useCallback(async (characterId: string): Promise<GameState> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const newGameState = await gameStateManager.setupNewGame(characterId);
      setSession(sessionManager.getCurrentSession());
      setGameState(newGameState);
      return newGameState;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to start new game';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Resume an existing game for a character
   */
  const resumeGame = useCallback(async (characterId: string): Promise<GameState> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const resumedGameState = await gameStateManager.resumeGame(characterId);
      setSession(sessionManager.getCurrentSession());
      setGameState(resumedGameState);
      return resumedGameState;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to resume game';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * End the current game session
   */
  const endGameSession = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      await sessionManager.endSession();
      setSession(null);
      // We don't clear the game state here as it could be needed for reference
      // even after the session ends
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to end game session';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Update the current game state
   */
  const updateGameState = useCallback(async (updates: any): Promise<GameState | null> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const updatedGameState = await gameStateManager.updateGameState(updates);
      if (updatedGameState) {
        setGameState(updatedGameState);
      }
      return updatedGameState;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update game state';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Create a checkpoint in the game
   */
  const createCheckpoint = useCallback(async (savePointName?: string): Promise<GameState | null> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const newGameState = await gameStateManager.createNewStateFromCurrent(savePointName);
      if (newGameState) {
        setGameState(newGameState);
      }
      return newGameState;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create checkpoint';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

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
    throw new Error('useGameEngine must be used within a GameEngineProvider');
  }
  
  return context;
} 