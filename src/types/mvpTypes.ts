/**
 * MVP Core Game Types
 *
 * Defines the simplified domain models and interfaces for the
 * Minimum Viable Product of the text-based AI RPG.
 * This file is IMMUTABLE. If you think you need to change it,
 * you are probably misunderstanding the purpose of the MVP or you
 * are overengineering a simple problem.
 */

/**
 * Character-related types
 */

export interface MVPCharacter {
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

export interface MVPCharacterState {
  id: string;
  name: string;
  backstory?: string;
  appearance?: string;
  traits: string[];
  // Character state specific to a game session
  currentLocation?: MVPLocation;
  relationships?: Record<string, number>; // TODO: add relationship type
  questProgress?: Record<string, string>; // TODO: add quest type
  discoveredLocations?: string[]; // TODO: add location type
}

export interface MVPCharacterWorldState {
  characterId: string;
  worldId: string;
  currentLocation?: string;
  lastPlayedAt?: Date;
}

/**
 * World-related types
 */

export interface MVPWorld {
  id: string;
  name: string;
  description: string | null;
  thumbnailUrl?: string | null;
  isActive: boolean;
  createdAt: Date;
}

// World state specific to a game session
export interface MVPWorldState {
  id: string;
  name: string;
  description: string;
  activeQuests?: Record<string, any>; // TODO: add quest type
  availableEvents?: string[]; // TODO: add event type
  globalState?: Record<string, any>; // TODO: add global state type
  time?: {
    day: number;
    period: "morning" | "afternoon" | "evening" | "night";
  };
}

export interface MVPLocation {
  id: string;
  worldId: string;
  name: string;
  description: string | null;
  isStartingLocation: boolean;
  connectedLocationIds: string[];
  dangerLevel?: string;
  thumbnailUrl?: string | null;
}

export interface MVPLocationWithEvents extends MVPLocation {
  MVPEvent: MVPEvent[];
}

export interface MVPLocationState {
  id: string;
  name: string;
  description: string | null;
  parentLocationId: string;
  // Location state specific to a game session
  visitedAt?: Date;
  availableNpcs?: string[];
  discoveredSecrets?: string[];
  environmentState?: Record<string, any>;
}

export enum MVPLoreFragmentTypes {
  LOCATION = "location",
  NPC = "npc",
  ITEM = "item",
  EVENT = "event",
  GLOBAL = "global",
  QUEST = "quest",
  INTERESTPOINT = "interestpoint",
  NARRATIVE = "narrative",
}

export interface MVPLoreFragment {
  id: string;
  worldId: string;
  title: string;
  content: string;
  type: MVPLoreFragmentTypes;
  locationId?: string | null;
  contextId?: string | null;
  isRevealed: boolean;
  keywords: string[];
}

export interface MVPEvent {
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

export interface MVPWorldWithRelatedData extends MVPWorld {
  locations: MVPLocation[];
  loreFragments: MVPLoreFragment[];
  events: MVPEvent[] | null; // MVP: DO NOT USE THIS
}

/**
 * NPC system
 */

export interface MVPNPCTemplate {
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

export interface MVPNPCState {
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
 * Represents the response from the AI after processing a narrative turn or decision.
 */
export interface MVPNarrativeResponse {
  narrativeText: string;
  decisions: Array<{
    text: string;
    consequences?: string;
  }>;
  newLocation?: string; // TODO: add location type
  updatedCharacterState?: Partial<MVPCharacterState>; // MVP: DO NOT USE THIS
  updatedWorldState?: Partial<MVPWorldState>; // MVP: DO NOT USE THIS
}

/**
 * Represents an NPC within a location. For MVP, this is primarily descriptive.
 * Complex state and behavior will be AI-driven based on context.
 */
export interface MVPLocationNpc {
  id: string;
  name: string;
  description: string;
  /** Simple indicator of initial disposition, can be used by AI. */
  relationshipToPlayer?: "friendly" | "neutral" | "hostile" | string;
}

/**
 * Represents a single entry in the narrative log.
 */
export interface NarrativeLogEntry {
  turn: number;
  narrative: string;
  playerChoice?: string;
  /** The immediate outcome associated with this narrative segment or choice. */
  outcome?: string;
}

/**
 * Core game state for the MVP.
 * This is the primary object that will be persisted and updated each turn.
 */
export interface SimplifiedGameState {
  /** Unique identifier for this specific game state snapshot. */
  id: string;
  /** Identifier for the overall game session. */
  sessionId: string;
  /** Identifier for the player's character. */
  characterId: string;
  /** Identifier for the world being played in. */
  worldId: string;

  turnNumber: number;

  characterState: MVPCharacterState;
  worldState: MVPWorldState;
  /** ID of the character's current location. References MVPLocation.id */
  currentLocationId: string;

  /**
   * A log of the narrative progression, including player choices and outcomes.
   * This provides context for the AI and a history for the player.
   */
  narrativeLog: NarrativeLogEntry[];

  /** The current set of choices (as strings) presented to the player by the AI. */
  currentChoices: string[];

  /** Timestamp of when this game state was last modified. */
  lastModified: Date;

  /** Optional: A simple string describing the player's current main objective or quest. */
  currentObjective?: string;
}
