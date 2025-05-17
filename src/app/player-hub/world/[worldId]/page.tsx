import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getServerSession } from "@/lib/auth/session";
import { HubLayout } from "@/components/player-hub/HubLayout";
import { WorldDetails } from "@/components/player-hub/world/WorldDetails";
import {
  getMyCharactersAction,
  getCharacterWorldStateForWorldAction,
} from "@/lib/actions/characterActions";
import {
  getWorldByIdAction,
  getWorldWithRelatedDataAction,
} from "@/lib/actions/worldActions";
import { MVPCharacterWorldState } from "@/types/mvpTypes";

interface WorldDetailPageProps {
  params: Promise<{ worldId: string }>;
}

export async function generateMetadata({
  params,
}: WorldDetailPageProps): Promise<Metadata> {
  // In Next.js 15, we must await the params object itself
  const { worldId } = await params;
  const world = await getWorldByIdAction(worldId);

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
  // In Next.js 15, we must await the params object itself
  const { worldId } = await params;
  const session = await getServerSession();

  if (!session || !session.user.id) {
    redirect("/login");
  }

  // Get the world data with related entities
  const worldWithData = await getWorldWithRelatedDataAction(worldId);
  if (!worldWithData) {
    // World not found or not accessible
    redirect("/player-hub");
  }

  // Get the user's characters
  const characters = (await getMyCharactersAction()) || [];

  if (!characters || characters.length === 0) {
    // No characters available, redirect to character creation
    redirect(`/player-hub/characters/create?worldId=${worldId}`);
  }

  // Get the character-world states for each character
  const characterWorldStates: Record<string, MVPCharacterWorldState | null> =
    {};

  for (const character of characters) {
    try {
      // This now uses findCharacterWorldState which returns null instead of throwing an error
      const state = await getCharacterWorldStateForWorldAction(
        character.id,
        worldId
      );
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
      title=""
      backLink={{
        href: "/player-hub",
        label: "Back to Hub",
      }}
    >
      <div className="mb-8">
        {/* World details panel */}
        <WorldDetails
          world={worldWithData}
          characters={characters}
          worldId={worldId}
          characterWorldStates={characterWorldStates}
        />
      </div>
    </HubLayout>
  );
}
