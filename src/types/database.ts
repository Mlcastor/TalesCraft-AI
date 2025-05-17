import { Prisma } from "@/generated/prisma/index";

// Type definitions from Prisma
export type User = Prisma.UserGetPayload<Record<string, never>>;
export type MVPCharacter = Prisma.MVPCharacterGetPayload<Record<string, never>>;
export type SimplifiedGameState = Prisma.SimplifiedGameStateGetPayload<
  Record<string, never>
>;

// New Hub-related models
export type MVPWorld = Prisma.MVPWorldGetPayload<Record<string, never>>;
export type MVPCharacterWorldState = Prisma.MVPCharacterWorldStateGetPayload<
  Record<string, never>
>;
export type MVPLocation = Prisma.MVPLocationGetPayload<Record<string, never>>;
export type MVPLoreFragment = Prisma.MVPLoreFragmentGetPayload<
  Record<string, never>
>;

// Extended types for create operations
export type UserCreate = Prisma.UserCreateInput;
export type MVPCharacterCreate = Prisma.MVPCharacterCreateInput;
export type SimplifiedGameStateCreate = Prisma.SimplifiedGameStateCreateInput;

// New Hub-related create types
export type MVPWorldCreate = Prisma.MVPWorldCreateInput;
export type MVPCharacterWorldStateCreate =
  Prisma.MVPCharacterWorldStateCreateInput;
export type MVPLocationCreate = Prisma.MVPLocationCreateInput;
export type MVPLoreFragmentCreate = Prisma.MVPLoreFragmentCreateInput;

// Extended types with relationships included
export type MVPCharacterWithMVPCharacterWorldStates =
  Prisma.MVPCharacterGetPayload<{
    include: { mvpCharacterWorldStates: { include: { world: true } } };
  }>;

export type MVPWorldWithMVPLocations = Prisma.MVPWorldGetPayload<{
  include: { mvpLocations: true };
}>;

export type MVPCharacterWorldStateWithMVPWorld =
  Prisma.MVPCharacterWorldStateGetPayload<{
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
