import { useCallback, useMemo } from "react";
import { useNarrativeContext } from "./useNarrativeContext";

/**
 * Get narrative text and typing status
 * Only re-renders when text or typing status changes
 */
export function useNarrativeTextState() {
  const { narrativeText, isTyping } = useNarrativeContext();

  return useMemo(
    () => ({
      narrativeText,
      isTyping,
    }),
    [narrativeText, isTyping]
  );
}

/**
 * Get narrative history
 * Only re-renders when history changes
 */
export function useNarrativeHistory() {
  const { narrativeHistory } = useNarrativeContext();

  return narrativeHistory;
}

/**
 * Get recent narrative history with a specified count
 * Only re-renders when the relevant history changes
 */
export function useRecentNarrativeHistory(count: number = 5) {
  const { getRecentHistory } = useNarrativeContext();

  return useMemo(() => getRecentHistory(count), [getRecentHistory, count]);
}

/**
 * Get narrative text actions
 * Memoized to preserve function references
 */
export function useNarrativeTextActions() {
  const {
    updateNarrativeText,
    typeNarrativeText,
    queueNarrativeText,
    skipTypingAnimation,
  } = useNarrativeContext();

  return useMemo(
    () => ({
      updateNarrativeText,
      typeNarrativeText,
      queueNarrativeText,
      skipTypingAnimation,
    }),
    [
      updateNarrativeText,
      typeNarrativeText,
      queueNarrativeText,
      skipTypingAnimation,
    ]
  );
}

/**
 * Get history management actions
 * Memoized to preserve function references
 */
export function useNarrativeHistoryActions() {
  const { addPlayerResponse, clearHistory, summarizeHistory } =
    useNarrativeContext();

  return useMemo(
    () => ({
      addPlayerResponse,
      clearHistory,
      summarizeHistory,
    }),
    [addPlayerResponse, clearHistory, summarizeHistory]
  );
}

/**
 * Get text-to-speech state and controls
 * Only re-renders when speaking status changes
 */
export function useNarrativeSpeech() {
  const { isSpeaking, toggleTextToSpeech } = useNarrativeContext();

  return useMemo(
    () => ({
      isSpeaking,
      toggleTextToSpeech,
    }),
    [isSpeaking, toggleTextToSpeech]
  );
}

/**
 * Get scroll reference for narrative
 */
export function useNarrativeScrollRef() {
  const { narrativeEndRef } = useNarrativeContext();

  return narrativeEndRef;
}
