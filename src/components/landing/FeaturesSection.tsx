/**
 * FeaturesSection Component
 *
 * Displays the key features of the application in a responsive grid layout.
 */

import { SectionTitle, Card } from "@/components/ui/Primitives";

export function FeaturesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <SectionTitle>Embark on a Dynamic Adventure</SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <Card>
          <div className="text-amber-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Create Your Character</h3>
          <p className="text-gray-300">
            Craft a unique hero with a custom backstory, abilities, and
            personality traits that influence your adventure.
          </p>
        </Card>

        {/* Feature 2 */}
        <Card>
          <div className="text-amber-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            AI-Powered Storytelling
          </h3>
          <p className="text-gray-300">
            Experience a living narrative that adapts to your choices, creating
            a unique story tailored to your actions.
          </p>
        </Card>

        {/* Feature 3 */}
        <Card>
          <div className="text-amber-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Explore a Rich World</h3>
          <p className="text-gray-300">
            Journey through diverse locations filled with lore, secrets, and
            memorable characters waiting to be discovered.
          </p>
        </Card>

        {/* Feature 4 */}
        <Card>
          <div className="text-amber-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Strategic Combat</h3>
          <p className="text-gray-300">
            Face foes in tactical turn-based combat where your skills,
            equipment, and decision-making determine victory.
          </p>
        </Card>

        {/* Feature 5 */}
        <Card>
          <div className="text-amber-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Meaningful Choices</h3>
          <p className="text-gray-300">
            Every decision matters, shaping your relationships, the world around
            you, and the ultimate outcome of your journey.
          </p>
        </Card>

        {/* Feature 6 */}
        <Card>
          <div className="text-amber-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Character Progression</h3>
          <p className="text-gray-300">
            Grow in power and ability as you overcome challenges, unlock new
            skills, and collect powerful items.
          </p>
        </Card>
      </div>
    </div>
  );
}
