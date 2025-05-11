"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GameEngineProvider, useGameEngine } from "@/lib/game-engine";
import type { GameSession, GameState } from "@/types/database";
import {
  generateNarrativeResponse,
  continueNarrative,
  createExampleLocation,
} from "@/lib/ai/examples/narrativeDirectorExample";
import { AIResponse, GameCharacter, Location } from "@/lib/ai/aiService";

interface GameClientProps {
  characterId: string;
  initialSession: GameSession | null;
  initialGameState: GameState | null;
  initialError: string | null;
}

// Define a type for worldState to make TypeScript happy
interface WorldState {
  timeOfDay: string;
  discoveredLocations: string[];
  completedEvents: string[];
  npcRelationships: Record<string, number>;
  currentLocation?: Location;
}

// Character information from the game state
interface CharacterInfo {
  name?: string;
  backstory?: string;
  appearance?: string;
  personalityTraits?: {
    primary?: string;
    secondary?: string[];
    flaws?: string[];
    motivations?: string[];
  };
}

// Extended game state with character information
interface ExtendedGameState extends Omit<GameState, "characterState"> {
  character?: CharacterInfo;
  characterState?: Record<string, any>;
}

// Define types for narrative history items
interface NarrativeItem {
  type: "narrative" | "playerResponse";
  content: AIResponse | string;
}

// Wrapper component that provides the GameEngine context
export default function GameClient({
  characterId,
  initialSession,
  initialGameState,
  initialError,
}: GameClientProps) {
  return (
    <GameEngineProvider
      initialSession={initialSession}
      initialGameState={initialGameState}
      initialError={initialError}
    >
      <GameInterface characterId={characterId} />
    </GameEngineProvider>
  );
}

