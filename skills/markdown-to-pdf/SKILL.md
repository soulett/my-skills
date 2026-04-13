---
name: markdown-to-pdf
description: Use when the user wants to convert one or more Markdown files into PDF, especially on Windows machines where Node.js is available but Pandoc or LaTeX are not installed.
---

# Markdown To PDF

## Overview

Use this skill to turn Markdown documents into polished PDFs with a project-local workflow that is easy to rerun. Prefer this skill when the task is "convert `.md` to `.pdf`", "batch export notes to PDF", or "set up a reusable Markdown-to-PDF command".

This skill defaults to `md-to-pdf` plus a locally installed Edge or Chrome browser. That combination works well for notes, study guides, interview docs, and Markdown files that benefit from CSS styling.

## When To Choose This Approach

- Prefer `md-to-pdf` when `node` and `npm` are available.
- Prefer a local browser executable over Puppeteer's bundled Chromium when downloads fail or are unnecessary.
- Prefer project-local installation under `tools/markdown-to-pdf/` so the setup stays with the workspace.
- Write generated files under `output/pdf/` unless the user requests another destination.

## Workflow

1. Detect the environment.
   - Check for `node`, `npm`, and a local browser executable.
   - Browser candidates on Windows:
     - `C:\Program Files\Google\Chrome\Application\chrome.exe`
     - `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`
     - `C:\Program Files\Microsoft\Edge\Application\msedge.exe`
     - `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`

2. Install the converter in the current workspace.
   - Create `tools/markdown-to-pdf/`.
   - Run `npm init -y` there if `package.json` is missing.
   - Install with `PUPPETEER_SKIP_DOWNLOAD=1` to avoid bundled-browser download issues:

```powershell
$env:PUPPETEER_SKIP_DOWNLOAD='1'
npm install md-to-pdf
```

3. Add reusable project commands when the user wants a repeatable setup.
   - Use the bundled script as a template: `scripts/convert-md-to-pdf.js`
   - Reuse the bundled stylesheet: `assets/markdown-pdf.css`
   - In Windows workspaces, a PowerShell wrapper is usually the easiest day-to-day entry point.

4. Convert files.
   - Single file:

```powershell
node .\scripts\md-to-pdf.js .\notes.md .\output\pdf\notes.pdf
```

   - Batch conversion:
     - Enumerate `.md` files in PowerShell and call the Node script once per file.
     - Preserve relative paths when the workspace contains nested folders.

5. Verify output.
   - Confirm the target PDF exists and file size is greater than zero.
   - If `pdftoppm` is available, render PNG previews for visual inspection.
   - If visual rendering tools are unavailable, call out that layout verification is limited.

## Implementation Notes

- `md-to-pdf` writes to the source folder by default; use the programmatic API with `dest` when you need stable output paths.
- Set `launch_options.executablePath` to the detected Edge/Chrome path.
- Use a CSS file for typography, table borders, code blocks, and headings so exported notes look intentional instead of default browser output.
- Keep the workflow ASCII-safe in scripts even if the documents themselves contain Chinese text.

## Fallbacks

- If `node`/`npm` are missing but `pandoc` is installed, switch to Pandoc instead of forcing this workflow.
- If neither browser nor Pandoc is available, explain the missing dependency and stop before pretending the conversion succeeded.
- If the source Markdown is not UTF-8, surface the encoding risk and test a small sample before batch conversion.
