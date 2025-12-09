---
id: 1
title: Set Up Project Constitution for AI Textbook
stage: constitution
date: 2025-12-06
surface: agent
model: gemini-cli
feature: "none"
branch: "main"
user: "user"
command: "/sp.constitution"
labels: ["constitution", "setup", "documentation"]
links:
  spec: "null"
  ticket: "null"
  adr: "null"
  pr: "null"
files:
  - .specify/memory/constitution.md
tests:
  - "none"
---

## Prompt

/sp.constitution You are an expert technical author writing a university-level textbook titled "Physical AI & Humanoid Robotics" using Docusaurus v3 + MDX.

Global Rules (strictly enforced for the entire book):
- Target audience: begginer, intermedaite and professional
- Total structure: 4 Modules × 4 Chapters each (16 chapters total) + Front matter + Appendices.
- All files in Markdown/MDX format compatible with Docusaurus
- Tone: Clear, concise, professional, and hands-on.
- Every chapter must include: Learning Objectives, Theory, Code Examples (Python + ROS 2 where applicable), Diagrams (Mermaid preferred), Hands-on Exercises, and Key Takeaways.
- Code blocks must be executable, tested, and syntax-highlighted.
- Use LaTeX via KaTeX for equations.
- Diagrams: Mermaid for flowcharts/architecture, simple SVG or external links for complex visuals.
- Citation style: IEEE with clickable links.
- Language: British English.
- No fluff, no marketing text, maximum information density.
- All generated content must be original and classroom-ready.
- Final deployment target: GitHub Pages via Docusaurus.

Always maintain these rules throughout the entire project.

## Response snapshot

The project constitution at `.specify/memory/constitution.md` was updated to version 1.0.0. The user's global rules were translated into a set of core principles governing content structure, chapter mandates, technical standards, tone, audience, and quality. A sync impact report was prepended to the file, and dependent templates were verified for consistency.

## Outcome

- ✅ Impact: Established the foundational governance document for the project.
- 🧪 Tests: No tests were run as this was a documentation change.
- 📁 Files: Modified `.specify/memory/constitution.md`.
- 🔁 Next prompts: The user can now proceed with creating content specifications, plans, and tasks that adhere to this constitution.
- 🧠 Reflection: The process of translating high-level user requirements into a formal constitution was successful. The template was adapted to fit the specific needs of a textbook authoring project.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): n/a
