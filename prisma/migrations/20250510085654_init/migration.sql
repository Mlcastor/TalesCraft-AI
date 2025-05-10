-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login" TIMESTAMP(3),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "preferences" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characters" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "backstory" TEXT,
    "appearance_description" TEXT,
    "personality_traits" JSONB NOT NULL DEFAULT '[]',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_played_at" TIMESTAMP(3),
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_sessions" (
    "id" TEXT NOT NULL,
    "character_id" TEXT NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ended_at" TIMESTAMP(3),
    "duration_seconds" INTEGER,
    "session_data" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "game_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_states" (
    "id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "character_id" TEXT NOT NULL,
    "save_point_name" TEXT,
    "current_location" TEXT NOT NULL,
    "save_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "narrative_context" TEXT,
    "ai_context" JSONB NOT NULL DEFAULT '{}',
    "character_state" JSONB NOT NULL,
    "world_state" JSONB NOT NULL,
    "is_autosave" BOOLEAN NOT NULL DEFAULT false,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "game_states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "npc_templates" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "personality_traits" JSONB NOT NULL DEFAULT '[]',
    "default_dialogue" JSONB NOT NULL DEFAULT '[]',
    "appearance_description" TEXT,
    "is_unique" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "npc_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "npc_states" (
    "id" TEXT NOT NULL,
    "game_state_id" TEXT NOT NULL,
    "npc_template_id" TEXT NOT NULL,
    "current_location" TEXT,
    "relationship_with_player" INTEGER NOT NULL DEFAULT 0,
    "dialogue_history" JSONB NOT NULL DEFAULT '[]',
    "instance_properties" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "npc_states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lore_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "parent_category_id" TEXT,

    CONSTRAINT "lore_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "world_lore" (
    "id" TEXT NOT NULL,
    "category_id" TEXT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "is_discoverable" BOOLEAN NOT NULL DEFAULT true,
    "discovery_conditions" JSONB NOT NULL DEFAULT '{}',
    "keywords" TEXT[],

    CONSTRAINT "world_lore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "decisions" (
    "id" TEXT NOT NULL,
    "game_state_id" TEXT NOT NULL,
    "decision_point_id" TEXT NOT NULL,
    "decision_context" TEXT,
    "options_presented" JSONB NOT NULL,
    "player_choice" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT,
    "related_npc_ids" TEXT[],
    "consequences" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "decisions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_context_history" (
    "id" TEXT NOT NULL,
    "game_state_id" TEXT NOT NULL,
    "context_type" TEXT NOT NULL,
    "prompt_tokens" INTEGER NOT NULL,
    "completion_tokens" INTEGER NOT NULL,
    "prompt_text" TEXT,
    "completion_text" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "relevance_score" DOUBLE PRECISION,

    CONSTRAINT "ai_context_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "characters_user_id_idx" ON "characters"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "characters_user_id_name_key" ON "characters"("user_id", "name");

-- CreateIndex
CREATE INDEX "game_sessions_character_id_idx" ON "game_sessions"("character_id");

-- CreateIndex
CREATE INDEX "game_sessions_started_at_idx" ON "game_sessions"("started_at" DESC);

-- CreateIndex
CREATE INDEX "game_states_character_id_idx" ON "game_states"("character_id");

-- CreateIndex
CREATE INDEX "game_states_save_timestamp_idx" ON "game_states"("save_timestamp" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "npc_templates_code_key" ON "npc_templates"("code");

-- CreateIndex
CREATE INDEX "npc_states_game_state_id_idx" ON "npc_states"("game_state_id");

-- CreateIndex
CREATE UNIQUE INDEX "npc_states_game_state_id_npc_template_id_key" ON "npc_states"("game_state_id", "npc_template_id");

-- CreateIndex
CREATE UNIQUE INDEX "lore_categories_name_key" ON "lore_categories"("name");

-- CreateIndex
CREATE INDEX "world_lore_category_id_idx" ON "world_lore"("category_id");

-- CreateIndex
CREATE INDEX "decisions_game_state_id_idx" ON "decisions"("game_state_id");

-- CreateIndex
CREATE INDEX "ai_context_history_game_state_id_idx" ON "ai_context_history"("game_state_id");

-- CreateIndex
CREATE INDEX "ai_context_history_context_type_timestamp_idx" ON "ai_context_history"("context_type", "timestamp" DESC);

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_sessions" ADD CONSTRAINT "game_sessions_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_states" ADD CONSTRAINT "game_states_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "game_sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_states" ADD CONSTRAINT "game_states_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "npc_states" ADD CONSTRAINT "npc_states_game_state_id_fkey" FOREIGN KEY ("game_state_id") REFERENCES "game_states"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "npc_states" ADD CONSTRAINT "npc_states_npc_template_id_fkey" FOREIGN KEY ("npc_template_id") REFERENCES "npc_templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lore_categories" ADD CONSTRAINT "lore_categories_parent_category_id_fkey" FOREIGN KEY ("parent_category_id") REFERENCES "lore_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "world_lore" ADD CONSTRAINT "world_lore_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "lore_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "decisions" ADD CONSTRAINT "decisions_game_state_id_fkey" FOREIGN KEY ("game_state_id") REFERENCES "game_states"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_context_history" ADD CONSTRAINT "ai_context_history_game_state_id_fkey" FOREIGN KEY ("game_state_id") REFERENCES "game_states"("id") ON DELETE CASCADE ON UPDATE CASCADE;
