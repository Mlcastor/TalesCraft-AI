import { redirect } from "next/navigation";
import GameLayout from "@/components/game/GameLayout";
import { GameProvider } from "@/components/game/GameProvider";
import NarrativeDisplay from "@/components/game/NarrativeDisplay";
import GameControls from "@/components/game/GameControls";
import { getGameSession } from "@/lib/actions/game-session-actions";
import { GameState } from "@/types/game";

export default async function GamePage({
  params,
}: {
  params: { sessionId: string };
}) {
  const session = await getGameSession(params.sessionId);

  if (!session) {
    redirect("/player-hub");
  }

  // Ensure narrative text is a string (not null)
  const initialState: Partial<GameState> = {
    ...session.initialState,
    narrative: {
      ...session.initialState.narrative,
      text: session.initialState.narrative.text || "",
    },
  };

  return (
    <GameProvider initialState={initialState}>
      <GameLayout>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold">{session.character.name}</h1>
            <p className="text-sm text-muted-foreground">
              {session.world.name} -{" "}
              {session.initialState.location?.name || "Unknown Location"}
            </p>
          </div>

          <div className="flex-1 overflow-hidden relative">
            <NarrativeDisplay />
            <GameControls />
          </div>
        </div>
      </GameLayout>
    </GameProvider>
  );
}
