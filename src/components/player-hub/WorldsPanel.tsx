import Link from "next/link";
import Image from "next/image";
import { World } from "@/types/database";

interface WorldsPanelProps {
  worlds: World[];
  hasCharacters: boolean;
  isLoading?: boolean;
}

/**
 * Worlds Panel Component
 *
 * Displays a grid of available game worlds with thumbnails and descriptions.
 */
export function WorldsPanel({
  worlds,
  hasCharacters,
  isLoading = false,
}: WorldsPanelProps) {
  if (isLoading) {
    return (
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-5 h-full">
        <h2 className="text-xl font-bold text-amber-400 mb-4">
          Available Worlds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-gray-700 h-64 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
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
                <div className="mb-3 rounded-md overflow-hidden h-32 bg-gray-700 relative">
                  <Image
                    src={world.thumbnailUrl}
                    alt={world.name}
                    fill
                    className="object-cover"
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
                  {hasCharacters ? (
                    <Link
                      href={`/player-hub/world/${world.id}`}
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
  );
}
