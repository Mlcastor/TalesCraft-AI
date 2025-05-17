import { redirect } from "next/navigation";
import { getCurrentSession } from "@/lib/actions/auth-actions";

interface AuthCheckProps {
  children: React.ReactNode;
  redirectTo?: string;
}

/**
 * Auth check component for protected routes
 *
 * This component checks if the user is authenticated and redirects to the login page
 * if they are not. It should be used as a wrapper for protected pages.
 *
 * Example usage:
 * ```tsx
 * export default async function ProtectedPage() {
 *   return (
 *     <AuthCheck>
 *       <YourProtectedComponent />
 *     </AuthCheck>
 *   );
 * }
 * ```
 */
export default async function AuthCheck({
  children,
  redirectTo = "/sign-in",
}: AuthCheckProps) {
  const { authenticated } = await getCurrentSession();

  if (!authenticated) {
    redirect(redirectTo);
  }

  return <>{children}</>;
}
