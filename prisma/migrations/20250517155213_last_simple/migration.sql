-- AlterTable
ALTER TABLE "mvp_locations" ADD COLUMN     "danger_level" TEXT;

-- AlterTable
ALTER TABLE "mvp_lore_fragments" ADD COLUMN     "location_id" TEXT;

-- CreateTable
CREATE TABLE "mvp_events" (
    "id" TEXT NOT NULL,
    "world_id" TEXT NOT NULL,
    "location_id" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "trigger_conditions" JSONB NOT NULL,
    "outcomes" JSONB NOT NULL,
    "is_repeatable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "mvp_events_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "mvp_events" ADD CONSTRAINT "mvp_events_world_id_fkey" FOREIGN KEY ("world_id") REFERENCES "mvp_worlds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mvp_events" ADD CONSTRAINT "mvp_events_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "mvp_locations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
