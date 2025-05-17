import { BaseRepository } from "./base/BaseRepository";
import {
  SimplifiedGameState,
  NarrativeLogEntry,
  MVPCharacterState,
  MVPWorldState,
} from "@/types/mvpTypes";
import { Prisma } from "@/generated/prisma";

/**
 * Repository for managing SimplifiedGameState data.
 * Handles database operations related to game states.
 */
export class GameStateRepository extends BaseRepository {
  /**
   * Creates an instance of GameStateRepository.
   */
  constructor() {
    super("SimplifiedGameState");
  }

  /**
   * Creates a new game state in the database.
   * @param data - The data for the new game state, including its 'id'.
   * @returns The created game state.
   */
  async createGameState(
    data: Omit<SimplifiedGameState, "id">
  ): Promise<SimplifiedGameState> {
    return this.executeOperation(async (client) => {
      const gameStateDataForPrisma = {
        ...data,
        characterState: data.characterState as unknown as Prisma.InputJsonValue,
        worldState: data.worldState as unknown as Prisma.InputJsonValue,
        narrativeLog: data.narrativeLog as unknown as Prisma.InputJsonValue,
        currentChoices: data.currentChoices as unknown as Prisma.InputJsonValue,
      };
      const createdState = await client.simplifiedGameState.create({
        data: gameStateDataForPrisma,
      });
      // Cast the Prisma result back to SimplifiedGameState, handling JSON fields
      return {
        ...createdState,
        characterState:
          createdState.characterState as unknown as MVPCharacterState,
        worldState: createdState.worldState as unknown as MVPWorldState,
        narrativeLog:
          createdState.narrativeLog as unknown as NarrativeLogEntry[],
        currentChoices: createdState.currentChoices as unknown as string[],
        lastModified: new Date(createdState.lastModified), // Ensure Date type
      } as SimplifiedGameState;
    }, "createGameState");
  }

  /**
   * Retrieves a game state by its ID.
   * @param id - The ID of the game state to retrieve.
   * @returns The game state if found, otherwise null.
   */
  async getGameStateById(id: string): Promise<SimplifiedGameState | null> {
    return this.executeOperation(async (client) => {
      const gameState = await client.simplifiedGameState.findUnique({
        where: { id },
      });
      if (gameState) {
        // Need to parse JSON fields back to their proper types
        return {
          ...gameState,
          characterState:
            gameState.characterState as unknown as MVPCharacterState,
          worldState: gameState.worldState as unknown as MVPWorldState,
          narrativeLog:
            gameState.narrativeLog as unknown as NarrativeLogEntry[],
          currentChoices: gameState.currentChoices as unknown as string[],
          // Ensure date types are correctly handled if Prisma returns strings
          lastModified: new Date(gameState.lastModified),
        } as SimplifiedGameState;
      }
      return null;
    }, "getGameStateById");
  }

  /**
   * Updates an existing game state.
   * @param id - The ID of the game state to update.
   * @param data - The partial data to update the game state with.
   * @returns The updated game state.
   * @throws RecordNotFoundError if the game state to update is not found.
   */
  async updateGameState(
    id: string,
    data: Partial<Omit<SimplifiedGameState, "id">>
  ): Promise<SimplifiedGameState> {
    return this.executeOperation(async (client) => {
      const prismaUpdateData: Prisma.SimplifiedGameStateUpdateInput = {};

      if (data.sessionId !== undefined)
        prismaUpdateData.sessionId = data.sessionId;
      if (data.characterId !== undefined) {
        prismaUpdateData.character = { connect: { id: data.characterId } };
      }
      if (data.worldId !== undefined) {
        prismaUpdateData.world = { connect: { id: data.worldId } };
      }
      if (data.turnNumber !== undefined)
        prismaUpdateData.turnNumber = data.turnNumber;
      if (data.currentLocationId !== undefined) {
        prismaUpdateData.currentLocationId = data.currentLocationId;
      }
      if (data.lastModified !== undefined)
        prismaUpdateData.lastModified = new Date(data.lastModified);
      if (data.currentObjective !== undefined)
        prismaUpdateData.currentObjective = data.currentObjective;

      if (data.characterState) {
        prismaUpdateData.characterState =
          data.characterState as unknown as Prisma.InputJsonValue;
      }
      if (data.worldState) {
        prismaUpdateData.worldState =
          data.worldState as unknown as Prisma.InputJsonValue;
      }
      if (data.narrativeLog) {
        prismaUpdateData.narrativeLog =
          data.narrativeLog as unknown as Prisma.InputJsonValue;
      }
      if (data.currentChoices) {
        prismaUpdateData.currentChoices =
          data.currentChoices as unknown as Prisma.InputJsonValue;
      }

      const updatedGameState = await client.simplifiedGameState.update({
        where: { id },
        data: prismaUpdateData,
      });
      const validatedGameState = this.ensureExists(updatedGameState, id);

      // Parse JSON fields from the updated record
      return {
        ...validatedGameState,
        characterState:
          validatedGameState.characterState as unknown as MVPCharacterState,
        worldState: validatedGameState.worldState as unknown as MVPWorldState,
        narrativeLog:
          validatedGameState.narrativeLog as unknown as NarrativeLogEntry[],
        currentChoices:
          validatedGameState.currentChoices as unknown as string[],
        lastModified: new Date(validatedGameState.lastModified),
      } as SimplifiedGameState;
    }, "updateGameState");
  }

  /**
   * Retrieves the latest game state for a given session ID.
   * This is marked as optional in the plan, but implemented for completeness.
   * @param sessionId - The ID of the session.
   * @returns The latest game state for the session if found, otherwise null.
   */
  async getLatestGameStateBySessionId(
    sessionId: string
  ): Promise<SimplifiedGameState | null> {
    return this.executeOperation(async (client) => {
      const gameState = await client.simplifiedGameState.findFirst({
        where: { sessionId },
        orderBy: { lastModified: "desc" },
      });
      if (gameState) {
        // Parse JSON fields
        return {
          ...gameState,
          characterState:
            gameState.characterState as unknown as MVPCharacterState,
          worldState: gameState.worldState as unknown as MVPWorldState,
          narrativeLog:
            gameState.narrativeLog as unknown as NarrativeLogEntry[],
          currentChoices: gameState.currentChoices as unknown as string[],
          lastModified: new Date(gameState.lastModified),
        } as SimplifiedGameState;
      }
      return null;
    }, "getLatestGameStateBySessionId");
  }
}
