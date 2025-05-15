"use client";

import { useEffect, useRef } from "react";
import { useGame } from "@/contexts/GameProvider";
import { cn } from "@/lib/utils/cn";

/**
 * Represents a single entry in the narrative history.
 */
interface NarrativeEntry {
  /** The type of the narrative entry, e.g., player's response or AI's narration. */
  type: "playerResponse" | "aiNarrative" | string; // string for flexibility if other types exist
  /** The textual content of the narrative entry. */
  content: string;
}

/**
 * Fallback narrative data to display when no actual game data is available.
 * Useful for UI development and previewing the component's appearance.
 */
const fallbackNarrative: NarrativeEntry[] = [
  {
    type: "aiNarrative",
    content:
      "The ancient gates of Eldoria creak open, revealing a path shrouded in mist. A chilling wind whispers through the crumbling archway, carrying the scent of old magic and forgotten secrets. What do you do?",
  },
  {
    type: "playerResponse",
    content: "I cautiously step forward, drawing my weathered map.",
  },
  {
    type: "aiNarrative",
    content:
      "As you advance, the mist swirls, and the path ahead splits into two. To your left, a narrow, overgrown trail disappears into a dark thicket. To your right, a wider, stone-paved road leads towards a faint, flickering light in the distance.",
  },
];

export default function NarrativeDisplay() {
  const { state } = useGame();
  const narrativeRef = useRef<HTMLDivElement>(null);

  // Auto-scroll when narrative updates
  useEffect(() => {
    if (narrativeRef.current) {
      narrativeRef.current.scrollTop = narrativeRef.current.scrollHeight;
    }
  }, [state.currentGameState?.narrative?.history]);

  const narrativeHistory =
    state.currentGameState?.narrative?.history &&
    state.currentGameState.narrative.history.length > 0
      ? state.currentGameState.narrative.history
      : fallbackNarrative;

  return (
    <div className="relative h-full overflow-hidden rounded-lg border bg-background">
      <div ref={narrativeRef} className="h-full overflow-y-auto p-6 pb-24">
        {narrativeHistory.map((entry, index) => (
          <div
            key={index}
            className={cn(
              "mb-6 last:mb-0",
              entry.type === "playerResponse"
                ? "pl-4 border-l-4 border-primary"
                : ""
            )}
          >
            <p
              className={cn(
                "text-md leading-relaxed whitespace-pre-wrap",
                entry.type === "playerResponse"
                  ? "font-medium text-primary"
                  : ""
              )}
            >
              {entry.content}
            </p>
          </div>
        ))}

        {(state.isLoadingInitialGame || state.isMakingDecision) && (
          <div className="flex items-center space-x-2 text-muted-foreground animate-pulse">
            <div className="h-2 w-2 rounded-full bg-muted-foreground" />
            <div className="h-2 w-2 rounded-full bg-muted-foreground animation-delay-300" />
            <div className="h-2 w-2 rounded-full bg-muted-foreground animation-delay-600" />
          </div>
        )}
      </div>
    </div>
  );
}
