import { PassScene } from "./PassScene";

export const LegalScene = () => (
  <PassScene
    command="pass 6: regulatory & liability scan"
    passLabel="# what gets you sued, fined, or shut down..."
    findings={[
      "  [CRITICAL] Sending on behalf of customers = first-party reminders.",
      "  → If tone shifts to 'pay or else', it becomes debt collection (FDCPA).",
      "  → fix: lock memo templates. Forbid threatening language.",
      "",
      "  [MAJOR] Storing AR data → state-level data breach notification laws.",
      "  → fix: encrypt at rest, document retention, breach playbook.",
    ]}
  />
);
