"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Primitives";
import { UserMenu } from "@/components/auth/UserMenu";
import {
  AuthenticatedOnly,
  UnauthenticatedOnly,
} from "@/components/auth/AuthWrapper";

/**
 * Main navigation component for the application
 * Displays different links based on authentication status
 */
export function Navigation() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 py-3 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-amber-400">
          Tales Craft AI
        </Link>

        <div className="flex items-center gap-6">
          <AuthenticatedOnly>
            <Link
              href="/player-hub"
              className="text-white hover:text-amber-400 transition-colors"
            >
              Player Hub
            </Link>
            <Link
              href="/profile"
              className="text-white hover:text-amber-400 transition-colors"
            >
              Profile
            </Link>
            <UserMenu />
          </AuthenticatedOnly>

          <UnauthenticatedOnly>
            <Button href="/login" variant="link" className="p-0">
              Sign In
            </Button>
            <Button href="/register" variant="primary" className="px-4 py-2">
              Sign Up
            </Button>
          </UnauthenticatedOnly>
        </div>
      </div>
    </nav>
  );
}

// Default export for backward compatibility
export default Navigation;