// Main game interface that uses the game engine
function GameInterface({ characterId }: { characterId: string }) {
  const router = useRouter();
  const {
    gameState,
    session,
    isLoading,
    error,
    resumeGame,
    updateGameState,
    saveNarrativeHistory,
    loadNarrativeHistory,
  } = useGameEngine();

  const [initialized, setInitialized] = useState(false);
  const [narrativeHistory, setNarrativeHistory] = useState<NarrativeItem[]>([]);
  const [currentResponse, setCurrentResponse] = useState<AIResponse | null>(
    null
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [playerCharacter, setPlayerCharacter] = useState<GameCharacter | null>(
    null
  );
  const [currentLocation, setCurrentLocation] = useState<Location>(
    createExampleLocation()
  );

  // Initialize the game when the component mounts
  useEffect(() => {
    async function initializeGame() {
      try {
        setIsProcessing(true); // Set isProcessing at the beginning for a single loading screen

        if (!characterId) {
          router.push("/characters");
          return;
        }

        // Only try to resume the game if we don't already have a session and game state
        if (!session || !gameState) {
          // Attempt to resume an existing game, or start a new one if none exists
          await resumeGame(characterId);
        }

        // At this point we should have a game state
        if (gameState) {
          // Create a character from the game state
          const extendedState = gameState as unknown as ExtendedGameState;
          const characterInfo = extendedState.character || {};

          // Create a character from the game state
          const character: GameCharacter = {
            id: characterId,
            name: characterInfo.name || "Adventurer",
            backstory:
              characterInfo.backstory || "An adventurer seeking glory.",
            appearanceDescription:
              characterInfo.appearance || "A mysterious figure.",
            personalityTraits: {
              primary: characterInfo.personalityTraits?.primary || "Curious",
              secondary: characterInfo.personalityTraits?.secondary || [
                "Brave",
              ],
              flaws: characterInfo.personalityTraits?.flaws || ["Impulsive"],
              motivations: characterInfo.personalityTraits?.motivations || [
                "Adventure",
              ],
            },
          };

          // Set player character immediately so it's available for choices
          setPlayerCharacter(character);
          console.log("Player character initialized:", character.name);

          // Use the current location from game state or default
          const location = createExampleLocation(); // Default location
          setCurrentLocation(location);

          // Load narrative history if available
          try {
            // Load narrative history from the database
            const history = await loadNarrativeHistory();

            if (history && history.length > 0) {
              // Convert the loaded history to NarrativeItem format with proper type casting
              const formattedHistory: NarrativeItem[] = history.map((item) => ({
                type: item.type as "narrative" | "playerResponse",
                content: item.content,
              }));

              setNarrativeHistory(formattedHistory);

              // Set the current response to the last narrative item
              const lastNarrative = formattedHistory
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

                // Set as current response
                setCurrentResponse(aiResponse);
                console.log(
                  "Current response set with choices:",
                  aiResponse.choices
                );
              }

              console.log(
                "Loaded narrative history:",
                formattedHistory.length,
                "items"
              );
            }
          } catch (err) {
            console.error("Failed to load narrative history:", err);
          }
        }

        setInitialized(true);
      } catch (err) {
        console.error("Failed to initialize game:", err);
      } finally {
        setIsProcessing(false); // Reset processing state after everything is done
      }
    }

    // Check if we already have state from server-side initialization
    if (session && gameState && !initialized && !isLoading) {
      initializeGame();
    } else if (!initialized && !isLoading) {
      initializeGame();
    }
  }, [
    characterId,
    initialized,
    isLoading,
    resumeGame,
    router,
    session,
    gameState,
    loadNarrativeHistory,
  ]);

  // Save narrative history when it changes
  useEffect(() => {
    async function persistHistory() {
      // Only save if we have a game state, narrative history exists, and we're not in a loading state
      if (
        gameState?.id &&
        narrativeHistory.length > 0 &&
        !isProcessing &&
        initialized
      ) {
        try {
          console.log(
            "Saving narrative history...",
            narrativeHistory.length,
            "items"
          );
          await saveNarrativeHistory(narrativeHistory);
        } catch (err) {
          console.error("Failed to save narrative history:", err);
        }
      }
    }

    // Debounce the save operation to avoid too many database writes
    const saveTimeout = setTimeout(persistHistory, 1000);
    return () => clearTimeout(saveTimeout);
  }, [
    gameState,
    narrativeHistory,
    saveNarrativeHistory,
    isProcessing,
    initialized,
  ]);

  // Setup player character and start narrative when game state is loaded
  useEffect(() => {
    if (gameState && !currentResponse && !isProcessing && initialized) {
      const setupNarrative = async () => {
        try {
          setIsProcessing(true);

          // Only create a character if we don't already have one
          if (!playerCharacter) {
            // Cast to our extended game state type
            const extendedState = gameState as unknown as ExtendedGameState;
            const characterInfo = extendedState.character || {};

            // Create a character from the game state
            const character: GameCharacter = {
              id: characterId,
              name: characterInfo.name || "Adventurer",
              backstory:
                characterInfo.backstory || "An adventurer seeking glory.",
              appearanceDescription:
                characterInfo.appearance || "A mysterious figure.",
              personalityTraits: {
                primary: characterInfo.personalityTraits?.primary || "Curious",
                secondary: characterInfo.personalityTraits?.secondary || [
                  "Brave",
                ],
                flaws: characterInfo.personalityTraits?.flaws || ["Impulsive"],
                motivations: characterInfo.personalityTraits?.motivations || [
                  "Adventure",
                ],
              },
            };

            setPlayerCharacter(character);
            console.log(
              "Player character created in setupNarrative:",
              character.name
            );
          }

          // Only set the location if we don't already have one
          if (!currentLocation) {
            const location = createExampleLocation(); // Default location
            setCurrentLocation(location);
          }

          // Start the narrative if we don't have any history
          if (narrativeHistory.length === 0) {
            const initialPrompt = "I look around, taking in my surroundings.";
            try {
              const response = await generateNarrativeResponse(
                initialPrompt,
                playerCharacter!, // We know it's not null now
                currentLocation,
                {} // Default options
              );

              // Check if it's a mock response (development fallback)
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
                  currentLocation: location,
                },
              });
            } catch (apiError: any) {
              // Handle different types of API errors
              console.error("AI API Error:", apiError);
              let errorMessage = "Unknown error occurred";
              let errorChoices = [
                { id: "retry", text: "Refresh and try again" },
              ];

              // Check for common error scenarios
              if (
                apiError.message?.includes("API key") ||
                apiError.message?.includes("authentication")
              ) {
                errorMessage =
                  "⚠️ AI Configuration Error: Missing or invalid API key. Please check your API configuration in the .env.local file.";
                errorChoices = [
                  { id: "retry", text: "Refresh and try again" },
                  { id: "help", text: "View setup instructions" },
                ];
              } else if (apiError.message?.includes("rate limit")) {
                errorMessage =
                  "⚠️ AI Service Rate Limit: The AI service has reached its request limit. Please try again in a few moments.";
              } else if (apiError.message?.includes("timeout")) {
                errorMessage =
                  "⚠️ AI Service Timeout: The request took too long to process. Please try again with a simpler prompt.";
              } else if (
                apiError.message?.includes("server error") ||
                apiError.message?.includes("5")
              ) {
                errorMessage =
                  "⚠️ AI Service Error: The AI service is experiencing technical difficulties. Please try again later.";
              } else if (
                apiError.message?.includes("network") ||
                apiError.message?.includes("connection")
              ) {
                errorMessage =
                  "⚠️ Network Error: Could not connect to the AI service. Please check your internet connection.";
              } else {
                // Generic error with the actual message
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
          }
        } catch (err) {
          console.error("Failed to start narrative:", err);
          // Add global error state for component rendering
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
    }
  }, [
    gameState,
    currentResponse,
    isProcessing,
    initialized,
    characterId,
    narrativeHistory.length,
    updateGameState,
    playerCharacter,
    currentLocation,
  ]);

  // Handle player choice
  const handleChoiceSelected = async (choiceIndex: number) => {
    // Add logging to debug button click issue
    console.log("Choice selected:", choiceIndex);
    console.log("Current response:", currentResponse);
    console.log("Player character:", playerCharacter);
    console.log("Is processing:", isProcessing);

    // Extra validation to ensure we have all necessary data
    if (!currentResponse) {
      console.error("No current response available");
      return;
    }

    if (!playerCharacter) {
      console.error("Player character is null - trying to recreate");

      // Attempt to recreate player character as a recovery mechanism
      if (gameState) {
        try {
          const extendedState = gameState as unknown as ExtendedGameState;
          const characterInfo = extendedState.character || {};

          // Create a character from the game state
          const character: GameCharacter = {
            id: characterId,
            name: characterInfo.name || "Adventurer",
            backstory:
              characterInfo.backstory || "An adventurer seeking glory.",
            appearanceDescription:
              characterInfo.appearance || "A mysterious figure.",
            personalityTraits: {
              primary: characterInfo.personalityTraits?.primary || "Curious",
              secondary: characterInfo.personalityTraits?.secondary || [
                "Brave",
              ],
              flaws: characterInfo.personalityTraits?.flaws || ["Impulsive"],
              motivations: characterInfo.personalityTraits?.motivations || [
                "Adventure",
              ],
            },
          };

          setPlayerCharacter(character);
          console.log("Recovery: Player character recreated");

          // After setting the player character, we'll return and let the user try again
          // This avoids state update race conditions
          alert("Please try selecting your choice again");
          return;
        } catch (err) {
          console.error("Failed to recreate player character:", err);
          alert("An error occurred. Please try refreshing the page.");
          return;
        }
      } else {
        alert("Game not properly initialized. Please try refreshing the page.");
        return;
      }
    }

    if (isProcessing) {
      console.warn("Already processing a choice");
      return;
    }

    try {
      setIsProcessing(true);

      // Ensure we have a choice to select
      if (!currentResponse.choices || !currentResponse.choices[choiceIndex]) {
        console.error("No valid choice found at index:", choiceIndex);
        setIsProcessing(false);
        return;
      }

      // Get the selected choice text
      const selectedChoice =
        currentResponse.choices[choiceIndex]?.text || "Unknown choice";
      console.log("Selected choice:", selectedChoice);

      // Add the player's choice to the narrative history
      const updatedHistory = [
        ...narrativeHistory,
        { type: "playerResponse", content: selectedChoice } as NarrativeItem,
      ];
      setNarrativeHistory(updatedHistory);

      try {
        // Get the next narrative based on the player's choice
        console.log(
          "Calling continueNarrative with player:",
          playerCharacter.name
        );

        const nextResponse = await continueNarrative(
          currentResponse,
          choiceIndex + 1, // Convert to 1-based index for continueNarrative
          playerCharacter,
          currentLocation,
          {} // Default options
        );

        console.log("Received next response from AI");

        // Check if it's a mock response (development fallback)
        if (nextResponse.metadata?.isMockResponse) {
          console.warn(
            "Using mock AI response due to missing API key configuration"
          );
        }

        // Update state
        setCurrentResponse(nextResponse);
        const finalHistory: NarrativeItem[] = [
          ...updatedHistory,
          { type: "narrative", content: nextResponse } as NarrativeItem,
        ];
        setNarrativeHistory(finalHistory);

        // Update game state with new narrative context
        await updateGameState({
          narrativeContext: nextResponse.text,
          worldState: {
            ...(gameState?.worldState as Record<string, any>),
            currentLocation,
          },
        });
      } catch (apiError: any) {
        // Handle AI API errors with more specific error types
        console.error("AI API Error in choice handling:", apiError);
        let errorMessage = "Unknown error occurred";
        const errorChoices = [
          { id: "retry", text: "Try this choice again" },
          { id: "different", text: "Try a different approach" },
        ];

        // Check for common error scenarios
        if (
          apiError.message?.includes("API key") ||
          apiError.message?.includes("authentication")
        ) {
          errorMessage = `⚠️ AI Configuration Error: Missing or invalid API key while processing your choice "${selectedChoice}".`;
        } else if (apiError.message?.includes("rate limit")) {
          errorMessage = `⚠️ AI Service Rate Limit: The AI service has reached its request limit while processing your choice "${selectedChoice}".`;
        } else if (apiError.message?.includes("timeout")) {
          errorMessage = `⚠️ AI Service Timeout: The request took too long to process your choice "${selectedChoice}".`;
        } else if (
          apiError.message?.includes("server error") ||
          apiError.message?.includes("5")
        ) {
          errorMessage = `⚠️ AI Service Error: The AI service is experiencing technical difficulties while processing your choice "${selectedChoice}".`;
        } else if (
          apiError.message?.includes("network") ||
          apiError.message?.includes("connection")
        ) {
          errorMessage = `⚠️ Network Error: Could not connect to the AI service while processing your choice "${selectedChoice}".`;
        } else {
          // Generic error with the actual message and selected choice
          errorMessage = `⚠️ AI Service Error while processing your choice "${selectedChoice}": ${
            apiError.message || errorMessage
          }`;
        }

        // Add the error as a new narrative entry
        const errorResponse: AIResponse = {
          text: errorMessage,
          choices: errorChoices,
        };

        setCurrentResponse(errorResponse);
        setNarrativeHistory((prev) => [
          ...prev,
          { type: "narrative", content: errorResponse },
        ]);
      }
    } catch (err) {
      console.error("Failed to process choice:", err);

      // Update UI with error info
      const errorResponse: AIResponse = {
        text: `An error occurred: ${
          err instanceof Error ? err.message : "Unknown error"
        }`,
        choices: [
          { id: "retry", text: "Try again" },
          { id: "back", text: "Go back" },
        ],
      };

      setCurrentResponse(errorResponse);
      setNarrativeHistory((prev) => [
        ...prev,
        { type: "narrative", content: errorResponse },
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle story reset
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

  if (isLoading || isProcessing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-xl text-amber-400">
          {isLoading ? "Loading your adventure..." : "The story unfolds..."}
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center">
        <div className="bg-red-900 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            An Error Occurred
          </h2>
          <p className="text-gray-300">{error}</p>
        </div>
        <Link
          href="/characters"
          className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-lg font-bold"
        >
          Return to Characters
        </Link>
      </div>
    );
  }

  if (!gameState || !session) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center">
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-amber-400 mb-2">
            Game Not Initialized
          </h2>
          <p className="text-gray-300">
            Unable to load game state or session. Please try again.
          </p>
        </div>
        <Link
          href="/characters"
          className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-lg font-bold"
        >
          Return to Characters
        </Link>
      </div>
    );
  }

  // Get world state info
  const worldState = gameState.worldState as unknown as WorldState;
  const timeOfDay = worldState?.timeOfDay || "Day";

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col h-screen">
      {/* Game header */}
      <div className="bg-gray-800 rounded-t-lg p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-amber-400">
          {playerCharacter?.name}&apos;s Adventure
        </h1>
        <p className="text-gray-300">
          {currentLocation?.name} - {timeOfDay}
        </p>
      </div>

      {/* Narrative history */}
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

      {/* Display choices separately based on the current response */}
      {currentResponse &&
        currentResponse.choices &&
        currentResponse.choices.length > 0 &&
        !isProcessing && (
          <div className="bg-gray-700 p-4 rounded-lg mb-4 border-t border-gray-600">
            <div className="space-y-2">
              {currentResponse.choices.map((choice, choiceIndex) => (
                <button
                  key={choice.id || `choice-${choiceIndex}`}
                  onClick={() => handleChoiceSelected(choiceIndex)}
                  disabled={isProcessing}
                  className="w-full text-left p-3 bg-amber-700 hover:bg-amber-600 text-white rounded-md transition"
                >
                  {choice.text}
                </button>
              ))}
            </div>
          </div>
        )}

      {/* Controls */}
      <div className="bg-gray-800 rounded-b-lg p-4 border-t border-gray-700">
        <div className="flex justify-between">
          <Link
            href="/characters"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
          >
            Exit Adventure
          </Link>

          <div className="flex space-x-2">
            <button
              onClick={handleResetStory}
              className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-md"
            >
              Reset Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
