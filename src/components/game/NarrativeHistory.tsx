"use client";

import { useEffect, useRef } from "react";

interface NarrativeEntryProps {
  entry: any;
}

/**
 * NarrativeEntry component that renders a single narrative entry
 */
function NarrativeEntry({ entry }: NarrativeEntryProps) {
  if (entry.type === "narrative") {
    return (
      <div className="bg-gray-700/70 p-4 rounded-lg mb-4 border border-gray-600">
        <p className="text-white leading-relaxed whitespace-pre-line">
          {entry.text}
        </p>
      </div>
    );
  } else if (entry.type === "choice") {
    return (
      <div className="bg-amber-800/50 p-3 rounded-lg mb-4 ml-8 border-l-4 border-amber-500">
        <p className="text-white leading-relaxed">
          <span className="text-amber-300 font-semibold">» </span>
          {entry.selectedChoice?.text || "No choice made"}
        </p>
      </div>
    );
  }

  // Default case for unknown entry types
  return (
    <div className="bg-gray-700/70 p-4 rounded-lg mb-4">
      <p className="text-gray-300 italic">Unknown entry type</p>
    </div>
  );
}

interface NarrativeHistoryProps {
  narrativeHistory: any[];
}

/**
 * NarrativeHistory component that displays the game narrative history
 */
export function NarrativeHistory({ narrativeHistory }: NarrativeHistoryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when narrative updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [narrativeHistory]);

  if (!narrativeHistory || narrativeHistory.length === 0) {
    return (
      <div className="flex-grow bg-gray-800/30 p-6 flex items-center justify-center">
        <p className="text-gray-400 italic">
          Your adventure is about to begin...
        </p>
      </div>
    );
  }

  return (
    <div
      ref={scrollRef}
      className="flex-grow bg-gray-800/30 p-4 overflow-y-auto scroll-smooth"
    >
      <div className="space-y-4 max-w-4xl mx-auto">
        {narrativeHistory.map((entry, index) => (
          <NarrativeEntry key={`narrative-${index}`} entry={entry} />
        ))}
      </div>
    </div>
  );
}
