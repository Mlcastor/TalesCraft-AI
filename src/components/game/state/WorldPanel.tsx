"use client";

import { Globe } from "lucide-react";
import { World } from "@/types/game";

interface WorldPanelProps {
  worldState: Record<string, any>;
  world?: World | null;
  isCompact?: boolean;
}

interface EnhancedWorldState {
  name: string;
  description?: string;
  time?: {
    day: number;
    period: string;
  };
  weather?: string;
  locationDescription?: string;
  activeQuests?: Record<string, any>;
  [key: string]: any; // Allow for additional properties
}

/**
 * WorldPanel component to display world information
 * Shows world name, description, time, weather, and active quests
 *
 * @param props Component props
 * @returns World information display component
 */
export function WorldPanel({
  worldState,
  world,
  isCompact = false,
}: WorldPanelProps) {
  // Merge world data with props
  const enhancedWorldState: EnhancedWorldState = {
    // Start with worldState's properties
    ...(worldState || {}),
    // Override with values from world when available
    name: world?.name || worldState?.name || "Unknown",
    description: world?.description || worldState?.description,
  };

  // Get safe name for display
  const worldName = enhancedWorldState.name;

  // Compact view for inline/summary display
  if (isCompact) {
    return (
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground mb-1 flex items-center gap-1">
          <Globe size={14} />
          World
        </h3>
        <div className="text-sm">
          <p>
            <span className="font-medium">Name:</span> {worldName}
          </p>
          {enhancedWorldState?.time && (
            <p>
              <span className="font-medium">Time:</span>{" "}
              {`Day ${enhancedWorldState.time.day}, ${enhancedWorldState.time.period}`}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Full detailed view
  return (
    <div className="bg-background/30 p-3 rounded-md">
      <h4 className="text-sm font-semibold flex items-center gap-1 mb-3 pb-1 border-b border-muted">
        <Globe size={14} />
        World: {worldName}
      </h4>

      <div>
        {/* Description from world data */}
        {enhancedWorldState.description && (
          <div className="mb-2">
            <p className="text-xs font-medium">Description:</p>
            <p className="text-xs line-clamp-3">
              {enhancedWorldState.description}
            </p>
          </div>
        )}

        {/* Time */}
        {enhancedWorldState?.time && (
          <div className="mb-2">
            <p className="text-xs font-medium">Time:</p>
            <p className="text-sm">{`Day ${enhancedWorldState.time.day}, ${enhancedWorldState.time.period}`}</p>
          </div>
        )}

        {/* Weather */}
        {enhancedWorldState?.weather && (
          <div className="mb-2">
            <p className="text-xs font-medium">Weather:</p>
            <p className="text-sm">{enhancedWorldState.weather}</p>
          </div>
        )}

        {/* Active Quests */}
        {enhancedWorldState?.activeQuests &&
          Object.keys(enhancedWorldState.activeQuests).length > 0 && (
            <div>
              <p className="text-xs font-medium">Active Quests:</p>
              <ul className="text-xs ml-2 mt-1 space-y-1">
                {Object.entries(enhancedWorldState.activeQuests).map(
                  ([quest, status]: [string, any]) => (
                    <li key={quest} className="line-clamp-1">
                      • {quest}: {status}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
      </div>
    </div>
  );
}
