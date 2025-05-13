"use client";

interface Choice {
  id: string;
  text: string;
}

interface CurrentChoice {
  choices: Choice[];
  text?: string;
  type: string;
}

interface ChoicePanelProps {
  currentChoice: CurrentChoice | null;
  isLoading: boolean;
  onChoiceSelected: (choiceId: string) => void;
}

/**
 * Component that displays the available choices for the player
 */
export function ChoicePanel({
  currentChoice,
  isLoading,
  onChoiceSelected,
}: ChoicePanelProps) {
  // Only render if we have choices and aren't loading
  if (!currentChoice?.choices?.length) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-400 italic">No choices available</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="space-y-2 max-w-4xl mx-auto">
        {currentChoice.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onChoiceSelected(choice.id)}
            disabled={isLoading}
            className={`w-full text-left p-4 rounded-md transition duration-200 ${
              isLoading
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-amber-700 hover:bg-amber-600 text-white"
            }`}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}
