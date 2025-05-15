import { Metadata, ResolvingMetadata } from "next";
import { notFound, redirect } from "next/navigation";
import { verifyGameSession } from "@/lib/actions/gameSession-actions";
import {
  getLatestGameStateForSession,
  getGameState,
} from "@/lib/actions/game-state-actions";
import {
  getWorldById,
  getWorldWithRelatedData,
} from "@/lib/actions/world-actions";
import { logger } from "@/lib/utils/logger";
import { GameContainer } from "@/components/containers";

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

    // Get the game state
    const gameState = await getGameState(latestStateId);

    if (!gameState) {
      logger.error("Game state not found despite having a valid ID", {
        context: "server-component",
        metadata: { component: "GamePage", sessionId, latestStateId },
      });
      return notFound();
    }

    // Initialize world data variables
    let world = null;
    let worldWithRelatedData = null;

    // Fetch world data directly if we have a worldId
    if (gameState.worldId) {
      logger.info("Fetching world data for game page", {
        context: "server-component",
        metadata: {
          component: "GamePage",
          sessionId,
          worldId: gameState.worldId,
        },
      });

      try {
        // Fetch in parallel for performance
        [world, worldWithRelatedData] = await Promise.all([
          getWorldById(gameState.worldId),
          getWorldWithRelatedData(gameState.worldId),
        ]);

        logger.debug("World data fetched successfully", {
          context: "server-component",
          metadata: {
            component: "GamePage",
            sessionId,
            worldId: gameState.worldId,
            hasWorld: !!world,
            hasWorldWithRelatedData: !!worldWithRelatedData,
            worldName: world?.name,
            locationsCount: worldWithRelatedData?.locations?.length,
          },
        });
      } catch (error) {
        logger.error("Failed to fetch world data", {
          context: "server-component",
          metadata: {
            component: "GamePage",
            sessionId,
            worldId: gameState.worldId,
            error,
          },
        });
        // Continue without world data rather than failing the entire page
      }
    } else {
      logger.warn("No worldId found in game state", {
        context: "server-component",
        metadata: {
          component: "GamePage",
          sessionId,
          gameStateId: latestStateId,
        },
      });
    }

    // Return the game container with all required data
    return (
      <main className="flex flex-col h-full w-full">
        <GameContainer
          sessionId={sessionId}
          initialStateId={latestStateId}
          initialGameState={gameState}
          world={world}
          worldWithRelatedData={worldWithRelatedData}
        />
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
