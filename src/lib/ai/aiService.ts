/**
 * AI Service for handling LLM interactions in Tales Craft AI
 */

import { AIProvider, GroqModel } from "./aiConfig";
import {
  MVPCharacter,
  MVPLocation,
  MVPLoreFragment,
  MVPNarrativeResponse,
  MVPWorldState,
} from "@/types/mvpTypes";
import {
  NarrativeMood as SystemNarrativeMood,
  DangerLevel as SystemDangerLevel,
  AIResponse,
  PromptConfig,
} from "@/types/ai";
import { aiClientAdapter } from "@/lib/ai/AIClientAdapter";
import { logger } from "@/lib/utils/logger";

/**
 * Represents the possible AI agent roles in the game
 */
export enum AIAgentRole {
  NARRATIVE_DIRECTOR = "narrativeDirector",
  NPC_ROLEPLAYER = "npcRoleplayer",
  LORE_MANAGER = "loreManager",
}

/**
 * Represents the mood of narrative or NPCs - Now using SystemNarrativeMood from @/types/ai
 */
export { SystemNarrativeMood as NarrativeMood };

/**
 * Represents the danger level in a scene or location - Now using SystemDangerLevel from @/types/ai
 */
export { SystemDangerLevel as DangerLevel };

/**
 * Metadata for AI responses with specific game-relevant information
 */
export interface AIResponseMetadata {
  mood?: SystemNarrativeMood;
  danger?: SystemDangerLevel;
  locationRelevance?: string[];
  npcMentioned?: string[];
  suggestedNextLocations?: string[];
  loreRevealed?: string[];
}

/**
 * Message in the conversation history
 */
export interface ConversationMessage {
  role: "system" | "user" | "assistant" | "npc";
  content: string;
  npcId?: string; // Only for NPC messages
  timestamp?: string;
}

/**
 * Complete context for an AI request
 */
export interface AIRequestContext {
  agentRole: AIAgentRole;
  playerCharacter: MVPCharacter;
  currentNpc?: MVPCharacter; // For NPC_ROLEPLAYER
  currentLocation?: MVPLocation;
  worldName?: string;
  locationName?: string;
  worldState?: MVPWorldState;
  relevantLore?: MVPLoreFragment[];
  dangerLevel?: SystemDangerLevel;
  conversationHistory: ConversationMessage[];
  prompt: string;
}

/**
 * Context history for AI requests
 */
export interface AIContextHistory {
  contextType: string;
  promptTokens: number;
  completionTokens: number;
  promptText?: string;
  completionText?: string;
  timestamp: string;
  relevanceScore?: number;
}

/**
 * Configuration options for AI response generation
 */
export interface AIResponseOptions {
  modelName?: string;
  temperature?: number;
  maxTokens?: number;
  provider?: AIProvider;
  streamResponse?: boolean;
}

/**
 * Get an AI response for the given input
 *
 * @param input The input data for the AI request
 * @param config Configuration options for the AI provider
 * @returns A Promise that resolves to an AIResponse
 */
export async function getAIResponse(
  input: AIRequestContext,
  config: AIResponseOptions = {}
): Promise<MVPNarrativeResponse> {
  try {
    const systemPrompt = getSystemPrompt(input.agentRole, input);
    const messages: Array<{
      role: "system" | "user" | "assistant";
      content: string;
    }> = [
      { role: "system", content: systemPrompt },
      ...input.conversationHistory.map((msg) => ({
        role: msg.role === "npc" ? "assistant" : msg.role,
        content: msg.content,
      })),
      { role: "user", content: input.prompt },
    ];

    const effectivePromptConfig: PromptConfig = {
      ...(config.modelName && { model: config.modelName }),
      ...(typeof config.temperature === "number" && {
        temperature: config.temperature,
      }),
      ...(typeof config.maxTokens === "number" && {
        maxTokens: config.maxTokens,
      }),
    };

    logger.debug("Calling AIClientAdapter.generateChatCompletion", {
      context: "ai-service",
      metadata: {
        agentRole: input.agentRole,
        messageCount: messages.length,
        promptConfig: effectivePromptConfig,
      },
    });

    const adapterResponse: AIResponse =
      await aiClientAdapter.generateChatCompletion(
        messages,
        effectivePromptConfig
      );

    logger.debug("Received response from AIClientAdapter", {
      context: "ai-service",
      metadata: {
        tokens: adapterResponse.tokens,
      },
    });

    return parseAIResponse(adapterResponse.text, input);
  } catch (error) {
    logger.error("Error in getAIResponse calling AIClientAdapter", {
      context: "ai-service",
      metadata: {
        error,
        agentRole: input.agentRole,
      },
    });

    if (process.env.NODE_ENV === "development") {
      return generateMockResponse(
        input,
        AIProvider.GROQ,
        error instanceof Error ? error.message : "Unknown error occurred"
      );
    }

    throw error;
  }
}

