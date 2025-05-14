import { ValidationError } from "@/lib/errors/DatabaseError";
import { BaseService } from "./base/BaseService";
import { GameStateRepository } from "@/lib/db/gameState";
import { GameSessionRepository } from "@/lib/db/gameSession";
import type { GameState, NPCState } from "@/types/database";
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
            return this.gameStateRepository.createWithRelations(gameStateData, {
              npcs: relatedNpcs as any,
            });
          }

          // Create the game state
          return this.gameStateRepository.create(gameStateData);
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

      return await this.gameStateRepository.findById(stateId);
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

      return await this.gameStateRepository.findLatestBySessionId(sessionId);
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
            return this.gameStateRepository.createWithRelations(gameStateData, {
              npcs: relatedNpcs as any,
            });
          }

          // Create the new game state
          return this.gameStateRepository.create(gameStateData);
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
      const gameState = await this.gameStateRepository.findById(stateId);
      if (!gameState) {
        return null;
      }

      // Update session activity
      await this.gameSessionRepository.updateLastActivity(gameState.sessionId);

      return gameState;
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
      const gameState = await this.gameStateRepository.findById(stateId);
      if (!gameState) {
        return null;
      }

      // In a real implementation, we'd load additional related entities here
      // such as NPCs, items, decisions history, narrative history, etc.
      // For the MVP, we'll focus on just loading the base state

      return gameState;
    }, "reconstructGameState");
  }
}

// Export singleton instance for convenience
export const gameStateService = new GameStateService(
  new GameStateRepository(),
  new GameSessionRepository()
);
