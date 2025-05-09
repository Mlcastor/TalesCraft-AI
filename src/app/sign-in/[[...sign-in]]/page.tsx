import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-400 mb-2">Tales Craft AI</h1>
          <p className="text-gray-300">Sign in to continue your adventure</p>
        </div>
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white",
              formButtonSecondary: 
                "bg-gray-700 hover:bg-gray-600 text-white",
              card: "bg-transparent",
              headerTitle: "text-amber-400",
              headerSubtitle: "text-gray-300",
              socialButtonsBlockButton: "border-gray-600 text-white hover:bg-gray-700",
              socialButtonsBlockButtonText: "text-white",
              formFieldLabel: "text-gray-300",
              formFieldInput: "bg-gray-700 border-gray-600 text-white",
              footerActionLink: "text-amber-400 hover:text-amber-300",
            },
          }}
          routing="path"
          path="/sign-in"
        />
      </div>
    </div>
  );
} 