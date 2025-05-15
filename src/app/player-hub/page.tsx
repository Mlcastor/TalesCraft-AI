import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getServerSession } from "@/lib/auth/session";
import { HubLayout } from "@/components/player-hub/HubLayout";
import { CharacterPanel } from "@/components/player-hub/CharacterPanel";
import { WorldsPanel } from "@/components/player-hub/WorldsPanel";
import {
  getUserCharacters,
  getAllCharacterWorldStates,
} from "@/lib/actions/character-actions";
import { getAllActiveWorlds } from "@/lib/actions/world-actions";

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
  const characters = (await getUserCharacters()) || [];
  const worlds = await getAllActiveWorlds();

  // Get character-world states for each character
  const characterWorldStatesByCharacter = await getAllCharacterWorldStates(
    characters.map((char) => char.id)
  );

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
