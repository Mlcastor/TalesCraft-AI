"use client";

interface GameStateIndicatorProps {
  characterState: Record<string, any>;
  worldState: Record<string, any>;
  location: string;
}

/**
 * Component for displaying current game state information
 * Shows character stats, world info, and current location
 */
export function GameStateIndicator({
  characterState,
  worldState,
  location,
}: GameStateIndicatorProps) {
  return (
    <div className="bg-muted/20 p-3 rounded-md grid grid-cols-3 gap-4">
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground mb-1">
          Character
        </h3>
        <div className="text-sm">
          <p>
            <span className="font-medium">Name:</span>{" "}
            {characterState.name || "Unknown"}
          </p>
          {characterState.health !== undefined && (
            <p>
              <span className="font-medium">Health:</span>{" "}
              {characterState.health}
            </p>
          )}
          {/* Display other character stats as needed */}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-muted-foreground mb-1">
          World
        </h3>
        <div className="text-sm">
          <p>
            <span className="font-medium">Name:</span>{" "}
            {worldState.name || "Unknown"}
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
        <h3 className="text-sm font-semibold text-muted-foreground mb-1">
          Location
        </h3>
        <p className="text-sm">{location || "Unknown"}</p>
      </div>
    </div>
  );
}
