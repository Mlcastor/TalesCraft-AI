"use client";

import { useRouter } from "next/navigation";

/**
 * Component that displays a message when game state could not be loaded
 */
export function NoGameStateScreen() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="bg-gray-800/80 border border-gray-700 p-6 rounded-lg mb-6 max-w-xl w-full text-center">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Game Not Found
        </h2>
        <p className="text-gray-300 mb-6">
          We couldn&apos;t find or initialize this game session. It may have
          expired or been removed.
        </p>

        <button
          onClick={() => router.push("/player-hub")}
          className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-lg font-bold"
        >
          Return to Player Hub
        </button>
      </div>
    </div>
  );
}
