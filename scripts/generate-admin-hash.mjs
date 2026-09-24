import bcrypt from "bcryptjs";

const password = process.argv[2];

if (!password) {
  console.error('Usage: node scripts/generate-admin-hash.mjs "YourPassword"');
  process.exit(1);
}

const hash = await bcrypt.hash(password, 12);
const b64 = Buffer.from(hash).toString("base64");
console.log("\nADMIN_PASSWORD_HASH_B64=" + b64);
console.log("\nPaste the line above into .env.local (and Vercel later).\n");
