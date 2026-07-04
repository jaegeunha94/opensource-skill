---
name: branch-integrator
description: Use this skill whenever the user wants to merge multiple learning/work branches into main, integrate scheduled study branches, clean up merged branches, delete remote branches after merge, or repair branch drift after parallel runs. Trigger for Korean or English requests such as "브랜치들을 main에 머지해줘", "5개 브랜치 통합", "study 브랜치 정리", "main 기준으로 머지하고 브랜치 삭제", "merge study branches into main", or "delete merged branches".
disable-model-invocation: true
argument-hint: "Which branches should be merged into main?"
---

The user wants a repeatable Git integration workflow: take one or more topic branches, apply them onto `main` without merge commits, push `main`, then delete branches that were successfully integrated.

This skill is intentionally conservative. Losing work is worse than leaving an extra branch behind.

## Core workflow

Use this order:

1. Inspect the repository state.
2. Confirm the candidate branches.
3. Update local `main` from `origin/main`.
4. Integrate branches one at a time without merge commits.
5. Verify the result.
6. Push `main`.
7. Verify GitHub Pages deployment and the newly added lesson URLs.
8. Delete only branches that were integrated, pushed, and published successfully.
9. Report what happened.

Do not skip verification. Do not report GitHub Pages URLs until they return HTTP 200. Do not delete a branch before its changes are confirmed on `origin/main`.

## Preflight checks

Before merging:

1. Run:

   ```bash
   git status -sb
   git branch --show-current
   git branch -r
   git log --oneline --decorate --graph --all -n 30
   ```

2. If the working tree is dirty, stop and ask whether to commit, stash, or leave the changes alone. Do not overwrite local work.
3. If not on `main`, switch to `main` only after confirming there are no local changes that would be affected.
4. Fetch and prune remote refs:

   ```bash
   git fetch --prune origin
   ```

5. Update local `main`:

   ```bash
   git switch main
   git merge --ff-only origin/main
   ```

If `main` cannot fast-forward to `origin/main`, stop and explain the divergence.

## Branch selection

If the user names branches, use only those branches.

If the user gives a count, such as "5개의 브랜치", list candidate branches and ask for confirmation unless the intended set is obvious from branch names and recent context.

Default candidate patterns for scheduled study work:

```text
origin/study/*
origin/claude/*
```

Treat both patterns the same way: inspect them against `main`, merge only branches with commits ahead of `main`, and skip branches whose commits are already contained in `main`.

`origin/claude/*` branches commonly appear when an automated Claude run creates a branch such as `claude/cool-hypatia-ma60hf` or `claude/peaceful-cerf-djbpq3`. These should still be merged sequentially, never in parallel.

For each candidate branch, inspect:

```bash
git log --oneline main..origin/{branch}
git diff --stat main...origin/{branch}
```

Skip a branch if it has no commits ahead of `main`.

## Integration strategy

Integrate branches sequentially, not in parallel. Keep `main` linear: do not create merge commits for scheduled study branches.

For each branch:

1. Start from clean `main`.
2. List commits from oldest to newest:

   ```bash
   git rev-list --reverse main..origin/{branch}
   ```

3. Cherry-pick each commit in that order:

   ```bash
   git cherry-pick {commit}
   ```

4. If every cherry-pick succeeds, record the branch as integrated.
5. If a cherry-pick conflicts:
   - stop immediately
   - run `git status --short`
   - list conflicted files
   - do not delete any branch
   - do not continue to the next branch
   - ask the user how to resolve, unless the resolution is clearly mechanical and safe

Do not use `git reset --hard` to escape a conflict unless the user explicitly asks for it.

Why cherry-pick: several scheduled branches can be created from the same `main`. Cherry-picking applies each branch's actual commits onto current `main` while avoiding noisy merge commits. The branch name is still available in the final report and remote branch deletion audit.

## Verification

After all selected branches merge:

1. Check status:

   ```bash
   git status -sb
   ```

2. Search for conflict markers in changed text files:

   ```bash
   rg -n '^(<<<<<<<|=======|>>>>>>>)' .
   ```

3. Review recent history and confirm there are no new merge commits from this integration:

   ```bash
   git log --oneline --decorate --graph -n 20
   git log --merges --oneline origin/main..main
   ```

4. If the repository has tests or validation commands relevant to the changed files, run them.

If verification fails, do not push or delete branches.

