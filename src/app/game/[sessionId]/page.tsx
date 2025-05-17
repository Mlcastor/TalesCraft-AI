import { GameContainer, GameLoadingScreen } from "@/components/game";
import { Suspense } from "react";
import { GameProvider } from "@/contexts/GameProvider";

export default async function GamePage() {
  return (
    <Suspense fallback={<GameLoadingScreen />}>
      <GameProvider>
        <GameContainer />
      </GameProvider>
    </Suspense>
  );
}
