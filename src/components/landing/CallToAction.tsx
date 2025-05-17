"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext";
import { SectionTitle, Button } from "@/components/ui/Primitives";

/**
 * CallToAction Component
 *
 * Provides a prominent call-to-action section that redirects users
 * based on their authentication status.
 */
export function CallToAction() {
  const { isAuthenticated, isLoading, user } = useAuthContext();
  const router = useRouter();

  /**
   * Handles redirection based on authentication status
   */
  const handleAdventureClick = () => {
    if (isLoading) return;

    if (isAuthenticated && user) {
      router.push("/characters");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="bg-gray-900 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <SectionTitle as="h2">Your Adventure Awaits</SectionTitle>
        <p className="text-xl text-gray-300 mb-8">
          Every story is unique. Every choice is yours. Begin your journey into
          a world crafted by AI and shaped by your decisions.
        </p>
        <Button onClick={handleAdventureClick}>Start Your Epic Tale</Button>
      </div>
    </div>
  );
}
