import { mkdirSync, writeFileSync } from "node:fs";

// A single funny line with a setup and a payoff.
const LIMIT = 200;
const text = "The self-checkout asked if I'd brought my own baggage, so I told it about my childhood.";

if ([...text].length > LIMIT) throw new Error(`entry is ${[...text].length} characters`);
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text);
