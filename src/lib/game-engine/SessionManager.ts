import type { GameSession } from "@/types/database";

/**
 * SessionManager is responsible for managing game session state on the client side.
 * It should not directly interact with the database.
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
   * Set the current session
   *
   * @param session - The session to set as current
   */
  setCurrentSession(session: GameSession | null): void {
    this.currentSession = session;
  }

  /**
   * Clear the current session
   */
  clearSession(): void {
    this.currentSession = null;
  }
}

// Create a singleton instance for global access
export const sessionManager = new SessionManager();
