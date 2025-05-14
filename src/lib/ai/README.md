# AI Integration for Tales Craft AI

This directory contains the implementation of the AI integration for Tales Craft AI, a narrative-driven RPG game system.

## Overview

The AI integration is designed to be modular, flexible, and resilient to failures. It provides the following capabilities:

- Narrative generation based on game state and history
- Decision options generation with potential consequences
- Context summarization to optimize token usage
- Player decision analysis for narrative adaptation

## Architecture

The AI integration follows a layered architecture:

```
┌─────────────────────────────────────────────────────────────┐
│       NarrativeService / DecisionService (Integration)      │
└────────────────────────────┬────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────┐
│                        AIService                            │
│         (High-level narrative and decision generation)      │
└────────────────────────────┬────────────────────────────────┘
                   ┌─────────┴─────────┐
                   ▼                   ▼
┌──────────────────────────┐  ┌──────────────────────────────┐
│     PromptBuilder        │  │     ResponseParser           │
│ (Template construction)  │  │   (Response extraction)      │
└──────────────────────────┘  └──────────────────────────────┘
                   │                   │
                   └─────────┬─────────┘
                             ▼
┌────────────────────────────────────────────────────────────┐
│                     AIClientAdapter                        │
│                    (API Integration)                       │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌────────────────────────────────────────────────────────────┐
│                     FallbackHandler                        │
│                  (Error handling/recovery)                 │
└─────────────────────────────────────────────────────────────┘
```

## Components

### 1. AIClientAdapter

Provides a standardized interface for communicating with AI providers:

- Currently supports Groq (via groq-sdk)
- Handles API communication and error management
- Provides methods for both completion and chat generation

### 2. PromptBuilder

Constructs optimized prompts for different use cases:

- Narrative generation prompts with game context
- Decision generation prompts with consequences
- Context summarization prompts for token optimization

### 3. ResponseParser

Extracts structured data from AI responses:

- Parses JSON responses into typed structures
- Handles malformed responses gracefully
- Extracts entities from narrative text

### 4. FallbackHandler

Provides fallback responses when AI services fail:

- Contextually appropriate fallbacks based on request type
- Consistent error logging
- Graceful degradation of service

### 5. AIService

Provides high-level AI capabilities to the game system:

- Narrative generation with context awareness
- Decision options based on game state
- Context summarization for token efficiency
- Decision impact analysis

## Usage

### Generating Narrative

```typescript
import { aiService } from "@/lib/ai/AIService";
import { responseParser } from "@/lib/ai/ResponseParser";

// Game context
const context = {
  characterName: "Elara",
  location: "The Enchanted Forest",
  characterState: { 
    name: "Elara", 
    health: 80,
    inventory: ["Sword", "Health Potion"]
  },
  worldState: { 
    time: "Night", 
    weather: "Rainy"
  }
};

// Previous narrative history
const previousHistory = [
  { type: "narrative", content: "You enter the Enchanted Forest, its trees looming overhead." },
  { type: "playerResponse", content: "I'll proceed cautiously and look for signs of life." }
];

// Generate narrative
const aiResponse = await aiService.generateNarrative(context, previousHistory);

// Parse the response
const { text, suggestedDecisions } = responseParser.parseNarrativeResponse(aiResponse);

console.log("Narrative:", text);
console.log("Decisions:", suggestedDecisions);
```

### Generating Decisions

```typescript
import { aiService } from "@/lib/ai/AIService";

// Current narrative context
const narrativeContext = "You stand at a crossroads. To the north, mountains loom. To the east, a dense forest. To the west, a wide river. To the south, the path home.";

// Character and world state
const characterState = { name: "Elara", health: 80 };
const worldState = { time: "Day", currentLocation: "Crossroads" };

// Generate decisions
const { decisions } = await aiService.generateDecisions(
  narrativeContext,
  characterState,
  worldState
);

console.log("Decision options:", decisions);
```

## Configuration

Set up your environment variables in a `.env.local` file:

```
GROQ_API_KEY=your-api-key-here
```

## Error Handling

The system includes comprehensive error handling:

1. All API calls are wrapped in try/catch blocks
2. Fallbacks are provided for all failure cases
3. Errors are logged with context for debugging
4. Graceful degradation ensures the game continues

## Integration with Game Services

The `NarrativeService` and `DecisionService` integrate with the AI capabilities, using them when available and falling back to pre-scripted content when necessary.

## Extending the System

To add support for additional AI providers:

1. Create a new adapter implementing the `AIClientAdapter` interface
2. Implement provider-specific authentication and API calls
3. Add a factory method to select the appropriate adapter

To enhance prompt templates:

1. Extend the `PromptBuilder` methods with more sophisticated templates
2. Add additional context to improve narrative coherence
3. Create specialized templates for different game scenarios 