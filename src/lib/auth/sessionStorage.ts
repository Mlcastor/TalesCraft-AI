/**
 * Session Storage Utilities
 *
 * This file provides utilities for managing user sessions,
 * including cookie handling and local storage options.
 */

import { User, SessionUser } from "@/types/authTypes";
import { logger } from "@/lib/utils/logger";
import {
  calculateExpiryDate,
  convertToSessionUser,
} from "@/lib/utils/authUtils";
import Cookies from "js-cookie";

// Constants
const SESSION_COOKIE_NAME = "auth_token";
const USER_DATA_KEY = "auth_user";
const DEFAULT_COOKIE_EXPIRY_DAYS = 7;
const SECURE_COOKIE = process.env.NODE_ENV === "production";

/**
 * Save a session to client-side storage
 *
 * @param token - JWT token to store
 * @param user - User data to store
 * @param rememberMe - Whether to extend cookie expiration (default: false)
 */
export function saveSession(
  token: string,
  user: User,
  rememberMe: boolean = false
): void {
  try {
    // Calculate expiry
    const expiryDays = rememberMe ? 30 : DEFAULT_COOKIE_EXPIRY_DAYS;

    // Save token in cookie
    Cookies.set(SESSION_COOKIE_NAME, token, {
      expires: expiryDays,
      secure: SECURE_COOKIE,
      sameSite: "strict",
      path: "/",
    });

    // Save user data in localStorage
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));

    logger.info("Session saved successfully", { context: "auth" });
  } catch (error) {
    logger.error(
      `Error saving session: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        context: "auth",
        error: error instanceof Error ? error.message : String(error),
      }
    );
  }
}

/**
 * Get the stored authentication token
 *
 * @returns The token or null if not found
 */
export function getStoredToken(): string | null {
  try {
    return Cookies.get(SESSION_COOKIE_NAME) || null;
  } catch (error) {
    logger.error(
      `Error getting stored token: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        context: "auth",
        error: error instanceof Error ? error.message : String(error),
      }
    );
    return null;
  }
}

/**
 * Get the stored user data
 *
 * @returns The user data or null if not found
 */
export function getStoredUser(): User | null {
  try {
    const userData = localStorage.getItem(USER_DATA_KEY);

    if (!userData) {
      return null;
    }

    return JSON.parse(userData) as User;
  } catch (error) {
    logger.error(
      `Error getting stored user: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        context: "auth",
        error: error instanceof Error ? error.message : String(error),
      }
    );

    // Clear potentially corrupted data
    localStorage.removeItem(USER_DATA_KEY);
    return null;
  }
}

/**
 * Get the stored session user data (converted to SessionUser type)
 *
 * @returns The session user data or null if not found
 */
export function getStoredSessionUser(): SessionUser | null {
  const user = getStoredUser();
  return convertToSessionUser(user);
}

/**
 * Clear all session data
 */
export function clearSession(): void {
  try {
    // Remove cookie
    Cookies.remove(SESSION_COOKIE_NAME, { path: "/" });

    // Remove localStorage data
    localStorage.removeItem(USER_DATA_KEY);

    logger.info("Session cleared successfully", { context: "auth" });
  } catch (error) {
    logger.error(
      `Error clearing session: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        context: "auth",
        error: error instanceof Error ? error.message : String(error),
      }
    );
  }
}

/**
 * Update stored user data
 *
 * @param user - New user data to store
 */
export function updateUserInStorage(user: User): void {
  try {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
    logger.info("User data updated in storage", { context: "auth" });
  } catch (error) {
    logger.error(
      `Error updating user in storage: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        context: "auth",
        error: error instanceof Error ? error.message : String(error),
      }
    );
  }
}
