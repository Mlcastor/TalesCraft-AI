/*
  Warnings:

  - You are about to drop the `lore_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `world_lore` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "lore_categories" DROP CONSTRAINT "lore_categories_parent_category_id_fkey";

-- DropForeignKey
ALTER TABLE "world_lore" DROP CONSTRAINT "world_lore_category_id_fkey";

-- AlterTable
ALTER TABLE "game_states" ADD COLUMN     "location_id" TEXT,
ADD COLUMN     "world_id" TEXT;

-- DropTable
DROP TABLE "lore_categories";

-- DropTable
DROP TABLE "world_lore";

-- CreateTable
CREATE TABLE "worlds" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "thumbnail_url" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "worlds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "character_world_states" (
    "id" TEXT NOT NULL,
    "character_id" TEXT NOT NULL,
    "world_id" TEXT NOT NULL,
    "current_location" TEXT,
    "last_played_at" TIMESTAMP(3),

    CONSTRAINT "character_world_states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" TEXT NOT NULL,
    "world_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "is_starting_location" BOOLEAN NOT NULL DEFAULT false,
    "connected_location_ids" TEXT[],
    "thumbnail_url" TEXT,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lore_fragments" (
    "id" TEXT NOT NULL,
    "world_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "context_id" TEXT,
    "is_revealed" BOOLEAN NOT NULL DEFAULT true,
    "keywords" TEXT[],

    CONSTRAINT "lore_fragments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "world_id" TEXT NOT NULL,
    "location_id" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "event_type" TEXT NOT NULL,
    "trigger_conditions" JSONB NOT NULL DEFAULT '{}',
    "outcomes" JSONB NOT NULL DEFAULT '[]',
    "is_repeatable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "character_world_states_character_id_world_id_key" ON "character_world_states"("character_id", "world_id");

-- CreateIndex
CREATE UNIQUE INDEX "locations_world_id_name_key" ON "locations"("world_id", "name");

-- CreateIndex
CREATE INDEX "game_states_world_id_idx" ON "game_states"("world_id");

-- CreateIndex
CREATE INDEX "game_states_location_id_idx" ON "game_states"("location_id");

-- AddForeignKey
ALTER TABLE "character_world_states" ADD CONSTRAINT "character_world_states_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_world_states" ADD CONSTRAINT "character_world_states_world_id_fkey" FOREIGN KEY ("world_id") REFERENCES "worlds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_world_id_fkey" FOREIGN KEY ("world_id") REFERENCES "worlds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lore_fragments" ADD CONSTRAINT "lore_fragments_world_id_fkey" FOREIGN KEY ("world_id") REFERENCES "worlds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_world_id_fkey" FOREIGN KEY ("world_id") REFERENCES "worlds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_states" ADD CONSTRAINT "game_states_world_id_fkey" FOREIGN KEY ("world_id") REFERENCES "worlds"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_states" ADD CONSTRAINT "game_states_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
