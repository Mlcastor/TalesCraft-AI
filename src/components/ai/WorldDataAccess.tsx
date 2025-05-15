"use client";

import { useWorld } from "@/contexts/WorldProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, AlertCircle } from "lucide-react";

interface WorldDataAccessProps {
  worldId?: string;
}

/**
 * Component to demonstrate accessing world data from the context
 */
export function WorldDataAccess({ worldId }: WorldDataAccessProps) {
  const {
    currentWorld,
    worldWithRelatedData,
    isLoading,
    error,
    setCurrentWorldId,
    refreshWorldData,
  } = useWorld();

  const [expanded, setExpanded] = useState(false);

  // Set the world ID if provided as a prop
  useEffect(() => {
    if (worldId && !currentWorld) {
      setCurrentWorldId(worldId);
    }
  }, [worldId, currentWorld, setCurrentWorldId]);

  // If still loading, show a skeleton loader
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-40" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </CardContent>
      </Card>
    );
  }

  // If there's an error, display it
  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error loading world data</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  // If no world data, show a message
  if (!currentWorld) {
    return (
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>No world data available</AlertTitle>
        <AlertDescription>
          {worldId
            ? "Could not load world data for the specified world ID."
            : "No world selected. Please select a world to view its data."}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{currentWorld.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium">Description</h3>
            <p className="text-sm text-muted-foreground">
              {currentWorld.description}
            </p>
          </div>

          {expanded && worldWithRelatedData && (
            <>
              {/* Locations */}
              {worldWithRelatedData.locations?.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium">Locations</h3>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    {worldWithRelatedData.locations.map((location: any) => (
                      <li key={location.id}>• {location.name}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Lore Fragments */}
              {worldWithRelatedData.loreFragments?.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium">Lore</h3>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    {worldWithRelatedData.loreFragments.map((lore: any) => (
                      <li key={lore.id}>• {lore.title}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Events */}
              {worldWithRelatedData.events?.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium">Events</h3>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    {worldWithRelatedData.events.map((event: any) => (
                      <li key={event.id}>
                        •{" "}
                        {event.title ||
                          event.description?.substring(0, 30) + "..."}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show Less" : "Show More"}
            </Button>{" "}
            <Button variant="outline" size="sm" onClick={refreshWorldData}>
              Refresh Data
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
