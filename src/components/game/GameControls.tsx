"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGame } from "./GameProvider";
import { makeGameDecision, saveGameState } from "@/lib/actions/game-actions";

export default function GameControls() {
  const { state, dispatch } = useGame();
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
  const [saveName, setSaveName] = useState("");

  const handleDecision = async (index: number) => {
    try {
      // Update local state to show player's choice
      dispatch({ type: "MAKE_DECISION", payload: { index } });

      // Get the session ID from the URL
      const sessionId = window.location.pathname.split("/").pop() as string;

      // Make the decision via server action
      const result = await makeGameDecision(sessionId, index);

      // Update game state with new narrative
      dispatch({
        type: "UPDATE_NARRATIVE",
        payload: {
          text: result.narrativeText,
          decisions: result.newDecisionPoints,
        },
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error instanceof Error ? error.message : "An error occurred",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const handleSaveGame = async () => {
    try {
      const sessionId = window.location.pathname.split("/").pop() as string;
      await saveGameState(sessionId, saveName);
      setIsSaveDialogOpen(false);
    } catch (error) {
      console.error("Failed to save game:", error);
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-end space-x-2 mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsSaveDialogOpen(true)}
          >
            Save Game
          </Button>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {state.decisions.map((decision, index) => (
            <Button
              key={index}
              onClick={() => handleDecision(index)}
              disabled={state.isLoading}
              variant="secondary"
              className="p-4 h-auto text-left justify-start"
            >
              {decision.text}
            </Button>
          ))}
        </div>
      </div>

      <Dialog open={isSaveDialogOpen} onOpenChange={setIsSaveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Game</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Save Name</label>
              <input
                type="text"
                value={saveName}
                onChange={(e) => setSaveName(e.target.value)}
                placeholder="Enter a name for your save"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsSaveDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleSaveGame}>Save</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
