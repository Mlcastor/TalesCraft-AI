"use client";

import { GameCharacter, Location } from "@/lib/ai/aiService";

interface GameHeaderProps {
  playerName: string;
  locationName: string;
  timeOfDay: string;
}

/**
 * Header component displaying character name, location, and time of day
 */
export function GameHeader({
  playerName,
  locationName,
  timeOfDay,
}: GameHeaderProps) {
  return (
    <div className="bg-gray-800 rounded-t-lg p-4 border-b border-gray-700">
      <h1 className="text-2xl font-bold text-amber-400">
        {playerName}&apos;s Adventure
      </h1>
      <p className="text-gray-300">
        {locationName} - {timeOfDay}
      </p>
    </div>
  );
}
