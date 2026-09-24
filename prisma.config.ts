import { config } from "dotenv";
import { defineConfig, env } from "prisma/config";

// Load .env.local explicitly — Prisma doesn't do this by default
config({ path: ".env.local" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