## New lesson URL collection

After successful integration and before the final report, collect newly added lesson files from the integrated commits. These are the user's backlog study items.

Use the range from the previous `origin/main` tip to current `main`:

```bash
git diff --name-status origin/main..main
```

Include files that satisfy all of these:

- status is added (`A`)
- path matches `{subject-slug}/lessons/*`
- filename is not `index.html`
- extension is `.html`

For each matching path, output the GitHub Pages URL:

```text
https://jaegeunha94.github.io/opensource-skill/{subject-slug}/lessons/{filename}
```

Also save the flat URL list for deployment verification:

```bash
git diff --name-status origin/main..main \
  | awk '$1 == "A" && $2 ~ /^[^\/]+\/lessons\/.+\.html$/ && $2 !~ /\/lessons\/index\.html$/ { printf "https://jaegeunha94.github.io/opensource-skill/%s\n", $2 }' \
  > /tmp/new-lesson-urls.txt
```

Group URLs by subject folder. Keep these URLs for the final report, but do not present them as usable until the GitHub Pages verification below succeeds.

## Push main

Push only after successful merge verification:

```bash
git push origin main
```

If push is rejected because `origin/main` moved:

1. Fetch again.
2. Fast-forward from `origin/main` if possible. If not possible, stop and explain the divergence.
3. Re-run verification.
4. Push again.

Do not force push `main`.

## Verify GitHub Pages deployment

After `git push origin main`, verify that GitHub Pages has published the pushed commit before reporting lesson URLs or deleting branches.

1. Record the pushed commit:

   ```bash
   final_sha=$(git rev-parse HEAD)
   ```

2. Check the Pages build/deploy run for that commit. Prefer `gh` if available; otherwise use the public GitHub API:

   ```bash
   gh run list --branch main --workflow "pages build and deployment" --limit 5
   curl -s "https://api.github.com/repos/jaegeunha94/opensource-skill/actions/runs?branch=main&per_page=5"
   ```

   Confirm the newest Pages run whose `head_sha` matches `final_sha` has:

   ```text
   status: completed
   conclusion: success
   ```

3. Confirm the deployed site is serving the pushed revision. The root page should include the pushed SHA in the generated asset URL:

   ```bash
   curl -s https://jaegeunha94.github.io/opensource-skill/ | rg "$final_sha"
   ```

4. Check every newly added lesson URL collected earlier:

   ```bash
   while IFS= read -r url; do
     code=$(curl -s -o /dev/null -w '%{http_code}' "$url")
     printf '%s %s\n' "$code" "$url"
   done < /tmp/new-lesson-urls.txt
   ```

   Every URL must return `200`.

If the Pages run fails with a transient deployment error such as `Deployment failed, try again later.`:

1. Create and push an empty rebuild trigger commit:

   ```bash
   git commit --allow-empty -m "chore: trigger GitHub Pages rebuild"
   git push origin main
   ```

2. Set `final_sha` to the new `HEAD`.
3. Repeat the Pages run and URL verification.

If Pages deployment still fails, or any lesson URL is not `200`, stop. Report:

- the failed Pages run URL if available
- the deployment status/conclusion
- any non-200 lesson URLs
- that branches were not deleted because publication was not verified

## Delete merged branches

Delete only branches that satisfy all of these:

- they were selected for this integration
- they were integrated successfully
- `origin/main` now contains their changes
- push to `origin main` succeeded
- GitHub Pages deployment for the pushed commit succeeded
- all newly added lesson URLs returned HTTP 200

For each merged branch:

```bash
git branch -d {branch}        # only if a local branch exists
git push origin --delete {branch}
```

If local branch deletion fails because no local branch exists, ignore it and continue with remote deletion.

If remote deletion fails, report it. Do not retry destructively.

## Reporting format

Respond in the user's language. For Korean requests, use Korean.

Use this concise report:

```text
통합 완료
- 기준 브랜치: main
- 병합한 브랜치: ...
- 건너뛴 브랜치: ...
- 삭제한 브랜치: ...
- origin/main: {final commit}
- GitHub Pages: {run URL or "success"} / URL 확인 {count}개

새로 추가된 학습 URL:
- {subject}: {url}

주의:
- {conflicts, skipped branches, failed deletions, or "없음"}
```

If blocked, lead with the blocker and the exact next decision needed from the user.
