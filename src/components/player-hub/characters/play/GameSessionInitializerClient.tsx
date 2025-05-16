"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getOrCreateGameSession } from "@/lib/actions/gameSession-actions";
import { LoadingScreen } from "@/components/game/LoadingScreen";
import { ErrorScreen } from "@/components/game/ErrorScreen"; // Assuming you have a generic error screen
import { logger } from "@/lib/utils/logger";

interface GameSessionInitializerClientProps {
  characterId: string;
  worldId: string;
}

export default function GameSessionInitializerClient({
  characterId,
  worldId,
}: GameSessionInitializerClientProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function initializeAndRedirect() {
      try {
        logger.debug(
          `GameSessionInitializerClient: Attempting to get or create session for Character: ${characterId}, World: ${worldId}`,
          { context: "GameSessionInitializerClient" }
        );
        const sessionId = await getOrCreateGameSession(characterId, worldId);
        logger.debug(
          `GameSessionInitializerClient: Session ID ${sessionId} obtained. Redirecting to /game/${sessionId}`,
          { context: "GameSessionInitializerClient" }
        );
        router.push(`/game/${sessionId}`);
        // No need to setIsLoading(false) as we are navigating away
      } catch (err) {
        logger.error(
          `GameSessionInitializerClient: Error creating/retrieving game session for Character: ${characterId}, World: ${worldId}`,
          {
            context: "GameSessionInitializerClient",
            error: err instanceof Error ? err : new Error(String(err)),
          }
        );
        setError(
          err instanceof Error
            ? err.message
            : "Failed to start or load the game session. Please try again."
        );
        setIsLoading(false);
      }
    }

    initializeAndRedirect();
  }, [characterId, worldId, router]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    // Using ErrorScreen, which has a "Return to Hub" button.
    // No retry is offered here as the issue might be persistent with the character/world combo.
    return <ErrorScreen error={error} />;
  }

  // Should not be reached if loading, redirecting, or erroring.
  return null;
}
