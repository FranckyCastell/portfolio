# Changelog

All notable changes to this project are documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versions are dates because the site deploys continuously.

## 2026-11-27

### Added

- AIOps landing at `aiops.francastell.com`: hero, service offer, use cases,
  memory and feedback loop, pilot flow and contact.
- Canvas simulation of an incident investigation: alert particles, beams to
  three sources, pulsing agent core, data packets and shockwave. Four states,
  replay button, `prefers-reduced-motion` support.
- Use cases beyond on-call: incidents, alert noise, postmortems, onboarding,
  cost and audit.
- Memory section: semantic memory, episodic memory and the evals/skills loop,
  with a circular animated diagram.
- `focus.ts` data: Cloud & Platform, AI Operations, Observability.
- Project `role` and `outcome` fields, rendered on the projects page.
- Experience summary: 100+ repository estate, AWS Organizations, IAM Identity
  Center, Terraform and centralized GitHub Actions.
- `.agents/skills/`: `site-content`, `design-system`, `deploy-cloudflare`,
  `aiops-landing`.
- Rewritten `README.md`, `AGENTS.md` and this `CHANGELOG.md`.

### Changed

- Positioning from "DevOps engineer & LLMOps consultant" to Cloud Engineer
  (AWS, Terraform, AI operations).
- Availability from consulting engagements to Cloud/Platform Engineer roles.
- Contact address to `hola@francastell.com` (Cloudflare Email Routing).
- Hero simplified: smaller name, eyebrow, proof bar, no scroll cue.
- Project cards link to their anchor instead of the projects index.
- Trailing slashes normalized with `drop-trailing-slash`.

### Fixed

- Removed the unbacked "6 days to minutes" claim.
- Corrected the Security – Specialty certification: it is in progress, not held.
- Regenerated the Open Graph image: wrong domain (`francesccastell.dev`) and
  LLMOps wording removed.
- Repository URL corrected after GitHub moved it to lowercase.
- Worker now runs before assets (`run_worker_first = true`), fixing the
  subdomain rewrite.

### Removed

- Consulting framing from the portfolio.
- "LLMOps" as a synonym for operations.
- "Self-healing" language, which contradicted the read-only design.

## 2026-07-23

### Changed

- Redesigned project cards with gradient header and GitHub links.
- Restructured the stack page into categories.
- Added Docker, Jira, Git and FastAPI to the stack.
- Expanded the iThinkUPC summary to mention multi-cloud and NGO clients.

### Added

- AgentForge project.

## 2026-07-21

### Added

- CloudIA project page.

## 2026-07-20

### Added

- Cloudflare Workers observability configuration (logs enabled, traces disabled).
- Favicon set (32/48/96/256) and `favicon.ico`.

### Fixed

- Added the `ASSETS` binding required by the worker.
