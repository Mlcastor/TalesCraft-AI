import {
  NarrativeMemory,
  NarrativeHistoryEntry,
  NarrativeContext,
} from "@/types/narrative";
import { logger } from "@/lib/utils/logger";
import { NarrativeContextManager as NarrativeContextManagerInterface } from "@/types/engine";

/**
 * Configuration for the narrative context manager
 */
export interface NarrativeContextConfig {
  /**
   * Maximum number of entries to keep in short-term memory
   */
  shortTermMemoryLimit: number;

  /**
   * Maximum number of entries to keep in medium-term memory
   */
  mediumTermMemoryLimit: number;

  /**
   * Maximum number of entries to keep in long-term memory
   */
  longTermMemoryLimit: number;

  /**
   * Maximum number of world facts to retain
   */
  worldFactsLimit: number;

  /**
   * Minimum importance level (0-10) for events to be considered for medium-term memory
   */
  mediumTermImportanceThreshold: number;

  /**
   * Minimum importance level (0-10) for events to be considered for long-term memory
   */
  longTermImportanceThreshold: number;

  /**
   * Default tokens to reserve for context
   */
  defaultMaxTokens: number;
}

/**
 * Entry with importance rating
 */
interface RatedEntry {
  entry: NarrativeHistoryEntry;
  importance: number;
}

/**
 * NarrativeContextManager implementation
 *
 * Manages the narrative context for the game, including:
 * - Short-term memory (immediate context)
 * - Medium-term memory (recent important events)
 * - Long-term memory (key character/world facts)
 * - Importance scoring for prioritizing narrative elements
 */
