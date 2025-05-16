/**
 * Core game types for the Text-Based AI RPG
 *
 * Defines the domain models and interfaces for the game system,
 * organized according to our layered architecture approach.
 */

/**
 * Character-related types
 */

export interface Character {
  id: string;
  userId: string;
  name: string;
  backstory?: string;
  appearanceDescription?: string;
  personalityTraits: string[];
  createdAt: Date;
  lastPlayedAt?: Date;
  isActive: boolean;
}

export interface CharacterState {
  id: string;
  name: string;
  backstory?: string;
  appearance?: string;
  traits: string[];
  // Character state specific to a game session
  currentLocation?: string;
  relationships?: Record<string, number>;
  questProgress?: Record<string, string>;
  discoveredLocations?: string[];
}

export interface CharacterWorldState {
  characterId: string;
  worldId: string;
  currentLocation?: string;
  lastPlayedAt?: Date;
}

/**
 * Item system
 */

export interface Item {
  id: string;
  name: string;
  description: string;
  type: "weapon" | "armor" | "potion" | "key" | "misc";
  value: number;
  effects?: Record<string, number>;
  isConsumable?: boolean;
  isEquippable?: boolean;
  isQuestItem?: boolean;
}

export interface Ability {
  id: string;
  name: string;
  description: string;
  cooldown: number;
  effects: Record<string, number>;
  requiredLevel?: number;
  requiredAttributes?: Record<string, number>;
}

/**
 * World-related types
 */

export interface World {
  id: string;
  name: string;
  description: string | null;
  thumbnailUrl?: string | null;
  isActive: boolean;
  createdAt: Date;
}

// World state specific to a game session
export interface WorldState {
  id: string;
  name: string;
  description: string;
  activeQuests?: Record<string, any>;
  availableEvents?: string[];
  globalState?: Record<string, any>;
  time?: {
    day: number;
    period: "morning" | "afternoon" | "evening" | "night";
  };
}

export interface Location {
  id: string;
  worldId: string;
  name: string;
  description: string | null;
  isStartingLocation: boolean;
  connectedLocationIds: string[];
  thumbnailUrl?: string | null;
}

export interface LocationState {
  id: string;
  name: string;
  description: string | null;
  // Location state specific to a game session
  visitedAt?: Date;
  availableNpcs?: string[];
  discoveredSecrets?: string[];
  environmentState?: Record<string, any>;
}

export interface LoreFragment {
  id: string;
  worldId: string;
  title: string;
  content: string;
  type: string;
  contextId?: string | null;
  isRevealed: boolean;
  keywords: string[];
}

export interface Event {
  id: string;
  worldId: string;
  locationId?: string | null;
  title: string;
  description: string;
  eventType: string;
  triggerConditions: {
    probability?: number;
    requiredItems?: string[];
    requiredDecisions?: string[];
  };
  outcomes: Array<{
    id: string;
    description: string;
    requirements: {
      dialogue?: string[];
      items?: string[];
    };
  }>;
  isRepeatable: boolean;
}

export interface WorldWithRelatedData extends World {
  locations: Location[];
  loreFragments: LoreFragment[];
  events: Event[];
}

/**
 * Game Session management
 */

export interface GameSession {
  id: string;
  characterId: string;
  startedAt: Date;
  endedAt?: Date;
  isActive: boolean;
  lastActivityAt: Date;
  durationSeconds?: number;
  sessionData: Record<string, any>;
}

export interface GameState {
  id: string;
  sessionId: string;
  characterId: string;
  worldId?: string;
  locationId?: string;
  savePointName?: string;
  currentLocation: string;
  saveTimestamp: Date;
  narrativeContext?: string;
  aiContext: Record<string, any>;
  characterState: Record<string, any>;
  worldState: Record<string, any>;
  isAutosave: boolean;
  isCompleted: boolean;

  // UI state (not persisted in database)
  isLoading?: boolean;
  error?: string | null;
  turnNumber?: number;
  narrative?: {
    text: string;
    history: Array<{
      type: "narrative" | "playerResponse";
      content: string;
    }>;
  };
  decisions?: Array<{
    text: string;
    consequences?: string;
  }>;
}

/**
 * NPC system
 */

export interface NPCTemplate {
  id: string;
  code: string;
  name: string;
  personalityTraits: string[];
  defaultDialogue: Array<{
    text: string;
    conditions?: Record<string, any>;
  }>;
  appearanceDescription?: string;
  isUnique: boolean;
}

export interface NPCState {
  id: string;
  gameStateId: string;
  npcTemplateId: string;
  currentLocation?: string;
  relationshipWithPlayer: number;
  dialogueHistory: Array<{
    speaker: "npc" | "player";
    text: string;
    timestamp: Date;
  }>;
  instanceProperties: Record<string, any>;
}

/**
 * Narrative and Decision system
 */

export interface DecisionPoint {
  id: string;
  text: string;
  options: Array<{
    id: string;
    text: string;
    consequences?: string;
  }>;
}

export interface Decision {
  id: string;
  gameStateId: string;
  decisionPointId: string;
  decisionContext?: string;
  optionsPresented: Array<{ text: string }>;
  playerChoice: number;
  timestamp: Date;
  location?: string;
  relatedNpcIds: string[];
  consequences: Record<string, any>;
}

export interface NarrativeRequest {
  characterState: CharacterState;
  worldState: WorldState;
  locationState?: LocationState;
  previousContext: string;
  playerDecision?: {
    context: string;
    options: string[];
    chosenOption: string;
  };
}

export interface NarrativeResponse {
  narrativeText: string;
  decisions: Array<{
    text: string;
    consequences?: string;
  }>;
  newLocation?: string;
  updatedCharacterState?: Partial<CharacterState>;
  updatedWorldState?: Partial<WorldState>;
}

export interface AIContextEntry {
  id: string;
  gameStateId: string;
  contextType: string;
  promptTokens: number;
  completionTokens: number;
  promptText?: string;
  completionText?: string;
  timestamp: Date;
  relevanceScore?: number;
}
