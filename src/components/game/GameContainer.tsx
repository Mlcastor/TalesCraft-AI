"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { GameState } from "@/types/game";
import { useSession } from "@/contexts/SessionContext";
import { LoadingIndicator } from "./LoadingIndicator";
import { NarrativeDisplay } from "./NarrativeDisplay";
import { DecisionSelector } from "./DecisionSelector";
import { GameStateIndicator } from "./GameStateIndicator";
import { saveGameState } from "@/lib/actions/game-state-actions";
import { GameSettingsPanel } from "./GameSettingsPanel";
import { useGameSettings } from "@/contexts/GameSettingsContext";
import { provideFeedback } from "@/lib/utils/feedback";
import { Save, AlertCircle } from "lucide-react";
import { SkeletonLoader } from "./SkeletonLoader";

interface GameContainerProps {
  sessionId: string;
  initialStateId?: string;
}

/**
 * Main container component for the game interface
 * Uses SessionController via useSession hook for session management
 */
export function GameContainer({
  sessionId,
  initialStateId,
}: GameContainerProps) {
  const router = useRouter();
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  // Use the settings context
  const { settings } = useGameSettings();

  // Auto-save timer ref
  const autoSaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Use the session context
  const { currentSession, endSession: endGameSessionContext } = useSession();

  // Initialize the game when the component mounts
  useEffect(() => {
    async function initializeGame() {
      try {
        setIsLoading(true);
        setError(null);

        // Check if we have a valid session
        if (!currentSession) {
          setError("No valid game session found");
          setIsLoading(false);
          return;
        }

        // For the MVP, we'll display a placeholder
        // In a real implementation, we would load the game state from initialStateId
        // and initialize the game engine

        setTimeout(() => {
          setGameState({
            id: initialStateId || "placeholder-state-id",
            sessionId: sessionId,
            characterId: "placeholder-character-id",
            currentLocation: "Starting Area",
            saveTimestamp: new Date(),
            aiContext: {},
            characterState: { name: "Hero", health: 100 },
            worldState: { name: "Fantasy World" },
            isAutosave: false,
            isCompleted: false,
            isLoading: false,
            error: null,
            narrative: {
              text: "Welcome to Tales Craft AI! Your adventure is about to begin in a world of magic and mystery.",
              history: [
                {
                  type: "narrative",
                  content:
                    "Welcome to Tales Craft AI! Your adventure is about to begin in a world of magic and mystery.",
                },
              ],
            },
            decisions: [
              { text: "Explore the nearby forest" },
              { text: "Head to the village" },
              { text: "Rest and prepare for your journey" },
            ],
          });

          setIsLoading(false);
        }, 1500); // Simulate loading delay
      } catch (error) {
        console.error("Error initializing game:", error);
        setError("Failed to initialize game. Please try again.");
        setIsLoading(false);
      }
    }

    initializeGame();
  }, [sessionId, initialStateId, currentSession]);

  // Set up auto-save functionality
  useEffect(() => {
    // Clear any existing timer when component unmounts or settings change
    return () => {
      if (autoSaveTimerRef.current) {
        clearInterval(autoSaveTimerRef.current);
      }
    };
  }, []);

  // Save game function
  const saveGame = useCallback(
    async (isAutoSave = false) => {
      if (!gameState || !sessionId) return;

      try {
        setIsSaving(true);
        setSaveMessage(isAutoSave ? "Auto-saving..." : "Saving game...");

        // Call the server action to save the game
        const savedState = await saveGameState(
          sessionId,
          isAutoSave ? "Auto-save" : undefined
        );

        // Update the last saved timestamp
        setLastSaved(new Date());

        // Show success message
        setSaveMessage(isAutoSave ? "Auto-saved" : "Game saved");

        // Play success sound
        if (settings.soundEffectsVolume > 0) {
          provideFeedback("save", settings.soundEffectsVolume);
        }

        // Clear message after a delay
        setTimeout(() => {
          setSaveMessage(null);
        }, 3000);

        return savedState;
      } catch (error) {
        console.error("Error saving game:", error);
        setSaveMessage("Failed to save game");

        // Play error sound
        if (settings.soundEffectsVolume > 0) {
          provideFeedback("error", settings.soundEffectsVolume);
        }

        // Clear error message after a delay
        setTimeout(() => {
          setSaveMessage(null);
        }, 3000);

        return null;
      } finally {
        setIsSaving(false);
      }
    },
    [gameState, sessionId, settings.soundEffectsVolume]
  );

  // Update auto-save timer when settings change or game state changes
  useEffect(() => {
    // Clear any existing timer
    if (autoSaveTimerRef.current) {
      clearInterval(autoSaveTimerRef.current);
      autoSaveTimerRef.current = null;
    }

    // If auto-save is disabled or no game state, don't set up timer
    if (!settings.autoSaveEnabled || !gameState) return;

    // Calculate interval in milliseconds
    const interval = settings.autoSaveInterval * 60 * 1000;

    // Set up new timer
    autoSaveTimerRef.current = setInterval(() => {
      saveGame(true);
    }, interval);

    // Clean up timer on unmount
    return () => {
      if (autoSaveTimerRef.current) {
        clearInterval(autoSaveTimerRef.current);
      }
    };
  }, [
    settings.autoSaveEnabled,
    settings.autoSaveInterval,
    gameState,
    saveGame,
  ]);

  // Handle player decision
  const handleDecision = useCallback(
    async (decisionIndex: number) => {
      if (!gameState) return;

      try {
        setIsLoading(true);

        // Play sound effect for decision
        if (settings.soundEffectsVolume > 0) {
          provideFeedback("decision", settings.soundEffectsVolume);
        }

        // For the MVP, we'll simulate a decision
        // In a real implementation, we would call the game engine to process the decision

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const selectedDecision =
          gameState.decisions?.[decisionIndex]?.text || "Unknown choice";

        // Update game state with the player's decision
        setGameState((prevState) => {
          if (!prevState) return null;

          // Add player's choice to narrative history
          const updatedHistory = [
            ...(prevState.narrative?.history || []),
            { type: "playerResponse" as const, content: selectedDecision },
          ];

          // Generate a simple response based on the decision
          const responseText = `You decided to ${selectedDecision.toLowerCase()}. As you do, you notice the world around you reacting to your choice.`;

          // Add the narrative response to history
          const newHistory = [
            ...updatedHistory,
            { type: "narrative" as const, content: responseText },
          ];

          // Return updated state
          return {
            ...prevState,
            narrative: {
              text: responseText,
              history: newHistory,
            },
            decisions: [
              { text: "Continue onward" },
              { text: "Take a different path" },
              { text: "Examine your surroundings" },
            ],
          };
        });

        setIsLoading(false);

        // Auto-save after decision if enabled
        if (settings.autoSaveEnabled) {
          await saveGame(true);
        }
      } catch (error) {
        console.error("Error processing decision:", error);
        setError("Failed to process your decision. Please try again.");
        setIsLoading(false);
      }
    },
    [gameState, settings.soundEffectsVolume, settings.autoSaveEnabled, saveGame]
  );

  // Handle ending the game session
  const handleEndGame = async () => {
    try {
      if (confirm("Are you sure you want to end this game session?")) {
        // Save game before ending session
        await saveGame();

        await endGameSessionContext(sessionId);
        router.push("/player-hub"); // Redirect to hub after ending session
      }
    } catch (error) {
      console.error("Error ending game:", error);
      setError("Failed to end game session. Please try again.");
    }
  };

  // Handle manual save
  const handleManualSave = async () => {
    await saveGame();
  };

  // Loading state
  if (isLoading) {
    return (
      <LoadingIndicator
        message="Loading your adventure..."
        useSkeletonLoader={true}
      />
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-red-500 mb-4">Error</h2>
        <p className="mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Try Again
        </button>
      </div>
    );
  }

  // No game state loaded
  if (!gameState) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold mb-4">No Game Data Found</h2>
        <p className="mb-4">
          We couldn&apos;t find any game data for this session.
        </p>
        <button
          onClick={() => router.push("/player-hub")}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Return to Player Hub
        </button>
      </div>
    );
  }

  // Game interface
  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      {/* Game header with controls */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          {gameState.characterState.name}&apos;s Adventure
        </h2>
        <div className="flex gap-2 items-center">
          {/* Save indicator */}
          {saveMessage && (
            <div className="text-sm flex items-center gap-1 text-muted-foreground">
              {isSaving ? (
                <span className="flex items-center">
                  <div className="w-3 h-3 border-t-2 border-r-2 border-primary rounded-full animate-spin mr-1"></div>
                  {saveMessage}
                </span>
              ) : (
                saveMessage
              )}
            </div>
          )}

          {/* Manual save button */}
          <button
            onClick={handleManualSave}
            disabled={isSaving}
            className="flex items-center gap-1 px-3 py-1 bg-muted hover:bg-muted/80 text-muted-foreground rounded-md transition-colors disabled:opacity-50"
            aria-label="Save game"
          >
            <Save size={16} />
            <span className="text-sm">Save</span>
          </button>

          {/* Settings button */}
          <GameSettingsPanel />

          {/* End game button */}
          <button
            onClick={handleEndGame}
            className="px-3 py-1 bg-destructive text-destructive-foreground text-sm rounded-md"
          >
            End Game
          </button>
        </div>
      </div>

      {/* Main game content */}
      <div
        className={`flex-1 overflow-hidden flex flex-col gap-4 ${
          settings.highContrast ? "contrast-125 brightness-110" : ""
        }`}
        style={{ fontSize: getFontSizeClass(settings.fontSize) }}
      >
        <GameStateIndicator
          characterState={gameState.characterState}
          worldState={gameState.worldState}
          location={gameState.currentLocation}
        />

        <NarrativeDisplay
          narrative={gameState.narrative}
          isLoading={isLoading}
          textSpeed={settings.textSpeed}
          textToSpeechEnabled={settings.textToSpeechEnabled}
        />

        <DecisionSelector
          decisions={gameState.decisions || []}
          onDecisionSelected={handleDecision}
          isDisabled={isLoading}
          showConsequences={settings.showConsequences}
          keyboardShortcutsEnabled={settings.keyboardShortcutsEnabled}
          soundEffectsVolume={settings.soundEffectsVolume}
          hapticFeedbackEnabled={settings.hapticFeedbackEnabled}
        />
      </div>
    </div>
  );
}

// Helper function to convert font size setting to CSS class
function getFontSizeClass(fontSize: string): string {
  switch (fontSize) {
    case "small":
      return "0.875rem";
    case "large":
      return "1.125rem";
    case "x-large":
      return "1.25rem";
    case "medium":
    default:
      return "1rem";
  }
}
