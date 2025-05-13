"use client";

import Link from "next/link";
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
            <Link
              href="/login"
              className="text-white hover:text-amber-400 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-md hover:from-amber-600 hover:to-yellow-700 transition-colors"
            >
              Sign Up
            </Link>
          </UnauthenticatedOnly>
        </div>
      </div>
    </nav>
  );
}

// Default export for backward compatibility
export default Navigation;
