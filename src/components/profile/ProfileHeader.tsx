"use client";

import { useAuthContext } from "@/contexts/AuthContext";
import { Spinner } from "@/components/ui/Spinner";
import { SessionUser } from "@/types/authTypes";

/**
 * ProfileHeader Component
 *
 * Displays the user's profile header with their name and basic information.
 */
export function ProfileHeader() {
  const { isLoading, user } = useAuthContext();

  if (isLoading) {
    return (
      <div className="py-10 text-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-amber-400 mb-3">Profile</h1>
        <p className="text-gray-300">Please sign in to view your profile</p>
      </div>
    );
  }

  // Format dates in a user-friendly way
  const formatDate = (date: Date | string | undefined) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="mb-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-amber-400 mb-4">Your Profile</h1>
        <p className="text-gray-300 mb-6">
          Manage your account and preferences
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar/Initial Circle */}
          <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {user.name
              ? user.name.charAt(0).toUpperCase()
              : user.email.charAt(0).toUpperCase()}
          </div>

          {/* User Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">
              {user.name || "User"}
            </h2>
            <p className="text-gray-300 mb-4">{user.email}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Member since:</span>{" "}
                <span className="text-gray-200">
                  {formatDate(user.createdAt)}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Last login:</span>{" "}
                <span className="text-gray-200">
                  {/* lastLogin may not be available in SessionUser */}
                  {formatDate(user.createdAt)}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Email verified:</span>{" "}
                <span
                  className={`${
                    user.emailVerified ? "text-green-400" : "text-yellow-400"
                  }`}
                >
                  {user.emailVerified ? "Verified" : "Not verified"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
