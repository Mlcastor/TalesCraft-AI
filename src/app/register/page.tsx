import { RegisterForm } from "@/components/auth/RegisterForm";
import Link from "next/link";
import { Card, SectionTitle, Button } from "@/components/ui/Primitives";

export const metadata = {
  title: "Register | Tales Craft AI",
  description: "Create an account to start your adventure in Tales Craft AI",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <Card className="w-full max-w-md p-6">
        <div className="text-center mb-8">
          <SectionTitle as="h1">Tales Craft AI</SectionTitle>
          <p className="text-gray-300">
            Create an account to start your adventure
          </p>
        </div>

        <RegisterForm />

        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Button href="/login" variant="link" className="p-0">
            Sign in instead
          </Button>
        </div>
      </Card>
    </div>
  );
}