export class NarrativeContextManager
  implements NarrativeContextManagerInterface
{
  /**
   * Default configuration values
   */
  private static readonly DEFAULT_CONFIG: NarrativeContextConfig = {
    shortTermMemoryLimit: 10,
    mediumTermMemoryLimit: 15,
    longTermMemoryLimit: 20,
    worldFactsLimit: 30,
    mediumTermImportanceThreshold: 3,
    longTermImportanceThreshold: 7,
    defaultMaxTokens: 4000,
  };

  /**
   * Character information
   */
  private character: NarrativeContext["character"] | null = null;

  /**
   * World information
   */
  private world: NarrativeContext["world"] | null = null;

  /**
   * Current location
   */
  private location: NarrativeContext["location"] | null = null;

  /**
   * NPCs present in the current context
   */
  private npcs: NarrativeContext["npcs"] = [];

  /**
   * The narrative memory system
   */
  private memory: NarrativeMemory = {
    shortTerm: [],
    mediumTerm: [],
    longTerm: [],
    worldFacts: [],
  };

  /**
   * Configuration for the context manager
   */
  private config: NarrativeContextConfig;

  /**
   * Create a new NarrativeContextManager
   *
   * @param config - Configuration options
   */
  constructor(config: Partial<NarrativeContextConfig> = {}) {
    this.config = {
      ...NarrativeContextManager.DEFAULT_CONFIG,
      ...config,
    };
  }

  /**
   * Initialize the context manager with base context
   *
   * @param character - Character information
   * @param world - World information
   * @param location - Current location
   * @param npcs - NPCs present in the context
   */
  public initialize(
    character: NarrativeContext["character"],
    world: NarrativeContext["world"],
    location: NarrativeContext["location"],
    npcs: NarrativeContext["npcs"] = []
  ): void {
    this.character = character;
    this.world = world;
    this.location = location;
    this.npcs = npcs;

    logger.debug("NarrativeContextManager initialized", {
      context: "game-engine",
      metadata: {
        characterId: character.id,
        worldId: world.id,
        locationId: location.id,
      },
    });
  }

  /**
   * Get the full narrative context
   * This includes all memory levels and context information
   *
   * @returns The full narrative context as a Record
   */
  public getFullContext(): Record<string, any> {
    this.ensureInitialized();

    return {
      character: this.character,
      world: this.world,
      location: this.location,
      npcs: this.npcs,
      shortTermMemory: this.memory.shortTerm,
      mediumTermMemory: this.memory.mediumTerm,
      longTermMemory: this.memory.longTerm,
      worldFacts: this.memory.worldFacts,
    };
  }

  /**
   * Get short-term memory context
   * This includes only the most recent narrative entries
   *
   * @returns Short-term context as a Record
   */
  public getShortTermContext(): Record<string, any> {
    this.ensureInitialized();

    return {
      character: this.character,
      location: this.location,
      npcs: this.npcs,
      recentHistory: this.memory.shortTerm,
    };
  }

  /**
   * Get medium-term memory context
   * This includes important recent events
   *
   * @returns Medium-term context as a Record
   */
  public getMediumTermContext(): Record<string, any> {
    this.ensureInitialized();

    return {
      character: this.character,
      world: this.world,
      recentEvents: this.memory.mediumTerm,
    };
  }

  /**
   * Get long-term memory context
   * This includes key character-defining moments and world facts
   *
   * @returns Long-term context as a Record
   */
  public getLongTermContext(): Record<string, any> {
    this.ensureInitialized();

    return {
      character: this.character,
      world: this.world,
      importantEvents: this.memory.longTerm,
      worldFacts: this.memory.worldFacts,
    };
  }

  /**
   * Add a narrative entry to the context
   * Will be automatically rated for importance and stored in appropriate memory
   *
   * @param entry - The narrative entry to add
   */
  public addNarrativeEntry(entry: { type: string; content: string }): void {
    this.ensureInitialized();

    const narrativeEntry: NarrativeHistoryEntry = {
      id: this.generateId(),
      gameStateId: "current", // This would be set properly in a real implementation
      type: entry.type as "narrative" | "playerResponse",
      content: entry.content,
      timestamp: new Date(),
    };

    // Add to short-term memory (always)
    this.memory.shortTerm.push(narrativeEntry);

    // Trim short-term memory if needed
    if (this.memory.shortTerm.length > this.config.shortTermMemoryLimit) {
      this.memory.shortTerm = this.memory.shortTerm.slice(
        -this.config.shortTermMemoryLimit
      );
    }

    // Rate the importance of this entry
    const importance = this.rateImportance(narrativeEntry);

    // If important enough, add to medium-term memory
    if (importance >= this.config.mediumTermImportanceThreshold) {
      this.memory.mediumTerm.push({
        id: narrativeEntry.id,
        summary: this.summarizeEntry(narrativeEntry),
        timestamp: narrativeEntry.timestamp,
        importance,
      });

      // Trim medium-term memory if needed
      if (this.memory.mediumTerm.length > this.config.mediumTermMemoryLimit) {
        // Sort by importance (highest first)
        this.memory.mediumTerm.sort((a, b) => b.importance - a.importance);
        // Keep only the most important ones
        this.memory.mediumTerm = this.memory.mediumTerm.slice(
          0,
          this.config.mediumTermMemoryLimit
        );
      }
    }

    // If very important, add to long-term memory
    if (importance >= this.config.longTermImportanceThreshold) {
      const impact = this.determineImpact(narrativeEntry);
      this.memory.longTerm.push({
        id: narrativeEntry.id,
        summary: this.summarizeEntry(narrativeEntry),
        impact,
        importance,
      });

      // Trim long-term memory if needed
      if (this.memory.longTerm.length > this.config.longTermMemoryLimit) {
        // Sort by importance (highest first)
        this.memory.longTerm.sort((a, b) => b.importance - a.importance);
        // Keep only the most important ones
        this.memory.longTerm = this.memory.longTerm.slice(
          0,
          this.config.longTermMemoryLimit
        );
      }
    }

    // Extract any world facts from the entry
    const extractedFacts = this.extractWorldFacts(narrativeEntry);
    if (extractedFacts.length > 0) {
      this.memory.worldFacts.push(...extractedFacts);

      // Trim world facts if needed
      if (this.memory.worldFacts.length > this.config.worldFactsLimit) {
        this.memory.worldFacts = this.memory.worldFacts.slice(
          -this.config.worldFactsLimit
        );
      }
    }

    logger.debug("Added narrative entry to context", {
      context: "game-engine",
      metadata: {
        entryType: entry.type,
        importance,
        shortTermSize: this.memory.shortTerm.length,
        mediumTermSize: this.memory.mediumTerm.length,
        longTermSize: this.memory.longTerm.length,
      },
    });
  }

  /**
   * Add a player decision to the context
   *
   * @param decision - The decision information
   */
  public addDecision(decision: {
    options: string[];
    chosenIndex: number;
  }): void {
    this.ensureInitialized();

    const chosenOption =
      decision.options[decision.chosenIndex] || "Unknown choice";

    // Create a narrative entry for the decision
    this.addNarrativeEntry({
      type: "playerResponse",
      content: chosenOption,
    });

    // Decisions are typically more important than regular narrative
    // In a full implementation, we would analyze the decision more deeply
    logger.debug("Added decision to context", {
      context: "game-engine",
      metadata: {
        chosenOption,
        options: decision.options,
        chosenIndex: decision.chosenIndex,
      },
    });
  }

  /**
   * Summarize the narrative history for long-term storage
   * This is useful for minimizing token usage while preserving context
   *
   * @returns A summary of the important narrative elements
   */
  public async summarizeLongHistory(): Promise<string> {
    this.ensureInitialized();

    // In a real implementation, this would use an AI service to generate
    // a coherent summary of the narrative history

    // For the MVP, we'll create a simple summary from our memory structures
    const shortTermSummary = this.memory.shortTerm
      .slice(-3)
      .map(
        (entry) =>
          `${
            entry.type === "narrative" ? "Narrative" : "Player"
          }: ${entry.content.substring(0, 100)}...`
      )
      .join("\n");

    const mediumTermSummary = this.memory.mediumTerm
      .slice(0, 5)
      .map((entry) => entry.summary)
      .join("\n");

    const longTermSummary = this.memory.longTerm
      .slice(0, 3)
      .map((entry) => entry.summary)
      .join("\n");

    const worldFactsSummary = this.memory.worldFacts
      .slice(0, 5)
      .map((fact) => fact.fact)
      .join("\n");

    return `
Recent Events:
${shortTermSummary}

Important Events:
${mediumTermSummary}

Key Moments:
${longTermSummary}

World Facts:
${worldFactsSummary}
    `.trim();
  }

  /**
   * Get optimized context for AI generation, within token limits
   *
   * @param maxTokens - Maximum tokens to include in the context
   * @returns Optimized context for AI generation
   */
  public getContextForAI(
    maxTokens: number = this.config.defaultMaxTokens
  ): Record<string, any> {
    this.ensureInitialized();

    // In a full implementation, we would:
    // 1. Estimate token counts for each context element
    // 2. Prioritize elements based on importance
    // 3. Include as much as possible within token limits

    // For the MVP, we'll simply prioritize elements in this order:
    // 1. Character info (always include)
    // 2. Current location (always include)
    // 3. Recent history (short-term memory)
    // 4. Important NPCs
    // 5. Medium-term memory highlights
    // 6. Key world facts
    // 7. Long-term memory highlights

    // Extract the most important elements from each memory tier
    const shortTermHighlights = this.memory.shortTerm.slice(-5);
    const mediumTermHighlights = this.memory.mediumTerm.slice(0, 3);
    const longTermHighlights = this.memory.longTerm.slice(0, 2);
    const worldFactsHighlights = this.memory.worldFacts.slice(0, 5);

    return {
      character: this.character,
      location: this.location,
      npcs: this.npcs.slice(0, 3), // Limit to 3 most relevant NPCs
      recentHistory: shortTermHighlights,
      importantEvents: mediumTermHighlights,
      keyMoments: longTermHighlights,
      worldFacts: worldFactsHighlights,
    };
  }

  /**
   * Reset the narrative context
   * This clears all memory tiers but keeps character and world info
   */
  public resetContext(): void {
    this.memory = {
      shortTerm: [],
      mediumTerm: [],
      longTerm: [],
      worldFacts: [],
    };

    logger.debug("Narrative context reset", {
      context: "game-engine",
    });
  }

  /**
   * Update the current location in the context
   *
   * @param location - The new location
   */
  public updateLocation(location: NarrativeContext["location"]): void {
    this.ensureInitialized();

    const oldLocation = this.location;
    this.location = location;

    // In a full implementation, we might add a location change entry to the narrative
    logger.debug("Updated context location", {
      context: "game-engine",
      metadata: {
        oldLocationId: oldLocation?.id,
        newLocationId: location.id,
      },
    });
  }

  /**
   * Update the NPCs in the current context
   *
   * @param npcs - The new list of NPCs
   */
  public updateNPCs(npcs: NarrativeContext["npcs"]): void {
    this.ensureInitialized();
    this.npcs = npcs;

    logger.debug("Updated context NPCs", {
      context: "game-engine",
      metadata: {
        npcCount: npcs.length,
        npcIds: npcs.map((npc) => npc.id),
      },
    });
  }

  /**
   * Add a world fact to the context
   *
   * @param fact - The fact to add
   * @param category - The category of the fact
   */
  public addWorldFact(fact: string, category: string): void {
    this.ensureInitialized();

    this.memory.worldFacts.push({
      id: this.generateId(),
      fact,
      category,
    });

    // Trim world facts if needed
    if (this.memory.worldFacts.length > this.config.worldFactsLimit) {
      this.memory.worldFacts = this.memory.worldFacts.slice(
        -this.config.worldFactsLimit
      );
    }

    logger.debug("Added world fact", {
      context: "game-engine",
      metadata: {
        fact,
        category,
      },
    });
  }

  /**
   * Check if the context has been initialized
   *
   * @throws Error if not initialized
   * @private
   */
  private ensureInitialized(): void {
    if (!this.character || !this.world || !this.location) {
      throw new Error("NarrativeContextManager not initialized");
    }
  }

  /**
   * Rate the importance of a narrative entry
   *
   * @param entry - The entry to rate
   * @returns An importance score from 0-10
   * @private
   */
  private rateImportance(entry: NarrativeHistoryEntry): number {
    // In a full implementation, this would use more sophisticated analysis,
    // possibly using NLP or an AI service to determine importance based on
    // content, keyword matching, and narrative impact

    // For the MVP, we'll use some simple heuristics:

    // 1. Player decisions are generally more important than narrative
    if (entry.type === "playerResponse") {
      return 7; // Base importance for player decisions
    }

    // 2. Check for important keywords in narrative
    const content = entry.content.toLowerCase();
    let score = 3; // Base importance for narrative

    // Check for emotional terms
    const emotionalTerms = [
      "angry",
      "fear",
      "happy",
      "sad",
      "love",
      "hate",
      "discover",
      "surprise",
    ];
    if (emotionalTerms.some((term) => content.includes(term))) {
      score += 1;
    }

    // Check for character names
    if (this.character && content.includes(this.character.name.toLowerCase())) {
      score += 1;
    }

    // Check for NPC names
    for (const npc of this.npcs) {
      if (content.includes(npc.name.toLowerCase())) {
        score += 1;
        break; // Only count once
      }
    }

    // Check for location mentions
    if (this.location && content.includes(this.location.name.toLowerCase())) {
      score += 1;
    }

    // Check for plot-significant terms
    const plotTerms = [
      "quest",
      "mission",
      "secret",
      "discover",
      "found",
      "learn",
      "reveal",
      "battle",
      "fight",
      "defeat",
    ];
    for (const term of plotTerms) {
      if (content.includes(term)) {
        score += 2;
        break; // Only count once
      }
    }

    // Cap at 10
    return Math.min(score, 10);
  }

  /**
   * Determine the impact type of a narrative entry
   *
   * @param entry - The entry to analyze
   * @returns The impact type of the entry
   * @private
   */
  private determineImpact(
    entry: NarrativeHistoryEntry
  ): "character" | "world" | "relationship" {
    // In a full implementation, this would use more sophisticated analysis

    // For MVP, use simple keyword matching
    const content = entry.content.toLowerCase();

    // Check for character development terms
    const characterTerms = [
      "learned",
      "gained",
      "grew",
      "changed",
      "decided",
      "chose",
      "realized",
    ];
    if (characterTerms.some((term) => content.includes(term))) {
      return "character";
    }

    // Check for relationship terms
    const relationshipTerms = [
      "friend",
      "enemy",
      "ally",
      "betrayed",
      "helped",
      "saved",
      "met",
    ];
    if (relationshipTerms.some((term) => content.includes(term))) {
      return "relationship";
    }

    // Default to world impact
    return "world";
  }

  /**
   * Summarize a narrative entry for medium/long-term storage
   *
   * @param entry - The entry to summarize
   * @returns A concise summary
   * @private
   */
  private summarizeEntry(entry: NarrativeHistoryEntry): string {
    // In a full implementation, this might use an AI service to create a good summary

    // For the MVP, we'll do a simple truncation with a prefix
    const prefix =
      entry.type === "narrative" ? "Narrative: " : "Player decision: ";

    // Truncate to a reasonable length
    const maxLength = 100;
    let content = entry.content;
    if (content.length > maxLength) {
      content = content.substring(0, maxLength - 3) + "...";
    }

    return prefix + content;
  }

  /**
   * Extract world facts from a narrative entry
   *
   * @param entry - The entry to extract facts from
   * @returns Array of world facts
   * @private
   */
  private extractWorldFacts(
    entry: NarrativeHistoryEntry
  ): Array<{ id: string; fact: string; category: string }> {
    // In a full implementation, this might use an AI service to extract facts

    // For the MVP, we'll return an empty array
    // This would be expanded in a full implementation
    return [];
  }

  /**
   * Generate a unique ID
   *
   * @returns A unique ID string
   * @private
   */
  private generateId(): string {
    return `mem_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }
}

// Export a singleton instance for convenience
export const narrativeContextManager = new NarrativeContextManager();
