import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

/**
 * Reset Password Page (Server Component)
 *
 * Allows users to reset their password using a token from the URL.
 */
export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  const token = searchParams.token || "";
  const hasToken = !!token;

  return (
    <div className="container flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>
            {hasToken
              ? "Enter your new password"
              : "Invalid or missing reset token. Please request a new password reset link."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {hasToken ? (
            <ResetPasswordForm token={token} />
          ) : (
            <div className="p-3 text-sm text-white bg-red-500 rounded-md">
              Invalid or missing token. Please request a new password reset link
              from the forgot password page.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
