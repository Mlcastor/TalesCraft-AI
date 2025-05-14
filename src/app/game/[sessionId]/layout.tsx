"use client";

import { ReactNode } from "react";
import { SessionProvider } from "@/contexts/SessionContext";

interface GameLayoutProps {
  children: ReactNode;
  params: {
    sessionId: string;
  };
}

/**
 * Layout component for game pages
 * Wraps all game content with SessionProvider for session management
 */
export default function GameLayout({ children, params }: GameLayoutProps) {
  const { sessionId } = params;

  return (
    <SessionProvider initialSessionId={sessionId}>
      <div className="flex flex-col h-full">{children}</div>
    </SessionProvider>
  );
}
