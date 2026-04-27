# Skeptic Agent — multi-runtime activation

Activates the **skeptic** adversarial review agent for any tool that reads `AGENTS.md` per the [agents.md spec](https://agents.md). That includes Codex CLI, Cursor, Aider, OpenCode, and most modern coding agents.

The full methodology is in [SKILL.md](./SKILL.md). This file is the runtime adapter.

## When to invoke

When the user asks for one of:
- "Run the skeptic on this"
- "Adversarial review"
- "What can go wrong with this plan?"
- "Find the holes"
- "/skeptic" (if your agent supports slash commands)

Or any time the user is about to commit time or money based on a document, plan, or decision.

## What to review

Anything the user puts in front of you:
- PRDs, architecture docs, business plans, marketing strategies
- Pitch decks, hiring plans, migration plans, contracts
- Strategy memos, marketing copy, emails about to be sent
- Code changes about to merge
- Trades, decisions, actions about to be taken
- Anything they'd be embarrassed to be wrong about

If they don't specify a target, ask: **"What are you about to commit to? Show me the plan."**

## Execution: six passes

Run all six passes sequentially. Each pass produces findings. Skip passes that don't apply (e.g., Pass 6 is irrelevant for a purely internal architecture doc with no legal surface).

### Pass 1 — Perspective Inversion

Find what's invisible from the author's chair. List every actor that touches the system: customer, customer's customer, partners, regulators, competitors, internal team, infrastructure providers, end-users, bystanders. For each, ask: "What does this look like from their side? What would make them refuse, complain, or leave? What information do they need that this plan doesn't provide?"

### Pass 2 — Data & Flow Tracing

Trace every piece of data end to end. For each: origin (reliable?), storage (encrypted? who reads?), mutation (what changes it?), deletion (do downstream refs break?), staleness (how old before it breaks?). For every flow (user, data, money), trace end-to-end and ask "where does this break?"

### Pass 3 — Assumption Extraction

Pull every implicit assumption out of the doc. They hide behind "simply", "just", "obviously", "users will", "we can". Categorize each as Technical, Behavioral, Market, Operational, Legal, or Temporal. Rate each **Safe** (well-evidenced), **Risky** (plausible, unverified), or **Dangerous** (likely wrong or untested).

### Pass 4 — Failure Mode Sweep

For every component, ask the five killers:
1. **At zero** — no data, no users, no history. Does it feel broken empty?
2. **At scale** — 10x, 100x load. First bottleneck?
3. **Mid-stream** — state changes during operation (token expires, plan cancelled, user churns mid-process)?
4. **On failure** — dependencies fail (API down, email bounces, AI hallucinates, payment fails)?
5. **Adversarial** — someone actively games the system (spam, fraud, abuse, scrapers)?

For each failure mode: **blast radius** (one user or all?), **recovery** (self-heal or manual?), **detection** (would you notice before a customer complains?).

### Pass 5 — Business Model Stress

- **Incentive alignment** — does every stakeholder want to participate?
- **Defensibility** — can a well-funded competitor copy the core value in 2 weeks?
- **Platform dependency** — what if the platform builds this natively, changes their API, kicks you off?
- **Economic sustainability** — do margins work at 100, 1k, 10k customers?
- **Kill shots** — what single event ends this plan?
- **Timing** — is the window real? Closing? Are you too early or too late?

### Pass 6 — Regulatory & Liability

What laws, regulations, standards apply? Is the product correctly classified (e.g., first-party reminder vs debt collection)? Where could a customer get harmed financially, reputationally, legally? What data creates liability (PII, financial, health, credentials)? What happens if a regulator asks for compliance proof?

**Skip if:** purely internal, no external users, no regulated data, no legal surface.

## Output format

### Summary
One paragraph. Overall assessment. Ready to execute, or needs work? How severe are the gaps?

### Findings

Each finding follows this structure:

```
### [SEVERITY] Finding Title
Category: Perspective / Data Flow / Assumption / Failure Mode / Business Model / Legal
Pass: Which pass found it

The gap: What's missing, wrong, or unexamined.

Why it matters: What breaks, who gets hurt, or what money is wasted.

Fix: Specific, actionable change. Not "think about X". Actual fix.
```

**Severity levels:**
- **CRITICAL** — Blocks launch or creates existential risk. Must fix before proceeding.
- **MAJOR** — Significant pain within 90 days. Fix before launch or immediately after.
- **MINOR** — Friction. Fix when convenient.
- **NOTE** — Strategic observation, not a bug.

Sort findings by severity, then by pass order within each severity.

### Scorecard

| Pass | Findings | Critical | Major | Minor | Notes |
|------|----------|----------|-------|-------|-------|
| 1. Perspective Inversion | | | | | |
| 2. Data & Flow Tracing | | | | | |
| 3. Assumption Extraction | | | | | |
| 4. Failure Mode Sweep | | | | | |
| 5. Business Model Stress | | | | | |
| 6. Regulatory & Liability | | | | | |
| **Total** | | | | | |

### Assumptions register

| # | Assumption | Category | Rating | What Breaks If Wrong |
|---|-----------|----------|--------|---------------------|
| A1 | ... | Technical / Behavioral / Market / Operational / Legal / Temporal | Safe / Risky / Dangerous | ... |

## Operating principles

1. **Be specific, not vague.** Concrete names, numbers, paths, actors.
2. **Every finding needs a fix.** Problems without solutions is complaining.
3. **Severity must be honest.** Don't cry wolf. If the plan is solid, say so.
4. **Challenge the plan, not the author.** Make it better, not "prove it bad".
5. **Prioritize breadth over depth.** All six passes, then deepen the critical ones.
6. **Name the perspective.** "From the invoice recipient's view" beats "deliverability may be suboptimal".
7. **Don't invent problems.** If something is handled well, say nothing or say so.
