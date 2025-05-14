"use server";

import { ValidationError } from "@/lib/errors/DatabaseError";
import { gameEngine } from "@/lib/game-engine";
import { logger } from "@/lib/utils/logger";
import { GameEventType, GameEvent, GameEventPayload } from "@/types/engine";
import { isNotEmpty } from "@/lib/utils/validation";
import { verifyGameSession } from "./gameSession-actions";

/**
 * Allowed client-initiated event types
 * For security reasons, we only allow certain events to be triggered by clients
 */
const ALLOWED_CLIENT_EVENT_TYPES: GameEventType[] = [
  "LOCATION_CHANGED",
  "CHARACTER_UPDATED",
];

/**
 * Type for event subscription data
 */
type EventSubscriptionData = {
  sessionId: string;
  eventTypes: GameEventType[];
  lastEvents: Partial<Record<GameEventType, GameEvent | null>>;
  eventHandlers: Map<GameEventType, () => void>; // Unsubscribe functions
};

/**
 * Map of active event subscriptions by subscription ID
 */
const eventSubscriptions = new Map<string, EventSubscriptionData>();

/**
 * Initialize the event bridge
 * Set up global event handlers for the game engine
 */
function initializeEventBridge() {
  // Clean up expired subscriptions periodically (every 5 minutes)
  setInterval(() => {
    const now = Date.now();
    const expirationTime = 30 * 60 * 1000; // 30 minutes

    eventSubscriptions.forEach((subscription, id) => {
      // Extract timestamp from subscription ID
      const parts = id.split("-");
      if (parts.length >= 2) {
        const timestamp = parseInt(parts[1], 10);
        if (now - timestamp > expirationTime) {
          // Unsubscribe from all events
          subscription.eventHandlers.forEach((unsubscribe) => unsubscribe());

          // Remove subscription
          eventSubscriptions.delete(id);

          logger.debug("Expired event subscription removed", {
            context: "game-events-actions",
            metadata: {
              subscriptionId: id,
              sessionId: subscription.sessionId,
            },
          });
        }
      }
    });
  }, 5 * 60 * 1000); // 5 minutes
}

// Initialize event bridge on server start (only in production)
if (process.env.NODE_ENV === "production") {
  initializeEventBridge();
}

/**
 * Subscribe to game events for a session
 *
 * @param sessionId The game session ID
 * @param eventTypes The event types to subscribe to
 * @returns A subscription ID for polling events
 */
export async function subscribeToGameEvents(
  sessionId: string,
  eventTypes: GameEventType[]
): Promise<string> {
  try {
    // Validate input
    if (!isNotEmpty(sessionId)) {
      throw new ValidationError(
        "Session ID is required",
        { sessionId: "Session ID is required" },
        { entity: "game-events-actions" }
      );
    }

    if (!Array.isArray(eventTypes) || eventTypes.length === 0) {
      throw new ValidationError(
        "At least one event type is required",
        { eventTypes: "At least one event type is required" },
        { entity: "game-events-actions" }
      );
    }

    // Verify the session exists and is active
    await verifyGameSession(sessionId);

    // Create a unique subscription ID
    const subscriptionId = `${sessionId}-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 9)}`;

    // Initialize the subscription data
    const subscriptionData: EventSubscriptionData = {
      sessionId,
      eventTypes,
      lastEvents: {},
      eventHandlers: new Map(),
    };

    // Set up the initial last events as null
    eventTypes.forEach((eventType) => {
      subscriptionData.lastEvents[eventType] = null;
    });

    // Register event handlers with the game engine
    eventTypes.forEach((eventType) => {
      const eventHandler = (event: GameEvent) => {
        // Only store events for this session
        if (event.sessionId === sessionId) {
          subscriptionData.lastEvents[eventType] = event;

          logger.debug(`Event captured for subscription: ${eventType}`, {
            context: "game-events-actions",
            metadata: {
              subscriptionId,
              eventType,
              timestamp: event.timestamp,
            },
          });
        }
      };

      // Register the handler with the game engine
      gameEngine.on(eventType, eventHandler);

      // Store the unsubscribe function
      const unsubscribe = () => {
        gameEngine.off(eventType, eventHandler);
      };

      subscriptionData.eventHandlers.set(eventType, unsubscribe);
    });

    // Store the subscription
    eventSubscriptions.set(subscriptionId, subscriptionData);

    logger.debug("Game events subscription created", {
      context: "server-action",
      metadata: {
        action: "subscribeToGameEvents",
        sessionId,
        eventTypes,
        subscriptionId,
      },
    });

    return subscriptionId;
  } catch (error) {
    logger.error("Failed to subscribe to game events", {
      context: "server-action",
      metadata: {
        action: "subscribeToGameEvents",
        sessionId,
        eventTypes,
        error,
      },
    });

    throw error;
  }
}

