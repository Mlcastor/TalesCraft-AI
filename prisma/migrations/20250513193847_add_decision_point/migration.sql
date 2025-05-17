-- CreateTable
CREATE TABLE "decision_points" (
    "id" TEXT NOT NULL,
    "game_state_id" TEXT NOT NULL,
    "context" TEXT NOT NULL,
    "options" TEXT[],
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "decision_points_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "decision_points_game_state_id_idx" ON "decision_points"("game_state_id");

-- CreateIndex
CREATE INDEX "decision_points_timestamp_idx" ON "decision_points"("timestamp" DESC);

-- AddForeignKey
ALTER TABLE "decision_points" ADD CONSTRAINT "decision_points_game_state_id_fkey" FOREIGN KEY ("game_state_id") REFERENCES "game_states"("id") ON DELETE CASCADE ON UPDATE CASCADE;
