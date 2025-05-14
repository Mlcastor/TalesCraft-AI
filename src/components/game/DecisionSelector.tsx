"use client";

import { useState, useEffect, useCallback } from "react";
import { provideFeedback } from "@/lib/utils/feedback";

interface Decision {
  text: string;
  consequences?: string;
}

interface DecisionSelectorProps {
  decisions: Decision[];
  onDecisionSelected: (index: number) => void;
  isDisabled?: boolean;
  showConsequences?: boolean;
  keyboardShortcutsEnabled?: boolean;
  soundEffectsVolume?: number;
  hapticFeedbackEnabled?: boolean;
}

/**
 * Component for displaying decision options and handling player choices
 * Features:
 * - Keyboard shortcuts (1, 2, 3 keys) for quick selection
 * - Hover effects for better UI feedback
 * - Optional consequences preview on hover
 * - Sound and haptic feedback
 */
export function DecisionSelector({
  decisions,
  onDecisionSelected,
  isDisabled = false,
  showConsequences = true,
  keyboardShortcutsEnabled = true,
  soundEffectsVolume = 50,
  hapticFeedbackEnabled = true,
}: DecisionSelectorProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Handle decision selection with feedback
  const selectDecision = useCallback(
    (index: number) => {
      if (isDisabled) return;

      // Provide feedback if enabled
      if (soundEffectsVolume > 0 || hapticFeedbackEnabled) {
        provideFeedback(
          "click",
          soundEffectsVolume,
          hapticFeedbackEnabled ? [50] : 0
        );
      }

      // Call the parent handler
      onDecisionSelected(index);
    },
    [isDisabled, soundEffectsVolume, hapticFeedbackEnabled, onDecisionSelected]
  );

  // Set up keyboard shortcuts
  useEffect(() => {
    // Skip if keyboard shortcuts are disabled
    if (!keyboardShortcutsEnabled || isDisabled) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      // Check if key is a number between 1 and the number of decisions
      const keyNum = parseInt(e.key, 10);
      if (!isNaN(keyNum) && keyNum > 0 && keyNum <= decisions.length) {
        // Subtract 1 because array indices start at 0
        selectDecision(keyNum - 1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [decisions, isDisabled, keyboardShortcutsEnabled, selectDecision]);

  if (!decisions.length) {
    return null;
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-3">What will you do?</h3>
      <div className="flex flex-col gap-2">
        {decisions.map((decision, index) => (
          <button
            key={index}
            className={`text-left p-3 rounded-md border border-border transition-all duration-200 ${
              hoveredIndex === index
                ? "bg-accent text-accent-foreground shadow-md translate-x-1"
                : "hover:bg-accent hover:text-accent-foreground"
            } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => selectDecision(index)}
            disabled={isDisabled}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
            aria-label={`Choose option ${index + 1}: ${decision.text}`}
          >
            <div className="flex items-center">
              <span className="mr-2 text-sm bg-primary text-primary-foreground px-2 py-1 rounded-full">
                {index + 1}
              </span>
              <span className="flex-1">{decision.text}</span>
            </div>

            {showConsequences && decision.consequences && (
              <div
                className={`mt-2 text-sm text-muted-foreground italic pl-8 transition-opacity duration-200 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-70"
                }`}
              >
                {decision.consequences}
              </div>
            )}
          </button>
        ))}
      </div>

      {keyboardShortcutsEnabled && (
        <div className="mt-2 text-xs text-muted-foreground">
          Tip: Use number keys (1-{Math.min(decisions.length, 9)}) to select
          options
        </div>
      )}
    </div>
  );
}
