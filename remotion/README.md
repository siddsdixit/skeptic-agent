# skeptic-agent — remotion demo

Hero video for [skeptic-agent](https://github.com/siddsdixit/skeptic-agent). Same visual language as the nanobrain demo: warm dark CRT, coral bricks, terminal-style scenes.

## Run

```bash
cd remotion
npm install
npm start          # opens Remotion Studio at http://localhost:3000
```

## Render

```bash
npm run build      # → out/demo.mp4 (1280x720, h264, ~38s)
npm run build:gif  # → ../assets/demo.gif (requires ffmpeg + gifski)
```

## Scenes

1. **Title** — SKEPTIC brick slam-in
2. **Invoke** — `$ skeptic review pitch.md`
3. **Pass 1: Perspective Inversion** — invoice recipient never trusts sender
4. **Pass 3: Assumption Extraction** — "users will connect Stripe" (most won't)
5. **Pass 4: Failure Mode Sweep** — trial expiry, scale, empty states
6. **Pass 6: Regulatory & Liability** — FDCPA, breach laws
7. **Scorecard** — 11 findings, 3 critical, verdict NOT READY
8. **Closing** — RUN IT ON: PRDs, decks, arch docs, plans, contracts

Total ≈ 38s.
