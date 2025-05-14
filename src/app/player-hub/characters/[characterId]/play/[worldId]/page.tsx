import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth/session";
import { getOrCreateGameSession } from "@/lib/actions/game-session-actions";

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
    redirect("/auth/login?redirect=/player-hub");
  }

  // Handle session retrieval without using try/catch around the redirect
  let sessionId;
  try {
    // Get the game session ID
    sessionId = await getOrCreateGameSession(characterId, worldId);
    console.log(`Game session created/found: ${sessionId}, redirecting...`);
  } catch (error) {
    console.error("Error creating game session:", error);
    redirect(`/player-hub/world/${worldId}?error=failed_to_start_game`);
  }

  // Redirect OUTSIDE the try/catch block
  // This line will only execute if the session was successfully created
  redirect(`/game/${sessionId}`);
}
