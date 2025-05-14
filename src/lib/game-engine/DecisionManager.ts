import {
  DecisionManager as DecisionManagerInterface,
  GameEvent,
  GameEventType,
} from "@/types/engine";
import { GameState, NarrativeResponse } from "@/types/game";
import {
  DecisionService,
  decisionService as defaultDecisionService,
} from "@/lib/services/DecisionService";
import {
  GameStateManager,
  gameStateManager as defaultGameStateManager,
} from "./GameStateManager";
import {
  NarrativeContextManager,
  narrativeContextManager as defaultNarrativeContextManager,
} from "./NarrativeContextManager";
import { logger } from "@/lib/utils/logger";

/**
 * Configuration options for the DecisionManager
 */
export interface DecisionManagerConfig {
  /**
   * Maximum number of decisions to keep in memory
   */
  maxDecisionHistorySize: number;
}

/**
 * Represents a historical decision with context
 */
interface DecisionHistoryEntry {
  options: Array<{ text: string }>;
  chosenIndex: number;
  timestamp: Date;
  consequences?: Record<string, any>;
}

/**
 * DecisionManager implementation
 *
 * Manages game decisions, including:
 * - Tracking current available decisions
 * - Processing player decisions
 * - Maintaining decision history
 * - Validating decisions
 * - Parsing decision consequences
 *
 * Implements the DecisionManager interface from src/types/engine.ts
 */
export class DecisionManager implements DecisionManagerInterface {
  /**
   * Default configuration values
   */
  private static readonly DEFAULT_CONFIG: DecisionManagerConfig = {
    maxDecisionHistorySize: 20,
  };

  /**
   * Current available decisions
   */
  private currentDecisions: Array<{
    text: string;
    consequences?: string;
  }> = [];

  /**
   * History of decisions made
   */
  private decisionHistory: DecisionHistoryEntry[] = [];

  /**
   * GameStateManager instance
   */
  private readonly gameStateManager: GameStateManager;

  /**
   * DecisionService instance
   */
  private readonly decisionService: DecisionService;

  /**
   * NarrativeContextManager instance
   */
  private readonly narrativeContextManager: NarrativeContextManager;

  /**
   * Configuration options
   */
  private readonly config: DecisionManagerConfig;

  /**
   * Event handlers mapped by event type
   */
  private eventHandlers: Map<GameEventType, Set<(event: GameEvent) => void>> =
    new Map();

  /**
   * Create a new DecisionManager
   *
   * @param gameStateManager - GameStateManager instance
   * @param decisionService - DecisionService instance
   * @param narrativeContextManager - NarrativeContextManager instance
   * @param config - Configuration options
   */
  constructor(
    gameStateManager: GameStateManager = defaultGameStateManager,
    decisionService: DecisionService = defaultDecisionService,
    narrativeContextManager: NarrativeContextManager = defaultNarrativeContextManager,
    config: Partial<DecisionManagerConfig> = {}
  ) {
    this.gameStateManager = gameStateManager;
    this.decisionService = decisionService;
    this.narrativeContextManager = narrativeContextManager;
    this.config = {
      ...DecisionManager.DEFAULT_CONFIG,
      ...config,
    };
  }

  /**
   * Initialize the decision manager
   * Sets up event subscriptions and initial state
   *
   * @param initialDecisions - Optional initial set of decisions
   */
  public initialize(
    initialDecisions?: Array<{ text: string; consequences?: string }>
  ): void {
    // Clear any existing state
    this.clearDecisions();
    this.decisionHistory = [];

    // Set initial decisions if provided
    if (initialDecisions && initialDecisions.length > 0) {
      this.setDecisions(initialDecisions);
    }

    logger.debug("DecisionManager initialized", {
      context: "game-engine",
      metadata: {
        decisionCount: this.currentDecisions.length,
      },
    });
  }

  /**
   * Get the current available decisions
   *
   * @returns Array of available decisions
   */
  public getCurrentDecisions(): Array<{ text: string; consequences?: string }> {
    return [...this.currentDecisions];
  }

  /**
   * Set new available decisions
   *
   * @param decisions - New decisions to set
   */
  public setDecisions(
    decisions: Array<{ text: string; consequences?: string }>
  ): void {
    if (!Array.isArray(decisions)) {
      throw new Error("Decisions must be an array");
    }

    // Validate decisions before setting
    this.validateDecisions(decisions);

    // Replace current decisions
    this.currentDecisions = [...decisions];

    logger.debug("Set new decisions", {
      context: "game-engine",
      metadata: {
        decisionCount: this.currentDecisions.length,
      },
    });
  }

