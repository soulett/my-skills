---
name: project-doc-to-qa
description: "Generate postgraduate interview Q&A documents from a project brief, project README, outline, notes, or other project documentation. Use when Codex needs to turn project materials into two markdown interview prep files in the same directory: a 40-question full version and a 20-question high-frequency version, both focused on algorithms, technical decisions, experiments, and research literacy rather than hardware or frontier-topic questions."
---

# Project Doc To Qa

## Overview

Read the user's project document or pasted project summary, extract the project name and core technical content, then generate two interview Q&A markdown files in the source directory.

Keep the tone aligned with postgraduate recommendation interview expectations: questions should examine problem formulation, method choice, experiment design, evaluation, limitations, and engineering judgment.

## Workflow

1. Locate the source material.
2. Extract a project name.
3. Build a structured understanding of the project.
4. Generate a tagged candidate question pool.
5. Produce two output files with the required format.

## Step 1: Locate The Source Material

Prefer the document path or content explicitly provided by the user.

If the user names a file such as `简介大纲.md`, `README.md`, `项目简介.md`, or another project note, read that file first. If the user pastes project content directly, work from the pasted content without requiring a file.

Treat the following as strong signals that this skill should be used:

- "根据项目文档生成问答文档"
- "根据项目简介生成保研复试问答"
- "输出 40 个完整版和 20 个高频版"
- "把项目文档整理成问题和答案"
- "生成项目名称_问答文档.md"

## Step 2: Extract The Project Name

Use this priority order:

1. First Markdown or plain-text title in the document.
2. An explicit field such as `项目名称`, `Project`, or `题目`.
3. The source filename stem.
4. Fallback to `项目`.

When deriving filenames, use `scripts/resolve_output_names.py` if you have a source file path. The script returns the inferred project title plus the two output file paths.

## Step 3: Build A Structured Understanding

Extract or infer, conservatively, the following:

- background and task goal
- inputs, outputs, and data source
- preprocessing or feature handling
- core algorithm or model pipeline
- major modules and their roles
- training or optimization strategy
- evaluation metrics and experimental results
- personal contribution
- encountered problems, fixes, limitations, and possible improvements

Do not invent unsupported claims. If a detail is absent, keep the answers high-confidence and general rather than fabricating metrics or module names.

## Step 4: Generate The Candidate Pool

Before writing the final documents, draft a larger internal pool of candidate Q&A pairs and tag each question by dimension. Use the rubric in [references/qa-rubric.md](references/qa-rubric.md).

Enforce these content rules:

- Focus on algorithms, technical choices, experiments, evaluation, and research literacy.
- Do not ask hardware, embedded, chip, or system-device questions.
- Do not drift into frontier-topic trivia or recent hot-topic extensions.
- Do not mention or frame questions around `论文`, `paper`, `复现`, `复现论文`, `论文贡献`, or similar wording unless the user explicitly asks for paper-oriented phrasing.
- Keep questions moderately broad; avoid code-level implementation trivia.
- Avoid repetition in wording and in underlying intent.

## Step 5: Produce Two Output Files

Always generate both files in the same directory as the source document:

- `项目名称_问答文档.md`
- `项目名称_高频问答文档.md`

The 40-question file is the full version. It should aim for broad coverage across the rubric dimensions.

The 20-question file is the high-frequency version. Select from the same candidate pool, keeping the answer style and approximate answer length consistent with the full version.

If files already exist, overwrite them unless the user explicitly asks to preserve the old version.

## Output Contract

Write only plain markdown body content using this exact repeating pattern:

```md
问题：...
答案：...

问题：...
答案：...
```

Do not add headings, numbering, prefaces, summaries, or extra commentary inside the generated Q&A files.

Keep each answer around 200 Chinese characters, written like an excellent recommendation-interview student:

- clear and calm
- usually organized into 1-3 points
- not exaggerated
- technically grounded
- focused on why a method was chosen, what trade-offs existed, what the results mean, and what limitations remain
- phrase the project as the student's project work rather than as a paper reproduction unless the user explicitly requests that framing

## Resource Usage

Read [references/qa-rubric.md](references/qa-rubric.md) when deciding coverage, high-frequency selection, answer style, and duplicate filtering.

Use `scripts/resolve_output_names.py` to derive filenames whenever a source path is available.

## Resources (optional)

### scripts/
`scripts/resolve_output_names.py`

Use this helper to infer the project title and output filenames from a source document path.

### references/
`references/qa-rubric.md`

Read this reference for dimension coverage, duplicate control, and how to select the 20 high-frequency questions from the broader pool.
