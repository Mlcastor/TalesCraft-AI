"use client";

import { useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { AccountSettings } from "./tabs/AccountSettings";
import { GamePreferences } from "./tabs/GamePreferences";

type TabType = "account" | "preferences";

/**
 * ProfileContent Component
 *
 * Main content area for the profile page with tabs for different sections.
 */
export function ProfileContent() {
  const [activeTab, setActiveTab] = useState<TabType>("account");
  const { isLoading, user } = useAuthContext();

  if (isLoading || !user) {
    return null; // ProfileHeader handles loading/not logged in states
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "account":
        return <AccountSettings />;
      case "preferences":
        return <GamePreferences />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-lg overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-700">
        <button
          className={`px-4 py-3 font-medium ${
            activeTab === "account"
              ? "bg-amber-500 text-white"
              : "text-gray-300 hover:bg-gray-700"
          } transition-colors`}
          onClick={() => setActiveTab("account")}
        >
          Account Settings
        </button>
        <button
          className={`px-4 py-3 font-medium ${
            activeTab === "preferences"
              ? "bg-amber-500 text-white"
              : "text-gray-300 hover:bg-gray-700"
          } transition-colors`}
          onClick={() => setActiveTab("preferences")}
        >
          Game Preferences
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6">{renderTabContent()}</div>
    </div>
  );
}
