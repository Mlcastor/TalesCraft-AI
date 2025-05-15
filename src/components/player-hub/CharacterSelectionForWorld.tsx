"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getOrCreateGameSession } from "@/lib/actions/game-session-actions";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCharacterSelect = async (characterId: string) => {
    try {
      setIsLoading(true);
      setError(null);

      // Get the game session ID
      const sessionId = await getOrCreateGameSession(characterId, worldId);

      // Handle the redirect in the client component
      router.push(`/game/${sessionId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to start game");
      setIsLoading(false);
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

  return (
    <div className="p-6 rounded-lg border border-border">
      <h3 className="text-xl font-bold mb-4">Select Character</h3>

      {error && (
        <div className="p-3 mb-4 bg-destructive/10 text-destructive rounded-md">
          {error}
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
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Loading..." : "Select Character"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
