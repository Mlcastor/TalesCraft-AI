import type { GameState } from "@/types/database";
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
   * Find a game state by ID
   *
   * @param id Game state ID
   * @returns The game state or null if not found
   */
  async findById(id: string): Promise<GameState | null> {
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
      "findById"
    );
  }

  /**
   * Find multiple game states based on query parameters
   *
   * @param options Query options
   * @returns Array of game states matching the criteria
   */
  async findMany(options?: {
    where?: Record<string, any>;
    orderBy?: Record<string, "asc" | "desc">;
    take?: number;
    skip?: number;
  }): Promise<GameState[]> {
    return this.executeOperation(
      (client) =>
        client.gameState.findMany({
          where: options?.where,
          orderBy: options?.orderBy,
          take: options?.take,
          skip: options?.skip,
          include: {
            world: true,
            location: true,
          },
        }),
      "findMany"
    );
  }

  /**
   * Create a new game state
   *
   * @param data Game state creation data
   * @returns The created game state
   */
  async create(data: Prisma.GameStateCreateInput): Promise<GameState> {
    return this.executeOperation((client) => {
      // Create the game state using type-safe approach
      return client.gameState.create({
        data: {
          ...data,
          aiContext: data.aiContext || {},
          characterState: data.characterState || {},
          worldState: data.worldState || {},
          isAutosave: data.isAutosave || false,
          isCompleted: data.isCompleted || false,
          saveTimestamp: data.saveTimestamp || new Date(),
        },
        include: {
          world: true,
          location: true,
          character: true,
          session: true,
        },
      });
    }, "create");
  }

  /**
   * Update a game state
   *
   * @param id Game state ID
   * @param data Data to update
   * @returns The updated game state
   * @throws RecordNotFoundError if the game state does not exist
   */
  async update(
    id: string,
    data: Prisma.GameStateUpdateInput
  ): Promise<GameState> {
    try {
      return await this.executeOperation(
        (client) =>
          client.gameState.update({
            where: { id },
            data,
            include: {
              world: true,
              location: true,
              character: true,
              session: true,
            },
          }),
        "update"
      );
    } catch (error) {
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
   * Delete a game state
   *
   * @param id Game state ID
   * @returns True if the state was deleted
   * @throws RecordNotFoundError if the game state does not exist
   */
  async delete(id: string): Promise<boolean> {
    try {
      await this.executeOperation(
        (client) =>
          client.gameState.delete({
            where: { id },
          }),
        "delete"
      );
      return true;
    } catch (error) {
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
   * Count game states matching criteria
   *
   * @param where Filter criteria
   * @returns Number of matching states
   */
  async count(where?: Record<string, any>): Promise<number> {
    return this.executeOperation(
      (client) => client.gameState.count({ where }),
      "count"
    );
  }

  /**
   * Execute operations within a transaction
   *
   * @param fn Function containing operations to perform within a transaction
   * @returns Result of the transaction
   */
  async transaction<R>(fn: () => Promise<R>): Promise<R> {
    return this.executeTransaction(async (tx) => fn());
  }

  /**
   * Find game states by session ID
   *
   * @param sessionId Session ID
   * @returns Array of game states
   */
  async findBySessionId(sessionId: string): Promise<GameState[]> {
    return this.findMany({
      where: { sessionId },
      orderBy: { saveTimestamp: "desc" },
    });
  }

  /**
   * Find the latest game state for a session
   *
   * @param sessionId Session ID
   * @returns The latest game state or null if not found
   */
  async findLatestBySessionId(sessionId: string): Promise<GameState | null> {
    return this.executeOperation(
      (client) =>
        client.gameState.findFirst({
          where: { sessionId },
          orderBy: { saveTimestamp: "desc" },
          include: {
            world: true,
            location: true,
            character: true,
            session: true,
          },
        }),
      "findLatestBySessionId"
    );
  }

  /**
   * Find game states by character ID
   *
   * @param characterId Character ID
   * @returns Array of game states
   */
  async findByCharacterId(characterId: string): Promise<GameState[]> {
    return this.findMany({
      where: { characterId },
      orderBy: { saveTimestamp: "desc" },
    });
  }

  /**
   * Find game states by world ID
   *
   * @param worldId World ID
   * @returns Array of game states
   */
  async findByWorldId(worldId: string): Promise<GameState[]> {
    return this.findMany({
      where: { worldId },
      orderBy: { saveTimestamp: "desc" },
    });
  }

  /**
   * Create a game state with related entities
   *
   * @param data Game state data
   * @param relations Related entities data
   * @returns The created game state with relations
   */
  async createWithRelations(
    data: Prisma.GameStateCreateInput,
    relations: {
      npcs?: Array<Prisma.NPCStateCreateInput>;
    }
  ): Promise<GameState> {
    return this.executeTransaction(async (tx) => {
      // First create the game state
      const gameState = await tx.gameState.create({
        data: {
          ...data,
          aiContext: data.aiContext || {},
          characterState: data.characterState || {},
          worldState: data.worldState || {},
          isAutosave: data.isAutosave || false,
          isCompleted: data.isCompleted || false,
          saveTimestamp: data.saveTimestamp || new Date(),
        },
        include: {
          world: true,
          location: true,
          character: true,
          session: true,
        },
      });

      // Then create related NPCs if provided
      if (relations.npcs && relations.npcs.length > 0) {
        for (const npcData of relations.npcs) {
          await tx.nPCState.create({
            data: {
              ...npcData,
              gameState: { connect: { id: gameState.id } },
              relationshipWithPlayer: npcData.relationshipWithPlayer || 0,
              dialogueHistory: npcData.dialogueHistory || [],
              instanceProperties: npcData.instanceProperties || {},
            },
          });
        }
      }

      // Return the created game state with all relations
      return gameState;
    });
  }

  /**
   * Mark a game state as completed
   *
   * @param id Game state ID
   * @returns The updated game state
   */
  async markGameStateCompleted(id: string): Promise<GameState> {
    return this.update(id, { isCompleted: true });
  }
}

// Export singleton instance
export const gameStateRepository = new GameStateRepository();

// Backwards compatibility exports
export const createGameState =
  gameStateRepository.create.bind(gameStateRepository);
export const getGameStateById =
  gameStateRepository.findById.bind(gameStateRepository);
export const getGameStatesBySessionId =
  gameStateRepository.findBySessionId.bind(gameStateRepository);
export const getGameStatesByCharacterId =
  gameStateRepository.findByCharacterId.bind(gameStateRepository);
export const getLatestGameStateForCharacter =
  gameStateRepository.findLatestBySessionId.bind(gameStateRepository);
export const getManualSavesForCharacter =
  gameStateRepository.findByCharacterId.bind(gameStateRepository);
export const updateGameState =
  gameStateRepository.update.bind(gameStateRepository);
export const markGameStateCompleted =
  gameStateRepository.markGameStateCompleted.bind(gameStateRepository);
