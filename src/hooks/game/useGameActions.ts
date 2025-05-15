import { useState, useCallback } from "react";
import { logger } from "@/lib/utils/logger";
import { makeDecision } from "@/lib/actions/decision-actions";
import {
  saveGameState,
  loadGameState,
  getGameState,
  getLatestGameStateForSession,
} from "@/lib/actions/game-state-actions";
import {
  startGame,
  endGame,
  getOrCreateGameSession,
} from "@/lib/actions/gameSession-actions";
import { generateNarrative } from "@/lib/actions/narrative-actions";
import { GameState } from "@/types/game";

interface ActionStatus {
  isLoading: boolean;
  error: string | null;
  lastActionType: string | null;
}

interface UseGameActionsReturn {
  // Action wrappers
  startGame: (characterId: string, worldId: string) => Promise<string | null>;
  endGame: (sessionId: string) => Promise<boolean>;
  saveGame: (
    sessionId: string,
    savePointName?: string
  ) => Promise<GameState | null>;
  loadGame: (stateId: string) => Promise<GameState | null>;
  getState: (stateId: string) => Promise<GameState | null>;
  getLatestState: (sessionId: string) => Promise<string | null>;
  makePlayerDecision: (
    sessionId: string,
    decisionIndex: number
  ) => Promise<{
    narrativeText: string;
    decisions: any[];
    updatedState: GameState;
  } | null>;
  generateNewNarrative: (sessionId: string) => Promise<{
    narrativeText: string;
    decisions: any[];
  } | null>;

  // Status
  status: ActionStatus;
  clearErrors: () => void;
}

/**
 * Custom hook for game actions with loading states & error handling
 * Provides wrapped versions of server actions with consistent error handling
 *
 * @returns Game action methods and loading/error states
 */
export function useGameActions(): UseGameActionsReturn {
  const [status, setStatus] = useState<ActionStatus>({
    isLoading: false,
    error: null,
    lastActionType: null,
  });

  /**
   * Clear any existing errors
   */
  const clearErrors = useCallback(() => {
    setStatus((prev) => ({
      ...prev,
      error: null,
    }));
  }, []);

  /**
   * Generic wrapper for server actions
   */
  const executeAction = useCallback(
    async <T>(
      actionType: string,
      actionFn: () => Promise<T>,
      errorMessage: string = "Action failed"
    ): Promise<T | null> => {
      setStatus({
        isLoading: true,
        error: null,
        lastActionType: actionType,
      });

      try {
        const result = await actionFn();

        setStatus({
          isLoading: false,
          error: null,
          lastActionType: actionType,
        });

        return result;
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        const formattedError = `${errorMessage}: ${errorMsg}`;

        logger.error(`Game action error: ${actionType}`, {
          context: "game-actions-hook",
          metadata: { actionType, error: errorMsg },
        });

        setStatus({
          isLoading: false,
          error: formattedError,
          lastActionType: actionType,
        });

        return null;
      }
    },
    []
  );

  /**
   * Start a new game session
   */
  const startGameAction = useCallback(
    async (characterId: string, worldId: string): Promise<string | null> => {
      return executeAction(
        "startGame",
        async () => {
          const { session } = await startGame(characterId, worldId);
          return session.id;
        },
        "Failed to start game"
      );
    },
    [executeAction]
  );

  /**
   * End an active game session
   */
  const endGameAction = useCallback(
    async (sessionId: string): Promise<boolean> => {
      const result = await executeAction(
        "endGame",
        async () => {
          await endGame(sessionId);
          return true;
        },
        "Failed to end game session"
      );

      return result === null ? false : result;
    },
    [executeAction]
  );

  /**
   * Save the current game state
   */
  const saveGame = useCallback(
    async (
      sessionId: string,
      savePointName?: string
    ): Promise<GameState | null> => {
      return executeAction(
        "saveGame",
        async () => {
          const savedState = await saveGameState(sessionId, savePointName);
          return savedState;
        },
        "Failed to save game"
      );
    },
    [executeAction]
  );

  /**
   * Load a specific game state
   */
  const loadGame = useCallback(
    async (stateId: string): Promise<GameState | null> => {
      return executeAction(
        "loadGame",
        async () => {
          const loadedState = await loadGameState(stateId);
          return loadedState;
        },
        "Failed to load game"
      );
    },
    [executeAction]
  );

  /**
   * Get a specific game state
   */
  const getState = useCallback(
    async (stateId: string): Promise<GameState | null> => {
      return executeAction(
        "getState",
        async () => {
          const state = await getGameState(stateId);
          return state;
        },
        "Failed to get game state"
      );
    },
    [executeAction]
  );

  /**
   * Get the latest game state for a session
   */
  const getLatestState = useCallback(
    async (sessionId: string): Promise<string | null> => {
      return executeAction(
        "getLatestState",
        async () => {
          const stateId = await getLatestGameStateForSession(sessionId);
          return stateId;
        },
        "Failed to get latest game state"
      );
    },
    [executeAction]
  );

  /**
   * Make a player decision
   */
  const makePlayerDecision = useCallback(
    async (
      sessionId: string,
      decisionIndex: number
    ): Promise<{
      narrativeText: string;
      decisions: any[];
      updatedState: GameState;
    } | null> => {
      return executeAction(
        "makeDecision",
        async () => {
          const result = await makeDecision(sessionId, decisionIndex);
          return {
            narrativeText: result.narrativeResponse.narrativeText,
            decisions: result.narrativeResponse.newDecisionPoints,
            updatedState: result.updatedState,
          };
        },
        "Failed to process decision"
      );
    },
    [executeAction]
  );

  /**
   * Generate new narrative
   */
  const generateNewNarrative = useCallback(
    async (
      sessionId: string
    ): Promise<{
      narrativeText: string;
      decisions: any[];
    } | null> => {
      return executeAction(
        "generateNarrative",
        async () => {
          const result = await generateNarrative(sessionId);
          return {
            narrativeText: result.narrativeText,
            decisions: result.decisions,
          };
        },
        "Failed to generate narrative"
      );
    },
    [executeAction]
  );

  return {
    // Action wrappers
    startGame: startGameAction,
    endGame: endGameAction,
    saveGame,
    loadGame,
    getState,
    getLatestState,
    makePlayerDecision,
    generateNewNarrative,

    // Status
    status,
    clearErrors,
  };
}
