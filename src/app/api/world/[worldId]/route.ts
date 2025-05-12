/**
 * API Route to fetch a single world by ID
 */
import { NextRequest, NextResponse } from "next/server";
import {
  getWorldById,
  getWorldWithRelatedData,
  getWorldWithStartingLocations,
} from "@/lib/db/world";

export async function GET(
  request: NextRequest,
  { params }: { params: { worldId: string } }
) {
  try {
    const { worldId } = params;
    const searchParams = request.nextUrl.searchParams;
    const includeRelated = searchParams.has("related");
    const includeStartingLocations = searchParams.has("startingLocations");

    console.log(
      `[API] Fetching world: ${worldId}, includeRelated: ${includeRelated}, includeStartingLocations: ${includeStartingLocations}`
    );

    let world;
    if (includeRelated) {
      world = await getWorldWithRelatedData(worldId);
    } else if (includeStartingLocations) {
      world = await getWorldWithStartingLocations(worldId);
    } else {
      world = await getWorldById(worldId);
    }

    if (!world) {
      return NextResponse.json({ error: "World not found" }, { status: 404 });
    }

    return NextResponse.json(world);
  } catch (error) {
    console.error("Error fetching world:", error);
    return NextResponse.json(
      { error: "Failed to fetch world" },
      { status: 500 }
    );
  }
}
