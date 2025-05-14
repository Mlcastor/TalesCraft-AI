/**
 * Browser storage utilities
 *
 * Type-safe wrappers around localStorage to support client-side persistence
 */

/**
 * Store a value in browser storage
 *
 * @param key The key to store under
 * @param value The value to store
 */
export function setBrowserStorage<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;

  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (error) {
    console.error("Error storing value in localStorage:", error);
  }
}

/**
 * Retrieve a value from browser storage
 *
 * @param key The key to retrieve
 * @returns The stored value, or null if not found
 */
export function getBrowserStorage<T>(key: string): T | null {
  if (typeof window === "undefined") return null;

  try {
    const serialized = localStorage.getItem(key);
    if (serialized === null) return null;
    return JSON.parse(serialized) as T;
  } catch (error) {
    console.error("Error retrieving value from localStorage:", error);
    return null;
  }
}

/**
 * Remove a value from browser storage
 *
 * @param key The key to remove
 */
export function removeBrowserStorage(key: string): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing value from localStorage:", error);
  }
}

/**
 * Check if browser storage is available
 *
 * @returns True if localStorage is available
 */
export function isStorageAvailable(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const testKey = "__storage_test__";
    localStorage.setItem(testKey, "test");
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}
