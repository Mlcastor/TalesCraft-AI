"use client";

import { AIResponse } from "@/lib/ai/aiService";

interface ChoicePanelProps {
  currentResponse: AIResponse | null;
  isProcessing: boolean;
  onChoiceSelected: (choiceIndex: number) => void;
}

/**
 * Component that displays the available choices for the player
 */
export function ChoicePanel({
  currentResponse,
  isProcessing,
  onChoiceSelected,
}: ChoicePanelProps) {
  // Only render if we have choices and aren't processing
  if (!currentResponse?.choices?.length || isProcessing) {
    return null;
  }

  return (
    <div className="bg-gray-700 p-4 rounded-lg mb-4 border-t border-gray-600">
      <div className="space-y-2">
        {currentResponse.choices.map((choice, choiceIndex) => (
          <button
            key={choice.id || `choice-${choiceIndex}`}
            onClick={() => onChoiceSelected(choiceIndex)}
            disabled={isProcessing}
            className="w-full text-left p-3 bg-amber-700 hover:bg-amber-600 text-white rounded-md transition"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}
