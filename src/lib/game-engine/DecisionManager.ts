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
import { aiService } from "@/lib/ai/AIService";
import { responseParser } from "@/lib/ai/ResponseParser";

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
      logger.warn("Invalid decision index", {
        context: "game-engine",
        metadata: { index, available: this.currentDecisions.length },
      });
      throw new Error(
        `Invalid decision index: ${index}. Available decisions: ${this.currentDecisions.length}`
      );
    }

    try {
      const currentState = this.gameStateManager.getCurrentState();
      const selectedDecision = this.currentDecisions[index];

      // Log player's choice immediately for context
      logger.debug("Player selected decision", {
        context: "game-engine",
        metadata: { decisionText: selectedDecision.text, index },
      });

      // The addDecision method in NarrativeContextManager already creates a playerResponse entry.
      // This ensures the player's action is part of the context for the AI.
      this.narrativeContextManager.addDecision({
        options: this.currentDecisions.map((d) => d.text),
        chosenIndex: index,
      });

      // Get context for AI AFTER player's decision has been added to narrative context
      const aiContext = this.narrativeContextManager.getContextForAI();
      const narrativeHistory = currentState.narrative?.history || [];

      logger.debug("Generating narrative with AI", {
        context: "game-engine",
        metadata: { historyLength: narrativeHistory.length },
      });
      // Generate narrative using AI service
      const rawAiResponse = await aiService.generateNarrative(
        aiContext, // This context should ideally include the latest player action
        narrativeHistory, // History before this turn's AI response
        { responseFormat: { type: "json_object" } } // Ensuring JSON for reliable parsing
      );

      logger.debug("Received raw AI response", {
        context: "game-engine",
        metadata: { tokens: rawAiResponse.tokens },
      });
      // Parse the AI response
      const parsedAiResult =
        responseParser.parseNarrativeResponse(rawAiResponse);
      logger.debug("Parsed AI response", {
        context: "game-engine",
        metadata: {
          narrativeTextLength: parsedAiResult.text.length,
          decisionCount: parsedAiResult.suggestedDecisions?.length,
        },
      });

      // Prepare the narrative response object for the game engine
      const narrativeResponse: NarrativeResponse = {
        narrativeText: parsedAiResult.text,
        decisions: parsedAiResult.suggestedDecisions || [],
        // Potential future: map updatedCharacterState, updatedWorldState from AI if provided
      };

      // Original consequences from the *player's chosen decision* (e.g., stat changes, item usage)
      const decisionConsequences = this.parseConsequences(
        selectedDecision.consequences
      );

      // Update history entry for internal DecisionManager tracking
      const historyEntry: DecisionHistoryEntry = {
        options: this.currentDecisions.map((d) => ({ text: d.text })),
        chosenIndex: index,
        timestamp: new Date(),
        consequences: decisionConsequences, // Consequences of player's direct choice
      };
      this.decisionHistory.unshift(historyEntry);
      if (this.decisionHistory.length > this.config.maxDecisionHistorySize) {
        this.decisionHistory = this.decisionHistory.slice(
          0,
          this.config.maxDecisionHistorySize
        );
      }

      // Update GameState: Add player's action and AI's narrative to history,
      // set new narrative text and AI-suggested decisions.
      const updatedNarrativeHistory = [
        ...(currentState.narrative?.history || []),
        // Player's choice text is already added to narrative context via this.narrativeContextManager.addDecision
        // which itself calls addNarrativeEntry. So, it's part of short-term memory for the AI.
        // Now add the AI's response to the game state history.
        {
          type: "narrative" as const,
          content: narrativeResponse.narrativeText,
        },
      ];

      this.gameStateManager.updateState({
        narrative: {
          text: narrativeResponse.narrativeText,
          history: updatedNarrativeHistory,
        },
        decisions: narrativeResponse.decisions, // Update game state with new decisions
        // Note: aiContext in GameState could be updated here with rawAiResponse or parsedAiResult if needed for debugging/later use
      });
      logger.debug("Game state updated with AI narrative and decisions", {
        context: "game-engine",
      });

      // Add the AI's narrative response to the NarrativeContextManager as well
      // This ensures it's part of the context for future AI calls.
      this.narrativeContextManager.addNarrativeEntry({
        type: "narrative",
        content: narrativeResponse.narrativeText,
      });

      // Set the new decisions generated by the AI for the player
      if (
        narrativeResponse.decisions &&
        narrativeResponse.decisions.length > 0
      ) {
        this.setDecisions(narrativeResponse.decisions);
      } else {
        // Handle cases where AI provides no new decisions - perhaps offer generic options or end a scene
        logger.warn(
          "AI provided no new decision points. Clearing current decisions.",
          { context: "game-engine" }
        );
        this.clearDecisions();
        // Consider adding some default/fallback decisions here if clearing is not desired
        // For example: this.setDecisions([{ text: "Reflect on what happened..." }]);
      }

      // Persist the original player decision (not the AI outcome)
      // This logging remains important for tracking player choices and direct consequences.
      const decisionPointId = `dp_${Date.now()}`;
      this.decisionService
        .recordDecision(
          currentState.id,
          decisionPointId,
          historyEntry.options.map((opt) => ({ text: opt.text })), // Ensure it's Array<{text: string}>
          index,
          "Game decision context",
          decisionConsequences // record the parsed consequences of the *selected* decision
        )
        .catch((error) => {
          logger.error("Failed to record player decision", {
            context: "game-engine",
            metadata: { error, decisionIndex: index, stateId: currentState.id },
          });
        });

      logger.info("Player decision processed with AI-generated narrative", {
        context: "game-engine",
        metadata: {
          decisionIndex: index,
          decisionText: selectedDecision.text,
          aiNarrativeLength: narrativeResponse.narrativeText.length,
          newDecisionCount: narrativeResponse.decisions.length,
          hasOriginalConsequences: Object.keys(decisionConsequences).length > 0,
        },
      });

      return {
        narrativeResponse, // This is the AI's response (new narrative + new decisions)
        consequences: decisionConsequences, // These are the consequences of the *player's chosen option*
      };
    } catch (error) {
      // Catching potential errors from AI service calls or parsing
      logger.error("Error processing decision with AI integration", {
        context: "game-engine",
        metadata: { error, decisionIndex: index },
      });
      // Consider a graceful fallback: e.g., generic error message and simple decisions
      // For now, rethrow to be handled by the GameEngine or calling layer
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
      // Attempt to parse as JSON
      const parsed = JSON.parse(consequencesStr);
      if (typeof parsed === "object" && parsed !== null) {
        return parsed;
      }
      // If JSON.parse results in non-object (e.g. a string, number), treat as invalid format for consequences
      logger.warn("Consequences string parsed to non-object JSON", {
        context: "game-engine",
        metadata: { consequencesStr },
      });
      return {};
    } catch (error) {
      logger.error("Failed to parse consequences string as JSON", {
        context: "game-engine",
        metadata: { consequencesStr, error },
      });
      // For MVP, if strict JSON is enforced, we might not need a fallback.
      // If a fallback is still desired for some reason, it should be robust or clearly documented as limited.
      // Considering the best practice for "Clean Code", relying on a single, well-defined format (JSON) is preferable.
      return {}; // Return empty if not valid JSON
    }
  }
}

// Export singleton instance for convenience
export const decisionManager = new DecisionManager();
