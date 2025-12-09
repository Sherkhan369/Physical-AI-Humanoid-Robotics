# PHR Quality Checklist

This checklist validates the quality, clarity, and completeness of Prompt History Record (PHR) requirements as defined in `GEMINI.md`.

## Requirement Completeness

- [ ] CHK001 - Is the requirement to record every user input verbatim in a PHR explicitly stated? [Completeness, GEMINI.md §3]
- [ ] CHK002 - Are the specific stages for PHR routing (constitution, feature-specific, general) clearly defined? [Completeness, GEMINI.md §3.6]
- [ ] CHK003 - Is the requirement for PHR creation after every user message clearly stated? [Completeness, GEMINI.md §3]
- [ ] CHK004 - Are all required YAML and body placeholders for the PHR template explicitly listed? [Completeness, GEMINI.md §3.3]

## Requirement Clarity

- [ ] CHK005 - Is "verbatim" (for user input recording) clearly defined to prevent truncation? [Clarity, GEMINI.md §3]
- [ ] CHK006 - Is the format for generating the PHR title (3-7 words, slug for filename) unambiguous? [Clarity, GEMINI.md §3.2]
- [ ] CHK007 - Is the process for resolving the PHR output path based on stage clearly explained? [Clarity, GEMINI.md §3.2a]
- [ ] CHK008 - Is "concise but representative" (for RESPONSE_TEXT) sufficiently defined or exemplified? [Clarity, GEMINI.md §3.3]

## Requirement Consistency

- [ ] CHK009 - Do the PHR routing rules consistently apply across all defined stages? [Consistency, GEMINI.md §3.2a, §3.6]
- [ ] CHK010 - Are the PHR creation triggers (e.g., implementation work, planning, debugging) consistently applied across the development workflow? [Consistency, GEMINI.md §3.3]

## Acceptance Criteria Quality

- [ ] CHK011 - Are the post-creation validation steps (e.g., no unresolved placeholders, title/stage/dates match) measurable and testable? [Measurability, GEMINI.md §3.7]
- [ ] CHK012 - Is the requirement for the `PROMPT_TEXT` to be complete (not truncated) objectively verifiable? [Measurability, GEMINI.md §3.7]

## Scenario Coverage

- [ ] CHK013 - Are requirements defined for fallback mechanisms if the shell-based PHR creation script fails? [Coverage, GEMINI.md §3.5]
- [ ] CHK014 - Is the scenario of PHR creation being skipped only for `/sp.phr` itself explicitly covered? [Coverage, GEMINI.md §3.8]

## Traceability

- [ ] CHK015 - Is there a clear method to trace a PHR back to the specific user command that triggered its creation? [Traceability, GEMINI.md §3.3]
