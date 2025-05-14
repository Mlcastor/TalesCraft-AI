"use client";

import { SkeletonLoader } from "./SkeletonLoader";

interface LoadingIndicatorProps {
  message?: string;
  useSkeletonLoader?: boolean;
}

/**
 * Enhanced loading indicator component
 * Offers both simple spinner and skeleton loader options
 */
export function LoadingIndicator({
  message = "Loading...",
  useSkeletonLoader = true,
}: LoadingIndicatorProps) {
  // Use skeleton loader for a more engaging loading experience
  if (useSkeletonLoader) {
    return (
      <div className="flex flex-col h-full w-full">
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary mr-2"></div>
          <p className="text-md text-muted-foreground">{message}</p>
        </div>

        <SkeletonLoader />
      </div>
    );
  }

  // Simple loading spinner for minimal loading states
  return (
    <div className="flex flex-col items-center justify-center p-8 h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
      <p className="text-lg text-muted-foreground">{message}</p>
    </div>
  );
}
