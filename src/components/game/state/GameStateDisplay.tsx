"use client";

import React, { memo, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, MapPin, User, Bookmark } from "lucide-react";
import {
  useGameActiveStatus,
  useGameEngineLoading,
  useGameCurrentState,
  useCurrentLocation,
} from "@/hooks/game/useGameEngineSelectors";

/**
 * GameStateDisplay Component
 *
 * Demonstrates efficient rendering of game state with:
 * - Selective state usage from specialized selector hooks
 * - Memoization to prevent re-renders
 * - Pure rendering optimizations
 */
const GameStateDisplay = () => {
  // Use selector hooks for specific state access
  const isGameActive = useGameActiveStatus();
  const isLoading = useGameEngineLoading();
  const { state: currentState, session: currentSession } =
    useGameCurrentState();

  // Bail out early if loading
  if (isLoading) {
    return <GameStateDisplaySkeleton />;
  }

  // Bail out if no game state
  if (!currentState || !currentSession) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Game State</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No active game session</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>Game State</CardTitle>
          <GameStatusBadge
            isActive={isGameActive}
            isCompleted={currentState.isCompleted}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <SessionInfoDisplay session={currentSession} />
          <StateInfoDisplay state={currentState} />
        </div>
      </CardContent>
    </Card>
  );
};

// Memoized components to prevent unnecessary re-renders

const GameStatusBadge = memo(
  ({ isActive, isCompleted }: { isActive: boolean; isCompleted: boolean }) => {
    let variant: "outline" | "secondary" | "destructive" = "outline";
    let label = "Unknown";

    if (isActive) {
      variant = "secondary";
      label = "Active";
    } else if (isCompleted) {
      variant = "destructive";
      label = "Completed";
    } else {
      label = "Inactive";
    }

    return <Badge variant={variant}>{label}</Badge>;
  }
);
GameStatusBadge.displayName = "GameStatusBadge";

const SessionInfoDisplay = memo(({ session }: { session: any }) => {
  // Extract and compute only what's needed for this component
  const sessionStartTime = useMemo(() => {
    return new Date(session.createdAt).toLocaleString();
  }, [session.createdAt]);

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Session Info</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center">
          <User className="h-4 w-4 mr-2 text-muted-foreground" />
          <span>Character:</span>
        </div>
        <span className="font-medium truncate">{session.characterId}</span>

        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
          <span>Started:</span>
        </div>
        <span className="font-medium">{sessionStartTime}</span>
      </div>
    </div>
  );
});
SessionInfoDisplay.displayName = "SessionInfoDisplay";

const StateInfoDisplay = memo(({ state }: { state: any }) => {
  // Use current location selector as fallback
  const currentLocation = useCurrentLocation();

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Current State</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
          <span>Location:</span>
        </div>
        <span className="font-medium truncate">
          {state.currentLocation || currentLocation || "Unknown"}
        </span>

        <div className="flex items-center">
          <Bookmark className="h-4 w-4 mr-2 text-muted-foreground" />
          <span>Save Point:</span>
        </div>
        <span className="font-medium truncate">
          {state.savePointName || "Autosave"}
        </span>
      </div>
    </div>
  );
});
StateInfoDisplay.displayName = "StateInfoDisplay";

const GameStateDisplaySkeleton = () => (
  <Card>
    <CardHeader className="pb-2">
      <div className="flex justify-between items-center">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-16" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <div className="grid grid-cols-2 gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <div className="grid grid-cols-2 gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default memo(GameStateDisplay);
