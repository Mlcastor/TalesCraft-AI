import Image from "next/image";
import { MVPWorld } from "@/types/database";
import { SectionTitle, Card, Button } from "@/components/ui/Primitives";

interface WorldsPanelProps {
  worlds: MVPWorld[];
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
      <Card className="h-full">
        <SectionTitle as="h2" className="text-left mb-4">
          Available Worlds
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-gray-700 h-64 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <SectionTitle as="h2" className="text-left mb-4">
        Available Worlds
      </SectionTitle>

      {worlds.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {worlds.map((world: MVPWorld) => (
            <Card
              key={world.id}
              className="bg-gray-900 p-4 flex flex-col h-full border-gray-700 hover:border-amber-400"
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

              <div className="text-center">
                {hasCharacters ? (
                  <Button
                    href={`/player-hub/world/${world.id}`}
                    variant="primary"
                    className="w-full"
                  >
                    Enter World
                  </Button>
                ) : (
                  <Button disabled variant="secondary" className="w-full">
                    Create a Character First
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400">No worlds available</p>
        </div>
      )}
    </Card>
  );
}
