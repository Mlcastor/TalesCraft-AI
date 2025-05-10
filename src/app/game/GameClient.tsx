"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GameEngineProvider, useGameEngine } from "@/lib/game-engine";
import type { GameSession, GameState } from "@/types/database";

interface GameClientProps {
  characterId: string;
  initialSession: GameSession | null;
  initialGameState: GameState | null;
  initialError: string | null;
}

// Define a type for worldState to make TypeScript happy
interface WorldState {
  timeOfDay: string;
  discoveredLocations: string[];
  completedEvents: string[];
  npcRelationships: Record<string, number>;
}

// Wrapper component that provides the GameEngine context
export default function GameClient({
  characterId,
  initialSession,
  initialGameState,
  initialError,
}: GameClientProps) {
  return (
    <GameEngineProvider
      initialSession={initialSession}
      initialGameState={initialGameState}
      initialError={initialError}
    >
      <GameInterface characterId={characterId} />
    </GameEngineProvider>
  );
}

// Main game interface that uses the game engine
function GameInterface({ characterId }: { characterId: string }) {
  const router = useRouter();
  const {
    gameState,
    session,
    isLoading,
    error,
    startNewGame,
    resumeGame,
    updateGameState,
  } = useGameEngine();
  const [initialized, setInitialized] = useState(false);

  // Initialize the game when the component mounts
  useEffect(() => {
    async function initializeGame() {
      try {
        if (!characterId) {
          router.push("/characters");
          return;
        }

        // Only try to resume the game if we don't already have a session and game state
        if (!session || !gameState) {
          // Attempt to resume an existing game, or start a new one if none exists
          await resumeGame(characterId);
        }
        setInitialized(true);
      } catch (err) {
        console.error("Failed to initialize game:", err);
      }
    }

    // Check if we already have state from server-side initialization
    if (session && gameState) {
      setInitialized(true);
    } else if (!initialized && !isLoading) {
      initializeGame();
    }
  }, [
    characterId,
    initialized,
    isLoading,
    resumeGame,
    router,
    session,
    gameState,
  ]);

  // Handle demo action - this is just for testing
  const handleDemoAction = async () => {
    if (!gameState) return;

    try {
      // Cast worldState to our interface type
      const worldState = gameState.worldState as unknown as WorldState;

      await updateGameState({
        worldState: {
          timeOfDay:
            worldState.timeOfDay === "morning" ? "afternoon" : "morning",
          discoveredLocations: [
            ...worldState.discoveredLocations,
            "forest_edge",
          ],
        },
        narrativeContext: "The player has discovered the edge of the forest.",
      });
    } catch (err) {
      console.error("Failed to update game state:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-xl text-amber-400">Loading your adventure...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center">
        <div className="bg-red-900 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            An Error Occurred
          </h2>
          <p className="text-gray-300">{error}</p>
        </div>
        <Link
          href="/characters"
          className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-lg font-bold"
        >
          Return to Characters
        </Link>
      </div>
    );
  }

  if (!gameState || !session) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center">
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-amber-400 mb-2">
            Game Not Initialized
          </h2>
          <p className="text-gray-300">
            Unable to load game state or session. Please try again.
          </p>
        </div>
        <Link
          href="/characters"
          className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-lg font-bold"
        >
          Return to Characters
        </Link>
      </div>
    );
  }

  // Debug output of current game state
  const currentLocation = gameState.currentLocation;
  const worldState = gameState.worldState as unknown as WorldState;
  const timeOfDay = worldState.timeOfDay || "unknown";
  const discoveredLocations = worldState.discoveredLocations || [];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700">
        <h1 className="text-3xl font-bold text-amber-400 mb-4">
          Game Test Interface
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-2">Session Info</h2>
          <div className="bg-gray-900 p-3 rounded-md">
            <p className="text-gray-300">
              Session ID: <span className="text-amber-400">{session.id}</span>
            </p>
            <p className="text-gray-300">
              Started:{" "}
              <span className="text-amber-400">
                {new Date(session.startedAt).toLocaleString()}
              </span>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-2">Game State</h2>
          <div className="bg-gray-900 p-3 rounded-md">
            <p className="text-gray-300">
              Current Location:{" "}
              <span className="text-amber-400">{currentLocation}</span>
            </p>
            <p className="text-gray-300">
              Time of Day: <span className="text-amber-400">{timeOfDay}</span>
            </p>
            <p className="text-gray-300">Discovered Locations:</p>
            <ul className="list-disc pl-6 text-amber-400">
              {discoveredLocations.map((location: string) => (
                <li key={location}>{location}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-2">
            Narrative Context
          </h2>
          <div className="bg-gray-900 p-3 rounded-md">
            <p className="text-gray-300">
              {gameState.narrativeContext || "No narrative context yet."}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleDemoAction}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-lg font-bold"
          >
            Test State Update
          </button>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/characters"
          className="text-amber-400 hover:text-amber-300 underline"
        >
          Return to Characters
        </Link>
      </div>
    </div>
  );
}
