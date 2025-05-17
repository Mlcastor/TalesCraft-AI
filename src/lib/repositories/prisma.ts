import { PrismaClient, Prisma } from "@/generated/prisma";
import { ConnectionError } from "@/lib/errors/DatabaseError";
import { logger } from "@/lib/utils/logger";

/**
 * PrismaClient is attached to the `global` object in development to prevent
 * exhausting your database connection limit.
 * Learn more: https://pris.ly/d/help/next-js-best-practices
 */

// Add prisma to the NodeJS global type
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

/**
 * Create a Prisma client with added connection management
 */
function createPrismaClient(): PrismaClient {
  const client = new PrismaClient({
    log: ["error"], // Only log errors regardless of environment
  });

  // Set up event handlers for development logging
  if (process.env.NODE_ENV === "development") {
    // Custom logger middleware for errors only
    client.$use(async (params, next) => {
      try {
        return await next(params);
      } catch (error) {
        logger.error(`Prisma Error: ${params.model}.${params.action}`, {
          context: "prisma",
          metadata: {
            params,
            error,
          },
        });
        throw error;
      }
    });
  }

  return client;
}

// Prevent multiple instances of Prisma Client in development
export const prisma = global.prisma || createPrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

/**
 * Handles connecting to the database with error handling
 * @returns A Promise that resolves when the connection is successful
 * @throws ConnectionError if the connection fails
 */
export async function connectDatabase(): Promise<void> {
  try {
    logger.info("Connecting to database...", { context: "prisma" });
    await prisma.$connect();
    logger.info("Database connection established", { context: "prisma" });
  } catch (error) {
    logger.error("Failed to connect to database", {
      context: "prisma",
      metadata: { error },
    });
    throw new ConnectionError("Failed to connect to database", {
      cause: error,
    });
  }
}

/**
 * Handles disconnecting from the database with error handling
 */
export async function disconnectDatabase(): Promise<void> {
  try {
    logger.info("Disconnecting from database...", { context: "prisma" });
    await prisma.$disconnect();
    logger.info("Database connection closed", { context: "prisma" });
  } catch (error) {
    logger.error("Error disconnecting from database", {
      context: "prisma",
      metadata: { error },
    });
  }
}

/**
 * Checks if the database connection is healthy
 * @returns A Promise that resolves to the health status
 */
export async function checkDatabaseHealth(): Promise<{
  isHealthy: boolean;
  message?: string;
}> {
  try {
    // Execute a simple query to check connection
    await prisma.$queryRaw`SELECT 1`;
    return { isHealthy: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown database error";
    return {
      isHealthy: false,
      message,
    };
  }
}
