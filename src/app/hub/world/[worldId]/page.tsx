import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getWorldWithRelatedData } from "@/lib/db/world";
import { characterRepository } from "@/lib/db/character";
import {
  getCharacterWorldState,
  upsertCharacterWorldState,
} from "@/lib/db/characterWorldState";
import { CharacterWorldStateWithWorld } from "@/types/database";

// Updated interface to match Next.js 15's PageProps constraint
interface WorldSelectionPageProps {
  params: Promise<{ worldId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function WorldSelectionPage({
  params,
}: WorldSelectionPageProps) {
  // Get the params by awaiting the Promise
  const { worldId } = await params;

  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    redirect("/sign-in");
  }

  // Get the world data with related entities
  const world = await getWorldWithRelatedData(worldId);

  if (!world) {
    // World not found or not accessible
    redirect("/hub");
  }

  // Get the user's characters
  const characters = await characterRepository.getCharactersByUserId(userId);

  if (!characters || characters.length === 0) {
    // No characters available, redirect to character creation
    redirect("/characters/create");
  }

  // Get the character-world states for each character
  const characterWorldStates: Record<
    string,
    CharacterWorldStateWithWorld | null
  > = {};

  for (const character of characters) {
    const state = await getCharacterWorldState(character.id, worldId);
    characterWorldStates[character.id] = state;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Link
              href="/hub"
              className="mr-2 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
            <h1 className="text-3xl font-bold text-amber-400">
              Enter {world.name}
            </h1>
          </div>

          {world.description && (
            <p className="text-gray-300">{world.description}</p>
          )}
        </div>

        {/* World Banner/Image */}
        {world.thumbnailUrl && (
          <div className="mb-8 rounded-lg overflow-hidden h-48 md:h-64 bg-gray-700">
            <img
              src={world.thumbnailUrl}
              alt={world.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Character Selection */}
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
                          ? new Date(
                              worldState.lastPlayedAt
                            ).toLocaleDateString()
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
                    href={`/game/select?characterId=${character.id}&worldId=${world.id}`}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium rounded-md transition-colors inline-block w-full text-center"
                  >
                    {hasVisitedBefore
                      ? "Continue Adventure"
                      : "Begin Adventure"}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* World Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Locations Section */}
          {world.locations && world.locations.length > 0 && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-5">
              <h2 className="text-xl font-bold text-amber-400 mb-4">
                Notable Locations
              </h2>

              <div className="space-y-3">
                {world.locations.map((location) => (
                  <div
                    key={location.id}
                    className="p-3 bg-gray-900 rounded-lg border border-gray-700"
                  >
                    <h3 className="font-bold text-amber-400">
                      {location.name}
                      {location.isStartingLocation && (
                        <span className="ml-2 px-2 py-0.5 bg-green-800 text-green-200 text-xs rounded-full">
                          Starting Location
                        </span>
                      )}
                    </h3>

                    {location.description && (
                      <p className="text-sm text-gray-300 mt-1 line-clamp-2">
                        {location.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lore Section */}
          {world.loreFragments && world.loreFragments.length > 0 && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-5">
              <h2 className="text-xl font-bold text-amber-400 mb-4">
                World Lore
              </h2>

              <div className="space-y-3">
                {world.loreFragments.map((lore) => (
                  <div
                    key={lore.id}
                    className="p-3 bg-gray-900 rounded-lg border border-gray-700"
                  >
                    <h3 className="font-bold text-amber-400">{lore.title}</h3>

                    {lore.content && (
                      <p className="text-sm text-gray-300 mt-1 line-clamp-3">
                        {lore.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
