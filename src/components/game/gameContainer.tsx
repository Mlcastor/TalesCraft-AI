"use client";

import React from "react";
import { useGameContext } from "@/contexts/GameProvider";
import { Button, SectionTitle } from "@/components/ui/Primitives";
import { GameErrorScreen } from "./GameErrorScreen"; // Import GameErrorScreen
import { useRouter } from "next/navigation"; // Import useRouter
import { useParams } from "next/navigation";
import { useEffect } from "react";

/**
 * GameContainer Component
 *
 * This component will house the main game interface, including narrative display,
 * player choices, and interactions.
 * It consumes the GameContext to access and manipulate game state.
 */
export function GameContainer() {
  const {
    state,
    makeDecision,
    loadGame,
    startGame,
    clearGame,
    // TODO: Add other actions like displaying inventory, character sheet, etc.
  } = useGameContext();

  const { currentGameState, currentCharacter, currentWorld, isLoading, error } =
    state;
  const router = useRouter(); // Initialize useRouter
  const { sessionId } = useParams<{ sessionId: string }>();

  // Attempt to load existing game state on mount or when sessionId changes
  useEffect(() => {
    if (sessionId) {
      // Fire and forget; GameProvider handles internal state
      loadGame(sessionId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  // Fallback: if load failed (no game state) but we have character & world in context
  useEffect(() => {
    if (!isLoading && !currentGameState && currentCharacter && currentWorld) {
      startGame(
        currentCharacter.id,
        currentWorld.id,
        currentCharacter,
        currentWorld
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, currentGameState, currentCharacter, currentWorld]);

  const handleGoHome = () => {
    clearGame();
    router.push("/player-hub");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 text-gray-300">
        Loading your adventure... Please wait.
      </div>
    );
  }

  if (error) {
    return <GameErrorScreen error={error} onGoHome={handleGoHome} />;
  }

  if (!currentGameState || !currentCharacter || !currentWorld) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 text-center">
        <SectionTitle as="h2" className="text-amber-400 mb-4">
          No Active Game
        </SectionTitle>
        <p className="text-gray-300 mb-6">
          Your legend awaits! Start a new game or load an existing one to
          continue your journey.
        </p>
        {/* TODO: Add buttons/links to character selection/world selection or load game screen */}
      </div>
    );
  }

  const currentNarrativeEntry =
    currentGameState.narrativeLog.length > 0
      ? currentGameState.narrativeLog[currentGameState.narrativeLog.length - 1]
      : null;

  const handleChoiceClick = async (choiceText: string) => {
    if (currentGameState?.id) {
      await makeDecision(currentGameState.id, choiceText);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-4 md:p-6 lg:p-8 flex flex-col items-center">
      <div className="game-main-panel w-full max-w-4xl bg-gray-800 bg-opacity-70 rounded-lg border border-amber-600 shadow-2xl p-6 md:p-8">
        <header className="mb-6 border-b border-gray-700 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 text-center md:text-left">
            {currentWorld.name}
          </h1>
          <div className="text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
            <span>
              Playing as:{" "}
              <span className="font-semibold text-amber-300">
                {currentCharacter.name}
              </span>
            </span>
            <span>
              Turn:{" "}
              <span className="font-semibold text-amber-300">
                {currentGameState.turnNumber}
              </span>
            </span>
          </div>
          {currentGameState.currentObjective && (
            <p className="mt-3 text-md italic text-amber-200 text-center md:text-left">
              Current Objective: {currentGameState.currentObjective}
            </p>
          )}
        </header>

        <section className="narrative-display mb-8 p-4 bg-gray-900 bg-opacity-50 rounded-md border border-gray-700 min-h-[200px] shadow-inner">
          {/* <h2 className="text-xl font-semibold mb-2 text-amber-300">Story Unfolds...</h2> */}
          {currentNarrativeEntry ? (
            <p className="text-gray-200 whitespace-pre-wrap leading-relaxed text-lg">
              {currentNarrativeEntry.narrative}
            </p>
          ) : (
            <p className="text-gray-400 italic text-lg">
              The story is about to unfold...
            </p>
          )}
        </section>

        {currentGameState.currentChoices &&
          currentGameState.currentChoices.length > 0 && (
            <section className="choices-panel">
              <h2 className="text-2xl font-semibold mb-4 text-amber-300 text-center md:text-left">
                What do you do?
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {currentGameState.currentChoices.map((choice, index) => (
                  <Button
                    key={index}
                    onClick={() => handleChoiceClick(choice)}
                    variant="outline"
                    className="w-full justify-center text-center md:justify-start md:text-left p-4 h-auto text-lg shadow-md"
                  >
                    {choice}
                  </Button>
                ))}
              </div>
            </section>
          )}
        {/* Footer or other game elements can go here */}
      </div>
    </div>
  );
}
