"use server";

import { prisma } from "@/lib/db/prisma";
import { getCurrentSession } from "@/lib/actions/auth-actions";

/**
 * Creates or updates a user in our database when authentication state changes
 * This can be called from the client side after successful authentication
 */
export async function syncUserWithDatabase() {
  try {
    // Get the current authenticated user from our auth system
    const sessionResult = await getCurrentSession();

    if (
      !sessionResult.success ||
      !sessionResult.authenticated ||
      !sessionResult.user
    ) {
      return { success: false, error: "No authenticated user found" };
    }

    const user = sessionResult.user;
    const userId = user.id;
    const email = user.email;

    // Check if user already exists in our database
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (existingUser) {
      // Update the user if they exist
      await prisma.user.update({
        where: { id: userId },
        data: {
          email,
          lastLogin: new Date(),
        },
      });
    } else {
      // Create a new user if they don't exist
      await prisma.user.create({
        data: {
          id: userId,
          email,
          createdAt: new Date(),
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
 */
export async function validateUserInDatabase() {
  try {
    const sessionResult = await getCurrentSession();

    if (
      !sessionResult.success ||
      !sessionResult.authenticated ||
      !sessionResult.user
    ) {
      return { exists: false, error: "Not authenticated" };
    }

    const userId = sessionResult.user.id;

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
