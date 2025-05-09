import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";

export default async function GamePage() {
  const { userId } = await auth();
  const user = await currentUser();
  
  if (!userId || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <main className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-3 text-amber-400">Your AI-Powered Adventure Awaits</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re crafting an immersive text-based RPG where your choices shape a unique story powered by advanced AI.
          </p>
          <div className="mt-6 inline-block px-6 py-3 bg-amber-500 text-gray-900 rounded-lg font-bold">
            Coming Soon
          </div>
        </div>
        
        {/* Image Showcase Section */}
        <div className="relative h-80 mb-12 rounded-xl overflow-hidden bg-gray-800 border border-gray-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-2">Dynamic Story Generation</h3>
              <p className="text-gray-300">Illustration of the narrative engine will appear here</p>
            </div>
          </div>
          {/* Image placeholder - replace with actual image when available */}
          {/* <Image src="/images/story-preview.jpg" alt="AI Storytelling Preview" fill className="object-cover opacity-40" /> */}
        </div>
        
        {/* Feature Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Feature 1 */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-amber-400 transition-colors">
            <div className="h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Character Creation Preview</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-amber-400">Character Creation</h3>
            <p className="text-gray-300">Create unique heroes with AI-assisted backstories that influence your adventure.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-amber-400 transition-colors">
            <div className="h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-sm">World Exploration Preview</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-amber-400">World Exploration</h3>
            <p className="text-gray-300">Discover rich environments with dynamic descriptions generated uniquely for you.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-amber-400 transition-colors">
            <div className="h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Meaningful Choices Preview</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-amber-400">Meaningful Choices</h3>
            <p className="text-gray-300">Every decision shapes your story with consequences that persist throughout your journey.</p>
          </div>
        </div>
        
        {/* Development Timeline */}
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-amber-400">Development Progress</h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-1/4 text-right pr-4 text-gray-300">Authentication</div>
              <div className="w-1/2">
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full w-full"></div>
                </div>
              </div>
              <div className="w-1/4 pl-4 text-green-400">Completed</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-1/4 text-right pr-4 text-gray-300">Character Creation</div>
              <div className="w-1/2">
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-2 bg-yellow-500 rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="w-1/4 pl-4 text-yellow-400">In Progress</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-1/4 text-right pr-4 text-gray-300">Narrative Engine</div>
              <div className="w-1/2">
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-2 bg-yellow-500 rounded-full w-1/2"></div>
                </div>
              </div>
              <div className="w-1/4 pl-4 text-yellow-400">In Progress</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-1/4 text-right pr-4 text-gray-300">World Exploration</div>
              <div className="w-1/2">
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full w-1/4"></div>
                </div>
              </div>
              <div className="w-1/4 pl-4 text-blue-400">Started</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-1/4 text-right pr-4 text-gray-300">NPC Interactions</div>
              <div className="w-1/2">
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-2 bg-gray-600 rounded-full w-0"></div>
                </div>
              </div>
              <div className="w-1/4 pl-4 text-gray-400">Planned</div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-amber-400">Want to be notified when we launch?</h3>
          <div className="inline-block">
            <Link 
              href="/email-signup"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-lg font-bold transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          <p>Tales Craft AI - An AI-powered narrative adventure</p>
          <p className="text-sm mt-2">© 2023 Tales Craft AI Team</p>
        </div>
      </footer>
    </div>
  );
} 