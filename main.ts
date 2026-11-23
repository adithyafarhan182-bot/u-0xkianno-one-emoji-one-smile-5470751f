import { mkdirSync, writeFileSync } from "node:fs";

// One Emoji, One Smile — entry: exactly one emoji, nothing else.
// 🤗 Hugging Face (U+1F917): open arms, warm smile — the warmest friendly
// gesture a stranger can send, instantly readable, chosen not default.
const ENTRY = "🤗";

// Gate (mirrors the bounty gate): exactly one grapheme, 1-8 chars, UTF-8,
// not only whitespace. 🤗 is a single codepoint: 1 char, 4 bytes.
if ([...ENTRY].length !== 1 || ENTRY.trim().length === 0) {
  throw new Error("entry must be exactly one emoji");
}
if (Buffer.byteLength(ENTRY, "utf8") !== 4) {
  throw new Error("entry must be a single-codepoint emoji (4 bytes)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
