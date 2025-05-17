"use server";

/**
 * Authentication Server Actions
 *
 * This file provides server actions for authentication operations including
 * login, registration, logout, and email verification.
 */

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import {
  generateToken,
  verifyPassword,
  hashPassword,
  generateRandomToken,
  verifyToken,
  hashToken,
} from "@/lib/utils/authUtils";
import { prisma } from "@/lib/repositories/prisma";
import { logger } from "@/lib/utils/logger";
import { User } from "@/types/authTypes";
import { allowRequest, resetKey } from "@/lib/utils/rateLimiter";
import {
  sendVerificationEmail,
  sendPasswordResetEmail,
} from "@/lib/services/emailService";

// Validation schemas
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional().default(false),
});

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// Session cookie name
const SESSION_COOKIE_NAME = "auth_session";

// Rate-limit configuration
const LOGIN_LIMIT = { limit: 5, windowMs: 15 * 60 * 1000 }; // 5 attempts / 15min
const RESET_LIMIT = { limit: 3, windowMs: 60 * 60 * 1000 }; // 3 requests / hour

/**
 * Login user action
 *
 * Authenticates a user with email and password, creates a session,
 * and sets a session cookie.
 */
export async function login(formData: FormData) {
  try {
    // Parse and validate input
    const parsed = loginSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on",
    });

    // ---- Rate-limit: per email + IP combination -------------------------
    const ip = (headers() as any).get("x-forwarded-for") || "unknown";
    const rateKey = `login:${parsed.email}:${ip}`;
    if (!(await allowRequest(rateKey, LOGIN_LIMIT))) {
      return {
        success: false,
        error: "Too many login attempts. Please try again later.",
      };
    }

    // Find user with password field
    const user = await prisma.user.findUnique({
      where: { email: parsed.email },
      select: {
        id: true,
        email: true,
        password: true,
        name: true,
        isActive: true,
      },
    });

    if (!user || !user.password) {
      return { success: false, error: "Invalid credentials" };
    }

    // Verify password
    const isPasswordValid = await verifyPassword(
      parsed.password,
      user.password
    );
    if (!isPasswordValid) {
      return { success: false, error: "Invalid credentials" };
    }

    // Generate session ID
    const sessionId = generateRandomToken(16);
    const expiryDate = new Date(
      Date.now() + (parsed.remember ? 30 : 7) * 24 * 60 * 60 * 1000
    ); // 7 or 30 days

    // Generate token
    const token = await generateToken(
      { id: user.id, email: user.email } as User,
      sessionId,
      parsed.remember ? "30d" : "7d"
    );

    // Set cookie using Next.js cookies API
    const cookiesStore = await cookies();
    cookiesStore.set({
      name: SESSION_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: expiryDate,
    });

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    // Reset the rate-limit counter on successful login
    await resetKey(rateKey);

    return { success: true, userId: user.id };
  } catch (error) {
    logger.error("Login error", {
      error: error instanceof Error ? error.message : "Unknown error",
      context: "auth",
    });

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Validation error",
        issues: error.issues,
      };
    }

    return { success: false, error: "Failed to login. Please try again." };
  }
}

/**
 * Register user action
 *
 * Creates a new user account and initiates email verification.
 */
export async function register(formData: FormData) {
  try {
    // Parse and validate input
    const parsed = registerSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    // Check if email exists
    const existingUser = await prisma.user.findUnique({
      where: { email: parsed.email },
    });

    if (existingUser) {
      return { success: false, error: "Email already in use" };
    }

    // Hash password
    const hashedPassword = await hashPassword(parsed.password);

    // Generate verification token (store hashed in DB)
    const verificationTokenPlain = generateRandomToken();
    const verificationTokenHashed = hashToken(verificationTokenPlain);
    const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Create user with schema that matches database
    const user = await prisma.user.create({
      data: {
        email: parsed.email,
        password: hashedPassword,
        isActive: true,
        emailVerified: false,
        preferences: {},
        profile: {
          create: {
            name: parsed.name,
          },
        },
        verificationToken: verificationTokenHashed,
        verificationTokenExpires: verificationExpires,
      },
    });

    // Send verification email (fire & forget)
    sendVerificationEmail(user.email, verificationTokenPlain).catch((err) =>
      logger.error("Failed to send verification email", {
        context: "email",
        error: err instanceof Error ? err.message : String(err),
      })
    );

    return {
      success: true,
      userId: user.id,
      message:
        "Registration successful. Please check your email to verify your account.",
    };
  } catch (error) {
    logger.error("Registration error", {
      error: error instanceof Error ? error.message : "Unknown error",
      context: "auth",
    });

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Validation error",
        issues: error.issues,
      };
    }

    return { success: false, error: "Failed to register. Please try again." };
  }
}

/**
 * Logout user action
 *
 * Invalidates the current session and clears the session cookie.
 */
export async function logout() {
  try {
    // Get session token from cookie
    const logoutCookiesStore = await cookies();
    const sessionCookie = logoutCookiesStore.get(SESSION_COOKIE_NAME);

    if (sessionCookie?.value) {
      try {
        // Verify token to get session ID
        const payload = await verifyToken(sessionCookie.value);

        // Note: We don't actually delete a session from the database
        // since we're not storing sessions there in this implementation
        // If you add a sessions table later, add the delete logic here
      } catch (error) {
        // Token verification failed, but we'll still clear the cookie
      }
    }

    // Clear session cookie
    const clearCookiesStore = await cookies();
    clearCookiesStore.set({
      name: SESSION_COOKIE_NAME,
      value: "",
      expires: new Date(0),
      path: "/",
    });

    // Redirect to home page
    redirect("/");
  } catch (error) {
    logger.error("Logout error", {
      error: error instanceof Error ? error.message : "Unknown error",
      context: "auth",
    });
    return { success: false, error: "Failed to logout. Please try again." };
  }
}

