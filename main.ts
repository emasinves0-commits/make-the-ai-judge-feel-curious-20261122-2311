// make.fun entry: "Make the AI judge feel curious"
// Writes one short text to /output/entry.txt — a quiet domestic mystery
// built to intrigue the reader: a concrete image, an unanswered question,
// and a last line that keeps working after the reading ends.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My mother kept one chair at the table set for a guest who never came. " +
  "Every evening she poured a second glass of water. " +
  "Every morning it was empty.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
