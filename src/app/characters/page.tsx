import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { characterRepository } from "@/lib/db/character";
import { redirect } from "next/navigation";

export default async function CharactersPage() {
  // Get the current user
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    redirect("/sign-in");
  }

  // Fetch characters for the user
  const characters = await characterRepository.getCharactersByUserId(userId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-400 mb-2">
            Your Characters
          </h1>
          <p className="text-gray-300">
            Select an existing character or create a new one to start your
            adventure.
          </p>
        </div>

        {/* Characters List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {characters.length > 0 ? (
            characters.map((character) => (
              <div
                key={character.id}
                className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-amber-400 transition-colors"
              >
                <h2 className="text-xl font-bold text-amber-400 mb-2">
                  {character.name}
                </h2>

                {character.appearanceDescription && (
                  <p className="text-gray-300 mb-3 line-clamp-2">
                    {character.appearanceDescription}
                  </p>
                )}

                {Array.isArray(character.personalityTraits) &&
                  character.personalityTraits.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(character.personalityTraits as string[]).map(
                        (trait: string) => (
                          <span
                            key={trait}
                            className="px-2 py-1 bg-gray-700 text-amber-400 text-xs rounded-full"
                          >
                            {trait}
                          </span>
                        )
                      )}
                    </div>
                  )}

                <div className="mt-4 flex justify-end">
                  <Link
                    href={`/game?characterId=${character.id}`}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium rounded-md transition-colors"
                  >
                    Play
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-gray-800 rounded-lg border border-dashed border-gray-700">
              <p className="text-gray-400 mb-4">
                You don&apos;t have any characters yet.
              </p>
              <p className="text-gray-300">
                Create one to begin your adventure!
              </p>
            </div>
          )}
        </div>

        {/* Create New Character Button */}
        <div className="flex justify-center">
          <Link
            href="/characters/create"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold rounded-lg transition-colors inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Create New Character
          </Link>
        </div>
      </div>
    </div>
  );
}
