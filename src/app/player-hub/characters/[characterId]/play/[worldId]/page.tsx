import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth/session";
import GameSessionInitializerClient from "@/components/player-hub/characters/play/GameSessionInitializerClient";
import { logger } from "@/lib/utils/logger";

interface PlayGamePageProps {
  params: {
    characterId: string;
    worldId: string;
  };
}

/**
 * This page now acts as a server-side wrapper for the GameSessionInitializerClient.
 * It handles authentication and passes necessary props to the client component,
 * which then manages the game session creation/retrieval and redirection flow.
 */
export default async function PlayGamePage({ params }: PlayGamePageProps) {
  // In Next.js 15, we must await the params object itself
  const { characterId, worldId } = await params;

  logger.debug(
    `PlayGamePage (Server): Received request for Character: ${characterId}, World: ${worldId}`,
    { context: "PlayGamePage" }
  );

  // Ensure user is authenticated
  const session = await getServerSession();
  if (!session?.user) {
    logger.warn(
      "PlayGamePage (Server): User not authenticated, redirecting to login.",
      { context: "PlayGamePage" }
    );
    redirect("/auth/login?redirect=/player-hub");
  }

  // Render the client component that will handle the actual logic and redirection.
  // The client component will call getOrCreateGameSession.
  return (
    <GameSessionInitializerClient characterId={characterId} worldId={worldId} />
  );
}
