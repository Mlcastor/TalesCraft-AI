import { prisma } from "./prisma";
import type { NPCTemplate, NPCTemplateCreate } from "@/types/database";
import { BaseRepository } from "./base/BaseRepository";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";
import { Prisma } from "@/generated/prisma";

/**
 * Repository for NPC template-related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class NPCTemplateRepository extends BaseRepository {
  /**
   * Create a new NPCTemplateRepository instance
   */
  constructor() {
    super("NPCTemplate");
  }

  /**
   * Create a new NPC template
   *
   * @param data NPC template creation data
   * @returns The created NPC template
   */
  async createNPCTemplate(data: NPCTemplateCreate) {
    return this.executeOperation(
      (client) =>
        client.nPCTemplate.create({
          data: {
            ...data,
            personalityTraits: data.personalityTraits || [],
            defaultDialogue: data.defaultDialogue || [],
            isUnique: data.isUnique || false,
          },
        }),
      "createNPCTemplate"
    );
  }

  /**
   * Get an NPC template by ID
   *
   * @param id NPC template ID
   * @returns The NPC template
   * @throws RecordNotFoundError if the NPC template does not exist
   */
  async getNPCTemplateById(id: string) {
    return this.executeOperation(async (client) => {
      const template = await client.nPCTemplate.findUnique({
        where: { id },
      });

      return this.ensureExists(template, id);
    }, "getNPCTemplateById");
  }

  /**
   * Find an NPC template by ID (returns null if not found)
   *
   * @param id NPC template ID
   * @returns The NPC template or null if not found
   */
  async findNPCTemplateById(id: string) {
    return this.executeOperation(
      (client) =>
        client.nPCTemplate.findUnique({
          where: { id },
        }),
      "findNPCTemplateById"
    );
  }

  /**
   * Get an NPC template by code
   *
   * @param code NPC template code
   * @returns The NPC template
   * @throws RecordNotFoundError if the NPC template does not exist
   */
  async getNPCTemplateByCode(code: string) {
    return this.executeOperation(async (client) => {
      const template = await client.nPCTemplate.findUnique({
        where: { code },
      });

      return this.ensureExists(template, `code:${code}`);
    }, "getNPCTemplateByCode");
  }

  /**
   * Find an NPC template by code (returns null if not found)
   *
   * @param code NPC template code
   * @returns The NPC template or null if not found
   */
  async findNPCTemplateByCode(code: string) {
    return this.executeOperation(
      (client) =>
        client.nPCTemplate.findUnique({
          where: { code },
        }),
      "findNPCTemplateByCode"
    );
  }

  /**
   * Get all NPC templates
   *
   * @param options Optional pagination options
   * @returns Array of NPC templates
   */
  async getAllNPCTemplates(options?: { limit?: number; offset?: number }) {
    return this.executeOperation(
      (client) =>
        client.nPCTemplate.findMany({
          orderBy: { name: "asc" },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getAllNPCTemplates"
    );
  }

  /**
   * Get all unique NPC templates
   *
   * @param options Optional pagination options
   * @returns Array of unique NPC templates
   */
  async getUniqueNPCTemplates(options?: { limit?: number; offset?: number }) {
    return this.executeOperation(
      (client) =>
        client.nPCTemplate.findMany({
          where: { isUnique: true },
          orderBy: { name: "asc" },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getUniqueNPCTemplates"
    );
  }

  /**
   * Update an NPC template
   *
   * @param id NPC template ID
   * @param data Data to update
   * @returns The updated NPC template
   * @throws RecordNotFoundError if the NPC template does not exist
   */
  async updateNPCTemplate(
    id: string,
    data: Partial<Omit<NPCTemplateCreate, "code">>
  ) {
    try {
      return await this.executeOperation(
        (client) =>
          client.nPCTemplate.update({
            where: { id },
            data,
          }),
        "updateNPCTemplate"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("NPCTemplate", id);
      }
      throw error;
    }
  }

  /**
   * Delete an NPC template
   *
   * @param id NPC template ID
   * @throws RecordNotFoundError if the NPC template does not exist
   */
  async deleteNPCTemplate(id: string): Promise<void> {
    try {
      await this.executeOperation(
        (client) =>
          client.nPCTemplate.delete({
            where: { id },
          }),
        "deleteNPCTemplate"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("NPCTemplate", id);
      }
      throw error;
    }
  }

  /**
   * Count all NPC templates
   *
   * @param onlyUnique Whether to count only unique templates
   * @returns Number of NPC templates
   */
  async countNPCTemplates(onlyUnique?: boolean): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.nPCTemplate.count({
          where: onlyUnique ? { isUnique: true } : undefined,
        }),
      "countNPCTemplates"
    );
  }
}

// Export singleton instance
export const npcTemplateRepository = new NPCTemplateRepository();

// Backwards compatibility exports
export const createNPCTemplate = npcTemplateRepository.createNPCTemplate.bind(
  npcTemplateRepository
);
export const getNPCTemplateById = npcTemplateRepository.getNPCTemplateById.bind(
  npcTemplateRepository
);
export const getNPCTemplateByCode =
  npcTemplateRepository.getNPCTemplateByCode.bind(npcTemplateRepository);
export const getAllNPCTemplates = npcTemplateRepository.getAllNPCTemplates.bind(
  npcTemplateRepository
);
export const getUniqueNPCTemplates =
  npcTemplateRepository.getUniqueNPCTemplates.bind(npcTemplateRepository);
export const updateNPCTemplate = npcTemplateRepository.updateNPCTemplate.bind(
  npcTemplateRepository
);
export const deleteNPCTemplate = npcTemplateRepository.deleteNPCTemplate.bind(
  npcTemplateRepository
);
