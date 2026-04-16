# Q&A Rubric

Use this reference to keep the generated interview files broad, non-repetitive, and aligned with recommendation-interview expectations.

## Dimension Coverage For The 40-Question File

Aim to cover most of these dimensions. The counts are targets, not rigid quotas.

- task definition and problem formulation: 4-6
- data, features, preprocessing, and bias risk: 4-5
- algorithm choice and alternative methods: 4-6
- model or pipeline modules, principles, strengths, and weaknesses: 6-8
- training, optimization, and hyperparameter reasoning: 3-4
- evaluation metrics, metric interpretation, and error analysis: 4-5
- overfitting, generalization, and data leakage risk: 3-4
- comparison experiments, ablation, and reproducibility: 4-5
- project limitations, improvement direction, and personal contribution: 3-4

Do not force coverage if the source document is too thin. In that case, stay close to generic but high-value questions that are still anchored in the project.

## High-Frequency Selection For The 20-Question File

Select from the same candidate pool used for the 40-question file. Keep answer style and approximate length consistent.

Prioritize questions that are:

- commonly asked in postgraduate interviews
- easy to extend into a two-minute oral answer
- strong indicators of research literacy
- broadly applicable even when project details are sparse
- clearly distinct from one another

Strong high-frequency categories include:

- why the task is defined this way
- why this method was chosen over alternatives
- what the core pipeline is and where the key difficulty lies
- how data was processed and what bias risks exist
- why a metric was selected
- how to interpret the result rather than only report it
- what causes common errors or failure cases
- how to reduce overfitting and avoid data leakage
- what comparison or ablation experiments were done
- what the main limitation is and how to improve it
- what the student's concrete contribution was

Avoid high-frequency questions centered on:

- whether the project reproduced a paper
- what the paper contribution was
- how faithful the reproduction was
- explicit paper-comparison phrasing unless the user requests it

## Duplicate Control

Treat questions as duplicates if they test the same underlying point with only superficial wording changes.

Avoid these failure modes:

- asking both "why choose this algorithm" and "why not use another algorithm" unless the second focuses on a materially different comparison
- asking multiple questions that all only test the evaluation metric choice
- repeating module-description questions without changing the reasoning target
- repeating improvement questions that differ only in phrasing

Before finalizing, scan the set and ensure each question has a distinct interview purpose.

## Answer Style

Each answer should:

- be around 200 Chinese characters
- sound like an excellent but grounded recommendation-interview student
- usually contain 1-3 points
- explain motivation, trade-offs, evidence, and limitations where possible
- avoid inflated claims such as "greatly improved" unless the source provides evidence
- avoid fabricated numbers, datasets, baselines, or modules
- avoid using `论文`, `paper`, `复现` and similar wording by default; present the work as a project, method, or system

When the source lacks specifics:

- answer with cautious, project-consistent reasoning
- prefer "在这个项目里，我主要是基于..." over fake exact details
- acknowledge limits without sounding evasive

## Output Format

The generated markdown files must contain only repeated Q&A blocks:

```md
问题：...
答案：...
```

Do not include:

- titles
- numbered lists
- section headers
- explanations to the reader
- generation notes
