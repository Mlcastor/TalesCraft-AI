"use client";

interface GameHeaderProps {
  characterName: string;
  worldName: string;
  onExit: () => void;
}

/**
 * Header component displaying character name and world
 */
export function GameHeader({
  characterName,
  worldName,
  onExit,
}: GameHeaderProps) {
  return (
    <div className="bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-amber-400">
          {characterName}&apos;s Adventure
        </h1>
        <p className="text-gray-300">{worldName}</p>
      </div>
      <button
        onClick={onExit}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
      >
        Exit Game
      </button>
    </div>
  );
}
