/**
 * Base Repository class for database operations
 *
 * This class provides common functionality for all repository classes,
 * including error handling, operation execution, and transaction management.
 */

import { PrismaClient, Prisma } from "@/generated/prisma";
import {
  ConnectionError,
  DatabaseError,
  RecordNotFoundError,
  TransactionError,
} from "@/lib/errors/DatabaseError";
import { logger } from "@/lib/utils/logger";
import { prisma } from "../prisma";

/**
 * Type for performance monitoring options
 */
interface PerformanceOptions {
  /** Whether to enable performance logging */
  enableLogging?: boolean;
  /** Threshold in milliseconds for slow query logging */
  slowQueryThreshold?: number;
}

/**
 * Type for an operation with a database client
 * @template T The return type of the operation
 * @template C The client type (PrismaClient or a transaction client)
 */
type DatabaseOperation<T, C = PrismaClient> = (client: C) => Promise<T>;

// Type for the transaction client
type TransactionClient = Omit<
  PrismaClient,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
>;

export abstract class BaseRepository {
  protected prisma: PrismaClient;
  protected entityName: string;
  protected performanceOptions: PerformanceOptions;

  /**
   * Create a new BaseRepository instance
   *
   * @param entityName Name of the entity managed by this repository
   * @param options Configuration options
   */
  constructor(entityName: string, options: PerformanceOptions = {}) {
    this.prisma = prisma;
    this.entityName = entityName;
    this.performanceOptions = {
      enableLogging: true,
      slowQueryThreshold: 1000, // 1 second
      ...options,
    };
  }

  /**
   * Executes a database operation with error handling and performance monitoring
   *
   * @param operation Function that performs the database operation
   * @param operationName The name of the operation for logging
   * @returns The result of the operation
   * @throws DatabaseError if the operation fails
   */
  protected async executeOperation<T>(
    operation: DatabaseOperation<T>,
    operationName: string
  ): Promise<T> {
    const startTime = Date.now();

    try {
      const result = await operation(this.prisma);

      // Performance monitoring
      const duration = Date.now() - startTime;
      if (
        this.performanceOptions.enableLogging &&
        duration > this.performanceOptions.slowQueryThreshold!
      ) {
        logger.warn(
          `Slow query detected: ${this.entityName}.${operationName} took ${duration}ms`,
          {
            context: "database",
            metadata: {
              entity: this.entityName,
              operation: operationName,
              duration,
            },
          }
        );
      }

      return result;
    } catch (error) {
      logger.error(`Database error in ${this.entityName}.${operationName}`, {
        context: "database",
        metadata: {
          entity: this.entityName,
          operation: operationName,
          error,
        },
      });

      if (error instanceof DatabaseError) {
        throw error;
      }

      throw new DatabaseError(
        `Error executing ${operationName} on ${this.entityName}`,
        {
          cause: error,
          entity: this.entityName,
        }
      );
    }
  }

  /**
   * Executes a transaction with multiple operations
   *
   * @param transactionFn Function that receives a transaction client and performs the operations
   * @returns The result of the transaction
   * @throws TransactionError if the transaction fails
   */
  protected async executeTransaction<T>(
    transactionFn: (tx: TransactionClient) => Promise<T>
  ): Promise<T> {
    const startTime = Date.now();

    try {
      // Execute the transaction
      const result = await this.prisma.$transaction((tx) =>
        transactionFn(tx as TransactionClient)
      );

      // Performance monitoring
      const duration = Date.now() - startTime;
      if (
        this.performanceOptions.enableLogging &&
        duration > this.performanceOptions.slowQueryThreshold!
      ) {
        logger.warn(
          `Slow transaction detected in ${this.entityName} took ${duration}ms`,
          {
            context: "database",
            metadata: {
              entity: this.entityName,
              duration,
            },
          }
        );
      }

      return result;
    } catch (error) {
      logger.error(`Transaction error in ${this.entityName}`, {
        context: "database",
        metadata: {
          entity: this.entityName,
          error,
        },
      });

      if (error instanceof DatabaseError) {
        throw error;
      }

      throw new TransactionError(`Transaction failed in ${this.entityName}`, {
        cause: error,
        entity: this.entityName,
      });
    }
  }

  /**
   * Check if the returned value exists, and throw a RecordNotFoundError if it doesn't
   *
   * @param value The value to check
   * @param id Optional ID of the entity
   * @returns The value if it exists
   * @throws RecordNotFoundError if the value is null or undefined
   */
  protected ensureExists<T>(
    value: T | null | undefined,
    id?: string | number
  ): T {
    if (value === null || value === undefined) {
      throw new RecordNotFoundError(this.entityName, id);
    }
    return value;
  }
}
