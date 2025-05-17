import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The critical fix for Prisma in Vercel:
  output: "standalone",

  // TypeScript-compatible webpack configuration
  webpack: (config) => {
    config.externals = [
      ...((config.externals as any[]) || []),
      "prisma",
      "@prisma/client",
    ];
    return config;
  },

  headers: async () => {
    return [
      {
        source: "/api/webhooks/clerk",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "POST, OPTIONS" },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, svix-id, svix-signature, svix-timestamp",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
