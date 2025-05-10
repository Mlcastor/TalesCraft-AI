import { prisma } from './prisma';
import type { CharacterCreate } from '@/types/database';

/**
 * Repository for character-related database operations
 */
export const characterRepository = {
  /**
   * Create a new character for a user
   * 
   * @param data Character creation data
   * @returns The created character
   */
  async createCharacter(data: CharacterCreate) {
    return prisma.character.create({
      data,
    });
  },

  /**
   * Get a character by ID
   * 
   * @param id Character ID
   * @returns The character or null if not found
   */
  async getCharacterById(id: string) {
    return prisma.character.findUnique({
      where: { id },
    });
  },

  /**
   * Get all characters for a user
   * 
   * @param userId User ID
   * @returns Array of characters
   */
  async getCharactersByUserId(userId: string) {
    return prisma.character.findMany({
      where: { 
        userId,
        isActive: true 
      },
      orderBy: { lastPlayedAt: 'desc' },
    });
  },

  /**
   * Update a character
   * 
   * @param id Character ID
   * @param data Data to update
   * @returns The updated character
   */
  async updateCharacter(id: string, data: Partial<CharacterCreate>) {
    return prisma.character.update({
      where: { id },
      data,
    });
  },

  /**
   * Mark a character as inactive (soft delete)
   * 
   * @param id Character ID
   * @returns The updated character
   */
  async deleteCharacter(id: string) {
    return prisma.character.update({
      where: { id },
      data: { isActive: false },
    });
  },
}; 