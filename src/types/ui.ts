/**
 * UI Types
 *
 * This file contains type definitions for UI components and hooks.
 */

import {
  GameState,
  GameSession,
  CharacterState,
  WorldState,
  LocationState,
} from "./game";
import { NarrativeContext, NarrativeDecisionPoint } from "./narrative";
import { GameEngine, GameEvent, GameEventType } from "./engine";

/**
 * Game UI component props
 */

export interface GameContainerProps {
  sessionId?: string;
  initialState?: GameState;
  onSessionEnd?: (sessionId: string) => void;
  onError?: (error: Error) => void;
}

export interface NarrativeDisplayProps {
  text: string;
  isLoading?: boolean;
  typingSpeed?: "slow" | "medium" | "fast";
  onComplete?: () => void;
  className?: string;
}

export interface DecisionSelectorProps {
  decisions: Array<{ text: string; consequences?: string }>;
  onSelect: (index: number) => void;
  isDisabled?: boolean;
  showConsequences?: boolean;
  className?: string;
}

export interface GameHeaderProps {
  sessionId: string;
  character?: CharacterState;
  world?: WorldState;
  location?: LocationState;
  onSave?: () => void;
  onLoad?: () => void;
  onEnd?: () => void;
}

export interface GameStateIndicatorProps {
  character?: CharacterState;
  location?: LocationState;
  lastSaved?: Date;
  isAutosave?: boolean;
  className?: string;
}

export interface LoadingIndicatorProps {
  message?: string;
  size?: "small" | "medium" | "large";
  fullScreen?: boolean;
  className?: string;
}

/**
 * Game hooks return types
 */

export interface UseGameStateReturn {
  state: GameState | null;
  session: GameSession | null;
  isLoading: boolean;
  error: string | null;
}

export interface UseGameActionsReturn {
  startGame: (characterId: string, worldId: string) => Promise<GameSession>;
  loadGame: (sessionId: string) => Promise<GameState>;
  saveGame: (savePointName?: string) => Promise<GameState>;
  endGame: () => Promise<void>;
  makeDecision: (decisionIndex: number) => Promise<void>;
  isProcessing: boolean;
  error: string | null;
}

export interface UseNarrativeContextReturn {
  narrativeContext: NarrativeContext | null;
  narrativeText: string;
  decisions: NarrativeDecisionPoint | null;
  updateNarrative: (text: string, decisions?: NarrativeDecisionPoint) => void;
  recordPlayerResponse: (responseText: string) => void;
  isGenerating: boolean;
  error: string | null;
}

export interface UseGameSessionsReturn {
  sessions: GameSession[];
  activeSessions: GameSession[];
  loadSession: (sessionId: string) => Promise<void>;
  deleteSession: (sessionId: string) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}

export interface UseGameEventsReturn {
  subscribe: <T extends GameEventType>(
    eventType: T,
    handler: (event: GameEvent<T>) => void
  ) => () => void;
  publishEvent: <T extends GameEventType>(eventType: T, payload: any) => void;
  lastEvent: GameEvent | null;
}

/**
 * Form and input types
 */

export interface CharacterCreateFormData {
  name: string;
  backstory: string;
  appearance: string;
  traits: string[];
}

export interface SaveGameFormData {
  savePointName: string;
  includeScreenshot?: boolean;
  isAutoSave?: boolean;
}

export interface GameSettingsFormData {
  narrativeSpeed: "slow" | "medium" | "fast";
  showConsequences: boolean;
  audioEnabled: boolean;
  highContrast: boolean;
  fontSize: "small" | "medium" | "large";
}

/**
 * UI state types
 */

export interface GameUIState {
  isSidebarOpen: boolean;
  activePanel:
    | "character"
    | "inventory"
    | "map"
    | "journal"
    | "settings"
    | null;
  theme: "light" | "dark" | "system";
  fontSize: "small" | "medium" | "large";
  highContrast: boolean;
  narrativeSpeed: "slow" | "medium" | "fast";
  showConsequences: boolean;
  audioEnabled: boolean;
}

export interface GameDisplaySettings {
  narrativeSpeed: "slow" | "medium" | "fast";
  showConsequences: boolean;
  showLocationDetails: boolean;
  showCharacterStats: boolean;
  compactDecisions: boolean;
  highlightKeywords: boolean;
}

/**
 * Analytics and tracking types
 */

export interface GameAnalyticsEvent {
  eventType:
    | "session_start"
    | "session_end"
    | "decision_made"
    | "location_change"
    | "game_save"
    | "game_load"
    | "error";
  sessionId?: string;
  characterId?: string;
  worldId?: string;
  details?: Record<string, any>;
  timestamp: Date;
}
