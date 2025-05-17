"use client";

import Link from "next/link";

/**
 * Footer Component
 *
 * Displays site-wide footer with links and copyright information.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-amber-400">
              Tales Craft AI
            </Link>
            <p className="text-sm text-gray-400 mt-1">
              An AI-powered text adventure game
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <Link
              href="/about"
              className="text-gray-300 hover:text-amber-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-amber-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-amber-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="https://github.com/Mlcastor/TalesCraft-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-amber-400 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
          © {currentYear} Tales Craft AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// Default export for backward compatibility
export default Footer;
