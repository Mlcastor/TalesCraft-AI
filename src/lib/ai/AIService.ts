import {
  AIService as AIServiceInterface,
  AIResponse,
  PromptConfig,
  NarrativeMood,
  DangerLevel,
} from "@/types/ai";
import { aiClientAdapter } from "./AIClientAdapter";
import { promptBuilder } from "./PromptBuilder";
import { responseParser } from "./ResponseParser";
import { fallbackHandler } from "./FallbackHandler";
import { logger } from "@/lib/utils/logger";

/**
 * AIService implementation
 * Provides methods for generating narrative content and decisions using AI
 */
export class AIService implements AIServiceInterface {
  /**
   * Generate narrative text and decision options based on game context
   *
   * @param context - Game context including character, location, etc.
   * @param previousHistory - Array of previous narrative elements and player responses
   * @param config - Optional configuration for prompt generation
   * @returns AI response with narrative and decisions
   */
  async generateNarrative(
    context: Record<string, any>,
    previousHistory: Array<{
      type: "narrative" | "playerResponse";
      content: string;
    }>,
    config?: PromptConfig
  ): Promise<AIResponse> {
    try {
      // Log the request
      logger.debug("Generating narrative with AI", {
        context: "ai-service",
        metadata: {
          location: context.location || context.currentLocation,
          characterName: context.characterName || context.characterState?.name,
          historyLength: previousHistory.length,
        },
      });

      // Enrich context with mood and danger levels if available
      const enrichedContext = this.enrichContext(context);

      // Build the prompt
      const { systemPrompt, userPrompt } = promptBuilder.buildNarrativePrompt(
        enrichedContext,
        config
      );

      // Format history as messages
      const messages: Array<{
        role: "system" | "user" | "assistant";
        content: string;
      }> = [{ role: "system", content: systemPrompt }];

      // Add history as messages
      previousHistory.forEach((entry) => {
        if (entry.type === "narrative") {
          messages.push({ role: "assistant", content: entry.content });
        } else {
          messages.push({ role: "user", content: entry.content });
        }
      });

      // Add current context as user message
      messages.push({ role: "user", content: userPrompt });

      // Generate completion with JSON response format
      const aiResponse = await aiClientAdapter.generateChatCompletion(
        messages,
        {
          ...config,
          responseFormat: { type: "json_object" },
        }
      );

      logger.debug("Narrative generated", {
        context: "ai-service",
        metadata: {
          aiResponse,
        },
      });

      return aiResponse;
    } catch (error) {
      logger.error("Error generating narrative", {
        context: "ai-service",
        metadata: {
          error,
          location: context.location || context.currentLocation,
          characterName: context.characterName || context.characterState?.name,
        },
      });

      return this.handleError(
        error instanceof Error ? error : new Error(String(error)),
        "narrative",
        context
      );
    }
  }

  /**
   * Generate decision options based on narrative context
   *
   * @param narrativeContext - Current narrative context
   * @param characterState - Character state information
   * @param worldState - World state information
   * @param config - Optional configuration for prompt generation
   * @returns Object containing decision options
   */
  async generateDecisions(
    narrativeContext: string,
    characterState: Record<string, any>,
    worldState: Record<string, any>,
    config?: PromptConfig
  ): Promise<{
    decisions: Array<{
      text: string;
      consequences?: string;
    }>;
  }> {
    try {
      // Log the request
      logger.debug("Generating decisions with AI", {
        context: "ai-service",
        metadata: {
          narrativeLength: narrativeContext.length,
          characterName: characterState.name,
          location: worldState.currentLocation || "unknown",
        },
      });

      // Enrich states with additional context
      const enrichedCharacterState = this.enrichCharacterState(characterState);
      const enrichedWorldState = this.enrichWorldState(worldState);

      // Build the prompt
      const { systemPrompt, userPrompt } = promptBuilder.buildDecisionPrompt(
        narrativeContext,
        enrichedCharacterState,
        enrichedWorldState,
        config
      );

      // Format as messages
      const messages: Array<{
        role: "system" | "user" | "assistant";
        content: string;
      }> = [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ];

      // Generate completion with JSON response format
      const aiResponse = await aiClientAdapter.generateChatCompletion(
        messages,
        {
          ...config,
          responseFormat: { type: "json_object" },
        }
      );

      // Parse the response
      const decisions = responseParser.parseDecisionResponse(aiResponse);

      return { decisions };
    } catch (error) {
      logger.error("Error generating decisions", {
        context: "ai-service",
        metadata: {
          error,
          narrativeContextLength: narrativeContext.length,
          characterName: characterState.name,
        },
      });

      // Provide fallback decisions
      return {
        decisions: responseParser.parseDecisionResponse(
          fallbackHandler.generateFallbackDecisions(
            error instanceof Error ? error : new Error(String(error))
          )
        ),
      };
    }
  }

