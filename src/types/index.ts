/**
 * Types Index
 *
 * Centralizes all type definitions for the application.
 */

// Import and re-export types in namespaces to avoid conflicts
import * as GameTypes from "./game";
import * as DatabaseTypes from "./database";
import * as NarrativeTypes from "./narrative";
import * as EngineTypes from "./engine";
import * as RepositoryTypes from "./repositories";
import * as UITypes from "./ui";
import * as AITypes from "./ai";
import * as AuthTypes from "./authTypes";

// Export namespaces to avoid naming conflicts
export {
  GameTypes,
  DatabaseTypes,
  NarrativeTypes,
  EngineTypes,
  RepositoryTypes,
  UITypes,
  AITypes,
  AuthTypes,
};

// Re-export specific types that don't have conflicts
// Add specific exports as needed for convenience

/**
 * Error types
 */

// Base error for the application
export class AppError extends Error {
  public code: string;
  public statusCode: number;
  public context?: Record<string, any>;

  constructor(
    message: string,
    code: string,
    statusCode: number = 500,
    context?: Record<string, any>
  ) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.statusCode = statusCode;
    this.context = context;

    // Ensures proper stack trace in modern Node.js
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Database-related errors
export class DatabaseError extends AppError {
  constructor(
    message: string,
    code: string = "DATABASE_ERROR",
    statusCode: number = 500,
    context?: Record<string, any>
  ) {
    super(message, code, statusCode, context);
  }
}

// Repository layer errors
export class RepositoryError extends AppError {
  constructor(
    message: string,
    code: string = "REPOSITORY_ERROR",
    statusCode: number = 500,
    context?: Record<string, any>
  ) {
    super(message, code, statusCode, context);
  }
}

// Service layer errors
export class ServiceError extends AppError {
  constructor(
    message: string,
    code: string = "SERVICE_ERROR",
    statusCode: number = 500,
    context?: Record<string, any>
  ) {
    super(message, code, statusCode, context);
  }
}

// Game engine errors
export class GameEngineError extends AppError {
  constructor(
    message: string,
    code: string = "GAME_ENGINE_ERROR",
    statusCode: number = 500,
    context?: Record<string, any>
  ) {
    super(message, code, statusCode, context);
  }
}

// AI service errors
export class AIServiceError extends AppError {
  constructor(
    message: string,
    code: string = "AI_SERVICE_ERROR",
    statusCode: number = 500,
    context?: Record<string, any>
  ) {
    super(message, code, statusCode, context);
  }
}

// Authentication errors
export class AuthError extends AppError {
  constructor(
    message: string,
    code: string = "AUTH_ERROR",
    statusCode: number = 401,
    context?: Record<string, any>
  ) {
    super(message, code, statusCode, context);
  }
}

// Validation errors
export class ValidationError extends AppError {
  public validationErrors: Record<string, string[]>;

  constructor(
    message: string,
    validationErrors: Record<string, string[]>,
    code: string = "VALIDATION_ERROR",
    statusCode: number = 400
  ) {
    super(message, code, statusCode, { validationErrors });
    this.validationErrors = validationErrors;
  }
}
