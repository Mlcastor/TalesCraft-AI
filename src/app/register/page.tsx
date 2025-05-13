import { RegisterForm } from "@/components/auth/RegisterForm";
import Link from "next/link";

export const metadata = {
  title: "Register | Tales Craft AI",
  description: "Create an account to start your adventure in Tales Craft AI",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-400 mb-2">
            Tales Craft AI
          </h1>
          <p className="text-gray-300">
            Create an account to start your adventure
          </p>
        </div>

        <RegisterForm />

        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-amber-400 hover:text-amber-300">
            Sign in instead
          </Link>
        </div>
      </div>
    </div>
  );
}
