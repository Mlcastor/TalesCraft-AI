import { GameEngine } from "@/lib/engine/GameEngine";
import { SimplifiedGameState } from "@/types/mvpTypes";
import { logger } from "@/lib/utils/logger";
import { GameStateRepository } from "@/lib/repositories/gameStateRepository";
import { getServerSession } from "@/lib/auth/session";

export class GameService {
  private gameEngine: GameEngine;
  private gameStateRepository: GameStateRepository;

  constructor(
    gameEngine: GameEngine,
    gameStateRepository: GameStateRepository
  ) {
    this.gameEngine = gameEngine;
    this.gameStateRepository = gameStateRepository;
  }

  public async startGame(
    characterId: string,
    worldId: string
  ): Promise<SimplifiedGameState> {
    const session = await getServerSession();

    if (!session?.user?.id) {
      logger.error("User not authenticated. Cannot start game.", {
        context: "game-service",
        metadata: { characterId, worldId },
      });
      throw new Error("User not authenticated. Cannot start game.");
    }
    const sessionId = session.user.id;

    logger.debug("Starting game via GameService", {
      context: "game-service",
      metadata: { characterId, worldId, sessionId },
    });

    try {
      const gameState = await this.gameEngine.initializeGame(
        characterId,
        worldId,
        sessionId
      );
      logger.debug("Game started successfully via GameService", {
        context: "game-service",
        metadata: { gameStateId: gameState.id, sessionId },
      });
      return gameState;
    } catch (error) {
      logger.error("Error starting game via GameService", {
        context: "game-service",
        metadata: { characterId, worldId, sessionId, error },
      });
      throw error;
    }
  }

  public async makeDecision(
    gameStateId: string,
    choiceText: string
  ): Promise<SimplifiedGameState> {
    logger.debug("Making decision via GameService", {
      context: "game-service",
      metadata: { gameStateId, choiceText },
    });
    // Add validation or session checks here if necessary in the future
    try {
      const updatedGameState = await this.gameEngine.processPlayerDecision(
        gameStateId,
        choiceText
      );
      logger.debug("Decision processed successfully via GameService", {
        context: "game-service",
        metadata: { gameStateId: updatedGameState.id },
      });
      return updatedGameState;
    } catch (error) {
      logger.error("Error making decision via GameService", {
        context: "game-service",
        metadata: { gameStateId, choiceText, error },
      });
      throw error;
    }
  }

  public async loadGame(
    gameStateId: string
  ): Promise<SimplifiedGameState | null> {
    logger.debug("Loading game via GameService", {
      context: "game-service",
      metadata: { gameStateId },
    });
    // For MVP, loading might just be fetching by ID.
    // More complex session/user validation would go here in the future.
    try {
      const gameState = await this.gameStateRepository.getGameStateById(
        gameStateId
      );
      if (gameState) {
        logger.info("Game loaded successfully via GameService", {
          context: "game-service",
          metadata: { gameStateId },
        });
      } else {
        logger.warn("Game not found via GameService for loading", {
          context: "game-service",
          metadata: { gameStateId },
        });
      }
      return gameState;
    } catch (error) {
      logger.error("Error loading game via GameService", {
        context: "game-service",
        metadata: { gameStateId, error },
      });
      throw error;
    }
  }
}
