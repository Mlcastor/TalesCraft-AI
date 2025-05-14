import { Metadata, ResolvingMetadata } from "next";
import { notFound, redirect } from "next/navigation";
import { verifyGameSession } from "@/lib/actions/gameSession-actions";
import { getLatestGameStateForSession } from "@/lib/actions/game-state-actions";
import { logger } from "@/lib/utils/logger";
import { GameContainer } from "@/components/game/GameContainer";

// Define dynamic metadata generation for SEO optimization
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
 * @param props Component props containing session ID
 * @returns The game page with proper server-side validation
 */
export default async function GamePage({ params }: GamePageProps) {
  const { sessionId } = await params;

  try {
    // Verify the session exists and is active
    const session = await verifyGameSession(sessionId);

    // Get the latest game state ID for this session
    const latestStateId = await getLatestGameStateForSession(sessionId);

    // If no state exists, redirect to player hub
    if (!latestStateId) {
      logger.warn(
        `No game state found for session ${sessionId}, redirecting to player hub`
      );
      redirect("/player-hub");
    }

    // Return the game container with the session ID and latest state ID
    return (
      <main className="flex flex-col h-full w-full">
        <GameContainer sessionId={sessionId} initialStateId={latestStateId} />
      </main>
    );
  } catch (error) {
    // Log error for server-side debugging
    logger.error("Error loading game page", {
      context: "server-component",
      metadata: {
        component: "GamePage",
        sessionId,
        error,
      },
    });

    // If session doesn't exist or is inactive, return 404
    return notFound();
  }
}
