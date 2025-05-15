"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import { World } from "@/types/database";
import {
  getWorldById,
  getWorldWithRelatedData,
} from "@/lib/actions/world-actions";
import { logger } from "@/lib/utils/logger";

/**
 * World context interface
 */
interface WorldContextType {
  currentWorld: World | null;
  worldWithRelatedData: any | null;
  isLoading: boolean;
  error: string | null;
  setCurrentWorldId: (worldId: string | null) => Promise<void>;
  refreshWorldData: () => Promise<void>;
}

/**
 * World provider props
 */
interface WorldProviderProps {
  children: React.ReactNode;
  initialWorldId?: string;
}

// Create the context with default values
const WorldContext = createContext<WorldContextType>({
  currentWorld: null,
  worldWithRelatedData: null,
  isLoading: false,
  error: null,
  setCurrentWorldId: async () => {},
  refreshWorldData: async () => {},
});

/**
 * Hook to use the world context
 *
 * @returns The world context
 * @throws Error if used outside of WorldProvider
 */
export const useWorld = (): WorldContextType => {
  const context = useContext(WorldContext);
  if (!context) {
    throw new Error("useWorld must be used within a WorldProvider");
  }
  return context;
};

/**
 * Provider component for world data
 *
 * Manages access to world data and provides it via context.
 *
 * @param props - The provider props
 * @returns A React component
 */
