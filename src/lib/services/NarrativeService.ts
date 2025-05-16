import { ValidationError } from "@/lib/errors/DatabaseError";
import { BaseService } from "./base/BaseService";
import { NarrativeHistoryRepository } from "@/lib/db/narrativeHistory";
import { GameStateRepository } from "@/lib/db/gameState";
import type {
  NarrativeHistory,
  GameState as DbGameStateExt,
} from "@/types/database";
import { isNotEmpty } from "@/lib/utils/validation";
import { logger } from "@/lib/utils/logger";
import { Prisma } from "@/generated/prisma";
// Import our AI service
import { aiService } from "@/lib/ai/AIService";
import { responseParser } from "@/lib/ai/ResponseParser";
import { narrativeContextManager } from "@/lib/game-engine/NarrativeContextManager";

/**
 * Service for managing narrative generation and history
 * Handles narrative generation, recording, and retrieval
 */
export class NarrativeService extends BaseService {
  private readonly narrativeHistoryRepository: NarrativeHistoryRepository;
  private readonly gameStateRepository: GameStateRepository;

  /**
   * Create a new NarrativeService
   *
   * @param narrativeHistoryRepository - Repository for narrative history operations
   * @param gameStateRepository - Repository for game state operations
   */
  constructor(
    narrativeHistoryRepository: NarrativeHistoryRepository = new NarrativeHistoryRepository(),
    gameStateRepository: GameStateRepository = new GameStateRepository()
  ) {
    super("NarrativeService", {
      narrativeHistoryRepository,
      gameStateRepository,
    });
    this.narrativeHistoryRepository = narrativeHistoryRepository;
    this.gameStateRepository = gameStateRepository;
  }

