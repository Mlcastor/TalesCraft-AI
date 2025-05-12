import { prisma } from "./prisma";
import type { GameState, GameStateCreate } from "@/types/database";
import { BaseRepository } from "./base/BaseRepository";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";
import { Prisma } from "@/generated/prisma";

/**
 * Repository for game state-related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class GameStateRepository extends BaseRepository {
  /**
   * Create a new GameStateRepository instance
   */
  constructor() {
    super("GameState");
  }

  /**
   * Create a new game state
   *
   * @param data Game state creation data
   * @returns The created game state
   */
  async createGameState(data: GameStateCreate) {
    return this.executeOperation((client) => {
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
      return client.gameState.create({
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
    }, "createGameState");
  }

  /**
   * Get a game state by ID
   *
   * @param id Game state ID
   * @returns The game state
   * @throws RecordNotFoundError if the game state does not exist
   */
  async getGameStateById(id: string) {
    return this.executeOperation(async (client) => {
      const gameState = await client.gameState.findUnique({
        where: { id },
        include: {
          world: true,
          location: true,
          character: true,
          session: true,
        },
      });

      return this.ensureExists(gameState, id);
    }, "getGameStateById");
  }

  /**
   * Find a game state by ID (returns null if not found)
   *
   * @param id Game state ID
   * @returns The game state or null if not found
   */
  async findGameStateById(id: string) {
    return this.executeOperation(
      (client) =>
        client.gameState.findUnique({
          where: { id },
          include: {
            world: true,
            location: true,
            character: true,
            session: true,
          },
        }),
      "findGameStateById"
    );
  }

  /**
   * Get all game states for a session
   *
   * @param sessionId Session ID
   * @param options Optional pagination options
   * @returns Array of game states
   */
  async getGameStatesBySessionId(
    sessionId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.gameState.findMany({
          where: { sessionId },
          orderBy: { saveTimestamp: "desc" },
          include: {
            world: true,
            location: true,
          },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getGameStatesBySessionId"
    );
  }

  /**
   * Get all game states for a character
   *
   * @param characterId Character ID
   * @param options Optional pagination options
   * @returns Array of game states
   */
  async getGameStatesByCharacterId(
    characterId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.gameState.findMany({
          where: { characterId },
          orderBy: { saveTimestamp: "desc" },
          include: {
            world: true,
            location: true,
          },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getGameStatesByCharacterId"
    );
  }

  /**
   * Get the most recent game state for a character
   *
   * @param characterId Character ID
   * @returns The most recent game state or null if not found
   */
  async getLatestGameStateForCharacter(characterId: string) {
    return this.executeOperation(
      (client) =>
        client.gameState.findFirst({
          where: { characterId },
          orderBy: { saveTimestamp: "desc" },
          include: {
            world: true,
            location: true,
            character: true,
            session: true,
          },
        }),
      "getLatestGameStateForCharacter"
    );
  }

  /**
   * Get all manual save points for a character
   *
   * @param characterId Character ID
   * @param options Optional pagination options
   * @returns Array of manual save game states
   */
  async getManualSavesForCharacter(
    characterId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.gameState.findMany({
          where: {
            characterId,
            isAutosave: false,
          },
          orderBy: { saveTimestamp: "desc" },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getManualSavesForCharacter"
    );
  }

  /**
   * Update a game state
   *
   * @param id Game state ID
   * @param data Data to update
   * @returns The updated game state
   * @throws RecordNotFoundError if the game state does not exist
   */
  async updateGameState(
    id: string,
    data: Partial<Omit<GameStateCreate, "session" | "character">>
  ) {
    try {
      return await this.executeOperation((client) => {
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

        return client.gameState.update({
          where: { id },
          data: updateData,
          include: {
            world: true,
            location: true,
            character: true,
            session: true,
          },
        });
      }, "updateGameState");
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("GameState", id);
      }
      throw error;
    }
  }

  /**
   * Mark a game state as completed
   *
   * @param id Game state ID
   * @returns The updated game state
   * @throws RecordNotFoundError if the game state does not exist
   */
  async markGameStateCompleted(id: string) {
    try {
      return await this.executeOperation(
        (client) =>
          client.gameState.update({
            where: { id },
            data: { isCompleted: true },
          }),
        "markGameStateCompleted"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("GameState", id);
      }
      throw error;
    }
  }

  /**
   * Count game states for a character
   *
   * @param characterId The character ID
   * @param onlyManualSaves Whether to count only manual saves
   * @returns Number of game states
   */
  async countGameStatesForCharacter(
    characterId: string,
    onlyManualSaves = false
  ): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.gameState.count({
          where: {
            characterId,
            ...(onlyManualSaves ? { isAutosave: false } : {}),
          },
        }),
      "countGameStatesForCharacter"
    );
  }

  /**
   * Delete a game state
   *
   * @param id Game state ID
   * @throws RecordNotFoundError if the game state does not exist
   */
  async deleteGameState(id: string): Promise<void> {
    try {
      await this.executeOperation(
        (client) =>
          client.gameState.delete({
            where: { id },
          }),
        "deleteGameState"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("GameState", id);
      }
      throw error;
    }
  }
}

// Export singleton instance
export const gameStateRepository = new GameStateRepository();

// Backwards compatibility exports
export const createGameState =
  gameStateRepository.createGameState.bind(gameStateRepository);
export const getGameStateById =
  gameStateRepository.getGameStateById.bind(gameStateRepository);
export const getGameStatesBySessionId =
  gameStateRepository.getGameStatesBySessionId.bind(gameStateRepository);
export const getGameStatesByCharacterId =
  gameStateRepository.getGameStatesByCharacterId.bind(gameStateRepository);
export const getLatestGameStateForCharacter =
  gameStateRepository.getLatestGameStateForCharacter.bind(gameStateRepository);
export const getManualSavesForCharacter =
  gameStateRepository.getManualSavesForCharacter.bind(gameStateRepository);
export const updateGameState =
  gameStateRepository.updateGameState.bind(gameStateRepository);
export const markGameStateCompleted =
  gameStateRepository.markGameStateCompleted.bind(gameStateRepository);
