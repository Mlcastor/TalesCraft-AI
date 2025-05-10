import { prisma } from "./prisma";
import type { User, UserCreate } from "@/types/database";

/**
 * Repository for user-related database operations
 */
export const userRepository = {
  /**
   * Create a new user
   *
   * @param data User creation data
   * @returns The created user
   */
  async createUser(data: UserCreate) {
    return prisma.user.create({
      data,
    });
  },

  /**
   * Get a user by ID
   *
   * @param id User ID
   * @returns The user or null if not found
   */
  async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  /**
   * Get a user by email
   *
   * @param email User email
   * @returns The user or null if not found
   */
  async getUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  },

  /**
   * Get all active users
   *
   * @returns Array of active users
   */
  async getAllActiveUsers() {
    return prisma.user.findMany({
      where: { isActive: true },
    });
  },

  /**
   * Update a user
   *
   * @param id User ID
   * @param data Data to update
   * @returns The updated user
   */
  async updateUser(id: string, data: Partial<UserCreate>) {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  /**
   * Update user's last login timestamp
   *
   * @param id User ID
   * @returns The updated user
   */
  async updateLastLogin(id: string) {
    return prisma.user.update({
      where: { id },
      data: { lastLogin: new Date() },
    });
  },

  /**
   * Mark a user as inactive (soft delete)
   *
   * @param id User ID
   * @returns The updated user
   */
  async deleteUser(id: string) {
    return prisma.user.update({
      where: { id },
      data: { isActive: false },
    });
  },
};
