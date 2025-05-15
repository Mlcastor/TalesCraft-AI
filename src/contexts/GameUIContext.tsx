"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from "react";

/**
 * UI-specific state interface
 * Contains UI state that doesn't affect the game engine core
 */
export interface GameUIState {
  // View states
  isGameStateExpanded: boolean;
  isSettingsPanelOpen: boolean;
  isInventoryOpen: boolean;
  activeTab: "narrative" | "map" | "character" | "quests";

  // Loading indicators for UI operations (separate from game engine loading)
  isSavingUI: boolean;
  isLoadingUI: boolean;

  // UI feedback messages
  feedbackMessage: string | null;
  feedbackType: "success" | "error" | "info" | "warning" | null;

  // Narrative display
  isTextAnimating: boolean;
  showFullHistory: boolean;

  // UI-specific settings (not affecting game logic)
  sidebarVisible: boolean;
  compactMode: boolean;
  lastViewedTab: string;
}

/**
 * Default UI State
 */
const defaultUIState: GameUIState = {
  isGameStateExpanded: false,
  isSettingsPanelOpen: false,
  isInventoryOpen: false,
  activeTab: "narrative",
  isSavingUI: false,
  isLoadingUI: false,
  feedbackMessage: null,
  feedbackType: null,
  isTextAnimating: false,
  showFullHistory: false,
  sidebarVisible: true,
  compactMode: false,
  lastViewedTab: "narrative",
};

/**
 * GameUI Context Type
 * Contains state and updater functions with memoization to optimize renders
 */
export interface GameUIContextType {
  // State
  uiState: GameUIState;

  // UI View toggles
  toggleGameStatePanel: () => void;
  toggleSettingsPanel: () => void;
  toggleInventory: () => void;
  setActiveTab: (tab: GameUIState["activeTab"]) => void;

  // Loading indicators
  setUILoading: (isLoading: boolean) => void;
  setUISaving: (isSaving: boolean) => void;

  // Feedback messages
  showFeedback: (message: string, type: GameUIState["feedbackType"]) => void;
  clearFeedback: () => void;

  // Narrative display
  setTextAnimating: (isAnimating: boolean) => void;
  toggleHistoryView: () => void;

  // Layout controls
  toggleSidebar: () => void;
  toggleCompactMode: () => void;

  // Generic state updater (use sparingly)
  updateUIState: (updates: Partial<GameUIState>) => void;

  // Memoized selectors for performance optimization
  selectors: {
    isPanelActive: boolean; // Any panel is active
    isLoading: boolean; // Any loading indicator is active
    hasFeedback: boolean; // There is a feedback message
  };
}

// Create context with undefined default (to ensure proper usage with Provider)
const GameUIContext = createContext<GameUIContextType | undefined>(undefined);

interface GameUIProviderProps {
  children: ReactNode;
  initialState?: Partial<GameUIState>;
}

/**
 * GameUI Provider Component
 * Manages UI-specific state to optimize rendering performance and
 * separate UI concerns from the game engine core logic
 */
