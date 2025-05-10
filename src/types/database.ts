import { Prisma } from "@/generated/prisma/index";

// Type definitions from Prisma
export type User = Prisma.UserGetPayload<Record<string, never>>;
export type Character = Prisma.CharacterGetPayload<Record<string, never>>;
export type GameSession = Prisma.GameSessionGetPayload<Record<string, never>>;
export type GameState = Prisma.GameStateGetPayload<Record<string, never>>;
export type NPCTemplate = Prisma.NPCTemplateGetPayload<Record<string, never>>;
export type NPCState = Prisma.NPCStateGetPayload<Record<string, never>>;
export type LoreCategory = Prisma.LoreCategoryGetPayload<Record<string, never>>;
export type WorldLore = Prisma.WorldLoreGetPayload<Record<string, never>>;
export type Decision = Prisma.DecisionGetPayload<Record<string, never>>;
export type AIContextHistory = Prisma.AIContextHistoryGetPayload<
  Record<string, never>
>;

// Extended types for create operations
export type CharacterCreate = Prisma.CharacterCreateInput;
export type GameSessionCreate = Prisma.GameSessionCreateInput;
export type GameStateCreate = Prisma.GameStateCreateInput;
export type NPCTemplateCreate = Prisma.NPCTemplateCreateInput;
export type NPCStateCreate = Prisma.NPCStateCreateInput;
export type LoreCategoryCreate = Prisma.LoreCategoryCreateInput;
export type WorldLoreCreate = Prisma.WorldLoreCreateInput;
export type DecisionCreate = Prisma.DecisionCreateInput;
export type AIContextHistoryCreate = Prisma.AIContextHistoryCreateInput;
export type UserCreate = Prisma.UserCreateInput;
