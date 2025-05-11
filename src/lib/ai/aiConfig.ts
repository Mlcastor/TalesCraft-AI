/**
 * AI Configuration and Provider Settings
 * This file contains configuration settings for AI providers used in Tales Craft AI
 */

/**
 * Available AI model providers
 */
export enum AIProvider {
  GROQ = "groq",
  // Future providers can be added here
}

/**
 * Configuration settings for AI providers
 */
interface AIProviderConfig {
  apiKey: string;
  defaultModel: string;
  maxTokens: number;
  temperature: number;
}

/**
 * Groq model options
 */
export enum GroqModel {
  MIXTRAL_8X7B = "mixtral-8x7b-32768",
  LLAMA_3_8B = "llama3-8b-8192",
  LLAMA_3_70B = "llama3-70b-8192",
  GEMMA_7B = "gemma-7b-it",
}

/**
 * Default configuration for AI providers
 */
const defaultProviderConfig: Record<AIProvider, AIProviderConfig> = {
  [AIProvider.GROQ]: {
    apiKey: process.env.GROQ_API_KEY || "",
    defaultModel: GroqModel.MIXTRAL_8X7B,
    maxTokens: 1000,
    temperature: 0.7,
  },
};

/**
 * Returns configuration for a specific AI provider
 * @param provider - The AI provider to get configuration for
 * @returns Configuration for the specified provider
 */
export function getProviderConfig(
  provider: AIProvider = AIProvider.GROQ
): AIProviderConfig {
  return defaultProviderConfig[provider];
}

/**
 * Validates that the API key for a provider is available
 * @param provider - The AI provider to validate
 * @returns True if API key is configured, false otherwise
 */
export function isProviderConfigured(
  provider: AIProvider = AIProvider.GROQ
): boolean {
  const config = getProviderConfig(provider);
  return Boolean(config.apiKey);
}

/**
 * Gets a model to use based on the provider and optional model preference
 * @param provider - The AI provider
 * @param modelPreference - Optional specific model to use
 * @returns The model to use
 */
export function getModelToUse(
  provider: AIProvider = AIProvider.GROQ,
  modelPreference?: string
): string {
  const config = getProviderConfig(provider);
  return modelPreference || config.defaultModel;
}
