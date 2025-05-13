"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Character } from "@/types/database";

interface StartGameButtonProps {
  characters: Character[];
  worldId: string;
  characterWorldStates: Record<string, any>;
}

/**
 * Button component for starting or resuming a game session
 */
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
  const [error, setError] = useState<string | null>(null);

  // Auto-select a character if there's only one
  useEffect(() => {
    if (characters.length === 1) {
      setSelectedCharacterId(characters[0].id);
      // Also store in localStorage for persistence
      localStorage.setItem("selectedCharacterId", characters[0].id);
    }
  }, [characters]);

  // Check URL parameters for selected character
  useEffect(() => {
    // Get URL search params
    const searchParams = new URLSearchParams(window.location.search);
    const errorParam = searchParams.get("error");

    if (errorParam === "failed_to_start_game") {
      setError("Failed to start game. Please try again.");
    }

    // Listen for character selection events
    const handleCharacterClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const characterLink = target.closest('a[id^="character-"]');

      if (characterLink) {
        const characterId = characterLink.id.replace("character-", "");
        setSelectedCharacterId(characterId);
        // Store in localStorage for persistence
        localStorage.setItem("selectedCharacterId", characterId);
      }
    };

    document.addEventListener("click", handleCharacterClick);

    // Check localStorage on mount
    const storedCharId = localStorage.getItem("selectedCharacterId");
    if (storedCharId && characters.some((c) => c.id === storedCharId)) {
      setSelectedCharacterId(storedCharId);
    }

    return () => {
      document.removeEventListener("click", handleCharacterClick);
    };
  }, [characters]);

  async function handleStartGame() {
    if (!selectedCharacterId) {
      setError("Please select a character first");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Navigate to the play route directly, which handles session creation
      router.push(
        `/player-hub/characters/${selectedCharacterId}/play/${worldId}`
      );
    } catch (error) {
      console.error("Error navigating to game:", error);
      setError("Failed to start game. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
      {error && (
        <div className="bg-red-900/50 border border-red-700 p-3 rounded-md mb-4 text-white">
          {error}
        </div>
      )}

      <button
        onClick={handleStartGame}
        disabled={isLoading || !selectedCharacterId}
        className={`w-full py-3 px-6 rounded-md font-bold text-lg flex items-center justify-center ${
          !selectedCharacterId
            ? "bg-gray-700 cursor-not-allowed text-gray-400"
            : "bg-amber-500 hover:bg-amber-600 text-gray-900"
        }`}
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mr-2"></div>
            Starting Game...
          </>
        ) : (
          <>
            {selectedCharacterId
              ? "Start Adventure"
              : "Select a Character to Begin"}
          </>
        )}
      </button>

      <p className="mt-2 text-center text-sm text-gray-400">
        {selectedCharacterId
          ? characterWorldStates[selectedCharacterId]
            ? "Continue your previous adventure"
            : "Begin a new adventure"
          : "Select a character first"}
      </p>
    </div>
  );
}
