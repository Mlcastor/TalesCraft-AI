"use server";

/**
 * Game-related server actions
 *
 * These functions handle game session creation, state management, and related operations.
 */

import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { characterWorldStateRepository } from "@/lib/db/characterWorldState";
import { getServerSession } from "@/lib/auth/session";
import { Prisma } from "@/generated/prisma";

/**
 * Retrieve a game session by ID with all related data needed for GameSessionUI
 *
 * This function fetches the game session along with its related character and world data,
 * and formats it as a GameSessionUI object ready for the component.
 *
 * @param sessionId - The ID of the game session to retrieve
 * @returns The game session data with the original record and UI-formatted version, or null if not found
 */
export async function getGameSessionById(sessionId: string) {
  if (!sessionId) {
    console.error("getGameSessionById called with invalid sessionId");
    return null;
  }

  try {
    // Use transactions for data consistency when fetching related records
    return await prisma.$transaction(async (tx) => {
      // Get the game session with character relation
      const gameSession = await tx.gameSession.findUnique({
        where: { id: sessionId },
        include: {
          character: true,
        },
      });

      if (!gameSession) {
        console.warn(`Game session not found: ${sessionId}`);
        return null;
      }

      // Get world data from session data
      const sessionData = gameSession.sessionData as any;
      const worldId = sessionData?.worldId;

      if (!worldId) {
        console.warn(`Game session ${sessionId} has no worldId in sessionData`);
        return null;
      }

      // Get world details
      const world = await tx.world.findUnique({
        where: { id: worldId },
      });

      if (!world) {
        console.warn(
          `World not found for game session ${sessionId}: ${worldId}`
        );
        return null;
      }

      // Format as GameSessionUI object
      return {
        original: gameSession,
        ui: {
          id: gameSession.id,
          character: {
            id: gameSession.character.id,
            name: gameSession.character.name,
            userId: gameSession.character.userId,
          },
          world: {
            id: world.id,
            name: world.name,
          },
          gameState: sessionData?.gameState
            ? {
                id: "state-" + gameSession.id,
                stateData: sessionData.gameState,
              }
            : null,
          isActive: gameSession.isActive || false,
          startedAt: gameSession.startedAt,
          lastActivityAt: gameSession.lastActivityAt || new Date(),
        },
      };
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2023") {
        console.error(`Invalid UUID for game session ID: ${sessionId}`);
      } else {
        console.error(
          `Database error in getGameSessionById: ${error.code}`,
          error
        );
      }
    } else if (error instanceof Prisma.PrismaClientValidationError) {
      console.error(`Validation error in getGameSessionById:`, error);
    } else {
      console.error(`Unexpected error fetching game session:`, error);
    }

    // Return null for all error cases, letting the caller handle the null result
    return null;
  }
}

/**
 * Get or create a game session for a character and world
 *
 * This function checks if there's an active session for the character and world.
 * If found, it returns the existing session; otherwise, it creates a new one.
 *
 * @param characterId - The ID of the character to create a session for
 * @param worldId - The ID of the world to create a session in
 * @returns The game session or null if creation failed
 */
