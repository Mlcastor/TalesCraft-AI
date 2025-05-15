import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { provideFeedback } from "@/lib/utils/feedback";
import { logger } from "@/lib/utils/logger";
import { useGameSettings } from "@/contexts/GameSettingsContext";
import { useSafeSession } from "@/contexts/SafeSessionContext";
import { makeDecision } from "@/lib/actions/decision-actions";
import { saveGameState, loadGameState } from "@/lib/actions/game-state-actions";
import { GameState } from "@/types/game";

interface UseGameFlowProps {
  sessionId: string;
  gameState: GameState | null;
  setGameState: (state: GameState | null) => void;
  setError: (error: string | null) => void;
}

/**
 * Custom hook for managing game flow transitions
 * Responsible for handling decisions, saving, loading, and ending game
 *
 * @param props Properties needed for game flow transitions
 * @returns Game flow control functions and status
 */
export function useGameFlow({
  sessionId,
  gameState,
  setGameState,
  setError,
}: UseGameFlowProps) {
  const router = useRouter();
  const { settings } = useGameSettings();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lastTransition, setLastTransition] = useState<string | null>(null);
  const { endSession: endGameSessionContext } = useSafeSession();

  /**
   * Handle player decision
   * Updates game state and transitions to next narrative
   */
  const handleDecision = useCallback(
    async (decisionIndex: number) => {
      if (!gameState || !sessionId) return;

      try {
        setIsTransitioning(true);
        setLastTransition("decision");

        // Play sound effect for decision
        if (settings.soundEffectsVolume > 0) {
          provideFeedback("decision", settings.soundEffectsVolume);
        }

        // Get the selected decision text for history
        const selectedDecision =
          gameState.decisions?.[decisionIndex]?.text || "Unknown choice";

        // Update the UI immediately with the player's choice for better UX
        setGameState({
          ...gameState,
          narrative: gameState.narrative
            ? {
                text: gameState.narrative.text,
                history: [
                  ...(gameState.narrative.history || []),
                  {
                    type: "playerResponse" as const,
                    content: selectedDecision,
                  },
                ],
              }
            : undefined,
        });

        // Call the actual server action to process the decision
        const { narrativeResponse, updatedState } = await makeDecision(
          sessionId,
          decisionIndex
        );

        // Update state with the response from the server
        setGameState({
          ...updatedState,
          narrative: {
            text: narrativeResponse.narrativeText,
            history: [
              ...(gameState.narrative?.history || []),
              {
                type: "narrative" as const,
                content: narrativeResponse.narrativeText,
              },
            ],
          },
          decisions: narrativeResponse.newDecisionPoints,
        });

        // Auto-save after decision if enabled (handle in parent component)
        setLastTransition(null);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        setError(`Failed to process your decision: ${errorMessage}`);
        logger.error("Error in decision flow:", {
          context: "game-flow-hook",
          metadata: { sessionId, decisionIndex, error: errorMessage },
        });
      } finally {
        setIsTransitioning(false);
      }
    },
    [gameState, sessionId, settings.soundEffectsVolume, setGameState, setError]
  );

  /**
   * Save current game state
   */
  const saveGame = useCallback(
    async (savePointName?: string) => {
      if (!gameState || !sessionId) return null;

      try {
        setIsTransitioning(true);
        setLastTransition("save");

        // Call the server action to save the game
        const savedState = await saveGameState(sessionId, savePointName);

        if (settings.soundEffectsVolume > 0) {
          provideFeedback("save", settings.soundEffectsVolume);
        }

        setLastTransition(null);
        return savedState;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        setError(`Failed to save game: ${errorMessage}`);
        logger.error("Error in save flow:", {
          context: "game-flow-hook",
          metadata: { sessionId, savePointName, error: errorMessage },
        });

        if (settings.soundEffectsVolume > 0) {
          provideFeedback("error", settings.soundEffectsVolume);
        }

        return null;
      } finally {
        setIsTransitioning(false);
      }
    },
    [gameState, sessionId, settings.soundEffectsVolume, setError]
  );

  /**
   * Load a saved game state
   */
  const loadGame = useCallback(
    async (stateId: string) => {
      if (!sessionId) return false;

      try {
        setIsTransitioning(true);
        setLastTransition("load");

        // Call the server action to load the game
        const loadedState = await loadGameState(stateId);
        setGameState(loadedState);

        if (settings.soundEffectsVolume > 0) {
          provideFeedback("success", settings.soundEffectsVolume);
        }

        setLastTransition(null);
        return true;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        setError(`Failed to load game: ${errorMessage}`);
        logger.error("Error in load flow:", {
          context: "game-flow-hook",
          metadata: { sessionId, stateId, error: errorMessage },
        });

        if (settings.soundEffectsVolume > 0) {
          provideFeedback("error", settings.soundEffectsVolume);
        }

        return false;
      } finally {
        setIsTransitioning(false);
      }
    },
    [sessionId, settings.soundEffectsVolume, setGameState, setError]
  );

  /**
   * End the current game session
   */
  const endGame = useCallback(async () => {
    if (!sessionId) return false;

    try {
      if (confirm("Are you sure you want to end this game session?")) {
        setIsTransitioning(true);
        setLastTransition("end");

        // Save game before ending session
        if (gameState) {
          await saveGame();
        }

        // Add safety check for endGameSessionContext
        if (endGameSessionContext) {
          await endGameSessionContext(sessionId);
        } else {
          // Log error and handle gracefully
          logger.error("endGameSessionContext is undefined", {
            context: "game-flow-hook",
            metadata: { sessionId },
          });

          // Attempt direct call to the server action as a fallback
          try {
            // Import server action directly
            const { endGame: endGameAction } = await import(
              "@/lib/actions/gameSession-actions"
            );
            await endGameAction(sessionId);
          } catch (endError) {
            logger.error("Fallback end game action failed", {
              context: "game-flow-hook",
              metadata: { sessionId, error: endError },
            });
          }
        }

        router.push("/player-hub"); // Redirect to hub after ending session

        setLastTransition(null);
        return true;
      }
      return false;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setError(`Failed to end game session: ${errorMessage}`);
      logger.error("Error in end game flow:", {
        context: "game-flow-hook",
        metadata: { sessionId, error: errorMessage },
      });
      return false;
    } finally {
      setIsTransitioning(false);
    }
  }, [sessionId, gameState, saveGame, endGameSessionContext, router, setError]);

  return {
    // Actions
    handleDecision,
    saveGame,
    loadGame,
    endGame,

    // State
    isTransitioning,
    lastTransition,
  };
}
