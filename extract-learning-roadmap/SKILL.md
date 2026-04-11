---
name: extract-learning-roadmap
description: Extract a staged learning roadmap from a paper PDF, project description, technical document, README, lecture notes, or related local materials. Use when the user provides a paper, project intro, PDF, markdown, or code explanation and wants an automatic study path, knowledge decomposition, curated resources, verified links, and a final markdown roadmap.
---

# Extract Learning Roadmap

Use this skill when the user wants a learning roadmap automatically generated from a paper, project description, technical doc, or mixed local materials.

## Outcome

Produce a Markdown roadmap that:
- is organized by learning stages
- reflects real prerequisite structure rather than mirroring the source TOC mechanically
- prioritizes local source materials first
- adds verified external resources
- prefers Chinese/domestic resources when comparable
- excludes broken, duplicate, or weakly related links
- hides validation notes unless the user explicitly asks

## Workflow

1. Classify the input as `paper-like`, `project-like`, or `mixed`.
2. Read local materials first. Prefer the main PDF/doc plus sibling markdown files in the same folder.
3. Extract:
   - problem definition or project goal
   - prerequisites
   - core ideas / modules
   - implementation-critical parts
   - optional advanced topics
4. Convert those into staged learning sections.
5. Gather external resources only after the stage structure is clear.
6. Validate each external link:
   - page opens now
   - title/topic matches the section
   - not obviously stale, broken, or low-value
7. Prefer local materials, then official resources, then domestic Chinese resources, then other community resources.
8. Write the roadmap into the same folder as the main source file unless the user specifies another destination.

## Route Shape

Default output shape:
- title
- usage notes
- staged roadmap
- each stage contains:
  - goal
  - key focus points
  - external reading supplements
  - optional video supplements
- final recommended study order
- questions the learner should be able to answer afterward

If the user asks to remove a block such as local-file guidance, remove it instead of insisting on a fixed template.

## Input Modes

Read [references/roadmap-modes.md](references/roadmap-modes.md) when choosing stage order.

## Resource Policy

Read [references/resource-priority.md](references/resource-priority.md) before selecting links.

## Validation Policy

Read [references/validation-rubric.md](references/validation-rubric.md) before keeping external resources.

Do not expose validation internals in the final Markdown unless requested.

## Output Template

Follow [references/output-template.md](references/output-template.md) unless the user asks for a different structure.

## Few-Shot Guidance

Read [references/examples.md](references/examples.md) before drafting. These examples teach the structure and decision style, not the exact content to copy.

## PDF Handling

If the input is a PDF:
- extract visible structure first
- extract embedded links if useful
- cross-check sibling markdown files when PDF text is noisy

If needed, use [scripts/extract_pdf_links.ps1](scripts/extract_pdf_links.ps1) to extract embedded PDF links.

## Default Preferences

Prefer these source types when quality is comparable:
- local project docs
- official documentation or official course pages
- bilibili
- icourse163 / 中国大学MOOC
- 腾讯云开发者
- CSDN
- 掘金

Avoid:
- obvious content farms
- duplicate links
- broken links
- off-topic pages
- pages whose visible title/topic does not match the section they are placed in
