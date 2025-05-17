import { PrismaClient } from "../src/generated/prisma";
import { MVPLoreFragmentTypes } from "../src/types/mvpTypes";
import { logger } from "../src/lib/utils/logger";

const prisma = new PrismaClient();

async function main() {
  // 1. CLEAR tables (for idempotent seeding)
  await prisma.mVPLoreFragment.deleteMany();
  await prisma.mVPLocation.deleteMany();
  await prisma.mVPWorld.deleteMany();

  // 2. WORLD
  const world = await prisma.mVPWorld.create({
    data: {
      name: "Test Realm",
      description: "A minimal realm seeded for MVP smoke-tests.",
      isActive: true,
      thumbnailUrl: "public/images/worlds/eldrith.webp",
    },
  });

  // 3. LOCATIONS
  const townSquare = await prisma.mVPLocation.create({
    data: {
      worldId: world.id,
      name: "Town Square",
      description: "The bustling heart of the Test Realm.",
      isStartingLocation: true,
      connectedLocationIds: [],
      dangerLevel: "low",
      thumbnailUrl: null,
    },
  });

  const forestEdge = await prisma.mVPLocation.create({
    data: {
      worldId: world.id,
      name: "Forest Edge",
      description: "The edge of a dark forest that whispers at night.",
      isStartingLocation: false,
      connectedLocationIds: [townSquare.id],
      dangerLevel: "medium",
      thumbnailUrl: null,
    },
  });

  // bidirectional link
  await prisma.mVPLocation.update({
    where: { id: townSquare.id },
    data: { connectedLocationIds: [forestEdge.id] },
  });

  // 4. LORE
  await prisma.mVPLoreFragment.createMany({
    data: [
      {
        worldId: world.id,
        title: "Founding of the Test Realm",
        content:
          "Legends say the Test Realm was forged overnight by a mysterious developer.",
        type: MVPLoreFragmentTypes.GLOBAL,
        isRevealed: true,
        keywords: ["founding", "history"],
      },
      {
        worldId: world.id,
        title: "The Whispering Woods",
        content:
          "Locals claim the forest whispers the dreams of wandering adventurers.",
        type: MVPLoreFragmentTypes.LOCATION,
        locationId: forestEdge.id,
        isRevealed: false,
        keywords: ["forest", "mystery"],
      },
    ],
  });

  logger.info("🌱  Seed completed", {
    context: "seed",
    metadata: { worldId: world.id },
  });
}

main()
  .catch((e) => {
    logger.error("Seed failed", { context: "seed", error: e });
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
