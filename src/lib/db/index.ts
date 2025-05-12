// Database connection utilities
export {
  prisma,
  connectDatabase,
  disconnectDatabase,
  checkDatabaseHealth,
} from "./prisma";

// Base classes
export { BaseRepository } from "./base/BaseRepository";

// Core and User-related exports
export * from "./user";
export * from "./character";

// Game Session & State related exports
export * from "./gameSession";
export * from "./gameState";
export * from "./decision";
export * from "./aiContextHistory";
export * from "./narrativeHistory";

// NPC related exports
export * from "./npcTemplate";
export * from "./npcState";

// World Hub related exports (new)
export * from "./world";
export * from "./location";
export * from "./characterWorldState";
export * from "./loreFragment";
export * from "./event";
