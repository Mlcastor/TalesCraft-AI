// Export all game engine components for easy imports
export { SessionManager, sessionManager } from "./SessionManager";
export { GameStateManager, gameStateManager } from "./GameStateManager";
export { GameEngineProvider, useGameEngine } from "./GameEngineProvider";

// Export types
export type { GameEngineContextType } from "./GameEngineProvider";

// Constants
export const GAME_VERSION = "0.1.0";