  /**
   * Summarize narrative context to reduce token usage
   *
   * @param context - Text to summarize
   * @param maxTokens - Maximum token length for the summary
   * @returns Summary with key points
   */
  async summarizeContext(
    context: string,
    maxTokens: number
  ): Promise<{
    summary: string;
    keyPoints: string[];
  }> {
    try {
      // Log the request
      logger.debug("Summarizing context with AI", {
        context: "ai-service",
        metadata: {
          contextLength: context.length,
          maxTokens,
        },
      });

      // Build the prompt
      const { systemPrompt, userPrompt } =
        promptBuilder.buildSummarizationPrompt(context, maxTokens);

      // Format as messages
      const messages: Array<{
        role: "system" | "user" | "assistant";
        content: string;
      }> = [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ];

      // Generate completion with JSON response format
      const aiResponse = await aiClientAdapter.generateChatCompletion(
        messages,
        {
          maxTokens: Math.min(maxTokens, 1024),
          responseFormat: { type: "json_object" },
        }
      );

      // Parse the response
      return responseParser.parseSummaryResponse(aiResponse);
    } catch (error) {
      logger.error("Error summarizing context", {
        context: "ai-service",
        metadata: {
          error,
          contextLength: context.length,
        },
      });

      // Provide fallback summary
      return responseParser.parseSummaryResponse(
        fallbackHandler.generateFallbackSummary(
          error instanceof Error ? error : new Error(String(error))
        )
      );
    }
  }

  /**
   * Analyze player decision to determine impact
   *
   * @param decision - Player decision text
   * @param context - Game context
   * @returns Analysis of decision impact
   */
  async analyzePlayerDecision(
    decision: string,
    context: Record<string, any>
  ): Promise<{
    impact: Record<string, any>;
    suggestedNarrativeDirection: string;
  }> {
    try {
      // This is a more sophisticated implementation based on the old aiService
      logger.debug("Analyzing player decision", {
        context: "ai-service",
        metadata: {
          decision,
          contextKeys: Object.keys(context),
        },
      });

      // Build a prompt for analysis
      const systemPrompt = `You are an AI assistant analyzing player decisions in a narrative RPG game.
Evaluate the player's decision and determine its impact on the narrative, relationships, and game world.
Respond in JSON format with 'impact' (containing sentiment, relationships, potential consequences) and 'suggestedNarrativeDirection'.`;

      const userPrompt = `Player decision: "${decision}"
Context: ${JSON.stringify(context)}

Analyze this decision and provide impact assessment with suggested narrative direction.`;

      // Format as messages
      const messages = [
        { role: "system" as const, content: systemPrompt },
        { role: "user" as const, content: userPrompt },
      ];

      // Generate completion with JSON response format
      const aiResponse = await aiClientAdapter.generateChatCompletion(
        messages,
        {
          maxTokens: 1024,
          temperature: 0.7,
          responseFormat: { type: "json_object" },
        }
      );

      // Parse the response
      try {
        const parsed = JSON.parse(aiResponse.text);
        return {
          impact: parsed.impact || { sentiment: "neutral" },
          suggestedNarrativeDirection:
            parsed.suggestedNarrativeDirection || "Continue the adventure",
        };
      } catch (parseError) {
        // Fallback to basic sentiment analysis if parsing fails
        return this.basicDecisionAnalysis(decision);
      }
    } catch (error) {
      logger.error("Error analyzing player decision", {
        context: "ai-service",
        metadata: {
          error,
          decision,
        },
      });

      // Provide fallback analysis
      return this.basicDecisionAnalysis(decision);
    }
  }

