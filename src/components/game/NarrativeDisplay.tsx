"use client";

import { useEffect, useState } from "react";
import {
  useNarrativeTextState,
  useNarrativeHistory,
  useNarrativeTextActions,
  useNarrativeSpeech,
  useNarrativeScrollRef,
} from "@/hooks/game/useNarrativeSelectors";
import { useNarrativeContext } from "@/hooks/game/useNarrativeContext";

interface NarrativeDisplayProps {
  narrative?: {
    text: string;
    history: Array<{
      type: "narrative" | "playerResponse";
      content: string;
    }>;
  };
  isLoading?: boolean;
  textSpeed?: "slow" | "medium" | "fast" | "instant";
  textToSpeechEnabled?: boolean;
}

/**
 * Component for displaying the game narrative and history
 * Uses selector hooks for efficient rendering
 * Features:
 * - Text animation typing effect
 * - Text-to-speech support
 * - Collapsible history
 */
export function NarrativeDisplay({
  narrative,
  isLoading = false,
  textSpeed = "medium",
  textToSpeechEnabled = false,
}: NarrativeDisplayProps) {
  // Convert to typing speed in milliseconds
  const typingSpeed = (() => {
    switch (textSpeed) {
      case "slow":
        return 80;
      case "medium":
        return 40;
      case "fast":
        return 20;
      case "instant":
        return 0;
      default:
        return 40;
    }
  })();

  // Initialize context with props - this is still needed for initial setup
  useNarrativeContext({
    initialText: narrative?.text || "",
    initialHistory: narrative?.history || [],
    textToSpeechEnabled,
    autoScroll: true,
  });

  // Use selector hooks for efficient rendering
  const { narrativeText: displayedText, isTyping } = useNarrativeTextState();
  const narrativeHistory = useNarrativeHistory();
  const { typeNarrativeText, skipTypingAnimation } = useNarrativeTextActions();
  const { toggleTextToSpeech } = useNarrativeSpeech();
  const narrativeEndRef = useNarrativeScrollRef();

  // Track if we've shown full history
  const [showFullHistory, setShowFullHistory] = useState(false);

  // Initialize narrative when it changes
  useEffect(() => {
    if (!narrative?.text) return;

    // Update text-to-speech state
    toggleTextToSpeech(textToSpeechEnabled);

    // If instant speed selected, skip animation
    if (typingSpeed === 0) {
      // Just set the text without animation
      skipTypingAnimation();
    } else if (narrative.text) {
      // Otherwise start typing animation
      typeNarrativeText(narrative.text, typingSpeed);
    }
  }, [
    narrative?.text,
    typingSpeed,
    textToSpeechEnabled,
    typeNarrativeText,
    skipTypingAnimation,
    toggleTextToSpeech,
  ]);

  // Toggle history view
  const toggleHistory = () => {
    setShowFullHistory((prev) => !prev);
  };

  // Parse and render markdown-like syntax
  const renderFormattedText = (text: string) => {
    if (!text) return "";

    // Replace basic markdown-like formatting with HTML
    return text
      .replace(/\*\*(.*?)\*\*/g, '<span class="font-bold">$1</span>')
      .replace(/\*(.*?)\*/g, '<span class="italic">$1</span>')
      .replace(/__(.*?)__/g, '<span class="underline">$1</span>')
      .replace(/~~(.*?)~~/g, '<span class="line-through">$1</span>');
  };

  if (!narrative) {
    return (
      <div className="p-6 bg-muted/30 rounded-lg h-96 flex items-center justify-center">
        <p className="text-center text-muted-foreground">
          No narrative available
        </p>
      </div>
    );
  }

  // Get visible history - either all or just recent entries
  const visibleHistory = showFullHistory
    ? narrativeHistory
    : narrativeHistory.slice(-5);

  // Show "Show more/less" button only if there's enough history
  const showHistoryToggle = narrativeHistory.length > 5;

  return (
    <div className="p-4 bg-muted/30 rounded-lg overflow-hidden h-96 flex flex-col relative">
      <div
        ref={narrativeEndRef}
        className={`flex-1 overflow-y-auto mb-4 ${
          showFullHistory ? "pb-4" : ""
        }`}
      >
        {/* History toggle button */}
        {showHistoryToggle && (
          <button
            onClick={toggleHistory}
            className="mb-4 text-xs text-primary hover:underline"
          >
            {showFullHistory ? "Show less" : "Show full history"}
          </button>
        )}

        {/* Narrative history */}
        {visibleHistory.map((entry, index) => (
          <div
            key={index}
            className={`mb-4 ${
              entry.type === "playerResponse"
                ? "pl-4 border-l-2 border-primary italic"
                : ""
            }`}
          >
            {entry.type === "playerResponse" ? (
              <p className="text-primary-foreground">You: {entry.content}</p>
            ) : (
              <p
                dangerouslySetInnerHTML={{
                  __html: renderFormattedText(entry.content),
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Current text being typed */}
      <div className="min-h-16 border-t border-muted pt-3">
        {isTyping ? (
          // Text animation with parsed markdown
          <p
            dangerouslySetInnerHTML={{
              __html: renderFormattedText(displayedText),
            }}
          />
        ) : (
          // Full text when animation is done or skipped
          narrative.text && (
            <p
              dangerouslySetInnerHTML={{
                __html: renderFormattedText(narrative.text),
              }}
            />
          )
        )}

        {/* Skip animation button */}
        {isTyping && textSpeed !== "instant" && (
          <button
            onClick={skipTypingAnimation}
            className="text-xs text-primary hover:underline mt-2"
          >
            Skip
          </button>
        )}

        {/* Text-to-speech button */}
        {!isTyping && textToSpeechEnabled && narrative.text && (
          <button
            onClick={() => toggleTextToSpeech(true)}
            className="text-xs text-primary hover:underline mt-2 ml-2"
            aria-label="Read aloud"
          >
            Read aloud
          </button>
        )}
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="h-6 w-12 flex justify-start items-center absolute bottom-4 left-4">
          <span className="animate-pulse">...</span>
        </div>
      )}
    </div>
  );
}
