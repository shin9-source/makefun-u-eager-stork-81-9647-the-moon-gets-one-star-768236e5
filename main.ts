import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of the Moon, v1.
// Concept: the Apollo footprints left in 1969 are still sitting up there,
// untouched in the airless dust — and the Moon has never once replied.
const review =
  "One star. Left footprints on it in 1969. Fifty-seven years later, still no reply. Would not recommend.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
console.log(review);
console.log(`characters: ${[...review].length}`);
