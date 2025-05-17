import {
  getAIResponse,
  AIRequestContext,
  ConversationMessage,
  AIAgentRole,
  AIResponseOptions,
  DangerLevel,
} from "@/lib/ai/aiService";
import {
  SimplifiedGameState,
  MVPNarrativeResponse,
  NarrativeLogEntry,
  MVPCharacterState,
  MVPWorldState,
  MVPCharacter,
  MVPWorld,
  MVPLocation,
  MVPLoreFragment,
} from "@/types/mvpTypes";
import { v4 as uuidv4 } from "uuid";
import { logger } from "@/lib/utils/logger";
import { CharacterRepository } from "@/lib/repositories/characterRepository";
import { WorldRepository } from "@/lib/repositories/worldRepository";
import { GameStateRepository } from "@/lib/repositories/gameStateRepository";

export class GameEngine {
  // aiService is used directly via getAIResponse, so no private member needed if not storing an instance.
  private gameStateRepository: GameStateRepository;
  private worldRepository: WorldRepository;
  private characterRepository: CharacterRepository;

  constructor(
    gameStateRepository: GameStateRepository,
    worldRepository: WorldRepository,
    characterRepository: CharacterRepository
    // AIService instance is not passed if using getAIResponse directly
  ) {
    this.gameStateRepository = gameStateRepository;
    this.worldRepository = worldRepository;
    this.characterRepository = characterRepository;
  }

  private buildInitialAIRequestContext(
    location: MVPLocation,
    character: MVPCharacter,
    world: MVPWorld,
    lore: MVPLoreFragment[]
  ): AIRequestContext {
    const initialAssistantMessage = `The adventure begins for ${character.name}. They find themselves in ${location.name}. ${location.description}. What happens next and what can ${character.name} do?`;

    return {
      agentRole: AIAgentRole.NARRATIVE_DIRECTOR,
      playerCharacter: character,
      currentLocation: location,
      worldName: world.name,
      locationName: location.name,
      relevantLore: lore,
      dangerLevel: location.dangerLevel as DangerLevel, // Cast from string
      conversationHistory: [
        {
          role: "assistant",
          content: initialAssistantMessage,
        },
      ],
      prompt: "Describe the initial scene and offer choices.", // Initial prompt for the AI
    };
  }

  private async buildAIRequestContextFromState(
    gameState: SimplifiedGameState,
    playerChoiceText?: string
  ): Promise<AIRequestContext> {
    const character = await this.characterRepository.getCharacterById(
      gameState.characterId
    );
    const world = await this.worldRepository.getWorldById(gameState.worldId);
    const currentLocation = await this.worldRepository.getLocationById(
      gameState.currentLocationId
    );
    const lore = await this.worldRepository.getLoreForWorld(gameState.worldId);

    if (!character || !world || !currentLocation) {
      logger.error("Missing context for building AIRequestContextFromState", {
        context: "game-engine",
        metadata: { gameStateId: gameState.id },
      });
      throw new Error(
        "Failed to build AI context: character, world, or current location not found."
      );
    }

    const conversationHistory: ConversationMessage[] = gameState.narrativeLog
      .slice(-5) // Take last 5 entries for history
      .flatMap((entry) => {
        const messages: ConversationMessage[] = [];
        messages.push({ role: "assistant", content: entry.narrative });
        if (entry.playerChoice) {
          messages.push({ role: "user", content: entry.playerChoice });
        }
        return messages;
      });

    // The last assistant message in history should be the one the player is responding to.
    // The playerChoiceText is the current user prompt.

    return {
      agentRole: AIAgentRole.NARRATIVE_DIRECTOR,
      playerCharacter: character,
      currentLocation: currentLocation,
      worldName: world.name,
      locationName: currentLocation.name,
      relevantLore: lore,
      dangerLevel: currentLocation.dangerLevel as DangerLevel, // Cast from string
      conversationHistory: conversationHistory,
      prompt: playerChoiceText || "Continue the story.", // Player's choice or a generic continuation
    };
  }

