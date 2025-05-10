import { prisma } from "./prisma";
import type { NPCTemplate, NPCTemplateCreate } from "@/types/database";

/**
 * Repository for NPC template-related database operations
 */
export const npcTemplateRepository = {
  /**
   * Create a new NPC template
   *
   * @param data NPC template creation data
   * @returns The created NPC template
   */
  async createNPCTemplate(data: NPCTemplateCreate) {
    return prisma.nPCTemplate.create({
      data: {
        ...data,
        personalityTraits: data.personalityTraits || [],
        defaultDialogue: data.defaultDialogue || [],
        isUnique: data.isUnique || false,
      },
    });
  },

  /**
   * Get an NPC template by ID
   *
   * @param id NPC template ID
   * @returns The NPC template or null if not found
   */
  async getNPCTemplateById(id: string) {
    return prisma.nPCTemplate.findUnique({
      where: { id },
    });
  },

  /**
   * Get an NPC template by code
   *
   * @param code NPC template code
   * @returns The NPC template or null if not found
   */
  async getNPCTemplateByCode(code: string) {
    return prisma.nPCTemplate.findUnique({
      where: { code },
    });
  },

  /**
   * Get all NPC templates
   *
   * @returns Array of NPC templates
   */
  async getAllNPCTemplates() {
    return prisma.nPCTemplate.findMany({
      orderBy: { name: "asc" },
    });
  },

  /**
   * Get all unique NPC templates
   *
   * @returns Array of unique NPC templates
   */
  async getUniqueNPCTemplates() {
    return prisma.nPCTemplate.findMany({
      where: { isUnique: true },
      orderBy: { name: "asc" },
    });
  },

  /**
   * Update an NPC template
   *
   * @param id NPC template ID
   * @param data Data to update
   * @returns The updated NPC template
   */
  async updateNPCTemplate(
    id: string,
    data: Partial<Omit<NPCTemplateCreate, "code">>
  ) {
    return prisma.nPCTemplate.update({
      where: { id },
      data,
    });
  },

  /**
   * Delete an NPC template
   *
   * @param id NPC template ID
   * @returns The deleted NPC template
   */
  async deleteNPCTemplate(id: string) {
    return prisma.nPCTemplate.delete({
      where: { id },
    });
  },
};
