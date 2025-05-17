"use client";

import React from "react";
import { Button, SectionTitle, Card } from "@/components/ui/Primitives";

interface GameErrorScreenProps {
  error: string | null;
  onRetry?: () => void;
  onGoHome?: () => void; // Example action, could be to go to character select, etc.
}

export function GameErrorScreen({
  error,
  onRetry,
  onGoHome,
}: GameErrorScreenProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 text-center">
      <Card className="bg-opacity-70 border-red-500 max-w-md w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-red-500 mx-auto mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <SectionTitle as="h2" className="text-red-400 mb-4">
          An Error Occurred
        </SectionTitle>
        <p className="text-gray-300 mb-8 text-lg">
          {error || "Something went wrong while processing your request."}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {onRetry && (
            <Button onClick={onRetry} variant="primary">
              Try Again
            </Button>
          )}
          {onGoHome && (
            <Button onClick={onGoHome} variant="secondary">
              Go Home / Dashboard
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
