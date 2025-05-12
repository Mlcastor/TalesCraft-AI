import { prisma } from "./prisma";
import type { NPCState, NPCStateCreate } from "@/types/database";
import { BaseRepository } from "./base/BaseRepository";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";
import { Prisma } from "@/generated/prisma";

/**
 * Repository for NPC state-related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class NPCStateRepository extends BaseRepository {
  /**
   * Create a new NPCStateRepository instance
   */
  constructor() {
    super("NPCState");
  }

  /**
   * Create a new NPC state
   *
   * @param data NPC state creation data
   * @returns The created NPC state
   */
  async createNPCState(data: NPCStateCreate) {
    return this.executeOperation(
      (client) =>
        client.nPCState.create({
          data: {
            ...data,
            relationshipWithPlayer: data.relationshipWithPlayer || 0,
            dialogueHistory: data.dialogueHistory || [],
            instanceProperties: data.instanceProperties || {},
          },
        }),
      "createNPCState"
    );
  }

  /**
   * Get an NPC state by ID
   *
   * @param id NPC state ID
   * @returns The NPC state
   * @throws RecordNotFoundError if the NPC state does not exist
   */
  async getNPCStateById(id: string) {
    return this.executeOperation(async (client) => {
      const npcState = await client.nPCState.findUnique({
        where: { id },
      });

      return this.ensureExists(npcState, id);
    }, "getNPCStateById");
  }

  /**
   * Find an NPC state by ID (returns null if not found)
   *
   * @param id NPC state ID
   * @returns The NPC state or null if not found
   */
  async findNPCStateById(id: string) {
    return this.executeOperation(
      (client) =>
        client.nPCState.findUnique({
          where: { id },
        }),
      "findNPCStateById"
    );
  }

  /**
   * Get all NPC states for a game state
   *
   * @param gameStateId Game state ID
   * @param options Optional pagination options
   * @returns Array of NPC states
   */
  async getNPCStatesByGameStateId(
    gameStateId: string,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.nPCState.findMany({
          where: { gameStateId },
          include: { npcTemplate: true },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getNPCStatesByGameStateId"
    );
  }

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
    return this.executeOperation(
      (client) =>
        client.nPCState.findUnique({
          where: {
            gameStateId_npcTemplateId: {
              gameStateId,
              npcTemplateId,
            },
          },
          include: { npcTemplate: true },
        }),
      "getNPCStateByTemplateAndGameState"
    );
  }

  /**
   * Update an NPC state
   *
   * @param id NPC state ID
   * @param data Data to update
   * @returns The updated NPC state
   * @throws RecordNotFoundError if the NPC state does not exist
   */
  async updateNPCState(
    id: string,
    data: Partial<Omit<NPCStateCreate, "gameState" | "npcTemplate">>
  ) {
    try {
      return await this.executeOperation(
        (client) =>
          client.nPCState.update({
            where: { id },
            data,
          }),
        "updateNPCState"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("NPCState", id);
      }
      throw error;
    }
  }

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
    return this.executeOperation(
      (client) =>
        client.nPCState.upsert({
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
        }),
      "upsertNPCState"
    );
  }

  /**
   * Delete an NPC state
   *
   * @param id NPC state ID
   * @throws RecordNotFoundError if the NPC state does not exist
   */
  async deleteNPCState(id: string): Promise<void> {
    try {
      await this.executeOperation(
        (client) =>
          client.nPCState.delete({
            where: { id },
          }),
        "deleteNPCState"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("NPCState", id);
      }
      throw error;
    }
  }

  /**
   * Count NPC states for a game state
   *
   * @param gameStateId Game state ID
   * @returns Number of NPC states
   */
  async countNPCStatesByGameStateId(gameStateId: string): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.nPCState.count({
          where: { gameStateId },
        }),
      "countNPCStatesByGameStateId"
    );
  }
}

// Export singleton instance
export const npcStateRepository = new NPCStateRepository();

// Backwards compatibility exports
export const createNPCState =
  npcStateRepository.createNPCState.bind(npcStateRepository);
export const getNPCStateById =
  npcStateRepository.getNPCStateById.bind(npcStateRepository);
export const getNPCStatesByGameStateId =
  npcStateRepository.getNPCStatesByGameStateId.bind(npcStateRepository);
export const getNPCStateByTemplateAndGameState =
  npcStateRepository.getNPCStateByTemplateAndGameState.bind(npcStateRepository);
export const updateNPCState =
  npcStateRepository.updateNPCState.bind(npcStateRepository);
export const upsertNPCState =
  npcStateRepository.upsertNPCState.bind(npcStateRepository);