  /**
   * Handle errors from AI services
   *
   * @param error - Error that occurred
   * @param fallbackType - Type of fallback needed
   * @param context - Optional context information
   * @returns AI response with fallback content
   */
  async handleError(
    error: Error,
    fallbackType: "narrative" | "decisions" | "summary",
    context?: Record<string, any>
  ): Promise<AIResponse> {
    logger.error(`AI service error (${fallbackType})`, {
      context: "ai-service",
      metadata: {
        error,
        fallbackType,
      },
    });

    return fallbackHandler.getFallback(fallbackType, error, context);
  }

  /**
   * Basic decision analysis fallback
   * Uses simple pattern matching for sentiment analysis
   *
   * @param decision - Player decision text
   * @returns Simple decision analysis
   */
  private basicDecisionAnalysis(decision: string): {
    impact: Record<string, any>;
    suggestedNarrativeDirection: string;
  } {
    // Basic sentiment analysis
    const impact: Record<string, any> = {};
    const positiveWords = ["help", "save", "assist", "join", "ally", "friend"];
    const negativeWords = [
      "attack",
      "kill",
      "fight",
      "betray",
      "steal",
      "flee",
    ];

    let sentiment = "neutral";

    // Check for positive sentiment
    if (positiveWords.some((word) => decision.toLowerCase().includes(word))) {
      sentiment = "positive";
    }

    // Check for negative sentiment
    if (negativeWords.some((word) => decision.toLowerCase().includes(word))) {
      sentiment = "negative";
    }

    impact.sentiment = sentiment;

    // Suggest narrative direction based on sentiment
    let suggestedDirection = "Continue the adventure";

    if (sentiment === "positive") {
      suggestedDirection = "Focus on alliance building and positive outcomes";
    } else if (sentiment === "negative") {
      suggestedDirection = "Introduce challenges and consequences";
    }

    return {
      impact,
      suggestedNarrativeDirection: suggestedDirection,
    };
  }

