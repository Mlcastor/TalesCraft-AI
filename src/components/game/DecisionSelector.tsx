"use client";

interface Decision {
  text: string;
  consequences?: string;
}

interface DecisionSelectorProps {
  decisions: Decision[];
  onDecisionSelected: (index: number) => void;
  isDisabled?: boolean;
}

/**
 * Component for displaying decision options and handling player choices
 */
export function DecisionSelector({
  decisions,
  onDecisionSelected,
  isDisabled = false,
}: DecisionSelectorProps) {
  if (!decisions.length) {
    return null;
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-3">What will you do?</h3>
      <div className="flex flex-col gap-2">
        {decisions.map((decision, index) => (
          <button
            key={index}
            className={`text-left p-3 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors ${
              isDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => !isDisabled && onDecisionSelected(index)}
            disabled={isDisabled}
          >
            <div className="flex items-center">
              <span className="mr-2 text-sm bg-primary text-primary-foreground px-2 py-1 rounded-full">
                {index + 1}
              </span>
              <span>{decision.text}</span>
            </div>

            {decision.consequences && (
              <div className="mt-1 text-sm text-muted-foreground italic pl-8">
                {decision.consequences}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
