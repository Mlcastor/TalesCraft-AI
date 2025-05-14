import { Groq } from "groq-sdk";
import { AIClientAdapter, AIResponse, PromptConfig } from "@/types/ai";
import { logger } from "@/lib/utils/logger";

/**
 * GroqAdapter implementation of AIClientAdapter
 * Handles communication with the Groq API
 */
export class GroqAdapter implements AIClientAdapter {
  private client: Groq;
  private defaultModel = "mixtral-8x7b-32768";

  /**
   * Create a new GroqAdapter instance
   */
  constructor() {
    this.client = new Groq({
      apiKey: process.env.GROQ_API_KEY || "",
    });

    // Log configuration status in development
    if (process.env.NODE_ENV === "development") {
      const apiKey = process.env.GROQ_API_KEY;
      logger.debug(
        `Groq API configured: ${Boolean(apiKey && apiKey.length > 0)}`
      );
    }
  }

  /**
   * Generate a chat completion using Groq's chat API
   *
   * @param messages - Array of messages in the chat
   * @param config - Optional configuration
   * @returns A Promise resolving to an AIResponse
   */
  async generateChatCompletion(
    messages: Array<{
      role: "system" | "user" | "assistant";
      content: string;
    }>,
    config?: PromptConfig
  ): Promise<AIResponse> {
    try {
      logger.debug("Generating chat completion with Groq", {
        context: "ai-client",
        metadata: {
          messageCount: messages.length,
          model: config?.model || this.defaultModel,
        },
      });

      // For narrative generation, we default to JSON responses
      // unless specifically configured otherwise
      const responseFormat = config?.responseFormat || { type: "json_object" };

      const response = await this.client.chat.completions.create({
        model: config?.model || this.defaultModel,
        messages,
        max_tokens: config?.maxTokens || 1024,
        temperature: config?.temperature || 0.7,
        response_format: responseFormat,
      });

      return {
        text: response.choices[0]?.message?.content || "",
        tokens: {
          prompt: response.usage?.prompt_tokens || 0,
          completion: response.usage?.completion_tokens || 0,
          total: response.usage?.total_tokens || 0,
        },
      };
    } catch (error) {
      logger.error("Error in Groq chat completion", {
        context: "ai-client",
        metadata: {
          error,
          messageCount: messages.length,
        },
      });
      throw error;
    }
  }
}

// Export default instance for convenience
export const aiClientAdapter = new GroqAdapter();
