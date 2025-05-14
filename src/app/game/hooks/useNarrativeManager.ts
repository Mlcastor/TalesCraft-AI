import { useState, useEffect } from "react";
import { useGameEngine } from "@/lib/game-engine";
import {
  GameCharacter,
  Location,
  AIResponse,
  NarrativeMood,
} from "@/lib/ai/aiService";
import {
  generateNarrativeResponse,
  continueNarrative,
  createExampleCharacter,
} from "@/lib/ai/examples/narrativeDirectorExample";
import { NarrativeItem } from "../components/NarrativeHistory";

interface UseNarrativeManagerProps {
  characterId: string;
  playerCharacter: GameCharacter | null;
  currentLocation: Location;
  worldId?: string;
  locationId?: string;
  initialized: boolean;
  narrativeHistory: NarrativeItem[];
  setNarrativeHistory: React.Dispatch<React.SetStateAction<NarrativeItem[]>>;
}

interface UseNarrativeManagerResult {
  currentResponse: AIResponse | null;
  isProcessing: boolean;
  handleChoiceSelected: (choiceIndex: number) => Promise<void>;
  handleResetStory: () => Promise<void>;
}

/**
 * Custom hook to manage narrative flow and AI interactions
 */
export function useNarrativeManager({
  characterId,
  playerCharacter,
  currentLocation,
  worldId,
  locationId,
  initialized,
  narrativeHistory,
  setNarrativeHistory,
}: UseNarrativeManagerProps): UseNarrativeManagerResult {
  const { gameState, updateGameState, saveNarrativeHistory } = useGameEngine();

  const [currentResponse, setCurrentResponse] = useState<AIResponse | null>(
    null
  );
  const [isProcessing, setIsProcessing] = useState(false);

  // Set up initial narrative if none exists
  useEffect(() => {
    // Only run if initialized, no current response, and no narrative history
    if (
      gameState &&
      !currentResponse &&
      !isProcessing &&
      initialized &&
      narrativeHistory.length === 0
    ) {
      const setupNarrative = async () => {
        try {
          setIsProcessing(true);

          // Fall back to example character if player character is null
          const character = playerCharacter || createExampleCharacter();

          const initialPrompt = "I look around, taking in my surroundings.";
          try {
            console.log(
              `[setupNarrative] Generating initial narrative with worldId: ${
                worldId || "none"
              }, locationId: ${locationId || "none"}`
            );
            const response = await generateNarrativeResponse(
              initialPrompt,
              character,
              currentLocation,
              {
                worldId,
                locationId,
              }
            );

            // Check if it's a mock response
            if (response.metadata?.isMockResponse) {
              console.warn(
                "Using mock AI response due to missing API key configuration"
              );
            }

            setCurrentResponse(response);
            setNarrativeHistory((prev) => [
              ...prev,
              { type: "narrative", content: response },
            ]);

            // Update game state with narrative context
            await updateGameState({
              narrativeContext: response.text,
              worldState: {
                ...(gameState.worldState as Record<string, any>),
                currentLocation: currentLocation,
              },
            });
          } catch (apiError: any) {
            console.error("AI API Error:", apiError);

            // Create error response
            let errorMessage = "Unknown error occurred";
            const errorChoices = [
              { id: "retry", text: "Refresh and try again" },
            ];

            // Format appropriate error message based on error type
            if (
              apiError.message?.includes("API key") ||
              apiError.message?.includes("authentication")
            ) {
              errorMessage =
                "⚠️ AI Configuration Error: Missing or invalid API key. Please check your API configuration.";
            } else if (apiError.message?.includes("rate limit")) {
              errorMessage =
                "⚠️ AI Service Rate Limit: The AI service has reached its request limit.";
            } else if (apiError.message?.includes("timeout")) {
              errorMessage =
                "⚠️ AI Service Timeout: The request took too long to process.";
            } else {
              errorMessage = `⚠️ AI Service Error: ${
                apiError.message || errorMessage
              }`;
            }

            const errorResponse: AIResponse = {
              text: errorMessage,
              choices: errorChoices,
            };

            setNarrativeHistory([
              { type: "narrative", content: errorResponse },
            ]);
          }
        } catch (err) {
          console.error("Failed to start narrative:", err);

          // Create error response for unexpected errors
          const errorResponse: AIResponse = {
            text: `An error occurred while setting up the game: ${
              err instanceof Error ? err.message : "Unknown error"
            }`,
            choices: [{ id: "retry", text: "Refresh and try again" }],
          };

          setNarrativeHistory([{ type: "narrative", content: errorResponse }]);
        } finally {
          setIsProcessing(false);
        }
      };

      setupNarrative();
    } else if (narrativeHistory.length > 0 && !currentResponse) {
      // If we have narrative history but no current response, set the current response
      // to the last narrative item
      const lastNarrative = narrativeHistory
        .filter((item) => item.type === "narrative")
        .pop();

      if (lastNarrative) {
        // Ensure we have a proper AIResponse object with choices
        const aiResponse = lastNarrative.content as AIResponse;

        // Sometimes the choices might be lost in serialization/deserialization
        // So make sure they exist and have the correct structure
        if (
          !aiResponse.choices ||
          !Array.isArray(aiResponse.choices) ||
          aiResponse.choices.length === 0
        ) {
          console.warn(
            "No choices found in last narrative, adding default options"
          );

          // Add default choices if none exist
          aiResponse.choices = [
            { id: "continue_1", text: "Continue exploring" },
            { id: "continue_2", text: "Look around more carefully" },
          ];
        }

        setCurrentResponse(aiResponse);
      }
    }
  }, [
    gameState,
    currentResponse,
    isProcessing,
    initialized,
    narrativeHistory,
    playerCharacter,
    currentLocation,
    worldId,
    locationId,
    updateGameState,
    setNarrativeHistory,
  ]);

  // Handle player choice selection
  const handleChoiceSelected = async (choiceIndex: number) => {
    console.log("Choice selected:", choiceIndex);

    // Validate that we have necessary data
    if (!currentResponse) {
      console.error("No current response available");
      return;
    }

    if (!playerCharacter && !gameState) {
      console.error("No player character or game state available");
      return;
    }

    // Fall back to example character if needed
    const selectedPlayerCharacter = playerCharacter || createExampleCharacter();

    // Prevent multiple choice selections
    if (isProcessing) {
      console.log("Already processing a choice selection");
      return;
    }

    setIsProcessing(true);

    try {
      // Validate choice index
      if (
        !currentResponse.choices ||
        choiceIndex < 1 ||
        choiceIndex > currentResponse.choices.length
      ) {
        console.error("Invalid choice index:", choiceIndex);
        return;
      }

      // Get the selected choice
      const selectedChoice = currentResponse.choices[choiceIndex - 1];

      // Add user's choice to the narrative history
      const playerChoiceContent = selectedChoice.text;
      setNarrativeHistory((prev) => [
        ...prev,
        { type: "playerResponse", content: playerChoiceContent },
      ]);

      // Continue the narrative with the selected choice
      let response: AIResponse;
      try {
        console.log(
          `[handleChoiceSelected] Continuing narrative with worldId: ${
            worldId || "none"
          }, locationId: ${locationId || "none"}`
        );
        response = await continueNarrative(
          currentResponse,
          choiceIndex,
          selectedPlayerCharacter,
          currentLocation,
          {
            worldId,
            locationId,
          }
        );

        if (response.metadata?.isMockResponse) {
          console.warn(
            "Using mock AI response due to missing API key configuration"
          );
        }
      } catch (apiError: any) {
        console.error("API Error in continueNarrative:", apiError);

        // Create error response
        response = {
          text: `⚠️ The story pauses momentarily. (There was an issue with the AI service: ${
            apiError.message || "Unknown error"
          })`,
          choices: [
            { id: "retry", text: "Try again" },
            { id: "different", text: "Try something else" },
          ],
          metadata: {
            mood: NarrativeMood.MYSTERIOUS,
            isError: true,
          },
        };
      }

      // Update the current response
      setCurrentResponse(response);

      // Add the AI response to the narrative history
      setNarrativeHistory((prev) => [
        ...prev,
        { type: "narrative", content: response },
      ]);

      // Scroll to the bottom of the narrative
      window.scrollTo(0, document.body.scrollHeight);
    } catch (err) {
      console.error("Error processing choice:", err);

      // Handle client-side errors
      const errorResponse: AIResponse = {
        text: `An error occurred while processing your choice: ${
          err instanceof Error ? err.message : "Unknown error"
        }`,
        choices: [
          { id: "retry", text: "Try again" },
          { id: "back", text: "Go back" },
        ],
      };

      setNarrativeHistory((prev) => [
        ...prev,
        { type: "narrative", content: errorResponse },
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  // Reset the story
  const handleResetStory = async () => {
    try {
      setIsProcessing(true);

      // Clear narrative history from state
      setNarrativeHistory([]);
      setCurrentResponse(null);

      // Clear narrative history from database
      if (gameState) {
        await saveNarrativeHistory([]);
      }
    } catch (err) {
      console.error("Failed to reset story:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    currentResponse,
    isProcessing,
    handleChoiceSelected,
    handleResetStory,
  };
}
