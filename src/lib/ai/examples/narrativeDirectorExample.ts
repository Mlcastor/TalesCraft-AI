/**
 * Example: Using the AI Service for Narrative Direction
 *
 * This example demonstrates how to use the AI service to generate narrative
 * content using the Narrative Director agent.
 */

import {
  MVPCharacter,
  MVPLocation,
  MVPNarrativeResponse,
  MVPWorldState,
} from "@/types/mvpTypes";
import {
  NarrativeMood,
  AIAgentRole,
  DangerLevel,
  getAIResponse,
  AIRequestContext,
  ConversationMessage,
  AIResponseOptions,
} from "../aiService";
import { AIProvider, GroqModel } from "../aiConfig";

/**
 * Create a narrative example player character
 * @returns A sample game character
 */
export function createExampleCharacter(): MVPCharacter {
  return {
    id: "example-character",
    userId: "example-user",
    name: "Aria",
    backstory:
      "A skilled archer from the forest village of Elmwood, seeking adventure.",
    appearanceDescription:
      "Medium height with long brown hair and keen green eyes. Wears light leather armor.",
    personalityTraits: [
      "Curious",
      "Brave",
      "Independent",
      "Impulsive",
      "Stubborn",
    ],
    createdAt: new Date(),
    isActive: true,
  };
}

/**
 * Create an example location
 * @returns A sample location
 */
export function createExampleLocation(): MVPLocation {
  return {
    id: "ancient-ruins",
    name: "Ancient Ruins",
    description:
      "Stone structures covered in moss and vines, with strange symbols carved into the walls. These ruins are rumored to be a passageway to the underworld.",
    connectedLocationIds: ["dark-forest", "hidden-valley"],
    dangerLevel: DangerLevel.MODERATE,
    isStartingLocation: true,
    worldId: "example-world",
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
  playerCharacter?: MVPCharacter,
  currentLocation?: MVPLocation,
  options: {
    temperature?: number;
    maxTokens?: number;
    modelName?: string;
    worldId?: string;
    locationId?: string;
  } = {}
): Promise<MVPNarrativeResponse> {
  // Use provided parameters or defaults
  const character = playerCharacter || createExampleCharacter();
  const location = currentLocation || createExampleLocation();

  // Create initial conversation history
  const conversationHistory: ConversationMessage[] = [
    {
      role: "assistant",
      content: `You stand before ${location.name}, ${
        location.description
          ? location.description.split(".")[0]
          : "details unknown"
      }. The air feels thick with ancient secrets. What would you like to do?`,
    },
  ];

  try {
    const requestContext: AIRequestContext = {
      agentRole: AIAgentRole.NARRATIVE_DIRECTOR,
      playerCharacter: character,
      currentLocation: location,
      worldName: options.worldId || location.worldId,
      locationName: options.locationId || location.name,
      dangerLevel: location.dangerLevel as DangerLevel,
      conversationHistory: conversationHistory,
      prompt: playerPrompt,
    };

    const responseOptions: AIResponseOptions = {
      ...(options.temperature && { temperature: options.temperature }),
      ...(options.maxTokens && { maxTokens: options.maxTokens }),
      ...(options.modelName && { modelName: options.modelName }),
    };

    console.log(
      `[narrativeDirectorExample] Calling getAIResponse with worldName: ${requestContext.worldName}, locationName: ${requestContext.locationName}`
    );

    return await getAIResponse(requestContext, responseOptions);
  } catch (error) {
    console.error("Error generating narrative response:", error);

    // Return a fallback response in case of error
    return {
      narrativeText:
        "The story encountered a brief interruption. (There was an issue connecting to the storyteller.)",
      decisions: [
        { text: "Continue differently", consequences: "Continue differently" },
        { text: "Retry", consequences: "Retry" },
        { text: "Exit", consequences: "Exit" },
      ],
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
  previousResponse: MVPNarrativeResponse,
  playerChoice: number | string,
  playerCharacter: MVPCharacter,
  currentLocation: MVPLocation,
  options: {
    temperature?: number;
    maxTokens?: number;
    modelName?: string;
    worldId?: string;
    locationId?: string;
  } = {}
): Promise<MVPNarrativeResponse> {
  // Determine which choice was selected
  let choiceText = "";

  if (
    typeof playerChoice === "number" &&
    previousResponse.decisions &&
    previousResponse.decisions.length > 0
  ) {
    const index = playerChoice - 1; // Convert from 1-based to 0-based indexing
    if (index >= 0 && index < previousResponse.decisions.length) {
      choiceText = previousResponse.decisions[index].text;
    }
  } else if (typeof playerChoice === "string") {
    choiceText = playerChoice;
  }

  if (!choiceText) {
    throw new Error("Invalid player choice specified");
  }

  // Create conversation history with previous interaction
  const conversationHistory: ConversationMessage[] = [
    {
      role: "assistant",
      content: previousResponse.narrativeText,
    },
  ];

  try {
    const requestContext: AIRequestContext = {
      agentRole: AIAgentRole.NARRATIVE_DIRECTOR,
      playerCharacter: playerCharacter,
      currentLocation: currentLocation,
      worldName: options.worldId || currentLocation.worldId,
      locationName: options.locationId || currentLocation.name,
      dangerLevel: currentLocation.dangerLevel as DangerLevel,
      conversationHistory: conversationHistory,
      prompt: choiceText,
    };

    const responseOptions: AIResponseOptions = {
      ...(options.temperature && { temperature: options.temperature }),
      ...(options.maxTokens && { maxTokens: options.maxTokens }),
      ...(options.modelName && { modelName: options.modelName }),
    };

    console.log(
      `[continueNarrative] Calling getAIResponse with worldName: ${requestContext.worldName}, locationName: ${requestContext.locationName}`
    );

    return await getAIResponse(requestContext, responseOptions);
  } catch (error) {
    console.error("Error continuing narrative:", error);

    // Return a fallback response in case of error
    return {
      narrativeText: `The story pauses momentarily. (There was an issue processing your choice: "${choiceText}")`,
      decisions: [
        { text: "Retry", consequences: "Retry" },
        { text: "Continue differently", consequences: "Continue differently" },
      ],
    };
  }
}

/**
 * Example usage of the narrative generation functions
 */
export async function exampleNarrativeFlow(): Promise<MVPNarrativeResponse[]> {
  const responses: MVPNarrativeResponse[] = [];

  try {
    // Generate initial narrative
    const character = createExampleCharacter();
    const location = createExampleLocation();

    // First interaction
    const initialPrompt = "I examine the strange symbols on the wall.";
    const firstResponse = await generateNarrativeResponse(
      initialPrompt,
      character,
      location,
      { worldId: location.worldId, locationId: location.name }
    );
    responses.push(firstResponse);

    // Continue narrative with player choice
    if (firstResponse.decisions && firstResponse.decisions.length > 0) {
      // Select the first choice
      const secondResponse = await continueNarrative(
        firstResponse,
        1,
        character,
        location,
        { worldId: location.worldId, locationId: location.name }
      );
      responses.push(secondResponse);
    }

    return responses;
  } catch (error) {
    console.error("Error in narrative flow example:", error);
    return responses;
  }
}
