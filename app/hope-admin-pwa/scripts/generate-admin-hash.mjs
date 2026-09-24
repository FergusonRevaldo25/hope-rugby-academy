#!/usr/bin/env node
/**
 * Generate a bcrypt hash for the admin password.
 * Usage: node scripts/generate-admin-hash.mjs "YourStrongPassword"
 */
import bcrypt from "bcryptjs";

const password = process.argv[2];

if (!password || password.length < 8) {
  console.error("Usage: node scripts/generate-admin-hash.mjs \"YourStrongPassword\"");
  console.error("Password must be at least 8 characters.");
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 12);
console.log("\nAdd this to your .env.local:\n");
console.log(`ADMIN_PASSWORD_HASH=${hash}\n`);
