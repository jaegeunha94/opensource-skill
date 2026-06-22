---
name: study-track
description: Use this skill when the user wants to create or continue a subject-specific IT learning workspace, avoid repeating completed topics, record completed lessons, or periodically commit and push learning progress. Trigger for Korean or English requests such as "IT 과목 학습 폴더 만들어줘", "컴퓨터 구조 이어서 학습", "완료한 부분 중복 없이 다음 학습", "학습 진행상황 저장", "git push로 업데이트", "continue my OS study", or any request to track a course-like learning path over multiple sessions.
disable-model-invocation: true
argument-hint: "Which IT subject should be created or continued?"
---

The user wants a durable learning workspace for one IT subject. Your job is to create or resume the subject folder, determine what has already been completed, and advance the course without duplicating finished material.

This skill coordinates learning state. When actual lesson authoring is needed, follow the existing `teach` workspace conventions for lesson, reference, resource, and learning-record files, but do not edit the `teach` skill itself.

## Core rule

Use `PROGRESS.md` as the single source of truth for completion.

Before creating a new lesson, always read:

1. `PROGRESS.md`
2. `MISSION.md`
3. `RESOURCES.md`
4. `learning-records/` if it exists
5. `lessons/`, `reference/`, and `assets/` if they exist

Never create a lesson for a Day or topic already listed in the completed section of `PROGRESS.md`. If files and `PROGRESS.md` disagree, stop and reconcile the mismatch before adding new learning material.

## Folder layout

Create one folder per subject at the repository root, using dash-case English slugs:

```text
{subject-slug}/
├── MISSION.md
├── PROGRESS.md
├── RESOURCES.md
├── NOTES.md                  # optional
├── assets/
├── learning-records/
├── lessons/
└── reference/
```

Examples:

- `computer-architecture`
- `operating-systems`
- `database-systems`
- `networking`
- `data-structures`

If the user gives a Korean subject name, map it to a stable English slug. Prefer common CS course names:

- `컴퓨터 구조` -> `computer-architecture`
- `운영체제` -> `operating-systems`
- `데이터베이스` -> `database-systems`
- `네트워크` -> `computer-networking`
- `자료구조` -> `data-structures`
- `알고리즘` -> `algorithms`

If the slug is ambiguous, ask one short clarifying question before creating the folder.

## New subject workflow

When the subject folder does not exist:

1. Create the subject folder and standard subdirectories.
2. Create `MISSION.md` with a concrete learning mission. If the user's goal is vague, ask why they want to learn the subject before writing it.
3. Create `RESOURCES.md` with high-trust sources. Prefer textbooks, university courses, official documentation, and respected community sources.
4. Create `PROGRESS.md` with:
   - a completed section, initially empty
   - a planned learning path table
   - a current learning position
   - a key concepts checklist
5. Create the first lesson only if the user asked to start learning immediately. Otherwise, stop after scaffolding the workspace.

Use this `PROGRESS.md` structure:

```md
# {Subject} 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 1 | {topic} | {concepts} |

## 현재 학습 위치

**시작 전** — Day 1부터 시작.

## 습득한 핵심 개념

- [ ] {concept} (예정 Day 1)
```

## Existing subject workflow

When the subject folder already exists:

1. Read `PROGRESS.md` and identify the highest completed Day.
2. Read the planned learning path and find the next uncompleted Day.
3. Check `lessons/` and `learning-records/` numbering to choose the next sequential file number.
4. Create exactly one next lesson unless the user explicitly asks for more.
5. Reuse existing `assets/` before creating new assets.
6. Update `PROGRESS.md` immediately after completing the lesson.
7. Add or update learning records only for demonstrated understanding, corrected misconceptions, prior knowledge, or mission changes.

If the user asks for a specific topic:

- If it is already completed, say so and point to the existing lesson file.
- If it is planned but not completed, teach that topic and update its Day.
- If it is outside the plan, ask whether to insert it into the current path or create a separate subject workspace.

## Duplicate prevention checklist

Run this checklist before writing any new lesson:

- Is the requested subject slug already present?
- Is the requested Day already listed under `완료한 내용`?
- Is the requested topic already covered by a lesson title or learning record?
- Would this topic repeat a completed concept rather than deepen it?
- Is the next lesson number one greater than the highest existing lesson number?
- Will `PROGRESS.md` be updated in the same change as the lesson?

If any answer indicates duplication, do not create a duplicate lesson. Resume from the next unfinished topic or ask the user to confirm that they want a review lesson.

## Completion updates

After creating a lesson, update `PROGRESS.md` in the same turn:

1. Add a row to `## 완료한 내용`:

   ```md
   | {day} | {YYYY-MM-DD} | {topic} | [{filename}](lessons/{filename}) |
   ```

2. Remove or mark that Day from `## 다음 예정 학습` if the local format expects only future items.
3. Update `## 현재 학습 위치` with the latest completed Day and the next topic.
4. Mark newly acquired concepts in `## 습득한 핵심 개념`.

Use the current local date from the execution environment. If the user mentions "today", "tomorrow", or "yesterday", resolve it to an absolute date before writing.

## Git update workflow

The user may periodically push the workspace so completed parts stay backed up.

When asked to save, commit, or push progress:

1. Run `git status --short`.
2. Review relevant diffs for the subject folder and new skill files.
3. Summarize what changed.
4. Ask for confirmation before committing or pushing unless the user explicitly requested the full operation.
5. Use a subject-specific commit message, for example:

   ```text
   feat: add operating systems learning workspace
   ```

   or

   ```text
   docs: update computer architecture day 2 progress
   ```

6. For parallel scheduled runs, do not push directly to `main`. Push to a subject branch named `study/{subject-slug}` unless the user explicitly specifies another remote or branch. Examples:

   ```text
   study/computer-networking
   study/operating-systems
   study/database-systems
   ```

   Create the branch from the latest `origin/main` when possible, commit the subject changes there, and push with:

   ```text
   git push origin study/{subject-slug}
   ```

Do not run destructive git commands. Do not rewrite unrelated history. If unrelated files are dirty, leave them alone and mention them separately.

## Response style

Respond in the user's language. For Korean requests, use Korean.

For workspace creation or continuation, keep the final response concise:

- subject folder path
- whether this was new or resumed
- completed Day/topic added, if any
- next planned topic
- git status or push result, if requested

Avoid long explanations unless the user asks for them.
