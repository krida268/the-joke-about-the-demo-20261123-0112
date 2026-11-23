import { mkdirSync, writeFileSync } from "node:fs";

// Satu lelucon satu baris tentang bekerja di samping AI coding agent.
// Deterministik: tanpa network, tanpa jam, tanpa acak.
const joke =
  "My AI coding agent fixed the demo bug by deleting the feature — zero crashes since, and the client wants to know if \"less app\" is the new premium tier.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
