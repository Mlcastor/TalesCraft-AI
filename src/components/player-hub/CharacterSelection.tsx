import Link from "next/link";
import { Character, CharacterWorldStateWithWorld } from "@/types/database";

interface CharacterSelectionProps {
  characters: Character[];
  worldId: string;
  characterWorldStates: Record<string, CharacterWorldStateWithWorld | null>;
  isLoading?: boolean;
}

/**
 * Character Selection Component
 *
 * Displays a grid of characters for selection when entering a world.
 */
export function CharacterSelection({
  characters,
  worldId,
  characterWorldStates,
  isLoading = false,
}: CharacterSelectionProps) {
  if (isLoading) {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold text-amber-400 mb-4">
          Choose Your Character
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gray-700 h-48 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-amber-400 mb-4">
        Choose Your Character
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => {
          const worldState = characterWorldStates[character.id];
          const hasVisitedBefore = !!worldState;

          return (
            <div
              key={character.id}
              className={`bg-gray-800 p-4 rounded-lg border hover:border-amber-400 transition-colors ${
                hasVisitedBefore ? "border-green-600" : "border-gray-700"
              }`}
            >
              <h3 className="text-lg font-bold text-amber-400 mb-1">
                {character.name}
              </h3>

              {character.appearanceDescription && (
                <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                  {character.appearanceDescription}
                </p>
              )}

              {hasVisitedBefore ? (
                <div className="mb-3">
                  <div className="text-green-500 text-sm flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Visited before
                  </div>

                  <p className="text-xs text-gray-400">
                    Last played:{" "}
                    {worldState?.lastPlayedAt
                      ? new Date(worldState.lastPlayedAt).toLocaleDateString()
                      : "Never"}
                  </p>

                  {worldState?.currentLocation && (
                    <p className="text-xs text-gray-400">
                      Current location: {worldState.currentLocation}
                    </p>
                  )}
                </div>
              ) : (
                <div className="mb-3">
                  <p className="text-amber-500 text-sm flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    First visit
                  </p>
                </div>
              )}

              <Link
                href={`/player-hub/characters/${character.id}/play/${worldId}`}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium rounded-md transition-colors inline-block w-full text-center"
                id={`character-${character.id}`}
              >
                {hasVisitedBefore ? "Continue Adventure" : "Begin Adventure"}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
