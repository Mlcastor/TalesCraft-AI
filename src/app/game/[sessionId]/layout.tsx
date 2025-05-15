import { ReactNode } from "react";
import { SafeSessionProvider } from "@/contexts/SafeSessionContext";
import { GameSettingsProvider } from "@/contexts/GameSettingsContext";
import { WorldProvider } from "@/contexts/WorldProvider";

interface GameLayoutProps {
  children: ReactNode;
  params: {
    sessionId: string;
  };
}

/**
 * Layout component for game pages
 * Wraps all game content with SafeSessionProvider for session management,
 * GameSettingsProvider for game settings, and WorldProvider for world data.
 *
 * Order of providers is important:
 * 1. SafeSessionProvider - most basic, handles session authentication
 * 2. GameSettingsProvider - depends on session, handles user preferences
 * 3. WorldProvider - depends on both session and settings
 */
export default async function GameLayout({
  children,
  params,
}: GameLayoutProps) {
  const { sessionId } = await params;

  return (
    <SafeSessionProvider initialSessionId={sessionId}>
      <GameSettingsProvider>
        <WorldProvider>
          <div className="flex flex-col h-full">{children}</div>
        </WorldProvider>
      </GameSettingsProvider>
    </SafeSessionProvider>
  );
}
