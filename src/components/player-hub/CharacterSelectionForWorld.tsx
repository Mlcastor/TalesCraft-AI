"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSafeSession } from "@/contexts/SafeSessionContext";
import { useGameActions } from "@/hooks/game/useGameActions";

interface Character {
  id: string;
  name: string;
  backstory: string | null;
}

interface CharacterSelectionProps {
  characters: Character[];
  worldId: string;
}

export default function CharacterSelectionForWorld({
  characters,
  worldId,
}: CharacterSelectionProps) {
  const router = useRouter();
  const { loadSession } = useSafeSession();
  const gameActions = useGameActions();
  const [uiError, setUiError] = useState<string | null>(null);

  const handleCharacterSelect = async (characterId: string) => {
    setUiError(null);
    gameActions.clearErrors();

    try {
      const sessionId = await gameActions.startGame(characterId, worldId);

      if (!sessionId) {
        setUiError(gameActions.status.error || "Failed to start game session.");
        return;
      }

      await loadSession(sessionId);

      router.push(`/game/${sessionId}`);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setUiError(message);
    }
  };

  if (characters.length === 0) {
    return (
      <div className="p-6 rounded-lg border border-border">
        <h3 className="text-xl font-bold mb-4">No Characters Available</h3>
        <p className="mb-4">
          You don&apos;t have any characters in this world yet.
        </p>
        <Link
          href={`/player-hub/characters/create?worldId=${worldId}`}
          className="w-full"
        >
          <Button variant="default" className="w-full">
            Create New Character
          </Button>
        </Link>
      </div>
    );
  }

  const displayError = uiError || gameActions.status.error;

  return (
    <div className="p-6 rounded-lg border border-border">
      <h3 className="text-xl font-bold mb-4">Select Character</h3>

      {displayError && (
        <div className="p-3 mb-4 bg-destructive/10 text-destructive rounded-md">
          {displayError}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {characters.map((character) => (
          <div
            key={character.id}
            className="p-4 border rounded-lg hover:border-primary transition-colors"
          >
            <h4 className="font-bold text-lg">{character.name}</h4>
            <p className="text-sm text-muted-foreground mb-3">
              {character.backstory
                ? character.backstory.substring(0, 100) + "..."
                : "No backstory"}
            </p>
            <Button
              onClick={() => handleCharacterSelect(character.id)}
              disabled={gameActions.status.isLoading}
              className="w-full"
            >
              {gameActions.status.isLoading &&
              gameActions.status.lastActionType === "startGame"
                ? "Starting Game..."
                : "Select Character"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
