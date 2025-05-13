/**
 * Authentication Middleware Utilities
 *
 * This module provides functions for handling authentication in Next.js middleware.
 */

import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/utils/authUtils";

// Session cookie name (make sure it matches what's used in auth-actions.ts)
export const SESSION_COOKIE_NAME = "auth_session";

// Define public routes that don't require authentication
export const publicRoutes = [
  "/",
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

// Define routes that require authentication
export const protectedRoutes = [
  "/profile",
  "/game",
  "/game/select",
  "/characters",
  "/characters/create",
  "/player-hub",
];

// Define admin-only routes
export const adminRoutes = ["/admin"];

/**
 * Check if a route is public (doesn't require authentication)
 *
 * @param pathname - The URL pathname
 * @returns True if the route is public, false otherwise
 */
export function isPublicRoute(pathname: string): boolean {
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
  return adminRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}

/**
 * Verify authentication from a request
 *
 * @param request - The Next.js request object
 * @returns An object with authentication status and optional payload
 */
export async function verifyAuth(request: NextRequest) {
  // Get token from cookies
  const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME);

  if (!sessionCookie?.value) {
    return { authenticated: false };
  }

  try {
    // Verify the token
    const payload = await verifyToken(sessionCookie.value);
    return {
      authenticated: true,
      payload,
    };
  } catch (error) {
    return { authenticated: false };
  }
}

/**
 * Handle unauthenticated requests
 *
 * @param request - The Next.js request object
 * @returns Response redirecting to login or returning 401 for API routes
 */
export function handleUnauthenticated(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isApiRoute = pathname.startsWith("/api/");

  // For API routes, return 401 Unauthorized
  if (isApiRoute) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Authentication required",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  // For page routes, redirect to login with the original URL as a redirect parameter
  const url = request.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("redirect", encodeURIComponent(pathname));

  return NextResponse.redirect(url);
}

/**
 * Handle unauthorized requests (authenticated but insufficient permissions)
 *
 * @param request - The Next.js request object
 * @returns Response redirecting to unauthorized page or returning 403 for API routes
 */
export function handleUnauthorized(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isApiRoute = pathname.startsWith("/api/");

  // For API routes, return 403 Forbidden
  if (isApiRoute) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "You don't have permission to access this resource",
      }),
      {
        status: 403,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  // For page routes, redirect to unauthorized page
  const url = request.nextUrl.clone();
  url.pathname = "/unauthorized";

  return NextResponse.redirect(url);
}
