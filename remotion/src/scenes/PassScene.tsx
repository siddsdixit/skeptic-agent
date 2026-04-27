import { useCurrentFrame } from "remotion";
import { Typewriter } from "../components/Typewriter";

const SEV_COLORS: Record<string, string> = {
  CRITICAL: "#ff5f57",
  MAJOR: "#febc2e",
  MINOR: "#9a8676",
  NOTE: "#7aa68a",
};

const renderSeverity = (line: string) => {
  const m = line.match(/^\s*\[(CRITICAL|MAJOR|MINOR|NOTE)\]\s*(.*)$/);
  if (!m) return <span>{line || " "}</span>;
  const [, sev, rest] = m;
  return (
    <span>
      {"  "}
      <span
        style={{
          color: "#1a1614",
          background: SEV_COLORS[sev],
          padding: "1px 8px",
          borderRadius: 3,
          fontWeight: 700,
          fontSize: 16,
          letterSpacing: 1,
        }}
      >
        {sev}
      </span>{" "}
      <span style={{ color: "#f0e0d0" }}>{rest}</span>
    </span>
  );
};

type Props = {
  command: string;
  passLabel: string;
  findings: string[];
};

export const PassScene = ({ command, passLabel, findings }: Props) => {
  const frame = useCurrentFrame();
  const cmdEnd = Math.ceil(command.length / 0.8) + 4;
  const elapsed = Math.max(0, frame - cmdEnd);
  const framesPerLine = 5;

  const lines = ["", passLabel, "", ...findings];
  const visible = Math.min(lines.length, Math.floor(elapsed / framesPerLine));

  return (
    <>
      <span style={{ color: "#E08263", fontWeight: 700 }}>$ </span>
      <Typewriter text={command} style={{ color: "#f0e0d0" }} />
      <div>
        {lines.slice(0, visible).map((line, i) => {
          if (line.startsWith("# ")) {
            return (
              <div key={i} style={{ color: "#9a8676", letterSpacing: 1 }}>
                {line.slice(2)}
              </div>
            );
          }
          if (line.match(/^\s*\[(CRITICAL|MAJOR|MINOR|NOTE)\]/)) {
            return <div key={i}>{renderSeverity(line)}</div>;
          }
          if (line.startsWith("  →")) {
            return (
              <div key={i} style={{ color: "#d9c4b1" }}>
                {line}
              </div>
            );
          }
          return <div key={i}>{line || " "}</div>;
        })}
      </div>
    </>
  );
};
