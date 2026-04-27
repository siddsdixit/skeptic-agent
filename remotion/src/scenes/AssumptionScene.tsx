import { PassScene } from "./PassScene";

export const AssumptionScene = () => (
  <PassScene
    command="pass 3: assumption extraction"
    passLabel="# 14 assumptions extracted, 3 dangerous..."
    findings={[
      "  [CRITICAL] 'Users will connect Stripe.'",
      "  → 68% of target SMBs use QuickBooks-only. No Stripe.",
      "  → fix: QuickBooks-first onboarding, Stripe optional.",
      "",
      "  [MAJOR] 'Build in 2 weeks.'",
      "  → ignores SES warmup (14d), DKIM, SPF, dispute flow.",
      "  → realistic: 5–6 weeks to a sendable v1.",
    ]}
  />
);