  /**
   * Process a player decision
   *
   * @param index - Index of the chosen decision
   * @returns Object containing narrative response and consequences
   * @throws Error if index is invalid or no decisions are available
   */
  public async processDecision(index: number): Promise<{
    narrativeResponse: NarrativeResponse;
    consequences: Record<string, any>;
  }> {
    // Check if index is valid
    if (index < 0 || index >= this.currentDecisions.length) {
      throw new Error(
        `Invalid decision index: ${index}. Available decisions: ${this.currentDecisions.length}`
      );
    }

    try {
      // Get current game state
      const currentState = this.gameStateManager.getCurrentState();

      // Get the selected decision
      const selectedDecision = this.currentDecisions[index];

      // Create decision history entry
      const historyEntry: DecisionHistoryEntry = {
        options: this.currentDecisions.map((d) => ({ text: d.text })),
        chosenIndex: index,
        timestamp: new Date(),
      };

      // Add decision to narrative context
      this.narrativeContextManager.addDecision({
        options: this.currentDecisions.map((d) => d.text),
        chosenIndex: index,
      });

      // Parse any consequences from the decision
      const consequences = this.parseConsequences(
        selectedDecision.consequences
      );
      historyEntry.consequences = consequences;

      // Add to decision history
      this.decisionHistory.unshift(historyEntry);

      // Trim history if needed
      if (this.decisionHistory.length > this.config.maxDecisionHistorySize) {
        this.decisionHistory = this.decisionHistory.slice(
          0,
          this.config.maxDecisionHistorySize
        );
      }

      // Create a simple narrative response for the MVP
      // In a full implementation, this would involve more complex narrative generation
      const narrativeResponse: NarrativeResponse = {
        narrativeText: `You chose: ${selectedDecision.text}`,
        newDecisionPoints: [
          { text: "Continue" },
          { text: "Examine surroundings" },
          { text: "Check inventory" },
        ],
      };

      // Apply immediate consequences to the state if needed
      if (Object.keys(consequences).length > 0) {
        if (consequences.character) {
          narrativeResponse.updatedCharacterState = consequences.character;
        }
        if (consequences.world) {
          narrativeResponse.updatedWorldState = consequences.world;
        }
        if (consequences.location) {
          narrativeResponse.newLocation = consequences.location;
        }
      }

      // Clear current decisions
      this.clearDecisions();

      // Record the decision in the database for persistence
      // Use a generated ID as decisionPointId for now
      const decisionPointId = `dp_${Date.now()}`;

      // In a non-MVP implementation, we would await this
      // But for MVP, we'll fire and forget to avoid slowing down the response
      this.decisionService
        .recordDecision(
          currentState.id,
          decisionPointId,
          historyEntry.options,
          index,
          "Game decision context", // This would be more specific in a full implementation
          consequences
        )
        .catch((error) => {
          logger.error("Failed to record decision", {
            context: "game-engine",
            metadata: {
              error,
              decisionIndex: index,
              stateId: currentState.id,
            },
          });
        });

      // Log the decision processing
      logger.debug("Processed player decision", {
        context: "game-engine",
        metadata: {
          decisionIndex: index,
          decisionText: selectedDecision.text,
          hasConsequences: Object.keys(consequences).length > 0,
        },
      });

      return {
        narrativeResponse,
        consequences,
      };
    } catch (error) {
      logger.error("Error processing decision", {
        context: "game-engine",
        metadata: {
          error,
          decisionIndex: index,
        },
      });
      throw error;
    }
  }

  /**
   * Get previous decisions made
   *
   * @param limit - Optional limit on number of decisions to return
   * @returns Array of previous decisions with context
   */
  public getPreviousDecisions(limit?: number): Array<{
    options: Array<{ text: string }>;
    chosenIndex: number;
    timestamp: Date;
  }> {
    const effectiveLimit = limit || this.decisionHistory.length;
    return this.decisionHistory.slice(0, effectiveLimit).map((entry) => ({
      options: entry.options,
      chosenIndex: entry.chosenIndex,
      timestamp: entry.timestamp,
    }));
  }

