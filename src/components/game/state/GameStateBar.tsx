"use client";

import { ChevronsDown } from "lucide-react";
import { World, WorldWithRelatedData } from "@/types/game";
import { CharacterPanel } from "./CharacterPanel";
import { WorldPanel } from "./WorldPanel";
import { LocationPanel } from "./LocationPanel";
import {
  useCharacterState,
  useWorldState,
  useCurrentLocation,
  useGameEngineLoading,
} from "@/hooks/game/useGameEngineSelectors";
import { useUIToggleActions } from "@/hooks/game/useGameUISelectors";

// Keep the props interface for backward compatibility
// but make most props optional since we'll use selectors
interface GameStateBarProps {
  // These props will be used if provided, otherwise we'll use selectors
  characterState?: Record<string, any>;
  worldState?: Record<string, any>;
  locationName?: string;
  world?: World | null;
  worldWithRelatedData?: WorldWithRelatedData | null;
  isLoading?: boolean;
  // This is still required as it's passed from the parent
  onExpand: () => void;
}

/**
 * GameStateBar component for displaying collapsed view of game state
 * Shows compact summaries of character, world, and location information
 * Uses selectors for optimized rendering
 *
 * @param props Component props
 * @returns Collapsed game state bar component
 */
export function GameStateBar({
  characterState: propCharacterState,
  worldState: propWorldState,
  locationName: propLocationName,
  world,
  worldWithRelatedData,
  isLoading: propIsLoading,
  onExpand,
}: GameStateBarProps) {
  // Use selectors as fallbacks for when props aren't provided
  const selectorCharacterState = useCharacterState();
  const selectorWorldState = useWorldState();
  const selectorLocationName = useCurrentLocation();
  const selectorIsLoading = useGameEngineLoading();

  // Use props if available, otherwise use selector values
  const characterState = propCharacterState || selectorCharacterState || {};
  const worldState = propWorldState || selectorWorldState || {};
  const locationName =
    propLocationName || selectorLocationName || "Unknown Location";
  const isLoading =
    propIsLoading !== undefined ? propIsLoading : selectorIsLoading;

  // Get UI toggle action
  const { toggleGameStatePanel } = useUIToggleActions();

  // Handler to either use the passed onExpand or the toggle from context
  const handleExpand = () => {
    if (onExpand) {
      onExpand();
    } else {
      toggleGameStatePanel();
    }
  };

  return (
    <div className="bg-muted/20 p-3 rounded-md relative">
      {isLoading && (
        <div className="absolute right-2 top-2 text-xs text-muted-foreground flex items-center">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse mr-1"></div>
          Loading world...
        </div>
      )}

      <div className="grid grid-cols-3 gap-4">
        {/* Character Panel */}
        <CharacterPanel characterState={characterState} isCompact />

        {/* World Panel */}
        <WorldPanel worldState={worldState} world={world} isCompact />

        {/* Location Panel */}
        <LocationPanel
          locationName={locationName}
          worldWithRelatedData={worldWithRelatedData}
          characterState={characterState}
          locationDescription={worldState?.locationDescription}
          isCompact
        />
      </div>

      <button
        onClick={handleExpand}
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Expand game state panel"
      >
        <ChevronsDown size={16} />
      </button>
    </div>
  );
}
