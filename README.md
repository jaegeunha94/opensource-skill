# opensource-skill 운영 메모

## 학습 실행 방식

- 자동 routine: [study-track-control.md](study-track-control.md)의 `enabled` 값을 따른다. `__all__=false`이면 전체 중단, `__all__=true`이면 과목별 값에 따라 실행한다.
- 수동 1회: 아래 프롬프트로 지정한 과목 또는 전체 과목의 다음 레슨을 추가한다. `__all__` 또는 과목이 `false`여도 이번 요청만 실행하며, 설정값과 routine 중단 상태는 유지한다.

자동 실행용 과목별 프롬프트는 [STUDY-PROMPTS.md](.claude/skills/study-track/STUDY-PROMPTS.md)에 있다. 수동으로 실행할 때는 아래처럼 수동 1회 실행과 `enabled` 예외를 명시한다.

## 수동 프롬프트로 학습 레슨 추가

아래 프롬프트의 `과목`, `폴더 slug`, `학습 목표`를 원하는 과목에 맞게 바꿔서 사용한다. 기존 과목은 다음 미완료 Day를 이어가고, 새 과목은 학습 폴더와 Day 1을 만든다.

```text
`.claude/skills/study-track` 스킬을 사용해서 아래 과목의 학습 레슨을 추가해줘.

실행 방식: 수동 1회
과목: 네트워크 10년차 이상 개발자 Interview
폴더 slug: `computer-networking`
학습 목표: 장애 분석, 성능 진단, 보안 판단, 아키텍처 의사결정 중심의 시니어 기술 면접 준비

요구사항:
- `.claude/skills/study-track` 경로를 기준으로 위로 올라가며 `.git`을 찾아 대상 저장소 루트를 확정해줘.
- 이번 요청은 수동 1회 실행이므로 `study-track-control.md`의 `__all__` 및 해당 과목의 `enabled` 값과 관계없이 지정한 과목만 진행해줘. 제어 파일의 값은 변경하지 말고 routine을 재개하지 마.
- 기존 과목이면 `PROGRESS.md`, `MISSION.md`, `RESOURCES.md`, 기존 레슨과 학습 기록을 확인해서 이미 완료한 Day나 주제를 중복 생성하지 말고 다음 미완료 Day 레슨 하나를 추가해줘. 예정 학습을 모두 마쳤다면 목표에 맞는 심화 주제로 다음 Day를 확장해줘.
- 새 과목이면 위 학습 목표에 맞춰 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조를 만들고 Day 1 레슨 하나를 생성해줘.
- 기존 `teach` 스킬의 레슨 작성 규칙을 따르고, 어려운 개념은 전제 개념부터 쉬운 한국어로 설명해줘. 인터뷰 과목은 면접 질문, 실무 상황, 답변 사고 순서, 답변 예시, trade-off, 흔한 오해, follow-up과 자기 점검을 포함해줘.
- 레슨은 `lessons/` 아래 독립 실행 가능한 `.html`로 만들고, `lessons/index.html`과 `PROGRESS.md`도 함께 갱신해줘.
- 학습 파일 변경을 검토하고 이번 요청에서 만든 파일만 commit한 뒤 현재 작업 브랜치에 push해줘. 기존의 무관한 변경사항은 포함하지 마.
- 결과에 commit hash, push 대상 브랜치, 추가한 Day와 다음 예정 학습을 과목별로 알려줘. 새 레슨 URL 목록은 한국 시간 기준 실행 날짜를 `**YYYY-MM-DD**` 형식으로 먼저 쓰고, 과목마다 `subject-slug: [전체 URL](전체 URL)` 한 줄로 출력해줘. Pages 배포가 확인되지 않았으면 해당 URL 뒤에 ` (배포 대기 중)`을 표시해줘.
```

## 수동 프롬프트로 전체 과목 실행

전체 과목을 수동으로 한 번 실행하려면 아래 프롬프트를 사용한다. 제어 표의 `__all__`을 제외한 과목과, 표에 없어도 저장소 루트에 `MISSION.md`와 `PROGRESS.md`가 있는 기존 과목 폴더를 포함한다. `enabled=false`인 과목도 대상으로 삼으며, 과목마다 다음 레슨 하나씩 추가한다.

