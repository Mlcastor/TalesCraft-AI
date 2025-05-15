"use client";

import { useState } from "react";
import {
  Map,
  User,
  Globe,
  MapPin,
  ChevronDown,
  ChevronUp,
  ChevronsDown,
  Heart,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import { useWorld } from "@/contexts/WorldProvider";

interface GameStateIndicatorProps {
  characterState: Record<string, any>;
  worldState: Record<string, any>;
  location: string;
}

/**
 * Component for displaying current game state information
 * Enhanced with:
 * - Visual indicators for character status
 * - Location awareness with minimap
 * - NPC relationship indicators
 */
export function GameStateIndicator({
  characterState,
  worldState,
  location,
}: GameStateIndicatorProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentWorld, worldWithRelatedData } = useWorld();

  // Toggle expanded view
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Helper function to render a stat bar
  const renderStatBar = (
    value: number,
    maxValue: number = 100,
    color: string = "bg-primary"
  ) => {
    const percentage = Math.min(100, Math.max(0, (value / maxValue) * 100));

    return (
      <div className="h-2 bg-muted w-full rounded-full overflow-hidden">
        <div
          className={`h-full ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  };

  // Get NPC relationships from character state
  const relationships = characterState.relationships || {};
  const npcs = Object.keys(relationships).map((name) => ({
    name,
    relationship: relationships[name],
  }));

  // Determine relationship color
  const getRelationshipColor = (value: number) => {
    if (value >= 75) return "text-green-500";
    if (value >= 50) return "text-blue-500";
    if (value >= 25) return "text-amber-500";
    return "text-red-500";
  };

  // Function to get location details if available
  const getLocationDetails = () => {
    if (!worldWithRelatedData?.locations || !location) return null;

    // Try to find the location in the world data
    const locationData = worldWithRelatedData.locations.find(
      (loc: any) => loc.name.toLowerCase() === location.toLowerCase()
    );

    return locationData;
  };

  const locationDetails = getLocationDetails();

  // Basic collapsed view
  if (!isExpanded) {
    return (
      <div className="bg-muted/20 p-3 rounded-md grid grid-cols-3 gap-4">
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-1 flex items-center gap-1">
            <User size={14} />
            Character
          </h3>
          <div className="text-sm">
            <p>
              <span className="font-medium">Name:</span>{" "}
              {characterState.name || "Unknown"}
            </p>
            {characterState.health !== undefined && (
              <div className="mt-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium">Health:</span>{" "}
                  <span>{characterState.health}</span>
                </div>
                {renderStatBar(characterState.health, 100, "bg-red-500")}
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-1 flex items-center gap-1">
            <Globe size={14} />
            World
          </h3>
          <div className="text-sm">
            <p>
              <span className="font-medium">Name:</span>{" "}
              {currentWorld?.name || worldState.name || "Unknown"}
            </p>
            {worldState.time && (
              <p>
                <span className="font-medium">Time:</span>{" "}
                {`Day ${worldState.time.day}, ${worldState.time.period}`}
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-1 flex items-center gap-1">
            <MapPin size={14} />
            Location
          </h3>
          <div className="text-sm">
            <p>{location || "Unknown"}</p>
            {locationDetails && (
              <p className="text-xs text-muted-foreground truncate">
                {locationDetails.description?.substring(0, 50)}
                {locationDetails.description?.length > 50 ? "..." : ""}
              </p>
            )}
          </div>
        </div>

        <button
          onClick={toggleExpanded}
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Expand game state panel"
        >
          <ChevronsDown size={16} />
        </button>
      </div>
    );
  }

  // Expanded view with more details
  return (
    <div className="bg-muted/20 p-3 rounded-md relative">
      <button
        onClick={toggleExpanded}
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
        <div className="bg-background/30 p-3 rounded-md">
          <h4 className="text-sm font-semibold flex items-center gap-1 mb-3 pb-1 border-b border-muted">
            <User size={14} />
            Character: {characterState.name || "Unknown"}
          </h4>

          <div className="space-y-3">
            {/* Health */}
            {characterState.health !== undefined && (
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium flex items-center gap-1">
                    <Heart size={12} className="text-red-500" /> Health:
                  </span>
                  <span>{characterState.health}/100</span>
                </div>
                {renderStatBar(characterState.health, 100, "bg-red-500")}
              </div>
            )}

            {/* Defense */}
            {characterState.defense !== undefined && (
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium flex items-center gap-1">
                    <Shield size={12} className="text-blue-500" /> Defense:
                  </span>
                  <span>{characterState.defense}/100</span>
                </div>
                {renderStatBar(characterState.defense, 100, "bg-blue-500")}
              </div>
            )}

            {/* Energy */}
            {characterState.energy !== undefined && (
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium flex items-center gap-1">
                    <Zap size={12} className="text-yellow-500" /> Energy:
                  </span>
                  <span>{characterState.energy}/100</span>
                </div>
                {renderStatBar(characterState.energy, 100, "bg-yellow-500")}
              </div>
            )}

            {/* Traits */}
            {characterState.traits && characterState.traits.length > 0 && (
              <div className="mt-2">
                <p className="text-xs font-medium mb-1">Traits:</p>
                <div className="flex flex-wrap gap-1">
                  {characterState.traits.map((trait: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-0.5 bg-primary/10 rounded-full"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* World Section */}
        <div className="bg-background/30 p-3 rounded-md">
          <h4 className="text-sm font-semibold flex items-center gap-1 mb-3 pb-1 border-b border-muted">
            <Globe size={14} />
            World: {currentWorld?.name || worldState.name || "Unknown"}
          </h4>

          <div>
            {/* Description from world data */}
            {currentWorld?.description && (
              <div className="mb-2">
                <p className="text-xs font-medium">Description:</p>
                <p className="text-xs line-clamp-3">
                  {currentWorld.description}
                </p>
              </div>
            )}

            {/* Time */}
            {worldState.time && (
              <div className="mb-2">
                <p className="text-xs font-medium">Time:</p>
                <p className="text-sm">{`Day ${worldState.time.day}, ${worldState.time.period}`}</p>
              </div>
            )}

            {/* Weather */}
            {worldState.weather && (
              <div className="mb-2">
                <p className="text-xs font-medium">Weather:</p>
                <p className="text-sm">{worldState.weather}</p>
              </div>
            )}

            {/* Active Quests */}
            {worldState.activeQuests &&
              Object.keys(worldState.activeQuests).length > 0 && (
                <div>
                  <p className="text-xs font-medium">Active Quests:</p>
                  <ul className="text-xs ml-2 mt-1 space-y-1">
                    {Object.entries(worldState.activeQuests).map(
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

        {/* Location & NPCs Section */}
        <div className="bg-background/30 p-3 rounded-md">
          <h4 className="text-sm font-semibold flex items-center gap-1 mb-3 pb-1 border-b border-muted">
            <MapPin size={14} />
            Location: {location || "Unknown"}
          </h4>

          <div>
            {/* Location Description */}
            {locationDetails ? (
              <div className="mb-2">
                <p className="text-xs font-medium">Description:</p>
                <p className="text-xs">{locationDetails.description}</p>
              </div>
            ) : (
              <div className="mb-2">
                <p className="text-xs">
                  {worldState.locationDescription || ""}
                </p>
              </div>
            )}

            {/* Connected Locations */}
            {locationDetails?.connected_location_ids &&
              locationDetails.connected_location_ids.length > 0 && (
                <div className="mb-2">
                  <p className="text-xs font-medium">Connected locations:</p>
                  <ul className="text-xs ml-2 mt-1">
                    {locationDetails.connected_location_ids.map(
                      (locId: string) => {
                        const connectedLoc =
                          worldWithRelatedData?.locations.find(
                            (l: any) => l.id === locId
                          );
                        return (
                          <li key={locId}>
                            • {connectedLoc?.name || "Unknown"}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              )}

            {/* NPCs at this location */}
            {characterState.npcsPresent &&
              characterState.npcsPresent.length > 0 && (
                <div>
                  <p className="text-xs font-medium">NPCs Present:</p>
                  <ul className="text-xs ml-2 mt-1">
                    {characterState.npcsPresent.map((npc: string) => (
                      <li key={npc}>• {npc}</li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
