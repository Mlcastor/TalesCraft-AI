// Server Component (no "use client" directive)
import Link from "next/link";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { OpenSourceSection } from "@/components/landing/OpenSourceSection";
import { CallToAction } from "@/components/landing/CallToAction";

export const metadata = {
  title: "Tales Craft AI - AI-Powered Text Adventure Game",
  description:
    "Forge your destiny in an AI-powered text adventure game where your choices shape the story",
};

/**
 * Home/Landing Page Component
 *
 * This is a server component that uses client components for interactive sections
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section with changing background */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Open Source Section */}
      <OpenSourceSection />

      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}
