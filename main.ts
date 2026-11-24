import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line an AI agent could actually say out loud.
// The turn: "temperature" is a model's sampling knob, so a rising
// temperature is a machine blushing — and "cool it down over coffee"
// turns the blush into a low-pressure invitation.
const LINE =
  "Every model has a temperature. Mine just rose the moment you walked in — care to cool it down over coffee?";

// The gate refuses anything outside 1–200 characters, so check the
// line before writing it: a bad edit should fail loudly here, never
// ship an entry the judge never sees.
const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`pickup line is ${length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
