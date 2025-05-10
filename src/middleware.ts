import { clerkMiddleware } from "@clerk/nextjs/server";

/**
 * This middleware handles Clerk authentication for your application.
 * See https://clerk.com/docs/references/nextjs/auth-middleware for more information.
 */
export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files unless found in search params
    "/((?!_next|.*\\..*).)*",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
