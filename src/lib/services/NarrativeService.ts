import { ValidationError } from "@/lib/errors/DatabaseError";
import { BaseService } from "./base/BaseService";
import { NarrativeHistoryRepository } from "@/lib/db/narrativeHistory";
import { GameStateRepository } from "@/lib/db/gameState";
import type { NarrativeHistory, GameState } from "@/types/database";
import { isNotEmpty } from "@/lib/utils/validation";
import { logger } from "@/lib/utils/logger";
import { Prisma } from "@/generated/prisma";

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
        // This is where we would integrate with an AI service
        // For the MVP, we'll use a fallback mechanism
        const narrativeResponse = this.generateFallbackNarrative(
          gameState,
          narrativeHistory
        );

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
   * Generate a fallback narrative response for development/MVP purposes
   * This is a simplified implementation that will be replaced with AI integration
   *
   * @param gameState - The current game state
   * @param narrativeHistory - Previous narrative history
   * @returns Generated narrative text and decision options
   */
  private generateFallbackNarrative(
    gameState: GameState,
    narrativeHistory: NarrativeHistory[]
  ): {
    narrativeText: string;
    decisions: Array<{ text: string; consequences?: string }>;
  } {
    // Extract the current location from the game state
    const currentLocation = gameState.currentLocation;

    // Extract character data
    const characterState = gameState.characterState as Record<string, any>;
    const characterName = characterState.name || "Adventurer";

    // Check if this is the first narrative (no history yet)
    const isFirstNarrative = narrativeHistory.length === 0;

    // Generate appropriate narrative based on context
    let narrativeText = "";
    if (isFirstNarrative) {
      narrativeText = `As ${characterName}, you find yourself in ${currentLocation}. The journey begins here, and the path ahead is yours to choose. The world around you is vibrant with potential adventure.`;
    } else {
      narrativeText = `Continuing your journey in ${currentLocation}, ${characterName}, you sense that your decisions have weight in this world. What will you do next?`;
    }

    // Generate a set of generic decisions
    const decisions = [
      {
        text: "Explore the surroundings carefully",
        consequences:
          "You might discover hidden secrets or valuable resources.",
      },
      {
        text: "Move forward with determination",
        consequences: "You might make faster progress but could miss details.",
      },
      {
        text: "Interact with nearby objects or features",
        consequences:
          "You might learn more about the environment or trigger events.",
      },
      {
        text: "Look for signs of other characters or creatures",
        consequences:
          "You might make contact with helpful allies or potential threats.",
      },
    ];

    return {
      narrativeText,
      decisions,
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
