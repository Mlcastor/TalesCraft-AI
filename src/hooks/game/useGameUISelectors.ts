import { useCallback, useMemo } from "react";
import { useGameUI } from "@/contexts/GameUIContext";
import type { GameUIState } from "@/contexts/GameUIContext";

/**
 * Custom hooks for accessing specific parts of the game UI state
 * These hooks use memoization to reduce unnecessary re-renders
 */

/**
 * Get view state related to panels and tabs
 * Only re-renders when view states change
 */
export function useUIViewState(): {
  isGameStateExpanded: boolean;
  isSettingsPanelOpen: boolean;
  isInventoryOpen: boolean;
  activeTab: GameUIState["activeTab"];
} {
  const { uiState } = useGameUI();
  return useMemo(
    () => ({
      isGameStateExpanded: uiState.isGameStateExpanded,
      isSettingsPanelOpen: uiState.isSettingsPanelOpen,
      isInventoryOpen: uiState.isInventoryOpen,
      activeTab: uiState.activeTab,
    }),
    [
      uiState.isGameStateExpanded,
      uiState.isSettingsPanelOpen,
      uiState.isInventoryOpen,
      uiState.activeTab,
    ]
  );
}

/**
 * Get loading state from UI
 * Only re-renders when loading state changes
 */
export function useUILoadingState(): {
  isSavingUI: boolean;
  isLoadingUI: boolean;
} {
  const { uiState } = useGameUI();
  return useMemo(
    () => ({
      isSavingUI: uiState.isSavingUI,
      isLoadingUI: uiState.isLoadingUI,
    }),
    [uiState.isSavingUI, uiState.isLoadingUI]
  );
}

/**
 * Get feedback message state
 * Only re-renders when feedback message changes
 */
export function useUIFeedbackState(): {
  feedbackMessage: string | null;
  feedbackType: GameUIState["feedbackType"];
} {
  const { uiState } = useGameUI();
  return useMemo(
    () => ({
      feedbackMessage: uiState.feedbackMessage,
      feedbackType: uiState.feedbackType,
    }),
    [uiState.feedbackMessage, uiState.feedbackType]
  );
}

/**
 * Get narrative display state
 * Only re-renders when narrative display state changes
 */
export function useUINarrativeState(): {
  isTextAnimating: boolean;
  showFullHistory: boolean;
} {
  const { uiState } = useGameUI();
  return useMemo(
    () => ({
      isTextAnimating: uiState.isTextAnimating,
      showFullHistory: uiState.showFullHistory,
    }),
    [uiState.isTextAnimating, uiState.showFullHistory]
  );
}

/**
 * Get layout state
 * Only re-renders when layout state changes
 */
export function useUILayoutState(): {
  sidebarVisible: boolean;
  compactMode: boolean;
  lastViewedTab: string;
} {
  const { uiState } = useGameUI();
  return useMemo(
    () => ({
      sidebarVisible: uiState.sidebarVisible,
      compactMode: uiState.compactMode,
      lastViewedTab: uiState.lastViewedTab,
    }),
    [uiState.sidebarVisible, uiState.compactMode, uiState.lastViewedTab]
  );
}

/**
 * Get all pre-computed selectors
 * Only re-renders when any selector changes
 */
export function useUISelectors(): {
  isPanelActive: boolean;
  isLoading: boolean;
  hasFeedback: boolean;
} {
  const { selectors } = useGameUI();
  return selectors;
}

/**
 * Get UI toggling functions
 * Memoized to preserve function references
 */
export function useUIToggleActions(): {
  toggleGameStatePanel: () => void;
  toggleSettingsPanel: () => void;
  toggleInventory: () => void;
  toggleHistoryView: () => void;
  toggleSidebar: () => void;
  toggleCompactMode: () => void;
} {
  const {
    toggleGameStatePanel,
    toggleSettingsPanel,
    toggleInventory,
    toggleHistoryView,
    toggleSidebar,
    toggleCompactMode,
  } = useGameUI();

  return useMemo(
    () => ({
      toggleGameStatePanel,
      toggleSettingsPanel,
      toggleInventory,
      toggleHistoryView,
      toggleSidebar,
      toggleCompactMode,
    }),
    [
      toggleGameStatePanel,
      toggleSettingsPanel,
      toggleInventory,
      toggleHistoryView,
      toggleSidebar,
      toggleCompactMode,
    ]
  );
}

/**
 * Get UI setter functions
 * Memoized to preserve function references
 */
export function useUISetterActions(): {
  setActiveTab: (tab: GameUIState["activeTab"]) => void;
  setUILoading: (isLoading: boolean) => void;
  setUISaving: (isSaving: boolean) => void;
  setTextAnimating: (isAnimating: boolean) => void;
  showFeedback: (message: string, type: GameUIState["feedbackType"]) => void;
  clearFeedback: () => void;
} {
  const {
    setActiveTab,
    setUILoading,
    setUISaving,
    setTextAnimating,
    showFeedback,
    clearFeedback,
  } = useGameUI();

  return useMemo(
    () => ({
      setActiveTab,
      setUILoading,
      setUISaving,
      setTextAnimating,
      showFeedback,
      clearFeedback,
    }),
    [
      setActiveTab,
      setUILoading,
      setUISaving,
      setTextAnimating,
      showFeedback,
      clearFeedback,
    ]
  );
}

/**
 * Get the generic state updater
 * Memoized to preserve function reference
 */
export function useUIStateUpdater(): (updates: Partial<GameUIState>) => void {
  const { updateUIState } = useGameUI();
  return useCallback(
    (updates: Partial<GameUIState>) => updateUIState(updates),
    [updateUIState]
  );
}
