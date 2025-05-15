"use client";

import { User, Heart, Shield, Zap } from "lucide-react";

interface CharacterPanelProps {
  characterState: Record<string, any>;
  isCompact?: boolean;
}

/**
 * CharacterPanel component to display character information
 * Shows character stats, health, defense, energy, and traits
 *
 * @param props Component props
 * @returns Character information display component
 */
export function CharacterPanel({
  characterState,
  isCompact = false,
}: CharacterPanelProps) {
  // Get safe name for display
  const characterName = characterState?.name || "Unknown";

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

  // Compact view for inline/summary display
  if (isCompact) {
    return (
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground mb-1 flex items-center gap-1">
          <User size={14} />
          Character
        </h3>
        <div className="text-sm">
          <p>
            <span className="font-medium">Name:</span> {characterName}
          </p>
          {characterState?.health !== undefined && (
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
    );
  }

  // Full detailed view
  return (
    <div className="bg-background/30 p-3 rounded-md">
      <h4 className="text-sm font-semibold flex items-center gap-1 mb-3 pb-1 border-b border-muted">
        <User size={14} />
        Character: {characterName}
      </h4>

      <div className="space-y-3">
        {/* Health */}
        {characterState?.health !== undefined && (
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
        {characterState?.defense !== undefined && (
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
        {characterState?.energy !== undefined && (
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
        {characterState?.traits && characterState.traits.length > 0 && (
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
  );
}
