"use client";

interface NarrativeDisplayProps {
  narrative?: {
    text: string;
    history: Array<{
      type: "narrative" | "playerResponse";
      content: string;
    }>;
  };
  isLoading?: boolean;
}

/**
 * Component for displaying the game narrative and history
 */
export function NarrativeDisplay({
  narrative,
  isLoading = false,
}: NarrativeDisplayProps) {
  if (!narrative) {
    return (
      <div className="p-6 bg-muted/30 rounded-lg h-96 flex items-center justify-center">
        <p className="text-center text-muted-foreground">
          No narrative available
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-muted/30 rounded-lg overflow-y-auto h-96 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4">
        {narrative.history.map((entry, index) => (
          <div
            key={index}
            className={`mb-4 ${
              entry.type === "playerResponse"
                ? "pl-4 border-l-2 border-primary italic"
                : ""
            }`}
          >
            {entry.type === "playerResponse" ? (
              <p className="text-primary-foreground">You: {entry.content}</p>
            ) : (
              <p>{entry.content}</p>
            )}
          </div>
        ))}
      </div>

      {isLoading && (
        <div className="h-6 w-12 flex justify-start items-center">
          <span className="animate-pulse">...</span>
        </div>
      )}
    </div>
  );
}
