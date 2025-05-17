/**
 * Route utilities for handling Next.js 15 specific behaviors
 */

/**
 * Safely extracts a param value from Next.js 15 dynamic route params
 * This function handles the inconsistency between TypeScript typing
 * and Next.js 15's runtime behavior with dynamic route params.
 *
 * @param param The route parameter to handle
 * @returns The param value as a string
 */
export function getRouteParam<T>(param: T): string {
  // For Next.js 15, we would normally need to await params
  // but for TypeScript compatibility, we'll just cast to string
  // console.log('Param type:', typeof param, 'Value:', param);

  // Handle cases where the param might be Promise-like
  if (param && typeof param === "object" && "then" in param) {
    console.warn(
      "Route param is Promise-like, consider using await in Next.js 15"
    );
  }

  return String(param);
}

/**
 * Async version of getRouteParam that properly awaits the param
 * Use this when you need to await the param in Next.js 15
 *
 * @param param The route parameter to handle
 * @returns A promise that resolves to the param value as a string
 */
export async function getRouteParamAsync<T>(param: T): Promise<string> {
  try {
    // Use any to bypass TypeScript's type checking
    // This allows us to await even if TypeScript doesn't think it's a Promise
    const value = await (param as any);
    return String(value);
  } catch (error) {
    // If awaiting fails, fall back to string conversion
    return String(param);
  }
}

/**
 * Parse a param as a number, with fallback
 *
 * @param param The route parameter to parse
 * @param fallback The fallback value if parsing fails
 * @returns The param value as a number or the fallback
 */
export function getNumberParam(param: unknown, fallback: number = 0): number {
  try {
    const value = Number(getRouteParam(param));
    return isNaN(value) ? fallback : value;
  } catch (error) {
    return fallback;
  }
}
