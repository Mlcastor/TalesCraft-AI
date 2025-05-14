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
 * Interface for the AI service layer
 */
export interface AIService {
  /**
   * Generate narrative based on game context and history
   */
  generateNarrative: (
    context: Record<string, any>,
    previousHistory: Array<{
      type: "narrative" | "playerResponse";
      content: string;
    }>,
    config?: PromptConfig
  ) => Promise<AIResponse>;

  /**
   * Generate decisions based on narrative context
   */
  generateDecisions: (
    narrativeContext: string,
    characterState: Record<string, any>,
    worldState: Record<string, any>,
    config?: PromptConfig
  ) => Promise<{
    decisions: Array<{
      text: string;
      consequences?: string;
    }>;
  }>;

  /**
   * Summarize context to reduce token usage
   */
  summarizeContext: (
    context: string,
    maxTokens: number
  ) => Promise<{
    summary: string;
    keyPoints: string[];
  }>;

  /**
   * Analyze player decisions to determine impact
   */
  analyzePlayerDecision: (
    decision: string,
    context: Record<string, any>
  ) => Promise<{
    impact: Record<string, any>;
    suggestedNarrativeDirection: string;
  }>;

  /**
   * Handle errors from AI services
   */
  handleError: (
    error: Error,
    fallbackType: "narrative" | "decisions" | "summary",
    context?: Record<string, any>
  ) => Promise<AIResponse>;
}

/**
 * Prompt building interfaces
 */
export interface PromptBuilder {
  buildNarrativePrompt: (
    context: Record<string, any>,
    history: Array<Record<string, any>>,
    config?: PromptConfig
  ) => string;

  buildDecisionPrompt: (
    narrativeContext: string,
    characterState: Record<string, any>,
    worldState: Record<string, any>,
    config?: PromptConfig
  ) => string;

  buildSummaryPrompt: (context: string, maxTokens: number) => string;

  optimizePrompt: (prompt: string, maxTokens: number) => string;
}

/**
 * Response parsing interfaces
 */
export interface ResponseParser {
  /**
   * Parse a narrative response
   * Unlike the interface definition, the implementation may return additional
   * properties like 'consequences' on decisions
   */
  parseNarrativeResponse: (rawResponse: AIResponse) => {
    text: string;
    entities?: Record<string, any>;
    suggestedDecisions?: Array<{
      text: string;
      consequences?: string; // Added to match implementation
    }>;
  };

  /**
   * Parse a decision response
   */
  parseDecisionResponse: (rawResponse: AIResponse) => Array<{
    text: string;
    consequences?: string;
  }>;

  /**
   * Parse a summary response
   */
  parseSummaryResponse: (rawResponse: AIResponse) => {
    summary: string;
    keyPoints: string[];
  };
}

/**
 * World context information similar to the old implementation
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
 * Character information
 */
export interface Character {
  id?: string;
  name: string;
  backstory?: string;
  traits?: string[];
  inventory?: string[];
  skills?: string[];
  relationships?: Record<string, number>; // NPC name to relationship value (-100 to 100)
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
