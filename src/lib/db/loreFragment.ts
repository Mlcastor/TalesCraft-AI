import { Prisma } from "@/generated/prisma";
import { prisma } from "./prisma";
import { BaseRepository } from "./base/BaseRepository";
import { RecordNotFoundError } from "@/lib/errors/DatabaseError";

/**
 * Repository for lore fragment related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class LoreFragmentRepository extends BaseRepository {
  /**
   * Create a new LoreFragmentRepository instance
   */
  constructor() {
    super("LoreFragment");
  }

  /**
   * Gets all lore fragments for a specific world
   *
   * @param worldId - The world ID to filter by
   * @param includeHidden - Whether to include unrevealed lore fragments (default: false)
   * @param options - Optional pagination options
   * @returns Array of lore fragments for the specified world
   */
  async getLoreFragmentsByWorldId(
    worldId: string,
    includeHidden = false,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.loreFragment.findMany({
          where: {
            worldId,
            ...(includeHidden ? {} : { isRevealed: true }),
          },
          orderBy: {
            title: "asc",
          },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getLoreFragmentsByWorldId"
    );
  }

  /**
   * Gets a single lore fragment by its ID
   *
   * @param id - The lore fragment ID to find
   * @returns The lore fragment
   * @throws RecordNotFoundError if the lore fragment doesn't exist
   */
  async getLoreFragmentById(id: string) {
    return this.executeOperation(async (client) => {
      const fragment = await client.loreFragment.findUnique({
        where: { id },
      });

      return this.ensureExists(fragment, id);
    }, "getLoreFragmentById");
  }

  /**
   * Find a lore fragment by ID (returns null if not found)
   *
   * @param id The lore fragment ID
   * @returns The lore fragment or null if not found
   */
  async findLoreFragmentById(id: string) {
    return this.executeOperation(
      (client) =>
        client.loreFragment.findUnique({
          where: { id },
        }),
      "findLoreFragmentById"
    );
  }

  /**
   * Gets all lore fragments related to a specific context (like a location)
   *
   * @param contextId - The context ID to filter by
   * @param includeHidden - Whether to include unrevealed lore fragments (default: false)
   * @param options - Optional pagination options
   * @returns Array of lore fragments for the specified context
   */
  async getLoreFragmentsByContextId(
    contextId: string,
    includeHidden = false,
    options?: { limit?: number; offset?: number }
  ) {
    return this.executeOperation(
      (client) =>
        client.loreFragment.findMany({
          where: {
            contextId,
            ...(includeHidden ? {} : { isRevealed: true }),
          },
          orderBy: {
            title: "asc",
          },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getLoreFragmentsByContextId"
    );
  }

  /**
   * Creates a new lore fragment
   *
   * @param data - The lore fragment data to create
   * @returns The created lore fragment
   */
  async createLoreFragment(data: Prisma.LoreFragmentCreateInput) {
    return this.executeOperation(
      (client) =>
        client.loreFragment.create({
          data,
        }),
      "createLoreFragment"
    );
  }

  /**
   * Updates an existing lore fragment
   *
   * @param id - The ID of the lore fragment to update
   * @param data - The data to update
   * @returns The updated lore fragment
   * @throws RecordNotFoundError if the lore fragment doesn't exist
   */
  async updateLoreFragment(id: string, data: Prisma.LoreFragmentUpdateInput) {
    try {
      return await this.executeOperation(
        (client) =>
          client.loreFragment.update({
            where: { id },
            data,
          }),
        "updateLoreFragment"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("LoreFragment", id);
      }
      throw error;
    }
  }

  /**
   * Reveals a previously hidden lore fragment
   *
   * @param id - The ID of the lore fragment to reveal
   * @returns The updated lore fragment
   * @throws RecordNotFoundError if the lore fragment doesn't exist
   */
  async revealLoreFragment(id: string) {
    try {
      return await this.executeOperation(
        (client) =>
          client.loreFragment.update({
            where: { id },
            data: {
              isRevealed: true,
            },
          }),
        "revealLoreFragment"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("LoreFragment", id);
      }
      throw error;
    }
  }

  /**
   * Searches lore fragments by keywords
   *
   * @param worldId - The world ID to filter by
   * @param searchTerm - The search term to look for
   * @param includeHidden - Whether to include unrevealed lore fragments (default: false)
   * @returns Array of matching lore fragments
   */
  async searchLoreFragments(
    worldId: string,
    searchTerm: string,
    includeHidden = false
  ) {
    return this.executeOperation(async (client) => {
      // Normalize the search term
      const normalizedSearch = searchTerm.toLowerCase().trim();

      // Get all lore fragments for the world
      const fragments = await client.loreFragment.findMany({
        where: {
          worldId,
          ...(includeHidden ? {} : { isRevealed: true }),
        },
      });

      // Filter by title, content, or keywords containing the search term
      return fragments.filter((fragment) => {
        const matchesTitle = fragment.title
          .toLowerCase()
          .includes(normalizedSearch);
        const matchesContent = fragment.content
          .toLowerCase()
          .includes(normalizedSearch);
        const matchesKeywords = fragment.keywords.some((keyword) =>
          keyword.toLowerCase().includes(normalizedSearch)
        );

        return matchesTitle || matchesContent || matchesKeywords;
      });
    }, "searchLoreFragments");
  }

  /**
   * Delete a lore fragment
   *
   * @param id The ID of the lore fragment to delete
   * @throws RecordNotFoundError if the lore fragment doesn't exist
   */
  async deleteLoreFragment(id: string): Promise<void> {
    try {
      await this.executeOperation(
        (client) =>
          client.loreFragment.delete({
            where: { id },
          }),
        "deleteLoreFragment"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("LoreFragment", id);
      }
      throw error;
    }
  }

  /**
   * Count lore fragments for a specific world
   *
   * @param worldId The world ID
   * @param includeHidden Whether to include unrevealed lore fragments
   * @returns Number of lore fragments
   */
  async countLoreFragmentsByWorldId(
    worldId: string,
    includeHidden = false
  ): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.loreFragment.count({
          where: {
            worldId,
            ...(includeHidden ? {} : { isRevealed: true }),
          },
        }),
      "countLoreFragmentsByWorldId"
    );
  }

  /**
   * Count lore fragments for a specific context
   *
   * @param contextId The context ID
   * @param includeHidden Whether to include unrevealed lore fragments
   * @returns Number of lore fragments
   */
  async countLoreFragmentsByContextId(
    contextId: string,
    includeHidden = false
  ): Promise<number> {
    return this.executeOperation(
      (client) =>
        client.loreFragment.count({
          where: {
            contextId,
            ...(includeHidden ? {} : { isRevealed: true }),
          },
        }),
      "countLoreFragmentsByContextId"
    );
  }
}

// Export singleton instance
export const loreFragmentRepository = new LoreFragmentRepository();

// Backwards compatibility exports
export const getLoreFragmentsByWorldId =
  loreFragmentRepository.getLoreFragmentsByWorldId.bind(loreFragmentRepository);
export const getLoreFragmentById =
  loreFragmentRepository.getLoreFragmentById.bind(loreFragmentRepository);
export const getLoreFragmentsByContextId =
  loreFragmentRepository.getLoreFragmentsByContextId.bind(
    loreFragmentRepository
  );
export const createLoreFragment =
  loreFragmentRepository.createLoreFragment.bind(loreFragmentRepository);
export const updateLoreFragment =
  loreFragmentRepository.updateLoreFragment.bind(loreFragmentRepository);
export const revealLoreFragment =
  loreFragmentRepository.revealLoreFragment.bind(loreFragmentRepository);
export const searchLoreFragments =
  loreFragmentRepository.searchLoreFragments.bind(loreFragmentRepository);
