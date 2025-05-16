import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env.local at the project root
// Ensure this is at the VERY TOP of the file, before other imports that might use environment variables.
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

/**
 * AI Integration Demo
 *
 * This script demonstrates the core functionality of the AI integration.
 * To run this demo:
 * 1. Ensure you have a Groq API key in your .env.local file
 * 2. Run this script with ts-node or a similar tool
 *
 * Note: This is for demonstration purposes only and would not be used
 * in the production application.
 */

import { aiService } from "./AIService";
import { responseParser } from "./ResponseParser";
import { logger } from "../utils/logger";

/**
 * Demonstrates the narrative generation capability
 */
async function demoNarrativeGeneration() {
  logger.info("=== Demo: Narrative Generation ===", {
    context: "ai-demo",
  });

  // Game context
  const context = {
    characterName: "Elara",
    location: "The Enchanted Forest",
    characterState: {
      name: "Elara",
      health: 80,
      inventory: ["Sword", "Health Potion"],
      traits: ["Determined", "Curious"],
    },
    worldState: {
      time: "Night",
      weather: "Rainy",
      danger: "Medium",
    },
  };

  // Previous narrative history with explicit types
  const previousHistory: Array<{
    type: "narrative" | "playerResponse";
    content: string;
  }> = [
    {
      type: "narrative",
      content:
        "You enter the Enchanted Forest, its ancient trees looming overhead. The air is thick with mist, and strange sounds echo in the distance.",
    },
    {
      type: "playerResponse",
      content:
        "I'll proceed cautiously and look for signs of civilization or a safe place to rest.",
    },
  ];

  try {
    logger.info("Generating narrative...", {
      context: "ai-demo",
    });

    // Generate narrative
    const aiResponse = await aiService.generateNarrative(
      context,
      previousHistory
    );

    // Parse the response
    const parsedResponse = responseParser.parseNarrativeResponse(aiResponse);

    // Output the results
    logger.info("Narrative generated successfully", {
      context: "ai-demo",
    });

    console.log("\n=== Generated Narrative ===");
    console.log(parsedResponse.text);

    console.log("\n=== Suggested Decisions ===");
    parsedResponse.suggestedDecisions?.forEach((decision, index) => {
      console.log(`${index + 1}. ${decision.text}`);
      // Type guard to check if consequences exists on the decision object
      if (
        decision &&
        typeof decision === "object" &&
        "consequences" in decision
      ) {
        console.log(`   Consequences: ${decision["consequences"]}`);
      }
    });

    // Show token usage
    console.log("\n=== Token Usage ===");
    console.log(`Prompt: ${aiResponse.tokens.prompt}`);
    console.log(`Completion: ${aiResponse.tokens.completion}`);
    console.log(`Total: ${aiResponse.tokens.total}`);
  } catch (error) {
    logger.error("Error in narrative demo", {
      context: "ai-demo",
      metadata: { error },
    });
    console.error("Demo failed with error:", error);
  }
}

/**
 * Demonstrates the decision generation capability
 */
async function demoDecisionGeneration() {
  logger.info("=== Demo: Decision Generation ===", {
    context: "ai-demo",
  });

  // Current narrative context
  const narrativeContext =
    "Elara stands at the edge of a murky swamp. Strange lights flicker in the distance, and she can hear whispers coming from the depths of the fog. Her instincts tell her there's danger ahead, but also potentially valuable information or treasures. Night is falling, and she needs to decide her next move carefully.";

  // Character and world state
  const characterState = {
    name: "Elara",
    health: 65,
    energy: 50,
    inventory: ["Sword", "Magic Amulet", "Torch"],
    skills: ["Tracking", "Herbalism"],
  };

  const worldState = {
    time: "Dusk",
    currentLocation: "Whispering Swamp",
    knownLocations: ["Enchanted Forest", "Whispering Swamp", "Mountain Pass"],
    questObjectives: [
      "Find the ancient artifact",
      "Locate the missing villager",
    ],
  };

  try {
    logger.info("Generating decisions...", {
      context: "ai-demo",
    });

    // Generate decisions
    const { decisions } = await aiService.generateDecisions(
      narrativeContext,
      characterState,
      worldState
    );

    // Output the results
    logger.info("Decisions generated successfully", {
      context: "ai-demo",
    });

    console.log("\n=== Generated Decision Options ===");
    decisions.forEach((decision, index) => {
      console.log(`${index + 1}. ${decision.text}`);
      // Type guard to check if consequences exists on the decision object
      if (
        decision &&
        typeof decision === "object" &&
        "consequences" in decision
      ) {
        console.log(`   Consequences: ${decision["consequences"]}`);
      }
    });
  } catch (error) {
    logger.error("Error in decision demo", {
      context: "ai-demo",
      metadata: { error },
    });
    console.error("Demo failed with error:", error);
  }
}

/**
 * Demonstrates the context summarization capability
 */
