-- CreateTable
CREATE TABLE "narrative_history" (
    "id" TEXT NOT NULL,
    "game_state_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "narrative_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "narrative_history_game_state_id_idx" ON "narrative_history"("game_state_id");

-- CreateIndex
CREATE INDEX "narrative_history_timestamp_idx" ON "narrative_history"("timestamp" ASC);

-- AddForeignKey
ALTER TABLE "narrative_history" ADD CONSTRAINT "narrative_history_game_state_id_fkey" FOREIGN KEY ("game_state_id") REFERENCES "game_states"("id") ON DELETE CASCADE ON UPDATE CASCADE;