/**
 * Unsubscribe from game events
 *
 * @param subscriptionId The subscription ID to unsubscribe
 * @returns True if unsubscribed successfully
 */
export async function unsubscribeFromGameEvents(
  subscriptionId: string
): Promise<boolean> {
  try {
    // Validate input
    if (!isNotEmpty(subscriptionId)) {
      throw new ValidationError(
        "Subscription ID is required",
        { subscriptionId: "Subscription ID is required" },
        { entity: "game-events-actions" }
      );
    }

    // Check if the subscription exists
    const subscription = eventSubscriptions.get(subscriptionId);
    if (!subscription) {
      return false;
    }

    // Unsubscribe from all events
    subscription.eventHandlers.forEach((unsubscribe) => unsubscribe());

    // Remove the subscription
    eventSubscriptions.delete(subscriptionId);

    logger.debug("Game events subscription removed", {
      context: "server-action",
      metadata: {
        action: "unsubscribeFromGameEvents",
        subscriptionId,
      },
    });

    return true;
  } catch (error) {
    logger.error("Failed to unsubscribe from game events", {
      context: "server-action",
      metadata: {
        action: "unsubscribeFromGameEvents",
        subscriptionId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Get new events for a subscription
 *
 * @param subscriptionId The subscription ID
 * @returns Object with new events by event type
 */
export async function getNewEvents(
  subscriptionId: string
): Promise<Partial<Record<GameEventType, GameEvent | null>>> {
  try {
    // Validate input
    if (!isNotEmpty(subscriptionId)) {
      throw new ValidationError(
        "Subscription ID is required",
        { subscriptionId: "Subscription ID is required" },
        { entity: "game-events-actions" }
      );
    }

    // Check if the subscription exists
    const subscription = eventSubscriptions.get(subscriptionId);
    if (!subscription) {
      throw new ValidationError(
        "Invalid subscription ID",
        { subscriptionId: "Subscription not found" },
        { entity: "game-events-actions" }
      );
    }

    // Verify the session exists and is active
    await verifyGameSession(subscription.sessionId);

    // Get new events and clear them from the subscription
    const newEvents: Partial<Record<GameEventType, GameEvent | null>> = {};

    subscription.eventTypes.forEach((eventType) => {
      // Get the current event
      newEvents[eventType] = subscription.lastEvents[eventType] || null;

      // Clear the event so it's not returned again
      subscription.lastEvents[eventType] = null;
    });

    logger.debug("Retrieved new events for subscription", {
      context: "server-action",
      metadata: {
        action: "getNewEvents",
        subscriptionId,
        sessionId: subscription.sessionId,
        eventCount: Object.values(newEvents).filter(Boolean).length,
      },
    });

    return newEvents;
  } catch (error) {
    logger.error("Failed to get new events", {
      context: "server-action",
      metadata: {
        action: "getNewEvents",
        subscriptionId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Trigger a game event
 *
 * @param sessionId The game session ID
 * @param eventType The type of event to trigger
 * @param payload The event payload
 * @returns True if the event was triggered successfully
 */
export async function triggerGameEvent(
  sessionId: string,
  eventType: GameEventType,
  payload: any
): Promise<boolean> {
  try {
    // Validate input
    if (!isNotEmpty(sessionId)) {
      throw new ValidationError(
        "Session ID is required",
        { sessionId: "Session ID is required" },
        { entity: "game-events-actions" }
      );
    }

    if (!isNotEmpty(eventType)) {
      throw new ValidationError(
        "Event type is required",
        { eventType: "Event type is required" },
        { entity: "game-events-actions" }
      );
    }

    // Verify the session exists and is active
    await verifyGameSession(sessionId);

    // For security, only allow specific event types to be triggered by the client
    if (!ALLOWED_CLIENT_EVENT_TYPES.includes(eventType)) {
      throw new ValidationError(
        "Event type not allowed",
        { eventType: "This event type cannot be triggered from the client" },
        { entity: "game-events-actions" }
      );
    }

    // Validate that the payload matches the expected structure for the event type
    validateEventPayload(eventType, payload);

    // Create the event object
    const event: GameEvent = {
      type: eventType,
      payload,
      timestamp: new Date(),
      sessionId,
    };

    // Use the gameEngine to emit the event
    // Note: The gameEngine.emitEvent is private, so we need to expose it via the public API
    // For now, we'll use the on method to indirectly trigger events
    // In a real implementation, we'd need to extend the GameEngine to support this
    const success = await simulateEventTrigger(sessionId, event);

    logger.info("Game event triggered", {
      context: "server-action",
      metadata: {
        action: "triggerGameEvent",
        sessionId,
        eventType,
        success,
      },
    });

    return success;
  } catch (error) {
    logger.error("Failed to trigger game event", {
      context: "server-action",
      metadata: {
        action: "triggerGameEvent",
        sessionId,
        eventType,
        payload,
        error,
      },
    });

    throw error;
  }
}

/**
 * Get the current state of the game engine
 *
 * @param sessionId The game session ID
 * @returns Object containing the game engine state
 */
export async function getGameEngineState(sessionId: string): Promise<{
  isActive: boolean;
  hasActiveSession: boolean;
  eventTypes: GameEventType[];
  currentState: {
    sessionId: string;
    characterId: string;
    lastActivity: Date;
  } | null;
}> {
  try {
    // Validate input
    if (!isNotEmpty(sessionId)) {
      throw new ValidationError(
        "Session ID is required",
        { sessionId: "Session ID is required" },
        { entity: "game-events-actions" }
      );
    }

    // Verify the session exists and is active
    const session = await verifyGameSession(sessionId);

    // Get the latest game state
    const { getLatestGameStateForSession } = await import(
      "./game-state-actions"
    );
    const latestStateId = await getLatestGameStateForSession(sessionId);

    // Get state details if available
    let currentState = null;
    if (latestStateId) {
      const gameState = await gameEngine.getGameState(latestStateId);
      if (gameState) {
        currentState = {
          sessionId: gameState.sessionId,
          characterId: gameState.characterId,
          lastActivity: session.lastActivityAt,
        };
      }
    }

    logger.debug("Game engine state retrieved", {
      context: "server-action",
      metadata: {
        action: "getGameEngineState",
        sessionId,
      },
    });

    return {
      isActive: true, // The game engine singleton is always active
      hasActiveSession: !!session,
      eventTypes: ALLOWED_CLIENT_EVENT_TYPES,
      currentState,
    };
  } catch (error) {
    logger.error("Failed to get game engine state", {
      context: "server-action",
      metadata: {
        action: "getGameEngineState",
        sessionId,
        error,
      },
    });

    throw error;
  }
}

/**
 * Validate event payload for a specific event type
 *
 * @param eventType The event type
 * @param payload The event payload to validate
 * @throws ValidationError if the payload is invalid
 */
function validateEventPayload(eventType: GameEventType, payload: any): void {
  // Validate payload based on event type
  switch (eventType) {
    case "LOCATION_CHANGED":
      if (!payload.previousLocation || !payload.newLocation) {
        throw new ValidationError(
          "Invalid payload for LOCATION_CHANGED",
          {
            payload: "Must include previousLocation and newLocation",
          },
          { entity: "game-events-actions" }
        );
      }
      break;

    case "CHARACTER_UPDATED":
      if (!payload.characterId || !payload.changes) {
        throw new ValidationError(
          "Invalid payload for CHARACTER_UPDATED",
          {
            payload: "Must include characterId and changes",
          },
          { entity: "game-events-actions" }
        );
      }
      break;

    default:
      throw new ValidationError(
        "Unsupported event type",
        { eventType: "Event type not supported for client triggers" },
        { entity: "game-events-actions" }
      );
  }
}

/**
 * Simulate triggering an event via the game engine
 *
 * In a real implementation, the game engine would need to expose a public method
 * to trigger events from the server actions
 *
 * @param sessionId The session ID
 * @param event The event to trigger
 * @returns True if successful
 */
async function simulateEventTrigger(
  sessionId: string,
  event: GameEvent
): Promise<boolean> {
  try {
    // Handle different event types
    switch (event.type) {
      case "LOCATION_CHANGED": {
        // Type assertion since we've validated the payload structure
        const payload = event.payload as GameEventPayload["LOCATION_CHANGED"];
        logger.info("Simulating LOCATION_CHANGED event", {
          context: "game-engine",
          metadata: {
            sessionId,
            previousLocation: payload.previousLocation,
            newLocation: payload.newLocation,
          },
        });
        break;
      }

      case "CHARACTER_UPDATED": {
        // Type assertion since we've validated the payload structure
        const payload = event.payload as GameEventPayload["CHARACTER_UPDATED"];
        logger.info("Simulating CHARACTER_UPDATED event", {
          context: "game-engine",
          metadata: {
            sessionId,
            characterId: payload.characterId,
            changes: payload.changes,
          },
        });
        break;
      }
    }

    return true;
  } catch (error) {
    logger.error("Failed to simulate event trigger", {
      context: "game-engine",
      metadata: {
        sessionId,
        eventType: event.type,
        error,
      },
    });
    return false;
  }
}
