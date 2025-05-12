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
    // Extract worldId and locationId from relation connections
    const worldId = data.world?.connect?.id || null;
    const locationId = data.location?.connect?.id || null;

    console.log(
      `Creating game state with worldId: ${worldId}, locationId: ${locationId}`
    );

    // Don't modify the original data directly
    const createData = { ...data };

    // Make sure world and location connections are properly set for better type safety
    if (worldId) {
      createData.world = { connect: { id: worldId } };
    }

    if (locationId) {
      createData.location = { connect: { id: locationId } };
    }

    // Create the game state using type-safe approach
    return prisma.gameState.create({
      data: {
        ...createData,
        aiContext: data.aiContext || {},
        isAutosave: data.isAutosave || false,
        isCompleted: data.isCompleted || false,
      },
      // Include relations for better data access
      include: {
        world: true,
        location: true,
        character: true,
        session: true,
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
      include: {
        world: true,
        location: true,
        character: true,
        session: true,
      },
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
      include: {
        world: true,
        location: true,
      },
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
      include: {
        world: true,
        location: true,
      },
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
      include: {
        world: true,
        location: true,
        character: true,
        session: true,
      },
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
    const transformedData = JSON.parse(
      JSON.stringify(data, (_, value) => {
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

    const worldId = data.world?.connect?.id || undefined;
    const locationId = data.location?.connect?.id || undefined;

    const updateData = { ...transformedData };

    if (worldId) {
      console.log(`Updating game state with explicit worldId: ${worldId}`);
      updateData.world = {
        ...updateData.world,
        connect: { id: worldId },
      };
    }

    if (locationId) {
      console.log(
        `Updating game state with explicit locationId: ${locationId}`
      );
      updateData.location = {
        ...updateData.location,
        connect: { id: locationId },
      };
    }

    return prisma.gameState.update({
      where: { id },
      data: updateData,
      include: {
        world: true,
        location: true,
        character: true,
        session: true,
      },
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