  /**
   * Enrich context with additional information for better narrative generation
   * Mimics the rich context from the old implementation
   *
   * @param context - Original context object
   * @returns Enriched context with additional fields
   */
  private enrichContext(context: Record<string, any>): Record<string, any> {
    if (!context) {
      return {};
    }

    const newContext = { ...context };

    if (!newContext.mood) {
      newContext.mood = NarrativeMood.NEUTRAL;
    }
    if (!newContext.dangerLevel) {
      newContext.dangerLevel = DangerLevel.LOW;
    }

    // Safely access location name for enrichment logic
    const locationName =
      typeof newContext.location === "object" && newContext.location !== null
        ? (newContext.location as { name?: string }).name?.toLowerCase()
        : typeof newContext.location === "string"
        ? newContext.location.toLowerCase()
        : undefined;

    // Example: Infer mood from recent events or character traits
    if (newContext.characterState?.traits?.includes("Anxious")) {
      if (newContext.mood === NarrativeMood.NEUTRAL) {
        newContext.mood = NarrativeMood.TENSE;
      }
    } else if (
      newContext.characterState?.traits?.includes("Brave") &&
      newContext.dangerLevel === DangerLevel.HIGH
    ) {
      if (newContext.mood === NarrativeMood.NEUTRAL) {
        newContext.mood = NarrativeMood.DETERMINED;
      }
    } else if (
      locationName?.includes("creepy") ||
      locationName?.includes("eerie")
    ) {
      if (newContext.mood === NarrativeMood.NEUTRAL) {
        newContext.mood = NarrativeMood.MYSTERIOUS;
      }
    } else if (
      locationName?.includes("battlefield") ||
      locationName?.includes("warzone")
    ) {
      if (newContext.mood === NarrativeMood.NEUTRAL) {
        newContext.mood = NarrativeMood.HOSTILE;
      }
    } else if (
      locationName?.includes("ruins") &&
      newContext.dangerLevel === DangerLevel.MODERATE
    ) {
      if (newContext.mood === NarrativeMood.NEUTRAL) {
        newContext.mood = NarrativeMood.CAUTIOUS;
      }
    } else if (
      locationName?.includes("graveyard") ||
      locationName?.includes("crypt")
    ) {
      if (newContext.mood === NarrativeMood.NEUTRAL) {
        newContext.mood = NarrativeMood.FRIGHTENED;
      }
    } else if (
      locationName?.includes("tavern") ||
      locationName?.includes("inn")
    ) {
      if (newContext.mood === NarrativeMood.NEUTRAL) {
        newContext.mood = NarrativeMood.FRIENDLY;
      }
    } else {
      // Default mood if no specific conditions met and not already set
      if (!newContext.mood) newContext.mood = NarrativeMood.NEUTRAL;
    }

    // Example: Infer danger level from location or recent events
    if (
      locationName?.includes("ruins") ||
      locationName?.includes("lair") ||
      locationName?.includes("stronghold")
    ) {
      if (newContext.dangerLevel === DangerLevel.LOW) {
        newContext.dangerLevel = DangerLevel.MODERATE;
      }
    } else if (
      locationName?.includes("frontline") ||
      locationName?.includes("abyss")
    ) {
      newContext.dangerLevel = DangerLevel.HIGH;
    } else if (
      locationName?.includes("sanctuary") ||
      locationName?.includes("hidden grove")
    ) {
      if (newContext.dangerLevel !== DangerLevel.NONE) {
        // Don't override if explicitly set to NONE
        newContext.dangerLevel = DangerLevel.LOW;
      }
    } else {
      // Default danger level if no specific conditions met and not already set
      if (!newContext.dangerLevel) newContext.dangerLevel = DangerLevel.LOW;
    }

    return newContext;
  }

  /**
   * Enrich character state with additional information
   *
   * @param characterState - Original character state
   * @returns Enriched character state
   */
  private enrichCharacterState(
    characterState: Record<string, any>
  ): Record<string, any> {
    const enriched = { ...characterState };

    // Add character context helpers
    if (!enriched.hasInventoryItem && enriched.inventory) {
      enriched.hasInventoryItem = (item: string) =>
        Array.isArray(enriched.inventory) &&
        enriched.inventory.some((i: string) =>
          i.toLowerCase().includes(item.toLowerCase())
        );
    }

    if (!enriched.hasSkill && enriched.skills) {
      enriched.hasSkill = (skill: string) =>
        Array.isArray(enriched.skills) &&
        enriched.skills.some((s: string) =>
          s.toLowerCase().includes(skill.toLowerCase())
        );
    }

    return enriched;
  }

  /**
   * Enrich world state with additional information
   *
   * @param worldState - Original world state
   * @returns Enriched world state
   */
  private enrichWorldState(
    worldState: Record<string, any>
  ): Record<string, any> {
    const enriched = { ...worldState };

    // Add time of day if not present
    if (!enriched.timeOfDay && enriched.time) {
      enriched.timeOfDay = enriched.time;
    }

    // Add weather mood descriptions if present
    if (enriched.weather) {
      switch (enriched.weather.toLowerCase()) {
        case "rainy":
          enriched.weatherMood = "gloomy and wet";
          break;
        case "sunny":
          enriched.weatherMood = "bright and warm";
          break;
        case "stormy":
          enriched.weatherMood = "violent and threatening";
          break;
        case "cloudy":
          enriched.weatherMood = "overcast and cool";
          break;
        case "foggy":
          enriched.weatherMood = "misty and mysterious";
          break;
      }
    }

    return enriched;
  }
}

// Export singleton for convenience
export const aiService = new AIService();
