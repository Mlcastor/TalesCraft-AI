/**
 * API Route to fetch locations for a specific world
 */
import { NextRequest, NextResponse } from "next/server";
import {
  getLocationsByWorldId,
  getStartingLocationsByWorldId,
} from "@/lib/db/location";

export async function GET(
  request: NextRequest,
  { params }: { params: { worldId: string } }
) {
  try {
    const { worldId } = params;
    const searchParams = request.nextUrl.searchParams;
    const isStartingOnly = searchParams.has("starting");

    console.log(
      `[API] Fetching locations for worldId: ${worldId}, startingOnly: ${isStartingOnly}`
    );

    let locations;
    if (isStartingOnly) {
      locations = await getStartingLocationsByWorldId(worldId);
    } else {
      locations = await getLocationsByWorldId(worldId);
    }

    console.log(
      `[API] Found ${locations.length} locations for world ${worldId}`
    );

    return NextResponse.json(locations);
  } catch (error) {
    console.error("Error fetching locations:", error);
    return NextResponse.json(
      { error: "Failed to fetch locations" },
      { status: 500 }
    );
  }
}
