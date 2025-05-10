import { prisma } from "./prisma";
import type { WorldLore, WorldLoreCreate } from "@/types/database";

/**
 * Repository for world lore-related database operations
 */
export const worldLoreRepository = {
  /**
   * Create a new world lore entry
   *
   * @param data World lore creation data
   * @returns The created world lore entry
   */
  async createWorldLore(data: WorldLoreCreate) {
    return prisma.worldLore.create({
      data: {
        ...data,
        isDiscoverable: data.isDiscoverable ?? true,
        discoveryConditions: data.discoveryConditions || {},
      },
    });
  },

  /**
   * Get a world lore entry by ID
   *
   * @param id World lore ID
   * @returns The world lore entry or null if not found
   */
  async getWorldLoreById(id: string) {
    return prisma.worldLore.findUnique({
      where: { id },
    });
  },

  /**
   * Get all world lore entries
   *
   * @returns Array of world lore entries
   */
  async getAllWorldLore() {
    return prisma.worldLore.findMany({
      orderBy: { title: "asc" },
    });
  },

  /**
   * Get all world lore entries for a category
   *
   * @param categoryId Category ID
   * @returns Array of world lore entries
   */
  async getWorldLoreByCategoryId(categoryId: string) {
    return prisma.worldLore.findMany({
      where: { categoryId },
      orderBy: { title: "asc" },
    });
  },

  /**
   * Search world lore by keywords
   *
   * @param searchTerm Search term
   * @returns Array of matching world lore entries
   */
  async searchWorldLore(searchTerm: string) {
    const keywords = searchTerm
      .toLowerCase()
      .split(/\s+/)
      .filter((k) => k.length > 0);

    if (keywords.length === 0) {
      return [];
    }

    return prisma.worldLore.findMany({
      where: {
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            content: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            keywords: {
              hasSome: keywords,
            },
          },
        ],
      },
      orderBy: { title: "asc" },
    });
  },

  /**
   * Update a world lore entry
   *
   * @param id World lore ID
   * @param data Data to update
   * @returns The updated world lore entry
   */
  async updateWorldLore(id: string, data: Partial<WorldLoreCreate>) {
    return prisma.worldLore.update({
      where: { id },
      data,
    });
  },

  /**
   * Delete a world lore entry
   *
   * @param id World lore ID
   * @returns The deleted world lore entry
   */
  async deleteWorldLore(id: string) {
    return prisma.worldLore.delete({
      where: { id },
    });
  },
};
