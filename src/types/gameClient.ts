import { GameState, NarrativeResponse } from "./game";

/**
 * Defines the shape of the game state managed on the client.
 */
export interface GameClientState {
  sessionId: string | null;
  characterId: string | null;
  worldId: string | null;
  currentGameState: GameState | null;
  isLoadingInitialGame: boolean;
  isMakingDecision: boolean;
  error: string | null;
}

/**
 * Represents the payload for a successful game initialization.
 */
export interface InitializeGameSuccessPayload {
  sessionId: string;
  characterId: string;
  worldId: string;
  gameState: GameState;
}

/**
 * Represents the payload for a successful decision action.
 * The `updatedState` is the comprehensive new state from the server.
 */
export interface MakeDecisionSuccessPayload {
  narrativeResponse: NarrativeResponse; // Kept for potential direct use, though updatedState is primary
  updatedState: GameState;
}

/**
 * Defines the actions that can be dispatched to the game reducer.
 */
export type GameClientAction =
  | { type: "INITIALIZE_GAME_START" }
  | { type: "INITIALIZE_GAME_SUCCESS"; payload: InitializeGameSuccessPayload }
  | {
      type: "INITIALIZE_GAME_WITH_PRELOADED_STATE";
      payload: InitializeGameSuccessPayload;
    }
  | { type: "INITIALIZE_GAME_FAILURE"; payload: string }
  | { type: "MAKE_DECISION_START" }
  | { type: "MAKE_DECISION_SUCCESS"; payload: MakeDecisionSuccessPayload }
  | { type: "MAKE_DECISION_FAILURE"; payload: string }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "CLEAR_ERROR" };

export const initialClientState: GameClientState = {
  sessionId: null,
  characterId: null,
  worldId: null,
  currentGameState: null,
  isLoadingInitialGame: false,
  isMakingDecision: false,
  error: null,
};

export const data_from_clipboard = {
  id: "opening_scene_chamber_prince",
  name: "Chambre de Cornélius",
  description:
    "La chambre princière de Cornélius est plongée dans une pénombre cotonneuse, traversée par de timides rais de lumière filtrant à travers de lourds rideaux de velours pourpre. L’air y est chargé d’une étrange odeur mêlant cire fondue, chaussette royale oubliée, et lavande fatiguée. Chaque meuble grince comme s’il protestait contre le poids des années. Un courant d’air discret s’insinue depuis une fenêtre entrouverte, caressant les tentures poussiéreuses. Une armoire en bois sombre, cloutée de ferronneries grotesques, semble renfermer plus de mystères que de vêtements. On entend au loin les échos lointains d’un garde éternuant dans un couloir, et le bruit d’un objet qui tombe avec un fracas théâtral.",
  connectedLocations: [
    "couloir_du_chateau",
    "jardins",
    "salle_du_throne",
    "ruelle_du_forgeron",
  ],
  itemsPresent: [
    "ancienne_epee_du_roi",
    "casque_orateur",
    "telecommande_universelle",
  ],
  npcs: [
    {
      id: "valet_fidele",
      name: "Valet fidèle",
      description:
        "Vieillard aux cheveux rares et aux gestes précautionneux, sa voix tremble comme un parchemin sous la pluie. Il dégage une odeur persistante d’herbes médicinales et de panique contenue.",
      relationshipToPlayer: "amical",
    },
    {
      id: "roi_vexelius",
      name: "Roi Vexelius",
      description:
        "Monarque usé, le visage figé dans une moue sévère comme s’il avait avalé un citron en armure. Il parle d’une voix grave, presque théâtrale, sent le vieux cuir et la sueur noble.",
      relationshipToPlayer: "neutre",
    },
    {
      id: "bob_autruche",
      name: "BoB l'autruche",
      description:
        "Autruche excentrique aux plumes hirsutes, toujours en mouvement, émettant des gloussements absurdes. Ses pattes sentent la paille moisie et son bec claque comme un tambour de guerre.",
      relationshipToPlayer: "amical",
    },
  ],
  gameState: {
    currentQuest: "recuperer_argent_forgeron",
    recentEvents: [
      "BoB a activé la Télécommande Universelle.",
      "Transformation chaotique du monde.",
      "Cornélius s'est éveillé dans un château étrange, empli de sons dissonants, d'odeurs anormales et de murmures oubliés.",
      "Le Roi a confié à Cornélius une mission urgente : récupérer des écus chez le forgeron du village.",
    ],
    relationships: {
      roi_vexelius: 1,
      general_foudracier: 0,
      conseiller_eustache: 0,
      bob_autruche: 5,
    },
  },
  decisionPoints: [
    {
      id: "dp_005_trone_mission",
      context:
        "Dans la salle du trône, entre deux éternuements d’un héraut enrhumé, le Roi confie une mission à Cornélius. Il doit aller chercher des écus chez le forgeron, qui rechigne depuis des semaines à payer son dû. Une odeur de vieux métal flotte dans la salle, mêlée à celle d’un potage qui mijote depuis deux jours sur un brasero royal.",
      options: [
        {
          id: "accepter_avec_honneur",
          text: "S'incliner et accepter la mission avec gravité.",
          consequences: {
            description:
              "Le roi esquisse un rictus approbateur. Cornélius reçoit une bourse vide, censée ramener les écus. Elle sent l’huile de coude et l’espoir moisi.",
            impact: {
              character: { etat: "motivé" },
              relationships: { roi_vexelius: 1 },
            },
          },
        },
        {
          id: "suggere_bob",
          text: "Proposer que BoB aille à sa place.",
          consequences: {
            description:
              "Le roi fronce les sourcils, BoB éternue sur le tapis d’apparat, déclenchant une glissade collective des gardes. La mission reste à Cornélius.",
            impact: {
              character: { etat: "malin_mais_inutile" },
              relationships: { roi_vexelius: -1 },
              world: { chaos_mineur: true },
            },
          },
        },
      ],
    },
    {
      id: "dp_006_chemin_forgeron",
      context:
        "Cornélius traverse les ruelles pavées en direction de la forge. Des odeurs de fromage de chèvre, de croûte cramée et de cuir suintent entre les échoppes. Le sol est glissant, une flaque suspecte bloque un passage.",
      options: [
        {
          id: "esquiver_flaque",
          text: "Faire un détour par la venelle des Trois Cloches.",
          consequences: {
            description:
              "Cornélius passe devant la taverne ‘Au Sanglier qui Tousse’, évite une crêpe volante, et parvient presque sec jusqu’à la forge.",
            impact: {
              character: { etat: "prudent" },
            },
          },
        },
        {
          id: "traverser_direct",
          text: "Tenter de passer directement la flaque.",
          consequences: {
            description:
              "Le prince glisse, tombe dans un tonneau de navets vinaigrés, et attire une bande de chiens de garde. Odeur persistante garantie.",
            impact: {
              character: { etat: "humilie" },
              world: { reputation: -1 },
            },
          },
        },
      ],
    },
  ],
  narrativeGenerationConfig: {
    tone: "mystérieux",
    pace: "moyen",
    detailLevel: "détaillé",
    focusOn: "character",
    themeEmphasis: [
      "absurdité_de_la_guerre",
      "conséquences_inattendues",
      "prophéties_oubliées",
      "pouvoirs_cachés",
    ],
    constraintRules: [
      "Inclure les cinq sens dans chaque description de scène.",
      "Conserver un ton médiéval comique façon Donjon de Naheulbeuk.",
      "Maintenir un équilibre entre humour absurde et mystère ancien.",
      "Insérer régulièrement des objets incongrus (bouilloire, fromage sacré, etc.).",
    ],
  },
};
