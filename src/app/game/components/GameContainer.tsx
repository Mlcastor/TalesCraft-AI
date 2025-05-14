"use client";

import { useGameEngine } from "@/lib/game-engine";
import { useGameInitialization } from "../hooks/useGameInitialization";
import { useNarrativeManager } from "../hooks/useNarrativeManager";
import { GameHeader } from "./GameHeader";
import { NarrativeHistory } from "./NarrativeHistory";
import { ChoicePanel } from "./ChoicePanel";
import { GameControls } from "./GameControls";
import { LoadingScreen } from "./LoadingScreen";
import { ErrorScreen } from "./ErrorScreen";
import { NoGameStateScreen } from "./NoGameStateScreen";

interface GameContainerProps {
  characterId: string;
}

/**
 * Main game container component that orchestrates the game experience
 */
export function GameContainer({ characterId }: GameContainerProps) {
  // Get the game engine state
  const { gameState, session, isLoading, error } = useGameEngine();

  // Initialize the game state
  const {
    initialized,
    isProcessing: isInitProcessing,
    loadingFromDB,
    playerCharacter,
    currentLocation,
    worldId,
    locationId,
    narrativeHistory,
    setNarrativeHistory,
    worldState,
  } = useGameInitialization({ characterId });

  // Manage the narrative flow with the AI service
  const {
    currentResponse,
    isProcessing: isNarrativeProcessing,
    handleChoiceSelected,
    handleResetStory,
  } = useNarrativeManager({
    characterId,
    playerCharacter,
    currentLocation,
    worldId,
    locationId,
    initialized,
    narrativeHistory,
    setNarrativeHistory,
  });

  // Combine processing states for loading screen
  const isProcessing = isLoading || isInitProcessing || isNarrativeProcessing;

  // Loading screen UI
  if (isProcessing) {
    return <LoadingScreen loadingFromDB={loadingFromDB} />;
  }

  // Error screen UI
  if (error) {
    return <ErrorScreen message={error} />;
  }

  // No game state screen UI
  if (!gameState || !session) {
    return <NoGameStateScreen />;
  }

  // Get time of day from world state
  const timeOfDay = worldState?.timeOfDay || "Day";

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col h-screen">
      {/* Game header */}
      <GameHeader
        playerName={playerCharacter?.name || "Adventurer"}
        locationName={currentLocation?.name || "Unknown Location"}
        timeOfDay={timeOfDay}
      />

      {/* Narrative history */}
      <NarrativeHistory narrativeHistory={narrativeHistory} />

      {/* Choices panel */}
      <ChoicePanel
        currentResponse={currentResponse}
        isProcessing={isProcessing}
        onChoiceSelected={handleChoiceSelected}
      />

      {/* Controls */}
      <GameControls onResetStory={handleResetStory} />
    </div>
  );
}
