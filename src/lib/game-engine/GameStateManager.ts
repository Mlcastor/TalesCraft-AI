import type { GameState } from "@/types/database";
import { sessionManager } from "./SessionManager";

// Default initial game state
const DEFAULT_INITIAL_STATE = {
  currentLocation: "village_square",
  narrativeContext:
    "You find yourself in the central square of a small village, bustling with activity.",
  characterState: {
    health: 100,
    stamina: 100,
    inventory: [],
    activeQuests: [],
    completedQuests: [],
    experience: 0,
    level: 1,
    stats: {
      strength: 10,
      dexterity: 10,
      intelligence: 10,
      charisma: 10,
    },
  },
  worldState: {
    timeOfDay: "morning",
    weather: "clear",
    discoveredLocations: ["village_square"],
    completedEvents: [],
    npcRelationships: {},
  },
  aiContext: {
    conversationHistory: [],
    playerBehaviorTags: [],
    narrativeThemes: ["adventure", "discovery"],
  },
};

/**
 * GameStateManager is responsible for managing game state on the client side.
 * It should not directly interact with the database.
 */
export class GameStateManager {
  private currentGameState: GameState | null = null;
  private characterId: string | null = null;
  private sessionId: string | null = null;

  /**
   * Initialize the game state manager
   *
   * @param characterId - Character ID (optional)
   * @param sessionId - Session ID (optional)
   */
  constructor(
    characterId: string | null = null,
    sessionId: string | null = null
  ) {
    this.characterId = characterId;
    this.sessionId = sessionId;
  }

  /**
   * Set the character ID for the game state manager
   *
   * @param characterId - The ID of the character to associate with this game state manager
   */
  setCharacterId(characterId: string): void {
    this.characterId = characterId;
  }

  /**
   * Set the session ID for the game state manager
   *
   * @param sessionId - The ID of the session to associate with this game state manager
   */
  setSessionId(sessionId: string): void {
    this.sessionId = sessionId;
  }

  /**
   * Get the current game state
   *
   * @returns The current game state or null if no state is set
   */
  getCurrentGameState(): GameState | null {
    return this.currentGameState;
  }

  /**
   * Set the current game state
   *
   * @param gameState - The game state to set as current
   */
  setCurrentGameState(gameState: GameState | null): void {
    this.currentGameState = gameState;
  }

  /**
   * Get the default initial state
   *
   * @returns The default initial state
   */
  getDefaultInitialState(): typeof DEFAULT_INITIAL_STATE {
    return { ...DEFAULT_INITIAL_STATE };
  }

  /**
   * Clear the current game state
   */
  clearGameState(): void {
    this.currentGameState = null;
  }
}

// Create a singleton instance for global access
export const gameStateManager = new GameStateManager();
