import { MVPWorldWithRelatedData } from "@/types/mvpTypes";
import { SectionTitle, Card } from "@/components/ui/Primitives";

interface TitlePanelProps {
  world: Pick<MVPWorldWithRelatedData, "name" | "description">;
}

/**
 * Title Panel Component
 *
 * Displays the world title and description in a centered panel
 */
export function TitlePanel({ world }: TitlePanelProps) {
  return (
    <div className="text-center mb-6">
      <SectionTitle as="h1">{world.name}</SectionTitle>
      {world.description && (
        <p className="text-gray-300 max-w-3xl mx-auto">{world.description}</p>
      )}
    </div>
  );
}
