import { AbsoluteFill, Sequence } from "remotion";
import { Terminal } from "./components/Terminal";
import { Title } from "./components/Title";
import { Scanlines, Vignette, GridBackground } from "./components/Scanlines";
import { InvokeScene } from "./scenes/InvokeScene";
import { PerspectiveScene } from "./scenes/PerspectiveScene";
import { AssumptionScene } from "./scenes/AssumptionScene";
import { FailureScene } from "./scenes/FailureScene";
import { LegalScene } from "./scenes/LegalScene";
import { ScorecardScene } from "./scenes/ScorecardScene";
import { ClosingScene } from "./scenes/ClosingScene";

export const FPS = 30;

const SCENES = {
  title: 90,        // 3.0s
  invoke: 110,      // 3.7s
  perspective: 160, // 5.3s
  assumption: 160,  // 5.3s
  failure: 170,     // 5.7s
  legal: 150,       // 5.0s
  scorecard: 180,   // 6.0s
  closing: 130,     // 4.3s
};

export const DEMO_DURATION_FRAMES = Object.values(SCENES).reduce((a, b) => a + b, 0);

export const SkepticDemo = () => {
  let from = 0;
  const at = (key: keyof typeof SCENES) => {
    const start = from;
    from += SCENES[key];
    return start;
  };

  return (
    <AbsoluteFill
      style={{
        fontFamily:
          "ui-monospace, 'JetBrains Mono', 'Fira Code', SF Mono, Menlo, Consolas, monospace",
      }}
    >
      <GridBackground />

      <Sequence from={at("title")} durationInFrames={SCENES.title}>
        <Title />
      </Sequence>
      <Sequence from={at("invoke")} durationInFrames={SCENES.invoke}>
        <Terminal path="~/plans/pitch.md">
          <InvokeScene />
        </Terminal>
      </Sequence>
      <Sequence from={at("perspective")} durationInFrames={SCENES.perspective}>
        <Terminal path="~/plans/pitch.md  ·  pass 1/6">
          <PerspectiveScene />
        </Terminal>
      </Sequence>
      <Sequence from={at("assumption")} durationInFrames={SCENES.assumption}>
        <Terminal path="~/plans/pitch.md  ·  pass 3/6">
          <AssumptionScene />
        </Terminal>
      </Sequence>
      <Sequence from={at("failure")} durationInFrames={SCENES.failure}>
        <Terminal path="~/plans/pitch.md  ·  pass 4/6">
          <FailureScene />
        </Terminal>
      </Sequence>
      <Sequence from={at("legal")} durationInFrames={SCENES.legal}>
        <Terminal path="~/plans/pitch.md  ·  pass 6/6">
          <LegalScene />
        </Terminal>
      </Sequence>
      <Sequence from={at("scorecard")} durationInFrames={SCENES.scorecard}>
        <Terminal path="~/plans/pitch.md  ·  scorecard">
          <ScorecardScene />
        </Terminal>
      </Sequence>
      <Sequence from={at("closing")} durationInFrames={SCENES.closing}>
        <ClosingScene />
      </Sequence>

      <Vignette />
      <Scanlines />
    </AbsoluteFill>
  );
};
