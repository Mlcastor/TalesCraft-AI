"use client";

import { useEffect, useRef } from "react";
import { useGame } from "./GameProvider";
import { cn } from "@/lib/utils/cn";

export default function NarrativeDisplay() {
  const { state } = useGame();
  const narrativeRef = useRef<HTMLDivElement>(null);

  // Auto-scroll when narrative updates
  useEffect(() => {
    if (narrativeRef.current) {
      narrativeRef.current.scrollTop = narrativeRef.current.scrollHeight;
    }
  }, [state.narrative.history]);

  return (
    <div className="relative h-full overflow-hidden rounded-lg border bg-background">
      <div ref={narrativeRef} className="h-full overflow-y-auto p-6 pb-24">
        {state.narrative.history.map((entry, index) => (
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

        {state.isLoading && (
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
