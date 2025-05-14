"use client";

import { GameEngineProvider } from "@/lib/game-engine";
import type { GameSession, GameState } from "@/types/database";
import { GameContainer } from "./components/GameContainer";
import { useEffect } from "react";

interface GameClientProps {
  characterId: string;
  initialSession: GameSession | null;
  initialGameState: GameState | null;
  initialError: string | null;
}

/**
 * Main game client component that provides the game engine context
 */
export default function GameClient({
  characterId,
  initialSession,
  initialGameState,
  initialError,
}: GameClientProps) {
  // Log the world ID from the initial game state
  useEffect(() => {
    if (initialGameState) {
      console.log(`[GameClient] Initializing with characterId: ${characterId}`);
      console.log(
        `[GameClient] Initial gameState worldId: ${
          initialGameState.worldId || "none"
        }`
      );

      // Check for world in extended state
      const extendedState = initialGameState as any;
      if (extendedState.world?.id) {
        console.log(
          `[GameClient] World ID from relation: ${extendedState.world.id}`
        );
      }
    }
  }, [characterId, initialGameState]);

  return (
    <GameEngineProvider
      initialSession={initialSession}
      initialGameState={initialGameState}
      initialError={initialError}
    >
      <GameContainer characterId={characterId} />
    </GameEngineProvider>
  );
}
