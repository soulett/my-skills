# 我的 Skills

这个仓库用于存放自定义的 Codex skills，主要面向项目讲解、面试准备、技术文档整理、规划设计和前端产出等场景。

## 当前包含的 Skill

### `paper-to-project-tech-note`

这个 skill 用来把论文 PDF 或研究型技术文档，改写成面向初学者的长篇项目技术讲义。

主要特点：

- 默认去论文痕迹化输出
- 强制补充前置知识，适合零基础或弱基础读者
- 会深拆 4-6 个核心技术模块
- 对“深度版”请求，扩厚输出是硬约束
- 自带适合面试、汇报和教学讲解的表达内容

仓库路径：

- `paper-to-project-tech-note/`

核心文件：

- `paper-to-project-tech-note/SKILL.md`
- `paper-to-project-tech-note/references/de-paperization.md`
- `paper-to-project-tech-note/references/longform-structure.md`
- `paper-to-project-tech-note/agents/openai.yaml`

### `skills/project-doc-to-qa`

这个 skill 用来把项目文档、项目简介、技术说明或 README，整理成保研复试风格的项目问答文档。

主要特点：

- 同目录生成两份产物
- 默认输出 `40` 题完整版和 `20` 题高频版
- 更偏算法、技术理解、实验设计与科研素养
- 默认避开 `论文 / 复现` 这类表述
- 适合中文项目材料和面试准备场景

仓库路径：

- `skills/project-doc-to-qa/`

核心文件：

- `skills/project-doc-to-qa/SKILL.md`
- `skills/project-doc-to-qa/references/qa-rubric.md`
- `skills/project-doc-to-qa/scripts/resolve_output_names.py`
- `skills/project-doc-to-qa/agents/openai.yaml`

### `skills/project-doc-to-terms`

这个 skill 用来从项目文档中提取核心技术术语，并生成一份项目语境下的专业名词详解文档。

主要特点：

- 默认筛选 `18-30` 个项目核心术语
- 每个术语都按“是什么、在项目里做什么、为什么重要”来解释
- 偏项目讲解口径，不写成百科式定义
- 默认避开 `论文 / 复现` 这类表述
- 适合直接转 PDF 或用于面试前背诵

仓库路径：

- `skills/project-doc-to-terms/`

核心文件：

- `skills/project-doc-to-terms/SKILL.md`
- `skills/project-doc-to-terms/references/terms-rubric.md`
- `skills/project-doc-to-terms/scripts/resolve_terms_output_name.py`
- `skills/project-doc-to-terms/agents/openai.yaml`

### `skills/skill-repo-sync`

这个 skill 用来把本地 skill 仓库按一套更稳的 GitHub 推送 SOP 同步出去，重点解决远端领先、HTTPS 凭据失败、代理失效、rebase 冲突和 README 冲突等常见问题。

主要特点：

- 推送前默认先检查仓库状态
- 默认优先 `fetch + rebase`，避免直接 push 被拒
- 默认优先使用 SSH，而不是依赖交互式 HTTPS 凭据
- 明确约束不默认 `force push`
- 适合 skill 仓库这类文档和目录更新较多的场景

仓库路径：

- `skills/skill-repo-sync/`

核心文件：

- `skills/skill-repo-sync/SKILL.md`
- `skills/skill-repo-sync/agents/openai.yaml`

## 其他已有 Skill

- `skills/analyst`
- `skills/brainstorming`
- `skills/frontend-design`
- `skills/skill-repo-sync`
- `skills/prd`
- `skills/writing-plans`

## 仓库结构

```text
skills/
  <skill-name>/
    SKILL.md
    agents/openai.yaml
    references/
    scripts/
```

## 使用方式

1. 把需要的 skill 文件夹复制到本机 Codex skills 目录，通常是 `~/.codex/skills/`。
2. 如有需要，重启 Codex 让新 skill 被重新发现。
3. 直接用任务语义触发，例如：
   - `根据项目文档生成 40 个完整版和 20 个高频版问答`
   - `帮我整理这份项目文档里的专业名词详解`

## 说明

- 这些 skills 主要用于 Codex 风格的本地或连接式 skill 加载与调用场景。
- 两个项目文档类 skill 在用户提供 PDF 且同目录存在对应 `.md` 导出时，会优先读取 `.md` 以保证文本提取稳定。
- 两个项目文档类 skill 默认采用“项目表述”，而不是“论文复现表述”，除非用户明确要求切换口径。
