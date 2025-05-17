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
  LLAMA_4_MAVRICK = "meta-llama/llama-4-maverick-17b-128e-instruct",
  LLAMA_3_8B = "llama3-8b-8192",
  LLAMA_3_70B = "llama3-70b-8192",
  GEMMA_7B = "gemma-7b-it",
}

/**
 * Safely gets environment variables, with debug logs in development
 */
function getEnvVar(key: string, defaultValue: string = ""): string {
  const value = process.env[key] || defaultValue;

  // In development, log whether we found the key (without revealing the value)
  if (process.env.NODE_ENV === "development") {
    console.log(`[ENV CONFIG] ${key} is ${value ? "set" : "not set"}`);
  }

  return value;
}

/**
 * Default configuration for AI providers
 */
const defaultProviderConfig: Record<AIProvider, AIProviderConfig> = {
  [AIProvider.GROQ]: {
    apiKey: getEnvVar("GROQ_API_KEY"),
    defaultModel: GroqModel.LLAMA_4_MAVRICK,
    maxTokens: 1024,
    temperature: 0.8,
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
  const isConfigured = Boolean(config.apiKey && config.apiKey.trim() !== "");

  if (process.env.NODE_ENV === "development" && !isConfigured) {
    console.warn(
      `[CONFIG WARNING] ${provider} API key is not properly configured.`
    );
    console.warn(
      `Make sure you have GROQ_API_KEY set in your .env.local file.`
    );
  }

  return isConfigured;
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
