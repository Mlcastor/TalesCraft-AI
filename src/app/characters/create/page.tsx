"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CharacterFormData {
  name: string;
  backstory: string;
  appearanceDescription: string;
  personalityTraits: string[];
}

export default function CreateCharacterPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<CharacterFormData>({
    name: "",
    backstory: "",
    appearanceDescription: "",
    personalityTraits: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePersonalityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          personalityTraits: [...prev.personalityTraits, value],
        };
      } else {
        return {
          ...prev,
          personalityTraits: prev.personalityTraits.filter(
            (trait) => trait !== value
          ),
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate form data
      if (!formData.name.trim()) {
        throw new Error("Character name is required");
      }

      // Submit the character data
      const response = await fetch("/api/characters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create character");
      }

      const data = await response.json();

      // Navigate to the game page or character list
      router.push(`/game?characterId=${data.id}`);
    } catch (err) {
      console.error("Error creating character:", err);
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // List of personality traits to choose from
  const availableTraits = [
    "Brave",
    "Cautious",
    "Wise",
    "Reckless",
    "Kind",
    "Selfish",
    "Honest",
    "Cunning",
    "Loyal",
    "Impulsive",
    "Patient",
    "Curious",
    "Vengeful",
    "Forgiving",
    "Stubborn",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-400 mb-2">
            Create Your Character
          </h1>
          <p className="text-gray-300">
            Fill in the details below to create your character for the
            adventure.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg text-white">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 p-6 rounded-lg border border-gray-700"
        >
          {/* Character Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-amber-400 mb-2 font-medium"
            >
              Character Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
              placeholder="Enter character name"
            />
          </div>

          {/* Backstory */}
          <div>
            <label
              htmlFor="backstory"
              className="block text-amber-400 mb-2 font-medium"
            >
              Backstory
            </label>
            <textarea
              id="backstory"
              name="backstory"
              value={formData.backstory}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
              placeholder="Share your character's history and motivations..."
            />
          </div>

          {/* Appearance Description */}
          <div>
            <label
              htmlFor="appearanceDescription"
              className="block text-amber-400 mb-2 font-medium"
            >
              Appearance
            </label>
            <textarea
              id="appearanceDescription"
              name="appearanceDescription"
              value={formData.appearanceDescription}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
              placeholder="Describe how your character looks..."
            />
          </div>

          {/* Personality Traits */}
          <div>
            <label className="block text-amber-400 mb-2 font-medium">
              Personality Traits
            </label>
            <p className="text-gray-400 mb-3 text-sm">
              Select up to 5 traits that define your character&apos;s
              personality.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {availableTraits.map((trait) => (
                <div key={trait} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`trait-${trait}`}
                    name="personalityTraits"
                    value={trait}
                    checked={formData.personalityTraits.includes(trait)}
                    onChange={handlePersonalityChange}
                    disabled={
                      formData.personalityTraits.length >= 5 &&
                      !formData.personalityTraits.includes(trait)
                    }
                    className="mr-2 text-amber-500 focus:ring-amber-500 h-4 w-4 rounded-sm bg-gray-700 border-gray-500"
                  />
                  <label htmlFor={`trait-${trait}`} className="text-gray-300">
                    {trait}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-700">
            <Link
              href="/game"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium rounded-md 
                ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
            >
              {isSubmitting ? "Creating..." : "Create Character"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
