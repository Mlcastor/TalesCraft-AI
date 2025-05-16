"use client";
import { Spinner } from "@/components/ui/Spinner";

/**
 * Loading screen component displayed during game state loading or narrative processing
 */
export function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <Spinner size="lg" />
      <p className="text-xl text-amber-400">Loading your adventure...</p>
    </div>
  );
}
