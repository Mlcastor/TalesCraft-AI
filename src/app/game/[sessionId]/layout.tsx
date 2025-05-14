import { ReactNode } from "react";
import { SafeSessionProvider } from "@/contexts/SafeSessionContext";
import { GameSettingsProvider } from "@/contexts/GameSettingsContext";

interface GameLayoutProps {
  children: ReactNode;
  params: {
    sessionId: string;
  };
}

/**
 * Layout component for game pages
 * Wraps all game content with SafeSessionProvider for session management
 * and GameSettingsProvider for game settings
 */
export default async function GameLayout({
  children,
  params,
}: GameLayoutProps) {
  const { sessionId } = await params;

  return (
    <SafeSessionProvider initialSessionId={sessionId}>
      <GameSettingsProvider>
        <div className="flex flex-col h-full">{children}</div>
      </GameSettingsProvider>
    </SafeSessionProvider>
  );
}
