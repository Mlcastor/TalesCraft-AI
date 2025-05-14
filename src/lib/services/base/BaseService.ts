import { logger } from "@/lib/utils/logger";
import { TransactionError, ValidationError } from "@/lib/errors/DatabaseError";
import { BaseRepository } from "@/lib/db/base/BaseRepository";

// Import type for transaction client from BaseRepository
type TransactionClient = Omit<
  import("@/generated/prisma").PrismaClient,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
>;

/**
 * Base service class that provides common functionality for all service classes
 * Services handle business logic and orchestrate repository operations
 */
export abstract class BaseService {
  /**
   * The name of the service
   */
  protected readonly serviceName: string;

  /**
   * Repository dependencies for this service
   */
  protected repositories: Record<string, BaseRepository>;

  /**
   * Create a new BaseService
   * @param serviceName The name of the service
   * @param repositories Repository dependencies for this service
   */
  constructor(
    serviceName: string,
    repositories: Record<string, BaseRepository> = {}
  ) {
    this.serviceName = serviceName;
    this.repositories = repositories;
  }

  /**
   * Execute a service operation with logging
   *
   * @param operation The operation to execute
   * @param operationName The name of the operation for logging
   * @returns The result of the operation
   */
  protected async executeOperation<T>(
    operation: () => Promise<T>,
    operationName: string
  ): Promise<T> {
    const startTime = Date.now();

    try {
      logger.debug(`Executing ${this.serviceName}.${operationName}`, {
        context: "service",
        metadata: {
          service: this.serviceName,
          operation: operationName,
        },
      });

      const result = await operation();

      const duration = Date.now() - startTime;
      if (duration > 500) {
        // Log slow service operations over 500ms
        logger.warn(
          `Slow service operation: ${this.serviceName}.${operationName} took ${duration}ms`,
          {
            context: "service",
            metadata: {
              service: this.serviceName,
              operation: operationName,
              duration,
            },
          }
        );
      }

      return result;
    } catch (error) {
      logger.error(`Error in ${this.serviceName}.${operationName}`, {
        context: "service",
        metadata: {
          service: this.serviceName,
          operation: operationName,
          error,
        },
      });

      throw error;
    }
  }

  /**
   * Execute operations within a transaction that spans multiple repositories
   *
   * @param fn Function containing operations to perform within a transaction
   * @param options Options for transaction execution
   * @returns Result of the transaction
   * @throws TransactionError if the transaction fails
   */
  protected async withTransaction<T>(
    fn: (tx: TransactionClient) => Promise<T>,
    options: {
      primaryRepository?: string;
    } = {}
  ): Promise<T> {
    // Determine which repository to use for the transaction
    const primaryRepoName =
      options.primaryRepository || Object.keys(this.repositories)[0];
    const primaryRepo = this.repositories[primaryRepoName];

    if (!primaryRepo) {
      throw new TransactionError(
        `Cannot execute transaction: No repository found for ${primaryRepoName}`,
        { entity: this.serviceName }
      );
    }

    try {
      logger.debug(`Starting transaction in ${this.serviceName}`, {
        context: "service",
        metadata: {
          service: this.serviceName,
          primaryRepository: primaryRepoName,
        },
      });

      // Execute the transaction using the primary repository's executeTransaction method
      return await (primaryRepo as any).executeTransaction(
        async (tx: TransactionClient) => {
          return await fn(tx);
        }
      );
    } catch (error) {
      logger.error(`Transaction failed in ${this.serviceName}`, {
        context: "service",
        metadata: {
          service: this.serviceName,
          primaryRepository: primaryRepoName,
          error,
        },
      });

      throw new TransactionError(
        `Transaction failed in ${this.serviceName}: ${
          error instanceof Error ? error.message : String(error)
        }`,
        { cause: error, entity: this.serviceName }
      );
    }
  }

  /**
   * Validate input data against a schema
   *
   * @param data The data to validate
   * @param schema The validation schema
   * @param options Options for validation
   * @throws ValidationError if validation fails
   */
  protected async validateData<T>(
    data: T,
    schema: { validate: (data: T, options?: any) => Promise<T> },
    options: { abortEarly?: boolean; context?: string } = {}
  ): Promise<T> {
    try {
      return await schema.validate(data, {
        abortEarly: options.abortEarly ?? false,
        context: options.context,
      });
    } catch (error) {
      if (error instanceof Error && "inner" in error) {
        // Handle Yup validation errors - convert them to our ValidationError format
        const errors: Record<string, string> = {};

        // Assuming error.inner is an array of validation errors
        (error as any).inner?.forEach((validationError: any) => {
          if (validationError.path && validationError.message) {
            errors[validationError.path] = validationError.message;
          }
        });

        throw new ValidationError(
          error.message || "Validation failed",
          errors,
          { entity: this.serviceName }
        );
      }

      // For other validation libraries or custom validation
      if (error instanceof Error) {
        throw new ValidationError(
          error.message || "Validation failed",
          {},
          { entity: this.serviceName, cause: error }
        );
      }

      throw error;
    }
  }

  /**
   * Get a repository by name with type safety
   *
   * @param name The name of the repository
   * @returns The repository instance
   * @throws Error if the repository is not found
   */
  protected getRepository<T extends BaseRepository>(name: string): T {
    const repository = this.repositories[name] as T;

    if (!repository) {
      throw new Error(`Repository '${name}' not found in ${this.serviceName}`);
    }

    return repository;
  }
}
