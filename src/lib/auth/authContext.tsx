/**
 * Authentication Context Provider
 *
 * This module provides the React context for authentication state management
 * and authentication-related hooks for components to use.
 */

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  User,
  AuthState,
  LoginCredentials,
  RegistrationData,
  AuthResult,
  PasswordResetRequest,
  PasswordReset,
  EmailVerification,
  SessionUser,
} from "@/types/authTypes";
import * as authService from "./authService";
import { logger } from "@/lib/utils/logger";
import {
  saveSession,
  getStoredToken,
  getStoredUser,
  getStoredSessionUser,
  clearSession,
  updateUserInStorage,
} from "./sessionStorage";
import { verifyToken, convertToSessionUser } from "@/lib/utils/authUtils";

// Default auth state when not authenticated
const defaultAuthState: AuthState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  error: null,
};

// Create the context with default state
const AuthContext = createContext<{
  authState: AuthState;
  login: (credentials: LoginCredentials) => Promise<AuthResult>;
  register: (userData: RegistrationData) => Promise<AuthResult>;
  logout: () => void;
  requestPasswordReset: (data: PasswordResetRequest) => Promise<AuthResult>;
  resetPassword: (data: PasswordReset) => Promise<AuthResult>;
  verifyEmail: (data: EmailVerification) => Promise<AuthResult>;
  refreshUser: () => Promise<User | null>;
}>({
  authState: defaultAuthState,
  login: async () => ({
    success: false,
    message: "Auth context not initialized",
  }),
  register: async () => ({
    success: false,
    message: "Auth context not initialized",
  }),
  logout: () => {},
  requestPasswordReset: async () => ({
    success: false,
    message: "Auth context not initialized",
  }),
  resetPassword: async () => ({
    success: false,
    message: "Auth context not initialized",
  }),
  verifyEmail: async () => ({
    success: false,
    message: "Auth context not initialized",
  }),
  refreshUser: async () => null,
});

