/**
 * Authentication Service
 *
 * This service provides the core functionality for user authentication,
 * including registration, login, logout, and session management.
 */

import {
  User,
  Session,
  LoginCredentials,
  RegistrationData,
  AuthResult,
  PasswordResetRequest,
  PasswordReset,
  EmailVerification,
} from "@/types/authTypes";
import {
  generateToken,
  verifyToken,
  hashPassword,
  verifyPassword,
  generateRandomToken,
  calculateExpiryDate,
  sanitizeUser,
} from "@/lib/utils/authUtils";
import { logger } from "@/lib/utils/logger";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/lib/repositories/prisma";
import { userRepository } from "@/lib/repositories/user";
import { ValidationError } from "@/lib/errors/DatabaseError";
import { z } from "zod";

// Validation schemas
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
});

const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  name: z.string().min(2, "Name must be at least 2 characters"),
});

const passwordResetRequestSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const passwordResetSchema = z
  .object({
    token: z.string().min(1, "Token is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

/**
 * Register a new user
 *
 * @param userData Registration data including email, password, and name
 * @returns Result of the registration operation
 */
export async function registerUser(
  userData: RegistrationData
): Promise<AuthResult> {
  try {
    // Validate input data
    const validatedData = registerSchema.parse(userData);

    // Check if user already exists
    const existingUser = await userRepository.findUserByEmail(
      validatedData.email
    );
    if (existingUser) {
      return {
        success: false,
        message: "A user with this email already exists",
      };
    }

    // Hash the password
    const hashedPassword = await hashPassword(validatedData.password);

    // Create verification token
    const verificationToken = generateRandomToken();
    const tokenExpires = calculateExpiryDate(1); // 1 day expiry

    // Create the user in the database
    const user = await userRepository.createUser({
      email: validatedData.email,
      name: validatedData.name,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpires: tokenExpires,
      isActive: true,
      preferences: {},
    });

    // TODO: Send verification email

    logger.info(`User registered successfully: ${user.id}`, {
      context: "auth",
      metadata: { email: user.email },
    });

    return {
      success: true,
      message:
        "Registration successful. Please check your email to verify your account.",
      user: sanitizeUser(user),
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const validationErrors = error.errors
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join(", ");
      logger.warn(`Validation error during registration: ${validationErrors}`, {
        context: "auth",
      });

      return {
        success: false,
        message: `Validation error: ${validationErrors}`,
      };
    }

    if (error instanceof ValidationError) {
      logger.warn(
        `Database validation error during registration: ${error.message}`,
        {
          context: "auth",
        }
      );

      return {
        success: false,
        message: error.message,
      };
    }

    logger.error(
      `Registration error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        context: "auth",
        metadata: { email: userData.email },
      }
    );

    return {
      success: false,
      message: "An error occurred during registration. Please try again.",
    };
  }
}

/**
 * Log in a user
 *
 * @param credentials Login credentials including email and password
 * @returns Result of the login operation, including the user and token if successful
 */
export async function loginUser(
  credentials: LoginCredentials
): Promise<AuthResult> {
  try {
    // Validate input data
    const validatedData = loginSchema.parse(credentials);

    // Find the user by email
    const user = await userRepository.findUserByEmail(validatedData.email);

    if (!user) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    // Check if user is active
    if (!user.isActive) {
      return {
        success: false,
        message: "Your account has been deactivated. Please contact support.",
      };
    }

    // For TypeScript safety, we need to ensure password exists
    if (!user.password) {
      logger.error(`User ${user.id} has no password set`, {
        context: "auth",
      });

      return {
        success: false,
        message: "Authentication error. Please contact support.",
      };
    }

    // Verify password
    const isValidPassword = await verifyPassword(
      validatedData.password,
      user.password
    );

    if (!isValidPassword) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    // Create a new session
    const sessionId = uuidv4();
    const token = await generateToken(user, sessionId);
    const expires = calculateExpiryDate(validatedData.rememberMe ? 30 : 7);

    // Update user's last login time
    await userRepository.updateLastLogin(user.id);

    // Construct the session object
    const session: Session = {
      id: sessionId,
      userId: user.id,
      expires,
      token,
      user: sanitizeUser(user),
    };

    logger.info(`User logged in successfully: ${user.id}`, {
      context: "auth",
      metadata: { email: user.email },
    });

    return {
      success: true,
      message: "Login successful",
      user: sanitizeUser(user),
      token,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const validationErrors = error.errors
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join(", ");

      return {
        success: false,
        message: `Validation error: ${validationErrors}`,
      };
    }

    logger.error(
      `Login error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        context: "auth",
        metadata: { email: credentials.email },
      }
    );

    return {
      success: false,
      message: "An error occurred during login. Please try again.",
    };
  }
}

/**
 * Request a password reset
 *
 * @param data Password reset request data including email
 * @returns Result of the password reset request operation
 */
export async function requestPasswordReset(
  data: PasswordResetRequest
): Promise<AuthResult> {
  try {
    // Validate input data
    const validatedData = passwordResetRequestSchema.parse(data);

    // Find the user by email
    const user = await userRepository.findUserByEmail(validatedData.email);

    // Always return success even if the user doesn't exist for security reasons
    if (!user || !user.isActive) {
      logger.info(
        `Password reset requested for non-existent or inactive user: ${validatedData.email}`,
        {
          context: "auth",
        }
      );

      return {
        success: true,
        message:
          "If your email is registered, you will receive password reset instructions.",
      };
    }

    // Generate reset token and expiry
    const resetToken = generateRandomToken();
    const tokenExpires = calculateExpiryDate(1); // 1 day expiry

    // Store token in database
    await userRepository.updateUser(user.id, {
      resetPasswordToken: resetToken,
      resetPasswordExpires: tokenExpires,
    });

    // TODO: Send password reset email

    logger.info(`Password reset requested for user: ${user.id}`, {
      context: "auth",
      metadata: { email: user.email },
    });

    return {
      success: true,
      message:
        "If your email is registered, you will receive password reset instructions.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const validationErrors = error.errors
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join(", ");

      return {
        success: false,
        message: `Validation error: ${validationErrors}`,
      };
    }

    logger.error(
      `Password reset request error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        context: "auth",
        metadata: { email: data.email },
      }
    );

    return {
      success: false,
      message: "An error occurred. Please try again.",
    };
  }
}

/**
 * Reset a user's password
 *
 * @param data Password reset data including token and new password
 * @returns Result of the password reset operation
 */
export async function resetPassword(data: PasswordReset): Promise<AuthResult> {
  try {
    // Validate input data
    const validatedData = passwordResetSchema.parse(data);

    // Find user by reset token
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: validatedData.token,
        resetPasswordExpires: {
          gt: new Date(),
        },
        isActive: true,
      },
    });

    if (!user) {
      return {
        success: false,
        message:
          "Invalid or expired reset token. Please request a new password reset.",
      };
    }

    // Hash the new password
    const hashedPassword = await hashPassword(validatedData.password);

    // Update the user's password and clear reset token
    await userRepository.updateUser(user.id, {
      password: hashedPassword,
      resetPasswordToken: null,
      resetPasswordExpires: null,
    });

    logger.info(`Password reset successful for user: ${user.id}`, {
      context: "auth",
      metadata: { email: user.email },
    });

    return {
      success: true,
      message:
        "Password reset successful. You can now log in with your new password.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const validationErrors = error.errors
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join(", ");

      return {
        success: false,
        message: `Validation error: ${validationErrors}`,
      };
    }

    logger.error(
      `Password reset error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        context: "auth",
      }
    );

    return {
      success: false,
      message: "An error occurred. Please try again.",
    };
  }
}

/**
 * Verify a user's email
 *
 * @param data Email verification data including token
 * @returns Result of the email verification operation
 */
export async function verifyEmail(
  data: EmailVerification
): Promise<AuthResult> {
  try {
    // Find user by verification token
    const user = await prisma.user.findFirst({
      where: {
        id: data.userId,
        verificationToken: data.token,
        verificationTokenExpires: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return {
        success: false,
        message:
          "Invalid or expired verification token. Please request a new verification email.",
      };
    }

    // Update the user's verification status and clear verification token
    await userRepository.updateUser(user.id, {
      emailVerified: true,
      verificationToken: null,
      verificationTokenExpires: null,
    });

    logger.info(`Email verification successful for user: ${user.id}`, {
      context: "auth",
      metadata: { email: user.email },
    });

    return {
      success: true,
      message:
        "Email verification successful. Your account is now fully active.",
    };
  } catch (error) {
    logger.error(
      `Email verification error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        context: "auth",
      }
    );

    return {
      success: false,
      message: "An error occurred. Please try again.",
    };
  }
}

/**
 * Get user by ID
 *
 * @param userId User ID
 * @returns User object or null if not found
 */
export async function getUserById(userId: string): Promise<User | null> {
  try {
    const user = await userRepository.getUserById(userId);
    return user ? sanitizeUser(user) : null;
  } catch (error) {
    logger.error(
      `Error getting user by ID: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        context: "auth",
        metadata: { userId },
      }
    );
    return null;
  }
}
