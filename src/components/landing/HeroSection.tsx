"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/Primitives";

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

export function HeroSection() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [nextBgIndex, setNextBgIndex] = useState(1); // Track the next background to preload
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { isAuthenticated, isLoading, user } = useAuthContext();
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
    if (isLoading) return;

    if (isAuthenticated && user) {
      router.push("/characters");
    } else {
      router.push("/login");
    }
  };

  return (
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
          Forge your destiny in an AI-powered, open-source text adventure where
          your choices shape the story
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleAdventureClick}>Begin Your Adventure</Button>
          <Button
            href="https://github.com/Mlcastor/TalesCraft-AI"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
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
          </Button>
        </div>
        <p className="mt-4 text-amber-300 text-sm">
          100% Open Source - Community-driven development
        </p>
      </div>
    </div>
  );
}
