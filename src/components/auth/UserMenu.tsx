"use client";

import { useState, useRef, useEffect } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import Image from "next/image";

export function UserMenu() {
  const { user, logout } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside the menu to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // If no user, don't render anything
  if (!user) return null;

  // Generate initials for avatar fallback
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  async function handleLogout() {
    setIsOpen(false);
    await logout();
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
        aria-label="User menu"
      >
        {initials}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg overflow-hidden z-10">
          <div className="p-3 border-b border-gray-700">
            <p className="text-sm font-medium text-white truncate">
              {user.name}
            </p>
            <p className="text-xs text-gray-400 truncate">{user.email}</p>
          </div>

          <div className="py-1">
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>

            <Link
              href="/settings"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Settings
            </Link>

            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
