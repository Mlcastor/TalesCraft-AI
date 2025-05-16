import {
  ValidationError,
  RecordNotFoundError,
} from "@/lib/errors/DatabaseError";
import { BaseService } from "./base/BaseService";
import { GameStateRepository } from "@/lib/db/gameState";
import { GameSessionRepository } from "@/lib/db/gameSession";
import { CharacterRepository } from "@/lib/db/character";
import { WorldRepository } from "@/lib/db/world";
import type {
  GameState as DbGameState,
  NPCState,
  World as DbWorld,
  Location as DbLocation,
  LoreFragment as DbLoreFragment,
} from "@/types/database";
import type { GameState } from "@/types/game"; // Import the full GameState type
import { isNotEmpty } from "@/lib/utils/validation";
import { Prisma } from "@/generated/prisma";
import { logger } from "@/lib/utils/logger";

/**
 * Service for managing game states
 * Handles business logic for game state operations, including saving and loading states
 */
export class GameStateService extends BaseService {
  private readonly gameStateRepository: GameStateRepository;
  private readonly gameSessionRepository: GameSessionRepository;
  private readonly characterRepository: CharacterRepository;
  private readonly worldRepository: WorldRepository;

  /**
   * Create a new GameStateService
   *
   * @param gameStateRepository - Repository for game state operations
   * @param gameSessionRepository - Repository for game session operations
   * @param characterRepository - Repository for character operations
   * @param worldRepository - Repository for world operations
   */
  constructor(
    gameStateRepository: GameStateRepository = new GameStateRepository(),
    gameSessionRepository: GameSessionRepository = new GameSessionRepository(),
    characterRepository: CharacterRepository = new CharacterRepository(),
    worldRepository: WorldRepository = new WorldRepository()
  ) {
    super("GameStateService", {
      gameStateRepository,
      gameSessionRepository,
      characterRepository,
      worldRepository,
    });
    this.gameStateRepository = gameStateRepository;
    this.gameSessionRepository = gameSessionRepository;
    this.characterRepository = characterRepository;
    this.worldRepository = worldRepository;
  }

  /**
   * Convert database state to a fully typed GameState object
   * This centralizes the conversion logic to avoid duplication
   *
   * @param dbState - The database state to convert
   * @returns A properly typed GameState object
   */
  public convertDbStateToGameState(dbState: DbGameState): GameState {
    // Ensure characterState and worldState are parsed or handled if they are JSON strings
    // For MVP, assuming they are already objects or Prisma handles JSON conversion.
    // If they were stored as strings, JSON.parse would be needed here.

    const characterState =
      typeof dbState.characterState === "object" &&
      dbState.characterState !== null
        ? dbState.characterState
        : {};
    const worldState =
      typeof dbState.worldState === "object" && dbState.worldState !== null
        ? dbState.worldState
        : {};
    const aiContext =
      typeof dbState.aiContext === "object" && dbState.aiContext !== null
        ? dbState.aiContext
        : {};

    return {
      id: dbState.id,
      sessionId: dbState.sessionId,
      characterId: dbState.characterId,
      worldId: dbState.worldId || undefined, // Ensure undefined if null
      locationId: dbState.locationId || undefined, // Ensure undefined if null
      savePointName: dbState.savePointName || undefined,
      currentLocation: dbState.currentLocation,
      saveTimestamp: dbState.saveTimestamp,
      narrativeContext: dbState.narrativeContext || undefined,
      aiContext: aiContext as Record<string, any>,
      characterState: characterState as Record<string, any>, // Cast as it might be more specific later
      worldState: worldState as Record<string, any>, // Cast as it might be more specific later
      isAutosave: dbState.isAutosave,
      isCompleted: dbState.isCompleted,
      // Narrative and decisions are typically not directly on the DB GameState model
      // but are constructed or added by the GameEngine/GameClient.
      // Initialize them as empty/default if not present, or based on other fields if applicable.
      narrative: {
        text: "", // Initial narrative text might be generated later
        history: [],
      },
      decisions: [],
    };
  }

