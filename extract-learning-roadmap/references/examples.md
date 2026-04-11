# Few-Shot Examples

## Example 1: Project-Like Input

### Input Pattern

- source: project PDF + sibling markdown docs
- user goal: generate a learning roadmap md
- constraints:
  - remove invalid links
  - prefer domestic resources
  - do not expose validation notes
  - do not assign dates

### Expected Output Pattern

- title
- usage notes
- staged roadmap
- stage 1: understand the project and why the system exists
- stage 2: core execution logic
- stage 3: framework or architecture understanding
- stage 4: module collaboration
- stage 5: tools / protocol / integration layer
- stage 6: code-reading path
- stage 7: domain knowledge
- stage 8: advanced optimization or training topics
- final learning order
- post-learning questions

### Output Style Notes

- do not mirror source sections like `Day 1`, `Day 2` if stages are clearer
- remove blocks the user explicitly does not want
- group external links under the relevant stage
- insert video resources under the relevant stage instead of collecting them separately
- prefer Chinese/domestic resources when comparable

### Concrete Compression Of A Real Result

This example is derived from a real project-roadmap task:
- source type: stock investment advisor agent materials
- extracted stages:
  - why agent is needed
  - ReAct
  - LangGraph
  - multi-agent collaboration
  - MCP/tool layer
  - code reading order
  - finance-domain understanding
  - LoRA / alignment / GRPO
- later user edits:
  - remove the `local files to read first` block
  - expand each external supplement section
  - add verified video links

This means the skill should preserve the stage logic while flexibly editing the presentation blocks.

## Example 2: Paper-Like Input

### Input Pattern

- source: method paper PDF
- user goal: extract a study roadmap
- constraints:
  - include prerequisites
  - include reproduction path
  - include verified external resources
  - output md

### Expected Output Pattern

- problem background
- prerequisites
- method decomposition
- training / inference understanding
- experiment reading
- reproduction path
- advanced extension topics

### Output Style Notes

- separate `understand the paper` from `implement the paper`
- do not dump raw paper section titles
- place prerequisite knowledge before method details
- for advanced math-heavy papers, reduce resource count and raise topic precision
