"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  loadGame,
  endGame,
  startGame,
  getGameSessions,
  verifyGameSession,
  getOrCreateGameSession,
} from "@/lib/actions/gameSession-actions";
import { GameSession } from "@/types/game";

// Type for the hook return value
interface UseGameSessionReturn {
  currentSession: GameSession | null;
  isLoadingSession: boolean;
  error: string | null;
  createSession: (characterId: string, worldId: string) => Promise<GameSession>;
  loadSession: (sessionId: string) => Promise<GameSession | null>;
  endSession: (sessionId: string) => Promise<GameSession>;
  getActiveSessionsByCharacter: (characterId: string) => Promise<GameSession[]>;
}

/**
 * Custom hook for managing game sessions
 * Uses server actions instead of directly accessing SessionController
 *
 * @param initialSessionId Optional initial session ID to load
 * @returns Session state and methods for managing it
 */
export function useGameSession(
  initialSessionId?: string
): UseGameSessionReturn {
  const [currentSession, setCurrentSession] = useState<GameSession | null>(
    null
  );
  const [isLoadingSession, setIsLoadingSession] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Function to store session data in local storage
  const storeSessionLocally = useCallback((session: GameSession | null) => {
    if (session) {
      try {
        localStorage.setItem("currentGameSession", JSON.stringify(session));
      } catch (e) {
        console.warn("Failed to store session in local storage", e);
      }
    } else {
      try {
        localStorage.removeItem("currentGameSession");
      } catch (e) {
        console.warn("Failed to remove session from local storage", e);
      }
    }
  }, []);

  // Function to restore session from local storage
  const restoreSessionFromStorage = useCallback(() => {
    if (typeof window === "undefined") return null;

    try {
      const storedSession = localStorage.getItem("currentGameSession");
      if (storedSession) {
        return JSON.parse(storedSession) as GameSession;
      }
    } catch (e) {
      console.warn("Failed to restore session from local storage", e);
    }
    return null;
  }, []);

  // Initialize the session when the hook mounts
  useEffect(() => {
    async function initializeSession() {
      if (initialSessionId) {
        setIsLoadingSession(true);
        setError(null);

        try {
          // Use the server action instead of directly accessing SessionController
          const { session } = await loadGame(initialSessionId);
          setCurrentSession(session);
          storeSessionLocally(session);
        } catch (error) {
          console.error("Failed to initialize session", error);
          setError("Failed to load session. Please try again.");

          // Attempt to restore from local storage as fallback
          const storedSession = restoreSessionFromStorage();
          if (storedSession && storedSession.id === initialSessionId) {
            setCurrentSession(storedSession);
          }
        } finally {
          setIsLoadingSession(false);
        }
      } else {
        // Try to restore from local storage if no initial ID
        const storedSession = restoreSessionFromStorage();
        if (storedSession) {
          setCurrentSession(storedSession);
        }
      }
    }

    initializeSession();
  }, [initialSessionId, storeSessionLocally, restoreSessionFromStorage]);

  /**
   * Create a new game session
   */
  const createSession = useCallback(
    async (characterId: string, worldId: string): Promise<GameSession> => {
      setIsLoadingSession(true);
      setError(null);

      try {
        // Use the server action to create a session
        const { session } = await startGame(characterId, worldId);
        setCurrentSession(session);
        storeSessionLocally(session);
        return session;
      } catch (error) {
        console.error("Failed to create session", error);
        setError("Failed to create game session. Please try again.");
        throw error;
      } finally {
        setIsLoadingSession(false);
      }
    },
    [setIsLoadingSession, setError, setCurrentSession, storeSessionLocally]
  );

  /**
   * Load an existing game session
   */
  const loadSession = useCallback(
    async (sessionId: string): Promise<GameSession | null> => {
      setIsLoadingSession(true);
      setError(null);

      try {
        // Use the server action to load a session
        const { session } = await loadGame(sessionId);
        setCurrentSession(session);
        storeSessionLocally(session);
        return session;
      } catch (error) {
        console.error("Failed to load session", error);
        setError("Failed to load game session. Please try again.");
        throw error;
      } finally {
        setIsLoadingSession(false);
      }
    },
    [setIsLoadingSession, setError, setCurrentSession, storeSessionLocally]
  );

  /**
   * End a game session
   */
  const endSession = useCallback(
    async (sessionId: string): Promise<GameSession> => {
      setIsLoadingSession(true);
      setError(null);

      try {
        // Use the server action to end a session
        const session = await endGame(sessionId);

        // If this was the current session, clear it
        if (currentSession && currentSession.id === sessionId) {
          setCurrentSession(null);
          storeSessionLocally(null);
        }

        return session;
      } catch (error) {
        console.error("Failed to end session", error);
        setError("Failed to end game session. Please try again.");
        throw error;
      } finally {
        setIsLoadingSession(false);
      }
    },
    [
      setIsLoadingSession,
      setError,
      currentSession,
      setCurrentSession,
      storeSessionLocally,
    ]
  );

  /**
   * Get active sessions for a character
   */
  const getActiveSessionsByCharacter = useCallback(
    async (characterId: string): Promise<GameSession[]> => {
      try {
        // Use the server action to get active sessions
        return await getGameSessions(characterId);
      } catch (error) {
        console.error("Failed to get active sessions", error);
        setError("Failed to get active sessions. Please try again.");
        throw error;
      }
    },
    [setError]
  );

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
  }, [pathname, currentSession, router, loadSession]);

  return {
    currentSession,
    isLoadingSession,
    error,
    createSession,
    loadSession,
    endSession,
    getActiveSessionsByCharacter,
  };
}
