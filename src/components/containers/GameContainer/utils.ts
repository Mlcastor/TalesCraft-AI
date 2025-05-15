import { GameSettings } from "@/contexts/GameSettingsContext";

/**
 * Get the CSS class for a font size
 *
 * @param fontSize - The font size setting value
 * @returns The corresponding CSS class
 */
export function getFontSizeClass(fontSize: string = "medium"): string {
  switch (fontSize) {
    case "small":
      return "text-sm";
    case "medium":
      return "text-base";
    case "large":
      return "text-lg";
    case "x-large":
      return "text-xl";
    default:
      return "text-base";
  }
}

/**
 * Get text speed setting value
 *
 * @param settings - Game settings object
 * @returns Text speed value
 */
export function getTextSpeed(
  settings: GameSettings
): "slow" | "medium" | "fast" | "instant" {
  return settings.textSpeed;
}

/**
 * Get text-to-speech setting value
 *
 * @param settings - Game settings object
 * @returns Text-to-speech enabled value
 */
export function getTextToSpeechEnabled(settings: GameSettings): boolean {
  return settings.textToSpeechEnabled;
}

/**
 * Get show consequences setting value
 *
 * @param settings - Game settings object
 * @returns Show consequences value
 */
export function getShowConsequences(settings: GameSettings): boolean {
  return settings.showConsequences;
}

/**
 * Get keyboard shortcuts setting value
 *
 * @param settings - Game settings object
 * @returns Keyboard shortcuts enabled value
 */
export function getKeyboardShortcutsEnabled(settings: GameSettings): boolean {
  return settings.keyboardShortcutsEnabled;
}

/**
 * Get sound effects volume setting value
 *
 * @param settings - Game settings object
 * @returns Sound effects volume value
 */
export function getSoundEffectsVolume(settings: GameSettings): number {
  return settings.soundEffectsVolume;
}

/**
 * Get haptic feedback setting value
 *
 * @param settings - Game settings object
 * @returns Haptic feedback enabled value
 */
export function getHapticFeedbackEnabled(settings: GameSettings): boolean {
  return settings.hapticFeedbackEnabled;
}
