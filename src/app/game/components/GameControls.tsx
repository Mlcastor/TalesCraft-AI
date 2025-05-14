"use client";

import Link from "next/link";

interface GameControlsProps {
  onResetStory: () => void;
}

/**
 * Component that provides controls for the game such as exit and reset
 */
export function GameControls({ onResetStory }: GameControlsProps) {
  return (
    <div className="bg-gray-800 rounded-b-lg p-4 border-t border-gray-700">
      <div className="flex justify-between">
        <Link
          href="/hub"
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
        >
          Exit Adventure
        </Link>

        <div className="flex space-x-2">
          <button
            onClick={onResetStory}
            className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-md"
          >
            Reset Story
          </button>
        </div>
      </div>
    </div>
  );
}
