/*
  Warnings:

  - You are about to drop the `ai_context_history` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `character_world_states` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `characters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `decision_points` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `decisions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `game_sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `game_states` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `locations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lore_fragments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `narrative_history` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `npc_states` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `npc_templates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `worlds` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ai_context_history" DROP CONSTRAINT "ai_context_history_game_state_id_fkey";

-- DropForeignKey
ALTER TABLE "character_world_states" DROP CONSTRAINT "character_world_states_character_id_fkey";

-- DropForeignKey
ALTER TABLE "character_world_states" DROP CONSTRAINT "character_world_states_world_id_fkey";

-- DropForeignKey
ALTER TABLE "characters" DROP CONSTRAINT "characters_user_id_fkey";

-- DropForeignKey
ALTER TABLE "decision_points" DROP CONSTRAINT "decision_points_game_state_id_fkey";

-- DropForeignKey
ALTER TABLE "decisions" DROP CONSTRAINT "decisions_game_state_id_fkey";

-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_location_id_fkey";

-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_world_id_fkey";

-- DropForeignKey
ALTER TABLE "game_sessions" DROP CONSTRAINT "game_sessions_character_id_fkey";

-- DropForeignKey
ALTER TABLE "game_states" DROP CONSTRAINT "game_states_character_id_fkey";

-- DropForeignKey
ALTER TABLE "game_states" DROP CONSTRAINT "game_states_location_id_fkey";

-- DropForeignKey
ALTER TABLE "game_states" DROP CONSTRAINT "game_states_session_id_fkey";

-- DropForeignKey
ALTER TABLE "game_states" DROP CONSTRAINT "game_states_world_id_fkey";

-- DropForeignKey
ALTER TABLE "locations" DROP CONSTRAINT "locations_world_id_fkey";

-- DropForeignKey
ALTER TABLE "lore_fragments" DROP CONSTRAINT "lore_fragments_world_id_fkey";

-- DropForeignKey
ALTER TABLE "narrative_history" DROP CONSTRAINT "narrative_history_game_state_id_fkey";

-- DropForeignKey
ALTER TABLE "npc_states" DROP CONSTRAINT "npc_states_game_state_id_fkey";

-- DropForeignKey
ALTER TABLE "npc_states" DROP CONSTRAINT "npc_states_npc_template_id_fkey";

-- DropTable
DROP TABLE "ai_context_history";

-- DropTable
DROP TABLE "character_world_states";

-- DropTable
DROP TABLE "characters";

-- DropTable
DROP TABLE "decision_points";

-- DropTable
DROP TABLE "decisions";

-- DropTable
DROP TABLE "events";

-- DropTable
DROP TABLE "game_sessions";

-- DropTable
DROP TABLE "game_states";

-- DropTable
DROP TABLE "locations";

-- DropTable
DROP TABLE "lore_fragments";

-- DropTable
DROP TABLE "narrative_history";

-- DropTable
DROP TABLE "npc_states";

-- DropTable
DROP TABLE "npc_templates";

-- DropTable
DROP TABLE "worlds";

-- CreateTable
CREATE TABLE "mvp_characters" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "backstory" TEXT,
    "appearance_description" TEXT,
    "personality_traits" JSONB NOT NULL DEFAULT '[]',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_played_at" TIMESTAMP(3),
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "mvp_characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mvp_worlds" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "thumbnail_url" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mvp_worlds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mvp_character_world_states" (
    "character_id" TEXT NOT NULL,
    "world_id" TEXT NOT NULL,
    "current_location" TEXT,
    "last_played_at" TIMESTAMP(3),

    CONSTRAINT "mvp_character_world_states_pkey" PRIMARY KEY ("character_id","world_id")
);

-- CreateTable
CREATE TABLE "mvp_locations" (
    "id" TEXT NOT NULL,
    "world_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "is_starting_location" BOOLEAN NOT NULL DEFAULT false,
    "connected_location_ids" TEXT[],
    "thumbnail_url" TEXT,

    CONSTRAINT "mvp_locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mvp_lore_fragments" (
    "id" TEXT NOT NULL,
    "world_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" TEXT,
    "context_id" TEXT,
    "is_revealed" BOOLEAN NOT NULL DEFAULT true,
    "keywords" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "mvp_lore_fragments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "simplified_game_states" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "character_id" TEXT NOT NULL,
    "world_id" TEXT NOT NULL,
    "turnNumber" INTEGER NOT NULL,
    "character_state" JSONB NOT NULL,
    "world_state" JSONB NOT NULL,
    "current_location_id" TEXT NOT NULL,
    "narrative_log" JSONB NOT NULL,
    "current_choices" JSONB NOT NULL,
    "last_modified" TIMESTAMP(3) NOT NULL,
    "current_objective" TEXT,

    CONSTRAINT "simplified_game_states_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "mvp_characters_user_id_idx" ON "mvp_characters"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "mvp_characters_user_id_name_key" ON "mvp_characters"("user_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "mvp_locations_world_id_name_key" ON "mvp_locations"("world_id", "name");

-- CreateIndex
CREATE INDEX "simplified_game_states_sessionId_idx" ON "simplified_game_states"("sessionId");

-- CreateIndex
CREATE INDEX "simplified_game_states_character_id_idx" ON "simplified_game_states"("character_id");

-- CreateIndex
CREATE INDEX "simplified_game_states_world_id_idx" ON "simplified_game_states"("world_id");

-- CreateIndex
CREATE INDEX "simplified_game_states_last_modified_idx" ON "simplified_game_states"("last_modified");

-- AddForeignKey
ALTER TABLE "mvp_characters" ADD CONSTRAINT "mvp_characters_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mvp_character_world_states" ADD CONSTRAINT "mvp_character_world_states_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "mvp_characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mvp_character_world_states" ADD CONSTRAINT "mvp_character_world_states_world_id_fkey" FOREIGN KEY ("world_id") REFERENCES "mvp_worlds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mvp_locations" ADD CONSTRAINT "mvp_locations_world_id_fkey" FOREIGN KEY ("world_id") REFERENCES "mvp_worlds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mvp_lore_fragments" ADD CONSTRAINT "mvp_lore_fragments_world_id_fkey" FOREIGN KEY ("world_id") REFERENCES "mvp_worlds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "simplified_game_states" ADD CONSTRAINT "simplified_game_states_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "mvp_characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "simplified_game_states" ADD CONSTRAINT "simplified_game_states_world_id_fkey" FOREIGN KEY ("world_id") REFERENCES "mvp_worlds"("id") ON DELETE CASCADE ON UPDATE CASCADE;
