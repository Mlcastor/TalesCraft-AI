/**
 * Validation Utilities
 *
 * This file provides common validation functions for data validation.
 * These utilities can be used throughout the application for consistent
 * input validation and error handling.
 */

/**
 * Validates that a string is not empty
 *
 * @param value - The string to validate
 * @returns Whether the string is not empty
 */
export function isNotEmpty(value: string | null | undefined): boolean {
  return !!value && value.trim().length > 0;
}

/**
 * Validates that a value is within a specific length range
 *
 * @param value - The string to validate
 * @param minLength - Minimum required length (inclusive)
 * @param maxLength - Maximum allowed length (inclusive)
 * @returns Whether the string length is within range
 */
export function isValidLength(
  value: string,
  minLength = 0,
  maxLength = Number.MAX_SAFE_INTEGER
): boolean {
  if (!value) return minLength === 0;
  const length = value.trim().length;
  return length >= minLength && length <= maxLength;
}

/**
 * Validates that a value is a valid email address
 *
 * @param email - The email to validate
 * @returns Whether the email is valid
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Creates a validation error object
 *
 * @param field - The field with the error
 * @param message - The error message
 * @returns Validation error object
 */
export function validationError(field: string, message: string) {
  return {
    field,
    message,
  };
}

// Note: More validation utilities will be added as needed during the migration process
