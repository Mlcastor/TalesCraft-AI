"use client";

import { useEffect, useState, useCallback } from "react";
import { GameState, World, WorldWithRelatedData } from "@/types/game";
import { useGameFlow } from "@/hooks/game/useGameFlow";
import { useNarrativeContext } from "@/hooks/game/useNarrativeContext";
import {
  useNarrativeTextState,
  useNarrativeHistory,
  useNarrativeTextActions,
  useNarrativeSpeech,
  useNarrativeScrollRef,
} from "@/hooks/game/useNarrativeSelectors";
import { useDecisions } from "@/hooks/game/useDecisions";
import {
  useAllGameSettings,
  useDisplaySettings,
  useAccessibilitySettings,
  useContentSettings,
  useAudioSettings,
} from "@/hooks/game/useGameSettingsSelectors";
import { LoadingIndicator } from "@/components/game/LoadingIndicator";
import { NarrativeDisplay } from "@/components/game/NarrativeDisplay";
import { DecisionSelector } from "@/components/game/DecisionSelector";
import { GameStateIndicator } from "@/components/game/GameStateIndicator";
import { GameSettingsPanel } from "@/components/game/GameSettingsPanel";
import { Save, AlertCircle, Globe } from "lucide-react";
import Link from "next/link";
import { getFontSizeClass } from "./utils";
import { logger } from "@/lib/utils/logger";
import {
  getWorldById,
  getWorldWithRelatedData,
} from "@/lib/actions/world-actions";

interface GameContainerProps {
  sessionId: string;
  initialStateId?: string;
  initialGameState?: GameState;
  world?: World | null;
  worldWithRelatedData?: WorldWithRelatedData | null;
}

interface EnhancedGameState {
  worldState: Record<string, any>;
  characterState: Record<string, any>;
  currentLocation: string;
}

/**
 * Main container component for the game interface
 * Uses specialized hooks for different aspects of game management
 */
