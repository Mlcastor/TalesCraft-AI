import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getServerSession } from "@/lib/auth/session";
import { HubLayout } from "@/components/player-hub/HubLayout";
import { CharacterPanel } from "@/components/player-hub/CharacterPanel";
import { WorldsPanel } from "@/components/player-hub/WorldsPanel";
import {
  getMyCharactersAction,
  getCharacterWorldStatesByCharacterIdAction,
} from "@/lib/actions/characterActions";
import { getAllWorldsAction } from "@/lib/actions/worldActions";

export const metadata: Metadata = {
  title: "Player Hub | Tales Craft AI",
  description: "Manage your characters and explore game worlds",
};

/**
 * PlayerHub Page
 *
 * Main hub page for managing characters and exploring available worlds.
 */
export default async function PlayerHubPage() {
  const session = await getServerSession();

  if (!session || !session.user.id) {
    redirect("/login");
  }

  // Fetch characters and worlds
  const dbCharacters = (await getMyCharactersAction()) || [];
  const characters = dbCharacters.map((char) => ({
    ...char,
    backstory: char.backstory ?? null,
    appearanceDescription: char.appearanceDescription ?? null,
    lastPlayedAt: char.lastPlayedAt ?? null,
  }));
  const dbWorlds = await getAllWorldsAction();
  const worlds = dbWorlds.map((world) => ({
    ...world,
    thumbnailUrl: world.thumbnailUrl ?? null,
    description: world.description ?? null,
  }));

  // Get character-world states for each character
  // Create a record to store world states by character ID
  const characterWorldStatesByCharacter: Record<string, any[]> = {};

  // Loop through each character and fetch their world states
  for (const character of characters) {
    const worldStates = await getCharacterWorldStatesByCharacterIdAction(
      character.id
    );
    characterWorldStatesByCharacter[character.id] = worldStates;
  }

  return (
    <HubLayout
      title="Player Hub"
      description="Manage your characters and explore different worlds in your adventures."
    >
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Characters Panel */}
        <div className="col-span-1">
          <CharacterPanel
            characters={characters}
            characterWorldStates={characterWorldStatesByCharacter}
          />
        </div>

        {/* Worlds Panel */}
        <div className="col-span-1 lg:col-span-2">
          <WorldsPanel worlds={worlds} hasCharacters={characters.length > 0} />
        </div>
      </div>
    </HubLayout>
  );
}
