"use client";

import { ReactNode } from "react";
import { SessionProvider } from "@/contexts/SessionContext";
import { GameSettingsProvider } from "@/contexts/GameSettingsContext";

interface GameLayoutProps {
  children: ReactNode;
  params: {
    sessionId: string;
  };
}

/**
 * Layout component for game pages
 * Wraps all game content with SessionProvider for session management
 * and GameSettingsProvider for game settings
 */
export default function GameLayout({ children, params }: GameLayoutProps) {
  const { sessionId } = params;

  return (
    <SessionProvider initialSessionId={sessionId}>
      <GameSettingsProvider>
        <div className="flex flex-col h-full">{children}</div>
      </GameSettingsProvider>
    </SessionProvider>
  );
}
