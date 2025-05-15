"use client";

import { ChevronUp } from "lucide-react";
import { World, WorldWithRelatedData } from "@/types/game";
import { CharacterPanel } from "./CharacterPanel";
import { WorldPanel } from "./WorldPanel";
import { LocationPanel } from "./LocationPanel";
import {
  useCharacterState,
  useWorldState,
  useCurrentLocation,
} from "@/hooks/game/useGameEngineSelectors";
import { useUIToggleActions } from "@/hooks/game/useGameUISelectors";

// Keep the props interface for backward compatibility
// but make most props optional since we'll use selectors
interface GameStateExpandedProps {
  // These props will be used if provided, otherwise we'll use selectors
  characterState?: Record<string, any>;
  worldState?: Record<string, any>;
  locationName?: string;
  world?: World | null;
  worldWithRelatedData?: WorldWithRelatedData | null;
  // This is still required as it's passed from the parent
  onCollapse: () => void;
}

/**
 * GameStateExpanded component for displaying detailed game state
 * Shows full information about character, world, and location
 * Uses selectors for optimized rendering
 *
 * @param props Component props
 * @returns Expanded game state component
 */
export function GameStateExpanded({
  characterState: propCharacterState,
  worldState: propWorldState,
  locationName: propLocationName,
  world,
  worldWithRelatedData,
  onCollapse,
}: GameStateExpandedProps) {
  // Use selectors as fallbacks for when props aren't provided
  const selectorCharacterState = useCharacterState();
  const selectorWorldState = useWorldState();
  const selectorLocationName = useCurrentLocation();

  // Use props if available, otherwise use selector values
  const characterState = propCharacterState || selectorCharacterState || {};
  const worldState = propWorldState || selectorWorldState || {};
  const locationName =
    propLocationName || selectorLocationName || "Unknown Location";

  // Get UI toggle action
  const { toggleGameStatePanel } = useUIToggleActions();

  // Handler to either use the passed onCollapse or the toggle from context
  const handleCollapse = () => {
    if (onCollapse) {
      onCollapse();
    } else {
      toggleGameStatePanel();
    }
  };

  return (
    <div className="bg-muted/20 p-3 rounded-md relative">
      <button
        onClick={handleCollapse}
        className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Collapse game state panel"
      >
        <ChevronUp size={16} />
      </button>

      <h3 className="text-sm font-semibold mb-4 pb-1 border-b border-muted">
        Game State
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Character Section */}
        <CharacterPanel characterState={characterState} />

        {/* World Section */}
        <WorldPanel worldState={worldState} world={world} />

        {/* Location & NPCs Section */}
        <LocationPanel
          locationName={locationName}
          worldWithRelatedData={worldWithRelatedData}
          characterState={characterState}
          locationDescription={worldState?.locationDescription}
        />
      </div>
    </div>
  );
}
