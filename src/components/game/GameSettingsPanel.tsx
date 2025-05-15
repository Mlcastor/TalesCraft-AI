"use client";

import { useState } from "react";
import { GameSettings } from "@/contexts/GameSettingsContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, Save, RotateCcw, Settings } from "lucide-react";
import {
  useAllGameSettings,
  useSettingsActions,
} from "@/hooks/game/useGameSettingsSelectors";

/**
 * Game settings panel component
 * Allows players to adjust game settings like text size, sound, accessibility, etc.
 */
export function GameSettingsPanel() {
  const settings = useAllGameSettings();
  const { updateSettings, resetSettings } = useSettingsActions();
  const [isOpen, setIsOpen] = useState(false);
  const [tempSettings, setTempSettings] = useState<GameSettings>(settings);

  // Handle dialog open/close
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  // Apply the temporary settings to the actual settings
  const applySettings = () => {
    updateSettings(tempSettings);
    closeDialog();
  };

  // Reset settings to default and update temp settings
  const handleResetSettings = () => {
    resetSettings();
    setTempSettings(settings);
  };

  // Handle individual setting change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    // Handle different input types
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setTempSettings((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (type === "range") {
      setTempSettings((prev) => ({
        ...prev,
        [name]: parseInt(value, 10),
      }));
    } else {
      setTempSettings((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <>
      {/* Settings Button */}
      <button
        onClick={openDialog}
        className="flex items-center gap-2 px-3 py-1 bg-muted hover:bg-muted/80 text-muted-foreground rounded-md transition-colors"
        aria-label="Open game settings"
      >
        <Settings size={16} />
        <span className="text-sm">Settings</span>
      </button>

      {/* Settings Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Game Settings</DialogTitle>
          </DialogHeader>

          <div className="space-y-6 my-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Game Settings</h2>
              <button
                onClick={closeDialog}
                className="p-1 rounded-full hover:bg-muted/20"
                aria-label="Close settings"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Display Settings */}
              <div className="bg-muted/20 p-4 rounded-lg border border-border">
                <h3 className="text-lg font-medium mb-3">Display Settings</h3>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="fontSize"
                      className="block text-sm font-medium mb-1"
                    >
                      Font Size
                    </label>
                    <select
                      id="fontSize"
                      name="fontSize"
                      value={tempSettings.fontSize}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md"
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
                      className="block text-sm font-medium mb-1"
                    >
                      Text Animation Speed
                    </label>
                    <select
                      id="textSpeed"
                      name="textSpeed"
                      value={tempSettings.textSpeed}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md"
                    >
                      <option value="slow">Slow</option>
                      <option value="medium">Medium (Default)</option>
                      <option value="fast">Fast</option>
                      <option value="instant">Instant</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="highContrast"
                      name="highContrast"
                      checked={tempSettings.highContrast}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4"
                    />
                    <label htmlFor="highContrast" className="text-sm">
                      High Contrast Mode
                    </label>
                  </div>
                </div>
              </div>

              {/* Audio Settings */}
              <div className="bg-muted/20 p-4 rounded-lg border border-border">
                <h3 className="text-lg font-medium mb-3">Audio Settings</h3>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="musicVolume"
                      className="block text-sm font-medium mb-1"
                    >
                      Music Volume: {tempSettings.musicVolume}%
                    </label>
                    <input
                      type="range"
                      id="musicVolume"
                      name="musicVolume"
                      min="0"
                      max="100"
                      value={tempSettings.musicVolume}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="soundEffectsVolume"
                      className="block text-sm font-medium mb-1"
                    >
                      Sound Effects Volume: {tempSettings.soundEffectsVolume}%
                    </label>
                    <input
                      type="range"
                      id="soundEffectsVolume"
                      name="soundEffectsVolume"
                      min="0"
                      max="100"
                      value={tempSettings.soundEffectsVolume}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="textToSpeechEnabled"
                      name="textToSpeechEnabled"
                      checked={tempSettings.textToSpeechEnabled}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4"
                    />
                    <label htmlFor="textToSpeechEnabled" className="text-sm">
                      Enable Text-to-Speech
                    </label>
                  </div>
                </div>
              </div>

              {/* Gameplay Settings */}
              <div className="bg-muted/20 p-4 rounded-lg border border-border">
                <h3 className="text-lg font-medium mb-3">Gameplay Settings</h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="autoSaveEnabled"
                      name="autoSaveEnabled"
                      checked={tempSettings.autoSaveEnabled}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4"
                    />
                    <label htmlFor="autoSaveEnabled" className="text-sm">
                      Enable Auto-Save
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="autoSaveInterval"
                      className="block text-sm font-medium mb-1"
                    >
                      Auto-Save Interval (minutes)
                    </label>
                    <select
                      id="autoSaveInterval"
                      name="autoSaveInterval"
                      value={tempSettings.autoSaveInterval}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md"
                      disabled={!tempSettings.autoSaveEnabled}
                    >
                      <option value={1}>1 minute</option>
                      <option value={5}>5 minutes</option>
                      <option value={10}>10 minutes</option>
                      <option value={15}>15 minutes</option>
                      <option value={30}>30 minutes</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="showConsequences"
                      name="showConsequences"
                      checked={tempSettings.showConsequences}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4"
                    />
                    <label htmlFor="showConsequences" className="text-sm">
                      Show Decision Consequences (when available)
                    </label>
                  </div>
                </div>
              </div>

              {/* Accessibility Settings */}
              <div className="bg-muted/20 p-4 rounded-lg border border-border">
                <h3 className="text-lg font-medium mb-3">
                  Accessibility Settings
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="keyboardShortcutsEnabled"
                      name="keyboardShortcutsEnabled"
                      checked={tempSettings.keyboardShortcutsEnabled}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4"
                    />
                    <label
                      htmlFor="keyboardShortcutsEnabled"
                      className="text-sm"
                    >
                      Enable Keyboard Shortcuts (1, 2, 3 for choices)
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hapticFeedbackEnabled"
                      name="hapticFeedbackEnabled"
                      checked={tempSettings.hapticFeedbackEnabled}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4"
                    />
                    <label htmlFor="hapticFeedbackEnabled" className="text-sm">
                      Enable Haptic Feedback (mobile devices)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handleResetSettings}
                className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 text-muted-foreground rounded-md transition-colors"
              >
                <RotateCcw size={16} />
                Reset to Default
              </button>

              <button
                onClick={applySettings}
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors"
              >
                <Save size={16} />
                Save Settings
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
