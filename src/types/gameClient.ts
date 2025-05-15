import { GameState, NarrativeResponse } from "./game";

/**
 * Defines the shape of the game state managed on the client.
 */
export interface GameClientState {
  sessionId: string | null;
  characterId: string | null;
  worldId: string | null;
  currentGameState: GameState | null;
  isLoadingInitialGame: boolean;
  isMakingDecision: boolean;
  error: string | null;
}

/**
 * Represents the payload for a successful game initialization.
 */
export interface InitializeGameSuccessPayload {
  sessionId: string;
  characterId: string;
  worldId: string;
  gameState: GameState;
}

/**
 * Represents the payload for a successful decision action.
 * The `updatedState` is the comprehensive new state from the server.
 */
export interface MakeDecisionSuccessPayload {
  narrativeResponse: NarrativeResponse; // Kept for potential direct use, though updatedState is primary
  updatedState: GameState;
}

/**
 * Defines the actions that can be dispatched to the game reducer.
 */
export type GameClientAction =
  | { type: "INITIALIZE_GAME_START" }
  | { type: "INITIALIZE_GAME_SUCCESS"; payload: InitializeGameSuccessPayload }
  | { type: "INITIALIZE_GAME_FAILURE"; payload: string }
  | { type: "MAKE_DECISION_START" }
  | { type: "MAKE_DECISION_SUCCESS"; payload: MakeDecisionSuccessPayload }
  | { type: "MAKE_DECISION_FAILURE"; payload: string }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "CLEAR_ERROR" };

export const initialClientState: GameClientState = {
  sessionId: null,
  characterId: null,
  worldId: null,
  currentGameState: null,
  isLoadingInitialGame: false,
  isMakingDecision: false,
  error: null,
};
