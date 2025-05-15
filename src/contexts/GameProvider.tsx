"use client";

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
  useCallback,
  useEffect,
} from "react";
import { startGame } from "@/lib/actions/gameSession-actions";
import { makeDecision as makeDecisionAction } from "@/lib/actions/decision-actions";
import { logger } from "@/lib/utils/logger";
import {
  GameClientState,
  GameClientAction,
  initialClientState,
} from "@/types/gameClient";

/**
 * Reducer function to manage game state transitions.
 * @param state - The current game state.
 * @param action - The action to perform.
 * @returns The new game state.
 */
function gameClientReducer(
  state: GameClientState,
  action: GameClientAction
): GameClientState {
  switch (action.type) {
    case "INITIALIZE_GAME_START":
      return {
        ...state,
        isLoadingInitialGame: true,
        error: null,
      };
    case "INITIALIZE_GAME_SUCCESS":
      return {
        ...state,
        isLoadingInitialGame: false,
        sessionId: action.payload.sessionId,
        characterId: action.payload.characterId,
        worldId: action.payload.worldId,
        currentGameState: action.payload.gameState,
        error: null,
      };
    case "INITIALIZE_GAME_FAILURE":
      return {
        ...state,
        isLoadingInitialGame: false,
        error: action.payload,
      };
    case "MAKE_DECISION_START":
      return {
        ...state,
        isMakingDecision: true,
        error: null, // Clear previous error when starting a new action
      };
    case "MAKE_DECISION_SUCCESS":
      return {
        ...state,
        isMakingDecision: false,
        currentGameState: action.payload.updatedState,
        error: null,
      };
    case "MAKE_DECISION_FAILURE":
      return {
        ...state,
        isMakingDecision: false,
        error: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}

/**
 * Defines the shape of the game context provided to consumers.
 */
interface GameContextType {
  state: GameClientState;
  initializeGame: (characterId: string, worldId: string) => Promise<void>;
  makePlayerDecision: (decisionIndex: number) => Promise<void>;
  clearError: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

/**
 * Props for the GameProvider component.
 */
interface GameProviderProps {
  children: ReactNode;
  autoInitializeCharacterId?: string;
  autoInitializeWorldId?: string;
}

/**
 * Provides game state and actions to its children components.
 * It interacts with server actions to manage the game lifecycle.
 * @param children - React nodes to be rendered within the provider.
 * @param autoInitializeCharacterId - Optional character ID to automatically start/load a game session.
 * @param autoInitializeWorldId - Optional world ID to automatically start/load a game session.
 */
export function GameProvider({
  children,
  autoInitializeCharacterId,
  autoInitializeWorldId,
}: GameProviderProps) {
  const [state, dispatch] = useReducer(gameClientReducer, initialClientState);

  /**
   * Initializes a new game session or loads an existing one.
   * It calls the `startGame` server action.
   */
  const initializeGame = useCallback(
    async (characterId: string, worldId: string) => {
      dispatch({ type: "INITIALIZE_GAME_START" });
      try {
        logger.debug(
          `Attempting to start game for character ${characterId} in world ${worldId}`,
          { context: "GameProvider" }
        );
        const { session, initialState } = await startGame(characterId, worldId);
        logger.debug(`Game started successfully. Session ID: ${session.id}`, {
          context: "GameProvider",
          metadata: {
            sessionId: session.id,
            characterId,
            worldId,
            initialState,
          },
        });
        dispatch({
          type: "INITIALIZE_GAME_SUCCESS",
          payload: {
            sessionId: session.id,
            characterId,
            worldId,
            gameState: initialState,
          },
        });
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to initialize game";
        logger.error("Error initializing game", {
          context: "GameProvider",
          error: err instanceof Error ? err : new Error(String(err)),
          metadata: { characterId, worldId },
        });
        dispatch({ type: "INITIALIZE_GAME_FAILURE", payload: errorMessage });
      }
    },
    [dispatch]
  );

  /**
   * Submits a player's decision to the server.
   * It calls the `makeDecision` server action.
   */
  const makePlayerDecision = useCallback(
    async (decisionIndex: number) => {
      if (!state.sessionId) {
        const noSessionError = "Cannot make decision: No active session ID.";
        logger.error(noSessionError, {
          context: "GameProvider",
          metadata: { characterId: state.characterId, worldId: state.worldId },
        });
        dispatch({ type: "MAKE_DECISION_FAILURE", payload: noSessionError });
        return;
      }
      dispatch({ type: "MAKE_DECISION_START" });
      try {
        logger.debug(
          `Making decision ${decisionIndex} for session ${state.sessionId}`,
          {
            context: "GameProvider",
            metadata: { sessionId: state.sessionId, decisionIndex },
          }
        );
        const result = await makeDecisionAction(state.sessionId, decisionIndex);
        logger.debug(
          `Decision processed successfully for session ${state.sessionId}`,
          {
            context: "GameProvider",
            metadata: { sessionId: state.sessionId, result },
          }
        );
        dispatch({ type: "MAKE_DECISION_SUCCESS", payload: result });
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to make decision";
        logger.error("Error making decision", {
          context: "GameProvider",
          error: err instanceof Error ? err : new Error(String(err)),
          metadata: { sessionId: state.sessionId, decisionIndex },
        });
        dispatch({ type: "MAKE_DECISION_FAILURE", payload: errorMessage });
      }
    },
    [state.sessionId, state.characterId, state.worldId, dispatch]
  );

  /**
   * Clears any active error message in the game state.
   */
  const clearError = useCallback(() => {
    dispatch({ type: "CLEAR_ERROR" });
  }, [dispatch]);

  useEffect(() => {
    if (
      autoInitializeCharacterId &&
      autoInitializeWorldId &&
      !state.sessionId && // Only initialize if no session ID yet
      !state.isLoadingInitialGame && // And not already loading
      !state.currentGameState // And no game state loaded yet
    ) {
      logger.debug(
        `Auto-initializing game with Character ID: ${autoInitializeCharacterId}, World ID: ${autoInitializeWorldId}`,
        {
          context: "GameProvider",
          metadata: { autoInitializeCharacterId, autoInitializeWorldId },
        }
      );
      initializeGame(autoInitializeCharacterId, autoInitializeWorldId);
    }
  }, [
    autoInitializeCharacterId,
    autoInitializeWorldId,
    initializeGame,
    state.sessionId,
    state.isLoadingInitialGame,
    state.currentGameState,
  ]);

  return (
    <GameContext.Provider
      value={{ state, initializeGame, makePlayerDecision, clearError }}
    >
      {children}
    </GameContext.Provider>
  );
}

/**
 * Custom hook to access the game context.
 * Throws an error if used outside of a GameProvider.
 * @returns The game context.
 */
export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
