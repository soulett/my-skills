---
name: project-doc-to-terms
description: "Generate a project-specific terminology explanation document from a project brief, technical note, README, outline, or other project documentation. Use when Codex needs to extract core technical terms from a project file and write a markdown glossary in the same directory, with each term explained in a project-oriented, interview-friendly way rather than as a generic encyclopedia definition."
---

# Project Doc To Terms

## Overview

Read the user's project document or pasted project summary, identify the core technical terms worth explaining, and generate a terminology explanation markdown document in the source directory.

Keep the explanations tuned for project interviews and technical presentations: define the term, explain what it does in this project, and say why it matters.

## Workflow

1. Locate the source material.
2. Extract the project name.
3. Identify candidate technical terms.
4. Filter the candidate list down to the most useful project terms.
5. Write a terminology explanation document.

## Step 1: Locate The Source Material

Prefer the document path or content explicitly provided by the user.

Use this skill when the user asks for:

- 专业名词详解
- 专业术语解释
- 名词解释文档
- 术语手册
- 项目里的技术名词整理
- glossary or terminology document for a project

If the user gives a PDF and a same-directory markdown export exists, prefer reading the markdown export for text extraction stability.

## Step 2: Extract The Project Name

Use this priority order:

1. First meaningful title in the document.
2. An explicit `项目名称`, `Project`, or `题目` field.
3. The source filename stem.
4. Fallback to `项目`.

When a source path is available, use `scripts/resolve_terms_output_name.py` to derive the title and output path.

## Step 3: Identify Candidate Terms

Extract only terms that help someone understand the project. Prefer terms that fall into these categories:

- task and problem terms
- core model or algorithm terms
- core module names
- training and optimization terms
- evaluation and analysis terms

Examples include terms like `图文匹配`, `跨模态语义对齐`, `多粒度语义表示`, `原型级对齐`, `图神经网络`, `动态记忆库`, and `Recall@K`.

## Step 4: Filter The Candidate List

Do not turn the document into a giant dictionary. Prefer roughly 18-30 terms unless the user asks otherwise.

Keep terms that are:

- central to understanding the project
- likely to appear in interviews or project presentations
- specific enough to need explanation
- tied to the method, evaluation, or system design

Drop terms that are:

- too generic, such as `模型`, `特征`, `系统`, `模块`
- too marginal to the project
- duplicated under slightly different wording
- mostly useful only in paper-reading rather than project explanation

Use the rubric in [references/terms-rubric.md](references/terms-rubric.md) to keep the list focused.

## Step 5: Write The Output Document

Write one markdown file in the same directory as the source document:

- `项目名称_专业名词详解文档.md`

Use this structure:

```md
# 专业名词详解文档

## 术语名 (English Name if useful)
解释内容
```

Each term explanation should usually do three things in one compact paragraph:

- say what the term means
- explain what role it plays in this project
- explain why it matters

Aim for 120-220 Chinese characters per entry. Keep the style suitable for oral explanation in an interview or project presentation.

## Style Rules

- Default to project-oriented explanations, not encyclopedia-style definitions.
- Prefer "在这个项目里，它主要..." over detached textbook wording.
- Do not write in Q&A form.
- Do not number the terms.
- Do not add formulas unless the formula is truly central and easy to explain.
- Do not mention `论文`, `paper`, `复现`, or similar wording unless the user explicitly asks for paper-oriented phrasing.
- Do not expand into frontier-topic discussion.

## Resource Usage

Read [references/terms-rubric.md](references/terms-rubric.md) when deciding which terms to keep and how detailed each explanation should be.

Use `scripts/resolve_terms_output_name.py` whenever a source path is available.

## Resources (optional)

### scripts/
`scripts/resolve_terms_output_name.py`

Use this helper to infer the project title and terminology document filename from a source path.

### references/
`references/terms-rubric.md`

Read this reference for term selection, duplicate control, and explanation style.
