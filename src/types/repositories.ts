/**
 * Repository and Service Layer Types
 *
 * This file contains type definitions for the repository and service layers.
 */

import {
  Character,
  GameSession,
  GameState,
  Decision,
  NarrativeHistory,
  AIContextHistory,
  World,
  Location,
  NPCState,
  NPCTemplate,
  LoreFragment,
  Event,
} from "./database";

/**
 * Base repository interface with standard CRUD operations
 */
export interface BaseRepository<T, IdType = string> {
  findById: (id: IdType) => Promise<T | null>;
  findMany: (options?: {
    where?: Record<string, any>;
    orderBy?: Record<string, "asc" | "desc">;
    take?: number;
    skip?: number;
  }) => Promise<T[]>;
  create: (data: Omit<T, "id" | "createdAt" | "updatedAt">) => Promise<T>;
  update: (id: IdType, data: Partial<T>) => Promise<T>;
  delete: (id: IdType) => Promise<boolean>;
  count: (where?: Record<string, any>) => Promise<number>;
  transaction: <R>(fn: () => Promise<R>) => Promise<R>;
}

/**
 * Repository interfaces for each entity
 */

export interface GameStateRepository extends BaseRepository<GameState> {
  findBySessionId: (sessionId: string) => Promise<GameState[]>;
  findLatestBySessionId: (sessionId: string) => Promise<GameState | null>;
  findByCharacterId: (characterId: string) => Promise<GameState[]>;
  findByWorldId: (worldId: string) => Promise<GameState[]>;
  createWithRelations: (
    data: Omit<GameState, "id" | "createdAt" | "updatedAt">,
    relations: {
      npcs?: Array<Omit<NPCState, "id" | "gameStateId">>;
    }
  ) => Promise<GameState>;
}

export interface GameSessionRepository extends BaseRepository<GameSession> {
  findByCharacterId: (characterId: string) => Promise<GameSession[]>;
  findActiveByCharacterId: (characterId: string) => Promise<GameSession[]>;
  updateLastActivity: (id: string) => Promise<GameSession>;
  endSession: (id: string) => Promise<GameSession>;
}

export interface DecisionRepository extends BaseRepository<Decision> {
  findByGameStateId: (gameStateId: string) => Promise<Decision[]>;
  findRecentByCharacterId: (
    characterId: string,
    limit?: number
  ) => Promise<Decision[]>;
}

export interface NarrativeHistoryRepository
  extends BaseRepository<NarrativeHistory> {
  findByGameStateId: (gameStateId: string) => Promise<NarrativeHistory[]>;
  findByGameStateIdAndType: (
    gameStateId: string,
    type: string
  ) => Promise<NarrativeHistory[]>;
  findRecentByGameStateId: (
    gameStateId: string,
    limit?: number
  ) => Promise<NarrativeHistory[]>;
}

export interface AIContextHistoryRepository
  extends BaseRepository<AIContextHistory> {
  findByGameStateId: (gameStateId: string) => Promise<AIContextHistory[]>;
  findByGameStateIdAndContextType: (
    gameStateId: string,
    contextType: string
  ) => Promise<AIContextHistory[]>;
  findRecentByGameStateId: (
    gameStateId: string,
    limit?: number
  ) => Promise<AIContextHistory[]>;
}

export interface WorldRepository extends BaseRepository<World> {
  findWithLocations: (id: string) => Promise<World & { locations: Location[] }>;
  findAllActive: () => Promise<World[]>;
}

export interface LocationRepository extends BaseRepository<Location> {
  findByWorldId: (worldId: string) => Promise<Location[]>;
  findConnectedLocations: (locationId: string) => Promise<Location[]>;
}

export interface NPCTemplateRepository extends BaseRepository<NPCTemplate> {
  findByCode: (code: string) => Promise<NPCTemplate | null>;
}

export interface NPCStateRepository extends BaseRepository<NPCState> {
  findByGameStateId: (gameStateId: string) => Promise<NPCState[]>;
  findByGameStateIdAndTemplateId: (
    gameStateId: string,
    templateId: string
  ) => Promise<NPCState | null>;
}

export interface LoreFragmentRepository extends BaseRepository<LoreFragment> {
  findByWorldId: (worldId: string) => Promise<LoreFragment[]>;
  findByWorldIdAndType: (
    worldId: string,
    type: string
  ) => Promise<LoreFragment[]>;
  findByKeywords: (
    worldId: string,
    keywords: string[]
  ) => Promise<LoreFragment[]>;
}

export interface EventRepository extends BaseRepository<Event> {
  findByWorldId: (worldId: string) => Promise<Event[]>;
  findByLocationId: (locationId: string) => Promise<Event[]>;
}

/**
 * Service layer interfaces
 */

export interface GameSessionService {
  createSession: (characterId: string, worldId: string) => Promise<GameSession>;
  getSession: (sessionId: string) => Promise<GameSession | null>;
  getSessions: (characterId: string) => Promise<GameSession[]>;
  endSession: (sessionId: string) => Promise<GameSession>;
  updateSessionActivity: (sessionId: string) => Promise<GameSession>;
}

export interface GameStateService {
  createGameState: (
    sessionId: string,
    data: Partial<GameState>
  ) => Promise<GameState>;
  getGameState: (stateId: string) => Promise<GameState | null>;
  getLatestGameState: (sessionId: string) => Promise<GameState | null>;
  saveGameState: (
    sessionId: string,
    data: Partial<GameState>,
    savePointName?: string
  ) => Promise<GameState>;
  loadGameState: (stateId: string) => Promise<GameState | null>;
}

export interface DecisionService {
  recordDecision: (
    gameStateId: string,
    decisionPointId: string,
    options: Array<{ text: string }>,
    choiceIndex: number,
    context?: string,
    consequences?: Record<string, any>
  ) => Promise<Decision>;

  getDecisionHistory: (gameStateId: string) => Promise<Decision[]>;
  getRecentDecisions: (
    characterId: string,
    limit?: number
  ) => Promise<Decision[]>;
}

export interface NarrativeService {
  generateNarrative: (gameStateId: string) => Promise<{
    narrativeText: string;
    decisions: Array<{ text: string; consequences?: string }>;
  }>;

  recordNarrativeEntry: (
    gameStateId: string,
    type: "narrative" | "playerResponse",
    content: string
  ) => Promise<NarrativeHistory>;

  getNarrativeHistory: (gameStateId: string) => Promise<NarrativeHistory[]>;
}

export interface AIContextService {
  recordAIContext: (
    gameStateId: string,
    contextType: string,
    promptText: string,
    completionText: string,
    promptTokens: number,
    completionTokens: number,
    relevanceScore?: number
  ) => Promise<AIContextHistory>;

  getRelevantContext: (
    gameStateId: string,
    contextType?: string,
    limit?: number
  ) => Promise<AIContextHistory[]>;
}
