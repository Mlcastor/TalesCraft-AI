import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth/session";
import { getOrCreateGameSession } from "@/lib/actions/game-actions";

interface PlayGamePageProps {
  params: {
    characterId: string;
    worldId: string;
  };
}

/**
 * This page handles starting a game session and redirecting to the game page
 * It receives character and world IDs from the URL parameters
 */
export default async function PlayGamePage({ params }: PlayGamePageProps) {
  // In Next.js 15, we must await the params object itself
  const { characterId, worldId } = await params;

  console.log(`Creating game for character: ${characterId}, world: ${worldId}`);

  // Ensure user is authenticated
  const session = await getServerSession();
  if (!session?.user) {
    console.log("User not authenticated, redirecting to login");
    return redirect("/auth/login?redirect=/player-hub");
  }

  // Don't use try/catch for redirects - they're not errors
  // Instead, handle each decision point with explicit redirects

  // Create or get the game session
  const gameSession = await getOrCreateGameSession(characterId, worldId);

  // If game session creation failed
  if (!gameSession) {
    console.warn(
      `Failed to create game session for character: ${characterId}, world: ${worldId}`
    );
    return redirect(`/player-hub/world/${worldId}?error=failed_to_start_game`);
  }

  console.log(`Game session created/found: ${gameSession.id}`);

  // Everything successful - redirect to game page
  return redirect(`/game/${gameSession.id}`);
}
