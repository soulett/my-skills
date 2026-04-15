# 我的 Skills

这个仓库用于存放自定义的 Codex skills。

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

## 说明

这些 skills 主要用于 Codex 风格的本地或连接式 skill 加载与调用场景。
