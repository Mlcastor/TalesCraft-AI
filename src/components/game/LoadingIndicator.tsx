"use client";

interface LoadingIndicatorProps {
  message?: string;
}

/**
 * Simple loading indicator component with a customizable message
 */
export function LoadingIndicator({
  message = "Loading...",
}: LoadingIndicatorProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
      <p className="text-lg text-muted-foreground">{message}</p>
    </div>
  );
}
