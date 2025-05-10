import { prisma } from "./prisma";
import type { Decision, DecisionCreate } from "@/types/database";

/**
 * Repository for decision-related database operations
 */
export const decisionRepository = {
  /**
   * Create a new decision
   *
   * @param data Decision creation data
   * @returns The created decision
   */
  async createDecision(data: DecisionCreate) {
    return prisma.decision.create({
      data: {
        ...data,
        relatedNpcIds: data.relatedNpcIds || [],
        consequences: data.consequences || {},
      },
    });
  },

  /**
   * Get a decision by ID
   *
   * @param id Decision ID
   * @returns The decision or null if not found
   */
  async getDecisionById(id: string) {
    return prisma.decision.findUnique({
      where: { id },
    });
  },

  /**
   * Get all decisions for a game state
   *
   * @param gameStateId Game state ID
   * @returns Array of decisions
   */
  async getDecisionsByGameStateId(gameStateId: string) {
    return prisma.decision.findMany({
      where: { gameStateId },
      orderBy: { timestamp: "desc" },
    });
  },

  /**
   * Get all decisions for a specific decision point
   *
   * @param decisionPointId Decision point ID
   * @returns Array of decisions
   */
  async getDecisionsByDecisionPointId(decisionPointId: string) {
    return prisma.decision.findMany({
      where: { decisionPointId },
      orderBy: { timestamp: "desc" },
    });
  },

  /**
   * Get decisions involving specific NPCs
   *
   * @param npcIds NPC IDs
   * @returns Array of decisions
   */
  async getDecisionsInvolvingNpcs(npcIds: string[]) {
    return prisma.decision.findMany({
      where: {
        relatedNpcIds: {
          hasSome: npcIds,
        },
      },
      orderBy: { timestamp: "desc" },
    });
  },

  /**
   * Update a decision
   *
   * @param id Decision ID
   * @param data Data to update
   * @returns The updated decision
   */
  async updateDecision(
    id: string,
    data: Partial<Omit<DecisionCreate, "gameState" | "playerChoice">>
  ) {
    return prisma.decision.update({
      where: { id },
      data,
    });
  },
};
