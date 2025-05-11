/**
 * Example: Using the AI Service for Narrative Direction
 *
 * This example demonstrates how to use the AI service to generate narrative
 * content using the Narrative Director agent.
 */

import {
  AIAgentRole,
  AIResponse,
  GameCharacter,
  Location,
  NarrativeMood,
  DangerLevel,
  getAIResponse,
} from "../aiService";
import { AIProvider, GroqModel } from "../aiConfig";

/**
 * Example function showing how to generate a narrative response
 */
export async function generateNarrativeExample(): Promise<AIResponse> {
  // Create a simple player character
  const playerCharacter: GameCharacter = {
    name: "Aria",
    backstory:
      "A skilled archer from the forest village of Elmwood, seeking adventure.",
    appearanceDescription:
      "Medium height with long brown hair and keen green eyes. Wears light leather armor.",
    personalityTraits: {
      primary: "Curious",
      secondary: ["Brave", "Independent"],
      flaws: ["Impulsive", "Stubborn"],
      motivations: ["Discover the truth about her missing brother"],
    },
  };

  // Create a location
  const currentLocation: Location = {
    id: "ancient-ruins",
    name: "Ancient Ruins",
    description:
      "Stone structures covered in moss and vines, with strange symbols carved into the walls. This ruins are rumored to be a passageway to the underworld.",
    connectedLocations: ["dark-forest", "hidden-valley"],
    dangerLevel: DangerLevel.MODERATE,
    discoveredLore: [],
  };

  // Sample conversation history
  const conversationHistory = [
    {
      role: "system" as const,
      content:
        "You are the narrative director for an adventure in ancient ruins.",
    },
    {
      role: "assistant" as const,
      content:
        "You stand before the entrance to the ruins, ancient stone structures looming above you. The air is thick with mystery and the scent of damp earth. What would you like to do?",
    },
    {
      role: "user" as const,
      content: "I want to examine the symbols on the walls.",
    },
  ];

  // User prompt
  const prompt =
    "I run my fingers over the strange symbols, trying to understand their meaning.";

  // Generate AI response
  try {
    console.log("Sending request to AI service...");
    console.log("Context includes location:", currentLocation.name);

    const response = await getAIResponse(
      {
        agentRole: AIAgentRole.NARRATIVE_DIRECTOR,
        playerCharacter,
        currentLocation,
        conversationHistory,
        prompt,
      },
      {
        provider: AIProvider.GROQ,
        modelName: GroqModel.MIXTRAL_8X7B,
        temperature: 0.8,
        maxTokens: 800,
      }
    );

    console.log(
      "Received AI response with choice count:",
      response.choices?.length
    );
    return response;
  } catch (error) {
    console.error("Error generating narrative:", error);
    throw error;
  }
}

/**
 * Show how to use the response in the application
 */
export function demonstrateNarrativeResponse(response: AIResponse): void {
  // Display the narrative text
  console.log("\n=== NARRATIVE TEXT ===");
  console.log(response.text);

  // Display choices - these have been formatted from simple strings to full choice objects
  if (response.choices && response.choices.length > 0) {
    console.log("\n=== PLAYER CHOICES ===");
    response.choices.forEach((choice, index) => {
      console.log(`${index + 1}. ${choice.text} (ID: ${choice.id})`);
    });
  }

  // Display metadata - this was generated programmatically, not from the AI
  if (response.metadata) {
    console.log("\n=== AUTO-GENERATED METADATA ===");
    console.log(`Mood: ${response.metadata.mood}`);
    console.log(`Danger Level: ${response.metadata.danger}`);

    if (
      response.metadata.locationRelevance &&
      response.metadata.locationRelevance.length > 0
    ) {
      console.log("\nRelevant Locations:");
      response.metadata.locationRelevance.forEach((location) =>
        console.log(`- ${location}`)
      );
    }

    if (
      response.metadata.suggestedNextLocations &&
      response.metadata.suggestedNextLocations.length > 0
    ) {
      console.log("\nPossible Next Locations:");
      response.metadata.suggestedNextLocations.forEach((location) =>
        console.log(`- ${location}`)
      );
    }

    if (
      response.metadata.npcMentioned &&
      response.metadata.npcMentioned.length > 0
    ) {
      console.log("\nNPCs Involved:");
      response.metadata.npcMentioned.forEach((npc) => console.log(`- ${npc}`));
    }
  }
}

/**
 * Execute the example (can be called from a test environment)
 */
export async function runNarrativeExample(): Promise<void> {
  try {
    console.log("=== NARRATIVE GENERATION EXAMPLE ===");
    console.log("Generating narrative response with Groq...");
    const response = await generateNarrativeExample();
    demonstrateNarrativeResponse(response);
    console.log("\n=== EXAMPLE COMPLETE ===");
  } catch (error) {
    console.error("Failed to run narrative example:", error);
  }
}
