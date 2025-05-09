import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-400 mb-8 text-center">Your Profile</h1>
        <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-xl overflow-hidden">
          <UserProfile
            appearance={{
              elements: {
                card: "bg-transparent shadow-none",
                navbar: "bg-gray-800 border-b border-gray-700",
                navbarButton: "text-amber-400 hover:text-amber-300",
                headerTitle: "text-amber-400",
                headerSubtitle: "text-gray-300",
                formButtonPrimary: "bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700",
                formButtonSecondary: "bg-gray-700 hover:bg-gray-600 text-white",
                formFieldLabel: "text-gray-300",
                formFieldInput: "bg-gray-700 border-gray-600 text-white",
                userPreviewMainIdentifier: "text-white",
                userPreviewSecondaryIdentifier: "text-gray-300",
              },
            }}
            routing="path"
            path="/profile"
          />
        </div>
      </div>
    </div>
  );
} 