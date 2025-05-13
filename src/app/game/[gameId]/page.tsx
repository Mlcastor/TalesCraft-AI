import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth/session";
import { GameSession } from "@/components/game/GameSession";
import { getGameSessionById } from "@/lib/actions/game-actions";
import { Suspense } from "react";

interface GamePageProps {
  params: {
    gameId: string;
  };
}

export async function generateMetadata({ params }: GamePageProps) {
  // In Next.js 15, we must await the params object itself
  const { gameId } = await params;

  return {
    title: `Game Session ${gameId} | Text-Based AI RPG`,
    description: "Immerse yourself in an AI-powered text adventure",
  };
}

/**
 * The Game Page renders the current game session interface.
 * Uses server actions for database operations following the service layer pattern.
 */
export default async function GamePage({ params }: GamePageProps) {
  // In Next.js 15, we must await the params object itself
  const { gameId } = await params;

  // Get the current user session - redirect to login if not authenticated
  const session = await getServerSession();
  if (!session) {
    return redirect("/auth/login?redirect=/game/" + encodeURIComponent(gameId));
  }

  try {
    // Fetch game session with all related data using the service layer
    const gameSessionData = await getGameSessionById(gameId);

    // If game session doesn't exist or is invalid
    if (!gameSessionData || !gameSessionData.original || !gameSessionData.ui) {
      console.warn(`Unable to load valid game session for ID: ${gameId}`);
      return redirect("/player-hub?error=invalid-game");
    }

    // Get the original game session and UI-formatted data
    const { original: gameSession, ui: gameSessionUI } = gameSessionData;

    // Verify the character belongs to the current user
    if (gameSession.character.userId !== session.user.id) {
      console.warn(
        `User ${session.user.id} attempted to access game session owned by ${gameSession.character.userId}`
      );
      return redirect("/player-hub?error=unauthorized");
    }

    // Render the game component with proper loading fallback
    return (
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center p-8 min-h-[50vh]">
            <div className="animate-pulse h-8 w-8 rounded-full bg-amber-500 mb-4"></div>
            <p className="text-gray-300">Loading your adventure...</p>
          </div>
        }
      >
        <GameSession
          gameSessionId={gameId}
          initialGameSession={gameSessionUI}
        />
      </Suspense>
    );
  } catch (error) {
    console.error("Error rendering game session:", error);
    return redirect("/player-hub?error=session-error");
  }
}
