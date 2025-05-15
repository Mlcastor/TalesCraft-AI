"use client";

import React, { ReactNode } from "react";
import { SafeSessionProvider } from "./SafeSessionContext";
import { GameUIProvider } from "./GameUIContext";
import { GameSession, GameState } from "@/types/game";

interface GameProvidersProps {
  children: ReactNode;
  initialSession?: GameSession;
  initialUIState?: Record<string, any>;
}

/**
 * Combined game providers component
 *
 * Wraps both SafeSessionProvider and GameUIProvider in a single component
 * for easier context composition and usage.
 *
 * This component ensures proper nesting order and provides a single entry point
 * for game context initialization.
 */
export function GameProviders({
  children,
  initialSession,
  initialUIState = {},
}: GameProvidersProps) {
  return (
    <SafeSessionProvider initialSessionId={initialSession?.id}>
      <GameUIProvider initialState={initialUIState}>{children}</GameUIProvider>
    </SafeSessionProvider>
  );
}

/**
 * HOC for wrapping components with game providers
 *
 * @param Component The component to wrap
 * @returns Wrapped component with game providers
 */
export function withGameProviders<P extends object>(
  Component: React.ComponentType<P>
) {
  type WithGameProvidersProps = P & Omit<GameProvidersProps, "children">;

  const WithGameProviders = (props: WithGameProvidersProps) => {
    const { initialSession, initialUIState, ...componentProps } = props;

    return (
      <GameProviders
        initialSession={initialSession}
        initialUIState={initialUIState}
      >
        <Component {...(componentProps as P)} />
      </GameProviders>
    );
  };

  WithGameProviders.displayName = `WithGameProviders(${
    Component.displayName || Component.name || "Component"
  })`;

  return WithGameProviders;
}

export default GameProviders;
