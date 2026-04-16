# Terminology Rubric

Use this reference to keep the generated terminology document useful, focused, and project-oriented.

## What To Include

Prefer 18-30 terms total unless the user asks for a different size.

Prioritize:

- core task terms
- core method terms
- core module names
- training and optimization terms
- evaluation and experiment terms

Strong examples:

- 图文匹配
- 跨模态语义对齐
- 共享语义空间
- 多粒度语义表示
- 原型级对齐
- 邻域关系建模
- 图神经网络
- 动态记忆库
- 动量编码器
- Recall@K
- 消融实验
- 泛化能力

## What To Exclude

Avoid terms that are:

- too generic, such as `模型`, `特征`, `系统`, `模块`
- repeated under near-synonyms
- only weakly related to the project's actual method
- mostly useful for paper-reading discussion rather than project explanation

Also avoid default wording around:

- `论文`
- `paper`
- `复现`
- `论文贡献`

unless the user explicitly requests that framing.

## How To Write Each Entry

Each entry should usually be one paragraph of 120-220 Chinese characters.

Try to include:

1. what the term means
2. what it does in this project
3. why it matters

Good style:

- clear enough to read aloud in an interview
- slightly more concrete than a textbook definition
- anchored in the project's method or evaluation

Bad style:

- pure encyclopedia definition with no project context
- long theoretical digression
- formula-heavy explanation
- vague description that never says why the term matters

## Output Format

Use this exact outer structure:

```md
# 专业名词详解文档

## 术语名 (English Name if useful)
解释内容
```

Do not:

- number the terms
- write in Q&A form
- add extra summaries after every term
- turn the document into a long tutorial
