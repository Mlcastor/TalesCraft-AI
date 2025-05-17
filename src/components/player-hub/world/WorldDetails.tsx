import {
  MVPCharacter,
  MVPCharacterWorldState,
  MVPWorldWithRelatedData,
} from "@/types/mvpTypes";
import { TitlePanel } from "./TitlePanel";
import { WorldDetailsCard } from "./WorldDetailsCard";

interface WorldDetailsProps {
  world: MVPWorldWithRelatedData;
  characters: MVPCharacter[];
  worldId: string;
  characterWorldStates: Record<string, MVPCharacterWorldState | null>;
  isLoading?: boolean;
}

/**
 * World Details Component
 *
 * Displays detailed information about a world using the new component structure:
 * - Title Panel at the top
 * - Grid layout below with thumbnail, lore, characters, and locations
 */
export function WorldDetails({
  world,
  characters,
  worldId,
  characterWorldStates,
  isLoading = false,
}: WorldDetailsProps) {
  if (isLoading) {
    return (
      <div>
        <div className="mb-6 animate-pulse">
          <div className="h-10 bg-gray-700 w-1/2 mx-auto rounded-lg mb-3"></div>
          <div className="h-4 bg-gray-700 w-3/4 mx-auto rounded"></div>
        </div>
        <div className="rounded-lg bg-gray-800 h-[600px] animate-pulse"></div>
      </div>
    );
  }

  return (
    <div>
      <TitlePanel world={world} />
      <WorldDetailsCard
        world={world}
        characters={characters}
        worldId={worldId}
        characterWorldStates={characterWorldStates}
      />
    </div>
  );
}
