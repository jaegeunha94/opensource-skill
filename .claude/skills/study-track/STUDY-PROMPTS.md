# Study Track Prompts

아래 프롬프트들은 `/app/MG/opensource-skill` 저장소에서 `.claude/skills/study-track` 스킬을 사용해 과목별 학습 워크스페이스를 생성하거나 재개할 때 사용한다.

## 네트워크

```text
`.claude/skills/study-track` 스킬을 사용해서 네트워크 학습 워크스페이스를 생성하거나 재개해줘.

과목: 네트워크
폴더 slug: `computer-networking`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `PROGRESS.md`를 읽고 완료한 내용은 중복하지 말고 다음 미완료 Day 레슨 하나를 생성해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/computer-networking` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 운영체제

```text
`.claude/skills/study-track` 스킬을 사용해서 운영체제 학습 워크스페이스를 생성하거나 재개해줘.

과목: 운영체제
폴더 slug: `operating-systems`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `PROGRESS.md`를 읽고 완료한 내용은 중복하지 말고 다음 미완료 Day 레슨 하나를 생성해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/operating-systems` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 데이터베이스

```text
`.claude/skills/study-track` 스킬을 사용해서 데이터베이스 학습 워크스페이스를 생성하거나 재개해줘.

과목: 데이터베이스
폴더 slug: `database-systems`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `PROGRESS.md`를 읽고 완료한 내용은 중복하지 말고 다음 미완료 Day 레슨 하나를 생성해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/database-systems` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 컴퓨터 구조

```text
`.claude/skills/study-track` 스킬을 사용해서 컴퓨터 구조 학습 워크스페이스를 재개해줘.

과목: 컴퓨터 구조
폴더 slug: `computer-architecture`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- `computer-architecture` 폴더는 현재 존재하므로 새로 만들지 마.
- `PROGRESS.md`를 먼저 읽고 완료한 Day/주제는 중복하지 마.
- 현재 완료 상태를 확인한 뒤 다음 미완료 Day 레슨 하나를 생성해줘. 현재 상태라면 Day 2 — 수의 표현부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/computer-architecture` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 파일구조

```text
`.claude/skills/study-track` 스킬을 사용해서 파일구조 학습 워크스페이스를 생성하거나 재개해줘.

과목: 파일구조
폴더 slug: `file-structures`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `PROGRESS.md`를 읽고 완료한 내용은 중복하지 말고 다음 미완료 Day 레슨 하나를 생성해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/file-structures` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 자료구조

```text
`.claude/skills/study-track` 스킬을 사용해서 자료구조 학습 워크스페이스를 생성하거나 재개해줘.

과목: 자료구조
폴더 slug: `data-structures`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `PROGRESS.md`를 읽고 완료한 내용은 중복하지 말고 다음 미완료 Day 레슨 하나를 생성해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/data-structures` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## UI/UX 용어

```text
`.claude/skills/study-track` 스킬을 사용해서 UI/UX 용어 학습 워크스페이스를 생성하거나 재개해줘.

과목: UI/UX 용어
폴더 slug: `ui-ux-terms`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `PROGRESS.md`를 읽고 완료한 내용은 중복하지 말고 다음 미완료 Day 레슨 하나를 생성해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/ui-ux-terms` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```
