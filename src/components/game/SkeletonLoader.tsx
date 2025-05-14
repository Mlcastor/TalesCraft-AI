"use client";

/**
 * Skeleton loader for game components
 * Provides visual placeholders while content is loading
 */
export function SkeletonLoader() {
  return (
    <div className="w-full h-full animate-pulse">
      {/* Game header skeleton */}
      <div className="flex justify-between items-center mb-4">
        <div className="h-7 bg-muted/50 rounded w-48"></div>
        <div className="flex gap-2">
          <div className="h-8 w-20 bg-muted/50 rounded"></div>
          <div className="h-8 w-24 bg-muted/50 rounded"></div>
          <div className="h-8 w-20 bg-muted/50 rounded"></div>
        </div>
      </div>

      {/* Game state indicator skeleton */}
      <div className="bg-muted/20 p-3 rounded-md grid grid-cols-3 gap-4 mb-4">
        <div>
          <div className="h-5 bg-muted/50 rounded w-24 mb-2"></div>
          <div className="h-4 bg-muted/50 rounded w-full mb-2"></div>
          <div className="h-4 bg-muted/50 rounded w-3/4"></div>
        </div>
        <div>
          <div className="h-5 bg-muted/50 rounded w-24 mb-2"></div>
          <div className="h-4 bg-muted/50 rounded w-full mb-2"></div>
          <div className="h-4 bg-muted/50 rounded w-2/3"></div>
        </div>
        <div>
          <div className="h-5 bg-muted/50 rounded w-24 mb-2"></div>
          <div className="h-4 bg-muted/50 rounded w-3/4"></div>
        </div>
      </div>

      {/* Narrative display skeleton */}
      <div className="p-4 bg-muted/30 rounded-lg h-96 flex flex-col mb-4">
        <div className="flex-1 overflow-hidden mb-4">
          <div className="h-4 bg-muted/50 rounded w-3/4 mb-3"></div>
          <div className="h-4 bg-muted/50 rounded w-full mb-3"></div>
          <div className="h-4 bg-muted/50 rounded w-5/6 mb-3"></div>
          <div className="h-4 bg-muted/50 rounded w-2/3 mb-3"></div>
          <div className="h-4 bg-muted/50 rounded w-full mb-3"></div>
          <div className="h-4 bg-muted/50 rounded w-4/5 mb-3"></div>
          <div className="h-4 bg-muted/50 rounded w-3/4 mb-3"></div>

          <div className="pl-4 border-l-2 border-primary mt-8 mb-3">
            <div className="h-4 bg-muted/50 rounded w-2/3 mb-1"></div>
          </div>

          <div className="h-4 bg-muted/50 rounded w-5/6 mb-3"></div>
          <div className="h-4 bg-muted/50 rounded w-full mb-3"></div>
          <div className="h-4 bg-muted/50 rounded w-3/4 mb-3"></div>
        </div>
      </div>

      {/* Decision selector skeleton */}
      <div className="mt-4">
        <div className="h-6 bg-muted/50 rounded w-48 mb-3"></div>
        <div className="flex flex-col gap-2">
          <div className="h-14 bg-muted/30 rounded w-full border border-border"></div>
          <div className="h-14 bg-muted/30 rounded w-full border border-border"></div>
          <div className="h-14 bg-muted/30 rounded w-full border border-border"></div>
        </div>
      </div>
    </div>
  );
}
