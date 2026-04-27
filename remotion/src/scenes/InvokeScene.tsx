import { Typewriter, RevealLines } from "../components/Typewriter";

const COMMAND = "skeptic review pitch.md";
const OUTPUT = [
  "",
  "skeptic v1.0  ·  adversarial review",
  "",
  "  target           pitch.md  (DuePilot — AR collections SaaS)",
  "  passes           6",
  "  mode             challenge the plan, not the author",
  "",
  "  running...",
];

export const InvokeScene = () => {
  const cmdEnd = Math.ceil(COMMAND.length / 0.8) + 6;
  return (
    <>
      <span style={{ color: "#E08263", fontWeight: 700 }}>$ </span>
      <Typewriter text={COMMAND} style={{ color: "#f0e0d0" }} />
      <RevealLines lines={OUTPUT} startFrame={cmdEnd} framesPerLine={4} />
    </>
  );
};
