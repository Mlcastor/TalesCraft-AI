import { LoginForm } from "@/components/auth/LoginForm";
import Link from "next/link";

export const metadata = {
  title: "Login | Tales Craft AI",
  description:
    "Log in to your Tales Craft AI account to continue your adventure",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-400 mb-2">
            Tales Craft AI
          </h1>
          <p className="text-gray-300">Sign in to continue your adventure</p>
        </div>

        <LoginForm />

        <div className="mt-6 text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-amber-400 hover:text-amber-300"
          >
            Create one now
          </Link>
        </div>

        <div className="mt-2 text-center text-sm text-gray-400">
          <Link
            href="/forgot-password"
            className="text-amber-400 hover:text-amber-300"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
