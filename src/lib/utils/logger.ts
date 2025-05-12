/**
 * Logger utility for consistent logging across the application
 * Provides methods for different log levels and supports structured logging
 */

// Define log levels
type LogLevel = "debug" | "info" | "warn" | "error";

// Options for logging
interface LogOptions {
  /** Context of the log (e.g., 'database', 'api', 'auth') */
  context?: string;
  /** Additional metadata for the log entry */
  metadata?: Record<string, unknown>;
}

/**
 * Get current timestamp in ISO format
 */
const getTimestamp = (): string => new Date().toISOString();

/**
 * Format error objects for logging
 * @param error The error to format
 * @returns A structured representation of the error
 */
const formatError = (error: unknown): Record<string, unknown> => {
  if (error instanceof Error) {
    return {
      message: error.message,
      name: error.name,
      stack: error.stack,
      ...("cause" in error ? { cause: formatError(error.cause) } : {}),
    };
  }

  return {
    raw: typeof error === "object" ? JSON.stringify(error) : String(error),
  };
};

/**
 * Logger class for structured logging
 */
class Logger {
  private env: string;

  constructor() {
    this.env = process.env.NODE_ENV || "development";
  }

  /**
   * Log a debug message
   * @param message The message to log
   * @param options Additional options for the log entry
   */
  debug(message: string, options?: LogOptions): void {
    this.log("debug", message, options);
  }

  /**
   * Log an info message
   * @param message The message to log
   * @param options Additional options for the log entry
   */
  info(message: string, options?: LogOptions): void {
    this.log("info", message, options);
  }

  /**
   * Log a warning message
   * @param message The message to log
   * @param options Additional options for the log entry
   */
  warn(message: string, options?: LogOptions): void {
    this.log("warn", message, options);
  }

  /**
   * Log an error message
   * @param message The message to log
   * @param options Additional options for the log entry
   */
  error(message: string, options?: LogOptions): void {
    this.log("error", message, options);
  }

  /**
   * Internal method to log a message with the specified level
   * @param level The log level
   * @param message The message to log
   * @param options Additional options for the log entry
   */
  private log(level: LogLevel, message: string, options?: LogOptions): void {
    const timestamp = getTimestamp();
    const context = options?.context || "app";
    const metadata = options?.metadata || {};

    // Format the log entry
    const logEntry = {
      timestamp,
      level,
      context,
      message,
      ...metadata,
    };

    // In development, use pretty console logs
    if (this.env === "development") {
      const colorize = (text: string): string => {
        const colors = {
          debug: "\x1b[34m", // blue
          info: "\x1b[32m", // green
          warn: "\x1b[33m", // yellow
          error: "\x1b[31m", // red
          reset: "\x1b[0m", // reset
        };
        return `${colors[level] || ""}${text}${colors.reset}`;
      };

      console.log(
        `${timestamp} ${colorize(
          level.toUpperCase()
        )} [${context}]: ${message}`,
        Object.keys(metadata).length ? metadata : ""
      );
    } else {
      // In production, output structured JSON logs
      console.log(JSON.stringify(logEntry));
    }
  }
}

// Export a singleton instance of the logger
export const logger = new Logger();
