import { gameSessionRepository } from "@/lib/db/gameSession";
import { prisma } from "@/lib/db/prisma";
import type { GameSession } from "@/types/database";

/**
 * SessionManager is responsible for creating, tracking, and ending game sessions.
 * It ensures that we have a consistent way to handle game sessions across the application.
 */
export class SessionManager {
  private currentSession: GameSession | null = null;
  private characterId: string | null = null;

  /**
   * Initialize the session manager with a character ID
   *
   * @param characterId - The ID of the character associated with this session
   */
  constructor(characterId: string | null = null) {
    this.characterId = characterId;
  }

  /**
   * Set the character ID for the session manager
   *
   * @param characterId - The ID of the character to associate with this session manager
   */
  setCharacterId(characterId: string): void {
    this.characterId = characterId;
  }

  /**
   * Get the character ID for the session manager
   *
   * @returns The character ID or null if not set
   */
  getCharacterId(): string | null {
    return this.characterId;
  }

  /**
   * Get the current active session
   *
   * @returns The current active session or null if no session is active
   */
  getCurrentSession(): GameSession | null {
    return this.currentSession;
  }

  /**
   * Start a new game session for the character
   *
   * @returns Promise resolving to the created session
   * @throws Error if characterId is not set
   */
  async startSession(): Promise<GameSession> {
    if (!this.characterId) {
      throw new Error("Cannot start session: Character ID not set");
    }

    // Check if there's already an active session for this character
    const existingActiveSession =
      await gameSessionRepository.getActiveSessionForCharacter(
        this.characterId
      );

    if (existingActiveSession) {
      // If there's an existing active session, use it
      this.currentSession = existingActiveSession;
      return existingActiveSession;
    }

    // Create a new session with the correct structure
    const newSession = await gameSessionRepository.createGameSession({
      character: {
        connect: { id: this.characterId },
      },
      sessionData: {},
    });

    this.currentSession = newSession;

    return newSession;
  }

  /**
   * End the current game session
   *
   * @returns Promise resolving to the ended session or null if no session was active
   */
  async endSession(): Promise<GameSession | null> {
    if (!this.currentSession || !this.currentSession.id) {
      return null;
    }

    const endedSession = await gameSessionRepository.endGameSession(
      this.currentSession.id
    );
    this.currentSession = null;

    return endedSession;
  }

  /**
   * Update the current session data
   *
   * @param sessionData - Partial session data to merge with existing data
   * @returns Promise resolving to the updated session or null if no session is active
   */
  async updateSessionData(
    sessionData: Record<string, any>
  ): Promise<GameSession | null> {
    if (!this.currentSession || !this.currentSession.id) {
      return null;
    }

    // Merge the new session data with existing data
    const currentData = this.currentSession.sessionData as Record<string, any>;
    const mergedData = {
      ...currentData,
      ...sessionData,
    };

    const updatedSession = await gameSessionRepository.updateGameSession(
      this.currentSession.id,
      { sessionData: mergedData }
    );

    this.currentSession = updatedSession;
    return updatedSession;
  }

  /**
   * Resume the last active session for a character, or create a new one if none exists
   *
   * @returns Promise resolving to the resumed or created session
   * @throws Error if characterId is not set
   */
  async resumeOrCreateSession(): Promise<GameSession> {
    if (!this.characterId) {
      throw new Error("Cannot resume session: Character ID not set");
    }

    // Try to find an active session for this character
    const activeSession =
      await gameSessionRepository.getActiveSessionForCharacter(
        this.characterId
      );

    if (activeSession) {
      this.currentSession = activeSession;
      return activeSession;
    }

    // If no active session is found, create a new one
    return this.startSession();
  }
}

// Create a singleton instance for global access
export const sessionManager = new SessionManager();
