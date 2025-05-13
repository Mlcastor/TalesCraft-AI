import Link from "next/link";
import { Character } from "@/types/database";

interface CharacterPanelProps {
  characters: Character[];
  characterWorldStates?: Record<string, any[]>;
  isLoading?: boolean;
}

/**
 * Character Panel Component
 *
 * Displays a list of player characters with their details and links to create new characters.
 */
export function CharacterPanel({
  characters,
  characterWorldStates = {},
  isLoading = false,
}: CharacterPanelProps) {
  if (isLoading) {
    return (
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-5 h-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-amber-400">Your Characters</h2>
        </div>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-700 h-32 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-5 h-full">
      <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center justify-between">
        <span>Your Characters</span>
        <Link
          href="/player-hub/characters/create"
          className="px-2 py-1 bg-amber-500 hover:bg-amber-600 text-gray-900 text-sm rounded-md transition-colors inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          New
        </Link>
      </h2>

      {characters.length > 0 ? (
        <div className="space-y-4 overflow-y-auto max-h-[500px] pr-2">
          {characters.map((character: Character) => (
            <div
              key={character.id}
              className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-amber-400 transition-colors"
            >
              <h3 className="text-lg font-bold text-amber-400 mb-1">
                {character.name}
              </h3>

              {character.appearanceDescription && (
                <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                  {character.appearanceDescription}
                </p>
              )}

              {Array.isArray(character.personalityTraits) &&
                character.personalityTraits.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {(character.personalityTraits as string[]).map(
                      (trait: string) => (
                        <span
                          key={trait}
                          className="px-2 py-0.5 bg-gray-700 text-amber-400 text-xs rounded-full"
                        >
                          {trait}
                        </span>
                      )
                    )}
                  </div>
                )}

              <p className="text-xs text-gray-400 mb-2">
                Last played:{" "}
                {character.lastPlayedAt
                  ? new Date(character.lastPlayedAt).toLocaleDateString()
                  : "Never"}
              </p>

              <div className="text-xs text-gray-400">
                Worlds visited:{" "}
                {characterWorldStates[character.id]?.length || 0}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-400 mb-2">No characters yet</p>
          <Link
            href="/player-hub/characters/create"
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium rounded-md transition-colors inline-block"
          >
            Create Character
          </Link>
        </div>
      )}
    </div>
  );
}
