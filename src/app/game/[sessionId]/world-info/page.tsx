import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getLatestGameStateForSession,
  getGameState,
} from "@/lib/actions/game-state-actions";
import {
  getWorldById,
  getWorldWithRelatedData,
} from "@/lib/actions/world-actions";
import { logger } from "@/lib/utils/logger";
import { notFound } from "next/navigation";
import { World, WorldWithRelatedData } from "@/types/game";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

// Create a direct version of WorldDataAccess that doesn't rely on context
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WorldDataDisplayProps {
  world: World | null;
  worldWithRelatedData: WorldWithRelatedData | null;
  onRefresh?: () => void;
}

// Server-side only component to show world data
function WorldDataDisplay({
  world,
  worldWithRelatedData,
}: WorldDataDisplayProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{world?.name || "Unknown World"}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium">Description</h3>
            <p className="text-sm text-muted-foreground">
              {world?.description || "No description available"}
            </p>
          </div>

          {/* Locations */}
          {worldWithRelatedData?.locations &&
            worldWithRelatedData.locations.length > 0 && (
              <div>
                <h3 className="text-sm font-medium">Locations</h3>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  {worldWithRelatedData.locations.map((location) => (
                    <li key={location.id}>• {location.name}</li>
                  ))}
                </ul>
              </div>
            )}

          {/* Lore Fragments */}
          {worldWithRelatedData?.loreFragments &&
            worldWithRelatedData.loreFragments.length > 0 && (
              <div>
                <h3 className="text-sm font-medium">Lore</h3>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  {worldWithRelatedData.loreFragments.map((lore) => (
                    <li key={lore.id}>• {lore.title}</li>
                  ))}
                </ul>
              </div>
            )}

          {/* Events */}
          {worldWithRelatedData?.events &&
            worldWithRelatedData.events.length > 0 && (
              <div>
                <h3 className="text-sm font-medium">Events</h3>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  {worldWithRelatedData.events.map((event) => (
                    <li key={event.id}>
                      •{" "}
                      {event.title ||
                        event.description?.substring(0, 30) + "..."}
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </CardContent>
    </Card>
  );
}

// Create direct versions of Locations and Lore panels
function LocationsPanel({
  worldWithRelatedData,
}: {
  worldWithRelatedData: WorldWithRelatedData | null;
}) {
  if (!worldWithRelatedData?.locations?.length) {
    return (
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>No locations available</AlertTitle>
        <AlertDescription>
          This world does not have any defined locations yet.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {worldWithRelatedData.locations.map((location) => (
        <Card key={location.id}>
          <CardHeader>
            <CardTitle className="text-lg">{location.name}</CardTitle>
            {location.isStartingLocation && (
              <div className="text-xs bg-primary/20 text-primary rounded-full px-2 py-0.5 inline-block">
                Starting Location
              </div>
            )}
          </CardHeader>
          <CardContent>
            <p className="text-sm">{location.description}</p>

            {location.connectedLocationIds &&
              location.connectedLocationIds.length > 0 && (
                <div className="mt-2">
                  <h4 className="text-xs font-medium">Connected to:</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {location.connectedLocationIds.map((locId) => {
                      const connectedLoc = worldWithRelatedData.locations.find(
                        (l) => l.id === locId
                      );
                      return connectedLoc ? (
                        <span
                          key={locId}
                          className="text-xs bg-muted rounded-full px-2 py-0.5"
                        >
                          {connectedLoc.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function LorePanel({
  worldWithRelatedData,
}: {
  worldWithRelatedData: WorldWithRelatedData | null;
}) {
  if (!worldWithRelatedData?.loreFragments?.length) {
    return (
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>No lore available</AlertTitle>
        <AlertDescription>
          This world does not have any lore fragments yet.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {worldWithRelatedData.loreFragments.map((lore) => (
        <Card key={lore.id}>
          <CardHeader>
            <CardTitle className="text-lg">{lore.title}</CardTitle>
            <div className="text-xs bg-muted rounded-full px-2 py-0.5 inline-block">
              {lore.type}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm whitespace-pre-line">{lore.content}</p>

            {lore.keywords && lore.keywords.length > 0 && (
              <div className="mt-2">
                <h4 className="text-xs font-medium">Keywords:</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {lore.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

interface WorldInfoPageProps {
  params: {
    sessionId: string;
  };
}

/**
 * Page component for displaying detailed world information
 * Now fetches world data directly instead of relying on WorldProvider
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

    // Get the game state to extract the world ID
    const gameState = await getGameState(latestStateId);

    if (!gameState || !gameState.worldId) {
      logger.warn(`No world ID found in game state for session ${sessionId}`, {
        context: "server-component",
        metadata: {
          component: "WorldInfoPage",
          sessionId,
          stateId: latestStateId,
        },
      });
      return (
        <main className="flex flex-col p-6 h-full w-full max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">World Information</h1>
            <p className="text-muted-foreground">
              No world data available for this game session.
            </p>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Missing World Data</AlertTitle>
            <AlertDescription>
              This game session is not currently associated with a world.
            </AlertDescription>
          </Alert>
        </main>
      );
    }

    // Fetch world data directly
    const [world, worldWithRelatedData] = await Promise.all([
      getWorldById(gameState.worldId),
      getWorldWithRelatedData(gameState.worldId),
    ]);

    logger.debug("World info page loaded successfully", {
      context: "server-component",
      metadata: {
        component: "WorldInfoPage",
        sessionId,
        worldId: gameState.worldId,
        hasWorldData: !!world,
        hasRelatedData: !!worldWithRelatedData,
      },
    });

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
            <WorldDataDisplay
              world={world}
              worldWithRelatedData={worldWithRelatedData}
            />
          </TabsContent>

          <TabsContent value="locations" className="flex-1 py-4">
            <LocationsPanel worldWithRelatedData={worldWithRelatedData} />
          </TabsContent>

          <TabsContent value="lore" className="flex-1 py-4">
            <LorePanel worldWithRelatedData={worldWithRelatedData} />
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
