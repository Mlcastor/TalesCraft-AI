"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GameHeader } from "./GameHeader";
import { GameContainer } from "./GameContainer";
import { ChoicePanel } from "./ChoicePanel";
import { LoadingScreen } from "./LoadingScreen";
import { ErrorScreen } from "./ErrorScreen";
import { NoGameStateScreen } from "./NoGameStateScreen";
import { saveGameState, endGameSession } from "@/lib/actions/game-actions";
import { GameSessionUI } from "@/types/database";

interface GameSessionProps {
  gameSessionId: string;
  initialGameSession?: GameSessionUI | null;
}

export function GameSession({
  gameSessionId,
  initialGameSession,
}: GameSessionProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(!initialGameSession);
  const [error, setError] = useState<string | null>(null);
  const [gameSession, setGameSession] = useState<GameSessionUI | null>(
    initialGameSession || null
  );
  const [gameState, setGameState] = useState<any>(
    initialGameSession?.gameState?.stateData || null
  );
  const [narrativeHistory, setNarrativeHistory] = useState<any[]>([]);
  const [currentChoice, setCurrentChoice] = useState<any | null>(null);
  const [isProcessingChoice, setIsProcessingChoice] = useState(false);

  // Initialize game state if needed
  useEffect(() => {
    if (!gameSession) return;

    async function initializeGameState() {
      try {
        setIsLoading(true);

        // Initialize a basic game state
        const initialState = {
          characterId: gameSession?.character.id,
          worldId: gameSession?.world.id,
          currentLocation: null, // To be determined based on character world state
          narrativeHistory: [],
          inventory: [],
          stats: {
            health: 100,
            energy: 100,
          },
          progressFlags: {},
          lastUpdated: new Date().toISOString(),
        };

        // Set the state locally
        setGameState(initialState);
        setNarrativeHistory([]);

        // Fetch the starting narrative (would be implemented in a real system)
        await startNewNarrative();

        // Save the initialized state
        await saveGameState(gameSessionId, initialState);
      } catch (error) {
        console.error("Error initializing game state:", error);
        setError("Failed to initialize game. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    async function startNewNarrative() {
      // This would fetch the first narrative from the AI or from predefined content
      // For now, we'll use a placeholder
      const startingNarrative = {
        text: "Welcome to your adventure! You find yourself at the entrance of a mysterious world...",
        choices: [
          { id: "1", text: "Explore the path ahead" },
          { id: "2", text: "Check your surroundings" },
          { id: "3", text: "Review your equipment" },
        ],
        type: "narrative",
      };

      // Add to narrative history
      const updatedHistory = [...narrativeHistory, startingNarrative];
      setNarrativeHistory(updatedHistory);
      setCurrentChoice(startingNarrative);

      // Update game state
      const updatedState = {
        ...gameState,
        narrativeHistory: updatedHistory,
        currentChoice: startingNarrative,
        lastUpdated: new Date().toISOString(),
      };
      setGameState(updatedState);

      // Save to server
      await saveGameState(gameSessionId, updatedState);
    }

    // If no game state exists, initialize one
    if (!gameState) {
      initializeGameState();
    } else {
      // If game state exists, set up narrative history from it
      if (gameState.narrativeHistory) {
        setNarrativeHistory(gameState.narrativeHistory);
      }
      if (gameState.currentChoice) {
        setCurrentChoice(gameState.currentChoice);
      }
    }
  }, [gameSession, gameState, gameSessionId, narrativeHistory]);

  async function handleChoiceSelection(choiceId: string) {
    if (!currentChoice || isProcessingChoice) return;

    setIsProcessingChoice(true);

    try {
      // Find the selected choice
      const selectedChoice = currentChoice.choices.find(
        (c: any) => c.id === choiceId
      );

      if (!selectedChoice) {
        throw new Error("Invalid choice selected");
      }

      // In a real implementation, this would call the AI service to generate the next narrative
      // For this example, we'll use a placeholder
      const nextNarrative = {
        text: `You chose to ${selectedChoice.text.toLowerCase()}. As you do so, you discover new possibilities...`,
        choices: [
          { id: "4", text: "Continue forward" },
          { id: "5", text: "Take a different path" },
          { id: "6", text: "Rest for a moment" },
        ],
        type: "narrative",
      };

      // Record the user's choice in the history
      const choiceRecord = {
        ...currentChoice,
        selectedChoice: selectedChoice,
        type: "choice",
      };

      // Update narrative history
      const updatedHistory = [...narrativeHistory, choiceRecord, nextNarrative];
      setNarrativeHistory(updatedHistory);
      setCurrentChoice(nextNarrative);

      // Update game state
      const updatedState = {
        ...gameState,
        narrativeHistory: updatedHistory,
        currentChoice: nextNarrative,
        lastUpdated: new Date().toISOString(),
      };
      setGameState(updatedState);

      // Save to server
      await saveGameState(gameSessionId, updatedState);
    } catch (error) {
      console.error("Error processing choice:", error);
      setError("Failed to process your choice. Please try again.");
    } finally {
      setIsProcessingChoice(false);
    }
  }

  async function handleExitGame() {
    try {
      await endGameSession(gameSessionId);
      router.push("/player-hub");
    } catch (error) {
      console.error("Error ending game session:", error);
      setError("Failed to end game session. Please try again.");
    }
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} retry={() => window.location.reload()} />;
  }

  if (!gameSession) {
    return <NoGameStateScreen />;
  }

  return (
    <div className="flex flex-col h-screen">
      <GameHeader
        characterName={gameSession.character.name}
        worldName={gameSession.world.name}
        onExit={handleExitGame}
      />

      <div className="flex-1 overflow-hidden">
        <GameContainer
          narrativeHistory={narrativeHistory}
          isLoading={isProcessingChoice}
        />
      </div>

      <div className="bg-gray-800 border-t border-gray-700">
        <ChoicePanel
          currentChoice={currentChoice}
          isLoading={isProcessingChoice}
          onChoiceSelected={handleChoiceSelection}
        />
      </div>
    </div>
  );
}
