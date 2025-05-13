/**
 * Authentication Utilities
 *
 * This file provides utility functions for authentication operations such as
 * token generation, validation, and password handling.
 */

import { User, JwtPayload } from "@/types/authTypes";
import jwt, { Secret, SignOptions } from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { logger } from "./logger";

// Constants for security settings
const SALT_ROUNDS = 12;
const DEFAULT_TOKEN_EXPIRY = "7d"; // 7 days
const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";

/**
 * Generate a JWT token for a user session
 *
 * @param user The authenticated user
 * @param sessionId The session ID
 * @param expiresIn Token expiration time (default: 7 days)
 * @returns The signed JWT token
 */
export async function generateToken(
  user: User,
  sessionId: string,
  expiresIn: string = DEFAULT_TOKEN_EXPIRY
): Promise<string> {
  const payload: JwtPayload = {
    userId: user.id,
    email: user.email,
    sessionId,
  };

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload as object,
      JWT_SECRET as string,
      { expiresIn } as SignOptions,
      (err, token) => {
        if (err) {
          logger.error(`Error generating JWT: ${err.message}`, {
            context: "auth",
            error: err,
          });
          reject(err);
        } else if (token) {
          resolve(token);
        } else {
          const error = new Error("Failed to generate token");
          logger.error("JWT generation returned no token", {
            context: "auth",
            error: error.message,
          });
          reject(error);
        }
      }
    );
  });
}

/**
 * Verify and decode a JWT token
 *
 * @param token The JWT token to verify
 * @returns The decoded token payload
 * @throws Error if token is invalid or expired
 */
export async function verifyToken(token: string): Promise<JwtPayload> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET as string, (err, decoded) => {
      if (err) {
        logger.warn(`Invalid token: ${err.message}`, {
          context: "auth",
          error: err,
        });
        reject(err);
      } else if (decoded) {
        resolve(decoded as JwtPayload);
      } else {
        const error = new Error("Token verification returned no data");
        logger.error("JWT verification failed", {
          context: "auth",
          error: error.message,
        });
        reject(error);
      }
    });
  });
}

/**
 * Hash a password using bcrypt
 *
 * @param password The plain text password to hash
 * @returns The hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  try {
    return await bcrypt.hash(password, SALT_ROUNDS);
  } catch (error) {
    logger.error(
      `Password hashing error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        context: "auth",
      }
    );
    throw error;
  }
}

/**
 * Verify a password against a hash
 *
 * @param plainPassword The plain text password to verify
 * @param hashedPassword The hashed password to compare against
 * @returns True if the password matches, false otherwise
 */
export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    logger.error(
      `Password verification error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        context: "auth",
      }
    );
    throw error;
  }
}

/**
 * Generate a random token for email verification or password reset
 *
 * @param length Length of the token (default: 32)
 * @returns A random token
 */
export function generateRandomToken(length: number = 32): string {
  return crypto.randomBytes(length).toString("hex");
}

/**
 * Calculate expiration date from now
 *
 * @param days Number of days until expiration
 * @returns Date object representing the expiration date
 */
export function calculateExpiryDate(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}

/**
 * Sanitize user object by removing sensitive information
 *
 * @param user User object potentially containing sensitive information
 * @returns Sanitized user object safe for client-side use
 */
export function sanitizeUser(user: User): User {
  const sanitized = { ...user };

  // Remove sensitive fields
  if ("password" in sanitized) delete sanitized.password;
  if ("resetPasswordToken" in sanitized) delete sanitized.resetPasswordToken;
  if ("resetPasswordExpires" in sanitized)
    delete sanitized.resetPasswordExpires;
  if ("verificationToken" in sanitized) delete sanitized.verificationToken;
  if ("verificationTokenExpires" in sanitized)
    delete sanitized.verificationTokenExpires;

  return sanitized;
}

/**
 * Convert User to SessionUser
 *
 * Ensures required fields for SessionUser are present
 */
export function convertToSessionUser(
  user: User | null
): import("@/types/authTypes").SessionUser | null {
  if (!user) return null;

  return {
    id: user.id,
    email: user.email,
    name: user.name || "", // Provide default empty string for name
    emailVerified: user.emailVerified || false,
    isActive: user.isActive,
    createdAt: user.createdAt,
    preferences: user.preferences,
    role: user.role,
  };
}
