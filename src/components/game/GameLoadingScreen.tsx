"use client";

import React from "react";
import { Spinner } from "@/components/ui/Spinner";

interface GameLoadingScreenProps {
  message?: string;
}

export function GameLoadingScreen({
  message = "Loading your adventure...",
}: GameLoadingScreenProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 text-gray-300">
      <Spinner size="lg" className="text-amber-400 mb-6" />
      <p className="text-xl text-center">{message}</p>
      <p className="text-sm text-gray-500 mt-2">
        Please wait while we craft your experience.
      </p>
    </div>
  );
}
