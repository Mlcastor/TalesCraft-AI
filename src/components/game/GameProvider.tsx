"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { GameState, GameAction } from "@/types/game";

// Define the Game Context
interface GameContextType {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

// Game state reducer
function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "UPDATE_NARRATIVE":
      return {
        ...state,
        narrative: {
          ...state.narrative,
          text: action.payload.text,
          history: [
            ...state.narrative.history,
            { type: "narrative", content: action.payload.text },
          ],
        },
        decisions: action.payload.decisions || [],
      };

    case "MAKE_DECISION":
      return {
        ...state,
        isLoading: true,
        narrative: {
          ...state.narrative,
          history: [
            ...state.narrative.history,
            {
              type: "playerResponse",
              content: state.decisions[action.payload.index].text,
            },
          ],
        },
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}

// Game Provider Component
interface GameProviderProps {
  children: ReactNode;
  initialState: Partial<GameState>;
}

export function GameProvider({ children, initialState }: GameProviderProps) {
  const defaultState: GameState = {
    narrative: {
      text: "",
      history: [],
    },
    decisions: [],
    character: null,
    world: null,
    location: null,
    isLoading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(gameReducer, {
    ...defaultState,
    ...initialState,
  });

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

// Hook for using the game context
export function useGame() {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }

  return context;
}
