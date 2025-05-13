"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createCharacter } from "@/lib/actions/character-actions";

interface CharacterCreationFormProps {
  userId: string;
}

/**
 * Character Creation Form
 *
 * Form for creating a new character with customizable traits and appearance
 */
export function CharacterCreationForm({ userId }: CharacterCreationFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState("");
  const [backstory, setBackstory] = useState("");
  const [appearance, setAppearance] = useState("");
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);

  // Available personality traits
  const personalityTraits = [
    "Brave",
    "Cautious",
    "Clever",
    "Curious",
    "Determined",
    "Honest",
    "Impulsive",
    "Kind",
    "Loyal",
    "Mysterious",
    "Noble",
    "Reckless",
    "Stoic",
    "Stubborn",
    "Wise",
  ];

  // Toggle trait selection
  const toggleTrait = (trait: string) => {
    if (selectedTraits.includes(trait)) {
      setSelectedTraits(selectedTraits.filter((t) => t !== trait));
    } else {
      if (selectedTraits.length < 5) {
        setSelectedTraits([...selectedTraits, trait]);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate input
      if (name.trim().length < 2) {
        throw new Error("Character name must be at least 2 characters long");
      }

      if (selectedTraits.length < 1) {
        throw new Error("Please select at least one personality trait");
      }

      // Create character using server action
      const result = await createCharacter({
        userId,
        name: name.trim(),
        backstory: backstory.trim() || null,
        appearanceDescription: appearance.trim() || null,
        personalityTraits: selectedTraits,
      });

      if (result.success) {
        // Redirect to hub
        router.push("/player-hub");
        router.refresh();
      } else {
        setError(result.error || "Failed to create character");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-lg">
      {error && (
        <div className="mb-6 p-4 bg-red-400/10 border border-red-400 rounded-md text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Character Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Character Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            placeholder="Enter character name"
            required
          />
        </div>

        {/* Personality Traits */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Personality Traits <span className="text-red-400">*</span>
            <span className="text-gray-400 ml-2 text-xs">
              (Select up to 5, at least 1 required)
            </span>
          </label>
          <div className="flex flex-wrap gap-2">
            {personalityTraits.map((trait) => (
              <button
                key={trait}
                type="button"
                onClick={() => toggleTrait(trait)}
                className={`px-3 py-1 text-sm rounded-full ${
                  selectedTraits.includes(trait)
                    ? "bg-amber-500 text-gray-900"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {trait}
              </button>
            ))}
          </div>
          <p className="mt-1 text-xs text-gray-400">
            Selected: {selectedTraits.length}/5
          </p>
        </div>

        {/* Appearance */}
        <div>
          <label
            htmlFor="appearance"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Character Appearance
          </label>
          <textarea
            id="appearance"
            value={appearance}
            onChange={(e) => setAppearance(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            placeholder="Describe how your character looks"
          />
        </div>

        {/* Backstory */}
        <div>
          <label
            htmlFor="backstory"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Character Backstory
          </label>
          <textarea
            id="backstory"
            value={backstory}
            onChange={(e) => setBackstory(e.target.value)}
            rows={5}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            placeholder="Share your character's history and background"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-md hover:from-amber-600 hover:to-yellow-700 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Creating..." : "Create Character"}
          </button>
        </div>
      </form>
    </div>
  );
}
