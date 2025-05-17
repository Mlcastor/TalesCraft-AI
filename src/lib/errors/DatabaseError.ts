/**
 * Custom error classes for database operations
 *
 * These error classes provide standardized error handling for database operations
 * throughout the application.
 */

/**
 * Base class for all database-related errors
 * Extends the standard Error class with additional properties
 */
export class DatabaseError extends Error {
  /** Original error that caused this error */
  public cause?: unknown;

  /** Entity related to this error (e.g., 'User', 'GameState') */
  public entity?: string;

  /** Related ID (if applicable) */
  public id?: string | number;

  /** Timestamp when the error occurred */
  public timestamp: Date;

  constructor(
    message: string,
    options?: {
      cause?: unknown;
      entity?: string;
      id?: string | number;
    }
  ) {
    super(message);
    this.name = this.constructor.name;
    this.cause = options?.cause;
    this.entity = options?.entity;
    this.id = options?.id;
    this.timestamp = new Date();

    // Ensure proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
}

/**
 * Error thrown when a record is not found in the database
 */
export class RecordNotFoundError extends DatabaseError {
  constructor(entity: string, id?: string | number, cause?: unknown) {
    const message = id
      ? `${entity} with ID ${id} not found`
      : `${entity} not found`;

    super(message, { cause, entity, id });

    // Ensure proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, RecordNotFoundError.prototype);
  }
}

/**
 * Error thrown when validation fails for database input
 */
export class ValidationError extends DatabaseError {
  /** Validation details */
  public details: Record<string, string>;

  constructor(
    message: string,
    details: Record<string, string> = {},
    options?: {
      cause?: unknown;
      entity?: string;
    }
  ) {
    super(message, options);
    this.details = details;

    // Ensure proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

/**
 * Error thrown when a transaction fails
 */
export class TransactionError extends DatabaseError {
  constructor(
    message: string,
    options?: {
      cause?: unknown;
      entity?: string;
    }
  ) {
    super(message, options);

    // Ensure proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, TransactionError.prototype);
  }
}

/**
 * Error thrown when a database connection fails
 */
export class ConnectionError extends DatabaseError {
  constructor(
    message: string,
    options?: {
      cause?: unknown;
    }
  ) {
    super(message, options);

    // Ensure proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, ConnectionError.prototype);
  }
}
