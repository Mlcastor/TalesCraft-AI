"use client";

import { useState, useEffect, useRef } from "react";
import { speakText } from "@/lib/utils/feedback";

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
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showFullHistory, setShowFullHistory] = useState(false);
  const historyContainerRef = useRef<HTMLDivElement>(null);

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

  // Handle text animation effect
  useEffect(() => {
    if (!narrative?.text || typingSpeed === 0) {
      // If instant, just set the text
      setDisplayedText(narrative?.text || "");
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    setDisplayedText(""); // Reset for new animation

    let currentIndex = 0;
    const textLength = narrative.text.length;

    // Create typing animation
    const typingInterval = setInterval(() => {
      if (currentIndex < textLength) {
        setDisplayedText((prev) => prev + narrative.text.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, typingSpeed);

    // Text-to-speech if enabled
    if (textToSpeechEnabled && narrative.text) {
      speakText(narrative.text);
    }

    // Clean up interval on unmount or narrative change
    return () => {
      clearInterval(typingInterval);
    };
  }, [narrative?.text, typingSpeed, textToSpeechEnabled]);

  // Scroll history to bottom when new content is added
  useEffect(() => {
    if (historyContainerRef.current && !showFullHistory) {
      historyContainerRef.current.scrollTop =
        historyContainerRef.current.scrollHeight;
    }
  }, [narrative?.history, showFullHistory]);

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
    ? narrative.history
    : narrative.history.slice(-5);

  // Show "Show more/less" button only if there's enough history
  const showHistoryToggle = narrative.history.length > 5;

  return (
    <div className="p-4 bg-muted/30 rounded-lg overflow-hidden h-96 flex flex-col relative">
      <div
        ref={historyContainerRef}
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
            onClick={() => {
              setDisplayedText(narrative.text);
              setIsTyping(false);
            }}
            className="text-xs text-primary hover:underline mt-2"
          >
            Skip
          </button>
        )}

        {/* Text-to-speech button */}
        {!isTyping && textToSpeechEnabled && narrative.text && (
          <button
            onClick={() => speakText(narrative.text)}
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
