import { GameSession } from "@/types/game";
import { SessionManager } from "@/types/engine";
import { gameSessionService } from "@/lib/services/GameSessionService";
import { logger } from "@/lib/utils/logger";
import {
  getBrowserStorage,
  setBrowserStorage,
  removeBrowserStorage,
} from "@/lib/utils/storage";

/**
 * Converts database GameSession to engine GameSession
 * Handles type compatibility issues
 */
function convertToGameSession(dbSession: any): GameSession {
  return {
    id: dbSession.id,
    characterId: dbSession.characterId,
    startedAt: dbSession.startedAt,
    endedAt: dbSession.endedAt || undefined,
    isActive: dbSession.isActive,
    lastActivityAt: dbSession.lastActivityAt,
    durationSeconds: dbSession.durationSeconds || undefined,
    sessionData: dbSession.sessionData || {},
  };
}

/**
 * SessionController implementation
 *
 * Manages game sessions, handling persistence, recovery, and activity tracking.
 * Implements the SessionManager interface from src/types/engine.ts
 */
export class SessionController implements SessionManager {
  /**
   * Current active session
   */
  private currentSession: GameSession | null = null;

  /**
   * Session storage key
   */
  private readonly STORAGE_KEY = "game_session";

  /**
   * Activity tracking interval (in milliseconds)
   */
  private readonly ACTIVITY_TRACKING_INTERVAL = 5 * 60 * 1000; // 5 minutes

  /**
   * Activity tracking interval ID
   */
  private activityTrackingIntervalId: NodeJS.Timeout | null = null;

  /**
   * Constructor for SessionController
   */
  constructor() {
    // Initialize storage utils in client-side only
    if (typeof window !== "undefined") {
      this.recoverSession();
      this.setupActivityTracking();
      this.setupPageVisibilityTracking();
    }
  }

  /**
   * Create a new game session
   *
   * @param characterId - The character ID for this session
   * @param worldId - The world ID for this session
   * @returns The created game session
   */
  public async createSession(
    characterId: string,
    worldId: string
  ): Promise<GameSession> {
    try {
      // Clear any existing session
      this.clearSession();

      // Create a new session using the service
      const dbSession = await gameSessionService.createSession(
        characterId,
        worldId
      );

      // Convert to engine GameSession type
      const session = convertToGameSession(dbSession);

      // Store the session
      this.setCurrentSession(session);

      logger.debug("SessionController created new session", {
        context: "game-engine",
        metadata: {
          sessionId: session.id,
          characterId,
          worldId,
        },
      });

      return session;
    } catch (error) {
      logger.error("Failed to create session", {
        context: "game-engine",
        metadata: {
          characterId,
          worldId,
          error,
        },
      });
      throw error;
    }
  }

  /**
   * Get a session by ID
   *
   * @param sessionId - The session ID to retrieve
   * @returns The game session or null if not found
   */
  public async getSession(sessionId: string): Promise<GameSession | null> {
    try {
      // Check if we already have this session loaded
      if (this.currentSession && this.currentSession.id === sessionId) {
        return this.currentSession;
      }

      // Get the session from the database
      const dbSession = await gameSessionService.getSession(sessionId);

      if (dbSession) {
        // Convert to engine GameSession type
        const session = convertToGameSession(dbSession);

        // Store the session
        this.setCurrentSession(session);

        logger.debug("SessionController loaded session", {
          context: "game-engine",
          metadata: {
            sessionId,
          },
        });

        return session;
      }

      return null;
    } catch (error) {
      logger.error("Failed to get session", {
        context: "game-engine",
        metadata: {
          sessionId,
          error,
        },
      });
      throw error;
    }
  }

  /**
   * End a game session
   *
   * @param sessionId - The session ID to end
   * @returns The ended game session
   */
  public async endSession(sessionId: string): Promise<GameSession> {
    try {
      // End the session in the database
      const dbSession = await gameSessionService.endSession(sessionId);

      // Convert to engine GameSession type
      const session = convertToGameSession(dbSession);

      // If this is our current session, clear it
      if (this.currentSession && this.currentSession.id === sessionId) {
        this.clearSession();
      }

      logger.debug("SessionController ended session", {
        context: "game-engine",
        metadata: {
          sessionId,
        },
      });

      return session;
    } catch (error) {
      logger.error("Failed to end session", {
        context: "game-engine",
        metadata: {
          sessionId,
          error,
        },
      });
      throw error;
    }
  }

