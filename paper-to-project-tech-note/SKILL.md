---
name: paper-to-project-tech-note
description: Turn a paper PDF or research-style technical document into a long-form project teaching note for beginners. Use when Codex should explain a paper as a student-safe project document rather than a paper review, especially when the output must hide paper-identifying details, expand prerequisite knowledge, deeply unpack 4-6 core technical modules, and include interview or presentation-ready project phrasing.
---

# Paper To Project Tech Note

## Goal

Transform a paper PDF into a project-style technical note that:

- teaches the core idea to a beginner
- explains why each major module exists
- emphasizes principles over code
- hides explicit paper identity by default
- includes project-ready speaking material
- is substantial enough to read like a true deep-dive handout rather than a short summary

This skill is for project teaching notes, not paper summaries.

## Workflow

Follow this order:

1. Read the PDF or source document.
2. Extract the main task, pain point, overall pipeline, and major result trends.
3. Identify the prerequisite concepts a beginner must know first.
4. Select 4-6 core technical modules worth deep explanation.
5. Build a project-style outline in learning order, not paper section order.
6. Write the full note as a long-form Markdown document.
7. Force a second expansion pass to thicken sections that are still too thin.
8. End with interview and presentation-ready phrasing.

Always explain the problem before the method, and the method before the results.

## Required References

Read these references whenever you use this skill:

- `references/de-paperization.md`
  Read before drafting. It defines how to hide paper-identifying details and rewrite paper language into project language.
- `references/longform-structure.md`
  Read before outlining. It defines the long-form document structure, mandatory expansion rules, and quality bar for core technology sections.

Do not rely on memory for these two parts. Load both files every time.

## Output Structure

Default to one long Markdown file with appendices at the end unless the user asks for multiple files.

The document should usually contain:

1. Project overview
2. Background and problem definition
3. Why the problem is hard
4. Prerequisite knowledge
5. Overall solution overview
6. Core technologies
7. Full system flow
8. Training and optimization logic
9. Inference or application flow
10. Result interpretation
11. Value, innovation, limits, and scope
12. Interview and presentation package
13. Appendix

## Core Technology Selection

Choose 4-6 core modules that satisfy most of these:

- critical to the overall effect
- central to the method's novelty
- hard to understand without dedicated explanation
- clear role in the pipeline
- clear reason for existence

Merge secondary details into system flow or appendix sections.

## Mandatory Thickness Rule

Thick output is a hard requirement, not a nice-to-have.

Never stop at a thin overview if the user expects a deep version. After the first full draft, inspect the note and actively thicken weak sections by adding:

- prerequisite teaching
- concrete examples
- alternative-method comparisons
- misunderstandings and pitfalls
- system-level links between modules
- result interpretation and application discussion

A deep version must feel like a serious teaching handout, not like a compressed summary.

## Prerequisite Knowledge Rule

Treat prerequisite teaching as mandatory, not optional.

Explain only the concepts needed to understand the project. For each concept, explain why it matters specifically in this project.

## Formula Rule

Use medium-depth formula explanation.

In the main body:

- keep only key formulas
- do not preserve original numbering
- translate each formula into plain language
- explain what each important term is doing
- explain why the formula appears in this system

Move extra mathematical detail to the appendix.

## Results Rule

Write the results section as project evidence, not as a paper benchmark dump.

Prefer:

- trend interpretation
- what each ablation proves
- what kinds of difficult samples improve
- what the results imply about the design

Avoid copying original tables, exact paper-specific framing, or highly searchable benchmark narration unless the user asks for faithful citation.

## Writing Style

Write like a teacher explaining a serious project to a beginner.

Prefer:

- clear topic sentences
- explicit transitions
- why -> how -> effect logic
- concrete examples
- restrained but helpful analogies

Do not write like an abstract, literature review, or code walkthrough.

## Interview Package

Always end with reusable project expression blocks:

- one-sentence project definition
- 30-second version
- 1-minute version
- 3-minute version
- 3-5 highlight statements
- likely follow-up questions and answer ideas

These must stay consistent with the main note.

## Final Check

Before finishing, verify that the document:

- reads like a project teaching note instead of a paper review
- hides direct paper-identifying clues by default
- teaches enough background for a beginner
- clearly unpacks 4-6 core modules
- avoids code-heavy explanation
- is rich in substance without obvious repetition
- is thick enough that it cannot be mistaken for a short summary
