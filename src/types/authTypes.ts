/**
 * Authentication Type Definitions
 *
 * This file contains type definitions used by the authentication system.
 */

import { Prisma } from "@/generated/prisma";

/**
 * User interface based on the Prisma User model
 */
export interface User {
  id: string;
  email: string;
  name?: string | null;
  createdAt: Date;
  lastLogin: Date | undefined | null;
  isActive: boolean;
  preferences: Prisma.JsonValue;
  role?: string;
  password?: string | null;
  resetPasswordToken?: string | null;
  resetPasswordExpires?: Date | null;
  verificationToken?: string | null;
  verificationTokenExpires?: Date | null;
  emailVerified?: boolean;
}

/**
 * Session User interface for the user object returned in the session data
 */
export interface SessionUser {
  id: string;
  email: string;
  name: string;
  emailVerified: boolean;
  isActive: boolean;
  createdAt: Date;
  preferences: Prisma.JsonValue;
  role?: string;
}

/**
 * Session interface for authenticated user sessions
 */
export interface Session {
  id: string;
  userId: string;
  expires: Date;
  token: string;
  user: User;
}

/**
 * JWT payload structure
 */
export interface JwtPayload {
  userId: string;
  email: string;
  sessionId: string;
  role?: string;
  iat?: number;
  exp?: number;
}

/**
 * Authentication state for the client-side auth context
 */
export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: SessionUser | null;
  error: string | null;
}

/**
 * Login credentials for user authentication
 */
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * User registration data
 */
export interface RegistrationData {
  email: string;
  password: string;
  name: string;
}

/**
 * Password reset request data
 */
export interface PasswordResetRequest {
  email: string;
}

/**
 * Password reset data
 */
export interface PasswordReset {
  token: string;
  password: string;
  confirmPassword: string;
}

/**
 * Email verification data
 */
export interface EmailVerification {
  userId: string;
  token: string;
}

/**
 * Result of authentication operations
 */
export interface AuthResult {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}
