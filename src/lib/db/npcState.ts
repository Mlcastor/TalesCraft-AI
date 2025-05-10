import { prisma } from "./prisma";
import type { NPCState, NPCStateCreate } from "@/types/database";

/**
 * Repository for NPC state-related database operations
 */
export const npcStateRepository = {
  /**
   * Create a new NPC state
   *
   * @param data NPC state creation data
   * @returns The created NPC state
   */
  async createNPCState(data: NPCStateCreate) {
    return prisma.nPCState.create({
      data: {
        ...data,
        relationshipWithPlayer: data.relationshipWithPlayer || 0,
        dialogueHistory: data.dialogueHistory || [],
        instanceProperties: data.instanceProperties || {},
      },
    });
  },

  /**
   * Get an NPC state by ID
   *
   * @param id NPC state ID
   * @returns The NPC state or null if not found
   */
  async getNPCStateById(id: string) {
    return prisma.nPCState.findUnique({
      where: { id },
    });
  },

  /**
   * Get all NPC states for a game state
   *
   * @param gameStateId Game state ID
   * @returns Array of NPC states
   */
  async getNPCStatesByGameStateId(gameStateId: string) {
    return prisma.nPCState.findMany({
      where: { gameStateId },
      include: { npcTemplate: true },
    });
  },

  /**
   * Get a specific NPC state for a game state
   *
   * @param gameStateId Game state ID
   * @param npcTemplateId NPC template ID
   * @returns The NPC state or null if not found
   */
  async getNPCStateByTemplateAndGameState(
    gameStateId: string,
    npcTemplateId: string
  ) {
    return prisma.nPCState.findUnique({
      where: {
        gameStateId_npcTemplateId: {
          gameStateId,
          npcTemplateId,
        },
      },
      include: { npcTemplate: true },
    });
  },

  /**
   * Update an NPC state
   *
   * @param id NPC state ID
   * @param data Data to update
   * @returns The updated NPC state
   */
  async updateNPCState(
    id: string,
    data: Partial<Omit<NPCStateCreate, "gameState" | "npcTemplate">>
  ) {
    return prisma.nPCState.update({
      where: { id },
      data,
    });
  },

  /**
   * Update or create an NPC state
   *
   * @param gameStateId Game state ID
   * @param npcTemplateId NPC template ID
   * @param data Data to update or create with
   * @returns The updated or created NPC state
   */
  async upsertNPCState(
    gameStateId: string,
    npcTemplateId: string,
    data: Partial<Omit<NPCStateCreate, "gameState" | "npcTemplate">>
  ) {
    return prisma.nPCState.upsert({
      where: {
        gameStateId_npcTemplateId: {
          gameStateId,
          npcTemplateId,
        },
      },
      update: data,
      create: {
        gameStateId,
        npcTemplateId,
        currentLocation: data.currentLocation,
        relationshipWithPlayer: data.relationshipWithPlayer || 0,
        dialogueHistory: data.dialogueHistory || [],
        instanceProperties: data.instanceProperties || {},
      },
    });
  },
};
