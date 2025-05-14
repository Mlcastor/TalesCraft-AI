"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define game settings types
export interface GameSettings {
  // Text and display
  fontSize: "small" | "medium" | "large" | "x-large";
  textSpeed: "slow" | "medium" | "fast" | "instant";
  highContrast: boolean;

  // Audio settings
  musicVolume: number;
  soundEffectsVolume: number;
  textToSpeechEnabled: boolean;

  // Gameplay
  autoSaveEnabled: boolean;
  autoSaveInterval: number; // in minutes
  showConsequences: boolean;

  // Accessibility
  keyboardShortcutsEnabled: boolean;
  hapticFeedbackEnabled: boolean;
}

// Default settings
const defaultSettings: GameSettings = {
  fontSize: "medium",
  textSpeed: "medium",
  highContrast: false,

  musicVolume: 50,
  soundEffectsVolume: 50,
  textToSpeechEnabled: false,

  autoSaveEnabled: true,
  autoSaveInterval: 5,
  showConsequences: true,

  keyboardShortcutsEnabled: true,
  hapticFeedbackEnabled: true,
};

// Create context type
interface GameSettingsContextType {
  settings: GameSettings;
  updateSettings: (newSettings: Partial<GameSettings>) => void;
  resetSettings: () => void;
}

// Create the context
const GameSettingsContext = createContext<GameSettingsContextType | undefined>(
  undefined
);

// Provider props
interface GameSettingsProviderProps {
  children: ReactNode;
  initialSettings?: Partial<GameSettings>;
}

// Local storage key
const STORAGE_KEY = "game_settings";

/**
 * Provider component for game settings
 */
export function GameSettingsProvider({
  children,
  initialSettings = {},
}: GameSettingsProviderProps) {
  // Initialize state with default settings merged with any provided initial settings
  const [settings, setSettings] = useState<GameSettings>(() => {
    // If we're in a browser, try to load from localStorage
    if (typeof window !== "undefined") {
      try {
        const savedSettings = localStorage.getItem(STORAGE_KEY);
        if (savedSettings) {
          return {
            ...defaultSettings,
            ...JSON.parse(savedSettings),
            ...initialSettings,
          };
        }
      } catch (error) {
        console.error("Failed to load settings from localStorage:", error);
      }
    }

    // Default fallback
    return { ...defaultSettings, ...initialSettings };
  });

  // Update settings and save to localStorage
  const updateSettings = (newSettings: Partial<GameSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };

      // Save to localStorage if in a browser
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch (error) {
          console.error("Failed to save settings to localStorage:", error);
        }
      }

      return updated;
    });
  };

  // Reset settings to defaults
  const resetSettings = () => {
    setSettings(defaultSettings);

    // Clear from localStorage if in a browser
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSettings));
      } catch (error) {
        console.error(
          "Failed to save default settings to localStorage:",
          error
        );
      }
    }
  };

  // Context value
  const value = {
    settings,
    updateSettings,
    resetSettings,
  };

  return (
    <GameSettingsContext.Provider value={value}>
      {children}
    </GameSettingsContext.Provider>
  );
}

/**
 * Hook for using game settings in components
 */
export function useGameSettings(): GameSettingsContextType {
  const context = useContext(GameSettingsContext);

  if (context === undefined) {
    throw new Error(
      "useGameSettings must be used within a GameSettingsProvider"
    );
  }

  return context;
}
