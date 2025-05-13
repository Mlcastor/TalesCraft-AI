import { Prisma } from "@/generated/prisma/index";

// Type definitions from Prisma
export type User = Prisma.UserGetPayload<Record<string, never>>;
export type Character = Prisma.CharacterGetPayload<Record<string, never>>;
export type GameSession = Prisma.GameSessionGetPayload<Record<string, never>>;
export type GameState = Prisma.GameStateGetPayload<Record<string, never>>;
export type NPCTemplate = Prisma.NPCTemplateGetPayload<Record<string, never>>;
export type NPCState = Prisma.NPCStateGetPayload<Record<string, never>>;
export type Decision = Prisma.DecisionGetPayload<Record<string, never>>;
export type AIContextHistory = Prisma.AIContextHistoryGetPayload<
  Record<string, never>
>;
export type NarrativeHistory = Prisma.NarrativeHistoryGetPayload<{}>;

// New Hub-related models
export type World = Prisma.WorldGetPayload<Record<string, never>>;
export type CharacterWorldState = Prisma.CharacterWorldStateGetPayload<
  Record<string, never>
>;
export type Location = Prisma.LocationGetPayload<Record<string, never>>;
export type LoreFragment = Prisma.LoreFragmentGetPayload<Record<string, never>>;
export type Event = Prisma.EventGetPayload<Record<string, never>>;

// Extended types for create operations
export type CharacterCreate = Prisma.CharacterCreateInput;
export type GameSessionCreate = Prisma.GameSessionCreateInput;
export type GameStateCreate = Prisma.GameStateCreateInput;
export type NPCTemplateCreate = Prisma.NPCTemplateCreateInput;
export type NPCStateCreate = Prisma.NPCStateCreateInput;
export type DecisionCreate = Prisma.DecisionCreateInput;
export type AIContextHistoryCreate = Prisma.AIContextHistoryCreateInput;
export type UserCreate = Prisma.UserCreateInput;
export type NarrativeHistoryCreate = Prisma.NarrativeHistoryCreateInput;

// New Hub-related create types
export type WorldCreate = Prisma.WorldCreateInput;
export type CharacterWorldStateCreate = Prisma.CharacterWorldStateCreateInput;
export type LocationCreate = Prisma.LocationCreateInput;
export type LoreFragmentCreate = Prisma.LoreFragmentCreateInput;
export type EventCreate = Prisma.EventCreateInput;

// Extended types with relationships included
export type CharacterWithWorlds = Prisma.CharacterGetPayload<{
  include: { characterWorldStates: { include: { world: true } } };
}>;

export type WorldWithLocations = Prisma.WorldGetPayload<{
  include: { locations: true };
}>;

export type LocationWithEvents = Prisma.LocationGetPayload<{
  include: { events: true };
}>;

export type CharacterWorldStateWithWorld =
  Prisma.CharacterWorldStateGetPayload<{
    include: { world: true };
  }>;

// Trigger conditions interface for events
export interface TriggerConditions {
  probability?: number;
  requiredItems?: string[];
  requiredDecisions?: string[];
}

// Event outcome interface
export interface EventOutcome {
  id: string;
  description: string;
  requirements: {
    dialogue?: string[];
    items?: string[];
  };
}

// Type for event trigger conditions and outcomes
export type EventWithParsedJson = Omit<
  Event,
  "triggerConditions" | "outcomes"
> & {
  triggerConditions: TriggerConditions;
  outcomes: EventOutcome[];
};

// Game Session type for frontend UI
export interface GameSessionUI {
  id: string;
  character: {
    id: string;
    name: string;
    userId: string;
  };
  world: {
    id: string;
    name: string;
  };
  gameState?: {
    id: string;
    stateData: any;
  } | null;
  isActive: boolean;
  startedAt: Date;
  lastActivityAt: Date;
}
