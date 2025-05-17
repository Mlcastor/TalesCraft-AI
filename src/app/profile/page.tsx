// This is a server component
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileContent } from "@/components/profile/ProfileContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile | Tales Craft AI",
  description: "Manage your account settings and user preferences",
};

/**
 * Profile Page
 *
 * A server component that renders the user profile page with client components
 * for interactive elements. Protected by auth middleware.
 */
export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader />
        <ProfileContent />
      </div>
    </div>
  );
}
