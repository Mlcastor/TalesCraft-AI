import { AIResponse } from "@/lib/ai/aiService";

export interface NarrativeItem {
  type: "narrative" | "playerResponse";
  content: AIResponse | string;
}

interface NarrativeHistoryProps {
  narrativeHistory: NarrativeItem[];
}

/**
 * Component that displays the narrative history of the game
 */
export function NarrativeHistory({ narrativeHistory }: NarrativeHistoryProps) {
  return (
    <div className="flex-grow bg-gray-800 p-4 overflow-y-auto">
      <div className="space-y-4">
        {narrativeHistory.map((item, index) => (
          <div key={index}>
            {item.type === "narrative" ? (
              <div className="bg-gray-700 p-4 rounded-lg mb-4">
                <p className="text-white leading-relaxed">
                  {typeof item.content === "string"
                    ? item.content
                    : (item.content as AIResponse).text}
                </p>
              </div>
            ) : (
              <div className="bg-amber-800 p-3 rounded-lg mb-4 ml-8 border-l-4 border-amber-500">
                <p className="text-white leading-relaxed">
                  <span className="text-amber-300 font-semibold">» </span>
                  {item.content as string}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
