/**
 * AI Service for handling LLM interactions in Tales Craft AI
 */

import { Groq } from "groq-sdk";
import {
  AIProvider,
  GroqModel,
  getProviderConfig,
  isProviderConfigured,
} from "./aiConfig";
import { debugEnvironmentVariables } from "./debugEnv";

/**
 * Represents the possible AI agent roles in the game
 */
export enum AIAgentRole {
  NARRATIVE_DIRECTOR = "narrativeDirector",
  NPC_ROLEPLAYER = "npcRoleplayer",
  LORE_MANAGER = "loreManager",
}

/**
 * Represents the mood of narrative or NPCs
 */
export enum NarrativeMood {
  FRIENDLY = "friendly",
  HOSTILE = "hostile",
  NEUTRAL = "neutral",
  MYSTERIOUS = "mysterious",
  FRIGHTENED = "frightened",
  JOYFUL = "joyful",
  MELANCHOLIC = "melancholic",
  SUSPICIOUS = "suspicious",
}

/**
 * Represents the danger level in a scene or location
 */
export enum DangerLevel {
  NONE = "none",
  LOW = "low",
  MODERATE = "moderate",
  HIGH = "high",
  EXTREME = "extreme",
}

/**
 * Metadata for AI responses with specific game-relevant information
 */
export interface AIResponseMetadata {
  mood?: NarrativeMood;
  danger?: DangerLevel;
  locationRelevance?: string[];
  npcMentioned?: string[];
  loreRevealed?: string[];
  suggestedNextLocations?: string[];
  [key: string]: string | string[] | number | boolean | undefined;
}

/**
 * Standard response structure from any AI agent
 */
export interface AIResponse {
  text: string;
  choices?: Array<{
    id: string;
    text: string;
    consequence?: string;
  }>;
  metadata?: AIResponseMetadata;
}

/**
 * Character personality traits
 */
export interface PersonalityTraits {
  primary?: string;
  secondary?: string[];
  flaws?: string[];
  motivations?: string[];
}

/**
 * Game character including player character and NPCs
 */
export interface GameCharacter {
  id?: string;
  name: string;
  backstory?: string;
  appearanceDescription?: string;
  personalityTraits?: PersonalityTraits;
  relationshipWithPlayer?: number; // -100 to 100 scale
  currentLocation?: string;
  [key: string]: unknown;
}

/**
 * World location information
 */
export interface Location {
  id: string;
  name: string;
  description: string;
  connectedLocations: string[];
  currentNpcs?: string[];
  dangerLevel?: DangerLevel;
  discoveredLore?: string[];
}

/**
 * Previously made decision for context
 */
