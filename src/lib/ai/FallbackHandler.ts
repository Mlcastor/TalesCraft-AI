import { logger } from "@/lib/utils/logger";
import { AIResponse } from "@/types/ai";

/**
 * FallbackHandler class for providing fallback responses
 * Used when AI services are unavailable or return errors
 */
export class FallbackHandler {
  /**
   * Generate a fallback narrative response
   *
   * @param error - Optional error that triggered the fallback
   * @param context - Optional context information
   * @returns AI response with fallback narrative
   */
  generateFallbackNarrative(
    error?: Error,
    context?: Record<string, any>
  ): AIResponse {
    if (error) {
      logger.error("Using fallback narrative due to error", {
        context: "ai-fallback",
        metadata: {
          error,
          originalContext: context
            ? JSON.stringify(context).substring(0, 100) + "..."
            : undefined,
        },
      });
    }

    const fallbackText = JSON.stringify({
      text: "The path ahead seems momentarily unclear. You pause to gather your thoughts and consider your options.",
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
          text: "Try a different approach",
          consequences: "Seek an alternative solution.",
        },
      ],
    });

    return {
      text: fallbackText,
      tokens: {
        prompt: 0,
        completion: 0,
        total: 0,
      },
      metadata: {
        isFallback: true,
        errorMessage: error?.message,
      },
    };
  }

  /**
   * Generate fallback decisions
   *
   * @param error - Optional error that triggered the fallback
   * @param context - Optional context information
   * @returns AI response with fallback decisions
   */
  generateFallbackDecisions(
    error?: Error,
    context?: Record<string, any>
  ): AIResponse {
    if (error) {
      logger.error("Using fallback decisions due to error", {
        context: "ai-fallback",
        metadata: {
          error,
          originalContext: context
            ? JSON.stringify(context).substring(0, 100) + "..."
            : undefined,
        },
      });
    }

    const fallbackText = JSON.stringify({
      decisions: [
        {
          text: "Explore further",
          consequences: "Discover more about your surroundings.",
        },
        {
          text: "Proceed with caution",
          consequences: "Move forward carefully, being alert for dangers.",
        },
        {
          text: "Take a different path",
          consequences: "Try an alternative approach to the situation.",
        },
      ],
    });

    return {
      text: fallbackText,
      tokens: {
        prompt: 0,
        completion: 0,
        total: 0,
      },
      metadata: {
        isFallback: true,
        errorMessage: error?.message,
      },
    };
  }

  /**
   * Generate a fallback summary
   *
   * @param error - Optional error that triggered the fallback
   * @param context - Optional context information
   * @returns AI response with fallback summary
   */
  generateFallbackSummary(
    error?: Error,
    context?: Record<string, any>
  ): AIResponse {
    if (error) {
      logger.error("Using fallback summary due to error", {
        context: "ai-fallback",
        metadata: {
          error,
          originalContext: context
            ? JSON.stringify(context).substring(0, 100) + "..."
            : undefined,
        },
      });
    }

    const fallbackText = JSON.stringify({
      summary:
        "The adventure continues with challenges and opportunities ahead.",
      keyPoints: [
        "Adventure in progress",
        "Character facing challenges",
        "Decisions to be made",
      ],
    });

    return {
      text: fallbackText,
      tokens: {
        prompt: 0,
        completion: 0,
        total: 0,
      },
      metadata: {
        isFallback: true,
        errorMessage: error?.message,
      },
    };
  }

  /**
   * Get a contextually appropriate fallback based on the type
   *
   * @param fallbackType - Type of fallback needed
   * @param error - Optional error that triggered the fallback
   * @param context - Optional context information
   * @returns AI response with appropriate fallback
   */
  getFallback(
    fallbackType: "narrative" | "decisions" | "summary",
    error?: Error,
    context?: Record<string, any>
  ): AIResponse {
    switch (fallbackType) {
      case "narrative":
        return this.generateFallbackNarrative(error, context);
      case "decisions":
        return this.generateFallbackDecisions(error, context);
      case "summary":
        return this.generateFallbackSummary(error, context);
      default:
        return this.generateFallbackNarrative(error, context);
    }
  }
}

// Export singleton for convenience
export const fallbackHandler = new FallbackHandler();
