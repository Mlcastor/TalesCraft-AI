"use client";

import { useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { Spinner } from "@/components/ui/Spinner";

/**
 * AccountSettings Component
 *
 * Provides form for updating account settings like name, email, and password.
 */
export function AccountSettings() {
  const { user, isLoading } = useAuthContext();
  const [formState, setFormState] = useState({
    name: user?.name || "",
    email: user?.email || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);

    try {
      // To be implemented with server actions
      // This is where you'd call the update profile API endpoint

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage({
        text: "Account settings updated successfully!",
        type: "success",
      });
    } catch (error) {
      setMessage({
        text: "Failed to update account settings. Please try again.",
        type: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="py-10 text-center">
        <Spinner size="md" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-amber-400 mb-4">
        Account Settings
      </h2>

      {message && (
        <div
          className={`p-3 mb-4 rounded ${
            message.type === "success"
              ? "bg-green-500/10 border border-green-500/50 text-green-500"
              : "bg-red-500/10 border border-red-500/50 text-red-500"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Profile Information */}
        <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-white mb-3">
            Profile Information
          </h3>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
              {!user?.emailVerified && (
                <p className="mt-1 text-sm text-yellow-400">
                  Email not verified.
                  <button
                    type="button"
                    className="ml-2 underline hover:text-yellow-300"
                  >
                    Resend verification email
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-white mb-3">
            Change Password
          </h3>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="currentPassword"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formState.currentPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
            </div>

            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formState.newPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
              <p className="mt-1 text-xs text-gray-400">
                Must be at least 8 characters with uppercase, lowercase, and
                numbers
              </p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formState.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
            </div>
          </div>
        </div>

        {/* Delete Account */}
        <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-white mb-3">Danger Zone</h3>
          <p className="text-gray-300 mb-4">
            This action is irreversible and will permanently delete all your
            data including characters, game progress, and settings.
          </p>
          <button
            type="button"
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            // Will need to add a confirmation modal
            onClick={() =>
              window.confirm(
                "Are you sure you want to delete your account? This cannot be undone."
              )
            }
          >
            Delete Account
          </button>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-md hover:from-amber-600 hover:to-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
