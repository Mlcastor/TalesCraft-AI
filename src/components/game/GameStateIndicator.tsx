"use client";

import { useState, useEffect } from "react";
import { World, WorldWithRelatedData } from "@/types/game";
import { logger } from "@/lib/utils/logger";
import { GameStateBar, GameStateExpanded } from "./state";

interface GameStateIndicatorProps {
  characterState: Record<string, any>;
  worldState: Record<string, any>;
  location: string;
  world?: World | null;
  worldWithRelatedData?: WorldWithRelatedData | null;
}

/**
 * Main component for displaying game state information
 * Manages state switching between collapsed and expanded views
 * Delegates rendering to specialized components
 *
 * @param props Component props
 * @returns GameStateIndicator component
 */
export function GameStateIndicator({
  characterState,
  worldState,
  location,
  world,
  worldWithRelatedData,
}: GameStateIndicatorProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Log the world data for debugging
  useEffect(() => {
    logger.debug("GameStateIndicator: Received props", {
      context: "game-ui-component",
      metadata: {
        hasWorld: !!world,
        hasWorldData: !!worldWithRelatedData,
        worldName: world?.name,
        location,
      },
    });
  }, [world, worldWithRelatedData, location]);

  // Toggle expanded view
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Use our specialized components based on expanded state
  if (isExpanded) {
    return (
      <GameStateExpanded
        characterState={characterState}
        worldState={worldState}
        locationName={location}
        world={world}
        worldWithRelatedData={worldWithRelatedData}
        onCollapse={() => setIsExpanded(false)}
      />
    );
  }

  return (
    <GameStateBar
      characterState={characterState}
      worldState={worldState}
      locationName={location}
      world={world}
      worldWithRelatedData={worldWithRelatedData}
      isLoading={isLoading}
      onExpand={() => setIsExpanded(true)}
    />
  );
}
