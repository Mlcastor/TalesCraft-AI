"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useCallback,
} from "react";
import { SimplifiedGameState, MVPCharacter, MVPWorld } from "@/types/mvpTypes";
import {
  startGameServerAction,
  makeDecisionServerAction,
  loadGameServerAction,
} from "@/lib/actions/gameFlowActions";
import { getWorldByIdAction } from "@/lib/actions/worldActions";
import { getCharacterByIdAction } from "@/lib/actions/characterActions";
import { logger } from "@/lib/utils/logger";

// 1. Define State and Action Types
interface GameClientState {
  currentGameState: SimplifiedGameState | null;
  currentCharacter: MVPCharacter | null;
  currentWorld: MVPWorld | null;
  isLoading: boolean;
  error: string | null;
}

type GameAction =
  | { type: "GAME_ACTION_START" }
  | { type: "GAME_ACTION_FAILURE"; payload: { error: string } }
  | {
      type: "INITIALIZE_GAME_SUCCESS";
      payload: {
        gameState: SimplifiedGameState;
        character: MVPCharacter;
        world: MVPWorld;
      };
    }
  | {
      type: "MAKE_DECISION_SUCCESS";
      payload: { gameState: SimplifiedGameState };
    }
  | {
      type: "LOAD_GAME_SUCCESS";
      payload: {
        gameState: SimplifiedGameState | null;
        character?: MVPCharacter;
        world?: MVPWorld;
      };
    }
  | { type: "SET_ACTIVE_CHARACTER"; payload: { character: MVPCharacter } }
  | { type: "SET_ACTIVE_WORLD"; payload: { world: MVPWorld } }
  | { type: "CLEAR_GAME_CONTEXT" };

// 2. Define Initial State
const initialState: GameClientState = {
  currentGameState: null,
  currentCharacter: null,
  currentWorld: null,
  isLoading: false,
  error: null,
};

// 3. Create the Reducer
function gameReducer(
  state: GameClientState,
  action: GameAction
): GameClientState {
  switch (action.type) {
    case "GAME_ACTION_START":
      return { ...state, isLoading: true, error: null };
    case "GAME_ACTION_FAILURE":
      return { ...state, isLoading: false, error: action.payload.error };
    case "INITIALIZE_GAME_SUCCESS":
      return {
        ...state,
        isLoading: false,
        currentGameState: action.payload.gameState,
        currentCharacter: action.payload.character,
        currentWorld: action.payload.world,
        error: null,
      };
    case "MAKE_DECISION_SUCCESS":
      return {
        ...state,
        isLoading: false,
        currentGameState: action.payload.gameState,
        error: null,
      };
    case "LOAD_GAME_SUCCESS":
      return {
        ...state,
        isLoading: false,
        currentGameState: action.payload.gameState,
        currentCharacter: action.payload.character || state.currentCharacter, // Keep existing if not provided
        currentWorld: action.payload.world || state.currentWorld, // Keep existing if not provided
        error: null,
      };
    case "SET_ACTIVE_CHARACTER":
      return { ...state, currentCharacter: action.payload.character };
    case "SET_ACTIVE_WORLD":
      return { ...state, currentWorld: action.payload.world };
    case "CLEAR_GAME_CONTEXT":
      return { ...initialState }; // Reset to initial state
    default:
      return state;
  }
}

// 4. Create Context
interface GameContextType {
  state: GameClientState;
  startGame: (
    characterId: string,
    worldId: string,
    character: MVPCharacter,
    world: MVPWorld
  ) => Promise<void>;
  makeDecision: (gameStateId: string, choiceText: string) => Promise<void>;
  loadGame: (
    gameStateId: string,
    character?: MVPCharacter,
    world?: MVPWorld
  ) => Promise<void>;
  selectCharacter: (character: MVPCharacter) => void;
  selectWorld: (world: MVPWorld) => void;
  clearGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

// 5. Create Provider Component
interface GameProviderProps {
  children: ReactNode;
}

export function GameProvider({ children }: GameProviderProps) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const startGame = useCallback(
    async (
      characterId: string,
      worldId: string,
      character: MVPCharacter,
      world: MVPWorld
    ) => {
      dispatch({ type: "GAME_ACTION_START" });
      try {
        const result = await startGameServerAction(characterId, worldId);
        if (result.gameState) {
          dispatch({
            type: "INITIALIZE_GAME_SUCCESS",
            payload: { gameState: result.gameState, character, world },
          });
          logger.info("Game initialized via context", {
            context: "GameProvider",
            metadata: { gameStateId: result.gameState.id },
          });
        } else if (result.error) {
          dispatch({
            type: "GAME_ACTION_FAILURE",
            payload: { error: result.error },
          });
          logger.error("Error initializing game via context", {
            context: "GameProvider",
            metadata: { error: result.error },
          });
        }
      } catch (err) {
        const errorMsg =
          err instanceof Error
            ? err.message
            : "An unknown error occurred during game start.";
        dispatch({ type: "GAME_ACTION_FAILURE", payload: { error: errorMsg } });
        logger.error("Exception initializing game via context", {
          context: "GameProvider",
          metadata: { error: errorMsg },
        });
      }
    },
    []
  );

