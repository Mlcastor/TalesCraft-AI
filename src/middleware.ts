import { NextResponse, type NextRequest } from "next/server";
import {
  isPublicRoute,
  isAdminRoute,
  verifyToken,
} from "@/lib/auth/edgeAuthUtils";

// Session cookie name (make sure it matches what's used in auth-actions.ts)
const SESSION_COOKIE_NAME = "auth_session";

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
  const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME);

  if (!sessionCookie?.value) {
    return handleUnauthenticated(request);
  }

  try {
    // Verify token using edge-compatible verifyToken
    const payload = await verifyToken(sessionCookie.value);

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
  } catch (error) {
    // Token verification failed, redirect to login
    return handleUnauthenticated(request);
  }
}

/**
 * Handle unauthenticated requests
 *
 * @param request - The Next.js request object
 * @returns Response redirecting to login or returning 401 for API routes
 */
function handleUnauthenticated(request: NextRequest) {
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
function handleUnauthorized(request: NextRequest) {
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

// Configure which paths this middleware will run on
export const config = {
  matcher: [
    // Apply to all routes except static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
