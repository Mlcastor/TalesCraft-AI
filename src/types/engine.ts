/**
 * Game Engine Types
 *
 * This file contains type definitions for the game engine implementation.
 */

import {
  GameState,
  GameSession,
  CharacterState,
  WorldState,
  NarrativeResponse,
} from "./game";

/**
 * Game engine event types
 */
export type GameEventType =
  | "GAME_STARTED"
  | "GAME_ENDED"
  | "STATE_LOADED"
  | "STATE_SAVED"
  | "NARRATIVE_UPDATED"
  | "DECISION_MADE"
  | "LOCATION_CHANGED"
  | "CHARACTER_UPDATED"
  | "WORLD_UPDATED"
  | "ERROR_OCCURRED";

/**
 * Event payload definitions
 */
export type GameEventPayload = {
  SESSION_STARTED: { sessionId: string; characterId: string; worldId: string };
  SESSION_ENDED: { sessionId: string; duration: number };
  STATE_SAVED: { stateId: string; savePointName?: string };
  STATE_LOADED: {
    stateId: string;
    sessionId: string;
    alreadyProcessed?: boolean;
  };
  NARRATIVE_UPDATED: {
    text: string;
    decisions: Array<{ text: string; consequences?: string }>;
  };
  DECISION_MADE: {
    decisionIndex: number;
    chosenOption: string;
    consequences?: Record<string, any>;
  };
  LOCATION_CHANGED: {
    previousLocation: string;
    newLocation: string;
  };
  CHARACTER_UPDATED: {
    characterId: string;
    changes: Partial<CharacterState>;
  };
  WORLD_UPDATED: {
    worldId: string;
    changes: Partial<WorldState>;
  };
  ERROR_OCCURRED: {
    message: string;
    code?: string;
    context?: Record<string, any>;
  };
};

/**
 * Game event structure
 */
export interface GameEvent<T extends GameEventType = GameEventType> {
  type: T;
  payload: T extends keyof GameEventPayload ? GameEventPayload[T] : unknown;
  timestamp: Date;
  sessionId: string;
}

/**
 * Game state manager interface
 */
export interface GameStateManager {
  getCurrentState: () => GameState;
  getStateHistory: () => GameState[];
  getStateById: (stateId: string) => GameState | null;
  saveState: (savePointName?: string) => Promise<GameState>;
  loadState: (stateId: string) => Promise<GameState>;
  updateState: (updates: Partial<GameState>) => GameState;
  resetState: () => GameState;
}

/**
 * Session manager interface
 */
export interface SessionManager {
  createSession: (characterId: string, worldId: string) => Promise<GameSession>;
  getSession: (sessionId: string) => Promise<GameSession | null>;
  endSession: (sessionId: string) => Promise<GameSession>;
  getActiveSessionsByCharacter: (characterId: string) => Promise<GameSession[]>;
  updateSessionActivity: (sessionId: string) => Promise<GameSession>;
}

/**
 * Narrative context manager interface
 */
export interface NarrativeContextManager {
  getFullContext: () => Record<string, any>;
  getShortTermContext: () => Record<string, any>;
  getMediumTermContext: () => Record<string, any>;
  getLongTermContext: () => Record<string, any>;
  addNarrativeEntry: (entry: { type: string; content: string }) => void;
  addDecision: (decision: { options: string[]; chosenIndex: number }) => void;
  summarizeLongHistory: () => Promise<string>;
  getContextForAI: (maxTokens?: number) => Record<string, any>;
  resetContext: () => void;
}

/**
 * Decision manager interface
 */
export interface DecisionManager {
  getCurrentDecisions: () => Array<{ text: string; consequences?: string }>;
  setDecisions: (
    decisions: Array<{ text: string; consequences?: string }>
  ) => void;
  processDecision: (index: number) => Promise<{
    narrativeResponse: NarrativeResponse;
    consequences: Record<string, any>;
  }>;
  getPreviousDecisions: (limit?: number) => Array<{
    options: Array<{ text: string }>;
    chosenIndex: number;
    timestamp: Date;
  }>;
}

/**
 * Game engine interface
 */
export interface GameEngine {
  // Session methods
  startGame: (
    characterId: string,
    worldId: string
  ) => Promise<{
    session: GameSession;
    initialState: GameState;
  }>;

  loadGame: (sessionId: string) => Promise<{
    session: GameSession;
    state: GameState;
  }>;

  endGame: (sessionId: string) => Promise<GameSession>;

  // State methods
  saveGameState: (
    sessionId: string,
    savePointName?: string
  ) => Promise<GameState>;
  loadGameState: (stateId: string) => Promise<GameState>;

  // Narrative methods
  generateNarrative: (sessionId: string) => Promise<{
    narrativeText: string;
    decisions: Array<{ text: string; consequences?: string }>;
  }>;

  // Decision methods
  makeDecision: (
    sessionId: string,
    decisionIndex: number
  ) => Promise<{
    narrativeResponse: NarrativeResponse;
    updatedState: GameState;
  }>;

  // Event subscription
  on: <T extends GameEventType>(
    eventType: T,
    handler: (event: GameEvent<T>) => void
  ) => void;

  off: <T extends GameEventType>(
    eventType: T,
    handler: (event: GameEvent<T>) => void
  ) => void;

  // Utility methods
  getGameSessions: (characterId: string) => Promise<GameSession[]>;
  getGameState: (stateId: string) => Promise<GameState | null>;
  getCharacterState: (sessionId: string) => Promise<CharacterState | null>;
  getWorldState: (sessionId: string) => Promise<WorldState | null>;
}

/**
 * Game engine provider props
 */
export interface GameEngineProviderProps {
  children: React.ReactNode;
  initialSession?: GameSession;
  initialState?: GameState;
}

/**
 * Game engine context
 */
export interface GameEngineContext {
  engine: GameEngine | null;
  currentSession: GameSession | null;
  currentState: GameState | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Game state transitions
 */
export type GameStateTransition = (
  currentState: GameState,
  event: GameEvent
) => GameState;
