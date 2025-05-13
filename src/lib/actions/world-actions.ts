"use server";

import { revalidatePath } from "next/cache";
import { getAllActiveWorlds, getWorldWithRelatedData } from "@/lib/db/world";

/**
 * Get all active worlds
 */
export async function getActiveWorlds() {
  return getAllActiveWorlds();
}

/**
 * Get a world by ID with its related data (locations, lore)
 */
export async function getWorldById(worldId: string) {
  return getWorldWithRelatedData(worldId);
}
