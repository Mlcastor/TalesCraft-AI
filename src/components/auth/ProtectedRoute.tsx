"use client";

import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Spinner } from "@/components/ui/Spinner";
import { SessionUser } from "@/types/authTypes";

type ProtectedRouteProps = {
  children: React.ReactNode;
  adminOnly?: boolean;
};

/**
 * ProtectedRoute Component
 *
 * Wraps a component to ensure it is only accessible to authenticated users.
 * If adminOnly is true, it will also require the user to have admin role.
 */
export default function ProtectedRoute({
  children,
  adminOnly = false,
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    // If not loading and not authenticated, redirect to login
    if (!isLoading && !isAuthenticated) {
      router.push(
        `/login?redirect=${encodeURIComponent(window.location.pathname)}`
      );
    }

    // If admin-only route and user is not an admin, redirect to unauthorized
    if (!isLoading && isAuthenticated && adminOnly && user?.role !== "admin") {
      router.push("/unauthorized");
    }
  }, [isLoading, isAuthenticated, adminOnly, user, router]);

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  // If admin route and user is not admin, or if not authenticated, don't render children
  if ((adminOnly && user?.role !== "admin") || !isAuthenticated) {
    return null;
  }

  // Render children if authenticated and has required role
  return <>{children}</>;
}
