import { useState, useCallback, useEffect } from "react";
import { logger } from "@/lib/utils/logger";
import { getCurrentDecisions } from "@/lib/actions/decision-actions";

export interface Decision {
  text: string;
  consequences?: string;
}

interface UseDecisionsProps {
  sessionId: string;
  initialDecisions?: Decision[];
  onDecisionMade?: (decisionIndex: number) => Promise<void>;
  keyboardShortcutsEnabled?: boolean;
}

/**
 * Custom hook for managing game decisions
 * Handles loading, displaying, and selecting decisions
 *
 * @param props Properties needed for decision management
 * @returns Decision state and action handlers
 */
export function useDecisions({
  sessionId,
  initialDecisions = [],
  onDecisionMade,
  keyboardShortcutsEnabled = true,
}: UseDecisionsProps) {
  // State management
  const [decisions, setDecisions] = useState<Decision[]>(initialDecisions);
  const [selectedDecisionIndex, setSelectedDecisionIndex] = useState<
    number | null
  >(null);
  const [hoveredDecisionIndex, setHoveredDecisionIndex] = useState<
    number | null
  >(null);
  const [isLoadingDecisions, setIsLoadingDecisions] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetch available decisions for this session
   */
  const fetchDecisions = useCallback(async () => {
    if (!sessionId) return;

    try {
      setIsLoadingDecisions(true);
      setError(null);

      const fetchedDecisions = await getCurrentDecisions(sessionId);
      setDecisions(fetchedDecisions);

      logger.debug("Decisions fetched successfully", {
        context: "decisions-hook",
        metadata: {
          sessionId,
          decisionCount: fetchedDecisions.length,
        },
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setError(`Failed to fetch decisions: ${errorMessage}`);
      logger.error("Error fetching decisions", {
        context: "decisions-hook",
        metadata: { sessionId, error: errorMessage },
      });
    } finally {
      setIsLoadingDecisions(false);
    }
  }, [sessionId]);

  /**
   * Update decisions with new choices
   */
  const updateDecisions = useCallback((newDecisions: Decision[]) => {
    setDecisions(newDecisions);
    setSelectedDecisionIndex(null);
    setHoveredDecisionIndex(null);

    logger.debug("Decisions updated", {
      context: "decisions-hook",
      metadata: { decisionCount: newDecisions.length },
    });
  }, []);

  /**
   * Handle decision selection
   */
  const selectDecision = useCallback(
    async (index: number) => {
      if (index < 0 || index >= decisions.length) return;

      setSelectedDecisionIndex(index);

      if (onDecisionMade) {
        try {
          await onDecisionMade(index);
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : String(error);
          setError(`Failed to process decision: ${errorMessage}`);
          logger.error("Error processing decision", {
            context: "decisions-hook",
            metadata: { sessionId, decisionIndex: index, error: errorMessage },
          });
        }
      }
    },
    [decisions.length, onDecisionMade, sessionId]
  );

  /**
   * Set up keyboard shortcuts for decision selection
   */
  useEffect(() => {
    if (!keyboardShortcutsEnabled) return;

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
  }, [decisions.length, keyboardShortcutsEnabled, selectDecision]);

  /**
   * Load initial decisions if none provided
   */
  useEffect(() => {
    if (initialDecisions.length === 0 && sessionId) {
      fetchDecisions();
    }
  }, [initialDecisions.length, sessionId, fetchDecisions]);

  return {
    // State
    decisions,
    selectedDecisionIndex,
    hoveredDecisionIndex,
    isLoadingDecisions,
    error,

    // Actions
    fetchDecisions,
    updateDecisions,
    selectDecision,
    setHoveredDecisionIndex,

    // Helper
    hasDecisions: decisions.length > 0,
  };
}
