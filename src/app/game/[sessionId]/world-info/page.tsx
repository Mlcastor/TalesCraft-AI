import { WorldDataAccess } from "@/components/ai/WorldDataAccess";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLatestGameStateForSession } from "@/lib/actions/game-state-actions";
import { getWorldById } from "@/lib/actions/world-actions";
import { GameState } from "@/types/game";
import { logger } from "@/lib/utils/logger";
import { notFound } from "next/navigation";

interface WorldInfoPageProps {
  params: {
    sessionId: string;
  };
}

/**
 * Page component for displaying detailed world information
 * Uses the WorldProvider context to access world data
 */
export default async function WorldInfoPage({ params }: WorldInfoPageProps) {
  const { sessionId } = params;

  try {
    // Get the latest game state to extract the world ID
    const latestStateId = await getLatestGameStateForSession(sessionId);

    // If no state exists, return 404
    if (!latestStateId) {
      logger.warn(
        `No game state found for session ${sessionId} in world info page`,
        {
          context: "server-component",
          metadata: {
            component: "WorldInfoPage",
            sessionId,
          },
        }
      );
      return notFound();
    }

    return (
      <main className="flex flex-col p-6 h-full w-full max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">World Information</h1>
          <p className="text-muted-foreground">
            Explore the world details for your current game session.
          </p>
        </div>

        <Tabs defaultValue="overview" className="flex-1">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
            <TabsTrigger value="lore">Lore</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="flex-1 py-4">
            <WorldDataAccess />
          </TabsContent>

          <TabsContent value="locations" className="flex-1 py-4">
            <LocationsPanel />
          </TabsContent>

          <TabsContent value="lore" className="flex-1 py-4">
            <LorePanel />
          </TabsContent>
        </Tabs>
      </main>
    );
  } catch (error) {
    logger.error("Error loading world info page", {
      context: "server-component",
      metadata: {
        component: "WorldInfoPage",
        sessionId,
        error,
      },
    });

    return notFound();
  }
}

/**
 * Component to display world locations
 */
function LocationsPanel() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <p>
        This panel will display a list of locations in the current world. Since
        we&apos;re using the WorldProvider context, the locations will be
        fetched automatically based on the current world ID.
      </p>
      <p className="text-muted-foreground italic">
        Implement this component to show locations from
        worldWithRelatedData.locations
      </p>
    </div>
  );
}

/**
 * Component to display world lore
 */
function LorePanel() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <p>
        This panel will display lore fragments for the current world. Since
        we&apos;re using the WorldProvider context, the lore fragments will be
        fetched automatically based on the current world ID.
      </p>
      <p className="text-muted-foreground italic">
        Implement this component to show lore from
        worldWithRelatedData.loreFragments
      </p>
    </div>
  );
}
