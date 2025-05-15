"use client";

import { MapPin } from "lucide-react";
import { WorldWithRelatedData } from "@/types/game";

interface LocationPanelProps {
  locationName: string;
  worldWithRelatedData?: WorldWithRelatedData | null;
  characterState: Record<string, any>;
  locationDescription?: string;
  isCompact?: boolean;
}

/**
 * LocationPanel component to display location information
 * Shows location name, description, connected locations, and NPCs present
 *
 * @param props Component props
 * @returns Location information display component
 */
export function LocationPanel({
  locationName,
  worldWithRelatedData,
  characterState,
  locationDescription,
  isCompact = false,
}: LocationPanelProps) {
  // Get location details if available from world data
  const locationDetails = worldWithRelatedData?.locations?.find(
    (loc) => loc.name.toLowerCase() === locationName.toLowerCase()
  );

  // Compact view for inline/summary display
  if (isCompact) {
    return (
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground mb-1 flex items-center gap-1">
          <MapPin size={14} />
          Location
        </h3>
        <div className="text-sm">
          <p>{locationName || "Unknown"}</p>
          {locationDetails ? (
            <p className="text-xs text-muted-foreground truncate">
              {locationDetails.description?.substring(0, 50)}
              {locationDetails.description &&
              locationDetails.description.length > 50
                ? "..."
                : ""}
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">
              {locationDescription || ""}
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
        <MapPin size={14} />
        Location: {locationName || "Unknown"}
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
            <p className="text-xs">{locationDescription || ""}</p>
          </div>
        )}

        {/* Connected Locations */}
        {locationDetails?.connectedLocationIds &&
          locationDetails.connectedLocationIds.length > 0 && (
            <div className="mb-2">
              <p className="text-xs font-medium">Connected locations:</p>
              <ul className="text-xs ml-2 mt-1">
                {locationDetails.connectedLocationIds.map((locId: string) => {
                  const connectedLoc = worldWithRelatedData?.locations.find(
                    (l) => l.id === locId
                  );
                  return (
                    <li key={locId}>• {connectedLoc?.name || "Unknown"}</li>
                  );
                })}
              </ul>
            </div>
          )}

        {/* NPCs at this location */}
        {characterState?.npcsPresent &&
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
  );
}