```text
`.claude/skills/study-track` 스킬을 사용해서 전체 과목의 다음 학습 레슨을 추가해줘.

실행 방식: 수동 1회
대상: 전체 과목

요구사항:
- `.claude/skills/study-track` 경로를 기준으로 위로 올라가며 `.git`을 찾아 대상 저장소 루트를 확정해줘.
- 이번 요청은 전체 과목 수동 1회 실행이므로 `study-track-control.md`의 `__all__` 및 모든 과목의 `enabled` 값과 관계없이 진행해줘. 제어 파일의 값은 변경하지 말고 routine을 재개하지 마.
- 제어 표의 과목 slug(`__all__` 제외)와 저장소 루트에서 `MISSION.md`와 `PROGRESS.md`를 모두 가진 기존 과목 폴더를 합쳐 실행 목록을 보여줘. slug 기준으로 중복을 제거하고 `study/{subject-slug}` 같은 하위 복사본은 별도 과목으로 실행하지 마.
- 목록의 과목을 순차 실행하고, 각 과목의 미션, 진행 상황, 자료, 기존 레슨과 학습 기록을 확인해서 다음 미완료 Day 레슨을 하나씩 추가해줘. 완료한 Day나 주제를 중복 생성하거나 Day 1로 초기화하지 마. 예정 학습을 모두 마쳤다면 과목별 목표에 맞는 심화 주제로 다음 Day를 확장해줘.
- 기존 `teach` 스킬의 레슨 작성 규칙과 각 과목의 학습 목표를 따르고, 어려운 개념은 전제 개념부터 쉬운 한국어로 설명해줘. 인터뷰 과목은 면접 질문, 실무 상황, 답변 사고 순서, 답변 예시, trade-off, 흔한 오해, follow-up과 자기 점검을 포함해줘.
- 각 레슨은 해당 과목의 `lessons/` 아래 독립 실행 가능한 `.html`로 만들고, `lessons/index.html`과 `PROGRESS.md`도 함께 갱신해줘.
- 표에 등록된 과목 폴더가 없거나 진행 기록과 파일의 불일치를 해결할 수 없으면 해당 과목은 이유를 기록하고 건너뛴 뒤 나머지를 계속해줘.
- 모든 과목의 결과와 새 파일을 검토하고 이번 요청에서 만든 파일만 하나의 commit으로 저장한 뒤 현재 작업 브랜치에 push해줘. 기존의 무관한 변경사항은 포함하지 마.
- 결과를 과목별로 정리해서 완료/건너뜀 여부, 추가한 Day와 주제, 다음 예정 학습, 변경 파일을 알려줘. commit hash와 push 대상 브랜치도 표시해줘. 새 레슨 URL 목록은 한국 시간 기준 실행 날짜를 `**YYYY-MM-DD**` 형식으로 먼저 쓰고, 과목마다 `subject-slug: [전체 URL](전체 URL)` 한 줄로 출력해줘. Pages 배포가 확인되지 않았으면 해당 URL 뒤에 ` (배포 대기 중)`을 표시해줘.
```

## 생성한 레슨 저장 요청

수동 프롬프트에서 commit/push를 생략했거나 나중에 별도로 저장할 때 사용한다. `{subject-slug}`는 실제 과목 폴더 이름으로 바꾼다.

```text
방금 추가한 `{subject-slug}` 학습 변경사항을 검토하고 이번 과목 파일만 commit한 뒤 현재 작업 브랜치에 push해줘. 다른 작업의 변경사항은 포함하지 말고, commit hash와 push 대상 브랜치를 알려줘. 새 레슨 URL은 한국 시간 기준 실행 날짜를 `**YYYY-MM-DD**` 형식으로 먼저 쓰고 `subject-slug: [전체 URL](전체 URL)` 형식으로 출력해줘. Pages 배포가 확인되지 않았으면 URL 뒤에 ` (배포 대기 중)`을 표시해줘.
```

## 학습 브랜치 통합 요청

여러 과목 학습 브랜치를 `main`에 반영할 때는 `.claude/skills/branch-integrator` 스킬을 사용한다.

기본 요청:

```text
`.claude/skills/branch-integrator` 스킬을 사용해서 현재 `origin/main` 기준으로 `origin/study/*`와 `origin/claude/*` 브랜치를 순차 통합해줘.

요구사항:
- 작업 시작 전 현재 디렉터리나 홈을 대상 저장소로 가정하지 말고, 이 요청에 언급된 `.claude/skills/branch-integrator` 경로를 기준으로 위로 올라가며 `.git`을 찾아 대상 저장소 루트를 확정한 뒤 그 위치에서 preflight를 진행해줘.
- merge commit을 만들지 말고 cherry-pick 방식으로 main에 선형 반영해줘.
- 각 브랜치는 main보다 앞선 커밋이 있는 경우에만 통합해줘.
- 충돌이 나면 즉시 멈추고 conflicted 파일과 현재 상태를 알려줘.
- 새로 추가된 각 과목의 `lessons/` 아래 `.html` 레슨 URL을 GitHub Pages 경로로 한 번에 출력해줘.
- 검증 후 `git push origin main` 해줘.
- main에 성공적으로 반영된 원격 브랜치만 삭제해줘.
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
