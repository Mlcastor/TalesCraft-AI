"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext";

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
        <h2 className="text-3xl font-bold mb-4">Your Adventure Awaits</h2>
        <p className="text-xl text-gray-300 mb-8">
          Every story is unique. Every choice is yours. Begin your journey into
          a world crafted by AI and shaped by your decisions.
        </p>
        <button
          onClick={handleAdventureClick}
          className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-md hover:from-amber-600 hover:to-yellow-700 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
        >
          Start Your Epic Tale
        </button>
      </div>
    </div>
  );
}
