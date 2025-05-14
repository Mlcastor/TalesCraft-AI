"use server";

import { prisma } from "@/lib/db/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/utils/authUtils";
import { JwtPayload } from "@/types/authTypes";

/**
 * Gets the current user ID from the session
 */
async function getCurrentUserId(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_session")?.value;

  if (!token) {
    return null;
  }

  try {
    const verified = await verifyToken(token);
    return verified?.userId || null;
  } catch (error) {
    return null;
  }
}

/**
 * Creates or retrieves a game session for a character in a specific world
 * Returns the session ID for redirection by the caller
 *
 * @param characterId - The ID of the character
 * @param worldId - The ID of the world
 * @returns The ID of the created or retrieved game session
 */
export async function getOrCreateGameSession(
  characterId: string,
  worldId: string
): Promise<string> {
  try {
    // Validate input parameters
    if (!characterId || !worldId) {
      throw new Error("Missing required parameters");
    }

    // Check if a character belongs to the current user
    const userId = await getCurrentUserId();
    if (!userId) {
      throw new Error("Authentication required");
    }

    const character = await prisma.character.findUnique({
      where: {
        id: characterId,
        userId,
      },
    });

    if (!character) {
      throw new Error("Character not found or doesn't belong to current user");
    }

    // Try to find an existing session
    let gameSession = await prisma.gameSession.findFirst({
      where: {
        characterId,
        gameStates: {
          some: {
            worldId,
          },
        },
        endedAt: null, // Only active sessions
      },
      orderBy: {
        startedAt: "desc",
      },
      include: {
        gameStates: {
          orderBy: {
            saveTimestamp: "desc",
          },
          take: 1,
        },
      },
    });

    // If no session exists, create a new one
    if (!gameSession) {
      // Create initial game state
      const initialState = await createInitialGameState(characterId, worldId);

      // Create new game session
      gameSession = await prisma.gameSession.create({
        data: {
          characterId,
          startedAt: new Date(),
          sessionData: {},
          gameStates: {
            create: {
              characterId,
              worldId,
              currentLocation: initialState.currentLocation,
              saveTimestamp: new Date(),
              narrativeContext: initialState.narrativeContext,
              aiContext: initialState.aiContext,
              characterState: initialState.characterState,
              worldState: initialState.worldState,
              isAutosave: true,
            },
          },
        },
        include: {
          gameStates: {
            orderBy: {
              saveTimestamp: "desc",
            },
            take: 1,
          },
        },
      });
    }

    // Return the session ID instead of redirecting
    return gameSession.id;
  } catch (error) {
    console.error("Failed to create or retrieve game session:", error);
    throw new Error("Failed to start game session. Please try again.");
  }
}

/**
 * Creates the initial game state for a new session
 */
async function createInitialGameState(characterId: string, worldId: string) {
  // Get character details
  const character = await prisma.character.findUnique({
    where: { id: characterId },
  });

  // Get world details including starting location
  const world = await prisma.world.findUnique({
    where: { id: worldId },
    include: {
      locations: {
        where: { isStartingLocation: true },
        take: 1,
      },
    },
  });

  if (!character || !world || !world.locations[0]) {
    throw new Error("Failed to create initial game state");
  }

  const startingLocation = world.locations[0];

  // Create initial narrative context
  const narrativeContext = `${character.name} begins their adventure in ${world.name}, starting at ${startingLocation.name}. ${startingLocation.description}`;

  return {
    currentLocation: startingLocation.name,
    narrativeContext,
    aiContext: {
      character: character,
      world: {
        id: world.id,
        name: world.name,
        description: world.description,
      },
      location: {
        id: startingLocation.id,
        name: startingLocation.name,
        description: startingLocation.description,
      },
    },
    characterState: {
      name: character.name,
      backstory: character.backstory,
      appearance: character.appearanceDescription,
      traits: character.personalityTraits,
    },
    worldState: {
      currentLocationId: startingLocation.id,
      discoveredLocations: [startingLocation.id],
      knownNpcs: [],
    },
  };
}

/**
 * Gets the full game session data including character, world, and current state
 */
export async function getGameSession(sessionId: string) {
  try {
    const userId = await getCurrentUserId();
    if (!userId) {
      return null;
    }

    const gameSession = await prisma.gameSession.findUnique({
      where: {
        id: sessionId,
        character: {
          userId,
        },
      },
      include: {
        character: true,
        gameStates: {
          orderBy: {
            saveTimestamp: "desc",
          },
          take: 1,
          include: {
            narrativeHistory: {
              orderBy: {
                timestamp: "asc",
              },
            },
            decisions: {
              orderBy: {
                timestamp: "desc",
              },
              take: 1,
            },
          },
        },
      },
    });

    if (!gameSession) {
      return null;
    }

    const currentState = gameSession.gameStates[0];

    // Get the world details
    const world = await prisma.world.findUnique({
      where: { id: currentState.worldId ?? undefined },
    });

    if (!world) {
      throw new Error("World not found");
    }

    // Get typed values from AI context
    const aiContext = currentState.aiContext as Record<string, any>;
    const locationData = aiContext?.location as
      | Record<string, string>
      | undefined;

    // Get typed values from decisions
    const decisions = currentState.decisions[0]?.optionsPresented as
      | string[]
      | undefined;

    // Transform data for the frontend
    return {
      id: gameSession.id,
      character: gameSession.character,
      world: world,
      initialState: {
        narrative: {
          text: currentState.narrativeContext,
          history: currentState.narrativeHistory.map((item: any) => ({
            type: item.type as "narrative" | "playerResponse",
            content: item.content,
          })),
        },
        character: {
          id: gameSession.character.id,
          name: gameSession.character.name,
          backstory: gameSession.character.backstory || undefined,
          appearance: gameSession.character.appearanceDescription || undefined,
          traits: gameSession.character.personalityTraits as string[],
        },
        world: {
          id: world.id,
          name: world.name,
          description: world.description || "",
        },
        location: {
          id: locationData?.id || "",
          name: currentState.currentLocation,
          description: locationData?.description || "",
        },
        decisions:
          decisions?.map((option: string) => ({
            text: option,
          })) || [],
      },
    };
  } catch (error) {
    console.error("Failed to get game session:", error);
    return null;
  }
}
