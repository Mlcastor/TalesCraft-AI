import { logger } from "@/lib/utils/logger";
import { ValidationError } from "@/lib/errors/DatabaseError";

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
   * Create a new BaseService
   * @param serviceName The name of the service
   */
  constructor(serviceName: string) {
    this.serviceName = serviceName;
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
}
