import { redirect } from "next/navigation";
import GameLayout from "@/components/game/GameLayout";
import { GameProvider } from "@/contexts/GameProvider";
import NarrativeDisplay from "@/components/game/NarrativeDisplay";
import GameControls from "@/components/game/GameControls";
import {
  getLatestGameStateForSession,
  getGameState,
} from "@/lib/actions/game-state-actions";
import { verifyGameSession } from "@/lib/actions/gameSession-actions";
import { Metadata, ResolvingMetadata } from "next";

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
 * Game page that renders a specific game session
 *
 * This component:
 * 1. Validates the session
 * 2. Fetches the latest game state
 * 3. Fetches world data if a worldId exists
 * 4. Passes all necessary data to the GameContainer
 *
 * @param props Component props containing session ID
 * @returns The game page with proper server-side validation
 */
export default async function GamePage({ params }: GamePageProps) {
  const { sessionId } = await params;

  const stateId = await getLatestGameStateForSession(sessionId);
  if (!stateId) {
    redirect("/player-hub");
  }
  const state = await getGameState(stateId);
  if (!state) {
    redirect("/player-hub");
  }

  return (
    <GameProvider
      autoInitializeCharacterId={state.characterId}
      autoInitializeWorldId={state.worldId}
    >
      <GameLayout>
        <div className="flex flex-col h-full max-w-4xl mx-auto">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold">{state.characterId}</h1>
            <p className="text-sm text-muted-foreground">
              {state.worldId} - {state.locationId}
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
