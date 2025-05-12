/**
 * Text Formatting Utilities
 *
 * This file provides common formatting functions for text manipulation.
 * These utilities can be used throughout the application for consistent
 * text formatting and display.
 */

/**
 * Truncates a string to a maximum length and adds an ellipsis if needed
 *
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}

/**
 * Formats a date to a readable string
 *
 * @param date - The date to format
 * @param includeTime - Whether to include the time
 * @returns Formatted date string
 */
export function formatDate(date: Date | string, includeTime = false): string {
  if (!date) return "";

  const dateObj = typeof date === "string" ? new Date(date) : date;

  if (includeTime) {
    return dateObj.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Capitalizes the first letter of a string
 *
 * @param text - The text to capitalize
 * @returns Text with first letter capitalized
 */
export function capitalizeFirstLetter(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Note: More formatting utilities will be added as needed during the migration process
