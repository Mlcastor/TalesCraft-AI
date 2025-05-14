/**
 * Represents a single entry in the narrative history stored in the database
 */
export interface NarrativeHistoryEntry {
  id: string;
  gameStateId: string;
  type: "narrative" | "playerResponse";
  content: string;
  timestamp: Date;
}

/**
 * Represents the context for narrative generation
 */
export interface NarrativeContext {
  character: {
    id: string;
    name: string;
    backstory?: string;
    traits: string[];
    appearance?: string;
  };
  world: {
    id: string;
    name: string;
    description: string;
  };
  location: {
    id: string;
    name: string;
    description: string;
  };
  recentHistory: NarrativeHistoryEntry[];
  importantEvents: {
    id: string;
    description: string;
    timestamp: Date;
  }[];
  npcs: {
    id: string;
    name: string;
    relationshipWithPlayer: number;
  }[];
}

/**
 * Represents the tiered narrative memory system
 */
export interface NarrativeMemory {
  shortTerm: NarrativeHistoryEntry[]; // Recent narrative events (last few exchanges)
  mediumTerm: {
    // Important events from current session
    id: string;
    summary: string;
    timestamp: Date;
    importance: number;
  }[];
  longTerm: {
    // Character-defining moments
    id: string;
    summary: string;
    impact: "character" | "world" | "relationship";
    importance: number;
  }[];
  worldFacts: {
    // Persistent facts about the world
    id: string;
    fact: string;
    category: string;
  }[];
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
