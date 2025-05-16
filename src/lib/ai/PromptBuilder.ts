import { PromptConfig, NarrativeMood, DangerLevel } from "@/types/ai";
import { logger } from "@/lib/utils/logger";

/**
 * PromptBuilder class for constructing AI prompts
 * Provides templates for different narrative and decision generation use cases
 */
export class PromptBuilder {
  /**
   * Build a narrative generation prompt
   *
   * @param context - Game context including character, location, etc.
   * @param config - Optional configuration for prompt generation
   * @returns System prompt and user prompt text
   */
  buildNarrativePrompt(
    context: Record<string, any>,
    config?: PromptConfig
  ): {
    systemPrompt: string;
    userPrompt: string;
  } {
    const characterName =
      context.characterName || context.characterState?.name || "Adventurer";

    // --- Enhanced Location Handling ---
    let locationString = "Unknown location";
    let locationDetailsForLog: any = { used: locationString };

    if (context.location && typeof context.location === "object") {
      const locObj = context.location as {
        name?: string;
        description?: string;
        id?: string;
      };
      locationString = locObj.name || locObj.id || "Unnamed Area";
      if (locObj.description) {
        locationString += ` (${locObj.description})`;
      }
      locationDetailsForLog = {
        id: locObj.id,
        name: locObj.name,
        description: locObj.description,
        derivedString: locationString,
      };
    } else if (
      context.currentLocation &&
      typeof context.currentLocation === "string"
    ) {
      locationString = context.currentLocation;
      locationDetailsForLog = {
        used: locationString,
        source: "context.currentLocation",
      };
    }
    // --- End Enhanced Location Handling ---

    const mood = context.mood || NarrativeMood.NEUTRAL;
    const dangerLevel = context.dangerLevel || DangerLevel.LOW;

    // Extract NPCs if available
    const npcsPresent =
      context.npcsPresent ||
      (context.worldState?.npcs ? context.worldState.npcs : []);

    // Extract relevant lore if available
    const relevantLore = context.relevantLore || [];

    // Create a more sophisticated system prompt with style guidance
    const systemPrompt =
      config?.systemPrompt ||
      `You are the Narrative Director for a text-based RPG adventure.
Your task is to create engaging, descriptive narrative based on the player's actions and the world state.

CHARACTER: ${characterName}
LOCATION: ${locationString}
MOOD: ${mood}
DANGER LEVEL: ${dangerLevel}
${
  npcsPresent.length > 0
    ? `NPCs PRESENT: ${npcsPresent
        .map((npc: any) => npc.name || npc)
        .join(", ")}`
    : ""
}

WRITING STYLE:
- Create immersive, atmospheric descriptions that engage the player's senses
- ${
        mood === NarrativeMood.MYSTERIOUS
          ? "Use mysterious, enigmatic language with ambiguous descriptions"
          : mood === NarrativeMood.FRIGHTENED
          ? "Create tension and fear through short sentences and ominous descriptions"
          : mood === NarrativeMood.HOSTILE
          ? "Use harsh, threatening language and emphasize danger"
          : mood === NarrativeMood.FRIENDLY
          ? "Create a warm, welcoming atmosphere with comfortable descriptions"
          : "Maintain a balanced narrative tone appropriate to the situation"
      }
- ${
        dangerLevel === DangerLevel.HIGH || dangerLevel === DangerLevel.EXTREME
          ? "Emphasize urgency and danger throughout the narrative"
          : dangerLevel === DangerLevel.MODERATE
          ? "Include subtle hints of potential threats or complications"
          : "Create a relatively peaceful atmosphere while maintaining interest"
      }
- Adapt the narrative to reflect player's past decisions
- Use vivid, sensory language to bring the world to life

IMPORTANT:
Return ONLY valid JSON with the following structure:
{
  "text": "Your narrative text here...",
  "decisions": [
    { "text": "Decision option 1", "consequences": "Brief hint about outcome" },
    { "text": "Decision option 2", "consequences": "Brief hint about outcome" },
    { "text": "Decision option 3", "consequences": "Brief hint about outcome" }
  ]
}`;

    // Build more detailed user prompt based on context
    let userPrompt = `I'm currently in ${locationString}.`;

    // Add character details
    if (context.characterState) {
      userPrompt += `\n\nMy character: ${JSON.stringify(
        context.characterState,
        null,
        2
      )}`;
    }

    // Add world details
    if (context.worldState) {
      userPrompt += `\n\nWorld state: ${JSON.stringify(
        context.worldState,
        null,
        2
      )}`;
    }

    // Add relevant lore if available
    if (relevantLore.length > 0) {
      userPrompt += `\n\nRelevant lore:`;
      relevantLore.forEach((lore: any) => {
        if (lore.title && lore.content) {
          userPrompt += `\n- ${lore.title}: ${lore.content}`;
        }
      });
    }

    // Add weather description if available
    if (context.worldState?.weather) {
      userPrompt += `\n\nThe weather is ${context.worldState.weather}${
        context.weatherMood ? ` - ${context.weatherMood}` : ""
      }.`;
    }

    // Add time of day if available
    if (context.worldState?.timeOfDay || context.worldState?.time) {
      userPrompt += `\n\nIt is currently ${
        context.worldState?.timeOfDay || context.worldState?.time
      }.`;
    }

    // Add history if available from context.recentHistory (short-term memory from NarrativeContextManager)
    if (
      context.recentHistory &&
      Array.isArray(context.recentHistory) &&
      context.recentHistory.length > 0
    ) {
      userPrompt += "\n\nRecent events:";
      context.recentHistory.forEach((entry: any) => {
        userPrompt += `\n- ${
          entry.type === "playerResponse" ? "I decided to" : "Then,"
        } ${entry.content}`;
      });
    }

    // Add specific instruction
    userPrompt += `\n\nWhat happens next? Generate the narrative and decision options.`;

    logger.debug("Built narrative prompt", {
      context: "ai-prompt-builder",
      metadata: {
        characterName,
        locationProcessed: locationDetailsForLog,
        locationStringUsed: locationString,
        fullContextReceived: {
          character: context.character,
          location: context.location,
          world: context.world,
          npcs: context.npcs,
          recentHistory: context.recentHistory,
        },
        mood,
        dangerLevel,
        promptLength: systemPrompt.length + userPrompt.length,
        "user-prompt": userPrompt,
        "system-prompt": systemPrompt,
      },
    });

    return {
      systemPrompt,
      userPrompt,
    };
  }

