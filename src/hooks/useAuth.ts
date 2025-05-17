/**
 * Authentication React Hook
 *
 * This hook provides authentication state and functions for React components.
 */

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SessionUser, AuthState } from "@/types/authTypes";
import { login as loginAction } from "@/lib/actions/auth-actions";
import { register as registerAction } from "@/lib/actions/auth-actions";
import { logout as logoutAction } from "@/lib/actions/auth-actions";
import { getCurrentSession } from "@/lib/actions/auth-actions";

/**
 * Hook for accessing authentication state and functions
 */
export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true,
    user: null,
    error: null,
  });

  const router = useRouter();

  // Load user session on mount
  useEffect(() => {
    async function loadSession() {
      try {
        const result = await getCurrentSession();

        if (result.success && result.authenticated) {
          setAuthState({
            isAuthenticated: true,
            isLoading: false,
            user: result.user || null,
            error: null,
          });
        } else {
          setAuthState({
            isAuthenticated: false,
            isLoading: false,
            user: null,
            error: null,
          });
        }
      } catch (error) {
        setAuthState({
          isAuthenticated: false,
          isLoading: false,
          user: null,
          error: error instanceof Error ? error.message : "An error occurred",
        });
      }
    }

    loadSession();
  }, []);

  /**
   * Login function
   */
  async function login(
    email: string,
    password: string,
    rememberMe: boolean = false
  ) {
    try {
      setAuthState({ ...authState, isLoading: true, error: null });

      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("remember", rememberMe ? "on" : "off");

      const result = await loginAction(formData);

      if (result.success) {
        // Reload the session data to get the user
        const sessionResult = await getCurrentSession();

        setAuthState({
          isAuthenticated: true,
          isLoading: false,
          user: sessionResult.user || null,
          error: null,
        });

        return { success: true };
      } else {
        setAuthState({
          ...authState,
          isLoading: false,
          error: result.error || "Login failed",
        });

        return { success: false, error: result.error || "Login failed" };
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred during login";

      setAuthState({
        ...authState,
        isLoading: false,
        error: errorMessage,
      });

      return { success: false, error: errorMessage };
    }
  }

  /**
   * Register function
   */
  async function register(name: string, email: string, password: string) {
    try {
      setAuthState({ ...authState, isLoading: true, error: null });

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);

      const result = await registerAction(formData);

      if (result.success) {
        setAuthState({
          ...authState,
          isLoading: false,
        });

        return { success: true, message: result.message };
      } else {
        setAuthState({
          ...authState,
          isLoading: false,
          error: result.error || "Registration failed",
        });

        return { success: false, error: result.error || "Registration failed" };
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred during registration";

      setAuthState({
        ...authState,
        isLoading: false,
        error: errorMessage,
      });

      return { success: false, error: errorMessage };
    }
  }

  /**
   * Logout function
   */
  async function logout() {
    try {
      setAuthState({ ...authState, isLoading: true });

      await logoutAction();

      setAuthState({
        isAuthenticated: false,
        isLoading: false,
        user: null,
        error: null,
      });

      // Redirect to home page
      router.push("/");
    } catch (error) {
      setAuthState({
        ...authState,
        isLoading: false,
        error:
          error instanceof Error
            ? error.message
            : "An error occurred during logout",
      });
    }
  }

  return {
    ...authState,
    login,
    register,
    logout,
  };
}
