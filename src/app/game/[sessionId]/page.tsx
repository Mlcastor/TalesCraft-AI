import { redirect } from "next/navigation";
import GameLayout from "@/components/game/GameLayout";
import { GameProvider } from "@/contexts/GameProvider";
import NarrativeDisplay from "@/components/game/NarrativeDisplay";
import GameControls from "@/components/game/GameControls";
import { verifyGameSession } from "@/lib/actions/gameSession-actions";
import {
  getLatestGameStateForSession,
  loadGameState,
} from "@/lib/actions/game-state-actions";
import { Metadata, ResolvingMetadata } from "next";
import { GameSession, GameState } from "@/types/game";
import { logger } from "@/lib/utils/logger";

/// Define dynamic metadata generation for SEO optimization
export async function generateMetadata(
  { params }: { params: { sessionId: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Read route parameters
  const { sessionId } = await params;

  try {
    // Verify the session exists and is active
    const session = await verifyGameSession(sessionId);
    const sessionData = session.sessionData as Record<string, any>;
    const characterName = sessionData?.characterName || "Player";
    const worldName = sessionData?.worldName || "Game World";

    return {
      title: `${characterName} | ${worldName} - Tales Craft AI`,
      description: `Join ${characterName} on their adventure in ${worldName}. An AI-powered narrative experience by Tales Craft AI.`,
      openGraph: {
        title: `${characterName}'s Adventure in ${worldName}`,
        description: `Join ${characterName} on their adventure in ${worldName}. An AI-powered narrative experience by Tales Craft AI.`,
        type: "website",
      },
    };
  } catch (error) {
    // In case of error, return generic metadata
    return {
      title: "Tales Craft AI",
      description: "AI-powered narrative adventures",
    };
  }
}

type GamePageProps = {
  params: {
    sessionId: string;
  };
};

/**
 * Game page that renders a specific game session.
 * It fetches session details and initial game state on the server
 * and passes them to the GameProvider.
 *
 * @param props Component props containing session ID
 * @returns The game page with proper server-side validation and data
 */
export default async function GamePage({ params }: GamePageProps) {
  const { sessionId } = await params;
  let sessionDetails: GameSession | null = null;
  let initialGameState: GameState | null = null;

  try {
    sessionDetails = await verifyGameSession(sessionId); // Verifies and returns session if active

    if (sessionDetails) {
      const latestStateId = await getLatestGameStateForSession(sessionId);
      if (latestStateId) {
        initialGameState = await loadGameState(latestStateId);
        if (!initialGameState) {
          logger.warn(
            `GamePage: Failed to load game state for stateId ${latestStateId}, session ${sessionId}. The state might be corrupted or missing.`,
            { context: "GamePage" }
          );
        }
      } else {
        // This could happen if a session was created but the initial narrative/state population failed or hasn't completed.
        logger.warn(
          `GamePage: No latest game state ID found for session ${sessionId}. This might indicate an incomplete game initialization.`,
          { context: "GamePage" }
        );
      }
    }
  } catch (error) {
    logger.error(
      `GamePage: Error during initial data fetching for session ${sessionId}.`,
      {
        context: "GamePage",
        error: error instanceof Error ? error : new Error(String(error)),
      }
    );
    // Redirect to player hub with a generic error; specific errors are logged server-side.
    redirect("/player-hub?error=game_load_failed");
  }

  // If sessionDetails is null, verifyGameSession likely threw, leading to the redirect above.
  // If it didn't throw but returned null (shouldn't happen with verifyGameSession's design), redirect.
  if (!sessionDetails) {
    logger.error(
      `GamePage: Session details not found for session ${sessionId} after checks, redirecting.`,
      { context: "GamePage" }
    );
    redirect("/player-hub?error=invalid_session");
  }

  // If initialGameState is still null here, the game cannot be started properly.
  if (!initialGameState) {
    logger.error(
      `GamePage: Initial game state could not be loaded for session ${sessionId}. The session might be corrupted, incomplete, or the initial narrative generation failed.`,
      { context: "GamePage" }
    );
    redirect("/player-hub?error=game_state_load_failed");
  }

  // Extract characterId and worldId. Prefer values from the GameState if available,
  // as sessionData might be less frequently updated.
  const characterId =
    initialGameState?.characterId || sessionDetails.characterId;
  const worldId =
    initialGameState?.worldId ||
    (sessionDetails.sessionData as Record<string, any>)?.worldId;

  if (!characterId || !worldId) {
    logger.error(
      `GamePage: Essential characterId or worldId missing for session ${sessionId}. CharID: ${characterId}, WorldID: ${worldId}. Derived from initialGameState and sessionDetails.`,
      { context: "GamePage" }
    );
    redirect("/player-hub?error=missing_essential_ids");
  }

  const displayCharacterName =
    initialGameState?.characterState?.name ||
    (sessionDetails.sessionData as Record<string, any>)?.characterName ||
    "Character";
  const displayWorldName =
    initialGameState?.worldState?.name ||
    (sessionDetails.sessionData as Record<string, any>)?.worldName ||
    "World";

  return (
    <GameProvider
      sessionId={sessionId}
      initialGameState={initialGameState}
      characterId={characterId}
      worldId={worldId}
    >
      <GameLayout>
        <div className="flex flex-col h-full max-w-4xl mx-auto">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold">{displayCharacterName}</h1>
            <p className="text-sm text-muted-foreground">
              Playing in {displayWorldName}
            </p>
          </div>

          <div className="flex-1 overflow-hidden p-4">
            <NarrativeDisplay />
          </div>

          <div className="p-4 border-t bg-background">
            <GameControls />
          </div>
        </div>
      </GameLayout>
    </GameProvider>
  );
}
