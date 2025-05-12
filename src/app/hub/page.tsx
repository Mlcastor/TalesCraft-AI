import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getAllActiveWorlds } from "@/lib/db/world";
import { characterRepository } from "@/lib/db/character";
import { getCharacterWorldStates } from "@/lib/db/characterWorldState";
import { Character, World } from "@/types/database";

export default async function HubPage() {
  // Get the current user
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    redirect("/sign-in");
  }

  // Fetch characters and worlds
  const [characters, worlds] = await Promise.all([
    characterRepository.getCharactersByUserId(userId),
    getAllActiveWorlds(),
  ]);

  // Get character-world states for each character
  const characterWorldStatesByCharacter: Record<string, any[]> = {};

  for (const character of characters) {
    const states = await getCharacterWorldStates(character.id);
    characterWorldStatesByCharacter[character.id] = states;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-400 mb-2">Player Hub</h1>
          <p className="text-gray-300">
            Manage your characters and explore different worlds in your
            adventures.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Characters Panel */}
          <div className="col-span-1">
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-5 h-full">
              <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center justify-between">
                <span>Your Characters</span>
                <Link
                  href="/characters/create"
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
                          ? new Date(
                              character.lastPlayedAt
                            ).toLocaleDateString()
                          : "Never"}
                      </p>

                      <div className="text-xs text-gray-400">
                        Worlds visited:{" "}
                        {characterWorldStatesByCharacter[character.id]
                          ?.length || 0}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400 mb-2">No characters yet</p>
                  <Link
                    href="/characters/create"
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium rounded-md transition-colors inline-block"
                  >
                    Create Character
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Worlds Panel */}
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-5 h-full">
              <h2 className="text-xl font-bold text-amber-400 mb-4">
                Available Worlds
              </h2>

              {worlds.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {worlds.map((world: World) => (
                    <div
                      key={world.id}
                      className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-amber-400 transition-colors flex flex-col h-full"
                    >
                      {world.thumbnailUrl && (
                        <div className="mb-3 rounded-md overflow-hidden h-32 bg-gray-700">
                          <img
                            src={world.thumbnailUrl}
                            alt={world.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <h3 className="text-lg font-bold text-amber-400 mb-1">
                        {world.name}
                      </h3>

                      {world.description && (
                        <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
                          {world.description}
                        </p>
                      )}

                      <div className="mt-auto">
                        <div className="text-center">
                          {characters.length > 0 ? (
                            <Link
                              href={`/hub/world/${world.id}`}
                              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium rounded-md transition-colors inline-block w-full"
                            >
                              Enter World
                            </Link>
                          ) : (
                            <span className="px-4 py-2 bg-gray-700 text-gray-400 font-medium rounded-md inline-block w-full cursor-not-allowed">
                              Create a Character First
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400">No worlds available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
