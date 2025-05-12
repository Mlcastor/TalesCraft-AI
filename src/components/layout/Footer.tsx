"use client";

import Link from "next/link";

/**
 * Footer component for the application
 * Contains copyright information and useful links
 */
export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4 text-center text-gray-400">
      <div className="max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Tales Craft AI. All rights reserved.</p>
        <p className="mt-1">An open-source project under the MIT License</p>
        <div className="mt-4 flex justify-center space-x-6">
          <Link
            href="https://github.com/Mlcastor/TalesCraft-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://github.com/Mlcastor/TalesCraft-AI/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors"
          >
            Report Issues
          </Link>
          <Link
            href="https://github.com/Mlcastor/TalesCraft-AI/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors"
          >
            Contribute
          </Link>
        </div>
      </div>
    </footer>
  );
}

// Default export for backward compatibility
export default Footer;
