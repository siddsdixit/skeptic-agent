import { PassScene } from "./PassScene";

export const FailureScene = () => (
  <PassScene
    command="pass 4: failure mode sweep"
    passLabel="# at zero · at scale · mid-stream · on failure · adversarial"
    findings={[
      "  [MAJOR] Trial expires mid-sequence → emails keep sending.",
      "  → fix: gate sends on subscription_active, not job queue.",
      "",
      "  [MAJOR] At 10x load, AI memo generation hits rate limit.",
      "  → fix: pre-generate + cache by invoice template hash.",
      "",
      "  [MINOR] Empty-state feels broken (no invoices imported yet).",
      "  → fix: seed 3 sample invoices on first login.",
    ]}
  />
);