async function demoContextSummarization() {
  logger.info("=== Demo: Context Summarization ===", {
    context: "ai-demo",
  });

  // Long context to summarize
  const longContext = `
Elara's journey began three days ago when she left the village of Oakvale after receiving a mysterious letter from her long-lost uncle. The letter spoke of an ancient family heirloom hidden in the ruins of Castle Dreadmoor, which lay beyond the Enchanted Forest and the Whispering Swamp.

On her first day, Elara traveled through the rolling hills and farmlands, encountering a merchant named Torvald who warned her about bandits on the road ahead. She chose to take a less-traveled path through the woods, avoiding the bandits but spending an extra half-day navigating the dense forest.

By the evening of the first day, she reached the edge of the Enchanted Forest, where she met an old hermit named Mira who offered her shelter for the night. Mira told Elara about the forest's magical properties and how the trees themselves sometimes moved to confuse travelers. She gave Elara a magical amulet to help guide her way.

On the second day, Elara ventured deep into the Enchanted Forest. The amulet glowed whenever she strayed from the correct path. By midday, she encountered a group of forest sprites who initially played tricks on her but became friendly when she shared her food with them. They revealed a secret shortcut through the forest and warned her about a corrupted area of the swamp ahead where dark magic had twisted the natural order.

That evening, she came across an injured wolf caught in a hunter's trap. Despite potential danger, she freed the wolf, who then followed her for the rest of her journey through the forest. She named him Shadow.

On the morning of the third day, Elara and Shadow reached the edge of the Whispering Swamp. They discovered an abandoned hunter's cabin where Elara found supplies and a journal detailing strange sightings in the swamp. The journal mentioned lights that lured travelers to their doom and whispers that drove people mad.

By midday, they had carefully navigated the edges of the swamp, avoiding the deepest and most dangerous parts. They encountered a traveler named Darian who was searching for his sister, who had disappeared in the swamp a week earlier. Elara promised to keep an eye out for any signs of her.

As dusk approached on the third day, Elara and Shadow now stand at a particularly treacherous part of the swamp. Strange lights flicker in the distance, and whispers seem to come from all directions. The path ahead is unclear, and night is falling quickly. Castle Dreadmoor should be just beyond this swamp, according to her map.
`;

  try {
    logger.info("Summarizing context...", {
      context: "ai-demo",
    });

    // Generate summary
    const summary = await aiService.summarizeContext(longContext, 200);

    // Output the results
    logger.info("Context summarized successfully", {
      context: "ai-demo",
    });

    console.log("\n=== Context Summary ===");
    console.log(summary.summary);

    console.log("\n=== Key Points ===");
    summary.keyPoints.forEach((point, index) => {
      console.log(`${index + 1}. ${point}`);
    });
  } catch (error) {
    logger.error("Error in summarization demo", {
      context: "ai-demo",
      metadata: { error },
    });
    console.error("Demo failed with error:", error);
  }
}

/**
 * Demonstrates the decision analysis capability
 */
async function demoDecisionAnalysis() {
  logger.info("=== Demo: Decision Analysis ===", {
    context: "ai-demo",
  });

  // Player decision and context
  const decision =
    "I'll help Darian search for his sister, even though it means delaying my quest and risking the dangerous parts of the swamp.";

  const context = {
    characterName: "Elara",
    currentLocation: "Whispering Swamp",
    questObjective: "Reach Castle Dreadmoor to find family heirloom",
    npcRelationships: {
      Darian: "Neutral",
      Shadow: "Companion",
    },
  };

  try {
    logger.info("Analyzing decision...", {
      context: "ai-demo",
    });

    // Analyze decision
    const analysis = await aiService.analyzePlayerDecision(decision, context);

    // Output the results
    logger.info("Decision analyzed successfully", {
      context: "ai-demo",
    });

    console.log("\n=== Decision Impact ===");
    Object.entries(analysis.impact).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });

    console.log("\n=== Suggested Narrative Direction ===");
    console.log(analysis.suggestedNarrativeDirection);
  } catch (error) {
    logger.error("Error in decision analysis demo", {
      context: "ai-demo",
      metadata: { error },
    });
    console.error("Demo failed with error:", error);
  }
}

/**
 * Run all demos sequentially
 */
async function runAllDemos() {
  console.log("\n==================================");
  console.log("     AI INTEGRATION DEMO");
  console.log("==================================\n");

  console.log("This demo illustrates the core AI integration features.");
  console.log(
    "You should have a GROQ_API_KEY in your .env.local file to run this successfully.\n"
  );

  try {
    await demoNarrativeGeneration();
    console.log("\n----------------------------------\n");

    await demoDecisionGeneration();
    console.log("\n----------------------------------\n");

    await demoContextSummarization();
    console.log("\n----------------------------------\n");

    await demoDecisionAnalysis();

    console.log("\n==================================");
    console.log("     DEMO COMPLETED");
    console.log("==================================\n");
  } catch (error) {
    console.error("Demo suite failed:", error);
  }
}

// Uncomment to run the demo
runAllDemos();

// Export demo functions for individual use
export {
  demoNarrativeGeneration,
  demoDecisionGeneration,
  demoContextSummarization,
  demoDecisionAnalysis,
  runAllDemos,
};