/**
 * Generate a mock AI response for development purposes when API keys are missing
 * @param context - The request context
 * @param provider - The AI provider that was attempted
 * @param errorDetails - Optional error details to include in the response
 * @returns A mock AI response
 */
function generateMockResponse(
  context: AIRequestContext,
  provider: AIProvider,
  errorDetails?: string
): MVPNarrativeResponse {
  console.log(`Generating mock response for ${provider} with context:`, {
    agentRole: context.agentRole,
    prompt: context.prompt,
    error: errorDetails || "No API key configured",
  });

  const locationName = context.currentLocation?.name || "this mysterious place";

  const mockText = errorDetails
    ? `[MOCK RESPONSE] You are in ${locationName}. The system encountered an error: ${errorDetails}. This is a development fallback response.`
    : `[MOCK RESPONSE] You are in ${locationName}. The ${provider.toUpperCase()} API key is missing, so this is a development fallback response. Please configure your API key to see actual AI-generated content.`;

  return {
    narrativeText: mockText,
    decisions: [
      {
        text: "Continue exploring (mock choice)",
        consequences: "You continue exploring the area.",
      },
      {
        text: "Check for hidden secrets (mock choice)",
        consequences: "You check for hidden secrets in the area.",
      },
      {
        text: "Return to safety (mock choice)",
        consequences: "You return to safety.",
      },
    ],
  };
}

/**
 * Parse the raw AI response text into a structured AIResponse object
 * @param responseText - The raw response text from the AI
 * @param context - The original request context
 * @returns A structured AI response
 */
function parseAIResponse(
  responseText: string,
  context: AIRequestContext
): MVPNarrativeResponse {
  try {
    const parsedResponse = JSON.parse(responseText);

    const narrativeText =
      parsedResponse.narrativeText ||
      parsedResponse.text ||
      "The narrative continues...";
    const rawChoices = Array.isArray(parsedResponse.decisions)
      ? parsedResponse.decisions
      : Array.isArray(parsedResponse.choices)
      ? parsedResponse.choices
      : [];

    const formattedChoices = rawChoices.map((choice: any, index: number) => {
      if (typeof choice === "string") {
        return { text: choice };
      }
      const { id, ...restOfChoice } = choice;
      return {
        text: restOfChoice.text || `Choice ${index + 1}`,
        ...(restOfChoice.consequences && {
          consequences: restOfChoice.consequences,
        }),
      };
    });

    return {
      narrativeText: narrativeText,
      decisions:
        formattedChoices.length > 0
          ? formattedChoices
          : generateDefaultChoices(),
    };
  } catch (parseError) {
    console.error("Error parsing AI response as JSON:", parseError);

    return {
      narrativeText:
        "The narrative takes an unexpected turn... (There was an issue with the storyteller's response.)",
      decisions: generateDefaultChoices(),
    };
  }
}

/**
 * Generates metadata based on narrative text and context
 *
 * @param narrativeText - The AI-generated narrative text
 * @param context - The AI request context
 * @returns Generated metadata for the response
 */
function generateMetadata(
  narrativeText: string,
  context: AIRequestContext
): AIResponseMetadata {
  const dangerLevel = context.dangerLevel || SystemDangerLevel.LOW;

  let mood = SystemNarrativeMood.NEUTRAL;
  if (
    narrativeText.toLowerCase().includes("danger") ||
    narrativeText.toLowerCase().includes("threat")
  ) {
    mood = SystemNarrativeMood.HOSTILE;
  } else if (
    narrativeText.toLowerCase().includes("mystery") ||
    narrativeText.toLowerCase().includes("strange")
  ) {
    mood = SystemNarrativeMood.MYSTERIOUS;
  } else if (
    narrativeText.toLowerCase().includes("joy") ||
    narrativeText.toLowerCase().includes("happy")
  ) {
    mood = SystemNarrativeMood.JOYFUL;
  }

  const locationRelevance = context.currentLocation
    ? [context.currentLocation.name]
    : [];

  const npcMentioned = context.currentNpc ? [context.currentNpc.name] : [];

  const suggestedNextLocations =
    context.currentLocation?.connectedLocationIds || [];

  return {
    mood,
    danger: dangerLevel,
    locationRelevance,
    npcMentioned,
    suggestedNextLocations,
    loreRevealed: [],
  };
}

/**
 * Generates default choices when none are available
 *
 * @returns Default set of choices
 */
function generateDefaultChoices() {
  return [
    {
      text: "Continue exploring",
    },
    {
      text: "Take a different approach",
    },
  ];
}

/**
 * Extracts narrative text from API response when JSON parsing fails
 *
 * @param responseText - The raw response from the API
 * @returns Extracted narrative text or empty string
 */
