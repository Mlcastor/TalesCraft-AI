/**
 * AI Service for handling LLM interactions
 */

// Define specific types for metadata
interface AIResponseMetadata {
  mood?: string;
  danger?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface AIResponse {
  text: string;
  choices?: string[];
  metadata?: AIResponseMetadata;
}

// Define character type
interface GameCharacter {
  name?: string;
  attributes?: Record<string, number>;
  inventory?: string[];
  [key: string]: unknown;
}

export interface AIRequestContext {
  character?: GameCharacter;
  location?: string;
  conversationHistory: Array<{role: string; content: string}>;
  prompt: string;
}

/**
 * Sends a request to the AI LLM and returns the response
 * 
 * @param context - The context information for the AI request
 * @returns Promise with the AI response
 */
export async function getAIResponse(context: AIRequestContext): Promise<AIResponse> {
  // This is a placeholder - will be implemented when integrating with actual LLM API
  return {
    text: "This is a placeholder AI response. The actual LLM integration will be implemented in Day 2.",
    choices: ["Option 1", "Option 2", "Option 3"],
    metadata: {
      mood: "neutral",
      danger: "low"
    }
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
  history: Array<{role: string; content: string}>, 
  maxTokens: number = 4000
): Array<{role: string; content: string}> {
  // Placeholder implementation - will be refined with actual token counting
  if (history.length > 10) {
    return history.slice(history.length - 10);
  }
  return history;
}