  public async initializeGame(
    characterId: string,
    worldId: string,
    sessionId: string
  ): Promise<SimplifiedGameState> {
    logger.debug("Initializing game", {
      context: "game-engine",
      metadata: { characterId, worldId, sessionId },
    });
    const character = await this.characterRepository.getCharacterById(
      characterId
    );
    const world = await this.worldRepository.getWorldById(worldId);
    const startingLocation = await this.worldRepository.getStartingLocation(
      worldId
    );
    const lore = await this.worldRepository.getLoreForWorld(worldId);

    if (!character || !world || !startingLocation) {
      logger.error("Failed to initialize game: missing core data", {
        context: "game-engine",
        metadata: {
          characterId,
          worldId,
          startingLocationId: startingLocation?.id,
        },
      });
      throw new Error(
        "Failed to initialize game: character, world, or starting location not found."
      );
    }

    const initialAIContext = this.buildInitialAIRequestContext(
      startingLocation,
      character,
      world,
      lore
    );
    const aiResponseOptions: AIResponseOptions = { temperature: 0.7 }; // Example option
    const aiResponse = await getAIResponse(initialAIContext, aiResponseOptions);

    const initialCharacterState: MVPCharacterState = {
      id: character.id,
      name: character.name,
      backstory: character.backstory,
      appearance: character.appearanceDescription,
      traits: character.personalityTraits,
      // flags: {}, // Per MVP plan, mvpTypes.ts MVPCharacterState does not have flags
    };

    const initialWorldState: MVPWorldState = {
      id: world.id,
      name: world.name,
      description: world.description || "",
      // globalFlags: {}, // Per MVP plan, mvpTypes.ts MVPWorldState does not have globalFlags
    };

    const firstNarrativeEntry: NarrativeLogEntry = {
      turn: 1,
      narrative: aiResponse.narrativeText,
      // outcome: aiResponse.immediateOutcome, // MVPNarrativeResponse has no immediateOutcome
    };

    // Do not generate ID here; the database will do it.
    const newGameStateData: Omit<SimplifiedGameState, "id"> = {
      // Corrected type
      sessionId,
      characterId,
      worldId,
      turnNumber: 1,
      characterState: initialCharacterState,
      worldState: initialWorldState,
      currentLocationId: startingLocation.id,
      narrativeLog: [firstNarrativeEntry],
      currentChoices: aiResponse.decisions.map((d) => d.text), // Store only text of decisions
      lastModified: new Date(),
      currentObjective: "Begin your adventure!",
    };

    const newGameState = await this.gameStateRepository.createGameState(
      newGameStateData
    );
    logger.debug("Game initialized successfully", {
      context: "game-engine",
      metadata: { gameStateId: newGameState.id },
    });
    return newGameState;
  }

  public async processPlayerDecision(
    gameStateId: string,
    playerChoiceText: string
  ): Promise<SimplifiedGameState> {
    logger.debug("Processing player decision", {
      context: "game-engine",
      metadata: { gameStateId, playerChoiceText },
    });
    const currentGameState = await this.gameStateRepository.getGameStateById(
      gameStateId
    );
    if (!currentGameState) {
      logger.error("Game state not found for processing decision", {
        context: "game-engine",
        metadata: { gameStateId },
      });
      throw new Error("Game state not found.");
    }

    // 1. Update narrative log with player's choice
    const lastEntryIndex = currentGameState.narrativeLog.length - 1;
    if (lastEntryIndex >= 0) {
      currentGameState.narrativeLog[lastEntryIndex].playerChoice =
        playerChoiceText;
    } else {
      // This case should ideally not be reached if game initialized correctly
      logger.warn("Narrative log was empty when adding player choice", {
        context: "game-engine",
        metadata: { gameStateId },
      });
      currentGameState.narrativeLog.push({
        turn: currentGameState.turnNumber,
        narrative: "Error: Previous narrative missing",
        playerChoice: playerChoiceText,
      });
    }

    // 2. Get next narrative from AI
    const aiContext = await this.buildAIRequestContextFromState(
      currentGameState,
      playerChoiceText
    );
    const aiResponseOptions: AIResponseOptions = { temperature: 0.7 }; // Example option
    const aiResponse = await getAIResponse(aiContext, aiResponseOptions);

    // 3. Update GameState
    currentGameState.turnNumber += 1;
    const newNarrativeEntry: NarrativeLogEntry = {
      turn: currentGameState.turnNumber,
      narrative: aiResponse.narrativeText,
      // outcome: aiResponse.immediateOutcome, // MVPNarrativeResponse has no immediateOutcome
    };
    currentGameState.narrativeLog.push(newNarrativeEntry);
    currentGameState.currentChoices = aiResponse.decisions.map((d) => d.text); // Store only text
    currentGameState.lastModified = new Date();

    // Apply outcome from *this* turn's AI response (Deferred for MVP)
    // Example from plan (commented out):
    // if (aiResponse.immediateOutcome?.includes("key")) { // Super simple keyword check
    //     currentGameState.characterState.flags["has_some_key"] = true;
    // }

    const updatedGameState = await this.gameStateRepository.updateGameState(
      currentGameState.id,
      currentGameState
    );
    logger.debug("Player decision processed successfully", {
      context: "game-engine",
      metadata: {
        gameStateId: updatedGameState.id,
        turnNumber: updatedGameState.turnNumber,
      },
    });
    return updatedGameState;
  }
}
