"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useGameSession } from "@/hooks/useGameSession";
import { GameSession } from "@/types/game";

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

// Create the context with undefined as initial value
const SessionContext = createContext<SessionContextType | undefined>(undefined);

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

  if (context === undefined) {
    throw new Error("useSafeSession must be used within a SafeSessionProvider");
  }

  return context;
}
