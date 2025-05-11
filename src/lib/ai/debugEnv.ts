/**
 * Debug utility to check environment variables
 */

export function debugEnvironmentVariables() {
  // Check if we're on the server side
  if (typeof window === "undefined") {
    console.log("========= SERVER ENVIRONMENT VARIABLES DEBUG =========");
    console.log("GROQ_API_KEY exists:", !!process.env.GROQ_API_KEY);
    console.log("GROQ_API_KEY length:", process.env.GROQ_API_KEY?.length || 0);
    console.log("NODE_ENV:", process.env.NODE_ENV);
    console.log(
      "Process env keys:",
      Object.keys(process.env)
        .filter((key) => !key.includes("SECRET") && !key.includes("KEY"))
        .join(", ")
    );
    console.log("=====================================================");
  }
}
