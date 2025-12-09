<!--
---
Sync Impact Report
---
Version change: 0.1.0 → 1.0.0
Modified principles:
- Principle 1: [PRINCIPLE_1_NAME] → Content Structure & Scope
- Principle 2: [PRINCIPLE_2_NAME] → Comprehensive Chapter Mandates
- Principle 3: [PRINCIPLE_3_NAME] → Technical and Formatting Standards
- Principle 4: [PRINCIPLE_4_NAME] → Professional Tone and Style
- Principle 5: [PRINCIPLE_5_NAME] → Audience and Deployment
- Principle 6: [PRINCIPLE_6_NAME] → Originality and Quality
Added sections: None
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md (✅ checked, no update needed)
- .specify/templates/spec-template.md (✅ checked, no update needed)
- .specify/templates/tasks-template.md (✅ checked, no update needed)
Follow-up TODOs: None
-->
# Physical AI & Humanoid Robotics Constitution

## Core Principles

### I. Content Structure & Scope
The textbook is organized into 4 Modules, each containing 4 Chapters (16 chapters total), supplemented by Front Matter and Appendices. This 4x4 structure is a fixed architectural constraint and must be adhered to for all content creation and organization.

### II. Comprehensive Chapter Mandates
Every chapter is a self-contained learning unit and MUST include the following sections:
- **Learning Objectives**: A clear, bulleted list of what the reader will be able to do after completing the chapter.
- **Theory**: The core theoretical concepts, explained concisely and accurately.
- **Code Examples**: Executable, tested code snippets in Python and, where applicable, ROS 2.
- **Diagrams**: Visual aids using Mermaid for flowcharts/architectures, and SVG or linked images for more complex visuals.
- **Hands-on Exercises**: Practical, goal-oriented tasks for the reader to apply their knowledge.
- **Key Takeaways**: A summary of the most critical points from the chapter.

### III. Technical and Formatting Standards
All content MUST adhere to the following technical standards to ensure consistency and quality:
- **Format**: All files must be in Docusaurus v3 compatible Markdown/MDX.
- **Code**: Code blocks must be executable, tested, and correctly syntax-highlighted.
- **Mathematics**: All mathematical equations must be rendered in LaTeX format via KaTeX.
- **Citations**: All references must follow the IEEE citation style with clickable hyperlinks.
- **Language**: All content must be written in British English.

### IV. Professional Tone and Style
The book's tone MUST be clear, concise, professional, and hands-on. The language should be direct and have a high information density, completely avoiding fluff, filler, or marketing-oriented text. The goal is to produce a classroom-ready academic resource.

### V. Audience and Deployment
The content must be tailored to a wide audience, from beginners to professionals. All development and content creation must support the final deployment target: GitHub Pages, via the standard Docusaurus build and deployment workflow.

### VI. Originality and Quality
All generated content MUST be original and meet a university-level academic standard. The material should be ready for immediate use in a classroom setting without requiring significant revision.

## Development Workflow

All contributions must follow a structured workflow:
1.  **Specification**: A new chapter or section begins with a clear specification (`spec.md`) outlining its scope and objectives, aligned with this constitution.
2.  **Plan**: An architectural plan (`plan.md`) is created, detailing the structure and key components.
3.  **Tasks**: The plan is broken down into discrete, testable tasks (`tasks.md`).
4.  **Implementation**: Content is generated following the Red-Green-Refactor cycle where applicable, ensuring all chapter mandates are met.

## Governance
This Constitution is the authoritative source for all project standards and practices. Any proposed amendments must be documented in an Architectural Decision Record (ADR) and require formal approval. All development activities, code reviews, and planning sessions must verify compliance with these principles.

**Version**: 1.0.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-06