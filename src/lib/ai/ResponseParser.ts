import {
  AIResponse,
  ResponseParser as ResponseParserInterface,
} from "@/types/ai";
import { logger } from "@/lib/utils/logger";

/**
 * ResponseParser class for parsing AI responses
 * Extracts structured data from AI completions for use in game logic
 */
export class ResponseParser implements ResponseParserInterface {
  /**
   * Parse a narrative response from the AI
   *
   * @param rawResponse - Raw AI response containing narrative text and decisions
   * @returns Parsed narrative with text and decisions
   */
  parseNarrativeResponse(rawResponse: AIResponse): {
    text: string;
    entities?: Record<string, any>;
    suggestedDecisions?: Array<{ text: string }>;
  } {
    try {
      // Try to parse the response as JSON
      const responseText = rawResponse.text.trim();
      let parsed: any;

      try {
        parsed = JSON.parse(responseText);
      } catch (error) {
        // If JSON parsing fails, try to extract from content if it might be wrapped
        if (responseText.includes("{") && responseText.includes("}")) {
          const jsonMatch = responseText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            try {
              parsed = JSON.parse(jsonMatch[0]);
            } catch (innerError) {
              logger.error("Failed to extract JSON from response", {
                context: "ai-response-parser",
                metadata: {
                  error: innerError,
                  responseText: responseText.substring(0, 100) + "...",
                },
              });
              return this.getFallbackNarrativeResponse();
            }
          } else {
            logger.error("No JSON found in response", {
              context: "ai-response-parser",
              metadata: {
                responseText: responseText.substring(0, 100) + "...",
              },
            });
            return this.getFallbackNarrativeResponse();
          }
        } else {
          // If there's no JSON structure, just use the raw text
          logger.warn("Response isn't JSON, using raw text", {
            context: "ai-response-parser",
            metadata: {
              responseText: responseText.substring(0, 100) + "...",
            },
          });
          return {
            text: responseText,
            entities: {},
            suggestedDecisions: [],
          };
        }
      }

      // Extract text from parsed JSON
      const narrativeText = parsed.text || "The adventure continues...";

      // Extract decisions if available
      const decisions = Array.isArray(parsed.decisions)
        ? parsed.decisions.map((d: any) => ({
            text: d.text || "Continue",
            ...(d.consequences ? { consequences: d.consequences } : {}),
          }))
        : [];

      // Basic entity extraction - could be enhanced in future
      const entities = this.extractBasicEntities(narrativeText);

      return {
        text: narrativeText,
        entities,
        suggestedDecisions: decisions,
      };
    } catch (error) {
      logger.error("Error parsing narrative response", {
        context: "ai-response-parser",
        metadata: {
          error,
          responseText: rawResponse.text.substring(0, 100) + "...",
        },
      });
      return this.getFallbackNarrativeResponse();
    }
  }

  /**
   * Parse a decision response from the AI
   *
   * @param rawResponse - Raw AI response containing decision options
   * @returns Array of decision options with text and consequences
   */
  parseDecisionResponse(rawResponse: AIResponse): Array<{
    text: string;
    consequences?: string;
  }> {
    try {
      // Try to parse the response as JSON
      const responseText = rawResponse.text.trim();
      let parsed: any;

      try {
        parsed = JSON.parse(responseText);
      } catch (error) {
        // If JSON parsing fails, try to extract JSON object
        if (responseText.includes("{") && responseText.includes("}")) {
          const jsonMatch = responseText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            try {
              parsed = JSON.parse(jsonMatch[0]);
            } catch (innerError) {
              logger.error("Failed to extract JSON from decision response", {
                context: "ai-response-parser",
                metadata: {
                  error: innerError,
                  responseText: responseText.substring(0, 100) + "...",
                },
              });
              return this.getFallbackDecisions();
            }
          } else {
            return this.getFallbackDecisions();
          }
        } else {
          return this.getFallbackDecisions();
        }
      }

      // Extract decisions if available
      if (Array.isArray(parsed.decisions) && parsed.decisions.length > 0) {
        return parsed.decisions.map((d: any) => ({
          text: d.text || "Continue",
          ...(d.consequences ? { consequences: d.consequences } : {}),
        }));
      } else {
        logger.warn("No decisions found in response", {
          context: "ai-response-parser",
          metadata: {
            responseObject: JSON.stringify(parsed).substring(0, 100) + "...",
          },
        });
        return this.getFallbackDecisions();
      }
    } catch (error) {
      logger.error("Error parsing decision response", {
        context: "ai-response-parser",
        metadata: {
          error,
          responseText: rawResponse.text.substring(0, 100) + "...",
        },
      });
      return this.getFallbackDecisions();
    }
  }

  /**
   * Parse a summary response from the AI
   *
   * @param rawResponse - Raw AI response containing summary and key points
   * @returns Structured summary with key points
   */
  parseSummaryResponse(rawResponse: AIResponse): {
    summary: string;
    keyPoints: string[];
  } {
    try {
      // Try to parse the response as JSON
      const responseText = rawResponse.text.trim();
      let parsed: any;

      try {
        parsed = JSON.parse(responseText);
      } catch (error) {
        // If JSON parsing fails, try to extract JSON object
        if (responseText.includes("{") && responseText.includes("}")) {
          const jsonMatch = responseText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            try {
              parsed = JSON.parse(jsonMatch[0]);
            } catch (innerError) {
              return this.getFallbackSummary();
            }
          } else {
            return this.getFallbackSummary();
          }
        } else {
          // If no JSON structure, just use the first part of text as summary
          const summary = responseText.substring(0, 200);
          return {
            summary,
            keyPoints: [summary.substring(0, 50) + "..."],
          };
        }
      }

      // Extract summary and key points
      const summary = parsed.summary || "Adventure summary not available";

      // Ensure key points is an array
      const keyPoints = Array.isArray(parsed.keyPoints)
        ? parsed.keyPoints
        : typeof parsed.keyPoints === "string"
        ? [parsed.keyPoints]
        : ["No key points available"];

      return {
        summary,
        keyPoints,
      };
    } catch (error) {
      logger.error("Error parsing summary response", {
        context: "ai-response-parser",
        metadata: {
          error,
          responseText: rawResponse.text.substring(0, 100) + "...",
        },
      });
      return this.getFallbackSummary();
    }
  }

  /**
   * Extract basic entities from text using simple rules
   * A more advanced implementation could use NLP techniques
   *
   * @param text - The text to extract entities from
   * @returns Object with extracted entities
   */
  private extractBasicEntities(text: string): Record<string, any> {
    const entities: Record<string, any> = {};

    // Extremely simple location detection (could be enhanced)
    const locationPatterns = [
      /in\s+the\s+([A-Z][a-z]+(\s+[A-Z][a-z]+)*)/,
      /at\s+the\s+([A-Z][a-z]+(\s+[A-Z][a-z]+)*)/,
      /to\s+the\s+([A-Z][a-z]+(\s+[A-Z][a-z]+)*)/,
    ];

    // Try to match locations
    for (const pattern of locationPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        entities.location = match[1];
        break;
      }
    }

    // Simple name detection (could be enhanced)
    const namePattern = /"([A-Z][a-z]+)"|\s([A-Z][a-z]+)\s/g;
    const names = new Set<string>();
    let nameMatch;

    while ((nameMatch = namePattern.exec(text)) !== null) {
      const name = nameMatch[1] || nameMatch[2];
      names.add(name);
    }

    if (names.size > 0) {
      entities.names = Array.from(names);
    }

    return entities;
  }

  /**
   * Fallback narrative response when parsing fails
   */
  private getFallbackNarrativeResponse(): {
    text: string;
    entities?: Record<string, any>;
    suggestedDecisions?: Array<{ text: string; consequences?: string }>;
  } {
    return {
      text: "The path ahead seems momentarily unclear. You pause to gather your thoughts and consider your options.",
      entities: {},
      suggestedDecisions: [
        {
          text: "Wait and observe",
          consequences: "Take time to better understand the situation.",
        },
        {
          text: "Press onward cautiously",
          consequences: "Move forward carefully, being alert for dangers.",
        },
        {
          text: "Try a different approach",
          consequences: "Try an alternative approach to the situation.",
        },
      ],
    };
  }

  /**
   * Fallback decisions when parsing fails
   */
  private getFallbackDecisions(): Array<{
    text: string;
    consequences?: string;
  }> {
    return [
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
    ];
  }

  /**
   * Fallback summary when parsing fails
   */
  private getFallbackSummary(): {
    summary: string;
    keyPoints: string[];
  } {
    return {
      summary:
        "The adventure continues with challenges and opportunities ahead.",
      keyPoints: [
        "Adventure in progress",
        "Character facing challenges",
        "Decisions to be made",
      ],
    };
  }
}

// Export singleton for convenience
export const responseParser = new ResponseParser();
