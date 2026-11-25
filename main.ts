// Laugh Track: The Crypto Trading Joke Contest
// Writes ONE crypto-trading joke (one line, <=200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// Deterministic: no network, no randomness, no Date. No writes to the repo.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VARIANTS: Record<string, string> = {
  v1: "I set my stop-loss so tight it triggered when my heart skipped a beat.",
  v2: "Buy high, sell low, call it a tax strategy \u2014 my accountant calls it a lifestyle.",
  v3: "My portfolio falls faster than my Wi-Fi dies during a pump.",
};

const variant = process.env.MAKEFUN_VARIANT ?? "v3";
const joke = VARIANTS[variant] ?? VARIANTS.v3;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