  /**
   * Build a decision generation prompt
   *
   * @param narrativeContext - Current narrative context
   * @param characterState - Character state information
   * @param worldState - World state information
   * @param config - Optional configuration for prompt generation
   * @returns System prompt and user prompt text
   */
  buildDecisionPrompt(
    narrativeContext: string,
    characterState: Record<string, any>,
    worldState: Record<string, any>,
    config?: PromptConfig
  ): {
    systemPrompt: string;
    userPrompt: string;
  } {
    const characterName = characterState.name || "Adventurer";
    const location = worldState.currentLocation || "Unknown location";

    // Extract skills and inventory if available
    const skills = characterState.skills || [];
    const inventory = characterState.inventory || [];

    const systemPrompt =
      config?.systemPrompt ||
      `You are an AI assistant for a text-based RPG game.
Your task is to generate meaningful choices for the player based on the narrative context.
Each choice should include possible consequences to help the player make informed decisions.

CHARACTER: ${characterName}
LOCATION: ${location}
${skills.length > 0 ? `SKILLS: ${skills.join(", ")}` : ""}
${inventory.length > 0 ? `INVENTORY: ${inventory.join(", ")}` : ""}

DECISION GUIDELINES:
1. Create choices that meaningfully branch the narrative
2. Ensure choices align with the character's abilities and inventory items
3. Include a mix of safe and risky options with different potential outcomes
4. Consider environmental factors in the current location
5. Reference skills the character has when relevant to choices
6. Balance immediate solutions with long-term strategic options

IMPORTANT:
Return ONLY valid JSON with the following structure:
{
  "decisions": [
    { "text": "Decision option 1", "consequences": "Brief hint about outcome" },
    { "text": "Decision option 2", "consequences": "Brief hint about outcome" },
    { "text": "Decision option 3", "consequences": "Brief hint about outcome" }
  ]
}`;

    // Build user prompt with more details
    const userPrompt = `Narrative context: ${narrativeContext}

Character state: 
${Object.entries(characterState)
  .filter(([key]) => typeof characterState[key] !== "function") // Filter out function helpers
  .map(([key, value]) => `- ${key}: ${JSON.stringify(value)}`)
  .join("\n")}

World state:
${Object.entries(worldState)
  .map(([key, value]) => `- ${key}: ${JSON.stringify(value)}`)
  .join("\n")}

Generate ${config?.maxDecisions || 3}-${
      config?.maxDecisions ? config.maxDecisions + 1 : 4
    } meaningful player choices based on this situation.`;

    logger.debug("Built decision prompt", {
      context: "ai-prompt-builder",
      metadata: {
        narrativeContextLength: narrativeContext.length,
        characterName,
        location,
        promptLength: systemPrompt.length + userPrompt.length,
      },
    });

    return {
      systemPrompt,
      userPrompt,
    };
  }

  /**
   * Build a context summarization prompt
   *
   * @param context - Text to summarize
   * @param maxTokens - Maximum token length for summary
   * @returns System prompt and user prompt text
   */
  buildSummarizationPrompt(
    context: string,
    maxTokens: number
  ): {
    systemPrompt: string;
    userPrompt: string;
  } {
    const systemPrompt = `You are an AI assistant that summarizes narrative text for a text-based RPG game.
Condense the provided narrative history while preserving all key information.
Focus on important plot points, character interactions, and decision outcomes.

SUMMARY GUIDELINES:
1. Keep the summary concise, no more than ${maxTokens} tokens
2. Preserve key character names, locations, and events
3. Highlight critical decisions and their consequences
4. Maintain chronological order of important events
5. Identify recurring themes or patterns in the narrative
6. Focus on information that impacts future gameplay decisions

IMPORTANT:
Return ONLY valid JSON with the following structure:
{
  "summary": "Concise summary of the narrative history...",
  "keyPoints": ["Key point 1", "Key point 2", "Key point 3"]
}`;

    const userPrompt = `Please summarize the following narrative history:

${context}`;

    logger.debug("Built summarization prompt", {
      context: "ai-prompt-builder",
      metadata: {
        originalContextLength: context.length,
        maxTokens,
      },
    });

    return {
      systemPrompt,
      userPrompt,
    };
  }
}

// Export singleton for convenience
export const promptBuilder = new PromptBuilder();
