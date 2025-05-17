"use client";

import { useAuthContext } from "@/contexts/AuthContext";

/**
 * AuthenticatedOnly component
 *
 * Renders children only if user is authenticated
 */
export function AuthenticatedOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuthContext();

  if (isLoading) {
    return null; // Render nothing while loading
  }

  return isAuthenticated ? <>{children}</> : <>{fallback}</>;
}

/**
 * UnauthenticatedOnly component
 *
 * Renders children only if user is NOT authenticated
 */
export function UnauthenticatedOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuthContext();

  if (isLoading) {
    return null; // Render nothing while loading
  }

  return !isAuthenticated ? <>{children}</> : <>{fallback}</>;
}
