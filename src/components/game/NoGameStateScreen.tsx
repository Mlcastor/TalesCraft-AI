"use client";

import { useRouter } from "next/navigation";

interface NoGameStateScreenProps {
  error?: string;
  sessionId?: string;
  resetGameState?: () => Promise<void>;
}

/**
 * Component that displays when a game state is not available,
 * with options to return to hub or reset the game state
 */
export function NoGameStateScreen({
  error,
  sessionId,
  resetGameState,
}: NoGameStateScreenProps) {
  const router = useRouter();

  const handleReset = async () => {
    if (resetGameState) {
      try {
        await resetGameState();
        // After reset, refresh the page
        window.location.reload();
      } catch (err) {
        console.error("Failed to reset game state:", err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="bg-amber-900/50 border border-amber-700 p-6 rounded-lg mb-6 max-w-xl w-full text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          {error ? "Game Error" : "Game Not Available"}
        </h2>

        <p className="text-gray-300 mb-6">
          {error
            ? error
            : "We couldn't load your game session. The narrative history might be missing or corrupted."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {resetGameState && (
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-lg font-bold"
            >
              Reset Game State
            </button>
          )}

          <button
            onClick={() => router.push("/player-hub")}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-bold"
          >
            Return to Hub
          </button>
        </div>
      </div>
    </div>
  );
}