export interface PreviousDecision {
  decisionPointId: string;
  context: string;
  playerChoice: number;
  consequences: Record<string, any>;
  relatedNpcIds?: string[];
  location?: string;
  timestamp: string;
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
  playerCharacter: GameCharacter;
  currentNpc?: GameCharacter; // For NPC_ROLEPLAYER
  currentLocation?: Location;
  worldState?: {
    discoveredLocations: string[];
    timeOfDay?: string;
    currentQuest?: string;
  };
  relevantLore?: Array<{
    title: string;
    content: string;
  }>;
  previousDecisions?: PreviousDecision[];
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
): Promise<AIResponse> {
  // For backward compatibility, continue logging if API key is properly configured
  const isConfigured = isProviderConfigured();
  if (!isConfigured) {
    console.warn(
      "AI Provider is not properly configured. Attempting to use server-side API endpoint."
    );
  }

  try {
    // Use the server-side API endpoint
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: input.agentRole,
        prompt: input.prompt,
        character: input.playerCharacter,
        location: input.currentLocation,
        context: {
          conversationHistory: input.conversationHistory,
          mood: input.currentLocation?.dangerLevel || DangerLevel.LOW,
          temperature: config.temperature || 0.7,
          maxTokens: config.maxTokens || 1024,
          modelName: config.modelName || GroqModel.LLAMA_4_MAVRICK,
        },
      }),
    });

    if (!response.ok) {
      // Handle error response
      const errorData = await response.json().catch(() => ({}));
      const errorMessage =
        errorData.error ||
        `API error: ${response.status} ${response.statusText}`;
      console.error("AI response error:", errorMessage);

      if (process.env.NODE_ENV === "development") {
        return generateMockResponse(
          input,
          config.provider || AIProvider.GROQ,
          errorMessage
        );
      }

      throw new Error(errorMessage);
    }

    // Parse response
    const aiResponse = await response.json();
    return parseAIResponse(aiResponse, input);
  } catch (error) {
    console.error("Error in getAIResponse:", error);

    if (process.env.NODE_ENV === "development") {
      return generateMockResponse(
        input,
        config.provider || AIProvider.GROQ,
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
): AIResponse {
  console.log(`Generating mock response for ${provider} with context:`, {
    agentRole: context.agentRole,
    prompt: context.prompt,
    error: errorDetails || "No API key configured",
  });

  // Get location name if available
  const locationName = context.currentLocation?.name || "this mysterious place";

  // Create an appropriate mock message based on whether error details are provided
  const mockText = errorDetails
    ? `[MOCK RESPONSE] You are in ${locationName}. The system encountered an error: ${errorDetails}. This is a development fallback response.`
    : `[MOCK RESPONSE] You are in ${locationName}. The ${provider.toUpperCase()} API key is missing, so this is a development fallback response. Please configure your API key to see actual AI-generated content.`;

  return {
    text: mockText,
    choices: [
      { id: "mock-1", text: "Continue exploring (mock choice)" },
      { id: "mock-2", text: "Check for hidden secrets (mock choice)" },
      { id: "mock-3", text: "Return to safety (mock choice)" },
    ],
    metadata: {
      mood: NarrativeMood.NEUTRAL,
      danger: DangerLevel.NONE,
      isMockResponse: true,
      mockReason: errorDetails || "Missing API key",
    },
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
): AIResponse {
  try {
    // Parse the JSON response - should be valid JSON since we used json_object format
    const parsedResponse = JSON.parse(responseText);

    // Extract text and raw choices
    const narrativeText = parsedResponse.text || "The narrative continues...";
    const rawChoices = Array.isArray(parsedResponse.choices)
      ? parsedResponse.choices
      : [];

    // Generate properly formatted choices
    const formattedChoices = rawChoices.map(
      (choice: string, index: number) => ({
        id: `choice_${index + 1}`,
        text: choice,
      })
    );

    // Generate metadata programmatically based on context
    const metadata = generateMetadata(narrativeText, context);

    // Return the properly formatted AIResponse
    return {
      text: narrativeText,
      choices:
        formattedChoices.length > 0
          ? formattedChoices
          : generateDefaultChoices(),
      metadata: metadata,
    };
  } catch (parseError) {
    console.error("Error parsing AI response as JSON:", parseError);

    // Fallback if JSON parsing fails - this should be rare with response_format: json_object
    return {
      text: "The narrative takes an unexpected turn... (There was an issue with the storyteller's response.)",
      choices: generateDefaultChoices(),
      metadata: generateMetadata("", context),
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
  // Get danger level from context if available
  const dangerLevel = context.currentLocation?.dangerLevel || DangerLevel.LOW;

  // Determine mood based on narrative content (simplified logic)
  let mood = NarrativeMood.NEUTRAL;
  if (
    narrativeText.toLowerCase().includes("danger") ||
    narrativeText.toLowerCase().includes("threat")
  ) {
    mood = NarrativeMood.HOSTILE;
  } else if (
    narrativeText.toLowerCase().includes("mystery") ||
    narrativeText.toLowerCase().includes("strange")
  ) {
    mood = NarrativeMood.MYSTERIOUS;
  } else if (
    narrativeText.toLowerCase().includes("joy") ||
    narrativeText.toLowerCase().includes("happy")
  ) {
    mood = NarrativeMood.JOYFUL;
  }

  // Extract location relevance
  const locationRelevance = context.currentLocation
    ? [context.currentLocation.name]
    : [];

  // Extract NPC mentions if an NPC is present
  const npcMentioned = context.currentNpc ? [context.currentNpc.name] : [];

  // Use connected locations for suggested next locations
  const suggestedNextLocations =
    context.currentLocation?.connectedLocations || [];

  return {
    mood,
    danger: dangerLevel,
    locationRelevance,
    npcMentioned,
    suggestedNextLocations,
    loreRevealed: [], // Can be populated with more sophisticated logic in the future
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
      id: "choice_1",
      text: "Continue exploring",
    },
    {
      id: "choice_2",
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
  // First try to extract just the narrative part if there seems to be other content
  const narrativeMatch = responseText.match(/(.+?)(?:(?:choice|option)s?:|{)/i);
  if (narrativeMatch && narrativeMatch[1]) {
    return narrativeMatch[1].trim();
  }

  // Otherwise return the whole text
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
  // Placeholder implementation - will be refined with actual token counting
  if (history.length > 10) {
    // Keep the first message (usually system prompt) and the most recent ones
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
  switch (agentRole) {
    case AIAgentRole.NARRATIVE_DIRECTOR:
      return `You are the Narrative Director for a text-based RPG. Your role is to create engaging, 
              descriptive narrative based on the player's actions and the world state. Describe the 
              environment vividly and present meaningful choices that affect the story.`;

    case AIAgentRole.NPC_ROLEPLAYER:
      return `You are roleplaying as ${
        context.currentNpc?.name
      }, a character in a text-based RPG. 
              Maintain consistent personality based on the traits: ${JSON.stringify(
                context.currentNpc?.personalityTraits
              )}.
              Respond to the player in-character and consider your relationship level: ${
                context.currentNpc?.relationshipWithPlayer
              }.`;

    case AIAgentRole.LORE_MANAGER:
      return `You are the Lore Manager for a text-based RPG. Your role is to provide relevant world lore and
              information based on the player's current situation and discoveries. Keep track of what lore has
              already been revealed and help maintain world consistency.`;

    default:
      return `You are an AI assistant in a text-based RPG game.`;
  }
}
