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
}

/**
 * AI Client adapter interface
 */
export interface AIClientAdapter {
  generateCompletion: (
    prompt: string,
    config?: PromptConfig
  ) => Promise<AIResponse>;

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
  generateNarrative: (
    context: Record<string, any>,
    previousHistory: Array<{
      type: "narrative" | "playerResponse";
      content: string;
    }>,
    config?: PromptConfig
  ) => Promise<AIResponse>;

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

  summarizeContext: (
    context: string,
    maxTokens: number
  ) => Promise<{
    summary: string;
    keyPoints: string[];
  }>;

  analyzePlayerDecision: (
    decision: string,
    context: Record<string, any>
  ) => Promise<{
    impact: Record<string, any>;
    suggestedNarrativeDirection: string;
  }>;

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
  parseNarrativeResponse: (rawResponse: AIResponse) => {
    text: string;
    entities?: Record<string, any>;
    suggestedDecisions?: Array<{
      text: string;
    }>;
  };

  parseDecisionResponse: (rawResponse: AIResponse) => Array<{
    text: string;
    consequences?: string;
  }>;

  parseSummaryResponse: (rawResponse: AIResponse) => {
    summary: string;
    keyPoints: string[];
  };
}

/**
 * Fallback handling for AI service
 */
export interface FallbackHandler {
  getGenericNarrative: (context: Record<string, any>) => AIResponse;

  getBasicDecisions: (context: Record<string, any>) => Array<{
    text: string;
  }>;

  getErrorMessage: (error: Error) => string;

  shouldRetry: (error: Error, attemptCount: number) => boolean;
}
