import { AIResponse } from "@/lib/ai/aiService";

/**
 * Represents a single item in the narrative history
 */
export interface NarrativeItem {
  type: "narrative" | "playerResponse";
  content: AIResponse | string;
}
