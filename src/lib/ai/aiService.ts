/**
 * AI Service for handling LLM interactions in Tales Craft AI
 */

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
  playerChoice: string;
  consequences: string;
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
 * Sends a request to the AI LLM and returns the response
 *
 * @param context - The context information for the AI request
 * @returns Promise with the AI response
 */
export async function getAIResponse(
  context: AIRequestContext
): Promise<AIResponse> {
  // This is a placeholder - will be implemented when integrating with actual LLM API
  return {
    text: "This is a placeholder AI response. The actual LLM integration will be implemented later.",
    choices: [
      {
        id: "option1",
        text: "Continue exploring this area",
        consequence: "You might discover hidden treasures.",
      },
      {
        id: "option2",
        text: "Talk to the mysterious stranger",
        consequence: "You might learn valuable information.",
      },
      {
        id: "option3",
        text: "Move to the next location",
        consequence: "You'll progress in your journey.",
      },
    ],
    metadata: {
      mood: NarrativeMood.MYSTERIOUS,
      danger: DangerLevel.LOW,
      locationRelevance: ["ancient ruins", "forgotten temple"],
      npcMentioned: ["village elder", "mysterious stranger"],
      loreRevealed: ["ancient civilization"],
    },
  };
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
