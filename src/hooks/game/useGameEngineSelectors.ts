import { useCallback, useMemo, useState } from "react";
import { useSafeSession } from "@/contexts/SafeSessionContext";
import type { GameSession, GameState } from "@/types/game";
import {
  getGameState,
  getLatestGameStateForSession,
  loadGameState,
  saveGameState as saveGameStateAction,
} from "@/lib/actions/game-state-actions";
import { makeDecision as makeDecisionAction } from "@/lib/actions/decision-actions";
import { logger } from "@/lib/utils/logger";

/**
 * Custom hooks for accessing specific parts of the game session state
 * These hooks use memoization to reduce unnecessary re-renders
 *
 * Note: Adapted to use SafeSessionContext instead of GameEngineProvider
 */

/**
 * Hook to get the active status of the game engine
 * @returns True if the game engine is active, false otherwise
 */
export function useGameActiveStatus(): boolean {
  const { currentSession } = useSafeSession();
  return !!currentSession?.isActive;
}

/**
 * Hook to get the current world ID
 * @returns The current world ID if available, undefined otherwise
 */
export function useCurrentWorldId(): string | undefined {
  const { currentSession } = useSafeSession();
  if (!currentSession?.sessionData) return undefined;

  return currentSession.sessionData.worldId;
}

/**
 * Hook to get the current character ID
 * @returns The current character ID if available, undefined otherwise
 */
export function useCurrentCharacterId(): string | undefined {
  const { currentSession } = useSafeSession();
  return currentSession?.characterId;
}

/**
 * Hook to get the loading state of the game engine
 * @returns True if the game engine is loading, false otherwise
 */
export function useGameEngineLoading(): boolean {
  const { isLoadingSession } = useSafeSession();
  return isLoadingSession;
}

/**
 * Hook to get the error state of the game engine
 * @returns The error message if there is an error, null otherwise
 */
export function useGameEngineError(): string | null {
  const { error } = useSafeSession();
  return error;
}

/**
 * Hook to clear the error state of the game engine
 * @returns A function to clear the error
 */
export function useGameEngineClearError(): () => void {
  // Note: SafeSessionContext doesn't have a clearError method
  // This is a no-op function for compatibility
  return () => {};
}

/**
 * Hook to get the current game state and session.
 * @returns An object containing the current game state (from sessionData) and the session itself.
 *          'state' can be undefined if there's no active session or sessionData.
 *          'session' can be null if there's no active session.
 */
export function useGameCurrentState(): {
  state: GameState | undefined;
  session: GameSession | null;
} {
  const { currentSession } = useSafeSession();
  return {
    state: currentSession?.sessionData as GameState | undefined, // Assuming sessionData is or can be cast to GameState
    session: currentSession,
  };
}

/**
 * Hook to get the current character state
 * @returns The current character state if available, undefined otherwise
 */
export function useCharacterState(): Record<string, any> | undefined {
  const { currentSession } = useSafeSession();
  if (!currentSession?.sessionData) return undefined;

  return currentSession.sessionData.characterState || {};
}

/**
 * Hook to get the current world state
 * @returns The current world state if available, undefined otherwise
 */
export function useWorldState(): Record<string, any> | undefined {
  const { currentSession } = useSafeSession();
  if (!currentSession?.sessionData) return undefined;

  return currentSession.sessionData.worldState || {};
}

/**
 * Hook to get the latest game state
 * @returns A function to fetch the latest game state
 */
export function useLatestGameState() {
  const { currentSession } = useSafeSession();

  const getLatestState = useCallback(async () => {
    if (!currentSession?.id) return undefined;

    try {
      const latestStateId = await getLatestGameStateForSession(
        currentSession.id
      );
      if (!latestStateId) return undefined;

      return await getGameState(latestStateId);
    } catch (error) {
      logger.error("Failed to get latest game state", {
        context: "hook",
        metadata: {
          hook: "useLatestGameState",
          error,
        },
      });
      return undefined;
    }
  }, [currentSession?.id]);

  return getLatestState;
}

/**
 * Hook to get the current location from the game state
 * @returns The current location if available, undefined otherwise
 */
export function useCurrentLocation(): string | undefined {
  const { currentSession } = useSafeSession();
  if (!currentSession?.sessionData) return undefined;

  return currentSession.sessionData.currentLocation;
}

/**
 * Hook to get the current narrative from the game state
 * @returns The current narrative if available, undefined otherwise
 */
export function useNarrative():
  | {
      text: string;
      history: Array<{ type: "narrative" | "playerResponse"; content: string }>;
    }
  | undefined {
  const { currentSession } = useSafeSession();
  if (!currentSession?.sessionData) return undefined;

  return currentSession.sessionData.narrative;
}

/**
 * Hook to get the current decisions from the game state
 * @returns The current decisions if available, undefined otherwise
 */
export function useDecisions():
  | Array<{ text: string; consequences?: string }>
  | undefined {
  const { currentSession } = useSafeSession();
  if (!currentSession?.sessionData) return undefined;

  return currentSession.sessionData.decisions || [];
}

/**
 * Hook to save the current game state
 * @returns A function to save the game state
 */
export function useSaveGame() {
  const { currentSession } = useSafeSession();
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveGame = async (savePointName?: string) => {
    if (!currentSession?.id) {
      setError("No active session to save");
      return null;
    }

    setIsSaving(true);
    setError(null);

    try {
      const savedState = await saveGameStateAction(
        currentSession.id,
        savePointName
      );
      return savedState;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to save game";
      setError(errorMessage);
      logger.error("Failed to save game", {
        context: "hook",
        metadata: {
          hook: "useSaveGame",
          error: err,
        },
      });
      return null;
    } finally {
      setIsSaving(false);
    }
  };

  return { saveGame, isSaving, error };
}

/**
 * Hook to load a game state
 * @returns A function to load a game state
 */
export function useLoadGame() {
  const { loadSession } = useSafeSession();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadGame = async (stateId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const state = await loadGameState(stateId);
      if (state) {
        // Use the SafeSessionContext's loadSession method
        await loadSession(state.sessionId);
        return state;
      }
      return null;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load game";
      setError(errorMessage);
      logger.error("Failed to load game", {
        context: "hook",
        metadata: {
          hook: "useLoadGame",
          stateId,
          error: err,
        },
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { loadGame, isLoading, error };
}

/**
 * Hook to make a decision in the game
 * @returns A function to make a decision
 */
export function useMakeDecision() {
  const { currentSession } = useSafeSession();
  const [isDeciding, setIsDeciding] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const makeDecision = async (decisionIndex: number) => {
    if (!currentSession?.id) {
      setError("No active session to make a decision");
      return null;
    }

    setIsDeciding(true);
    setError(null);

    try {
      const result = await makeDecisionAction(currentSession.id, decisionIndex);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to make decision";
      setError(errorMessage);
      logger.error("Failed to make decision", {
        context: "hook",
        metadata: {
          hook: "useMakeDecision",
          sessionId: currentSession.id,
          decisionIndex,
          error: err,
        },
      });
      return null;
    } finally {
      setIsDeciding(false);
    }
  };

  return { makeDecision, isDeciding, error };
}