function extractPlainTextNarrative(responseText: string): string {
  const narrativeMatch = responseText.match(/(.+?)(?:(?:choice|option)s?:|{)/i);
  if (narrativeMatch && narrativeMatch[1]) {
    return narrativeMatch[1].trim();
  }

  return responseText;
}

/**
 * Maintains the conversation context within token limits
 *
 * @param history - The current conversation history
 * @param maxTokens - Maximum tokens to maintain in history
 * @returns Trimmed conversation history
 */
export function trimConversationContext(
  history: ConversationMessage[],
  maxTokens: number = 4000
): ConversationMessage[] {
  if (history.length > 10) {
    return [history[0], ...history.slice(history.length - 9)];
  }
  return history;
}

/**
 * Formats a system prompt based on the AI agent role and context
 *
 * @param agentRole - The role of the AI agent
 * @param context - Additional context for the prompt
 * @returns Formatted system prompt
 */
export function getSystemPrompt(
  agentRole: AIAgentRole,
  context: Partial<AIRequestContext>
): string {
  let basePrompt = "";
  switch (agentRole) {
    case AIAgentRole.NARRATIVE_DIRECTOR:
      basePrompt = `You are the Narrative Director for a text-based RPG. Your role is to create engaging, 
              descriptive narrative based on the player's actions and the world state. Describe the 
              environment vividly and present meaningful choices that affect the story.
              The response MUST be a JSON object with the following schema:
              {
                "narrativeText": "string (the main narrative description)",
                "decisions": ["string (a concise player decision, max 3-5 words)", "string", "..."]
              }
              Maximum 3 decisions. The narrativeText should be detailed and immersive.
              Do NOT include any introductory phrases like "Okay, here's the JSON:" or markdown code fences.
              The entire response should be ONLY the JSON object.`;
      break;

    case AIAgentRole.NPC_ROLEPLAYER:
      basePrompt = `You are roleplaying as ${
        context.currentNpc?.name || "an NPC"
      }, a character in a text-based RPG. 
              Maintain consistent personality based on the traits: ${JSON.stringify(
                context.currentNpc?.personalityTraits || []
              )}.
              Respond to the player in-character and consider your relationship level: PlaceHolder.
              The response MUST be a JSON object with the following schema:
              {
                "narrativeText": "string (what the NPC says or does)",
                "decisions": ["string (a concise player dialogue option or action, max 3-5 words)", "string", "..."]
              }
              Maximum 3 decisions. The narrativeText should be the NPC's direct speech or actions.
              Do NOT include any introductory phrases like "Okay, here's the JSON:" or markdown code fences.
              The entire response should be ONLY the JSON object.`;
      break;

    case AIAgentRole.LORE_MANAGER:
      basePrompt = `You are the Lore Manager for a text-based RPG. Your role is to provide relevant world lore and
              information based on the player's current situation and discoveries. Keep track of what lore has
              already been revealed and help maintain world consistency.
              The response MUST be a JSON object with the following schema:
              {
                "narrativeText": "string (the lore or information revealed)",
                "decisions": ["string (a concise player option to learn more or react, max 3-5 words)", "string", "..."]
              }
              Maximum 3 decisions. The narrativeText should be purely informational or descriptive lore.
              Do NOT include any introductory phrases like "Okay, here's the JSON:" or markdown code fences.
              The entire response should be ONLY the JSON object.`;
      break;

    default:
      basePrompt = `You are an AI assistant in a text-based RPG game.
              The response MUST be a JSON object with the following schema:
              {
                "narrativeText": "string (your response)",
                "decisions": ["string (a concise player option, max 3-5 words)", "string", "..."]
              }
              Maximum 3 decisions.
              Do NOT include any introductory phrases like "Okay, here's the JSON:" or markdown code fences.
              The entire response should be ONLY the JSON object.`;
      break;
  }
  if (context.worldName) {
    basePrompt += `\n\nWorld: ${context.worldName}.`;
  }
  if (context.locationName) {
    basePrompt += ` Current Location: ${context.locationName}.`;
  }
  if (context.relevantLore && context.relevantLore.length > 0) {
    const loreSummary = context.relevantLore
      .map((l) => `${l.title}: ${l.content.substring(0, 100)}...`)
      .join("\n");
    basePrompt += `\n\nRelevant Lore:\n${loreSummary}`;
  }
  if (context.playerCharacter) {
    basePrompt += `\n\nPlayer Character: ${
      context.playerCharacter.name
    }. Backstory: ${
      context.playerCharacter.backstory || "Not specified"
    }. Personality: ${
      context.playerCharacter.personalityTraits.join(", ") || "Not specified"
    }.`;
  }

  return basePrompt;
}
