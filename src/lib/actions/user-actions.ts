"use server";

import { prisma } from "@/lib/db/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

/**
 * Creates or updates a user in our database after login/signup
 * This can be called from the client side after successful authentication
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
 */
export async function validateUserInDatabase() {
  try {
    const { userId } = await auth();

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
