import { MVPCharacter, MVPCharacterWorldState } from "@/types/mvpTypes";
import { SectionTitle, Card, Button } from "@/components/ui/Primitives";

interface CharacterSelectionPanelProps {
  characters: MVPCharacter[];
  worldId: string;
  characterWorldStates: Record<string, MVPCharacterWorldState | null>;
}

/**
 * Character Selection Panel Component
 *
 * Displays the character selection UI as a panel within the world details card
 */
export function CharacterSelectionPanel({
  characters,
  worldId,
  characterWorldStates,
}: CharacterSelectionPanelProps) {
  return (
    <Card className="h-full">
      <SectionTitle as="h2" className="text-left mb-4">
        Choose Your Character
      </SectionTitle>

      {characters.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-gray-400 mb-2">No characters available</p>
          <Button href="/player-hub/characters/create" variant="primary">
            Create Character
          </Button>
        </div>
      ) : (
        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
          {characters.map((character) => {
            const worldState = characterWorldStates[character.id];
            const hasVisitedBefore = !!worldState;

            return (
              <div
                key={character.id}
                className={`p-3 bg-gray-900 rounded-lg border transition-colors ${
                  hasVisitedBefore ? "border-green-600" : "border-gray-700"
                }`}
              >
                <h3 className="font-bold text-amber-400">{character.name}</h3>

                {character.appearanceDescription && (
                  <p className="text-sm text-gray-300 mb-2 line-clamp-1">
                    {character.appearanceDescription}
                  </p>
                )}

                {hasVisitedBefore && (
                  <div className="text-green-500 text-xs flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Visited before
                  </div>
                )}

                <Button
                  href={`/player-hub/characters/${character.id}/play/${worldId}`}
                  variant="primary"
                  className="w-full text-sm py-1"
                >
                  {hasVisitedBefore ? "Continue Adventure" : "Begin Adventure"}
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
