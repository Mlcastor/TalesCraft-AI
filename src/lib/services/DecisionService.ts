import { ValidationError } from "@/lib/errors/DatabaseError";
import { BaseService } from "./base/BaseService";
import { DecisionRepository } from "@/lib/db/decision";
import { GameStateRepository } from "@/lib/db/gameState";
import type { Decision } from "@/types/database";
import { isNotEmpty } from "@/lib/utils/validation";
import { logger } from "@/lib/utils/logger";
import { Prisma } from "@/generated/prisma";

/**
 * Service for managing decisions made in the game
 * Handles recording, retrieving, and analyzing player decisions
 */
export class DecisionService extends BaseService {
  private readonly decisionRepository: DecisionRepository;
  private readonly gameStateRepository: GameStateRepository;

  /**
   * Create a new DecisionService
   *
   * @param decisionRepository - Repository for decision operations
   * @param gameStateRepository - Repository for game state operations
   */
  constructor(
    decisionRepository: DecisionRepository = new DecisionRepository(),
    gameStateRepository: GameStateRepository = new GameStateRepository()
  ) {
    super("DecisionService", {
      decisionRepository,
      gameStateRepository,
    });
    this.decisionRepository = decisionRepository;
    this.gameStateRepository = gameStateRepository;
  }

  /**
   * Record a player decision with context and consequences
   *
   * @param gameStateId - The game state ID where the decision was made
   * @param decisionPointId - Unique identifier for this decision point
   * @param options - The options presented to the player
   * @param choiceIndex - The index of the player's choice
   * @param context - Optional context about the decision
   * @param consequences - Optional data about the consequences of the decision
   * @returns The recorded decision
   */
  async recordDecision(
    gameStateId: string,
    decisionPointId: string,
    options: Array<{ text: string }>,
    choiceIndex: number,
    context?: string,
    consequences?: Record<string, any>
  ): Promise<Decision> {
    return this.executeOperation(async () => {
      // Validate inputs
      if (!isNotEmpty(gameStateId)) {
        throw new ValidationError(
          "Game state ID is required",
          { gameStateId: "Game state ID is required" },
          { entity: this.serviceName }
        );
      }

      if (!isNotEmpty(decisionPointId)) {
        throw new ValidationError(
          "Decision point ID is required",
          { decisionPointId: "Decision point ID is required" },
          { entity: this.serviceName }
        );
      }

      if (!Array.isArray(options) || options.length === 0) {
        throw new ValidationError(
          "Options are required and must be an array",
          { options: "At least one option is required" },
          { entity: this.serviceName }
        );
      }

      if (choiceIndex < 0 || choiceIndex >= options.length) {
        throw new ValidationError(
          "Invalid choice index",
          {
            choiceIndex: `Choice index must be between 0 and ${
              options.length - 1
            }`,
          },
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

      // Log the decision being recorded
      logger.debug(
        `Recording decision for game state ${gameStateId}, choice ${choiceIndex}`,
        {
          context: "service",
          metadata: {
            service: this.serviceName,
            operation: "recordDecision",
            gameStateId,
            decisionPointId,
            choiceIndex,
          },
        }
      );

      // Analyze impact of this decision (simplified for MVP)
      const analyzedConsequences = this.analyzeDecisionImpact(
        options[choiceIndex].text,
        consequences || {}
      );

      // Create the decision record
      const decisionData: Prisma.DecisionCreateInput = {
        gameState: { connect: { id: gameStateId } },
        decisionPointId,
        decisionContext: context || null,
        optionsPresented: options as unknown as Prisma.InputJsonValue,
        playerChoice: choiceIndex,
        timestamp: new Date(),
        location: gameState.currentLocation || null,
        consequences: analyzedConsequences as unknown as Prisma.InputJsonValue,
        relatedNpcIds: [], // This would be populated in a more advanced implementation
      };

      return await this.decisionRepository.create(decisionData);
    }, "recordDecision");
  }

  /**
   * Get the decision history for a game state
   *
   * @param gameStateId - The game state ID to get decisions for
   * @returns Array of decisions for this game state
   */
  async getDecisionHistory(gameStateId: string): Promise<Decision[]> {
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

      return await this.decisionRepository.findByGameStateId(gameStateId);
    }, "getDecisionHistory");
  }

