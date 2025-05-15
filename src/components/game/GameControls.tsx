"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGame } from "@/contexts/GameProvider";
import { saveGameState } from "@/lib/actions/game-state-actions";
import { Input } from "@/components/ui/input";
import { logger } from "@/lib/utils/logger";

/**
 * Defines the structure of a decision option.
 * This should be consistent with the `GameState` type's decision structure.
 */
interface DecisionOption {
  text: string;
  consequences?: string; // Optional field for consequences
}

/**
 * Fallback decision data to display when no actual game data is available.
 * Useful for UI development and previewing the component's appearance.
 */
const fallbackDecisions: DecisionOption[] = [
  { text: "Venture down the overgrown trail into the dark thicket." },
  { text: "Follow the stone-paved road towards the distant light." },
  { text: "Examine the ancient archway for inscriptions or clues." },
  { text: "Call out into the mist to check for any response." },
];

export default function GameControls() {
  const { state, makePlayerDecision } = useGame();
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleDecision = async (index: number) => {
    await makePlayerDecision(index);
  };

  const handleSaveGame = async () => {
    if (!state.sessionId) {
      logger.error("Cannot save game: No active session ID.", {
        context: "GameControls",
      });
      return;
    }
    setIsSaving(true);
    try {
      await saveGameState(state.sessionId, saveName);
      setIsSaveDialogOpen(false);
      setSaveName("");
      logger.debug("Game saved successfully", {
        context: "GameControls",
        metadata: { sessionId: state.sessionId, saveName },
      });
    } catch (error) {
      logger.error("Failed to save game", {
        context: "GameControls",
        error: error instanceof Error ? error : new Error(String(error)),
        metadata: { sessionId: state.sessionId, saveName },
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Determine which decisions to display: actual game decisions or fallback data.
  const decisionsToDisplay: DecisionOption[] =
    state.currentGameState?.decisions &&
    state.currentGameState.decisions.length > 0
      ? state.currentGameState.decisions
      : fallbackDecisions;

  return (
    <div className="container mx-auto max-w-4xl">
      {state.error ? (
        <div className="text-center text-destructive">
          <p>Error: {state.error}</p>
        </div>
      ) : (
        <>
          <div className="flex justify-end space-x-2 mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsSaveDialogOpen(true)}
              disabled={
                !state.sessionId ||
                state.isMakingDecision ||
                state.isLoadingInitialGame
              }
            >
              Save Game
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {decisionsToDisplay.map((decision, index) => (
              <Button
                key={index}
                onClick={() => handleDecision(index)}
                disabled={state.isMakingDecision || state.isLoadingInitialGame}
                variant="secondary"
                className="p-4 h-auto text-left justify-start"
              >
                {decision.text}
              </Button>
            ))}
          </div>
        </>
      )}

      <Dialog open={isSaveDialogOpen} onOpenChange={setIsSaveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Game</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="saveName" className="text-sm font-medium">
                Save Name (Optional)
              </label>
              <Input
                id="saveName"
                type="text"
                value={saveName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSaveName(e.target.value)
                }
                placeholder="Enter a name for your save"
                disabled={isSaving}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsSaveDialogOpen(false)}
                disabled={isSaving}
              >
                Cancel
              </Button>
              <Button onClick={handleSaveGame} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
