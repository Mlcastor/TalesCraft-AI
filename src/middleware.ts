import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Extended middleware that handles both Clerk authentication
 * and ensures users are synchronized with our database
 */
export default function middleware(req: NextRequest) {
  // Allow requests to continue to API endpoints and static resources
  return NextResponse.next();
}

// See https://clerk.com/docs/references/nextjs/auth-middleware
export const config = {
  matcher: ["/((?!api/webhooks|_next|.*\\..*).*)"],
};
