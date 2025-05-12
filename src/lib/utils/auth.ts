/**
 * Authentication Utilities
 *
 * This file provides utility functions for authentication and user management.
 * It centralizes Clerk-related functionality and provides an abstraction layer
 * for future migration to other auth providers.
 */

import { auth as clerkAuth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db/prisma";

/**
 * Get the user ID and auth status of the current user
 *
 * @returns Authentication object with user ID and signed-in status
 */
export async function getAuth() {
  try {
    const { userId, sessionId } = await clerkAuth();
    return {
      userId,
      sessionId,
      isAuthenticated: !!userId,
    };
  } catch (error) {
    console.error("Error in getAuth:", error);
    return {
      userId: null,
      sessionId: null,
      isAuthenticated: false,
    };
  }
}

/**
 * Get the current user with auth validation
 *
 * @returns Object containing user data and auth status
 */
export async function getUser() {
  try {
    const { userId } = await clerkAuth();

    if (!userId) {
      return {
        user: null,
        isAuthenticated: false,
      };
    }

    const user = await currentUser();
    return {
      user,
      isAuthenticated: !!user,
      userId,
    };
  } catch (error) {
    console.error("Error in getUser:", error);
    return {
      user: null,
      isAuthenticated: false,
      userId: null,
    };
  }
}

/**
 * Validate a user session and redirects if not authenticated
 * This is a utility to be used in server components/pages
 *
 * @returns User ID if authenticated, or null if not
 */
export async function requireAuth() {
  const { userId } = await clerkAuth();
  return userId;
}

/**
 * Creates or updates a user in our database after login/signup
 * This can be called from the client side after successful authentication
 *
 * @returns Result of the sync operation
 */
export async function syncUserWithDatabase() {
  try {
    // Get the current authenticated user from Clerk
    const user = await currentUser();

    if (!user) {
      throw new Error("No authenticated user found");
    }

    const { id, emailAddresses, createdAt } = user;

    if (!emailAddresses || emailAddresses.length === 0) {
      throw new Error("No email addresses found for user");
    }

    const primaryEmail = emailAddresses[0].emailAddress;

    // Check if user already exists in our database
    const existingUser = await prisma.user.findUnique({
      where: { id: id },
    });

    if (existingUser) {
      // Update the user if they exist
      await prisma.user.update({
        where: { id: id },
        data: {
          email: primaryEmail,
          lastLogin: new Date(),
        },
      });
    } else {
      // Create a new user if they don't exist
      await prisma.user.create({
        data: {
          id: id,
          email: primaryEmail,
          createdAt: createdAt ? new Date(createdAt) : new Date(),
          lastLogin: new Date(),
          isActive: true,
          preferences: {},
        },
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Error syncing user with database:", error);
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Validates that the current user exists in our database
 * Can be used on protected routes to ensure user data is synced
 *
 * @returns Result of the validation operation
 */
export async function validateUserInDatabase() {
  try {
    const { userId } = await clerkAuth();

    if (!userId) {
      return { exists: false, error: "Not authenticated" };
    }

    // Check if user exists in our database
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      // If user doesn't exist in our database, create them
      await syncUserWithDatabase();
      return { exists: true, created: true };
    }

    return { exists: true };
  } catch (error) {
    console.error("Error validating user in database:", error);
    return { exists: false, error: (error as Error).message };
  }
}
