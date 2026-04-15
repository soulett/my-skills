# De-paperization

Use this reference every time before drafting.

## Goal

Preserve the technical substance while hiding direct paper-identifying clues.

## Never Include By Default

- paper title
- method English full name
- method abbreviation
- arXiv identifier
- venue, year, authors, affiliations
- repository links
- phrases such as: paper, this paper, the authors propose, as shown in Figure 1, Table 2
- highly distinctive English phrases that make the source easy to search
- original module abbreviations that are easy to search

## Replace With Project Language

Prefer project phrasing such as:

- this project solves
- the system introduces this module because
- in the overall pipeline, this step is responsible for
- the comparison results suggest
- from the system design perspective

Do not use paper-review phrasing.

## Module Naming Rule

Rename modules with functional names instead of source-specific abbreviations.

Examples:

- clustering prototype guided alignment module
- global semantics guided local aggregation module
- neighborhood semantic interaction module
- dynamic memory enhancement module
- full-granularity semantic fusion module

## Results Section Rule

Write result sections as evidence for the design, not as a benchmark dump.

Prefer:

- overall trend statements
- what difficult samples improve
- what each ablation proves
- what the results imply about the design logic

Avoid exact source-specific framing when not required.

## Final De-paperization Check

Before finishing, check that a student cannot easily search the source from:

- title words
- method names
- abbreviations
- author-like phrasing
- original figure/table references
