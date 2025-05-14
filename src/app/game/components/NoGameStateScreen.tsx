import Link from "next/link";

/**
 * Component that displays a message when game state could not be loaded
 */
export function NoGameStateScreen() {
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
