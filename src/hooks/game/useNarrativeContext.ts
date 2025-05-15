import { useState, useCallback, useEffect, useRef } from "react";
import { speakText } from "@/lib/utils/feedback";
import { logger } from "@/lib/utils/logger";

interface NarrativeHistoryEntry {
  type: "narrative" | "playerResponse";
  content: string;
  timestamp?: Date;
}

interface NarrativeContextProps {
  initialText?: string;
  initialHistory?: NarrativeHistoryEntry[];
  textToSpeechEnabled?: boolean;
  autoScroll?: boolean;
}

/**
 * Custom hook for managing narrative context
 * Handles narrative history, text-to-speech, and scrolling
 *
 * @param props Properties for initializing narrative context
 * @returns Narrative context management tools
 */
export function useNarrativeContext({
  initialText = "",
  initialHistory = [],
  textToSpeechEnabled = false,
  autoScroll = true,
}: NarrativeContextProps = {}) {
  // State management
  const [narrativeText, setNarrativeText] = useState<string>(initialText);
  const [narrativeHistory, setNarrativeHistory] =
    useState<NarrativeHistoryEntry[]>(initialHistory);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Refs
  const narrativeEndRef = useRef<HTMLDivElement | null>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const narrativeQueueRef = useRef<string[]>([]);

  /**
   * Update the narrative text
   */
  const updateNarrativeText = useCallback(
    (text: string) => {
      setNarrativeText(text);

      // Add to narrative history
      setNarrativeHistory((prev) => [
        ...prev,
        {
          type: "narrative",
          content: text,
          timestamp: new Date(),
        },
      ]);

      // If text-to-speech is enabled, speak the text
      if (textToSpeechEnabled) {
        speakText(text);
        setIsSpeaking(true);
      }

      logger.debug("Narrative text updated", {
        context: "narrative-context-hook",
        metadata: { textLength: text.length },
      });
    },
    [textToSpeechEnabled]
  );

  /**
   * Add a player response to the narrative history
   */
  const addPlayerResponse = useCallback((responseText: string) => {
    setNarrativeHistory((prev) => [
      ...prev,
      {
        type: "playerResponse",
        content: responseText,
        timestamp: new Date(),
      },
    ]);

    logger.debug("Player response added to narrative", {
      context: "narrative-context-hook",
      metadata: { responseLength: responseText.length },
    });
  }, []);

  /**
   * Clear the narrative history
   */
  const clearHistory = useCallback(() => {
    setNarrativeHistory([]);

    logger.debug("Narrative history cleared", {
      context: "narrative-context-hook",
    });
  }, []);

  /**
   * Get recent narrative history
   */
  const getRecentHistory = useCallback(
    (count: number = 5) => {
      return narrativeHistory.slice(-count);
    },
    [narrativeHistory]
  );

  /**
   * Generate a summary of narrative history
   */
  const summarizeHistory = useCallback(() => {
    const lastFiveEntries = getRecentHistory();
    return lastFiveEntries
      .map(
        (entry) =>
          `${
            entry.type === "narrative" ? "Story" : "Player"
          }: ${entry.content.substring(0, 100)}${
            entry.content.length > 100 ? "..." : ""
          }`
      )
      .join("\n");
  }, [getRecentHistory]);

  /**
   * Type out the narrative text with animation effect
   */
  const typeNarrativeText = useCallback((text: string, speed: number = 30) => {
    // Clear any existing typing animation
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    setNarrativeText("");
    setIsTyping(true);

    let index = 0;
    const textChars = text.split("");

    typingIntervalRef.current = setInterval(() => {
      if (index < textChars.length) {
        setNarrativeText((prev) => prev + textChars[index]);
        index++;
      } else {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
          typingIntervalRef.current = null;
        }
        setIsTyping(false);

        // Add completed text to history
        setNarrativeHistory((prev) => [
          ...prev,
          {
            type: "narrative",
            content: text,
            timestamp: new Date(),
          },
        ]);

        // Process any queued narratives
        if (narrativeQueueRef.current.length > 0) {
          const nextText = narrativeQueueRef.current.shift();
          if (nextText) {
            typeNarrativeText(nextText, speed);
          }
        }
      }
    }, speed);

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  /**
   * Queue narrative text for typing animation
   */
  const queueNarrativeText = useCallback(
    (text: string) => {
      if (isTyping) {
        narrativeQueueRef.current.push(text);
      } else {
        typeNarrativeText(text);
      }
    },
    [isTyping, typeNarrativeText]
  );

  /**
   * Skip the current typing animation
   */
  const skipTypingAnimation = useCallback(() => {
    if (!isTyping || !typingIntervalRef.current) return;

    clearInterval(typingIntervalRef.current);
    typingIntervalRef.current = null;

    // Show the full text immediately
    if (narrativeQueueRef.current.length > 0) {
      const fullText = narrativeQueueRef.current.shift();
      if (fullText) {
        setNarrativeText(fullText);
        setNarrativeHistory((prev) => [
          ...prev,
          {
            type: "narrative",
            content: fullText,
            timestamp: new Date(),
          },
        ]);
      }
    }

    setIsTyping(false);
  }, [isTyping]);

  /**
   * Toggle text-to-speech
   */
  const toggleTextToSpeech = useCallback(
    (enabled: boolean) => {
      // If enabling and we have text, speak it
      if (enabled && narrativeText) {
        speakText(narrativeText);
        setIsSpeaking(true);
      }
    },
    [narrativeText]
  );

  /**
   * Auto-scroll when narrative changes
   */
  useEffect(() => {
    if (autoScroll && narrativeEndRef.current) {
      narrativeEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [narrativeText, narrativeHistory, autoScroll]);

  // Cleanup effects
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  return {
    // State
    narrativeText,
    narrativeHistory,
    isTyping,
    isSpeaking,

    // Actions
    updateNarrativeText,
    addPlayerResponse,
    clearHistory,
    getRecentHistory,
    summarizeHistory,
    typeNarrativeText,
    queueNarrativeText,
    skipTypingAnimation,
    toggleTextToSpeech,

    // Refs
    narrativeEndRef,
  };
}
