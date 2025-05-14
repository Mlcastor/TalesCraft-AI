import { ValidationError } from "@/lib/errors/DatabaseError";
import { BaseService } from "./base/BaseService";
import { GameSessionRepository } from "@/lib/db/gameSession";
import type { GameSession } from "@/types/database";
import { isNotEmpty } from "@/lib/utils/validation";
import { logger } from "@/lib/utils/logger";
import { Prisma } from "@/generated/prisma";

/**
 * Service for managing game sessions
 * Handles business logic for game session operations
 */
export class GameSessionService extends BaseService {
  private readonly gameSessionRepository: GameSessionRepository;

  /**
   * Create a new GameSessionService
   *
   * @param gameSessionRepository - Repository for game session operations
   */
  constructor(
    gameSessionRepository: GameSessionRepository = new GameSessionRepository()
  ) {
    super("GameSessionService", { gameSessionRepository });
    this.gameSessionRepository = gameSessionRepository;
  }

  /**
   * Create a new game session
   *
   * @param characterId - The character ID for this session
   * @param worldId - The world ID for this session
   * @returns The created game session
   * @throws ValidationError if character ID or world ID is invalid
   */
  async createSession(
    characterId: string,
    worldId: string
  ): Promise<GameSession> {
    return this.executeOperation(async () => {
      // Validate inputs
      if (!isNotEmpty(characterId)) {
        throw new ValidationError(
          "Character ID is required",
          { characterId: "Character ID is required" },
          { entity: this.serviceName }
        );
      }

      if (!isNotEmpty(worldId)) {
        throw new ValidationError(
          "World ID is required",
          { worldId: "World ID is required" },
          { entity: this.serviceName }
        );
      }

      // Check for existing active sessions for this character in this world
      const activeSessions = await this.gameSessionRepository.findMany({
        where: {
          characterId,
          isActive: true,
          sessionData: {
            path: ["worldId"],
            equals: worldId,
          },
        },
      });

      // Log how many active sessions we found
      logger.debug(
        `Found ${activeSessions.length} active sessions for character ${characterId} in world ${worldId}`,
        {
          context: "service",
          metadata: {
            service: this.serviceName,
            operation: "createSession",
            characterId,
            worldId,
          },
        }
      );

      // Create a new session
      const now = new Date();
      const sessionData = { worldId } as unknown as Prisma.JsonValue;

      const gameSession = await this.gameSessionRepository.create({
        characterId,
        startedAt: now,
        lastActivityAt: now,
        isActive: true,
        sessionData,
        endedAt: null,
        durationSeconds: null,
      });

      return gameSession;
    }, "createSession");
  }

  /**
   * Get a specific game session by ID
   *
   * @param sessionId - The session ID to retrieve
   * @returns The game session or null if not found
   */
  async getSession(sessionId: string): Promise<GameSession | null> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(sessionId)) {
        throw new ValidationError(
          "Session ID is required",
          { sessionId: "Session ID is required" },
          { entity: this.serviceName }
        );
      }

      return await this.gameSessionRepository.findById(sessionId);
    }, "getSession");
  }

  /**
   * Get all game sessions for a character
   *
   * @param characterId - The character ID to retrieve sessions for
   * @returns Array of game sessions
   */
  async getSessions(characterId: string): Promise<GameSession[]> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(characterId)) {
        throw new ValidationError(
          "Character ID is required",
          { characterId: "Character ID is required" },
          { entity: this.serviceName }
        );
      }

      return await this.gameSessionRepository.findByCharacterId(characterId);
    }, "getSessions");
  }

  /**
   * Get active game sessions for a character
   *
   * @param characterId - The character ID to retrieve active sessions for
   * @returns Array of active game sessions
   */
  async getActiveSessions(characterId: string): Promise<GameSession[]> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(characterId)) {
        throw new ValidationError(
          "Character ID is required",
          { characterId: "Character ID is required" },
          { entity: this.serviceName }
        );
      }

      return await this.gameSessionRepository.findActiveByCharacterId(
        characterId
      );
    }, "getActiveSessions");
  }

  /**
   * End a game session, calculating duration and setting status
   *
   * @param sessionId - The session ID to end
   * @returns The updated game session
   */
  async endSession(sessionId: string): Promise<GameSession> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(sessionId)) {
        throw new ValidationError(
          "Session ID is required",
          { sessionId: "Session ID is required" },
          { entity: this.serviceName }
        );
      }

      // Use the repository's endSession method which handles the transaction
      return await this.gameSessionRepository.endSession(sessionId);
    }, "endSession");
  }

  /**
   * Update the last activity timestamp for a session
   *
   * @param sessionId - The session ID to update
   * @returns The updated game session
   */
  async updateSessionActivity(sessionId: string): Promise<GameSession> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(sessionId)) {
        throw new ValidationError(
          "Session ID is required",
          { sessionId: "Session ID is required" },
          { entity: this.serviceName }
        );
      }

      return await this.gameSessionRepository.updateLastActivity(sessionId);
    }, "updateSessionActivity");
  }
}

// Export singleton instance for convenience
export const gameSessionService = new GameSessionService(
  new GameSessionRepository()
);
