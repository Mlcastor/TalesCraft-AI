import Image from "next/image";

// Extended world type that includes related data
interface WorldWithRelations {
  id: string;
  name: string;
  description: string | null;
  thumbnailUrl: string | null;
  isActive: boolean;
  createdAt: Date;
  locations?: Array<{
    id: string;
    name: string;
    description: string | null;
    isStartingLocation: boolean;
  }>;
  loreFragments?: Array<{
    id: string;
    title: string;
    content: string | null;
  }>;
}

interface WorldDetailsProps {
  world: WorldWithRelations;
  isLoading?: boolean;
}

/**
 * World Details Component
 *
 * Displays detailed information about a world including its image, locations, and lore.
 */
export function WorldDetails({ world, isLoading = false }: WorldDetailsProps) {
  if (isLoading) {
    return (
      <div>
        <div className="mb-8 rounded-lg overflow-hidden h-48 md:h-64 bg-gray-700 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 h-64 rounded-lg animate-pulse"></div>
          <div className="bg-gray-700 h-64 rounded-lg animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* World Banner/Image */}
      {world.thumbnailUrl && (
        <div className="mb-8 rounded-lg overflow-hidden h-48 md:h-64 bg-gray-700 relative">
          <Image
            src={world.thumbnailUrl}
            alt={world.name}
            fill
            className="object-cover"
          />
        </div>
      )}

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
  );
}
