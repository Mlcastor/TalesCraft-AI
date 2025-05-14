/**
 * Core game types for the Text-Based AI RPG
 */

export interface Character {
  id: string;
  name: string;
  attributes: {
    strength: number;
    intelligence: number;
    dexterity: number;
    charisma: number;
    constitution: number;
  };
  health: number;
  maxHealth: number;
  level: number;
  experience: number;
  inventory: Item[];
  abilities: Ability[];
  gold: number;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  type: "weapon" | "armor" | "potion" | "key" | "misc";
  value: number;
  effects?: {
    [key: string]: number;
  };
}

export interface Ability {
  id: string;
  name: string;
  description: string;
  cooldown: number;
  effects: {
    [key: string]: number;
  };
}

export interface GameState {
  narrative: {
    text: string;
    history: Array<{
      type: "narrative" | "playerResponse";
      content: string;
    }>;
  };
  decisions: Array<{
    text: string;
    consequences?: string;
  }>;
  character: CharacterState | null;
  world: WorldState | null;
  location: LocationState | null;
  isLoading: boolean;
  error: string | null;
}

export type GameAction =
  | {
      type: "UPDATE_NARRATIVE";
      payload: { text: string; decisions?: Array<{ text: string }> };
    }
  | { type: "MAKE_DECISION"; payload: { index: number } }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

export interface CharacterState {
  id: string;
  name: string;
  backstory?: string;
  appearance?: string;
  traits: Array<string>;
}

export interface WorldState {
  id: string;
  name: string;
  description: string;
}

export interface LocationState {
  id: string;
  name: string;
  description: string;
}

export interface NarrativeRequest {
  characterState: any;
  worldState: any;
  previousContext: string;
  playerDecision: {
    context: string;
    options: string[];
    chosenOption: string;
  };
}

export interface NarrativeResponse {
  narrativeText: string;
  newDecisionPoints: Array<{ text: string }>;
  newLocation?: string;
  updatedCharacterState?: any;
  updatedWorldState?: any;
}
