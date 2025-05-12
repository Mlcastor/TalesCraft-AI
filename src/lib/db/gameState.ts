import { prisma } from "./prisma";
import type { GameState, GameStateCreate } from "@/types/database";

/**
 * Repository for game state-related database operations
 */
export const gameStateRepository = {
  /**
   * Create a new game state
   *
   * @param data Game state creation data
   * @returns The created game state
   */
  async createGameState(data: GameStateCreate) {
    return prisma.gameState.create({
      data: {
        ...data,
        aiContext: data.aiContext || {},
        isAutosave: data.isAutosave || false,
        isCompleted: data.isCompleted || false,
      },
    });
  },

  /**
   * Get a game state by ID
   *
   * @param id Game state ID
   * @returns The game state or null if not found
   */
  async getGameStateById(id: string) {
    return prisma.gameState.findUnique({
      where: { id },
    });
  },

  /**
   * Get all game states for a session
   *
   * @param sessionId Session ID
   * @returns Array of game states
   */
  async getGameStatesBySessionId(sessionId: string) {
    return prisma.gameState.findMany({
      where: { sessionId },
      orderBy: { saveTimestamp: "desc" },
    });
  },

  /**
   * Get all game states for a character
   *
   * @param characterId Character ID
   * @returns Array of game states
   */
  async getGameStatesByCharacterId(characterId: string) {
    return prisma.gameState.findMany({
      where: { characterId },
      orderBy: { saveTimestamp: "desc" },
    });
  },

  /**
   * Get the most recent game state for a character
   *
   * @param characterId Character ID
   * @returns The most recent game state or null if not found
   */
  async getLatestGameStateForCharacter(characterId: string) {
    return prisma.gameState.findFirst({
      where: { characterId },
      orderBy: { saveTimestamp: "desc" },
    });
  },

  /**
   * Get all manual save points for a character
   *
   * @param characterId Character ID
   * @returns Array of manual save game states
   */
  async getManualSavesForCharacter(characterId: string) {
    return prisma.gameState.findMany({
      where: {
        characterId,
        isAutosave: false,
      },
      orderBy: { saveTimestamp: "desc" },
    });
  },

  /**
   * Update a game state
   *
   * @param id Game state ID
   * @param data Data to update
   * @returns The updated game state
   */
  async updateGameState(
    id: string,
    data: Partial<Omit<GameStateCreate, "session" | "character">>
  ) {
    // Transform data to handle Decimal values
    const transformedData = JSON.parse(
      JSON.stringify(data, (_, value) => {
        // Convert any Decimal values to strings
        if (
          value &&
          typeof value === "object" &&
          value.constructor?.name === "Decimal"
        ) {
          return value.toString();
        }
        return value;
      })
    );

    return prisma.gameState.update({
      where: { id },
      data: transformedData,
    });
  },

  /**
   * Mark a game state as completed
   *
   * @param id Game state ID
   * @returns The updated game state
   */
  async markGameStateCompleted(id: string) {
    return prisma.gameState.update({
      where: { id },
      data: { isCompleted: true },
    });
  },
};
