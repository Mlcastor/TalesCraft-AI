"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CharacterWorldStateWithWorld } from "@/types/database";

interface Character {
  id: string;
  name: string;
  backstory?: string | null;
}

interface StartGameButtonProps {
  characters: Character[];
  worldId: string;
  characterWorldStates: Record<string, CharacterWorldStateWithWorld | null>;
}

export function StartGameButton({
  characters,
  worldId,
  characterWorldStates,
}: StartGameButtonProps) {
  const router = useRouter();
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  // Find a character with an existing game state in this world
  // Check if the character has an active session in this world
  const characterWithExistingState = characters.find((char) => {
    const state = characterWorldStates[char.id];
    return state && state.lastPlayedAt !== null;
  });

  // Auto-select the first character with an existing game state, or the first character if none have state
  React.useEffect(() => {
    if (!selectedCharacterId) {
      if (characterWithExistingState) {
        setSelectedCharacterId(characterWithExistingState.id);
      } else if (characters.length > 0) {
        setSelectedCharacterId(characters[0].id);
      }
    }
  }, [characters, characterWithExistingState, selectedCharacterId]);

  // Start the game with the selected character
  const handleStartGame = () => {
    if (!selectedCharacterId) return;

    setIsLoading(true);
    // Navigate to the play page for the selected character and world
    router.push(
      `/player-hub/characters/${selectedCharacterId}/play/${worldId}`
    );
  };

  // If no characters are available, don't render anything
  if (characters.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Character
          </label>
          <select
            value={selectedCharacterId || ""}
            onChange={(e) => setSelectedCharacterId(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
          >
            {characters.map((character) => {
              const hasProgress =
                characterWorldStates[character.id]?.lastPlayedAt !== null;
              return (
                <option key={character.id} value={character.id}>
                  {character.name}
                  {hasProgress ? " (Has progress)" : ""}
                </option>
              );
            })}
          </select>
        </div>

        <Button
          onClick={handleStartGame}
          disabled={!selectedCharacterId || isLoading}
          className="w-full"
          size="lg"
        >
          {isLoading
            ? "Starting Game..."
            : characterWithExistingState
            ? "Continue Adventure"
            : "Start New Adventure"}
        </Button>
      </div>
    </div>
  );
}
