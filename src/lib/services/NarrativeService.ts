import { ValidationError } from "@/lib/errors/DatabaseError";
import { BaseService } from "./base/BaseService";
import { NarrativeHistoryRepository } from "@/lib/db/narrativeHistory";
import { GameStateRepository } from "@/lib/db/gameState";
import type { NarrativeHistory, GameState } from "@/types/database";
import { isNotEmpty } from "@/lib/utils/validation";
import { logger } from "@/lib/utils/logger";
import { Prisma } from "@/generated/prisma";
// Import our AI service
import { aiService } from "@/lib/ai/AIService";
import { responseParser } from "@/lib/ai/ResponseParser";

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
      // Validate inputs
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

      // Get previous narrative history
      const narrativeHistory = await this.getNarrativeHistory(gameStateId);

      try {
        // Try to use AI service for narrative generation
        let narrativeResponse;

        // Check if we have an API key configured
        if (process.env.GROQ_API_KEY) {
          // Use the AI service for narrative generation
          narrativeResponse = await this.generateNarrativeWithAI(
            gameState,
            narrativeHistory
          );
        } else {
          // Use the fallback for development/testing
          narrativeResponse = this.generateFallbackNarrative(
            gameState,
            narrativeHistory
          );

          logger.debug("Using fallback narrative (no API key)", {
            context: "service",
            metadata: {
              service: this.serviceName,
              operation: "generateNarrative",
              gameStateId,
            },
          });
        }

        // Record the generated narrative
        await this.recordNarrativeEntry(
          gameStateId,
          "narrative",
          narrativeResponse.narrativeText
        );

        return narrativeResponse;
      } catch (error) {
        // Log the error
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

        // Provide a fallback response for error cases
        return this.generateErrorFallbackNarrative();
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
    gameState: GameState,
    narrativeHistory: NarrativeHistory[]
  ): Promise<{
    narrativeText: string;
    decisions: Array<{ text: string; consequences?: string }>;
  }> {
    try {
      // Extract character name safely from characterState
      let characterName = "Adventurer";
      if (
        gameState.characterState &&
        typeof gameState.characterState === "object" &&
        "name" in gameState.characterState
      ) {
        characterName = String(gameState.characterState.name);
      }

      // Extract context from game state
      const context = {
        characterName,
        location: gameState.currentLocation || "unknown location",
        characterState: gameState.characterState || {},
        worldState: gameState.worldState || {},
        gameStateId: gameState.id,
      };

      // Format narrative history for AI
      const formattedHistory = narrativeHistory.map((entry) => ({
        type: entry.type as "narrative" | "playerResponse",
        content: entry.content,
      }));

      // Call the AI service
      const aiResponse = await aiService.generateNarrative(
        context,
        formattedHistory
      );

      // Parse the response
      const parsedResponse = responseParser.parseNarrativeResponse(aiResponse);

      // Map suggestedDecisions to include consequences if available
      let decisions: Array<{ text: string; consequences?: string }> = [];

      if (
        parsedResponse.suggestedDecisions &&
        Array.isArray(parsedResponse.suggestedDecisions)
      ) {
        decisions = parsedResponse.suggestedDecisions.map((d) => {
          const decision: { text: string; consequences?: string } = {
            text: d.text,
          };
          // Check if d has a consequences property before accessing it
          if (d && typeof d === "object" && "consequences" in d) {
            decision.consequences = String(d.consequences);
          }
          return decision;
        });
      }

      if (decisions.length === 0) {
        decisions = this.getDefaultDecisions();
      }

      // Return the structured narrative and decisions
      return {
        narrativeText: parsedResponse.text,
        decisions,
      };
    } catch (error) {
      logger.error("Error in AI narrative generation", {
        context: "service",
        metadata: {
          service: this.serviceName,
          operation: "generateNarrativeWithAI",
          error,
        },
      });

      // Fall back to basic narrative generation
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
    gameState: GameState,
    narrativeHistory: NarrativeHistory[]
  ): {
    narrativeText: string;
    decisions: Array<{ text: string; consequences?: string }>;
  } {
    // In a real implementation, this would use templates and game state data
    // For MVP, we'll provide a simple response
    let characterName = "Adventurer";

    // Safely extract character name
    if (
      gameState.characterState &&
      typeof gameState.characterState === "object" &&
      "name" in gameState.characterState
    ) {
      characterName = String(gameState.characterState.name);
    }

    const location = gameState.currentLocation || "Unknown";

    // Generate a simple narrative based on location
    let narrativeText = `${characterName} stands in ${location}, contemplating the next move. `;
    narrativeText +=
      "The world around seems ripe for adventure, with many possibilities ahead.";

    // Very basic context awareness from narrative history
    if (narrativeHistory.length > 0) {
      narrativeText +=
        " You reflect on your recent experiences and consider your path forward.";
    }

    // Simple location-based decisions
    return {
      narrativeText,
      decisions: this.getDefaultDecisions(),
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
  } {
    return {
      narrativeText:
        "The path ahead seems momentarily unclear. You pause to gather your thoughts and consider your options.",
      decisions: [
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
      ],
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
