import {
  MVPCharacter,
  MVPCharacterWorldState,
  MVPWorldWithRelatedData,
} from "@/types/mvpTypes";
import { ThumbnailPanel } from "./ThumbnailPanel";
import { LoreFragmentsPanel } from "./LoreFragmentsPanel";
import { LocationsPanel } from "./LocationsPanel";
import { CharacterSelectionPanel } from "./CharacterSelectionPanel";
import { Card } from "@/components/ui/Primitives";

interface WorldDetailsCardProps {
  world: MVPWorldWithRelatedData;
  characters: MVPCharacter[];
  worldId: string;
  characterWorldStates: Record<string, MVPCharacterWorldState | null>;
}

/**
 * World Details Card Component
 *
 * Combines four detail panels in a layout:
 * - Left column (50%): Thumbnail (top) and Lore Fragments (bottom)
 * - Right column (50%): Character Selection (top) and Locations (bottom)
 */
export function WorldDetailsCard({
  world,
  characters,
  worldId,
  characterWorldStates,
}: WorldDetailsCardProps) {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Image & Lore */}
        <div className="flex flex-col space-y-6">
          {/* Thumbnail Panel */}
          <ThumbnailPanel
            thumbnailUrl={world.thumbnailUrl || null}
            altText={world.name}
          />

          {/* Lore Fragments Panel */}
          <LoreFragmentsPanel loreFragments={world.loreFragments} />
        </div>

        {/* Right Column - Character Selection & Locations */}
        <div className="flex flex-col space-y-6">
          {/* Character Selection Panel */}
          <CharacterSelectionPanel
            characters={characters}
            worldId={worldId}
            characterWorldStates={characterWorldStates}
          />

          {/* Locations Panel */}
          <LocationsPanel locations={world.locations} />
        </div>
      </div>
    </Card>
  );
}
