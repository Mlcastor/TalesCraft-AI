"use client";

import { useState } from "react";
import { resetPassword } from "@/lib/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ResetPasswordFormProps {
  token: string;
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    // Validate password length
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("token", token);
      formData.append("password", password);
      formData.append("confirmPassword", confirmPassword);

      const result = await resetPassword(formData);

      if (result.success) {
        setSuccess(
          result.message || "Your password has been successfully reset"
        );
        // Clear form
        setPassword("");
        setConfirmPassword("");
        // Redirect to login after 3 seconds
        setTimeout(() => {
          router.push("/sign-in");
        }, 3000);
      } else {
        setError(result.error || "Failed to reset password");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 text-sm text-white bg-red-500 rounded-md">
          {error}
        </div>
      )}

      {success && (
        <div className="p-3 text-sm text-white bg-green-500 rounded-md">
          {success}
          <p className="mt-2 text-sm">Redirecting to the login page...</p>
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium leading-none">
          New Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your new password"
          required
          className="w-full p-2 text-sm border rounded-md"
        />
        <p className="text-xs text-gray-500">
          Password must be at least 8 characters
        </p>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="confirmPassword"
          className="text-sm font-medium leading-none"
        >
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your new password"
          required
          className="w-full p-2 text-sm border rounded-md"
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isLoading || !!success}
      >
        {isLoading ? "Processing..." : "Reset Password"}
      </Button>

      {!success && (
        <div className="text-center">
          <Link
            href="/sign-in"
            className="text-sm text-blue-600 hover:underline"
          >
            Back to Sign In
          </Link>
        </div>
      )}
    </form>
  );
}
