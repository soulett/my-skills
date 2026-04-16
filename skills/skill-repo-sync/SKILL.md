---
name: skill-repo-sync
description: "Safely sync a local skill repository to GitHub using a repeatable SOP. Use when Codex needs to stage, commit, rebase, and push skill changes while avoiding common failures such as dirty worktrees, remote-ahead rejections, broken HTTPS credentials, proxy issues, and README conflicts."
---

# Skill Repo Sync

## Overview

Use this skill to publish or sync skills to GitHub in a safer, repeatable way.

The goal is not just to `git push`, but to reduce the most common failure modes: pushing from a dirty state, using the wrong transport, getting rejected because the remote is ahead, or getting stuck during rebase and conflict resolution.

## Default Strategy

Follow this order unless the user explicitly asks for a different git workflow:

1. Inspect the local repository state.
2. Inspect the remote and current branch.
3. Prefer SSH over HTTPS when an SSH path is available.
4. Fetch remote updates before pushing.
5. Rebase local work onto the remote branch when the remote is ahead.
6. Resolve conflicts carefully, especially in shared files like `README.md`.
7. Stage, commit, and push only after the branch is in a clean pushable state.

Do not use force push unless the user explicitly requests it.

## When To Use

Use this skill when the user says things like:

- "帮我同步这个 skill 到 GitHub"
- "把这个仓库安全推送一下"
- "按 SOP 推一下"
- "发布这个 skill 到 my-skills"
- "帮我上传并同步 GitHub"

This skill is especially appropriate for skill repositories and other small documentation-heavy repos where README conflicts and remote drift are common.

## Workflow

### Step 1: Check Local State

Inspect:

- current branch
- staged and unstaged changes
- untracked files
- whether a rebase or merge is already in progress

If the repo is not clean, understand whether the current task should include those changes before staging anything.

### Step 2: Check Remote Setup

Inspect:

- remote URLs
- whether the repo currently prefers HTTPS or SSH
- whether SSH access is already configured and working

Prefer SSH when possible. If HTTPS is configured but known to be fragile in this environment, use SSH directly for fetch and push instead of waiting for credential prompts to fail.

### Step 3: Stage And Commit Intentionally

Stage only the files relevant to the requested sync.

Before committing, confirm:

- unrelated files are not accidentally included
- generated files are intended to be versioned
- line-ending warnings are understood but not mistaken for content problems

Use a clear, focused commit message. Do not amend existing commits unless the user explicitly asks.

### Step 4: Fetch Before Push

Always fetch the target branch before pushing. Prefer:

- `git fetch <ssh-remote> <branch>`

This catches remote-ahead situations early and avoids wasted push attempts.

### Step 5: Rebase If Needed

If the remote branch is ahead of local, rebase the local commit(s) onto the fetched branch instead of force pushing.

During rebase:

- expect conflicts in shared files such as `README.md`
- merge both sides thoughtfully instead of replacing one side wholesale
- preserve newly added skill descriptions while keeping existing repository context

If `rebase --continue` gets stuck on an editor prompt, use a non-interactive continuation strategy instead of abandoning the rebase.

### Step 6: Push

Push only after:

- rebase or merge is complete
- working tree is clean
- branch points to the expected final commit

Prefer:

- SSH transport
- explicit branch push

Example shape:

```text
git push <ssh-remote> main
```

## Common Failure Handling

### Permission Or Lock Errors

If git cannot write `.git/index.lock` or another repository file, treat it as an environment or permission issue first. Do not assume the repo is corrupted.

### HTTPS Proxy Failures

If HTTPS push fails because git is trying to reach a dead local proxy, do not keep retrying the same command. Switch to SSH if available.

### Credential Prompt Failures

If HTTPS push fails because the environment cannot open an interactive prompt, switch to SSH instead of trying to force a prompt-based workflow.

### Remote-Ahead Rejections

If push is rejected because the remote contains work not present locally, fetch first, inspect the remote commits, then rebase.

### Rebase Editor Blocking

If `git rebase --continue` blocks on an editor in a non-interactive shell, finish the commit non-interactively and then continue the rebase bookkeeping.

## Output Expectations

At the end of the sync, report:

- target repository
- branch pushed
- whether SSH or HTTPS was used
- whether fetch/rebase was required
- whether conflicts occurred
- final commit hash
- whether push succeeded

Keep the summary concise and operational.

## Safety Rules

- Do not force push unless explicitly requested.
- Do not stage unrelated files.
- Do not discard remote README changes just because they conflict.
- Do not assume HTTPS credentials will work in a headless environment.
- Do not leave the repository mid-rebase without telling the user.