/**
 * Auth Provider component that wraps your application to provide authentication context
 */
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authState, setAuthState] = useState<AuthState>(defaultAuthState);

  /**
   * Attempt to restore user session from localStorage/cookies on initial load
   */
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = getStoredToken();

        if (!token) {
          setAuthState({
            ...defaultAuthState,
            isLoading: false,
          });
          return;
        }

        // Verify the token
        try {
          const payload = await verifyToken(token);

          if (!payload || !payload.userId) {
            logger.warn("Invalid token found in storage", { context: "auth" });
            clearSession();
            setAuthState({
              ...defaultAuthState,
              isLoading: false,
            });
            return;
          }

          // Get user from storage
          const storedUser = getStoredUser();

          if (storedUser && storedUser.id === payload.userId) {
            // Use stored user data with SessionUser conversion
            const sessionUser = getStoredSessionUser();
            setAuthState({
              isAuthenticated: true,
              isLoading: false,
              user: sessionUser,
              error: null,
            });
          } else {
            // Fetch fresh user data from the server
            const user = await authService.getUserById(payload.userId);

            if (user) {
              // Update the user in storage
              updateUserInStorage(user);

              setAuthState({
                isAuthenticated: true,
                isLoading: false,
                user: convertToSessionUser(user),
                error: null,
              });
            } else {
              // Clear invalid session
              clearSession();
              setAuthState({
                ...defaultAuthState,
                isLoading: false,
              });
            }
          }
        } catch (error) {
          // Token validation failed
          logger.warn("Token validation failed during initialization", {
            context: "auth",
            error: error instanceof Error ? error.message : "Unknown error",
          });

          clearSession();
          setAuthState({
            ...defaultAuthState,
            isLoading: false,
          });
        }
      } catch (error) {
        logger.error("Error initializing auth", {
          context: "auth",
          error: error instanceof Error ? error.message : "Unknown error",
        });

        setAuthState({
          ...defaultAuthState,
          isLoading: false,
          error: "Failed to initialize authentication",
        });
      }
    };

    initializeAuth();
  }, []);

  /**
   * Login function that sets the auth state and persists the session
   */
  const login = async (credentials: LoginCredentials): Promise<AuthResult> => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const result = await authService.loginUser(credentials);

      if (result.success && result.user && result.token) {
        // Save the session
        saveSession(result.token, result.user, credentials.rememberMe);

        // Update auth state with converted user
        setAuthState({
          isAuthenticated: true,
          isLoading: false,
          user: convertToSessionUser(result.user),
          error: null,
        });
      } else {
        // Login failed
        setAuthState((prev) => ({
          ...prev,
          isLoading: false,
          error: result.message,
        }));
      }

      return result;
    } catch (error) {
      logger.error("Login error", {
        context: "auth",
        error: error instanceof Error ? error.message : "Unknown error",
      });

      const errorMessage = "An unexpected error occurred during login";

      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));

      return {
        success: false,
        message: errorMessage,
      };
    }
  };

  /**
   * Register function for new user registration
   */
  const register = async (userData: RegistrationData): Promise<AuthResult> => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const result = await authService.registerUser(userData);

      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: result.success ? null : result.message,
      }));

      return result;
    } catch (error) {
      logger.error("Registration error", {
        context: "auth",
        error: error instanceof Error ? error.message : "Unknown error",
      });

      const errorMessage = "An unexpected error occurred during registration";

      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));

      return {
        success: false,
        message: errorMessage,
      };
    }
  };

  /**
   * Logout function that clears the auth state and session
   */
  const logout = useCallback(() => {
    clearSession();

    setAuthState({
      ...defaultAuthState,
      isLoading: false,
    });

    logger.info("User logged out", { context: "auth" });
  }, []);

  /**
   * Request password reset function
   */
  const requestPasswordReset = async (
    data: PasswordResetRequest
  ): Promise<AuthResult> => {
    try {
      return await authService.requestPasswordReset(data);
    } catch (error) {
      logger.error("Password reset request error", {
        context: "auth",
        error: error instanceof Error ? error.message : "Unknown error",
      });

      return {
        success: false,
        message: "An unexpected error occurred",
      };
    }
  };

  /**
   * Reset password function
   */
  const resetPassword = async (data: PasswordReset): Promise<AuthResult> => {
    try {
      return await authService.resetPassword(data);
    } catch (error) {
      logger.error("Password reset error", {
        context: "auth",
        error: error instanceof Error ? error.message : "Unknown error",
      });

      return {
        success: false,
        message: "An unexpected error occurred",
      };
    }
  };

  /**
   * Email verification function
   */
  const verifyEmail = async (data: EmailVerification): Promise<AuthResult> => {
    try {
      return await authService.verifyEmail(data);
    } catch (error) {
      logger.error("Email verification error", {
        context: "auth",
        error: error instanceof Error ? error.message : "Unknown error",
      });

      return {
        success: false,
        message: "An unexpected error occurred",
      };
    }
  };

  /**
   * Refresh user data from the server
   */
  const refreshUser = async (): Promise<User | null> => {
    if (!authState.isAuthenticated || !authState.user) {
      return null;
    }

    try {
      const user = await authService.getUserById(authState.user.id);

      if (user) {
        // Update user in state and storage
        updateUserInStorage(user);

        setAuthState((prev) => ({
          ...prev,
          user: convertToSessionUser(user),
        }));

        return user;
      }

      return null;
    } catch (error) {
      logger.error("Error refreshing user", {
        context: "auth",
        error: error instanceof Error ? error.message : "Unknown error",
      });

      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        register,
        logout,
        requestPasswordReset,
        resetPassword,
        verifyEmail,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**
 * useAuth hook to access the auth context
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

/**
 * useUser hook to access the current user
 */
export const useUser = () => {
  const { authState } = useAuth();
  return authState.user;
};

/**
 * useAuthStatus hook to access authentication status
 */
export const useAuthStatus = () => {
  const { authState } = useAuth();
  return {
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,
    error: authState.error,
  };
};
