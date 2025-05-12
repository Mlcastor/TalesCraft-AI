"use client";

interface LoadingScreenProps {
  loadingFromDB: boolean;
}

/**
 * Loading screen component displayed during game state loading or narrative processing
 */
export function LoadingScreen({ loadingFromDB }: LoadingScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-xl text-amber-400">
        {loadingFromDB ? "Loading your adventure..." : "The story unfolds..."}
      </p>
    </div>
  );
}
