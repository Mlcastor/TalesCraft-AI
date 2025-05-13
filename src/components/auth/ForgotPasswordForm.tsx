"use client";

import { useState } from "react";
import { requestPasswordReset } from "@/lib/actions/auth-actions";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await requestPasswordReset(email);

      if (result.success) {
        setSuccess(result.message || "Reset instructions sent to your email");
        setEmail(""); // Clear the form
      } else {
        setError(result.error || "Failed to process your request");
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
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium leading-none">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="w-full p-2 text-sm border rounded-md"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Processing..." : "Reset Password"}
      </Button>
    </form>
  );
}
