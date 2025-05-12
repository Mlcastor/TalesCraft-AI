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
} from "../aiService";
import { AIProvider, GroqModel } from "../aiConfig";

/**
 * Create a narrative example player character
 * @returns A sample game character
 */
export function createExampleCharacter(): GameCharacter {
  return {
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
}

/**
 * Create an example location
 * @returns A sample location
 */
export function createExampleLocation(): Location {
  return {
    id: "ancient-ruins",
    name: "Ancient Ruins",
    description:
      "Stone structures covered in moss and vines, with strange symbols carved into the walls. These ruins are rumored to be a passageway to the underworld.",
    connectedLocations: ["dark-forest", "hidden-valley"],
    dangerLevel: DangerLevel.MODERATE,
    discoveredLore: [],
  };
}

/**
 * Generate a narrative response for the specified context
 *
 * @param playerPrompt - The player's action or question
 * @param playerCharacter - The player character (defaults to example character if not provided)
 * @param currentLocation - The current location (defaults to example location if not provided)
 * @param options - Optional configuration for the AI request
 * @returns Promise with the AI response
 */
export async function generateNarrativeResponse(
  playerPrompt: string,
  playerCharacter?: GameCharacter,
  currentLocation?: Location,
  options: {
    temperature?: number;
    maxTokens?: number;
    modelName?: string;
    worldId?: string;
    locationId?: string;
  } = {}
): Promise<AIResponse> {
  // Use provided parameters or defaults
  const character = playerCharacter || createExampleCharacter();
  const location = currentLocation || createExampleLocation();

  // Create initial conversation history
  const conversationHistory = [
    {
      role: "system" as const,
      content: `You are the Narrative Director for a text-based RPG adventure in ${location.name}.`,
    },
    {
      role: "assistant" as const,
      content: `You stand before ${location.name}, ${
        location.description.split(".")[0]
      }. The air feels thick with ancient secrets. What would you like to do?`,
    },
  ];

  try {
    // Call the server-side API instead of directly using getAIResponse
    console.log(
      `[narrativeDirectorExample] Making API request with worldId: ${
        options.worldId || "none"
      }, locationId: ${options.locationId || "none"}`
    );
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: AIAgentRole.NARRATIVE_DIRECTOR,
        prompt: playerPrompt,
        character: character,
        location: location,
        worldId: options.worldId,
        locationId: options.locationId,
        context: {
          conversationHistory,
          mood: NarrativeMood.NEUTRAL,
          temperature: options.temperature || 0.8,
          maxTokens: options.maxTokens || 1024,
          modelName: options.modelName || GroqModel.LLAMA_4_MAVRICK,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.error || response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error generating narrative response:", error);

    // Return a fallback response in case of error
    return {
      text: "The story encountered a brief interruption. (There was an issue connecting to the storyteller.)",
      choices: [
        { id: "retry", text: "Try again" },
        { id: "continue", text: "Continue differently" },
      ],
      metadata: {
        mood: NarrativeMood.MYSTERIOUS,
        danger: DangerLevel.NONE,
      },
    };
  }
}

/**
 * Generate a continuing narrative based on a previous response
 *
 * @param previousResponse - The previous AI response
 * @param playerChoice - The player's chosen option (index or text)
 * @param playerCharacter - The player character
 * @param currentLocation - The current location
 * @param options - Optional configuration for the AI request
 * @returns Promise with the next AI response
 */
export async function continueNarrative(
  previousResponse: AIResponse,
  playerChoice: number | string,
  playerCharacter: GameCharacter,
  currentLocation: Location,
  options: {
    temperature?: number;
    maxTokens?: number;
    modelName?: string;
    worldId?: string;
    locationId?: string;
  } = {}
): Promise<AIResponse> {
  // Determine which choice was selected
  let choiceText = "";

  if (
    typeof playerChoice === "number" &&
    previousResponse.choices &&
    previousResponse.choices.length > 0
  ) {
    const index = playerChoice - 1; // Convert from 1-based to 0-based indexing
    if (index >= 0 && index < previousResponse.choices.length) {
      choiceText = previousResponse.choices[index].text;
    }
  } else if (typeof playerChoice === "string") {
    choiceText = playerChoice;
  }

  if (!choiceText) {
    throw new Error("Invalid player choice specified");
  }

  // Create conversation history with previous interaction
  const conversationHistory = [
    {
      role: "system" as const,
      content: `You are the Narrative Director for a text-based RPG adventure in ${currentLocation.name}.`,
    },
    {
      role: "assistant" as const,
      content: previousResponse.text,
    },
    {
      role: "user" as const,
      content: choiceText,
    },
  ];

  try {
    // Call the server-side API
    console.log(
      `[continueNarrative] Making API request with worldId: ${
        options.worldId || "none"
      }, locationId: ${options.locationId || "none"}`
    );
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: AIAgentRole.NARRATIVE_DIRECTOR,
        prompt: choiceText,
        character: playerCharacter,
        location: currentLocation,
        worldId: options.worldId,
        locationId: options.locationId,
        context: {
          conversationHistory,
          mood: previousResponse.metadata?.mood || NarrativeMood.NEUTRAL,
          temperature: options.temperature || 0.8,
          maxTokens: options.maxTokens || 1024,
          modelName: options.modelName || GroqModel.LLAMA_4_MAVRICK,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.error || response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error continuing narrative:", error);

    // Return a fallback response in case of error
    return {
      text: `The story pauses momentarily. (There was an issue processing your choice: "${choiceText}")`,
      choices: [
        { id: "retry", text: "Try the same choice again" },
        { id: "different", text: "Try a different approach" },
      ],
      metadata: {
        mood: NarrativeMood.MYSTERIOUS,
        danger: DangerLevel.NONE,
      },
    };
  }
}

/**
 * Example usage of the narrative generation functions
 */
export async function exampleNarrativeFlow(): Promise<AIResponse[]> {
  const responses: AIResponse[] = [];

  try {
    // Generate initial narrative
    const character = createExampleCharacter();
    const location = createExampleLocation();

    // First interaction
    const initialPrompt = "I examine the strange symbols on the wall.";
    const firstResponse = await generateNarrativeResponse(
      initialPrompt,
      character,
      location
    );
    responses.push(firstResponse);

    // Continue narrative with player choice
    if (firstResponse.choices && firstResponse.choices.length > 0) {
      // Select the first choice
      const secondResponse = await continueNarrative(
        firstResponse,
        1, // Choose the first option
        character,
        location,
        {} // Pass empty options object
      );
      responses.push(secondResponse);
    }

    return responses;
  } catch (error) {
    console.error("Error in narrative flow example:", error);
    return responses;
  }
}
