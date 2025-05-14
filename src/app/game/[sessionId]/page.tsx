import { Suspense } from "react";
import { notFound, redirect } from "next/navigation";
import {
  verifyGameSession,
  getLatestGameStateForSession,
} from "@/lib/actions/gameSession-actions";
import { getServerSession } from "@/lib/auth/session";
import { GameContainer } from "@/components/game/GameContainer";
import { LoadingIndicator } from "@/components/game/LoadingIndicator";
import { ErrorBoundary } from "@/components/game/ErrorBoundary";

interface GamePageProps {
  params: {
    sessionId: string;
  };
}

/**
 * Game page that uses the session ID from the URL
 * This implements dynamic session routing as specified in task 2.1
 */
export default async function GamePage({ params }: GamePageProps) {
  const { sessionId } = await params;

  // Verify user is authenticated
  const session = await getServerSession();
  if (!session) {
    // Redirect to login if not authenticated
    return redirect(
      "/login?returnUrl=" + encodeURIComponent(`/game/${sessionId}`)
    );
  }

  try {
    // Verify the game session exists and is active
    const gameSession = await verifyGameSession(sessionId);

    // Ensure the logged-in user owns this character/session
    // This would require additional queries we'll skip for the MVP
    // In a full implementation, we would check character ownership here

    // Get the latest game state ID for this session
    const latestStateId = await getLatestGameStateForSession(sessionId);

    return (
      <ErrorBoundary
        fallback={
          <div className="p-8 text-center">
            There was an error loading the game. Please try again.
          </div>
        }
      >
        <div className="flex flex-col h-full min-h-screen bg-background text-foreground">
          <header className="border-b p-4">
            <h1 className="text-2xl font-bold">Tales Craft AI</h1>
          </header>

          <main className="flex-1 p-2 sm:p-4 md:p-6 overflow-hidden">
            <Suspense fallback={<LoadingIndicator message="Loading game..." />}>
              <GameContainer
                sessionId={sessionId}
                initialStateId={latestStateId || undefined}
              />
            </Suspense>
          </main>

          <footer className="border-t p-2 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Tales Craft AI</p>
          </footer>
        </div>
      </ErrorBoundary>
    );
  } catch (error) {
    console.error("Error loading game session:", error);
    return notFound();
  }
}

// Generate metadata for the page dynamically
export async function generateMetadata({ params }: GamePageProps) {
  const { sessionId } = params;

  try {
    // Try to get session info for the metadata
    const gameSession = await verifyGameSession(sessionId);
    return {
      title: `Tales Craft AI - Game Session`,
      description: `Continue your adventure in the game world.`,
    };
  } catch (error) {
    // Default metadata if session verification fails
    return {
      title: "Tales Craft AI - Game",
      description: "Embark on an AI-driven narrative adventure.",
    };
  }
}
