"use server";

import { GameService } from "@/lib/services/gameService";
import { GameEngine } from "@/lib/engine/GameEngine";
import { CharacterRepository } from "@/lib/repositories/characterRepository";
import { WorldRepository } from "@/lib/repositories/worldRepository";
import { GameStateRepository } from "@/lib/repositories/gameStateRepository";
import { SimplifiedGameState } from "@/types/mvpTypes";
import { logger } from "@/lib/utils/logger";
import { getServerSession } from "@/lib/auth/session";

// Helper function to instantiate services and repositories
// This keeps the action functions cleaner and adheres to MVP direct instantiation.
function getGameServiceInstance() {
  const characterRepository = new CharacterRepository();
  const worldRepository = new WorldRepository();
  const gameStateRepository = new GameStateRepository();
  const gameEngine = new GameEngine(
    gameStateRepository,
    worldRepository,
    characterRepository
  );
  return new GameService(gameEngine, gameStateRepository);
}

export async function startGameServerAction(
  characterId: string,
  worldId: string
): Promise<{ gameState?: SimplifiedGameState; error?: string }> {
  logger.info("startGameServerAction called", {
    context: "game-flow-actions",
    metadata: { characterId, worldId },
  });
  try {
    // GameService.startGame now handles session check internally
    const gameService = getGameServiceInstance();
    const gameState = await gameService.startGame(characterId, worldId);
    logger.info("startGameServerAction successful", {
      context: "game-flow-actions",
      metadata: { gameStateId: gameState.id },
    });
    return { gameState };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to start game.";
    logger.error("Error in startGameServerAction", {
      context: "game-flow-actions",
      metadata: { characterId, worldId, error: errorMessage },
    });
    return { error: errorMessage };
  }
}

export async function makeDecisionServerAction(
  gameStateId: string,
  choiceText: string
): Promise<{ gameState?: SimplifiedGameState; error?: string }> {
  logger.info("makeDecisionServerAction called", {
    context: "game-flow-actions",
    metadata: { gameStateId, choiceText },
  });
  try {
    // For MVP, we assume if the client has gameStateId, they are authorized.
    // Future: Add ownership/session validation here or in GameService.
    const session = await getServerSession();
    if (!session?.user?.id) {
      logger.warn("makeDecisionServerAction: User not authenticated.", {
        context: "game-flow-actions",
      });
      return { error: "User not authenticated." };
    }
    // Optional: Compare session.user.id with gameState.sessionId for validation if needed

    const gameService = getGameServiceInstance();
    const gameState = await gameService.makeDecision(gameStateId, choiceText);
    logger.info("makeDecisionServerAction successful", {
      context: "game-flow-actions",
      metadata: { gameStateId: gameState.id },
    });
    return { gameState };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to process decision.";
    logger.error("Error in makeDecisionServerAction", {
      context: "game-flow-actions",
      metadata: { gameStateId, choiceText, error: errorMessage },
    });
    return { error: errorMessage };
  }
}

export async function loadGameServerAction(
  gameStateId: string
): Promise<{ gameState?: SimplifiedGameState | null; error?: string }> {
  logger.info("loadGameServerAction called", {
    context: "game-flow-actions",
    metadata: { gameStateId },
  });
  try {
    // For MVP, direct load. Future: Add ownership/session validation.
    const session = await getServerSession();
    if (!session?.user?.id) {
      logger.warn("loadGameServerAction: User not authenticated.", {
        context: "game-flow-actions",
      });
      return { error: "User not authenticated." };
    }
    // Optional: Validate if session.user.id has rights to this gameStateId if it contains a sessionId matching the user

    const gameService = getGameServiceInstance();
    const gameState = await gameService.loadGame(gameStateId);
    if (gameState) {
      // Further check: if (gameState.sessionId !== session.user.id) return { error: "Access denied" };
      logger.info("loadGameServerAction successful", {
        context: "game-flow-actions",
        metadata: { gameStateId },
      });
    } else {
      logger.warn("loadGameServerAction: Game state not found", {
        context: "game-flow-actions",
        metadata: { gameStateId },
      });
      // Return null for gameState as per plan if not found, not an error object unless load fails
    }
    return { gameState };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to load game.";
    logger.error("Error in loadGameServerAction", {
      context: "game-flow-actions",
      metadata: { gameStateId, error: errorMessage },
    });
    return { error: errorMessage };
  }
}