/**
 * Verify email action
 *
 * Verifies a user's email address using the verification token.
 */
export async function verifyEmail(token: string) {
  try {
    if (!token) {
      return { success: false, error: "Invalid verification token" };
    }

    // Hash incoming token before look-up
    const hashedToken = hashToken(token);

    // Find user with hashed token
    const user = await prisma.user.findFirst({
      where: {
        verificationToken: hashedToken,
        verificationTokenExpires: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return {
        success: false,
        error: "Invalid or expired verification token",
      };
    }

    // Update user to verified
    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: true,
        verificationToken: null,
        verificationTokenExpires: null,
      },
    });

    return {
      success: true,
      message: "Email verification successful. You can now log in.",
    };
  } catch (error) {
    logger.error("Email verification error", {
      error: error instanceof Error ? error.message : "Unknown error",
      context: "auth",
    });
    return {
      success: false,
      error: "Failed to verify email. Please try again.",
    };
  }
}

/**
 * Get current session action
 *
 * Retrieves the current user session if it exists.
 */
export async function getCurrentSession() {
  try {
    // Get session token from cookie
    const sessionCookiesStore = await cookies();
    const sessionCookie = sessionCookiesStore.get(SESSION_COOKIE_NAME);

    if (!sessionCookie?.value) {
      return { success: false, authenticated: false };
    }

    // Verify token
    const payload = await verifyToken(sessionCookie.value);

    // Get user
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
      return { success: false, authenticated: false };
    }

    return {
      success: true,
      authenticated: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.profile?.name || "",
        emailVerified: user.emailVerified,
        isActive: user.isActive,
        createdAt: user.createdAt,
        preferences: user.preferences,
        role: user.role || "user", // Default to "user" role if not specified
      },
    };
  } catch (error) {
    // Token is invalid, expired, etc.
    return { success: false, authenticated: false };
  }
}

/**
 * Request password reset action
 *
 * Generates a password reset token and sends a reset email to the user.
 */
export async function requestPasswordReset(email: string) {
  try {
    if (!email) {
      return { success: false, error: "Email is required" };
    }

    // ---- Rate-limit -----------------------------------------------------
    if (!(await allowRequest(`reset:${email.toLowerCase()}`, RESET_LIMIT))) {
      return {
        success: false,
        error: "Too many password reset requests. Please try again later.",
      };
    }

    // Find user with the provided email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // For security reasons, we return success even if the user doesn't exist
      // This prevents attackers from knowing which emails exist in the system
      return {
        success: true,
        message:
          "If an account with that email exists, a password reset link has been sent.",
      };
    }

    // Generate reset token (store hashed)
    const resetTokenPlain = generateRandomToken();
    const resetTokenHashed = hashToken(resetTokenPlain);
    const resetExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Update user with reset token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordToken: resetTokenHashed,
        resetPasswordExpires: resetExpires,
      },
    });

    // Send password reset email (fire & forget)
    sendPasswordResetEmail(user.email, resetTokenPlain).catch((err) =>
      logger.error("Failed to send reset email", {
        context: "email",
        error: err instanceof Error ? err.message : String(err),
      })
    );

    // Provide reset link in logs during non-prod for convenience
    if (process.env.NODE_ENV !== "production") {
      const resetUrl = `${
        process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
      }/reset-password?token=${resetTokenPlain}`;
      logger.info(`Password reset URL: ${resetUrl}`, { context: "auth" });
    }

    return {
      success: true,
      message:
        "If an account with that email exists, a password reset link has been sent.",
    };
  } catch (error) {
    logger.error("Password reset request error", {
      error: error instanceof Error ? error.message : "Unknown error",
      context: "auth",
    });
    return {
      success: false,
      error: "Failed to process password reset request. Please try again.",
    };
  }
}

/**
 * Reset password action
 *
 * Resets a user's password using the reset token.
 */
export async function resetPassword(formData: FormData) {
  try {
    const token = formData.get("token") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!token) {
      return { success: false, error: "Invalid reset token" };
    }

    if (!password || password.length < 8) {
      return {
        success: false,
        error: "Password must be at least 8 characters",
      };
    }

    if (password !== confirmPassword) {
      return { success: false, error: "Passwords do not match" };
    }

    // Hash incoming token before lookup
    const hashedToken = hashToken(token);

    // Find user with hashed token
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: hashedToken,
        resetPasswordExpires: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return {
        success: false,
        error:
          "Invalid or expired reset token. Please request a new password reset link.",
      };
    }

    // Hash new password
    const hashedPassword = await hashPassword(password);

    // Update user's password and clear reset token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });

    return {
      success: true,
      message:
        "Your password has been successfully reset. You can now log in with your new password.",
    };
  } catch (error) {
    logger.error("Password reset error", {
      error: error instanceof Error ? error.message : "Unknown error",
      context: "auth",
    });
    return {
      success: false,
      error: "Failed to reset password. Please try again.",
    };
  }
}
