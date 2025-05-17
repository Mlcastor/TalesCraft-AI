/**
 * AI Integration Types
 *
 * This file contains type definitions for AI service integration.
 */

/**
 * Response structure from AI services
 */
export interface AIResponse {
  text: string;
  tokens: {
    prompt: number;
    completion: number;
    total: number;
  };
  metadata?: Record<string, any>;
}

/**
 * Configuration for AI prompt generation
 */
export interface PromptConfig {
  temperature?: number;
  maxTokens?: number;
  model?: string;
  systemPrompt?: string;
  includeHistory?: boolean;
  contextWindowSize?: number;
  responseFormat?: {
    type: "json_object" | "text";
  };
  maxDecisions?: number; // Maximum number of decision options to generate
}

/**
 * AI Client adapter interface
 * Provides a standardized interface for different AI providers
 */
export interface AIClientAdapter {
  /**
   * Generate a completion using chat-based API
   * This is the preferred method for modern LLMs
   */
  generateChatCompletion: (
    messages: Array<{
      role: "system" | "user" | "assistant";
      content: string;
    }>,
    config?: PromptConfig
  ) => Promise<AIResponse>;
}

/**
 * Context window management for AI
 */
export interface ContextWindow {
  totalTokens: number;
  availableTokens: number;
  usedTokens: number;
  items: Array<{
    content: string;
    tokens: number;
    priority: number;
    timestamp: Date;
    category: "narrative" | "character" | "world" | "system";
  }>;
}

/**
 * World context information
 */
export interface WorldContext {
  worldName: string;
  worldDescription: string;
  currentLocation?: {
    id: string;
    name: string;
    description: string;
    connectedLocations: string[];
    dangerLevel?: string;
  };
  relevantLore: Array<{
    title: string;
    content: string;
  }>;
}

/**
 * Narrative mood types
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
  TENSE = "tense",
  DETERMINED = "determined",
  CAUTIOUS = "cautious",
}

/**
 * Danger level indicators
 */
export enum DangerLevel {
  NONE = "none",
  LOW = "low",
  MODERATE = "moderate",
  HIGH = "high",
  EXTREME = "extreme",
}