export function GameUIProvider({
  children,
  initialState = {},
}: GameUIProviderProps) {
  // Initialize state with defaults merged with any provided initial state
  const [uiState, setUIState] = useState<GameUIState>({
    ...defaultUIState,
    ...initialState,
  });

  // UI view toggles with useCallback for stability
  const toggleGameStatePanel = useCallback(() => {
    setUIState((prev) => ({
      ...prev,
      isGameStateExpanded: !prev.isGameStateExpanded,
    }));
  }, []);

  const toggleSettingsPanel = useCallback(() => {
    setUIState((prev) => ({
      ...prev,
      isSettingsPanelOpen: !prev.isSettingsPanelOpen,
    }));
  }, []);

  const toggleInventory = useCallback(() => {
    setUIState((prev) => ({
      ...prev,
      isInventoryOpen: !prev.isInventoryOpen,
    }));
  }, []);

  const setActiveTab = useCallback((tab: GameUIState["activeTab"]) => {
    setUIState((prev) => ({
      ...prev,
      activeTab: tab,
      lastViewedTab: prev.activeTab,
    }));
  }, []);

  // Loading state setters
  const setUILoading = useCallback((isLoading: boolean) => {
    setUIState((prev) => ({
      ...prev,
      isLoadingUI: isLoading,
    }));
  }, []);

  const setUISaving = useCallback((isSaving: boolean) => {
    setUIState((prev) => ({
      ...prev,
      isSavingUI: isSaving,
    }));
  }, []);

  // Feedback message functions
  const showFeedback = useCallback(
    (message: string, type: GameUIState["feedbackType"] = "info") => {
      setUIState((prev) => ({
        ...prev,
        feedbackMessage: message,
        feedbackType: type,
      }));

      // Auto-clear feedback after 5 seconds unless it's an error
      if (type !== "error") {
        setTimeout(() => {
          setUIState((prev) => ({
            ...prev,
            feedbackMessage: null,
            feedbackType: null,
          }));
        }, 5000);
      }
    },
    []
  );

  const clearFeedback = useCallback(() => {
    setUIState((prev) => ({
      ...prev,
      feedbackMessage: null,
      feedbackType: null,
    }));
  }, []);

  // Narrative display controls
  const setTextAnimating = useCallback((isAnimating: boolean) => {
    setUIState((prev) => ({
      ...prev,
      isTextAnimating: isAnimating,
    }));
  }, []);

  const toggleHistoryView = useCallback(() => {
    setUIState((prev) => ({
      ...prev,
      showFullHistory: !prev.showFullHistory,
    }));
  }, []);

  // Layout controls
  const toggleSidebar = useCallback(() => {
    setUIState((prev) => ({
      ...prev,
      sidebarVisible: !prev.sidebarVisible,
    }));
  }, []);

  const toggleCompactMode = useCallback(() => {
    setUIState((prev) => ({
      ...prev,
      compactMode: !prev.compactMode,
    }));
  }, []);

  // Generic state updater (use sparingly)
  const updateUIState = useCallback((updates: Partial<GameUIState>) => {
    setUIState((prev) => ({
      ...prev,
      ...updates,
    }));
  }, []);

  // Memoized selectors for derived state to prevent unnecessary renders
  const selectors = useMemo(
    () => ({
      isPanelActive:
        uiState.isGameStateExpanded ||
        uiState.isSettingsPanelOpen ||
        uiState.isInventoryOpen,
      isLoading: uiState.isLoadingUI || uiState.isSavingUI,
      hasFeedback: uiState.feedbackMessage !== null,
    }),
    [
      uiState.isGameStateExpanded,
      uiState.isSettingsPanelOpen,
      uiState.isInventoryOpen,
      uiState.isLoadingUI,
      uiState.isSavingUI,
      uiState.feedbackMessage,
    ]
  );

  // Memoize context value to prevent unnecessary renders
  const contextValue = useMemo(
    () => ({
      uiState,
      toggleGameStatePanel,
      toggleSettingsPanel,
      toggleInventory,
      setActiveTab,
      setUILoading,
      setUISaving,
      showFeedback,
      clearFeedback,
      setTextAnimating,
      toggleHistoryView,
      toggleSidebar,
      toggleCompactMode,
      updateUIState,
      selectors,
    }),
    [
      uiState,
      toggleGameStatePanel,
      toggleSettingsPanel,
      toggleInventory,
      setActiveTab,
      setUILoading,
      setUISaving,
      showFeedback,
      clearFeedback,
      setTextAnimating,
      toggleHistoryView,
      toggleSidebar,
      toggleCompactMode,
      updateUIState,
      selectors,
    ]
  );

  return (
    <GameUIContext.Provider value={contextValue}>
      {children}
    </GameUIContext.Provider>
  );
}

/**
 * Hook for using GameUI context in components
 *
 * @returns The GameUI context value
 * @throws Error if used outside a GameUIProvider
 */
export function useGameUI(): GameUIContextType {
  const context = useContext(GameUIContext);

  if (context === undefined) {
    throw new Error("useGameUI must be used within a GameUIProvider");
  }

  return context;
}
