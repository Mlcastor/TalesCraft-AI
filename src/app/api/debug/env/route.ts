/**
 * Environment Variable Debug API
 *
 * This API endpoint helps diagnose environment variable loading issues,
 * particularly with Next.js environment variable accessibility.
 *
 * IMPORTANT: This endpoint does NOT expose actual environment variable values
 * for security reasons - it only indicates if they exist and their length.
 */

import { NextResponse } from "next/server";

/**
 * GET handler for environment variable debugging
 */
export async function GET() {
  // Only enable this endpoint in development mode
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "This endpoint is only available in development mode" },
      { status: 403 }
    );
  }

  // Collect information about environment variables
  // We don't expose the actual values, just presence and length
  const envInfo = {
    NODE_ENV: process.env.NODE_ENV,
    envVariables: {
      // API keys (presence and length only)
      GROQ_API_KEY: process.env.GROQ_API_KEY
        ? { exists: true, length: process.env.GROQ_API_KEY.length }
        : { exists: false },
      OPENAI_API_KEY: process.env.OPENAI_API_KEY
        ? { exists: true, length: process.env.OPENAI_API_KEY.length }
        : { exists: false },

      // Next.js public variables
      NEXT_PUBLIC_GROQ_API_KEY: process.env.NEXT_PUBLIC_GROQ_API_KEY
        ? { exists: true, length: process.env.NEXT_PUBLIC_GROQ_API_KEY.length }
        : { exists: false },
      NEXT_PUBLIC_OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY
        ? {
            exists: true,
            length: process.env.NEXT_PUBLIC_OPENAI_API_KEY.length,
          }
        : { exists: false },

      // Database URLs (presence only, no length for security)
      DATABASE_URL: process.env.DATABASE_URL
        ? { exists: true }
        : { exists: false },
    },

    // Information about environment
    runtimeInfo: {
      isServerComponent: true,
      timestamp: new Date().toISOString(),
    },
  };

  return NextResponse.json(envInfo);
}