export async function getOrCreateGameSession(
  characterId: string,
  worldId: string
) {
  // Validate input parameters
  if (!characterId || !worldId) {
    console.error("Invalid input: characterId and worldId are required");
    return null;
  }

  try {
    // Validate the user session
    const session = await getServerSession();
    if (!session?.user) {
      console.warn("Cannot create game session: User not authenticated");
      return null;
    }

    // Use a transaction to ensure data consistency
    return await prisma.$transaction(
      async (tx) => {
        console.log(
          `Starting transaction for game session: ${characterId} in world ${worldId}`
        );

        // Check if the character belongs to the current user
        const character = await tx.character.findUnique({
          where: { id: characterId },
        });

        if (!character) {
          console.error(`Character not found: ${characterId}`);
          return null;
        }

        if (character.userId !== session.user.id) {
          console.error(
            `Character ${characterId} doesn't belong to user ${session.user.id}`
          );
          return null;
        }

        // Verify the world exists
        const world = await tx.world.findUnique({
          where: { id: worldId },
        });

        if (!world) {
          console.error(`World not found: ${worldId}`);
          return null;
        }

        // Check for an existing active game session
        const existingSession = await tx.gameSession.findFirst({
          where: {
            characterId,
            endedAt: null,
            isActive: true,
          },
        });

        if (existingSession) {
          console.log(`Found existing game session: ${existingSession.id}`);
          return existingSession;
        }

        // Check if there's a character-world state record
        const characterWorldState = await tx.characterWorldState.findUnique({
          where: {
            characterId_worldId: {
              characterId,
              worldId,
            },
          },
        });

        // If no record exists, create one
        let worldStateData = characterWorldState;
        if (!worldStateData) {
          console.log(
            `Creating new character-world state for ${characterId} in ${worldId}`
          );
          worldStateData = await tx.characterWorldState.create({
            data: {
              character: { connect: { id: characterId } },
              world: { connect: { id: worldId } },
              currentLocation: null, // Will be set by the game startup process
              lastPlayedAt: new Date(),
            },
          });
        } else {
          // Update the last played date
          await tx.characterWorldState.update({
            where: {
              characterId_worldId: {
                characterId,
                worldId,
              },
            },
            data: {
              lastPlayedAt: new Date(),
            },
          });
        }

        // Create a new game session
        console.log(
          `Creating new game session for ${characterId} in ${worldId}`
        );
        const newSession = await tx.gameSession.create({
          data: {
            character: { connect: { id: characterId } },
            startedAt: new Date(),
            isActive: true,
            lastActivityAt: new Date(),
            sessionData: {
              worldId: worldId,
              startLocation: worldStateData?.currentLocation || null,
            },
          },
        });

        console.log(`Created new game session: ${newSession.id}`);
        return newSession;
      },
      {
        maxWait: 5000, // 5 seconds max wait time
        timeout: 10000, // 10 seconds timeout
      }
    );
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(
        `Database error in getOrCreateGameSession: ${error.code}`,
        error
      );
    } else {
      console.error("Error creating or retrieving game session:", error);
    }
    return null;
  }
}

/**
 * Save game state data for a session
 */
export async function saveGameState(sessionId: string, stateData: any) {
  try {
    // Get the current game session
    const gameSession = await prisma.gameSession.findUnique({
      where: { id: sessionId },
    });

    if (!gameSession) {
      throw new Error("Game session not found");
    }

    // Update session data
    await prisma.gameSession.update({
      where: { id: sessionId },
      data: {
        sessionData: {
          ...(gameSession.sessionData as object),
          ...stateData,
        },
        lastActivityAt: new Date(),
      },
    });

    // If there's character and world data in the session
    const sessionData = gameSession.sessionData as any;
    const worldId = sessionData?.worldId;

    if (gameSession.characterId && worldId && stateData.currentLocation) {
      // Update character location
      await characterWorldStateRepository.updateCharacterWorldState(
        gameSession.characterId,
        worldId,
        {
          currentLocation: stateData.currentLocation,
          lastPlayedAt: new Date(),
        }
      );
    }

    // Revalidate the path
    revalidatePath(`/game/${sessionId}`);

    return { success: true };
  } catch (error) {
    console.error("Error saving game state:", error);
    return { success: false, error: String(error) };
  }
}

/**
 * End a game session
 */
export async function endGameSession(sessionId: string) {
  try {
    // Get the session
    const gameSession = await prisma.gameSession.findUnique({
      where: { id: sessionId },
    });

    if (!gameSession) {
      throw new Error("Game session not found");
    }

    // Calculate duration in seconds
    const startedAt = gameSession.startedAt;
    const endedAt = new Date();
    const durationSeconds = Math.round(
      (endedAt.getTime() - startedAt.getTime()) / 1000
    );

    // Update the session
    await prisma.gameSession.update({
      where: { id: sessionId },
      data: {
        isActive: false,
        endedAt: endedAt,
        durationSeconds: durationSeconds,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error ending game session:", error);
    return { success: false, error: String(error) };
  }
}
