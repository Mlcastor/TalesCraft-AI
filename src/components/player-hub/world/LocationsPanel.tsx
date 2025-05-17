import { MVPWorldWithRelatedData } from "@/types/mvpTypes";
import { SectionTitle, Card } from "@/components/ui/Primitives";

interface LocationsPanelProps {
  locations: MVPWorldWithRelatedData["locations"];
}

/**
 * Locations Panel Component
 *
 * Displays a list of notable locations in the world
 */
export function LocationsPanel({ locations }: LocationsPanelProps) {
  if (!locations || locations.length === 0) {
    return (
      <Card className="h-full">
        <SectionTitle as="h2" className="text-left mb-4">
          Notable Locations
        </SectionTitle>
        <p className="text-gray-400 text-center italic">
          No locations have been discovered yet
        </p>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <SectionTitle as="h2" className="text-left mb-4">
        Notable Locations
      </SectionTitle>

      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
        {locations.map((location) => (
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
              <p className="text-sm text-gray-300 mt-1">
                {location.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
