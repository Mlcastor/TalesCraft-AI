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
 * Sends a request to the AI LLM and returns the response
 *
 * @param context - The context information for the AI request
 * @param options - Configuration options for the request
 * @returns Promise with the AI response
 */
export async function getAIResponse(
  context: AIRequestContext,
  options: AIResponseOptions = {}
): Promise<AIResponse> {
  try {
    // Get provider configuration
    const provider = options.provider || AIProvider.GROQ;

    // Check if provider is configured
    if (!isProviderConfigured(provider)) {
      throw new Error(
        `AI provider ${provider} is not properly configured. Missing API key.`
      );
    }

    const providerConfig = getProviderConfig(provider);

    // Initialize the Groq client
    const groq = new Groq({
      apiKey: providerConfig.apiKey,
    });

    // Get system prompt based on agent role
    const systemPrompt = getSystemPrompt(context.agentRole, context);

    // Prepare conversation history for the model
    const trimmedHistory = trimConversationContext(context.conversationHistory);

    // Format conversation history for Groq
    const messages = [
      { role: "system", content: systemPrompt },
      ...trimmedHistory.map((msg) => ({
        role: msg.role === "npc" ? "assistant" : msg.role, // Map "npc" to "assistant" for LLM
        content: msg.content,
      })),
      { role: "user", content: context.prompt },
    ];

    // Construct a simplified output format instruction
    const formatInstruction = `
    Important: Format your response in JSON with these fields:
    1. "text": Your main narrative text response
    2. "choices": A simple array of 2-4 strings representing player options/choices

    Example format:
    {
      "text": "The narrative description...",
      "choices": ["First option", "Second option"]
    }

    Do not include any other fields or explanations outside this JSON structure.`;

    // Add the formatting instruction to the user's last message
    messages[messages.length - 1].content += `\n\n${formatInstruction}`;

    // Call Groq API with the prepared messages
    const completion = await groq.chat.completions.create({
      messages: messages as any, // Type assertion for compatibility
      model: options.modelName || providerConfig.defaultModel,
      temperature: options.temperature ?? providerConfig.temperature,
      max_tokens: options.maxTokens ?? providerConfig.maxTokens,
    });

    // Extract the response text
    const responseText = completion.choices[0]?.message?.content || "";

    try {
      // Try to parse the JSON response
      const jsonStart = responseText.indexOf("{");
      const jsonEnd = responseText.lastIndexOf("}");

      if (jsonStart >= 0 && jsonEnd > jsonStart) {
        const jsonStr = responseText.substring(jsonStart, jsonEnd + 1);
        const parsedResponse = JSON.parse(jsonStr);

        // Extract text and raw choices
        const narrativeText =
          parsedResponse.text || "The narrative continues...";
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
      }
    } catch (parseError) {
      console.error("Error parsing AI response as JSON:", parseError);
    }

    // Fallback if JSON parsing fails
    return {
      text:
        extractPlainTextNarrative(responseText) || "The narrative continues...",
      choices: generateDefaultChoices(),
      metadata: generateMetadata("", context),
    };
  } catch (error) {
    console.error("Error calling AI API:", error);

    // Graceful error handling with fallback response
    return {
      text: "As you proceed on your journey, the path ahead seems momentarily unclear... (There was an issue connecting to the storyteller. Please try again shortly.)",
      choices: [
        {
          id: "retry",
          text: "Try again",
        },
        {
          id: "wait",
          text: "Wait a moment",
        },
      ],
      metadata: {
        mood: NarrativeMood.MYSTERIOUS,
        danger: DangerLevel.NONE,
      },
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
