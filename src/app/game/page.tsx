import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import GameClient from "./GameClient";
import { resumeGameSession } from "@/app/api/game/actions";

// Define the proper type for page props
interface GamePageProps {
  params: { slug?: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function GamePage({ searchParams }: GamePageProps) {
  // Get the search params in a way that's compatible with Next.js 15
  const searchParamsData = await Promise.resolve(searchParams);

  // Get the characterId from the resolved search params
  const characterId =
    typeof searchParamsData.characterId === "string"
      ? searchParamsData.characterId
      : Array.isArray(searchParamsData.characterId)
      ? searchParamsData.characterId[0]
      : undefined;

  // Get authenticated user
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    redirect("/sign-in");
  }

  // If no character ID is provided, redirect to character selection
  if (!characterId) {
    redirect("/characters");
  }

  // Initialize the game on the server side using server actions
  const {
    gameState: initialGameState,
    session: initialSession,
    error,
  } = await resumeGameSession(characterId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <GameClient
        characterId={characterId}
        initialSession={initialSession}
        initialGameState={initialGameState}
        initialError={error}
      />
    </div>
  );
}
