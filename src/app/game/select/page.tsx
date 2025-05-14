import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getWorldById } from "@/lib/db/world";
import { characterRepository } from "@/lib/db/character";
import { upsertCharacterWorldState } from "@/lib/db/characterWorldState";
import { getWorldWithStartingLocations } from "@/lib/db/world";

// Updated interface to match Next.js 15's PageProps constraint
interface GameSelectPageProps {
  params: Promise<{ [key: string]: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

/**
 * Game Select Page - Handles character and world selection before launching the game
 * This page redirects to the game page with the selected character and world
 */
export default async function GameSelectPage({
  searchParams,
}: GameSelectPageProps) {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    redirect("/sign-in");
  }

  // Get the search params by awaiting the Promise
  const searchParamsData = await searchParams;

  // Get the characterId and worldId from the resolved search params
  const characterId =
    typeof searchParamsData.characterId === "string"
      ? searchParamsData.characterId
      : Array.isArray(searchParamsData.characterId)
      ? searchParamsData.characterId[0]
      : undefined;

  const worldId =
    typeof searchParamsData.worldId === "string"
      ? searchParamsData.worldId
      : Array.isArray(searchParamsData.worldId)
      ? searchParamsData.worldId[0]
      : undefined;

  // Validate parameters
  if (!characterId || !worldId) {
    redirect("/hub");
  }

  // Verify character belongs to user
  const character = await characterRepository.getCharacterById(characterId);

  if (!character || character.userId !== userId) {
    redirect("/hub");
  }

  // Verify world exists and is active
  const world = await getWorldById(worldId);

  if (!world || !world.isActive) {
    redirect("/hub");
  }

  // Get world with starting locations
  const worldWithLocations = await getWorldWithStartingLocations(worldId);

  if (
    !worldWithLocations ||
    !worldWithLocations.locations ||
    worldWithLocations.locations.length === 0
  ) {
    // No starting locations defined, cannot proceed
    console.error("No starting locations defined for world:", worldId);
    redirect("/hub");
  }

  // Get or create character world state
  // If it doesn't exist, set the current location to the first starting location
  const firstStartingLocation = worldWithLocations.locations[0];

  await upsertCharacterWorldState(characterId, worldId, {
    currentLocation: firstStartingLocation.name,
    lastPlayedAt: new Date(),
  });

  // Redirect to the game page with the selected character and world
  redirect(`/game?characterId=${characterId}&worldId=${worldId}`);
}
