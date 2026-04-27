<div align="center">

# `skeptic`

### the adversarial review agent

**Tells you your plan is wrong before you commit time or money.**

Six passes. Severity-ranked findings. Concrete fixes.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Stars](https://img.shields.io/github/stars/siddsdixit/skeptic-agent?style=social)](https://github.com/siddsdixit/skeptic-agent)
[![Works with](https://img.shields.io/badge/works_with-Claude_·_Codex_·_Gemini_·_Cursor_·_Aider-E08263)](#install)

</div>

---

## What it reviews

**Anything** that proposes a course of action.

| Code | PRDs | Architecture | Migrations | Pitch decks |
|---|---|---|---|---|
| **Strategy memos** | **Marketing copy** | **Emails** | **Hiring plans** | **Contracts** |
| **Trades** | **Roadmaps** | **Pricing** | **Decisions** | **Anything** |

If you're about to commit time or money based on a document, run the skeptic first.

---

## How it works

Six passes. Each finds a different class of bug.

```
01  Perspective Inversion   →  Find what's invisible from your chair.
02  Data & Flow Tracing     →  Trace every piece of data end to end. Find broken pipes.
03  Assumption Extraction   →  Break every "obviously", "just", "users will".
04  Failure Mode Sweep      →  Zero. Scale. Mid-stream. On-failure. Adversarial.
05  Business Model Stress   →  Moat. Incentives. Kill shots. Timing.
06  Regulatory & Liability  →  Where the legal exposure hides.
```

Each pass produces findings. Each finding gets a severity, a gap, a "why it matters", and a concrete fix.

---

## Output

```text
### CRITICAL  Anthropic-native Memory will absorb 80% of value within 6 months
Category: Business Model
Pass: 5

The gap: Anthropic ships Memory in Claude.ai. It's staging for Claude Code.
When that lands, "session memory in markdown" stops being a unique offering.

Why it matters: Most projects in the strike zone of native platform features
die quietly. Aider plateaued. Continue plateaued. Same wave.

Fix: Pick one of two strategic positions before launch.
  1. "Portable across agents" → make multi-agent the headline.
  2. "Team-shared brain" → pivot focus to small dev teams. Memory is per-user;
     team-shared markdown is a feature Anthropic will not ship in 2026.
Pick one in the next 7 days. Both can't be the headline.
```

Plus a **scorecard** (findings per pass) and an **assumptions register** (every implicit belief, rated Safe / Risky / Dangerous).

---

## Install

`skeptic` works in any agent runtime that reads a markdown activation file.

### Claude Code

```bash
mkdir -p ~/.claude/skills/skeptic
curl -sL https://raw.githubusercontent.com/siddsdixit/skeptic-agent/main/SKILL.md \
  > ~/.claude/skills/skeptic/SKILL.md
```

Invoke: `/skeptic <plan-or-file>`

### Codex CLI · Cursor · Aider · OpenCode

These read [`AGENTS.md`](https://agents.md) per the spec. Drop it at the root of your project:

```bash
curl -sL https://raw.githubusercontent.com/siddsdixit/skeptic-agent/main/AGENTS.md \
  > ./AGENTS.md
```

Invoke by asking: "Run the skeptic on this plan."

### Gemini CLI

```bash
curl -sL https://raw.githubusercontent.com/siddsdixit/skeptic-agent/main/GEMINI.md \
  > ./GEMINI.md
```

### Cursor (legacy versions)

```bash
curl -sL https://raw.githubusercontent.com/siddsdixit/skeptic-agent/main/.cursorrules \
  > ./.cursorrules
```

### ChatGPT / Web Claude

Paste [`SKILL.md`](SKILL.md) into a project / custom GPT / system prompt. Then paste your plan and ask for a skeptic review.

---

## Use it on...

- A **PRD** before kickoff. Find the assumptions before they ship.
- A **pitch deck** before the fundraise. Find the questions before the GP does.
- A **migration plan** before the freeze window. Find the data flow that breaks.
- A **hiring plan** before posting. Find the incentive misalignment.
- A **marketing email** before send. Find the recipient view.
- A **strategic decision** you're emotionally attached to. Find what your chair can't see.
- A **trade** you're about to make. Find what your enthusiasm hides.
- A **product launch** before the HN post. Find the critical thread you're not ready for.
- **Anything** you'd be embarrassed to be wrong about.

---

## Philosophy

Steel-manning. Premortem. Red team. Devil's advocate. All the same instinct: **before I commit, what am I missing?**

Most decisions die in the gap between what the planner sees and what reality holds. The skeptic agent closes that gap on demand. It is brutal in service of the work, never of the author.

> "The first principle is that you must not fool yourself, and you are the easiest person to fool."
> — Richard Feynman

---

## Principles

The agent operates by these rules:

1. **Be specific, not vague.** "Email deliverability might be an issue" is useless. "Sending from `noreply@yourdomain.com` will land in spam because recipients don't recognize the sender, killing the core product loop" is actionable.
2. **Every finding needs a fix.** Identifying problems without solutions is just complaining.
3. **Severity must be honest.** Not everything is critical. Overcrying wolf makes real issues invisible.
4. **Challenge the plan, not the author.** The goal is to make the plan better, not to prove it's bad.
5. **Prioritize breadth over depth.** Find the 3 critical issues first, then go deep.
6. **Name the perspective.** "From the invoice recipient's perspective" beats "deliverability may be suboptimal."
7. **Don't invent problems.** If the plan handles something well, say so. Trust is built by accuracy, not relentless negativity.

---

## Heritage

Built on a long tradition of premortem thinking:

- **[Pre-mortem](https://en.wikipedia.org/wiki/Pre-mortem)** — Gary Klein. Imagine the failure first.
- **[Inversion](https://fs.blog/inversion/)** — Charlie Munger. Solve forward by working backward.
- **[Red team](https://en.wikipedia.org/wiki/Red_team)** — military doctrine, now industry practice.
- **Chesterton's fence** — don't remove what you don't understand.

What's new: an agent that runs all of them on demand, in seconds, on any plan.

---

## License

MIT. See [LICENSE](LICENSE).

---

<div align="center">

<sub>Built by <a href="https://github.com/siddsdixit"><b>@siddsdixit</b></a>. Sister project to <a href="https://github.com/siddsdixit/nanobrain"><b>nanobrain</b></a>.</sub>

</div>
