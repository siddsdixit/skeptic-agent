import { Typewriter, RevealLines } from "../components/Typewriter";

const COMMAND = "skeptic scorecard";
const OUTPUT = [
  "",
  "11 findings across 6 passes:",
  "",
  "  pass                         crit  maj  min  note",
  "  ────────────────────────────────────────────────",
  "  1. perspective inversion       1    1    0    0",
  "  2. data & flow tracing         0    1    1    0",
  "  3. assumption extraction       1    1    0    1",
  "  4. failure mode sweep          0    2    1    0",
  "  5. business model stress       0    0    1    1",
  "  6. regulatory & liability      1    1    0    0",
  "  ────────────────────────────────────────────────",
  "  total                          3    6    2    2",
  "",
  "  verdict: NOT READY. Fix 3 critical before launch.",
];

export const ScorecardScene = () => {
  const cmdEnd = Math.ceil(COMMAND.length / 0.8) + 6;
  return (
    <>
      <span style={{ color: "#E08263", fontWeight: 700 }}>$ </span>
      <Typewriter text={COMMAND} style={{ color: "#f0e0d0" }} />
      <RevealLines
        lines={OUTPUT}
        startFrame={cmdEnd}
        framesPerLine={4}
        renderLine={(line, i) => {
          if (line.includes("verdict:")) {
            return (
              <span style={{ color: "#ff5f57", fontWeight: 700 }}>{line}</span>
            );
          }
          if (line.includes("total")) {
            return <span style={{ color: "#f0e0d0", fontWeight: 700 }}>{line}</span>;
          }
          return <span>{line || " "}</span>;
        }}
      />
    </>
  );
};