export const WorldProvider: React.FC<WorldProviderProps> = ({
  children,
  initialWorldId,
}) => {
  // State for current world
  const [currentWorld, setCurrentWorld] = useState<World | null>(null);
  const [worldWithRelatedData, setWorldWithRelatedData] = useState<any | null>(
    null
  );
  const [currentWorldId, setWorldId] = useState<string | null>(
    initialWorldId || null
  );

  // Loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Track loading attempts with timestamp
  const loadingAttemptRef = useRef<{ count: number; lastAttemptTime: number }>({
    count: 0,
    lastAttemptTime: 0,
  });
  const MAX_LOADING_ATTEMPTS = 3; // Maximum number of attempted loads in a short period
  const ATTEMPT_WINDOW_MS = 3000; // Time window to count attempts (3 seconds)

  // Cache to prevent redundant API calls
  const worldDataCacheRef = useRef<
    Map<
      string,
      {
        timestamp: number;
        world: World | null;
        relatedData: any | null;
      }
    >
  >(new Map());
  const CACHE_TTL_MS = 60000; // Cache TTL (1 minute)

  // Function to set current world ID and load world data
  const setCurrentWorldId = async (worldId: string | null) => {
    logger.debug("WorldProvider: setCurrentWorldId called", {
      context: "world-provider",
      metadata: {
        worldId,
        currentId: currentWorldId,
        hasCurrentData: !!currentWorld,
      },
    });

    // If no world ID provided, clear the state
    if (!worldId) {
      setWorldId(null);
      setCurrentWorld(null);
      setWorldWithRelatedData(null);
      return;
    }

    // Prevent redundant loads - check if ID matches and data exists
    if (worldId === currentWorldId) {
      logger.debug("WorldProvider: Same world ID detected", {
        context: "world-provider",
        metadata: { worldId },
      });

      // Only skip loading if we already have data
      if (currentWorld !== null) {
        logger.debug("WorldProvider: World data already loaded, skipping", {
          context: "world-provider",
          metadata: { worldId },
        });
        return;
      }
    }

    // Update the worldId state first, before any asynchronous operations
    setWorldId(worldId);

    // Check if data is in cache and not expired
    const cachedData = worldDataCacheRef.current.get(worldId);
    const now = Date.now();

    if (cachedData && now - cachedData.timestamp < CACHE_TTL_MS) {
      logger.debug("WorldProvider: Using cached world data", {
        context: "world-provider",
        metadata: {
          worldId,
          cacheAge: (now - cachedData.timestamp) / 1000 + "s",
        },
      });

      setCurrentWorld(cachedData.world);
      setWorldWithRelatedData(cachedData.relatedData);
      return;
    }

    // Load data if not in cache or cache expired
    await loadWorldData(worldId);
  };

  // Function to refresh world data
  const refreshWorldData = async () => {
    if (currentWorldId) {
      // Clear from cache to force reload
      worldDataCacheRef.current.delete(currentWorldId);
      await loadWorldData(currentWorldId);
    }
  };

  // Function to load world data
  const loadWorldData = useCallback(
    async (worldId: string) => {
      // Check if we're in a loading operation
      if (isLoading) {
        logger.debug("WorldProvider: Already loading data, skipping request", {
          context: "world-provider",
          metadata: { worldId },
        });
        return;
      }

      // Enhanced circuit breaker with time window
      const now = Date.now();

      // Reset counter if attempt window has passed
      if (now - loadingAttemptRef.current.lastAttemptTime > ATTEMPT_WINDOW_MS) {
        loadingAttemptRef.current.count = 0;
      }

      // Update attempt count and timestamp
      loadingAttemptRef.current.count += 1;
      loadingAttemptRef.current.lastAttemptTime = now;

      // Check if we've exceeded the maximum loading attempts within the window
      if (loadingAttemptRef.current.count > MAX_LOADING_ATTEMPTS) {
        logger.error(
          "Circuit breaker triggered: Too many world data loading attempts in short period",
          {
            context: "world-provider",
            metadata: {
              worldId,
              attempts: loadingAttemptRef.current.count,
              timeWindow: ATTEMPT_WINDOW_MS + "ms",
            },
          }
        );

        setError(
          "Too many loading attempts in a short period. Please refresh the page."
        );
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        logger.debug("WorldProvider: Loading world data", {
          context: "world-provider",
          metadata: { worldId, attemptCount: loadingAttemptRef.current.count },
        });

        // Load basic world data
        const world = await getWorldById(worldId);
        setCurrentWorld(world);

        // Load world with related data
        const worldRelatedData = await getWorldWithRelatedData(worldId);
        setWorldWithRelatedData(worldRelatedData);

        // Update cache
        worldDataCacheRef.current.set(worldId, {
          timestamp: Date.now(),
          world,
          relatedData: worldRelatedData,
        });

        logger.info("Loaded world data successfully", {
          context: "world-provider",
          metadata: {
            worldId,
            worldName: world?.name,
          },
        });
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        setError(`Failed to load world data: ${errorMessage}`);

        logger.error("Error loading world data", {
          context: "world-provider",
          metadata: {
            worldId,
            error: errorMessage,
          },
        });
      } finally {
        setIsLoading(false);
      }
    },
    [
      isLoading,
      setIsLoading,
      setError,
      setCurrentWorld,
      setWorldWithRelatedData,
    ]
  );

  // Clean up cache periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();

      worldDataCacheRef.current.forEach((value, key) => {
        if (now - value.timestamp > CACHE_TTL_MS) {
          worldDataCacheRef.current.delete(key);
        }
      });

      logger.debug("WorldProvider: Cache cleanup performed", {
        context: "world-provider",
        metadata: {
          remainingEntries: worldDataCacheRef.current.size,
        },
      });
    }, CACHE_TTL_MS);

    return () => clearInterval(interval);
  }, []);

  // Initialize with initial world ID if provided
  useEffect(() => {
    if (initialWorldId && !currentWorld) {
      logger.debug("WorldProvider: Initializing with provided worldId", {
        context: "world-provider",
        metadata: { initialWorldId },
      });
      loadWorldData(initialWorldId);
    }
  }, [initialWorldId, currentWorld, loadWorldData]);

  // Provide the context value
  const contextValue: WorldContextType = {
    currentWorld,
    worldWithRelatedData,
    isLoading,
    error,
    setCurrentWorldId,
    refreshWorldData,
  };

  return (
    <WorldContext.Provider value={contextValue}>
      {children}
    </WorldContext.Provider>
  );
};

export default WorldProvider;
