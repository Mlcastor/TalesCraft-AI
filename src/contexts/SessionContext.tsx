"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { sessionController } from "@/lib/game-engine/SessionController";
import { GameSession } from "@/types/game";
import { logger } from "@/lib/utils/logger";

interface SessionContextType {
  currentSession: GameSession | null;
  isLoadingSession: boolean;
  error: string | null;
  createSession: (characterId: string, worldId: string) => Promise<GameSession>;
  loadSession: (sessionId: string) => Promise<GameSession | null>;
  endSession: (sessionId: string) => Promise<GameSession>;
  getActiveSessionsByCharacter: (characterId: string) => Promise<GameSession[]>;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

interface SessionProviderProps {
  children: ReactNode;
  initialSessionId?: string;
}

/**
 * SessionProvider component for providing session state and actions to components
 */
export function SessionProvider({
  children,
  initialSessionId,
}: SessionProviderProps) {
  const [currentSession, setCurrentSession] = useState<GameSession | null>(
    null
  );
  const [isLoadingSession, setIsLoadingSession] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Initialize the session when the provider mounts
  useEffect(() => {
    async function initializeSession() {
      if (initialSessionId) {
        setIsLoadingSession(true);
        setError(null);

        try {
          const session = await sessionController.getSession(initialSessionId);
          setCurrentSession(session);
        } catch (error) {
          logger.error("Failed to initialize session", {
            context: "session-context",
            metadata: {
              initialSessionId,
              error,
            },
          });
          setError("Failed to load session. Please try again.");
        } finally {
          setIsLoadingSession(false);
        }
      } else {
        // Try to get the current session from the controller
        const session = sessionController.getCurrentSession();
        setCurrentSession(session);
      }
    }

    initializeSession();
  }, [initialSessionId]);

  /**
   * Create a new game session
   */
  const createSession = async (
    characterId: string,
    worldId: string
  ): Promise<GameSession> => {
    setIsLoadingSession(true);
    setError(null);

    try {
      const session = await sessionController.createSession(
        characterId,
        worldId
      );
      setCurrentSession(session);
      return session;
    } catch (error) {
      logger.error("Failed to create session", {
        context: "session-context",
        metadata: {
          characterId,
          worldId,
          error,
        },
      });
      setError("Failed to create game session. Please try again.");
      throw error;
    } finally {
      setIsLoadingSession(false);
    }
  };

  /**
   * Load an existing game session
   */
  const loadSession = async (
    sessionId: string
  ): Promise<GameSession | null> => {
    setIsLoadingSession(true);
    setError(null);

    try {
      const session = await sessionController.getSession(sessionId);
      setCurrentSession(session);
      return session;
    } catch (error) {
      logger.error("Failed to load session", {
        context: "session-context",
        metadata: {
          sessionId,
          error,
        },
      });
      setError("Failed to load game session. Please try again.");
      throw error;
    } finally {
      setIsLoadingSession(false);
    }
  };

  /**
   * End a game session
   */
  const endSession = async (sessionId: string): Promise<GameSession> => {
    setIsLoadingSession(true);
    setError(null);

    try {
      const session = await sessionController.endSession(sessionId);

      // If this was the current session, clear it
      if (currentSession && currentSession.id === sessionId) {
        setCurrentSession(null);
      }

      return session;
    } catch (error) {
      logger.error("Failed to end session", {
        context: "session-context",
        metadata: {
          sessionId,
          error,
        },
      });
      setError("Failed to end game session. Please try again.");
      throw error;
    } finally {
      setIsLoadingSession(false);
    }
  };

  /**
   * Get active sessions for a character
   */
  const getActiveSessionsByCharacter = async (
    characterId: string
  ): Promise<GameSession[]> => {
    try {
      return await sessionController.getActiveSessionsByCharacter(characterId);
    } catch (error) {
      logger.error("Failed to get active sessions", {
        context: "session-context",
        metadata: {
          characterId,
          error,
        },
      });
      setError("Failed to get active sessions. Please try again.");
      throw error;
    }
  };

  // Watch for URL changes to update the session when navigation happens
  useEffect(() => {
    if (!pathname) return;

    // If we're on a game page with a session ID
    const match = pathname.match(/\/game\/([^\/]+)/);
    if (match && match[1]) {
      const sessionId = match[1];

      // If we have a different session ID than the current one, load it
      if (!currentSession || currentSession.id !== sessionId) {
        loadSession(sessionId).catch((error) => {
          // Handle session not found by redirecting
          if (
            error.message?.includes("not found") ||
            error.message?.includes("invalid")
          ) {
            router.push("/player-hub");
          }
        });
      }
    }
  }, [pathname, currentSession, router]);

  const value = {
    currentSession,
    isLoadingSession,
    error,
    createSession,
    loadSession,
    endSession,
    getActiveSessionsByCharacter,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

/**
 * Hook for using session context in components
 */
export function useSession(): SessionContextType {
  const context = useContext(SessionContext);

  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return context;
}
