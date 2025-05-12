import { Prisma } from "@/generated/prisma";
import { prisma } from "./prisma";

/**
 * Gets all lore fragments for a specific world
 *
 * @param worldId - The world ID to filter by
 * @param includeHidden - Whether to include unrevealed lore fragments (default: false)
 * @returns Array of lore fragments for the specified world
 */
export async function getLoreFragmentsByWorldId(
  worldId: string,
  includeHidden = false
) {
  return prisma.loreFragment.findMany({
    where: {
      worldId,
      ...(includeHidden ? {} : { isRevealed: true }),
    },
    orderBy: {
      title: "asc",
    },
  });
}

/**
 * Gets a single lore fragment by its ID
 *
 * @param id - The lore fragment ID to find
 * @returns The lore fragment or null if not found
 */
export async function getLoreFragmentById(id: string) {
  return prisma.loreFragment.findUnique({
    where: {
      id,
    },
  });
}

/**
 * Gets all lore fragments related to a specific context (like a location)
 *
 * @param contextId - The context ID to filter by
 * @param includeHidden - Whether to include unrevealed lore fragments (default: false)
 * @returns Array of lore fragments for the specified context
 */
export async function getLoreFragmentsByContextId(
  contextId: string,
  includeHidden = false
) {
  return prisma.loreFragment.findMany({
    where: {
      contextId,
      ...(includeHidden ? {} : { isRevealed: true }),
    },
    orderBy: {
      title: "asc",
    },
  });
}

/**
 * Creates a new lore fragment
 *
 * @param data - The lore fragment data to create
 * @returns The created lore fragment
 */
export async function createLoreFragment(data: Prisma.LoreFragmentCreateInput) {
  return prisma.loreFragment.create({
    data,
  });
}

/**
 * Updates an existing lore fragment
 *
 * @param id - The ID of the lore fragment to update
 * @param data - The data to update
 * @returns The updated lore fragment
 */
export async function updateLoreFragment(
  id: string,
  data: Prisma.LoreFragmentUpdateInput
) {
  return prisma.loreFragment.update({
    where: {
      id,
    },
    data,
  });
}

/**
 * Reveals a previously hidden lore fragment
 *
 * @param id - The ID of the lore fragment to reveal
 * @returns The updated lore fragment
 */
export async function revealLoreFragment(id: string) {
  return prisma.loreFragment.update({
    where: {
      id,
    },
    data: {
      isRevealed: true,
    },
  });
}

/**
 * Searches lore fragments by keywords
 *
 * @param worldId - The world ID to filter by
 * @param searchTerm - The search term to look for
 * @param includeHidden - Whether to include unrevealed lore fragments (default: false)
 * @returns Array of matching lore fragments
 */
export async function searchLoreFragments(
  worldId: string,
  searchTerm: string,
  includeHidden = false
) {
  // Normalize the search term
  const normalizedSearch = searchTerm.toLowerCase().trim();

  // Get all lore fragments for the world
  const fragments = await prisma.loreFragment.findMany({
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
}
