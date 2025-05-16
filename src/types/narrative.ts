import { GameState } from "@/types/game";
import type { Location, LoreFragment } from "@/types/database"; // Assuming Event type might also be needed

/**
 * Represents a single entry in the narrative history
 */
export interface NarrativeHistoryEntry {
  id: string;
  gameStateId: string;
  type: "narrative" | "playerResponse";
  content: string;
  timestamp: Date;
  // Optional metadata for richer context
  metadata?: {
    locationId?: string;
    involvedNpcs?: string[];
    relatedQuestId?: string;
    emotionalTone?: string;
  };
}

/**
 * Represents an important event derived from narrative history
 */
export interface MemorableEvent {
  id: string;
  summary: string;
  timestamp: Date;
  importance: number; // Scale of 0-10
  relatedEntries?: string[]; // IDs of NarrativeHistoryEntry
}

/**
 * Represents a key moment or fact stored in long-term memory
 */
export interface LongTermMemoryFact {
  id: string;
  summary: string;
  impact: "character" | "world" | "relationship";
  importance: number;
  relatedEntries?: string[];
}

/**
 * Represents a piece of world information (lore, fact, etc.)
 */
export interface WorldFact {
  id: string;
  fact: string;
  category: string; // e.g., 'history', 'geography', 'culture'
  source?: string; // Where this fact was learned
}

/**
 * Structure for narrative memory tiers
 */
export interface NarrativeMemory {
  shortTerm: NarrativeHistoryEntry[];
  mediumTerm: MemorableEvent[];
  longTerm: LongTermMemoryFact[];
  worldFacts: WorldFact[];
}

/**
 * Represents the full context for narrative generation
 */
export interface NarrativeContext {
  character: {
    id: string;
    name: string;
    backstory?: string;
    appearance?: string;
    traits: string[];
  };
  world: {
    id: string;
    name: string;
    description?: string;
    locations?: Location[]; // Added
    loreFragments?: LoreFragment[]; // Added
    // events?: any[]; // Placeholder for Event type if needed
  };
  location: {
    id: string;
    name: string;
    description: string;
    // Add more location-specific details if needed
    // e.g., connectedLocations: string[];
    // itemsPresent: string[];
  };
  npcs: Array<{
    id: string;
    name: string;
    description?: string;
    relationshipToPlayer?: string; // e.g., 'friendly', 'hostile', 'neutral'
    // Add more NPC-specific details if needed
  }>;
  gameState?: Partial<GameState>; // For any other relevant game state info
  // Consider adding: currentQuest, recentEvents (summarized), relationships
}

/**
 * Represents an event in the narrative, used in GameState history.
 */
export interface NarrativeEvent {
  type: "narrative" | "playerResponse";
  content: string;
  timestamp: Date;
}

/**
 * Represents a decision point in the narrative
 */
export interface NarrativeDecisionPoint {
  id: string;
  context: string;
  options: {
    id: string;
    text: string;
    consequences?: {
      description: string;
      impact: {
        character?: Record<string, any>;
        world?: Record<string, any>;
        relationships?: Record<string, number>;
      };
    };
    requirements?: {
      items?: string[];
      traits?: string[];
      relationships?: Record<string, number>;
    };
  }[];
}

/**
 * Configuration for narrative generation
 */
export interface NarrativeGenerationConfig {
  tone: "lighthearted" | "serious" | "dramatic" | "mysterious";
  pace: "slow" | "medium" | "fast";
  detailLevel: "minimal" | "moderate" | "detailed";
  focusOn?: "character" | "world" | "action" | "dialogue";
  themeEmphasis?: string[];
  constraintRules?: string[];
}

/**
 * Service interface for narrative management
 */
export interface NarrativeService {
  generateNarrative: (
    context: NarrativeContext,
    config?: NarrativeGenerationConfig
  ) => Promise<{
    narrativeText: string;
    decisionPoints: NarrativeDecisionPoint;
  }>;

  processDecision: (
    decisionPointId: string,
    choiceIndex: number,
    context: NarrativeContext
  ) => Promise<{
    narrativeText: string;
    consequences: Record<string, any>;
    newDecisionPoint?: NarrativeDecisionPoint;
  }>;

  summarizeHistory: (
    historyEntries: NarrativeHistoryEntry[],
    maxLength?: number
  ) => Promise<string>;

  getRelevantLore: (
    context: NarrativeContext,
    query?: string
  ) => Promise<{
    loreFragments: Array<{
      id: string;
      title: string;
      content: string;
      relevance: number;
    }>;
  }>;
}
