/**
 * Server-side API route for AI interactions
 * This solves environment variable access issues by moving AI calls to the server
 */
import { NextRequest, NextResponse } from "next/server";
import {
  AIAgentRole,
  AIResponse,
  GameCharacter,
  Location,
  NarrativeMood,
  DangerLevel,
} from "@/lib/ai/aiService";
import { GroqModel, AIProvider } from "@/lib/ai/aiConfig";
import { Groq } from "groq-sdk";
import { getWorldContextForAI, WorldContext } from "@/lib/ai/worldContext";

// Type for request body
interface AIRequest {
  role: AIAgentRole;
  prompt: string;
  character?: GameCharacter;
  location?: Location;
  worldId?: string;
  locationId?: string;
  context?: Record<string, any>;
}

/**
 * Represents a lore fragment for AI context
 */
interface LoreFragment {
  title: string;
  content: string;
}

/**
 * Server endpoint to handle AI interactions
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const requestData: AIRequest = await request.json();
    const { role, prompt, character, location, worldId, locationId, context } =
      requestData;

    console.log(
      `AI API request received - Role: ${role}, WorldId: ${
        worldId || "none"
      }, LocationId: ${locationId || "none"}`
    );

    // Verify we have a Groq API key in the server environment
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error("Server cannot find GROQ_API_KEY in environment variables");
      return NextResponse.json(
        { error: "API key not configured on server" },
        { status: 500 }
      );
    }

    // Initialize Groq client
    const groq = new Groq({ apiKey });

    // Fetch world context from database if worldId is provided
    let worldContext: WorldContext | null = null;
    let currentLocation = location;
    let relevantLore: LoreFragment[] = [];

    if (worldId) {
      console.log(
        `Fetching world context for worldId: ${worldId}, locationId: ${
          locationId || "none"
        }`
      );
      try {
        worldContext = await getWorldContextForAI(worldId, locationId);
        console.log(`World context loaded: ${worldContext.worldName}`);

        // Use database location if available and no location was provided
        if (worldContext.currentLocation && !currentLocation) {
          console.log(
            `Using database location: ${worldContext.currentLocation.name}`
          );
          currentLocation = worldContext.currentLocation;
        }

        // Use lore from database
        relevantLore = worldContext.relevantLore;
        console.log(
          `Loaded ${relevantLore.length} lore fragments from database`
        );
      } catch (error) {
        console.error("Error fetching world context:", error);
        // Don't fail completely - continue with available data
        // But include a note about the error in the response
        return NextResponse.json({
          text: `The world seems hazy (Error loading world context: ${
            error instanceof Error ? error.message : "Unknown error"
          }). Let's proceed with what we know.`,
          choices: [
            { id: "continue", text: "Continue the adventure" },
            { id: "look_around", text: "Look around carefully" },
          ],
          metadata: {
            mood: NarrativeMood.MYSTERIOUS,
            danger: DangerLevel.LOW,
            worldContextError: true,
          },
        });
      }
    } else {
      console.log("No worldId provided, using default context");
    }

    // Construct the system prompt
    let systemPrompt = "";

    // Generate different system prompts based on agent role
    switch (role) {
      case AIAgentRole.NARRATIVE_DIRECTOR:
        systemPrompt = `You are the Narrative Director for a text-based RPG adventure. 
Your role is to create engaging, descriptive narrative based on the player's actions and the world state.
Describe the environment vividly, engage multiple senses, and present meaningful choices that affect the story.

${
  character
    ? `PLAYER CHARACTER: ${character.name}
- Backstory: ${character.backstory || "Unknown"}
- Appearance: ${character.appearanceDescription || "A mysterious figure"}
- Personality: ${character.personalityTraits?.primary || "Curious"}`
    : ""
}

${
  worldContext
    ? `WORLD: ${worldContext.worldName}
- Description: ${worldContext.worldDescription}`
    : ""
}

${
  currentLocation
    ? `CURRENT LOCATION: ${currentLocation.name}
- Description: ${currentLocation.description}
- Connected Areas: ${
        currentLocation.connectedLocations?.join(", ") || "Unknown"
      }`
    : ""
}

${
  relevantLore.length > 0
    ? `RELEVANT LORE:
${relevantLore.map((lore) => `- ${lore.title}: ${lore.content}`).join("\n")}`
    : ""
}`;
        break;

      case AIAgentRole.NPC_ROLEPLAYER:
        systemPrompt = `You are roleplaying as an NPC in a text-based RPG.
Maintain consistent personality and respond to the player in-character.

${
  worldContext
    ? `WORLD: ${worldContext.worldName}
- Description: ${worldContext.worldDescription}`
    : ""
}

${
  relevantLore.length > 0
    ? `RELEVANT LORE:
${relevantLore.map((lore) => `- ${lore.title}: ${lore.content}`).join("\n")}`
    : ""
}`;
        break;

      case AIAgentRole.LORE_MANAGER:
        systemPrompt = `You are the Lore Manager for a text-based RPG. Your role is to provide relevant world lore and
information based on the player's current situation and discoveries.

${
  worldContext
    ? `WORLD: ${worldContext.worldName}
- Description: ${worldContext.worldDescription}`
    : ""
}

${
  relevantLore.length > 0
    ? `RELEVANT LORE:
${relevantLore.map((lore) => `- ${lore.title}: ${lore.content}`).join("\n")}`
    : ""
}`;
        break;

      default:
        systemPrompt = `You are an AI assistant in a text-based RPG game.`;
    }

    // Add output format instruction
    systemPrompt += `\n\nAlways format your response as valid JSON with these fields:
1. "text": Your main narrative text response
2. "choices": A simple array of 2-4 strings representing player options/choices

Example format:
{
  "text": "The narrative description...",
  "choices": ["First option", "Second option"]
}`;

    // Prepare conversation history if available
    const conversationHistory = context?.conversationHistory || [];

    // Format messages for Groq
    const messages = [
      { role: "system", content: systemPrompt },
      ...conversationHistory.map((msg: any) => ({
        role: msg.role === "npc" ? "assistant" : msg.role,
        content: msg.content,
      })),
      { role: "user", content: prompt },
    ];

    // Call Groq API
    const completion = await groq.chat.completions.create({
      messages: messages as any,
      model: GroqModel.LLAMA_4_MAVRICK,
      temperature: 0.8,
      max_tokens: 1024,
      response_format: { type: "json_object" },
    });

    // Extract and parse the response
    const responseText = completion.choices[0]?.message?.content || "";

    try {
      // Parse JSON response
      const parsedResponse = JSON.parse(responseText);

      // Format the response
      const aiResponse: AIResponse = {
        text: parsedResponse.text || "The narrative continues...",
        choices: Array.isArray(parsedResponse.choices)
          ? parsedResponse.choices.map((choice: string, index: number) => ({
              id: `choice_${index + 1}`,
              text: choice,
            }))
          : [
              { id: "choice_1", text: "Continue exploring" },
              { id: "choice_2", text: "Take a different approach" },
            ],
        metadata: {
          mood: context?.mood || NarrativeMood.NEUTRAL,
          danger: currentLocation?.dangerLevel || DangerLevel.LOW,
        },
      };

      return NextResponse.json(aiResponse);
    } catch (parseError) {
      console.error("Error parsing AI response as JSON:", parseError);
      // Fallback if JSON parsing fails
      return NextResponse.json({
        text: "The narrative takes an unexpected turn... (There was an issue with the storyteller's response.)",
        choices: [
          { id: "retry", text: "Try again" },
          { id: "different", text: "Try something else" },
        ],
        metadata: {
          mood: NarrativeMood.MYSTERIOUS,
          danger: DangerLevel.NONE,
        },
      });
    }
  } catch (error: any) {
    console.error("AI API error:", error);

    // Determine error type and return appropriate response
    let statusCode = 500;
    let errorMessage = "Unknown error occurred";

    if (error.name === "AuthenticationError") {
      statusCode = 401;
      errorMessage = "API authentication failed. Check your API key.";
    } else if (error.name === "RateLimitError") {
      statusCode = 429;
      errorMessage = "Rate limit exceeded. Please try again later.";
    } else if (error.status || error.statusCode) {
      statusCode = error.status || error.statusCode;
      errorMessage = error.message || "API error occurred";
    }

    return NextResponse.json(
      { error: errorMessage, details: error.message },
      { status: statusCode }
    );
  }
}
