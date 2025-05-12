import { prisma } from "./prisma";
import type { User, UserCreate } from "@/types/database";
import { BaseRepository } from "./base/BaseRepository";
import { Prisma } from "@/generated/prisma";
import {
  RecordNotFoundError,
  ValidationError,
} from "@/lib/errors/DatabaseError";

/**
 * Repository for user-related database operations
 * Extends BaseRepository to inherit common functionality for error handling and transactions
 */
export class UserRepository extends BaseRepository {
  /**
   * Create a new UserRepository instance
   */
  constructor() {
    super("User");
  }

  /**
   * Create a new user
   *
   * @param data User creation data
   * @returns The created user
   * @throws ValidationError if a user with the same email already exists
   */
  async createUser(data: UserCreate) {
    // Validate email uniqueness
    await this.validateUniqueEmail(data.email);

    return this.executeOperation(
      (client) => client.user.create({ data }),
      "createUser"
    );
  }

  /**
   * Validate that an email is unique
   *
   * @param email The email to validate
   * @throws ValidationError if the email is already in use
   */
  private async validateUniqueEmail(email: string): Promise<void> {
    const existingUser = await this.executeOperation(
      (client) => client.user.findUnique({ where: { email } }),
      "findUserByEmail"
    );

    if (existingUser) {
      throw new ValidationError(
        "A user with this email already exists",
        { email: "Email is already in use" },
        { entity: "User" }
      );
    }
  }

  /**
   * Get a user by ID
   *
   * @param id User ID
   * @returns The user
   * @throws RecordNotFoundError if the user does not exist
   */
  async getUserById(id: string) {
    return this.executeOperation(async (client) => {
      const user = await client.user.findUnique({ where: { id } });
      return this.ensureExists(user, id);
    }, "getUserById");
  }

  /**
   * Check if a user exists by ID
   *
   * @param id User ID
   * @returns True if the user exists, false otherwise
   */
  async userExists(id: string): Promise<boolean> {
    return this.executeOperation(async (client) => {
      const count = await client.user.count({ where: { id } });
      return count > 0;
    }, "userExists");
  }

  /**
   * Get a user by email
   *
   * @param email User email
   * @returns The user
   * @throws RecordNotFoundError if the user does not exist
   */
  async getUserByEmail(email: string) {
    return this.executeOperation(async (client) => {
      const user = await client.user.findUnique({ where: { email } });
      return this.ensureExists(user, `email:${email}`);
    }, "getUserByEmail");
  }

  /**
   * Find a user by email (or return null if not found)
   *
   * @param email User email
   * @returns The user or null if not found
   */
  async findUserByEmail(email: string) {
    return this.executeOperation(
      (client) => client.user.findUnique({ where: { email } }),
      "findUserByEmail"
    );
  }

  /**
   * Get all active users
   *
   * @param options Optional pagination options
   * @returns Array of active users
   */
  async getAllActiveUsers(options?: { limit?: number; offset?: number }) {
    return this.executeOperation(
      (client) =>
        client.user.findMany({
          where: { isActive: true },
          ...(options?.limit ? { take: options.limit } : {}),
          ...(options?.offset ? { skip: options.offset } : {}),
        }),
      "getAllActiveUsers"
    );
  }

  /**
   * Count all active users
   *
   * @returns Number of active users
   */
  async countActiveUsers(): Promise<number> {
    return this.executeOperation(
      (client) => client.user.count({ where: { isActive: true } }),
      "countActiveUsers"
    );
  }

  /**
   * Update a user
   *
   * @param id User ID
   * @param data Data to update
   * @returns The updated user
   * @throws RecordNotFoundError if the user does not exist
   * @throws ValidationError if trying to update email to one that is already in use
   */
  async updateUser(id: string, data: Partial<UserCreate>) {
    // If email is being updated, validate uniqueness
    if (data.email) {
      const existingUser = await this.executeOperation(
        (client) =>
          client.user.findFirst({
            where: {
              email: data.email,
              id: { not: id },
            },
          }),
        "findUserByEmailNotId"
      );

      if (existingUser) {
        throw new ValidationError(
          "A user with this email already exists",
          { email: "Email is already in use" },
          { entity: "User" }
        );
      }
    }

    try {
      return await this.executeOperation(
        (client) => client.user.update({ where: { id }, data }),
        "updateUser"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("User", id);
      }
      throw error;
    }
  }

  /**
   * Update user's last login timestamp
   *
   * @param id User ID
   * @returns The updated user
   * @throws RecordNotFoundError if the user does not exist
   */
  async updateLastLogin(id: string) {
    try {
      return await this.executeOperation(
        (client) =>
          client.user.update({
            where: { id },
            data: { lastLogin: new Date() },
          }),
        "updateLastLogin"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("User", id);
      }
      throw error;
    }
  }

  /**
   * Mark a user as inactive (soft delete)
   *
   * @param id User ID
   * @returns The updated user
   * @throws RecordNotFoundError if the user does not exist
   */
  async deleteUser(id: string) {
    try {
      return await this.executeOperation(
        (client) =>
          client.user.update({
            where: { id },
            data: { isActive: false },
          }),
        "deleteUser"
      );
    } catch (error) {
      // Handle record not found error
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new RecordNotFoundError("User", id);
      }
      throw error;
    }
  }
}

// Export singleton instance
export const userRepository = new UserRepository();
