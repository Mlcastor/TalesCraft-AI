import { MVPWorldWithRelatedData } from "@/types/mvpTypes";
import { SectionTitle, Card } from "@/components/ui/Primitives";

interface LoreFragmentsPanelProps {
  loreFragments: MVPWorldWithRelatedData["loreFragments"];
}

/**
 * Lore Fragments Panel Component
 *
 * Displays a list of lore fragments for the world
 */
export function LoreFragmentsPanel({ loreFragments }: LoreFragmentsPanelProps) {
  if (!loreFragments || loreFragments.length === 0) {
    return (
      <Card className="h-full">
        <SectionTitle as="h2" className="text-left mb-4">
          World Lore
        </SectionTitle>
        <p className="text-gray-400 text-center italic">
          No lore has been discovered yet
        </p>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <SectionTitle as="h2" className="text-left mb-4">
        World Lore
      </SectionTitle>

      <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
        {loreFragments.map((lore) => (
          <div
            key={lore.id}
            className="p-3 bg-gray-900 rounded-lg border border-gray-700"
          >
            <h3 className="font-bold text-amber-400">{lore.title}</h3>

            {lore.content && (
              <p className="text-sm text-gray-300 mt-1">{lore.content}</p>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
