import { ValidationError } from "@/lib/errors/DatabaseError";
import { BaseService } from "./base/BaseService";
import {
  CharacterWorldStateRepository,
  characterWorldStateRepository as defaultCharacterWorldStateRepository,
} from "@/lib/db/characterWorldState";
import { isNotEmpty } from "@/lib/utils/validation";
import { logger } from "@/lib/utils/logger";

/**
 * Service for managing character world state operations
 * Handles character locations and world relationships
 */
export class CharacterWorldStateService extends BaseService {
  private readonly characterWorldStateRepository: CharacterWorldStateRepository;

  /**
   * Create a new CharacterWorldStateService
   *
   * @param characterWorldStateRepository - Repository for character world state operations
   */
  constructor(
    characterWorldStateRepository: CharacterWorldStateRepository = defaultCharacterWorldStateRepository
  ) {
    super("CharacterWorldStateService", { characterWorldStateRepository });
    this.characterWorldStateRepository = characterWorldStateRepository;
  }

  /**
   * Update a character's location within a world
   *
   * @param characterId - The character ID
   * @param worldId - The world ID
   * @param newLocation - The new location name
   * @returns The updated character world state
   */
  async updateCharacterLocation(
    characterId: string,
    worldId: string,
    newLocation: string
  ): Promise<any> {
    return this.executeOperation(async () => {
      // Validate inputs
      if (!isNotEmpty(characterId)) {
        throw new ValidationError(
          "Character ID is required",
          { characterId: "Character ID is required" },
          { entity: this.serviceName }
        );
      }

      if (!isNotEmpty(worldId)) {
        throw new ValidationError(
          "World ID is required",
          { worldId: "World ID is required" },
          { entity: this.serviceName }
        );
      }

      if (!isNotEmpty(newLocation)) {
        throw new ValidationError(
          "New location is required",
          { newLocation: "New location is required" },
          { entity: this.serviceName }
        );
      }

      logger.debug("Updating character location", {
        context: "character-world-state-service",
        metadata: {
          characterId,
          worldId,
          newLocation,
        },
      });

      // Update location through repository
      return await this.characterWorldStateRepository.updateCharacterLocation(
        characterId,
        worldId,
        newLocation
      );
    }, "updateCharacterLocation");
  }

  /**
   * Find a character world state without throwing an error if not found
   *
   * @param characterId - The character ID
   * @param worldId - The world ID
   * @returns The character world state or null if not found
   */
  async findCharacterWorldState(
    characterId: string,
    worldId: string
  ): Promise<any | null> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(characterId)) {
        throw new ValidationError(
          "Character ID is required",
          { characterId: "Character ID is required" },
          { entity: this.serviceName }
        );
      }

      if (!isNotEmpty(worldId)) {
        throw new ValidationError(
          "World ID is required",
          { worldId: "World ID is required" },
          { entity: this.serviceName }
        );
      }

      return await this.characterWorldStateRepository.findCharacterWorldState(
        characterId,
        worldId
      );
    }, "findCharacterWorldState");
  }

  /**
   * Get all world states for a specific character
   *
   * @param characterId - The character ID
   * @param options - Optional pagination options
   * @returns Array of character-world associations
   */
  async getCharacterWorldStates(
    characterId: string,
    options?: { limit?: number; offset?: number }
  ): Promise<any[]> {
    return this.executeOperation(async () => {
      if (!isNotEmpty(characterId)) {
        throw new ValidationError(
          "Character ID is required",
          { characterId: "Character ID is required" },
          { entity: this.serviceName }
        );
      }

      return await this.characterWorldStateRepository.getCharacterWorldStates(
        characterId,
        options
      );
    }, "getCharacterWorldStates");
  }
}

// Export singleton instance for convenience
export const characterWorldStateService = new CharacterWorldStateService();
