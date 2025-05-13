import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getServerSession } from "@/lib/auth/session";
import { HubLayout } from "@/components/player-hub/HubLayout";
import { CharacterSelection } from "@/components/player-hub/CharacterSelection";
import { WorldDetails } from "@/components/player-hub/WorldDetails";
import { getUserCharacters } from "@/lib/actions/character-actions";
import { getWorldById } from "@/lib/actions/world-actions";
import { getCharacterWorldStateForWorld } from "@/lib/actions/character-actions";
import { CharacterWorldStateWithWorld } from "@/types/database";

interface WorldDetailPageProps {
  params: { worldId: string };
}

export async function generateMetadata({
  params,
}: WorldDetailPageProps): Promise<Metadata> {
  const world = await getWorldById(params.worldId);

  if (!world) {
    return {
      title: "World Not Found | Tales Craft AI",
    };
  }

  return {
    title: `${world.name} | Tales Craft AI`,
    description: world.description || "Explore this exciting game world",
  };
}

/**
 * World Detail Page
 *
 * Displays information about a specific world and allows players to select a character to enter it.
 */
export default async function WorldDetailPage({
  params,
}: WorldDetailPageProps) {
  const { worldId } = params;
  const session = await getServerSession();

  if (!session || !session.user.id) {
    redirect("/login");
  }

  // Get the world data with related entities
  const world = await getWorldById(worldId);

  if (!world) {
    // World not found or not accessible
    redirect("/player-hub");
  }

  // Get the user's characters
  const characters = (await getUserCharacters()) || [];

  if (!characters || characters.length === 0) {
    // No characters available, redirect to character creation
    redirect("/player-hub/characters/create");
  }

  // Get the character-world states for each character
  const characterWorldStates: Record<
    string,
    CharacterWorldStateWithWorld | null
  > = {};

  for (const character of characters) {
    try {
      // This now uses findCharacterWorldState which returns null instead of throwing an error
      const state = await getCharacterWorldStateForWorld(character.id, worldId);
      characterWorldStates[character.id] = state;
    } catch (error) {
      // If there's still an error (just to be safe), log it and continue
      console.error(
        `Error fetching world state for character ${character.id} in world ${worldId}:`,
        error
      );
      characterWorldStates[character.id] = null;
    }
  }

  return (
    <HubLayout
      title={`Enter ${world.name}`}
      description={world.description || undefined}
      backLink={{
        href: "/player-hub",
        label: "Back to Hub",
      }}
    >
      {/* Character Selection */}
      <CharacterSelection
        characters={characters}
        worldId={worldId}
        characterWorldStates={characterWorldStates}
      />

      {/* World Details */}
      <WorldDetails world={world} />
    </HubLayout>
  );
}
