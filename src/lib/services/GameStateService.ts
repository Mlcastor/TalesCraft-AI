import { ValidationError } from "@/lib/errors/DatabaseError";
import { BaseService } from "./base/BaseService";
import { GameStateRepository } from "@/lib/db/gameState";
import { GameSessionRepository } from "@/lib/db/gameSession";
import type { GameState as DbGameState, NPCState } from "@/types/database";
import type { GameState } from "@/types/game"; // Import the full GameState type
import { isNotEmpty } from "@/lib/utils/validation";
import { Prisma } from "@/generated/prisma";

/**
 * Service for managing game states
 * Handles business logic for game state operations, including saving and loading states
 */
export class GameStateService extends BaseService {
  private readonly gameStateRepository: GameStateRepository;
  private readonly gameSessionRepository: GameSessionRepository;

  /**
   * Create a new GameStateService
   *
   * @param gameStateRepository - Repository for game state operations
   * @param gameSessionRepository - Repository for game session operations
   */
  constructor(
    gameStateRepository: GameStateRepository = new GameStateRepository(),
    gameSessionRepository: GameSessionRepository = new GameSessionRepository()
  ) {
    super("GameStateService", {
      gameStateRepository,
      gameSessionRepository,
    });
    this.gameStateRepository = gameStateRepository;
    this.gameSessionRepository = gameSessionRepository;
  }

  /**
   * Convert database state to a fully typed GameState object
   * This centralizes the conversion logic to avoid duplication
   *
   * @param dbState - The database state to convert
   * @returns A properly typed GameState object
   */
  public convertDbStateToGameState(dbState: DbGameState): GameState {
    // Create a new object with the correct types instead of mutating
    const gameState: GameState = {
      id: dbState.id,
      sessionId: dbState.sessionId,
      characterId: dbState.characterId,
      worldId: dbState.worldId ?? undefined,
      locationId: dbState.locationId ?? undefined,
      savePointName: dbState.savePointName ?? undefined,
      currentLocation: dbState.currentLocation,
      saveTimestamp: dbState.saveTimestamp,
      narrativeContext: dbState.narrativeContext ?? undefined,
      aiContext: dbState.aiContext as Record<string, any>,
      characterState: dbState.characterState as Record<string, any>,
      worldState: dbState.worldState as Record<string, any>,
      isAutosave: dbState.isAutosave,
      isCompleted: dbState.isCompleted,
      isLoading: false,
      error: null,
    };

    return gameState;
  }

  /**
   * Create a new game state
   *
   * @param sessionId - The session ID for this game state
   * @param data - Game state data
   * @returns The created game state
   * @throws ValidationError if session ID is invalid or session doesn't exist
   */
  async createGameState(
    sessionId: string,
    data: Partial<GameState> & {
      relatedNpcs?: Array<Omit<NPCState, "id" | "gameStateId">>;
    }
  ): Promise<GameState> {
    return this.executeOperation(async () => {
      // Validate inputs
      if (!isNotEmpty(sessionId)) {
        throw new ValidationError(
          "Session ID is required",
          { sessionId: "Session ID is required" },
          { entity: this.serviceName }
        );
      }

      // Verify the session exists
      const session = await this.gameSessionRepository.findById(sessionId);
      if (!session) {
        throw new ValidationError(
          "Invalid session ID",
          { sessionId: "Session does not exist" },
          { entity: this.serviceName }
        );
      }

      // Use transaction to ensure data integrity
      return this.withTransaction(
        async (tx) => {
          // Update session activity
          await tx.gameSession.update({
            where: { id: sessionId },
            data: { lastActivityAt: new Date() },
          });

          // Prepare data for game state creation
          const now = new Date();
          const gameStateData: Prisma.GameStateCreateInput = {
            session: { connect: { id: sessionId } },
            character: { connect: { id: session.characterId } },
            currentLocation: data.currentLocation || "starting_area",
            saveTimestamp: now,
            savePointName: data.savePointName || null,
            narrativeContext: data.narrativeContext || null,
            aiContext: (data.aiContext || {}) as Prisma.InputJsonValue,
            characterState: (data.characterState ||
              {}) as Prisma.InputJsonValue,
            worldState: (data.worldState || {}) as Prisma.InputJsonValue,
            isAutosave: data.isAutosave || false,
            isCompleted: data.isCompleted || false,
          };

          // Add optional world and location connections if provided
          if (data.worldId) {
            gameStateData.world = { connect: { id: data.worldId } };
          }

          if (data.locationId) {
            gameStateData.location = { connect: { id: data.locationId } };
          }

          // Create related NPCs if they exist
          const relatedNpcs = data.relatedNpcs || [];
          if (relatedNpcs.length > 0) {
            const dbState = await this.gameStateRepository.createWithRelations(
              gameStateData,
              {
                npcs: relatedNpcs as any,
              }
            );
            return this.convertDbStateToGameState(dbState);
          }

          // Create the game state
          const dbState = await this.gameStateRepository.create(gameStateData);

          // Convert before returning
          return this.convertDbStateToGameState(dbState);
        },
        { primaryRepository: "gameStateRepository" }
      );
    }, "createGameState");
  }

