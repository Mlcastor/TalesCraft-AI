import type { Metadata } from "next";
import { ReactNode } from "react";
import {
  getLatestGameStateForSession,
  getGameState,
} from "@/lib/actions/game-state-actions";
import { SafeSessionProvider } from "@/contexts/SafeSessionContext";
import { GameSettingsProvider } from "@/contexts/GameSettingsContext";
import { GameUIProvider } from "@/contexts/GameUIContext";
import { logger } from "@/lib/utils/logger";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Game Session | Tales Craft AI",
  description: "Interactive storytelling powered by AI",
};

interface GameLayoutProps {
  children: ReactNode;
  params: {
    sessionId: string;
  };
}

/**
 * Layout component for the game session
 * Provides session and game settings context to all game pages
 * No longer provides WorldProvider - world data is fetched directly at the page level
 */
export default async function GameLayout({
  children,
  params,
}: GameLayoutProps) {
  const { sessionId } = await params;

  try {
    // Verify the session exists
    const latestStateId = await getLatestGameStateForSession(sessionId);

    if (!latestStateId) {
      logger.warn(
        `No game state found for session ${sessionId} in game layout`,
        {
          context: "server-component",
          metadata: {
            component: "GameLayout",
            sessionId,
          },
        }
      );
      return notFound();
    }

    // Log success
    logger.debug(`Game layout loaded for session ${sessionId}`, {
      context: "server-component",
      metadata: {
        component: "GameLayout",
        sessionId,
      },
    });

    return (
      <SafeSessionProvider initialSessionId={sessionId}>
        <GameSettingsProvider>
          <GameUIProvider>
            <div className="flex flex-col h-full">{children}</div>
          </GameUIProvider>
        </GameSettingsProvider>
      </SafeSessionProvider>
    );
  } catch (error) {
    logger.error(`Error loading game layout for session ${sessionId}`, {
      context: "server-component",
      metadata: {
        component: "GameLayout",
        sessionId,
        error,
      },
    });
    return notFound();
  }
}
