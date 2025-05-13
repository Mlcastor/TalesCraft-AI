/**
 * Logger Utility
 *
 * Provides a consistent logging interface for the application.
 * In development, logs to console.
 * In production, could be extended to log to external services.
 */

export interface LogOptions {
  context?: string;
  metadata?: Record<string, any>;
  error?: Error | string;
}

/**
 * Log levels for the application
 */
export enum LogLevel {
  DEBUG = "debug",
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

/**
 * Main logger class
 */
class Logger {
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV !== "production";
  }

  /**
   * Log a debug message
   *
   * @param message - The message to log
   * @param options - Additional logging options
   */
  debug(message: string, options?: LogOptions): void {
    this.log(LogLevel.DEBUG, message, options);
  }

  /**
   * Log an info message
   *
   * @param message - The message to log
   * @param options - Additional logging options
   */
  info(message: string, options?: LogOptions): void {
    this.log(LogLevel.INFO, message, options);
  }

  /**
   * Log a warning message
   *
   * @param message - The message to log
   * @param options - Additional logging options
   */
  warn(message: string, options?: LogOptions): void {
    this.log(LogLevel.WARN, message, options);
  }

  /**
   * Log an error message
   *
   * @param message - The message to log
   * @param options - Additional logging options
   */
  error(message: string, options?: LogOptions): void {
    this.log(LogLevel.ERROR, message, options);
  }

  /**
   * Generic log method
   *
   * @param level - The log level
   * @param message - The message to log
   * @param options - Additional logging options
   */
  private log(level: LogLevel, message: string, options?: LogOptions): void {
    if (!this.shouldLog(level)) {
      return;
    }

    const { context, metadata, error } = options || {};
    const timestamp = new Date().toISOString();

    // Format the log message
    const formattedMessage = this.formatMessage(
      level,
      message,
      timestamp,
      context
    );

    // Log to the appropriate console method
    switch (level) {
      case LogLevel.DEBUG:
        console.debug(formattedMessage, metadata ? metadata : "", error || "");
        break;
      case LogLevel.INFO:
        console.info(formattedMessage, metadata ? metadata : "", error || "");
        break;
      case LogLevel.WARN:
        console.warn(formattedMessage, metadata ? metadata : "", error || "");
        break;
      case LogLevel.ERROR:
        console.error(formattedMessage, metadata ? metadata : "", error || "");
        break;
      default:
        console.log(formattedMessage, metadata ? metadata : "", error || "");
    }

    // In production, here you would add logic to send logs to an external service
    if (!this.isDevelopment) {
      // TODO: Implement production logging service
    }
  }

  /**
   * Format a log message
   */
  private formatMessage(
    level: LogLevel,
    message: string,
    timestamp: string,
    context?: string
  ): string {
    return `[${timestamp}] [${level.toUpperCase()}] ${
      context ? `[${context}] ` : ""
    }${message}`;
  }

  /**
   * Determine if a message should be logged based on environment and level
   */
  private shouldLog(level: LogLevel): boolean {
    // In development, log everything
    if (this.isDevelopment) {
      return true;
    }

    // In production, only log info, warn, and error by default
    return level !== LogLevel.DEBUG;
  }
}

// Export a singleton instance
export const logger = new Logger();
