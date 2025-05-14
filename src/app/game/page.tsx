import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import GameClient from "./GameClient";
import { resumeGameSession } from "@/app/api/game/actions";
import { GameState } from "@/types/database";

// Extended game state with world and location relations
interface ExtendedGameState extends GameState {
  world?: {
    id: string;
    name?: string;
  };
  location?: {
    id: string;
    name?: string;
  };
}

// Updated interface to match Next.js 15's PageProps constraint
interface GamePageProps {
  params: Promise<{ slug?: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function GamePage({ searchParams }: GamePageProps) {
  // Get the search params by awaiting the Promise
  const searchParamsData = await searchParams;

  // Get the characterId from the resolved search params
  const characterId =
    typeof searchParamsData.characterId === "string"
      ? searchParamsData.characterId
      : Array.isArray(searchParamsData.characterId)
      ? searchParamsData.characterId[0]
      : undefined;

  // Get the worldId from the resolved search params
  const worldId =
    typeof searchParamsData.worldId === "string"
      ? searchParamsData.worldId
      : Array.isArray(searchParamsData.worldId)
      ? searchParamsData.worldId[0]
      : undefined;

  // Get the locationId from the resolved search params
  const locationId =
    typeof searchParamsData.locationId === "string"
      ? searchParamsData.locationId
      : Array.isArray(searchParamsData.locationId)
      ? searchParamsData.locationId[0]
      : undefined;

  console.log(
    `[GamePage] Starting game with characterId: ${characterId}, worldId: ${
      worldId || "none"
    }, locationId: ${locationId || "none"}`
  );

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
  console.log(
    `[GamePage] Calling resumeGameSession with worldId: ${
      worldId || "none"
    }, locationId: ${locationId || "none"}`
  );
  const {
    gameState: initialGameState,
    session: initialSession,
    error,
  } = await resumeGameSession(characterId, worldId, locationId);

  console.log(
    `[GamePage] Game initialized, has error: ${!!error}, has gameState: ${!!initialGameState}`
  );
  if (initialGameState) {
    console.log(
      `[GamePage] GameState worldId: ${
        initialGameState.worldId || "none"
      }, locationId: ${initialGameState.locationId || "none"}`
    );

    // Cast to extended type to check for world relation
    const extendedState = initialGameState as unknown as ExtendedGameState;
    console.log(
      `[GamePage] GameState has world relation: ${!!extendedState.world}, has location relation: ${!!extendedState.location}`
    );
    if (extendedState.world) {
      console.log(
        `[GamePage] World ID from relation: ${extendedState.world.id}`
      );
    }
    if (extendedState.location) {
      console.log(
        `[GamePage] Location ID from relation: ${extendedState.location.id}`
      );
    }
  }

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
