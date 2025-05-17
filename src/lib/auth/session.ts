"use server";

import { cookies } from "next/headers";
import { SessionUser } from "@/types/authTypes";
import { verifyToken } from "@/lib/utils/authUtils";
import { prisma } from "@/lib/repositories/prisma";

/**
 * Gets the current user session from the auth cookie
 *
 * This checks the auth_session cookie, verifies the token, and returns the user data
 *
 * @returns The user session or null if not authenticated
 */
export async function getServerSession() {
  try {
    // Get the auth cookie
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("auth_session");

    if (!sessionCookie?.value) {
      return null;
    }

    // Verify the token
    const payload = await verifyToken(sessionCookie.value);

    if (!payload.userId) {
      return null;
    }

    // Get the user from the database
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        email: true,
        emailVerified: true,
        isActive: true,
        createdAt: true,
        role: true,
        profile: {
          select: {
            name: true,
          },
        },
        preferences: true,
      },
    });

    if (!user) {
      return null;
    }

    // Return the session with user data
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.profile?.name || user.email.split("@")[0],
        emailVerified: user.emailVerified || false,
        isActive: user.isActive,
        createdAt: user.createdAt,
        preferences: user.preferences,
        role: user.role || "user",
      },
    };
  } catch (error) {
    console.error("Error getting server session:", error);
    return null;
  }
}
