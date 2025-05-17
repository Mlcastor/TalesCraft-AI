import { redirect } from "next/navigation";
import { startGameServerAction } from "@/lib/actions/gameFlowActions";

interface PageProps {
  params: Promise<{ characterId: string; worldId: string }>;
}

export default async function PlayPage({ params }: PageProps) {
  const { characterId, worldId } = await params;
  const result = await startGameServerAction(characterId, worldId);

  if (result.gameState) {
    redirect(`/game/${result.gameState.id}`);
  }

  // Fallback: error handling
  redirect(
    `/player-hub/world/${worldId}?error=${encodeURIComponent(
      result.error ?? "Unable to start game"
    )}`
  );
}