export function GameContainer({
  sessionId,
  initialStateId,
  initialGameState,
  world: initialWorld,
  worldWithRelatedData: initialWorldData,
}: GameContainerProps) {
  // State management
  const [gameState, setGameState] = useState<GameState | null>(
    initialGameState || null
  );
  const [isLoading, setIsLoading] = useState<boolean>(!initialGameState);
  const [error, setError] = useState<string | null>(null);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  // World data state
  const [currentWorld, setCurrentWorld] = useState<World | null>(
    initialWorld || null
  );
  const [worldData, setWorldData] = useState<WorldWithRelatedData | null>(
    initialWorldData || null
  );
  const [isWorldLoading, setIsWorldLoading] = useState<boolean>(false);
  const [worldError, setWorldError] = useState<string | null>(null);

  // Refresh world data when needed - using useCallback for proper dependency management
  const refreshWorldData = useCallback(
    async (worldId: string) => {
      if (!worldId) return;

      try {
        setIsWorldLoading(true);
        setWorldError(null);

        logger.debug("GameState: Refreshing world data", {
          context: "game-container",
          metadata: { worldId },
        });

        // Fetch in parallel for performance
        const [newWorld, newWorldData] = await Promise.all([
          getWorldById(worldId),
          getWorldWithRelatedData(worldId),
        ]);

        // Safe type setting
        setCurrentWorld(newWorld as World);
        setWorldData(newWorldData);

        logger.debug("GameState: World data refreshed successfully", {
          context: "game-container",
          metadata: {
            worldId,
            hasWorld: !!newWorld,
            worldName: newWorld?.name,
            locationsCount: newWorldData?.locations?.length,
          },
        });
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        setWorldError(`Failed to refresh world data: ${errorMessage}`);
        logger.error("Failed to refresh world data:", {
          context: "game-container",
          metadata: { worldId, error: errorMessage },
        });
      } finally {
        setIsWorldLoading(false);
      }
    },
    [setCurrentWorld, setWorldData, setIsWorldLoading, setWorldError]
  );

  // Safety check to load world data if missing but worldId is present
  useEffect(() => {
    if (!currentWorld && !isWorldLoading && gameState?.worldId) {
      logger.debug("Auto-loading missing world data", {
        context: "game-container",
        metadata: { worldId: gameState.worldId },
      });
      refreshWorldData(gameState.worldId);
    }
  }, [currentWorld, isWorldLoading, gameState?.worldId, refreshWorldData]);

  // Settings access using selectors
  const settings = useAllGameSettings();
  const { textToSpeechEnabled, soundEffectsVolume } = useAudioSettings();
  const { textSpeed } = useDisplaySettings();
  const { keyboardShortcutsEnabled, hapticFeedbackEnabled } =
    useAccessibilitySettings();
  const { showConsequences } = useContentSettings();

  // Derived state
  const enhancedGameState: EnhancedGameState | null = gameState
    ? {
        worldState: gameState.worldState || {},
        characterState: gameState.characterState || {},
        currentLocation: gameState.currentLocation || "Unknown Location",
      }
    : null;

  // Initialize narrative context with game state narrative data
  useNarrativeContext({
    initialText: gameState?.narrative?.text || "",
    initialHistory: gameState?.narrative?.history || [],
    textToSpeechEnabled,
    autoScroll: true,
  });

  // Use narrative selectors
  const { narrativeText, isTyping } = useNarrativeTextState();
  const narrativeHistory = useNarrativeHistory();
  const { typeNarrativeText, skipTypingAnimation } = useNarrativeTextActions();
  const { toggleTextToSpeech } = useNarrativeSpeech();
  const narrativeEndRef = useNarrativeScrollRef();

  // Initialize decisions with game state decision data
  const {
    decisions,
    selectDecision,
    isLoadingDecisions,
    setHoveredDecisionIndex,
    hasDecisions,
    updateDecisions,
  } = useDecisions({
    sessionId,
    initialDecisions: gameState?.decisions || [],
    onDecisionMade: (index) => handleDecision(index),
    keyboardShortcutsEnabled,
  });

  // Game flow management
  const {
    handleDecision,
    saveGame,
    loadGame,
    endGame,
    isTransitioning,
    lastTransition,
  } = useGameFlow({
    sessionId,
    gameState,
    setGameState,
    setError,
  });

  // Update narrative and decisions when game state changes
  useEffect(() => {
    if (!gameState?.narrative) return;

    if (gameState.narrative.text && textSpeed !== "instant") {
      typeNarrativeText(
        gameState.narrative.text,
        textSpeed === "slow" ? 80 : textSpeed === "fast" ? 20 : 40
      );
    }

    // Update decisions whenever gameState changes
    if (gameState.decisions) {
      updateDecisions(gameState.decisions);
    }
  }, [gameState, textSpeed, typeNarrativeText, updateDecisions]);

  // Handle manual save
  const handleManualSave = async () => {
    if (isLoading || isTransitioning) return;

    setSaveMessage("Saving game...");
    const savedState = await saveGame();

    if (savedState) {
      setLastSaved(new Date());
      setSaveMessage("Game saved");

      // Clear message after delay
      setTimeout(() => {
        setSaveMessage(null);
      }, 3000);
    } else {
      setSaveMessage("Failed to save game");

      // Clear error message after delay
      setTimeout(() => {
        setSaveMessage(null);
      }, 3000);
    }
  };

  // Check for loading states
  const isComponentLoading =
    isLoading || isTransitioning || (!gameState && !error);

  // Loading state
  if (isComponentLoading) {
    return (
      <LoadingIndicator
        message={
          isWorldLoading ? "Loading world data..." : "Loading your adventure..."
        }
        useSkeletonLoader={true}
      />
    );
  }

  // Error handling wrapper
  try {
    return (
      <div className="flex flex-col h-full">
        {/* Game state indicator */}
        {enhancedGameState && (
          <GameStateIndicator
            characterState={enhancedGameState.characterState}
            worldState={enhancedGameState.worldState}
            location={enhancedGameState.currentLocation}
            world={currentWorld}
            worldWithRelatedData={worldData}
          />
        )}

        {/* Main game content container */}
        <div
          className={`flex-1 overflow-y-auto p-4 ${getFontSizeClass(
            settings.fontSize
          )}`}
        >
          {/* Error message display */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {/* World error message display */}
          {worldError && (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4 flex items-center">
              <AlertCircle className="mr-2" size={16} />
              <span className="block sm:inline">{worldError}</span>
              <button
                className="ml-auto text-sm underline"
                onClick={() => {
                  // Try to refresh world data
                  if (gameState?.worldId) {
                    refreshWorldData(gameState.worldId);
                  }
                }}
              >
                Refresh
              </button>
            </div>
          )}

          {/* Link to world info page */}
          {gameState?.worldId && currentWorld && (
            <div className="mb-4">
              <Link
                href={`/game/${sessionId}/world-info`}
                className="inline-flex items-center text-primary underline"
              >
                <Globe className="mr-1" size={16} />
                View World Information
              </Link>
            </div>
          )}

          {/* Narrative display */}
          {gameState?.narrative && (
            <NarrativeDisplay
              narrative={gameState.narrative}
              isLoading={!!isLoading}
              textSpeed={textSpeed}
              textToSpeechEnabled={textToSpeechEnabled}
            />
          )}

          {/* Decisions */}
          {gameState?.decisions && (
            <DecisionSelector
              decisions={gameState.decisions}
              onDecisionSelected={selectDecision}
              isDisabled={!!(isLoading || isTransitioning)}
              showConsequences={showConsequences}
              keyboardShortcutsEnabled={keyboardShortcutsEnabled}
              soundEffectsVolume={soundEffectsVolume}
              hapticFeedbackEnabled={hapticFeedbackEnabled}
            />
          )}

          {/* Save game status */}
          {saveMessage && (
            <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
              {saveMessage}
            </div>
          )}

          {/* Last saved status */}
          {lastSaved && (
            <div className="text-xs text-gray-500 mt-4 text-right">
              Last saved:{" "}
              {lastSaved.toLocaleTimeString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          )}
        </div>

        {/* Game controls */}
        <div className="bg-gray-100 dark:bg-gray-800 p-2 border-t border-gray-200 dark:border-gray-700 flex justify-between">
          <div>
            <button
              onClick={endGame}
              className="px-3 py-1 text-red-600 dark:text-red-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-sm"
            >
              End Game
            </button>
          </div>
          <GameSettingsPanel />
          <div>
            <button
              onClick={handleManualSave}
              disabled={!!(isTransitioning || isLoading)}
              className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded text-sm disabled:opacity-50"
            >
              <Save className="mr-1" size={16} />
              Save
            </button>
          </div>
        </div>
      </div>
    );
  } catch (runtimeError) {
    // Catch any runtime rendering errors
    logger.error("Runtime error in GameContainer", {
      context: "game-container",
      metadata: {
        error:
          runtimeError instanceof Error
            ? runtimeError.message
            : String(runtimeError),
        sessionId,
      },
    });

    // Return a simplified fallback UI
    return (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 max-w-md">
          <h2 className="text-lg font-bold mb-2">Something went wrong</h2>
          <p>
            We encountered an unexpected error. Please try refreshing the page.
          </p>
          {error && <p className="mt-2 text-sm">{error}</p>}
          <div className="mt-4">
            <button
              onClick={() => window.location.reload()}
              className="mr-4 px-3 py-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded text-sm"
            >
              Refresh Page
            </button>
            <Link
              href="/player-hub"
              className="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded text-sm"
            >
              Return to Hub
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