  /**
   * Generate narrative and decision options based on the current game state
   * This is a simplified implementation for the MVP that uses fallback narrative generation
   * Future implementations would integrate with an AI service
   *
   * @param gameStateId - The game state ID to generate narrative for
   * @returns Generated narrative text and decision options
   */
  async generateNarrative(gameStateId: string): Promise<{
    narrativeText: string;
    decisions: Array<{ text: string; consequences?: string }>;
  }> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(gameStateId)) {
        throw new ValidationError(
          "Game state ID is required",
          { gameStateId: "Game state ID is required" },
          { entity: this.serviceName }
        );
      }
      const dbGameState = await this.gameStateRepository.findById(gameStateId);
      if (!dbGameState) {
        throw new ValidationError(
          "Invalid game state ID",
          { gameStateId: "Game state does not exist" },
          { entity: this.serviceName }
        );
      }
      const narrativeHistory = await this.getNarrativeHistory(gameStateId);

      try {
        let narrativeResponseFromService: {
          narrativeText: string;
          decisions: Array<{ text: string; consequences?: string }>;
          rawAiJsonString?: string;
        };
        let contentToRecord: string;

        if (process.env.GROQ_API_KEY) {
          narrativeResponseFromService = await this.generateNarrativeWithAI(
            dbGameState,
            narrativeHistory
          );
          contentToRecord =
            narrativeResponseFromService.rawAiJsonString ||
            JSON.stringify({
              text: narrativeResponseFromService.narrativeText,
              decisions: narrativeResponseFromService.decisions,
            });
        } else {
          narrativeResponseFromService = this.generateFallbackNarrative(
            dbGameState,
            narrativeHistory
          );
          contentToRecord = JSON.stringify({
            text: narrativeResponseFromService.narrativeText,
            decisions: narrativeResponseFromService.decisions,
            fallbackUsed: true,
          });
        }

        await this.recordNarrativeEntry(
          gameStateId,
          "narrative",
          contentToRecord
        );

        return {
          narrativeText: narrativeResponseFromService.narrativeText,
          decisions: narrativeResponseFromService.decisions,
        };
      } catch (error) {
        logger.error(
          `Error generating narrative for game state ${gameStateId}`,
          {
            context: "service",
            metadata: {
              service: this.serviceName,
              operation: "generateNarrative",
              gameStateId,
              error,
            },
          }
        );
        const errorFallback = this.generateErrorFallbackNarrative();
        return {
          narrativeText: errorFallback.narrativeText,
          decisions: errorFallback.decisions,
        };
      }
    }, "generateNarrative");
  }

  /**
   * Generate narrative using AI service
   *
   * @param gameState - The game state to generate narrative for
   * @param narrativeHistory - Previous narrative history
   * @returns Generated narrative text and decisions
   */
  private async generateNarrativeWithAI(
    dbGameState: DbGameStateExt,
    narrativeHistory: NarrativeHistory[]
  ): Promise<{
    narrativeText: string;
    decisions: Array<{ text: string; consequences?: string }>;
    rawAiJsonString?: string;
  }> {
    try {
      // The NarrativeContextManager should have been initialized by the GameEngine
      // with the full character, world, and location objects derived from this dbGameState.
      // We rely on that prior initialization step.

      // Add current narrative history to the context manager if it's not already there
      // (though GameEngine/DecisionManager usually handle adding entries)
      // For now, let's assume history is managed externally before this call.

      // Get the rich context directly from the NarrativeContextManager
      const richAIContext = narrativeContextManager.getContextForAI();

      logger.debug(
        "Using context from NarrativeContextManager for AI generation",
        {
          context: "service",
          metadata: {
            service: this.serviceName,
            operation: "generateNarrativeWithAI",
            gameStateId: dbGameState.id,
            retrievedContextKeys: Object.keys(richAIContext),
            // Log parts of the context to verify it's what we expect
            characterInContext: richAIContext.character?.name,
            locationInContext: richAIContext.location?.name,
            locationDescInContext: richAIContext.location?.description,
          },
        }
      );

      // Format narrative history for AI (if AIService needs it separately)
      // The richAIContext from NarrativeContextManager already contains recentHistory, etc.
      // So, we might not need to pass formattedHistory explicitly if AIService uses richAIContext.recentHistory
      const formattedHistoryForAIService = narrativeHistory.map((entry) => ({
        type: entry.type as "narrative" | "playerResponse",
        content: entry.content,
      }));

      // Call the AI service with the rich context
      const aiResponse = await aiService.generateNarrative(
        richAIContext,
        formattedHistoryForAIService
      );

      const parsedResponse = responseParser.parseNarrativeResponse(aiResponse);
      let decisions: Array<{ text: string; consequences?: string }> = [];

      if (
        parsedResponse.suggestedDecisions &&
        Array.isArray(parsedResponse.suggestedDecisions)
      ) {
        decisions = parsedResponse.suggestedDecisions.map((d) => {
          const decision: { text: string; consequences?: string } = {
            text: d.text,
          };
          if (d && typeof d === "object" && "consequences" in d) {
            decision.consequences = String(d.consequences);
          }
          return decision;
        });
      }

      if (decisions.length === 0) {
        decisions = this.getDefaultDecisions();
      }

      return {
        narrativeText: parsedResponse.text,
        decisions,
        rawAiJsonString: aiResponse.text,
      };
    } catch (error) {
      logger.error("Error in AI narrative generation (NarrativeService)", {
        context: "service",
        metadata: {
          service: this.serviceName,
          operation: "generateNarrativeWithAI",
          gameStateId: dbGameState.id,
          error,
        },
      });
      return this.generateErrorFallbackNarrative();
    }
  }

  /**
   * Record a narrative entry in the history
   *
   * @param gameStateId - The game state ID to record the entry for
   * @param type - The type of narrative entry (narrative or playerResponse)
   * @param content - The content of the narrative entry
   * @returns The recorded narrative history entry
   */
  async recordNarrativeEntry(
    gameStateId: string,
    type: "narrative" | "playerResponse",
    content: string
  ): Promise<NarrativeHistory> {
    return this.executeOperation(async () => {
      // Validate inputs
      if (!isNotEmpty(gameStateId)) {
        throw new ValidationError(
          "Game state ID is required",
          { gameStateId: "Game state ID is required" },
          { entity: this.serviceName }
        );
      }

      if (!isNotEmpty(content)) {
        throw new ValidationError(
          "Content is required",
          { content: "Content is required" },
          { entity: this.serviceName }
        );
      }

      if (type !== "narrative" && type !== "playerResponse") {
        throw new ValidationError(
          "Invalid narrative type",
          { type: "Type must be either 'narrative' or 'playerResponse'" },
          { entity: this.serviceName }
        );
      }

      // Verify the game state exists
      const gameState = await this.gameStateRepository.findById(gameStateId);
      if (!gameState) {
        throw new ValidationError(
          "Invalid game state ID",
          { gameStateId: "Game state does not exist" },
          { entity: this.serviceName }
        );
      }

      // Prepare the narrative history data
      const narrativeData: Prisma.NarrativeHistoryCreateInput = {
        gameState: { connect: { id: gameStateId } },
        type,
        content,
        timestamp: new Date(),
      };

      // Create the narrative history entry
      return await this.narrativeHistoryRepository.create(narrativeData);
    }, "recordNarrativeEntry");
  }

  /**
   * Get the narrative history for a game state
   *
   * @param gameStateId - The game state ID to get the narrative history for
   * @returns Array of narrative history entries
   */
  async getNarrativeHistory(gameStateId: string): Promise<NarrativeHistory[]> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(gameStateId)) {
        throw new ValidationError(
          "Game state ID is required",
          { gameStateId: "Game state ID is required" },
          { entity: this.serviceName }
        );
      }

      // Verify the game state exists
      const gameState = await this.gameStateRepository.findById(gameStateId);
      if (!gameState) {
        throw new ValidationError(
          "Invalid game state ID",
          { gameStateId: "Game state does not exist" },
          { entity: this.serviceName }
        );
      }

      return await this.narrativeHistoryRepository.findByGameStateId(
        gameStateId
      );
    }, "getNarrativeHistory");
  }

  /**
   * Get recent narrative history for a game state
   *
   * @param gameStateId - The game state ID to get the narrative history for
   * @param limit - Optional maximum number of entries to return
   * @returns Array of recent narrative history entries
   */
  async getRecentNarrativeHistory(
    gameStateId: string,
    limit?: number
  ): Promise<NarrativeHistory[]> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(gameStateId)) {
        throw new ValidationError(
          "Game state ID is required",
          { gameStateId: "Game state ID is required" },
          { entity: this.serviceName }
        );
      }

      // Get only most recent entries
      return await this.narrativeHistoryRepository.findRecentByGameStateId(
        gameStateId,
        limit || 10 // Default to 10 most recent entries
      );
    }, "getRecentNarrativeHistory");
  }

  /**
   * Generate a fallback narrative based on the game state
   * Used for development and when AI service is unavailable
   *
   * @param gameState - The game state to generate narrative for
   * @param narrativeHistory - Previous narrative history
   * @returns Generated narrative text and decisions
   */
  private generateFallbackNarrative(
    dbGameState: DbGameStateExt,
    narrativeHistory: NarrativeHistory[]
  ): {
    narrativeText: string;
    decisions: Array<{ text: string; consequences?: string }>;
    rawAiJsonString?: string;
  } {
    let characterName = "Adventurer";
    if (
      dbGameState.characterState &&
      typeof dbGameState.characterState === "object" &&
      "name" in dbGameState.characterState
    ) {
      characterName = String(dbGameState.characterState.name);
    }
    const location = dbGameState.currentLocation || "Unknown";
    let narrativeText = `${characterName} stands in ${location}, contemplating the next move. `;
    narrativeText +=
      "The world around seems ripe for adventure, with many possibilities ahead.";
    if (narrativeHistory.length > 0) {
      narrativeText +=
        " You reflect on your recent experiences and consider your path forward.";
    }
    const decisions = this.getDefaultDecisions();
    return {
      narrativeText,
      decisions,
      rawAiJsonString: JSON.stringify({
        text: narrativeText,
        decisions,
        fallbackType: "non-AI",
      }),
    };
  }

  /**
   * Generate a fallback narrative for error cases
   *
   * @returns A simple narrative and decisions for error cases
   */
  private generateErrorFallbackNarrative(): {
    narrativeText: string;
    decisions: Array<{ text: string; consequences?: string }>;
    rawAiJsonString?: string;
  } {
    const narrativeText =
      "The path ahead seems momentarily unclear. You pause to gather your thoughts and consider your options.";
    const decisions = [
      {
        text: "Wait and observe",
        consequences: "Take time to better understand the situation.",
      },
      {
        text: "Press onward cautiously",
        consequences: "Continue despite uncertainty.",
      },
      {
        text: "Retrace your steps",
        consequences: "Return to familiar territory.",
      },
      {
        text: "Try a different approach",
        consequences: "Seek an alternative solution.",
      },
    ];
    return {
      narrativeText,
      decisions,
      rawAiJsonString: JSON.stringify({
        error: "AI narrative generation failed, using error fallback.",
        text: narrativeText,
        decisions: decisions.map((d) => ({ text: d.text })),
      }),
    };
  }

  /**
   * Get default decisions for fallback cases
   *
   * @returns Array of default decision options
   */
  private getDefaultDecisions(): Array<{
    text: string;
    consequences?: string;
  }> {
    return [
      {
        text: "Explore the surroundings",
        consequences: "Discover more about this location.",
      },
      {
        text: "Move to a new area",
        consequences: "Find new opportunities elsewhere.",
      },
      {
        text: "Rest and prepare",
        consequences: "Recover strength before proceeding.",
      },
      {
        text: "Interact with nearby people",
        consequences: "Seek information or assistance from others.",
      },
    ];
  }

  /**
   * Summarize narrative history for context building
   * This is a simplified implementation for the MVP
   *
   * @param narrativeHistory - The narrative history to summarize
   * @returns Summarized narrative
   */
  private summarizeNarrativeHistory(
    narrativeHistory: NarrativeHistory[]
  ): string {
    if (narrativeHistory.length === 0) {
      return "Your adventure is just beginning.";
    }

    // For MVP, simply return the last few entries concatenated
    const recentEntries = narrativeHistory
      .slice(-3) // Last 3 entries
      .map((entry) => {
        const prefix =
          entry.type === "narrative" ? "Narrative: " : "Your response: ";
        return `${prefix}${entry.content}`;
      })
      .join("\n\n");

    return `Previously in your adventure:\n\n${recentEntries}`;
  }
}

// Export singleton instance for convenience
export const narrativeService = new NarrativeService(
  new NarrativeHistoryRepository(),
  new GameStateRepository()
);
