"use client";

import { useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { Spinner } from "@/components/ui/Spinner";

/**
 * GamePreferences Component
 *
 * Allows users to configure their game preferences and settings.
 */
export function GamePreferences() {
  const { user, isLoading } = useAuthContext();
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  // Default preferences (would normally come from user's saved preferences)
  const [preferences, setPreferences] = useState({
    theme: "dark",
    musicVolume: 70,
    soundEffectsVolume: 80,
    textSpeed: "medium",
    fontSize: "medium",
    enableAutoSave: true,
    enableTutorialTips: true,
    difficultyLevel: "normal",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : target.value;
    const name = target.name;

    setPreferences((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);

    try {
      // To be implemented with server actions
      // This is where you'd call the update preferences API endpoint

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage({
        text: "Game preferences saved successfully!",
        type: "success",
      });
    } catch (error) {
      setMessage({
        text: "Failed to save preferences. Please try again.",
        type: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="py-10 text-center">
        <Spinner size="md" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-amber-400 mb-4">
        Game Preferences
      </h2>

      {message && (
        <div
          className={`p-3 mb-4 rounded ${
            message.type === "success"
              ? "bg-green-500/10 border border-green-500/50 text-green-500"
              : "bg-red-500/10 border border-red-500/50 text-red-500"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* UI Preferences */}
        <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-medium text-white mb-3">
            UI Preferences
          </h3>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="theme"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Theme
              </label>
              <select
                id="theme"
                name="theme"
                value={preferences.theme}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              >
                <option value="dark">Dark (Default)</option>
                <option value="light">Light</option>
                <option value="high-contrast">High Contrast</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="fontSize"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Font Size
              </label>
              <select
                id="fontSize"
                name="fontSize"
                value={preferences.fontSize}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              >
                <option value="small">Small</option>
                <option value="medium">Medium (Default)</option>
                <option value="large">Large</option>
                <option value="x-large">Extra Large</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="textSpeed"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Text Animation Speed
              </label>
              <select
                id="textSpeed"
                name="textSpeed"
                value={preferences.textSpeed}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              >
                <option value="slow">Slow</option>
                <option value="medium">Medium (Default)</option>
                <option value="fast">Fast</option>
                <option value="instant">Instant</option>
              </select>
            </div>
          </div>
        </div>

        {/* Audio Settings */}
        <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-medium text-white mb-3">
            Audio Settings
          </h3>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="musicVolume"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Music Volume: {preferences.musicVolume}%
              </label>
              <input
                type="range"
                id="musicVolume"
                name="musicVolume"
                min="0"
                max="100"
                value={preferences.musicVolume}
                onChange={handleChange}
                className="w-full bg-gray-700 h-2 rounded-md appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-500"
              />
            </div>

            <div>
              <label
                htmlFor="soundEffectsVolume"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Sound Effects Volume: {preferences.soundEffectsVolume}%
              </label>
              <input
                type="range"
                id="soundEffectsVolume"
                name="soundEffectsVolume"
                min="0"
                max="100"
                value={preferences.soundEffectsVolume}
                onChange={handleChange}
                className="w-full bg-gray-700 h-2 rounded-md appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Gameplay Settings */}
        <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-medium text-white mb-3">
            Gameplay Settings
          </h3>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="difficultyLevel"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Difficulty Level
              </label>
              <select
                id="difficultyLevel"
                name="difficultyLevel"
                value={preferences.difficultyLevel}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              >
                <option value="easy">Easy - For casual storytelling</option>
                <option value="normal">
                  Normal - Balanced challenge (Default)
                </option>
                <option value="hard">Hard - For experienced adventurers</option>
                <option value="nightmare">
                  Nightmare - Brutal and unforgiving
                </option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="enableAutoSave"
                name="enableAutoSave"
                checked={preferences.enableAutoSave}
                onChange={handleChange}
                className="h-4 w-4 text-amber-500 bg-gray-700 border-gray-600 rounded focus:ring-amber-500 focus:ring-offset-gray-800"
              />
              <label
                htmlFor="enableAutoSave"
                className="ml-2 block text-sm text-gray-300"
              >
                Enable Auto-Save
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="enableTutorialTips"
                name="enableTutorialTips"
                checked={preferences.enableTutorialTips}
                onChange={handleChange}
                className="h-4 w-4 text-amber-500 bg-gray-700 border-gray-600 rounded focus:ring-amber-500 focus:ring-offset-gray-800"
              />
              <label
                htmlFor="enableTutorialTips"
                className="ml-2 block text-sm text-gray-300"
              >
                Show Tutorial Tips
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-md hover:from-amber-600 hover:to-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? "Saving..." : "Save Preferences"}
          </button>
        </div>
      </form>
    </div>
  );
}