  /**
   * Get a specific game state by ID
   *
   * @param stateId - The state ID to retrieve
   * @returns The game state or null if not found
   */
  async getGameState(stateId: string): Promise<GameState | null> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(stateId)) {
        throw new ValidationError(
          "State ID is required",
          { stateId: "State ID is required" },
          { entity: this.serviceName }
        );
      }

      const dbState = await this.gameStateRepository.findById(stateId);
      return dbState ? this.convertDbStateToGameState(dbState) : null;
    }, "getGameState");
  }

  /**
   * Get the latest game state for a session
   *
   * @param sessionId - The session ID to retrieve the latest state for
   * @returns The latest game state or null if not found
   */
  async getLatestGameState(sessionId: string): Promise<GameState | null> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(sessionId)) {
        throw new ValidationError(
          "Session ID is required",
          { sessionId: "Session ID is required" },
          { entity: this.serviceName }
        );
      }

      // Verify the session exists
      const session = await this.gameSessionRepository.findById(sessionId);
      if (!session) {
        throw new ValidationError(
          "Invalid session ID",
          { sessionId: "Session does not exist" },
          { entity: this.serviceName }
        );
      }

      const dbState = await this.gameStateRepository.findLatestBySessionId(
        sessionId
      );
      return dbState ? this.convertDbStateToGameState(dbState) : null;
    }, "getLatestGameState");
  }

  /**
   * Save a game state, creating a new state snapshot
   *
   * @param sessionId - The session ID to save the state for
   * @param data - The game state data to save
   * @param savePointName - Optional name for this save point
   * @returns The saved game state
   */
  async saveGameState(
    sessionId: string,
    data: Partial<GameState> & {
      relatedNpcs?: Array<Omit<NPCState, "id" | "gameStateId">>;
    },
    savePointName?: string
  ): Promise<GameState> {
    return this.executeOperation(async () => {
      // Validate inputs
      if (!isNotEmpty(sessionId)) {
        throw new ValidationError(
          "Session ID is required",
          { sessionId: "Session ID is required" },
          { entity: this.serviceName }
        );
      }

      // Verify the session exists and is active
      const session = await this.gameSessionRepository.findById(sessionId);
      if (!session) {
        throw new ValidationError(
          "Invalid session ID",
          { sessionId: "Session does not exist" },
          { entity: this.serviceName }
        );
      }

      if (!session.isActive) {
        throw new ValidationError(
          "Session is not active",
          { sessionId: "Cannot save state for inactive session" },
          { entity: this.serviceName }
        );
      }

      // Check for existing state
      const existingState =
        await this.gameStateRepository.findLatestBySessionId(sessionId);

      // Prepare data for game state creation
      const now = new Date();
      const worldId = data.worldId || existingState?.worldId || null;
      const locationId = data.locationId || existingState?.locationId || null;

      const gameStateData: Prisma.GameStateCreateInput = {
        session: { connect: { id: sessionId } },
        character: { connect: { id: session.characterId } },
        currentLocation:
          data.currentLocation || existingState?.currentLocation || "unknown",
        saveTimestamp: now,
        savePointName: savePointName || data.savePointName || null,
        narrativeContext:
          data.narrativeContext || existingState?.narrativeContext || null,
        aiContext: (data.aiContext ||
          existingState?.aiContext ||
          {}) as Prisma.InputJsonValue,
        characterState: (data.characterState ||
          existingState?.characterState ||
          {}) as Prisma.InputJsonValue,
        worldState: (data.worldState ||
          existingState?.worldState ||
          {}) as Prisma.InputJsonValue,
        isAutosave: data.isAutosave !== undefined ? data.isAutosave : false,
        isCompleted: data.isCompleted !== undefined ? data.isCompleted : false,
      };

      // Add optional world and location connections if they exist
      if (worldId) {
        gameStateData.world = { connect: { id: worldId } };
      }

      if (locationId) {
        gameStateData.location = { connect: { id: locationId } };
      }

      // Use transaction to ensure data integrity
      return this.withTransaction(
        async (tx) => {
          // Update session activity
          await tx.gameSession.update({
            where: { id: sessionId },
            data: { lastActivityAt: new Date() },
          });

          // Check if there are related NPCs to include
          const relatedNpcs = data.relatedNpcs || [];
          if (relatedNpcs.length > 0) {
            const dbState = await this.gameStateRepository.createWithRelations(
              gameStateData,
              {
                npcs: relatedNpcs as any,
              }
            );
            return this.convertDbStateToGameState(dbState);
          }

          // Create the new game state
          const dbState = await this.gameStateRepository.create(gameStateData);

          // Convert before returning
          return this.convertDbStateToGameState(dbState);
        },
        { primaryRepository: "gameStateRepository" }
      );
    }, "saveGameState");
  }

  /**
   * Load a game state
   * This updates the session's last activity timestamp and returns the state
   *
   * @param stateId - The state ID to load
   * @returns The loaded game state or null if not found
   */
  async loadGameState(stateId: string): Promise<GameState | null> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(stateId)) {
        throw new ValidationError(
          "State ID is required",
          { stateId: "State ID is required" },
          { entity: this.serviceName }
        );
      }

      // Get the state
      const dbState = await this.gameStateRepository.findById(stateId);
      if (!dbState) {
        return null;
      }

      // Update session activity
      await this.gameSessionRepository.updateLastActivity(dbState.sessionId);

      return this.convertDbStateToGameState(dbState);
    }, "loadGameState");
  }

  /**
   * Reconstruct the full game state including related entities
   *
   * @param stateId - The state ID to reconstruct
   * @returns The reconstructed game state or null if not found
   */
  async reconstructGameState(stateId: string): Promise<GameState | null> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(stateId)) {
        throw new ValidationError(
          "State ID is required",
          { stateId: "State ID is required" },
          { entity: this.serviceName }
        );
      }

      // Get the base state
      const dbState = await this.gameStateRepository.findById(stateId);
      if (!dbState) {
        return null;
      }

      // In a real implementation, we'd load additional related entities here
      // such as NPCs, items, decisions history, narrative history, etc.
      // For the MVP, we'll focus on just loading the base state

      return this.convertDbStateToGameState(dbState);
    }, "reconstructGameState");
  }

  /**
   * Delete a game state by ID
   *
   * @param stateId - The ID of the game state to delete
   * @returns True if the state was deleted, false if it doesn't exist
   */
  async deleteGameState(stateId: string): Promise<boolean> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(stateId)) {
        throw new ValidationError(
          "State ID is required",
          { stateId: "State ID is required" },
          { entity: this.serviceName }
        );
      }

      await this.gameStateRepository.delete(stateId);
      return true;
    }, "deleteGameState");
  }

  /**
   * Get all game states for a session
   *
   * @param sessionId - The ID of the session to get states for
   * @returns All game states for the session
   */
  async getAllGameStates(
    sessionId: string,
    options?: {
      sortBy?: "timestamp" | "savePointName";
      sortOrder?: "asc" | "desc";
      isAutosave?: boolean;
    }
  ): Promise<GameState[]> {
    return this.executeOperation(async () => {
      const states = await this.gameStateRepository.findMany({
        where: { sessionId, isAutosave: options?.isAutosave },
        orderBy: {
          saveTimestamp: "desc",
        },
      });
      return states.map(this.convertDbStateToGameState);
    }, "getAllGameStates");
  }
}

// Export singleton instance for convenience
export const gameStateService = new GameStateService(
  new GameStateRepository(),
  new GameSessionRepository()
);