  /**
   * Create a new game state
   *
   * @param sessionId - The session ID for this game state
   * @param data - Game state data, including characterId and worldId for initial setup
   * @returns The created game state
   * @throws ValidationError if session ID is invalid or session doesn't exist
   */
  async createGameState(
    sessionId: string,
    data: Partial<GameState> & {
      characterId: string;
      worldId: string;
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
      if (!data.characterId) {
        throw new ValidationError(
          "Character ID is required in data for createGameState",
          { characterId: "Character ID is required" },
          { entity: this.serviceName }
        );
      }
      if (!data.worldId) {
        throw new ValidationError(
          "World ID is required in data for createGameState",
          { worldId: "World ID is required" },
          { entity: this.serviceName }
        );
      }

      // Verify the session exists (uses internal session.characterId later, but good to check)
      const session = await this.gameSessionRepository.findById(sessionId);
      if (!session) {
        throw new ValidationError(
          "Invalid session ID",
          { sessionId: "Session does not exist" },
          { entity: this.serviceName }
        );
      }
      // Ensure the session's characterId matches the one provided in data, if consistency is key
      if (session.characterId !== data.characterId) {
        logger.warn(
          "Session characterId and data.characterId mismatch in createGameState",
          {
            context: this.serviceName,
            metadata: {
              sessionCharId: session.characterId,
              dataCharId: data.characterId,
            },
          }
        );
        // Potentially throw error or use session.characterId as source of truth
      }

      // Use transaction to ensure data integrity
      return this.withTransaction(
        async (tx) => {
          // Update session activity
          await tx.gameSession.update({
            where: { id: sessionId },
            data: { lastActivityAt: new Date() },
          });

          // Fetch Character and World details to populate characterState and worldState
          const character = await this.characterRepository.getCharacterById(
            session.characterId
          );
          if (!character) {
            throw new RecordNotFoundError("Character", session.characterId);
          }

          // Fetch World WITH related data
          const worldWithDetails =
            await this.worldRepository.getWorldWithRelatedData(data.worldId);
          if (!worldWithDetails) {
            throw new RecordNotFoundError("World", data.worldId);
          }

          // Prepare data for game state creation
          const populatedCharacterState = {
            id: character.id,
            name: character.name,
            backstory: character.backstory || undefined,
            appearance: character.appearanceDescription || undefined,
            traits: character.personalityTraits || [],
          };

          // Populate worldState with locations and loreFragments
          const populatedWorldState = {
            id: worldWithDetails.id,
            name: worldWithDetails.name,
            description: worldWithDetails.description || undefined,
            // Ensure these are arrays, even if empty, to match expected type
            locations: ((worldWithDetails.locations as DbLocation[]) || []).map(
              (loc) => ({
                // Cast to DbLocation for safety
                id: loc.id,
                name: loc.name,
                description: loc.description,
                isStartingLocation: loc.isStartingLocation,
                connectedLocationIds: loc.connectedLocationIds || [],
                thumbnailUrl: loc.thumbnailUrl,
                worldId: loc.worldId,
              })
            ),
            loreFragments: (
              (worldWithDetails.loreFragments as DbLoreFragment[]) || []
            ).map((lore) => ({
              // Cast to DbLoreFragment
              id: lore.id,
              title: lore.title,
              content: lore.content,
              type: lore.type,
              contextId: lore.contextId,
              isRevealed: lore.isRevealed,
              keywords: lore.keywords || [],
              worldId: lore.worldId,
            })),
            // events: worldWithDetails.events || [], // if events are also needed
          };

          // Determine the starting location
          let determinedStartingLocation = "starting_area"; // Default fallback
          if (
            worldWithDetails.locations &&
            worldWithDetails.locations.length > 0
          ) {
            const startingLoc = (
              worldWithDetails.locations as DbLocation[]
            ).find((loc) => loc.isStartingLocation);
            if (startingLoc) {
              determinedStartingLocation = startingLoc.id; // Assuming currentLocation should be an ID
            }
          }

          const gameStateData: Prisma.GameStateCreateInput = {
            session: { connect: { id: sessionId } },
            character: { connect: { id: session.characterId } },
            world: { connect: { id: data.worldId } },
            currentLocation: data.currentLocation || determinedStartingLocation,
            saveTimestamp: new Date(),
            savePointName: data.savePointName || null,
            narrativeContext: data.narrativeContext || undefined,
            aiContext: (data.aiContext || {}) as Prisma.InputJsonValue,
            characterState: populatedCharacterState as Prisma.InputJsonValue,
            worldState: populatedWorldState as Prisma.InputJsonValue,
            isAutosave: data.isAutosave || false,
            isCompleted: data.isCompleted || false,
          };

          // locationId is usually set by gameplay, not at initial creation unless specified
          if (data.locationId) {
            gameStateData.location = { connect: { id: data.locationId } };
          }

          // Create related NPCs if they exist
          const relatedNpcs = data.relatedNpcs || [];
          if (relatedNpcs.length > 0) {
            const dbState = await this.gameStateRepository.createWithRelations(
              gameStateData,
              {
                npcs: relatedNpcs as any, // Assuming type compatibility
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
      // Create a simple Record<string, "asc"|"desc"> to match repository expectations
      const orderBy: Record<string, "asc" | "desc"> = {};

      if (options?.sortBy === "timestamp") {
        orderBy.saveTimestamp = options.sortOrder || "desc";
      } else if (options?.sortBy === "savePointName") {
        orderBy.savePointName = options.sortOrder || "asc";
      } else {
        orderBy.saveTimestamp = "desc"; // Default sort
      }

      const states = await this.gameStateRepository.findMany({
        where: { sessionId, isAutosave: options?.isAutosave },
        orderBy,
      });
      return states.map(this.convertDbStateToGameState);
    }, "getAllGameStates");
  }

  /**
   * Update a game state
   *
   * @param stateId - The ID of the game state to update
   * @param data - The game state data to update
   * @returns The updated game state
   */
  async updateGameState(
    stateId: string,
    data: Partial<GameState>
  ): Promise<GameState> {
    return this.executeOperation(async () => {
      // TODO: Re-evaluate how decisions should be updated.
      // For now, excluding from direct update to avoid Prisma type errors.
      const { decisions, ...restOfData } = data;
      if (decisions) {
        logger.warn(
          "Attempted to update decisions via GameStateService.updateGameState. This is not currently supported for the 'decisions' field directly.",
          {
            context: this.serviceName,
            metadata: { stateId },
          }
        );
      }
      const dbState = await this.gameStateRepository.update(
        stateId,
        restOfData as any
      ); // Using 'as any' for restOfData temporarily, Prisma types can be complex.
      return this.convertDbStateToGameState(dbState);
    }, "updateGameState");
  }
}

// Export singleton instance for convenience
export const gameStateService = new GameStateService(
  new GameStateRepository(),
  new GameSessionRepository(),
  new CharacterRepository(),
  new WorldRepository()
);
