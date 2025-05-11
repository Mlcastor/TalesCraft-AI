"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

/**
 * Gets the appropriate image path based on format support
 * @param name Base name of the image
 * @returns Full path to the image with appropriate extension
 */
const getImagePath = (name: string) => {
  // In a production environment, you would use detection logic here
  const supportsWebP = true;
  return supportsWebP ? `/images/${name}.webp` : `/images/${name}.png`;
};

export default function Home() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [nextBgIndex, setNextBgIndex] = useState(1); // Track the next background to preload
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  const backgrounds = useMemo(
    () => [
      getImagePath("bg-fantasy"),
      getImagePath("bg-scifi"),
      getImagePath("bg-dungeon"),
      getImagePath("bg-cyberpunk"),
      getImagePath("bg-postapocalyptic"),
    ],
    []
  );

  const changeBackground = useCallback(() => {
    setIsTransitioning(true);

    // Prepare the next background index
    const nextIndex = (currentBgIndex + 1) % backgrounds.length;
    setNextBgIndex(nextIndex);

    // After a short delay, update the current background and reset transition state
    setTimeout(() => {
      setCurrentBgIndex(nextIndex);
      setIsTransitioning(false);
      // Preload the next image in sequence
      setNextBgIndex((nextIndex + 1) % backgrounds.length);
    }, 1000); // 1 second for transition
  }, [currentBgIndex, backgrounds.length]);

  useEffect(() => {
    // Skip animation for users who prefer reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const interval = setInterval(changeBackground, 7000); // Change every 7 seconds
    return () => clearInterval(interval);
  }, [changeBackground]);

  /**
   * Handles redirection based on authentication status
   */
  const handleAdventureClick = () => {
    if (!isLoaded) return;

    if (userId) {
      router.push("/characters");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section with changing background */}
      <div className="relative w-full flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden">
        {/* Background container - only render current and next backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Current background */}
          <div
            className={`absolute inset-0 bg-no-repeat bg-cover transition-opacity ${
              isTransitioning ? "opacity-0" : "opacity-20"
            }`}
            style={{
              backgroundImage: `url(${backgrounds[currentBgIndex]})`,
              transitionDuration: "1000ms",
              willChange: "opacity",
            }}
            aria-hidden="true"
          />

          {/* Next background (preloaded) */}
          <div
            className={`absolute inset-0 bg-no-repeat bg-cover transition-opacity ${
              isTransitioning ? "opacity-20" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${backgrounds[nextBgIndex]})`,
              transitionDuration: "1000ms",
              willChange: "opacity",
            }}
            aria-hidden="true"
          />

          {/* Preload the next image without displaying it */}
          <link rel="preload" as="image" href={backgrounds[nextBgIndex]} />
        </div>

        <div className="z-10 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500">
            Tales Craft AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Forge your destiny in an AI-powered, open-source text adventure
            where your choices shape the story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleAdventureClick}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-md hover:from-amber-600 hover:to-yellow-700 transition-all transform hover:scale-105 font-medium text-lg shadow-lg"
            >
              Begin Your Adventure
            </button>
            <Link
              href="https://github.com/Mlcastor/TalesCraft-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 border border-gray-600 text-white rounded-md hover:bg-gray-700 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub Project
            </Link>
          </div>
          <p className="mt-4 text-amber-300 text-sm">
            100% Open Source - Community-driven development
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-400">
          Embark on a Dynamic Adventure
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 shadow-xl">
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
            <h3 className="text-xl font-semibold mb-2">
              Create Your Character
            </h3>
            <p className="text-gray-300">
              Craft a unique hero with a custom backstory, abilities, and
              personality traits that influence your adventure.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 shadow-xl">
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
              Experience a living narrative that adapts to your choices,
              creating a unique story tailored to your actions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 shadow-xl">
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
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 shadow-xl">
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
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 shadow-xl">
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
              Every decision matters, shaping your relationships, the world
              around you, and the ultimate outcome of your journey.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 shadow-xl">
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
            <h3 className="text-xl font-semibold mb-2">
              Character Progression
            </h3>
            <p className="text-gray-300">
              Grow in power and ability as you overcome challenges, unlock new
              skills, and collect powerful items.
            </p>
          </div>
        </div>
      </div>

      {/* Open Source Section */}
      <div className="bg-gray-900 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800 bg-opacity-50 rounded-lg border border-amber-600 p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">
              Open Source Project
            </h2>
            <p className="text-gray-300 mb-4">
              Tales Craft AI is fully open source under the MIT license. We
              believe in community-driven development and welcome contributions
              from developers of all skill levels.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                href="https://github.com/Mlcastor/TalesCraft-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Repository
              </Link>
              <Link
                href="https://github.com/Mlcastor/TalesCraft-AI/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                Report Issues
              </Link>
              <Link
                href="https://github.com/Mlcastor/TalesCraft-AI/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                How to Contribute
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Your Adventure Awaits</h2>
          <p className="text-xl text-gray-300 mb-8">
            Every story is unique. Every choice is yours. Begin your journey
            into a world crafted by AI and shaped by your decisions.
          </p>
          <button
            onClick={handleAdventureClick}
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-md hover:from-amber-600 hover:to-yellow-700 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
          >
            Start Your Epic Tale
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4 text-center text-gray-400">
        <div className="max-w-7xl mx-auto">
          <p>
            © {new Date().getFullYear()} Tales Craft AI. All rights reserved.
          </p>
          <p className="mt-1">An open-source project under the MIT License</p>
          <div className="mt-2">
            <Link
              href="https://github.com/Mlcastor/TalesCraft-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
