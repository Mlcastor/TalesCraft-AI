"use client";

import { NarrativeHistory } from "./NarrativeHistory";

interface GameContainerProps {
  narrativeHistory: any[];
  isLoading: boolean;
}

/**
 * Main container for game narrative display
 */
export function GameContainer({
  narrativeHistory,
  isLoading,
}: GameContainerProps) {
  return (
    <div className="h-full overflow-hidden flex flex-col">
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute top-0 left-0 right-0 flex justify-center pt-2 z-10">
          <div className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Processing...
          </div>
        </div>
      )}

      {/* Narrative history */}
      <NarrativeHistory narrativeHistory={narrativeHistory} />
    </div>
  );
}
