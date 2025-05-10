import { prisma } from "./prisma";
import type { GameSession, GameSessionCreate } from "@/types/database";

/**
 * Repository for game session-related database operations
 */
export const gameSessionRepository = {
  /**
   * Create a new game session
   *
   * @param data Game session creation data
   * @returns The created game session
   */
  async createGameSession(data: GameSessionCreate) {
    return prisma.gameSession.create({
      data: {
        ...data,
        startedAt: new Date(),
      },
    });
  },

  /**
   * Get a game session by ID
   *
   * @param id Game session ID
   * @returns The game session or null if not found
   */
  async getGameSessionById(id: string) {
    return prisma.gameSession.findUnique({
      where: { id },
    });
  },

  /**
   * Get all game sessions for a character
   *
   * @param characterId Character ID
   * @returns Array of game sessions
   */
  async getSessionsByCharacterId(characterId: string) {
    return prisma.gameSession.findMany({
      where: { characterId },
      orderBy: { startedAt: "desc" },
    });
  },

  /**
   * Get the most recent active game session for a character
   *
   * @param characterId Character ID
   * @returns The most recent active game session or null if not found
   */
  async getActiveSessionForCharacter(characterId: string) {
    return prisma.gameSession.findFirst({
      where: {
        characterId,
        endedAt: null,
      },
      orderBy: {
        startedAt: "desc",
      },
    });
  },

  /**
   * Update a game session
   *
   * @param id Game session ID
   * @param data Data to update
   * @returns The updated game session
   */
  async updateGameSession(
    id: string,
    data: Partial<Omit<GameSessionCreate, "character">>
  ) {
    return prisma.gameSession.update({
      where: { id },
      data,
    });
  },

  /**
   * End a game session
   *
   * @param id Game session ID
   * @returns The updated game session
   */
  async endGameSession(id: string) {
    const endedAt = new Date();
    const session = await prisma.gameSession.findUnique({
      where: { id },
      select: { startedAt: true },
    });

    if (!session) {
      throw new Error(`Game session not found: ${id}`);
    }

    const durationSeconds = Math.floor(
      (endedAt.getTime() - session.startedAt.getTime()) / 1000
    );

    return prisma.gameSession.update({
      where: { id },
      data: {
        endedAt,
        durationSeconds,
      },
    });
  },
};