  /**
   * Get active sessions for a character
   *
   * @param characterId - The character ID to retrieve sessions for
   * @returns Array of active game sessions
   */
  public async getActiveSessionsByCharacter(
    characterId: string
  ): Promise<GameSession[]> {
    try {
      // Get active sessions from the database
      const dbSessions = await gameSessionService.getActiveSessions(
        characterId
      );

      // Convert to engine GameSession type
      return dbSessions.map(convertToGameSession);
    } catch (error) {
      logger.error("Failed to get active sessions", {
        context: "game-engine",
        metadata: {
          characterId,
          error,
        },
      });
      throw error;
    }
  }

  /**
   * Update session activity timestamp
   *
   * @param sessionId - The session ID to update
   * @returns The updated game session
   */
  public async updateSessionActivity(sessionId: string): Promise<GameSession> {
    try {
      // Update the session in the database
      const dbSession = await gameSessionService.updateSessionActivity(
        sessionId
      );

      // Convert to engine GameSession type
      const session = convertToGameSession(dbSession);

      // If this is our current session, update it
      if (this.currentSession && this.currentSession.id === sessionId) {
        this.setCurrentSession(session);
      }

      logger.debug("SessionController updated session activity", {
        context: "game-engine",
        metadata: {
          sessionId,
        },
      });

      return session;
    } catch (error) {
      logger.error("Failed to update session activity", {
        context: "game-engine",
        metadata: {
          sessionId,
          error,
        },
      });
      throw error;
    }
  }

  /**
   * Get the current active session
   *
   * @returns The current session or null if none exists
   */
  public getCurrentSession(): GameSession | null {
    return this.currentSession;
  }

  /**
   * Set the current session and store it for persistence
   *
   * @param session - The session to set as current
   */
  private setCurrentSession(session: GameSession): void {
    this.currentSession = session;

    // Store in browser storage for persistence across page navigation
    if (typeof window !== "undefined") {
      setBrowserStorage(this.STORAGE_KEY, {
        id: session.id,
        timestamp: new Date().toISOString(),
      });
    }
  }

  /**
   * Clear the current session
   */
  private clearSession(): void {
    this.currentSession = null;

    // Clear from browser storage
    if (typeof window !== "undefined") {
      removeBrowserStorage(this.STORAGE_KEY);
    }

    // Clear activity tracking
    this.clearActivityTracking();
  }

  /**
   * Attempt to recover a session from browser storage
   */
  private async recoverSession(): Promise<void> {
    if (typeof window === "undefined") return;

    try {
      // Get the stored session
      const storedSession = getBrowserStorage<{
        id: string;
        timestamp: string;
      }>(this.STORAGE_KEY);

      if (!storedSession || !storedSession.id) return;

      // Check if the stored session is recent enough (less than 24 hours old)
      const timestamp = new Date(storedSession.timestamp);
      const now = new Date();
      const hoursDifference =
        (now.getTime() - timestamp.getTime()) / (1000 * 60 * 60);

      if (hoursDifference > 24) {
        // Session is too old, clear it
        this.clearSession();
        return;
      }

      // Try to load the session
      const session = await this.getSession(storedSession.id);

      if (session && session.isActive) {
        logger.info("Successfully recovered session from browser storage", {
          context: "game-engine",
          metadata: {
            sessionId: session.id,
          },
        });
      } else {
        // Session is invalid or inactive, clear it
        this.clearSession();
      }
    } catch (error) {
      logger.error("Failed to recover session", {
        context: "game-engine",
        metadata: {
          error,
        },
      });
      this.clearSession();
    }
  }

  /**
   * Set up automatic activity tracking for the current session
   */
  private setupActivityTracking(): void {
    // Clear any existing interval
    this.clearActivityTracking();

    // Set up a new interval to update activity
    this.activityTrackingIntervalId = setInterval(() => {
      this.trackActivity();
    }, this.ACTIVITY_TRACKING_INTERVAL);
  }

  /**
   * Clear the activity tracking interval
   */
  private clearActivityTracking(): void {
    if (this.activityTrackingIntervalId) {
      clearInterval(this.activityTrackingIntervalId);
      this.activityTrackingIntervalId = null;
    }
  }

  /**
   * Update the activity timestamp for the current session
   */
  private async trackActivity(): Promise<void> {
    if (!this.currentSession) return;

    try {
      await this.updateSessionActivity(this.currentSession.id);
    } catch (error) {
      logger.error("Failed to track session activity", {
        context: "game-engine",
        metadata: {
          sessionId: this.currentSession.id,
          error,
        },
      });
    }
  }

  /**
   * Set up tracking for page visibility changes
   * This ensures we update activity when the user returns to the page
   */
  private setupPageVisibilityTracking(): void {
    if (typeof window === "undefined") return;

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible" && this.currentSession) {
        // User returned to the page, update activity
        this.trackActivity();
      }
    });
  }
}

// Export singleton instance
export const sessionController = new SessionController();
