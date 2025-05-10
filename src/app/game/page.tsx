import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import GameClient from "./GameClient";
import { resumeGameSession } from "@/app/api/game/actions";

export default async function GamePage({
  searchParams,
}: {
  searchParams: { characterId?: string };
}) {
  // Get authenticated user
  const { userId } = await auth();
  const user = await currentUser();

  // Need to await searchParams in Next.js 14
  const params = await searchParams;

  if (!userId || !user) {
    redirect("/sign-in");
  }

  // If no character ID is provided, redirect to character selection
  if (!params.characterId) {
    redirect("/characters");
  }

  // Initialize the game on the server side using server actions
  const {
    gameState: initialGameState,
    session: initialSession,
    error,
  } = await resumeGameSession(params.characterId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <GameClient
        characterId={params.characterId}
        initialSession={initialSession}
        initialGameState={initialGameState}
        initialError={error}
      />
    </div>
  );
}
