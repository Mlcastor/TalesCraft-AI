/**
 * Edge-Compatible Authentication Utilities
 *
 * This file provides authentication utilities that are compatible with Edge Runtime.
 * Unlike authUtils.ts, this file does not use Node.js-specific modules like bcrypt.
 */

import { jwtVerify, SignJWT } from "jose";
import { SessionUser, JwtPayload } from "@/types/authTypes";

// Constants
const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";
const SESSION_COOKIE_NAME = "auth_session";

/**
 * Verify a JWT token (Edge-compatible)
 *
 * @param token - The JWT token to verify
 * @returns The payload if valid, or throws an error
 */
export async function verifyToken(token: string): Promise<JwtPayload> {
  try {
    const encoder = new TextEncoder();
    const secretKey = encoder.encode(JWT_SECRET);

    const { payload } = await jwtVerify(token, secretKey);

    return payload as unknown as JwtPayload;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}

/**
 * Check if a route is public (doesn't require authentication)
 *
 * @param pathname - The URL pathname
 * @returns True if the route is public, false otherwise
 */
export function isPublicRoute(pathname: string): boolean {
  // Define public routes that don't require authentication
  const publicRoutes = [
    "/",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/verify-email",
  ];

  // Check exact matches first
  if (
    publicRoutes.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`)
    )
  ) {
    return true;
  }

  // Check for static files and API routes that are public
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".") || // Likely a file
    pathname.startsWith("/api/auth/")
  ) {
    return true;
  }

  return false;
}

/**
 * Check if a route is admin-only
 *
 * @param pathname - The URL pathname
 * @returns True if the route is admin-only, false otherwise
 */
export function isAdminRoute(pathname: string): boolean {
  const adminRoutes = ["/admin"];
  return adminRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}
