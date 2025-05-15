"use client";

import { useRouter } from "next/navigation";

interface ErrorScreenProps {
  error: string;
  retry?: () => void;
}

/**
 * Component that displays an error message with retry and return options
 */
export function ErrorScreen({ error, retry }: ErrorScreenProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="bg-red-900/50 border border-red-700 p-6 rounded-lg mb-6 max-w-xl w-full">
        <h2 className="text-2xl font-bold text-white mb-4">
          An Error Occurred
        </h2>
        <p className="text-gray-300 mb-6">{error}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {retry && (
            <button
              onClick={retry}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-lg font-bold"
            >
              Retry
            </button>
          )}

          <button
            onClick={() => router.push("/player-hub")}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-bold"
          >
            Return to Hub
          </button>
        </div>
      </div>
    </div>
  );
}
