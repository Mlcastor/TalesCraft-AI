// Core Game Engine
export { GameEngine } from "./GameEngine";

// Game Engine Components
export { GameStateManager, gameStateManager } from "./GameStateManager";
export { SessionController } from "./SessionController";
export { DecisionManager, decisionManager } from "./DecisionManager";
export {
  NarrativeContextManager,
  narrativeContextManager,
} from "./NarrativeContextManager";

// Default instance
import { GameEngine } from "./GameEngine";

/**
 * Default game engine instance for direct import
 * For use in non-React contexts or for direct access
 *
 * In React components, use the GameEngineProvider from src/contexts/GameEngineProvider.tsx instead
 */
export const gameEngine = new GameEngine();
