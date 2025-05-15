import { useCallback, useMemo } from "react";
import { useGameSettings, GameSettings } from "@/contexts/GameSettingsContext";

/**
 * Custom hooks for accessing specific parts of the game settings
 * These hooks use memoization to reduce unnecessary re-renders
 */

/**
 * Get all game settings
 * Only re-renders when any setting changes
 */
export function useAllGameSettings(): GameSettings {
  const { settings } = useGameSettings();
  return settings;
}

/**
 * Get display settings from game settings
 * Only re-renders when display settings change
 */
export function useDisplaySettings(): {
  fontSize: GameSettings["fontSize"];
  textSpeed: GameSettings["textSpeed"];
  highContrast: boolean;
} {
  const { settings } = useGameSettings();
  return useMemo(
    () => ({
      fontSize: settings.fontSize,
      textSpeed: settings.textSpeed,
      highContrast: settings.highContrast,
    }),
    [settings.fontSize, settings.textSpeed, settings.highContrast]
  );
}

/**
 * Get audio settings from game settings
 * Only re-renders when audio settings change
 */
export function useAudioSettings(): {
  musicVolume: number;
  soundEffectsVolume: number;
  textToSpeechEnabled: boolean;
} {
  const { settings } = useGameSettings();
  return useMemo(
    () => ({
      musicVolume: settings.musicVolume,
      soundEffectsVolume: settings.soundEffectsVolume,
      textToSpeechEnabled: settings.textToSpeechEnabled,
    }),
    [
      settings.musicVolume,
      settings.soundEffectsVolume,
      settings.textToSpeechEnabled,
    ]
  );
}

/**
 * Get accessibility settings from game settings
 * Only re-renders when accessibility settings change
 */
export function useAccessibilitySettings(): {
  keyboardShortcutsEnabled: boolean;
  hapticFeedbackEnabled: boolean;
  highContrast: boolean;
  autoSaveEnabled: boolean;
} {
  const { settings } = useGameSettings();
  return useMemo(
    () => ({
      keyboardShortcutsEnabled: settings.keyboardShortcutsEnabled,
      hapticFeedbackEnabled: settings.hapticFeedbackEnabled,
      highContrast: settings.highContrast,
      autoSaveEnabled: settings.autoSaveEnabled,
    }),
    [
      settings.keyboardShortcutsEnabled,
      settings.hapticFeedbackEnabled,
      settings.highContrast,
      settings.autoSaveEnabled,
    ]
  );
}

/**
 * Get game content settings from game settings
 * Only re-renders when content settings change
 */
export function useContentSettings(): {
  showConsequences: boolean;
  autoSaveInterval: number;
} {
  const { settings } = useGameSettings();
  return useMemo(
    () => ({
      showConsequences: settings.showConsequences,
      autoSaveInterval: settings.autoSaveInterval,
    }),
    [settings.showConsequences, settings.autoSaveInterval]
  );
}

/**
 * Get setting updater functions
 * Memoized to preserve function references
 */
export function useSettingsActions(): {
  updateSettings: (newSettings: Partial<GameSettings>) => void;
  resetSettings: () => void;
} {
  const { updateSettings, resetSettings } = useGameSettings();
  return useMemo(
    () => ({
      updateSettings,
      resetSettings,
    }),
    [updateSettings, resetSettings]
  );
}
