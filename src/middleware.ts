import { NextResponse, type NextRequest } from "next/server";
import {
  verifyAuth,
  isPublicRoute,
  isAdminRoute,
  handleUnauthenticated,
  handleUnauthorized,
} from "@/lib/auth/middleware";

/**
 * Next.js middleware to handle authentication and authorization for all routes
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes to proceed without authentication
  if (isPublicRoute(pathname)) {
    return NextResponse.next();
  }

  // Verify authentication
  const { authenticated, payload } = await verifyAuth(request);

  // If not authenticated, redirect to login
  if (!authenticated) {
    return handleUnauthenticated(request);
  }

  // If trying to access admin routes, check for admin role
  if (isAdminRoute(pathname)) {
    // If we have payload and user role, check for admin access
    if (payload && payload.role === "admin") {
      return NextResponse.next();
    }
    // Not an admin, reject access
    return handleUnauthorized(request);
  }

  // User is authenticated and has appropriate permissions
  return NextResponse.next();
}

// Configure which paths this middleware will run on
export const config = {
  matcher: [
    // Apply to all routes except static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
