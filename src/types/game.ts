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
    type: 'weapon' | 'armor' | 'potion' | 'key' | 'misc';
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
    character: Character | null;
    currentLocation: string;
    questProgress: Record<string, number>;
    gameProgress: number;
    conversationHistory: ConversationEntry[];
    lastSaved: string;
  }
  
  export interface ConversationEntry {
    role: 'system' | 'user' | 'assistant';
    content: string;
    timestamp: string;
  }