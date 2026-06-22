# opensource-skill 운영 메모

## 학습 브랜치 통합 요청

여러 과목 학습 브랜치를 `main`에 반영할 때는 `.claude/skills/branch-integrator` 스킬을 사용한다.

기본 요청:

```text
`.claude/skills/branch-integrator` 스킬을 사용해서 현재 `origin/main` 기준으로 `origin/study/*`와 `origin/claude/*` 브랜치를 순차 통합해줘.

요구사항:
- merge commit을 만들지 말고 cherry-pick 방식으로 main에 선형 반영해줘.
- 각 브랜치는 main보다 앞선 커밋이 있는 경우에만 통합해줘.
- 충돌이 나면 즉시 멈추고 conflicted 파일과 현재 상태를 알려줘.
- 새로 추가된 각 과목의 `lessons/` 아래 `.html` 레슨 URL을 GitHub Pages 경로로 한 번에 출력해줘.
- 검증 후 `git push origin main` 해줘.
- main에 성공적으로 반영된 원격 브랜치만 삭제해줘.
```

특정 브랜치만 통합할 때:

```text
`.claude/skills/branch-integrator` 스킬을 사용해서 아래 브랜치만 `main`에 순차 통합해줘.

- `origin/claude/cool-hypatia-ma60hf`
- `origin/claude/peaceful-cerf-djbpq3`

merge commit 없이 cherry-pick으로 반영하고, push 성공 후 반영된 브랜치만 삭제해줘.
새로 추가된 `lessons/` 아래 레슨 URL도 GitHub Pages 경로로 모아서 출력해줘.
```

## 충돌 해결 요청

통합 중 충돌이 발생하면 자동으로 다음 브랜치로 넘어가지 않는다. 그때는 아래처럼 요청한다.

```text
현재 cherry-pick 충돌 상태를 확인하고 해결해줘.

요구사항:
- `git status --short`로 충돌 파일을 먼저 보여줘.
- 충돌 마커가 있는 파일을 확인하고, 어느 쪽 내용을 살릴지 판단 근거를 설명해줘.
- 해결 후 `git add`와 `git cherry-pick --continue`를 진행해줘.
- 충돌 마커가 남아 있지 않은지 `rg -n '^(<<<<<<<|=======|>>>>>>>)' .`로 확인해줘.
- 이후 남은 브랜치 통합을 계속 진행해줘.
```

충돌 해결을 취소하고 통합을 멈추고 싶을 때:

```text
현재 cherry-pick 충돌을 중단하고 통합 작업을 멈춰줘.

요구사항:
- `git cherry-pick --abort`로 현재 cherry-pick만 취소해줘.
- 작업트리 상태를 확인해줘.
- 어떤 브랜치까지 통합됐고 어떤 브랜치가 남았는지 요약해줘.
- 원격 브랜치는 삭제하지 마.
```

## 원칙

- 병렬 학습 작업은 `main`에 직접 push하지 않는다.
- 과목별 작업은 `study/{subject-slug}` 또는 `claude/*` 브랜치에 push한다.
- `main` 반영은 `branch-integrator`로 한 번에 순차 처리한다.
- 통합은 merge commit 없이 cherry-pick으로 선형 히스토리를 유지한다.
- 통합 후 새로 추가된 `lessons/` 아래 레슨 URL을 한 번에 출력한다.
- `main` push가 성공한 뒤에만 반영 완료 브랜치를 삭제한다.
