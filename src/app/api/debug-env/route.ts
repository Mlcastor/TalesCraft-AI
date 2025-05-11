/**
 * API route for debugging environment variables
 * Only enabled in development mode
 */
import { NextResponse } from "next/server";

export async function GET() {
  // Only allow this in development mode
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "This endpoint is only available in development mode" },
      { status: 403 }
    );
  }

  // Check for the GROQ API key (don't return the actual value for security)
  const groqKeyExists = !!process.env.GROQ_API_KEY;
  const groqKeyLength = process.env.GROQ_API_KEY?.length || 0;

  // Get a list of all environment variables (excluding sensitive ones)
  const envKeys = Object.keys(process.env).filter(
    (key) => !key.includes("SECRET") && !key.includes("KEY")
  );

  return NextResponse.json({
    environment: process.env.NODE_ENV,
    groqKeyExists,
    groqKeyLength,
    envKeys,
    message: groqKeyExists
      ? "GROQ_API_KEY is configured correctly"
      : "GROQ_API_KEY is missing or empty",
  });
}
