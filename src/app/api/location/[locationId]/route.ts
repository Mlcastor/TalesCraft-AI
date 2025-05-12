/**
 * API Route to fetch a single location by ID
 */
import { NextRequest, NextResponse } from "next/server";
import {
  getLocationById,
  getLocationWithEvents,
  getConnectedLocations,
} from "@/lib/db/location";

export async function GET(
  request: NextRequest,
  { params }: { params: { locationId: string } }
) {
  try {
    const { locationId } = params;
    const searchParams = request.nextUrl.searchParams;
    const includeEvents = searchParams.has("events");
    const includeConnections = searchParams.has("connections");

    console.log(`[API] Fetching location: ${locationId}`);

    let location;
    if (includeEvents) {
      location = await getLocationWithEvents(locationId);
    } else {
      location = await getLocationById(locationId);
    }

    if (!location) {
      return NextResponse.json(
        { error: "Location not found" },
        { status: 404 }
      );
    }

    // If requested, fetch connected locations
    if (includeConnections && location) {
      const connectedLocations = await getConnectedLocations(locationId);
      location = {
        ...location,
        connectedLocations,
      };
    }

    return NextResponse.json(location);
  } catch (error) {
    console.error("Error fetching location:", error);
    return NextResponse.json(
      { error: "Failed to fetch location" },
      { status: 500 }
    );
  }
}
