---
name: project-doc-to-roadmap
description: "Generate a project-driven learning roadmap from a project brief, technical note, README, outline, or other project documentation. Use when Codex needs to turn a project document into a structured study plan that follows learning dependencies instead of the source TOC, includes domestic Chinese resources plus one essential English link per module, and writes the result as a markdown roadmap in the same directory."
---

# Project Doc To Roadmap

## Overview

Read the user's project document or pasted technical summary, extract the real learning dependencies behind the project, and generate a markdown learning roadmap in the source directory.

This skill is for project-centered learning, not generic topic study. The output should help someone go from foundational knowledge to module-level understanding, and finally to experiment analysis and interview expression.

## Workflow

1. Locate the source material.
2. Extract the project name.
3. Reconstruct the knowledge graph behind the project.
4. Convert that graph into ordered learning modules.
5. Attach domestic learning resources plus one essential English link per module.
6. Write the roadmap markdown file.

## Step 1: Locate The Source Material

Prefer the file path or content explicitly given by the user.

Use this skill when the user asks for:

- 学习路线
- 学习路径
- 学习 roadmap
- 从基础到模块的学习计划
- 项目驱动学习路线
- 针对项目文档整理知识路线

If the user provides a PDF and a same-directory markdown export exists, prefer the markdown export for text extraction stability.

## Step 2: Extract The Project Name

Use this priority order:

1. First meaningful title in the document.
2. An explicit `项目名称`, `Project`, or `题目` field.
3. The source filename stem.
4. Fallback to `项目`.

Use `scripts/resolve_roadmap_output_name.py` whenever a source path is available.

## Step 3: Reconstruct The Knowledge Graph

Do not mirror the source TOC mechanically.

Instead, extract:

- task definition
- prerequisite math / deep learning / domain foundations
- core ideas
- core modules
- training mechanisms
- evaluation and analysis topics
- oral explanation or interview-oriented knowledge blocks

Then rebuild them into a dependency-aware learning order.

## Step 4: Convert Into Learning Modules

Default to 12-20 modules unless the user asks for a different granularity.

For each module, include these blocks in this order:

- 前置依赖
- 面试高频程度
- 为什么学
- 学习重点
- 学到什么程度
- 国内知识帖
- 国内网课 / 视频
- 英文必看链接
- 对应项目内容

Keep the route practical. The goal is not to cover every adjacent topic, but to cover the minimum knowledge needed to really understand the project.

## Step 5: Resource Policy

Read [references/roadmap-rubric.md](references/roadmap-rubric.md) before selecting and assigning resources.

Use these default priorities:

1. local project materials
2. domestic official or mainstream course pages
3. bilibili
4. 中国大学MOOC / 学堂在线
5. 腾讯云开发者
6. CSDN
7. one essential English source per module

The English source should be corrective and high-signal, not overwhelming. Prefer one strong anchor over multiple weak links.

## Step 6: Write The Output File

Write one markdown file in the same directory as the source document:

- `项目名称_学习路线.md`

Use this structure:

```md
# 项目名称学习路线

---

## 模块1：...
### 前置依赖
### 面试高频程度
### 为什么学
### 学习重点
### 学到什么程度
### 国内知识帖
### 国内网课 / 视频
### 英文必看链接
### 对应项目内容

---

## 推荐学习顺序

## 学完后应能回答的问题
```

Do not add sections like `使用说明` or `本地优先资料` unless the user explicitly asks for them.

## Style Rules

- Write for a Chinese learner preparing to understand and explain a project.
- Prefer practical learning language over abstract curriculum language.
- Keep explanations concrete and dependency-aware.
- Use domestic resources as the main body.
- Add exactly one strong English link per module by default.
- Avoid `论文复现` framing unless the user explicitly asks for it.
- Avoid bloated link dumps.

## Resource Usage

Read [references/roadmap-rubric.md](references/roadmap-rubric.md) before drafting.

Use `scripts/resolve_roadmap_output_name.py` when a source path is available.