  /**
   * Get recent decisions for a character across all sessions
   *
   * @param characterId - The character ID to get decisions for
   * @param limit - Optional maximum number of decisions to return
   * @returns Array of recent decisions for this character
   */
  async getRecentDecisions(
    characterId: string,
    limit?: number
  ): Promise<Decision[]> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(characterId)) {
        throw new ValidationError(
          "Character ID is required",
          { characterId: "Character ID is required" },
          { entity: this.serviceName }
        );
      }

      return await this.decisionRepository.findRecentByCharacterId(
        characterId,
        limit || 20 // Default to 20 most recent decisions if no limit specified
      );
    }, "getRecentDecisions");
  }

  /**
   * Get decisions that involve specific NPCs
   * Useful for retrieving context about player interactions with certain characters
   *
   * @param npcIds - Array of NPC IDs to filter by
   * @param limit - Optional maximum number of decisions to return
   * @returns Array of decisions involving the specified NPCs
   */
  async getDecisionsInvolvingNpcs(
    npcIds: string[],
    limit?: number
  ): Promise<Decision[]> {
    return this.executeOperation(async () => {
      if (!Array.isArray(npcIds) || npcIds.length === 0) {
        throw new ValidationError(
          "NPC IDs are required",
          { npcIds: "At least one NPC ID is required" },
          { entity: this.serviceName }
        );
      }

      return await this.decisionRepository.findInvolvingNpcs(npcIds, { limit });
    }, "getDecisionsInvolvingNpcs");
  }

  /**
   * Analyze the impact of a decision on the game state
   * This is a simplified implementation for the MVP, would be expanded in a full version
   *
   * @param decisionText - The text of the chosen decision
   * @param baseConsequences - Base consequences provided when recording the decision
   * @returns Enhanced consequences with additional analysis
   */
  private analyzeDecisionImpact(
    decisionText: string,
    baseConsequences: Record<string, any>
  ): Record<string, any> {
    // For the MVP, we'll just use the provided consequences
    // In a more complex implementation, this would analyze the choice text
    // and determine additional effects

    // Simple sentiment analysis as an example of enhancement
    const sentiment = this.analyzeSimpleSentiment(decisionText);

    return {
      ...baseConsequences,
      analyzed: {
        sentiment,
        timestamp: new Date().toISOString(),
        // Additional analysis could be added here
      },
    };
  }

  /**
   * Perform very simple sentiment analysis on decision text
   * This is just an example of how we could enhance the decision data
   * In a real implementation, this would use more sophisticated NLP
   *
   * @param text - The text to analyze
   * @returns Simple sentiment score
   */
  private analyzeSimpleSentiment(text: string): {
    score: number;
    label: string;
  } {
    const positiveWords = [
      "yes",
      "good",
      "agree",
      "accept",
      "help",
      "save",
      "protect",
      "friend",
      "ally",
    ];
    const negativeWords = [
      "no",
      "bad",
      "disagree",
      "reject",
      "attack",
      "abandon",
      "betray",
      "enemy",
      "hostile",
    ];

    const lowercaseText = text.toLowerCase();

    let score = 0;

    // Count positive and negative words
    positiveWords.forEach((word) => {
      if (lowercaseText.includes(word)) score += 1;
    });

    negativeWords.forEach((word) => {
      if (lowercaseText.includes(word)) score -= 1;
    });

    // Determine sentiment label
    let label = "neutral";
    if (score > 0) label = "positive";
    if (score < 0) label = "negative";

    return { score, label };
  }
}

// Export singleton instance for convenience
export const decisionService = new DecisionService(
  new DecisionRepository(),
  new GameStateRepository()
);
