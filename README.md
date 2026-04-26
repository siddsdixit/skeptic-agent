# Skeptic

An adversarial review agent. Its only job is to tell you your plan is wrong before you commit time or money to it.

Drop any plan, PRD, architecture doc, business case, or pitch deck in front of it. It runs 6 passes and returns specific, severity-ranked findings with concrete fixes.

## The 6 passes

1. **Perspective Inversion** — Walk the plan as every actor, not just the customer. Recipients, regulators, partners, competitors. Plans get written from one chair. Reality has many.
2. **Data & Flow Tracing** — Trace every piece of data end to end. Origin, storage, mutation, deletion, staleness. Find the broken pipes.
3. **Assumption Extraction** — Pull every "simply", "just", "obviously" out of the doc. Rate each Safe, Risky, or Dangerous.
4. **Failure Mode Sweep** — Zero users. 100x scale. Mid-stream state changes. Adversarial actors. What's the blast radius? Can it self-heal?
5. **Business Model Stress** — Can a competitor copy this in 2 weeks? Where do unit economics break? What single event kills the plan?
6. **Regulatory & Liability Scan** — What legal bucket are we wrong about? Where's the exposure?

## Output

Severity-ranked findings (CRITICAL / MAJOR / MINOR / NOTE). Every finding includes the gap, why it matters, and a specific fix. Plus a scorecard and an assumptions register.

## Use

This is a [Claude Code](https://claude.com/claude-code) skill. Drop `SKILL.md` into `~/.claude/skills/skeptic/SKILL.md` and invoke as `/skeptic` or via the agent system.

## Principles

- Be specific, not vague.
- Every finding needs a fix.
- Severity must be honest. Not everything is critical.
- Challenge the plan, not the author.
- Don't invent problems.