  const makeDecision = useCallback(
    async (gameStateId: string, choiceText: string) => {
      if (!state.currentGameState) {
        logger.warn("makeDecision called without currentGameState", {
          context: "GameProvider",
        });
        dispatch({
          type: "GAME_ACTION_FAILURE",
          payload: { error: "No active game state to make a decision on." },
        });
        return;
      }
      dispatch({ type: "GAME_ACTION_START" });
      try {
        const result = await makeDecisionServerAction(gameStateId, choiceText);
        if (result.gameState) {
          dispatch({
            type: "MAKE_DECISION_SUCCESS",
            payload: { gameState: result.gameState },
          });
          logger.info("Decision made via context", {
            context: "GameProvider",
            metadata: { gameStateId: result.gameState.id },
          });
        } else if (result.error) {
          dispatch({
            type: "GAME_ACTION_FAILURE",
            payload: { error: result.error },
          });
          logger.error("Error making decision via context", {
            context: "GameProvider",
            metadata: { error: result.error },
          });
        }
      } catch (err) {
        const errorMsg =
          err instanceof Error
            ? err.message
            : "An unknown error occurred while making decision.";
        dispatch({ type: "GAME_ACTION_FAILURE", payload: { error: errorMsg } });
        logger.error("Exception making decision via context", {
          context: "GameProvider",
          metadata: { error: errorMsg },
        });
      }
    },
    [state.currentGameState]
  );

  const loadGame = useCallback(
    async (gameStateId: string, character?: MVPCharacter, world?: MVPWorld) => {
      dispatch({ type: "GAME_ACTION_START" });
      try {
        const result = await loadGameServerAction(gameStateId);
        if (result.error) {
          dispatch({
            type: "GAME_ACTION_FAILURE",
            payload: { error: result.error },
          });
          logger.error("Error loading game via context", {
            context: "GameProvider",
            metadata: { error: result.error },
          });
        } else {
          // result.gameState can be null if not found, which is a valid success case for loadGame

          let effectiveCharacter = character;
          let effectiveWorld = world;

          if (!effectiveCharacter && result.gameState) {
            const fetchedCharacter = await getCharacterByIdAction(
              result.gameState.characterId
            );
            if (fetchedCharacter) effectiveCharacter = fetchedCharacter;
          }

          if (!effectiveWorld && result.gameState) {
            const fetchedWorld = await getWorldByIdAction(
              result.gameState.worldId
            );
            if (fetchedWorld) effectiveWorld = fetchedWorld;
          }

          dispatch({
            type: "LOAD_GAME_SUCCESS",
            payload: {
              gameState:
                result.gameState !== undefined ? result.gameState : null,
              ...(effectiveCharacter ? { character: effectiveCharacter } : {}),
              ...(effectiveWorld ? { world: effectiveWorld } : {}),
            },
          });
          logger.info("Load game action completed via context", {
            context: "GameProvider",
            metadata: {
              gameStateId: result.gameState ? result.gameState.id : null,
            },
          });
        }
      } catch (err) {
        const errorMsg =
          err instanceof Error
            ? err.message
            : "An unknown error occurred while loading game.";
        dispatch({ type: "GAME_ACTION_FAILURE", payload: { error: errorMsg } });
        logger.error("Exception loading game via context", {
          context: "GameProvider",
          metadata: { error: errorMsg },
        });
      }
    },
    []
  );

  const selectCharacter = useCallback((character: MVPCharacter) => {
    dispatch({ type: "SET_ACTIVE_CHARACTER", payload: { character } });
  }, []);

  const selectWorld = useCallback((world: MVPWorld) => {
    dispatch({ type: "SET_ACTIVE_WORLD", payload: { world } });
  }, []);

  const clearGame = useCallback(() => {
    dispatch({ type: "CLEAR_GAME_CONTEXT" });
    logger.info("Game context cleared", { context: "GameProvider" });
  }, []);

  const contextValue: GameContextType = {
    state,
    startGame,
    makeDecision,
    loadGame,
    selectCharacter,
    selectWorld,
    clearGame,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}

// 6. Create custom hook for easy context consumption
export function useGameContext() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
}
