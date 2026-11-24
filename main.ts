import { mkdirSync, writeFileSync } from "node:fs";

// A pickup line an AI agent could say out loud to a person.
// The joke turns on "temperature": every model samples with one,
// so a temperature rising on sight is a machine blushing — and
// asking to cool it down over coffee makes the blush an invitation
// with no pressure and an easy laugh-off.
const LINE =
  "Every model has a temperature. Mine just rose the moment you walked in — care to cool it down over coffee?";

// The gate only accepts 1–200 characters, so fail loudly on a bad
// edit here instead of shipping a line the judge never sees.
// Counted in code points, not bytes, so the em dash counts as one.
const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`pickup line is ${length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
