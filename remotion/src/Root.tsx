import { Composition } from "remotion";
import { SkepticDemo, DEMO_DURATION_FRAMES, FPS } from "./SkepticDemo";

export const Root = () => {
  return (
    <Composition
      id="SkepticDemo"
      component={SkepticDemo}
      durationInFrames={DEMO_DURATION_FRAMES}
      fps={FPS}
      width={1280}
      height={720}
    />
  );
};
