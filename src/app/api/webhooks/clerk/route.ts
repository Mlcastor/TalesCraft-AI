import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

/**
 * Handler for Clerk webhooks
 * Processes authentication events and syncs user data with our database
 */
export async function POST(req: Request) {
  // Ensure Prisma is initialized
  try {
    // Test prisma connection with a simple query
    await prisma.$queryRaw`SELECT 1`;
  } catch (error) {
    console.error("Database connection error:", error);
    return new NextResponse("Database connection error", { status: 500 });
  }

  // Verify the webhook signature
  const headerPayload = await headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  // If there are no svix headers, return 400
  if (!svixId || !svixTimestamp || !svixSignature) {
    return new NextResponse("Missing svix headers", { status: 400 });
  }

  // Get the webhook secret from environment variables
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return new NextResponse("Webhook secret not configured", { status: 500 });
  }

  // Get the raw body
  const payload = await req.text();

  // Create a new Svix instance with the webhook secret
  const wh = new Webhook(webhookSecret);

  let evt: WebhookEvent;

  try {
    // Verify the webhook payload
    evt = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new NextResponse("Error verifying webhook", { status: 400 });
  }

  // Process the event based on the type
  const eventType = evt.type;

  try {
    switch (eventType) {
      case "user.created":
        await handleUserCreated(evt.data);
        break;
      case "user.updated":
        await handleUserUpdated(evt.data);
        break;
      case "session.created":
        await handleSessionCreated(evt.data);
        break;
      // Add more event handlers as needed
    }
  } catch (error) {
    console.error(`Error processing ${eventType} event:`, error);
    return new NextResponse(`Error processing ${eventType} event`, {
      status: 500,
    });
  }

  return new NextResponse("Webhook processed successfully", { status: 200 });
}

/**
 * Handles the user.created event from Clerk
 * @param data The event data from Clerk
 */
async function handleUserCreated(data: any) {
  const { id, email_addresses, created_at } = data;

  if (!email_addresses || email_addresses.length === 0) {
    console.error("No email address found in user data");
    return;
  }

  const primaryEmail = email_addresses[0].email_address;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: primaryEmail },
    });

    if (!existingUser) {
      // Create new user in our database
      await prisma.user.create({
        data: {
          id: id, // Using Clerk's ID as our user ID
          email: primaryEmail,
          createdAt: new Date(created_at),
          isActive: true,
          preferences: {},
        },
      });
    }
  } catch (error) {
    console.error("Error in handleUserCreated:", error);
    throw error; // Re-throw for upstream handling
  }
}

/**
 * Handles the user.updated event from Clerk
 * @param data The event data from Clerk
 */
async function handleUserUpdated(data: any) {
  const { id, email_addresses } = data;

  if (!email_addresses || email_addresses.length === 0) {
    console.error("No email address found in user data");
    return;
  }

  const primaryEmail = email_addresses[0].email_address;

  // Check if user exists by Clerk ID
  const existingUser = await prisma.user.findUnique({
    where: { id },
  });

  if (existingUser) {
    // Update the user in our database
    await prisma.user.update({
      where: { id },
      data: {
        email: primaryEmail,
      },
    });
  } else {
    // If user doesn't exist by ID, but might exist by email, handle appropriately
    const userByEmail = await prisma.user.findUnique({
      where: { email: primaryEmail },
    });

    if (userByEmail) {
      // This is an edge case where the user exists with a different ID
      console.warn(`User with email ${primaryEmail} exists with different ID`);
    } else {
      // Create the user as this might be a missed user.created event
      await handleUserCreated(data);
    }
  }
}

/**
 * Handles the session.created event from Clerk
 * @param data The event data from Clerk
 */
async function handleSessionCreated(data: any) {
  const { user_id } = data;

  if (!user_id) {
    console.error("No user ID found in session data");
    return;
  }

  // Update the last login timestamp for the user
  await prisma.user.update({
    where: { id: user_id },
    data: { lastLogin: new Date() },
  });
}
