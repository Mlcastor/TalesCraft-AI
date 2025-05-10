import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { characterRepository } from "@/lib/db/character";

/**
 * POST /api/characters
 * Creates a new character for the authenticated user
 */
export async function POST(request: NextRequest) {
  try {
    // Get authenticated user
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { message: "You must be logged in to create a character" },
        { status: 401 }
      );
    }

    // Parse the request body
    const body = await request.json();

    // Validate required fields
    if (!body.name) {
      return NextResponse.json(
        { message: "Character name is required" },
        { status: 400 }
      );
    }

    // Limit personality traits to 5
    const personalityTraits = Array.isArray(body.personalityTraits)
      ? body.personalityTraits.slice(0, 5)
      : [];

    // Create character
    const character = await characterRepository.createCharacter({
      user: {
        connect: { id: userId },
      },
      name: body.name,
      backstory: body.backstory || null,
      appearanceDescription: body.appearanceDescription || null,
      personalityTraits: personalityTraits,
      isActive: true,
    });

    return NextResponse.json(character, { status: 201 });
  } catch (error) {
    console.error("Error creating character:", error);
    return NextResponse.json(
      { message: "Failed to create character" },
      { status: 500 }
    );
  }
}
