import { prisma } from "./prisma";
import type { LoreCategory, LoreCategoryCreate } from "@/types/database";

/**
 * Repository for lore category-related database operations
 */
export const loreCategoryRepository = {
  /**
   * Create a new lore category
   *
   * @param data Lore category creation data
   * @returns The created lore category
   */
  async createLoreCategory(data: LoreCategoryCreate) {
    return prisma.loreCategory.create({
      data,
    });
  },

  /**
   * Get a lore category by ID
   *
   * @param id Lore category ID
   * @returns The lore category or null if not found
   */
  async getLoreCategoryById(id: string) {
    return prisma.loreCategory.findUnique({
      where: { id },
    });
  },

  /**
   * Get a lore category by name
   *
   * @param name Lore category name
   * @returns The lore category or null if not found
   */
  async getLoreCategoryByName(name: string) {
    return prisma.loreCategory.findUnique({
      where: { name },
    });
  },

  /**
   * Get all top-level lore categories (no parent)
   *
   * @returns Array of top-level lore categories
   */
  async getTopLevelCategories() {
    return prisma.loreCategory.findMany({
      where: { parentCategoryId: null },
      orderBy: { name: "asc" },
    });
  },

  /**
   * Get all subcategories for a parent category
   *
   * @param parentCategoryId Parent category ID
   * @returns Array of subcategories
   */
  async getSubcategories(parentCategoryId: string) {
    return prisma.loreCategory.findMany({
      where: { parentCategoryId },
      orderBy: { name: "asc" },
    });
  },

  /**
   * Get a category with all its subcategories
   *
   * @param id Category ID
   * @returns The category with subcategories or null if not found
   */
  async getCategoryWithSubcategories(id: string) {
    return prisma.loreCategory.findUnique({
      where: { id },
      include: {
        subcategories: {
          orderBy: { name: "asc" },
        },
      },
    });
  },

  /**
   * Update a lore category
   *
   * @param id Lore category ID
   * @param data Data to update
   * @returns The updated lore category
   */
  async updateLoreCategory(id: string, data: Partial<LoreCategoryCreate>) {
    return prisma.loreCategory.update({
      where: { id },
      data,
    });
  },

  /**
   * Delete a lore category
   *
   * @param id Lore category ID
   * @returns The deleted lore category
   */
  async deleteLoreCategory(id: string) {
    return prisma.loreCategory.delete({
      where: { id },
    });
  },
};
