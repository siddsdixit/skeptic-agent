import { PassScene } from "./PassScene";

export const PerspectiveScene = () => (
  <PassScene
    command="pass 1: perspective inversion"
    passLabel="# walking the plan as every actor..."
    findings={[
      "  [CRITICAL] Invoice recipient never sees a sender they trust.",
      "  → emails from noreply@duepilot.com land in spam.",
      "  → fix: send-on-behalf w/ DKIM-aligned customer domain.",
      "",
      "  [MAJOR] Customer's customer has no way to dispute a charge.",
      "  → fix: one-click 'this is wrong' link in every email.",
    ]}
  />
);
