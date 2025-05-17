import { verifyEmail } from "@/lib/actions/auth-actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * Email verification page
 *
 * This page handles the verification of a user's email address when they click on
 * the verification link sent to their email after registration.
 */
export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  // Default state
  let success = false;
  let message = "";
  let error = "No verification token provided";

  if (token) {
    // Call the verify email action
    const result = await verifyEmail(token);
    success = result.success;
    message = result.message || "";
    error = result.error || "";
  }

  return (
    <div className="container flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Email Verification</CardTitle>
          <CardDescription>
            {success
              ? "Your email has been verified successfully."
              : "There was a problem verifying your email."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {success ? (
              <>
                <p className="text-green-600">{message}</p>
                <Button asChild className="w-full">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </>
            ) : (
              <>
                <p className="text-red-600">{error}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/">Return to Home</Link>
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
