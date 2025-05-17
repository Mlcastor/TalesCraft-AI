import { LoginForm } from "@/components/auth/LoginForm";
import Link from "next/link";
import { Card, SectionTitle, Button } from "@/components/ui/Primitives";
import { Suspense } from "react";

export const metadata = {
  title: "Login | Tales Craft AI",
  description:
    "Log in to your Tales Craft AI account to continue your adventure",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <Card className="w-full max-w-md p-6">
        <div className="text-center mb-8">
          <SectionTitle as="h1">Tales Craft AI</SectionTitle>
          <p className="text-gray-300">Sign in to continue your adventure</p>
        </div>

        <Suspense
          fallback={
            <div className="text-center p-4">Loading login form...</div>
          }
        >
          <LoginForm />
        </Suspense>

        <div className="mt-6 text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Button href="/register" variant="link" className="p-0">
            Create one now
          </Button>
        </div>

        <div className="mt-2 text-center text-sm text-gray-400">
          <Button href="/forgot-password" variant="link" className="p-0">
            Forgot your password?
          </Button>
        </div>
      </Card>
    </div>
  );
}
