"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useGameSession } from "@/hooks/useGameSession";
import { GameSession } from "@/types/game";
import { logger } from "@/lib/utils/logger";

// Type for the context
interface SessionContextType {
  currentSession: GameSession | null;
  isLoadingSession: boolean;
  error: string | null;
  createSession: (characterId: string, worldId: string) => Promise<GameSession>;
  loadSession: (sessionId: string) => Promise<GameSession | null>;
  endSession: (sessionId: string) => Promise<GameSession>;
  getActiveSessionsByCharacter: (characterId: string) => Promise<GameSession[]>;
}

// Default emergency fallback implementation
const fallbackEndSession = async (sessionId: string): Promise<GameSession> => {
  logger.warn("Using fallback endSession implementation", {
    context: "session-context",
    metadata: { sessionId },
  });

  try {
    // Direct import to avoid circular dependencies
    const { endGame } = await import("@/lib/actions/gameSession-actions");
    return await endGame(sessionId);
  } catch (error) {
    logger.error("Fallback endSession failed", {
      context: "session-context",
      metadata: { sessionId, error },
    });
    throw error;
  }
};

// Create the context with a default fallback value that provides minimal functionality
const defaultContextValue: SessionContextType = {
  currentSession: null,
  isLoadingSession: false,
  error: null,
  createSession: async () => {
    logger.error("createSession called before context was initialized");
    throw new Error("Session context not initialized");
  },
  loadSession: async () => {
    logger.error("loadSession called before context was initialized");
    return null;
  },
  endSession: fallbackEndSession,
  getActiveSessionsByCharacter: async () => {
    logger.error(
      "getActiveSessionsByCharacter called before context was initialized"
    );
    return [];
  },
};

// Create the context with the default value
const SessionContext = createContext<SessionContextType>(defaultContextValue);

interface SessionProviderProps {
  children: ReactNode;
  initialSessionId?: string;
}

/**
 * Safe SessionProvider component that uses the useGameSession hook
 * instead of directly accessing server components.
 * This component is safe to use in client components.
 */
export function SafeSessionProvider({
  children,
  initialSessionId,
}: SessionProviderProps) {
  // Use our custom hook that safely uses server actions
  const sessionHook = useGameSession(initialSessionId);

  return (
    <SessionContext.Provider value={sessionHook}>
      {children}
    </SessionContext.Provider>
  );
}

/**
 * Hook for using session context in components
 */
export function useSafeSession(): SessionContextType {
  const context = useContext(SessionContext);

  // Instead of throwing an error, return the default context with fallbacks
  if (context === undefined) {
    logger.warn(
      "useSafeSession used outside of SafeSessionProvider - using fallback implementation"
    );
    return defaultContextValue;
  }

  return context;
}
