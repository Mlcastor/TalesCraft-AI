"use client";

import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Save, Settings, Expand, Minimize } from "lucide-react";

// Import selectors instead of direct context access
import {
  useGameActiveStatus,
  useCurrentWorldId,
  useGameEngineLoading,
  useGameEngineError,
  useSaveGame,
} from "@/hooks/game/useGameEngineSelectors";

import {
  useUIViewState,
  useUILoadingState,
  useUIToggleActions,
  useUISetterActions,
  useUISelectors,
} from "@/hooks/game/useGameUISelectors";

/**
 * Example component demonstrating optimal context usage with selectors
 *
 * This component shows:
 * - How to use specialized selector hooks for targeted state access
 * - How to prevent unnecessary re-renders with memo and selective state usage
 * - When to use derived state from selectors
 */
const UIOptimizedPanel = () => {
  // Use selector hooks for GameEngine state instead of direct context
  const isGameActive = useGameActiveStatus();
  const currentWorldId = useCurrentWorldId();
  const engineIsLoading = useGameEngineLoading();
  const engineError = useGameEngineError();
  const saveGameState = useSaveGame();

  // Use selector hooks for GameUI state instead of direct context
  const { isGameStateExpanded } = useUIViewState();
  const { isSavingUI } = useUILoadingState();
  const { toggleGameStatePanel, toggleSettingsPanel } = useUIToggleActions();
  const { setUISaving, showFeedback } = useUISetterActions();
  const { isLoading: uiIsLoading } = useUISelectors();

  // Combined loading state from both contexts
  const isLoading = engineIsLoading || uiIsLoading || isSavingUI;

  // Handle save button click with appropriate UI feedback
  const handleSave = async () => {
    if (!isGameActive || !currentWorldId) {
      showFeedback("No active game to save", "error");
      return;
    }

    try {
      setUISaving(true);
      await saveGameState.saveGame("Manual Save");
      showFeedback("Game saved successfully", "success");
    } catch (error) {
      // We don't need to handle the error here as the engine context already does it
      // But we can show UI feedback
      showFeedback("Failed to save game", "error");
    } finally {
      setUISaving(false);
    }
  };

  // Loading state UI
  if (isLoading) {
    return <LoadingPanel />;
  }

  // Error feedback from engine (only when needed)
  if (engineError) {
    return <ErrorPanel error={engineError} />;
  }

  return (
    <Card className="p-4 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Game Controls</h3>

        {/* UI-only action that doesn't affect game state */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleGameStatePanel}
          aria-label={isGameStateExpanded ? "Collapse panel" : "Expand panel"}
        >
          {isGameStateExpanded ? <Minimize size={18} /> : <Expand size={18} />}
        </Button>
      </div>

      <div className="flex space-x-2">
        {/* Game state action with UI feedback */}
        <Button
          onClick={handleSave}
          disabled={!isGameActive}
          className="flex items-center"
        >
          <Save className="mr-2" size={16} />
          Save Game
        </Button>

        {/* UI-only action that doesn't affect game state */}
        <Button
          variant="outline"
          onClick={toggleSettingsPanel}
          className="flex items-center"
        >
          <Settings className="mr-2" size={16} />
          Settings
        </Button>
      </div>
    </Card>
  );
};

// Memoized sub-components to prevent unnecessary re-renders
const LoadingPanel = memo(() => (
  <Card className="p-4 shadow-md">
    <div className="flex justify-between items-center mb-4">
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-8 w-8 rounded-full" />
    </div>
    <div className="flex space-x-2">
      <Skeleton className="h-10 w-28" />
      <Skeleton className="h-10 w-28" />
    </div>
  </Card>
));
LoadingPanel.displayName = "LoadingPanel";

const ErrorPanel = memo(({ error }: { error: string }) => (
  <Card className="p-4 shadow-md bg-red-50 border-red-200">
    <div className="text-red-600 mb-2 font-semibold">Error</div>
    <p className="text-sm text-red-700">{error}</p>
  </Card>
));
ErrorPanel.displayName = "ErrorPanel";

const MemoizedUIOptimizedPanel = memo(UIOptimizedPanel);
MemoizedUIOptimizedPanel.displayName = "UIOptimizedPanel";

export default MemoizedUIOptimizedPanel;