  /**
   * Subscribe to decision events
   *
   * @param eventType - The event type to subscribe to
   * @param handler - The event handler function
   * @returns Function to unsubscribe the handler
   */
  public on<T extends GameEventType>(
    eventType: T,
    handler: (event: GameEvent<T>) => void
  ): () => void {
    // Get or create the set of handlers for this event type
    if (!this.eventHandlers.has(eventType)) {
      this.eventHandlers.set(eventType, new Set());
    }

    const handlers = this.eventHandlers.get(eventType)!;
    handlers.add(handler as any);

    // Return an unsubscribe function
    return () => {
      handlers.delete(handler as any);
      if (handlers.size === 0) {
        this.eventHandlers.delete(eventType);
      }
    };
  }

  /**
   * Unsubscribe from events
   *
   * @param eventType - The event type to unsubscribe from
   * @param handler - The handler to remove
   */
  public off<T extends GameEventType>(
    eventType: T,
    handler: (event: GameEvent<T>) => void
  ): void {
    const handlers = this.eventHandlers.get(eventType);
    if (handlers) {
      handlers.delete(handler as any);
      if (handlers.size === 0) {
        this.eventHandlers.delete(eventType);
      }
    }
  }

  /**
   * Reset the decision manager state
   */
  public reset(): void {
    this.clearDecisions();
    this.decisionHistory = [];

    logger.debug("DecisionManager reset", {
      context: "game-engine",
    });
  }

  /**
   * Clear current decisions
   *
   * @private
   */
  private clearDecisions(): void {
    this.currentDecisions = [];
  }

  /**
   * Validate decisions to ensure they are properly formatted
   *
   * @param decisions - Decisions to validate
   * @throws Error if decisions are invalid
   * @private
   */
  private validateDecisions(
    decisions: Array<{ text: string; consequences?: string }>
  ): void {
    for (const [index, decision] of decisions.entries()) {
      if (!decision.text || typeof decision.text !== "string") {
        throw new Error(
          `Decision at index ${index} has invalid text: ${decision.text}`
        );
      }

      // Validate that consequences, if present, is a valid string
      if (
        decision.consequences !== undefined &&
        (typeof decision.consequences !== "string" ||
          decision.consequences.trim() === "")
      ) {
        throw new Error(
          `Decision at index ${index} has invalid consequences format`
        );
      }
    }
  }

  /**
   * Parse consequence string into structured format
   *
   * @param consequencesStr - Consequences as a string
   * @returns Structured consequences object
   * @private
   */
  private parseConsequences(consequencesStr?: string): Record<string, any> {
    if (!consequencesStr) {
      return {};
    }

    try {
      // In a real implementation, this would use a more sophisticated parsing approach
      // For now, we'll use a simple approach for the MVP

      const consequences: Record<string, any> = {};

      // Look for structured patterns in the consequences string
      if (consequencesStr.includes("health")) {
        consequences.character = {
          health: this.extractDelta(consequencesStr, "health"),
        };
      }

      if (consequencesStr.includes("reputation")) {
        consequences.character = {
          ...(consequences.character || {}),
          reputation: this.extractDelta(consequencesStr, "reputation"),
        };
      }

      if (consequencesStr.includes("location")) {
        const locationMatch = consequencesStr.match(
          /location:\s*([a-zA-Z\s]+)/
        );
        if (locationMatch && locationMatch[1]) {
          consequences.location = locationMatch[1].trim();
        }
      }

      // Add analyzed field with metadata
      consequences.analyzed = {
        timestamp: new Date().toISOString(),
        originalText: consequencesStr,
      };

      return consequences;
    } catch (error) {
      logger.warn("Failed to parse consequences string", {
        context: "game-engine",
        metadata: {
          consequencesStr,
          error,
        },
      });

      // Return empty consequences on error
      return {};
    }
  }

  /**
   * Extract numeric delta from consequences string
   *
   * @param text - Text to extract from
   * @param attribute - Attribute name to look for
   * @returns Numeric delta or 0 if not found
   * @private
   */
  private extractDelta(text: string, attribute: string): number {
    const pattern = new RegExp(`${attribute}\\s*([+-]\\d+)`);
    const match = text.match(pattern);

    if (match && match[1]) {
      return parseInt(match[1], 10);
    }

    return 0;
  }
}

// Export singleton instance for convenience
export const decisionManager = new DecisionManager();
