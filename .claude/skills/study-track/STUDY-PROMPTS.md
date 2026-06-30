# Study Track Prompts

아래 프롬프트들은 `/app/MG/opensource-skill` 저장소에서 `.claude/skills/study-track` 스킬을 사용해 과목별 학습 워크스페이스를 생성하거나 재개할 때 사용한다.

## 네트워크

```text
`.claude/skills/study-track` 스킬을 사용해서 네트워크 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 네트워크 10년차 이상 개발자 Interview
폴더 slug: `computer-networking`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 CS 암기나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 장애 분석, 성능 진단, 보안 판단, 아키텍처 의사결정 중심으로 진행해줘.
- OSI/TCP-IP 계층, DNS, TCP/UDP, HTTP/HTTPS, TLS, 로드밸런싱, 프록시, NAT, 방화벽, VPC, CDN, 네트워크 성능 최적화, 장애 RCA를 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 네트워크 장애 분석 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-cs-interview-computer-networking` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 운영체제

```text
`.claude/skills/study-track` 스킬을 사용해서 운영체제 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 운영체제 10년차 이상 개발자 Interview
폴더 slug: `operating-systems`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 CS 암기나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 성능 진단, 동시성 판단, 메모리/I/O 병목 분석 중심으로 진행해줘.
- 프로세스, 스레드, context switch, 스케줄링, race condition, deadlock, lock contention, virtual memory, page fault, 파일 I/O, 비동기 I/O, 컨테이너 격리를 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — OS 관점 성능 진단 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-cs-interview-operating-systems` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 데이터베이스

```text
`.claude/skills/study-track` 스킬을 사용해서 데이터베이스 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 데이터베이스 10년차 이상 개발자 Interview
폴더 slug: `database-systems`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 SQL 문법 암기나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 스키마 설계, 트랜잭션, 쿼리 튜닝, 장애 대응, 운영 판단 중심으로 진행해줘.
- 모델링, 정규화/역정규화, 인덱스, EXPLAIN, 트랜잭션 격리 수준, MVCC, lock/deadlock, 복제, 샤딩, 파티셔닝, RDB vs NoSQL을 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — DB 성능 진단 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-cs-interview-database-systems` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 컴퓨터 구조

```text
`.claude/skills/study-track` 스킬을 사용해서 컴퓨터 구조 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 컴퓨터 구조 10년차 이상 개발자 Interview
폴더 slug: `computer-architecture`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 회로/교과서 암기나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 성능 병목 분석, 메모리 계층 이해, 하드웨어 기반 설계 판단 중심으로 진행해줘.
- CPU 실행 모델, 레지스터, 메모리 계층, cache locality, cache line, branch prediction, pipeline, multicore, false sharing, SIMD, profiling을 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 코드 성능과 하드웨어 사고 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-cs-interview-computer-architecture` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 파일구조

```text
`.claude/skills/study-track` 스킬을 사용해서 파일구조 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 파일구조 10년차 이상 개발자 Interview
폴더 slug: `file-structures`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 CS 암기나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 저장장치 비용 모델, 인덱스 구조 선택, 대용량 데이터 처리 판단 중심으로 진행해줘.
- block I/O, sequential/random access, 파일 조직, dense/sparse index, B-Tree, B+Tree, hash file, clustered/secondary index, external sort, inode/FAT, append-only 구조를 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 저장장치와 접근 패턴 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-cs-interview-file-structures` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 자료구조

```text
`.claude/skills/study-track` 스킬을 사용해서 자료구조 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 자료구조 10년차 이상 개발자 Interview
폴더 slug: `data-structures`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 구현 암기나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 자료구조 선택 기준, 실무 성능, 메모리 사용량, 운영 trade-off 중심으로 진행해줘.
- 배열, 연결 리스트, 스택, 큐, 해시 테이블, 트리, 균형 트리, 힙, 트라이, 그래프, 자료구조 조합 설계를 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 자료구조 선택 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-cs-interview-data-structures` 브랜치에 push해줘. `main`에는 직접 push하지 마.
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

## Python 백엔드 실무

```text
`.claude/skills/study-track` 스킬을 사용해서 Backend 구성을 위한 Python 실무자 기준 학습 워크스페이스를 생성하거나 재개해줘.

과목: Backend 구성을 위한 Python 실무자 기준 학습
폴더 slug: `python-backend-engineering`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- Python 기본 Syntax 학습부터 시작하지 말고, Python으로 백엔드를 구성하는 실무자 기준으로 진행해줘.
- 설계 개념을 포함해서 API 설계, 서비스 경계, 데이터 저장소, 트랜잭션, 인증, 백그라운드 작업, 관측성, 배포까지 다뤄줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `PROGRESS.md`를 읽고 완료한 내용은 중복하지 말고 다음 미완료 Day 레슨 하나를 생성해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/python-backend-engineering` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 파이썬 경력자 Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 파이썬 경력자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 파이썬 경력자 Interview
폴더 slug: `python-experienced-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- Python 기본 Syntax 학습부터 시작하지 말고, 경력자 인터뷰에서 평가하는 Python 이해도와 실무 판단력 중심으로 진행해줘.
- Python data model, object model, 실행 모델, 메모리 관리, GIL, 동시성, `asyncio`, iterator/generator, context manager, descriptor, decorator, typing, packaging, testing, debugging, profiling, 성능, 표준 라이브러리, 유지보수성을 다뤄줘.
- 각 레슨에는 면접 질문, 답변 구조, 모범 답변, 내가 이해할 수 있는 상세 설명, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 왜 면접에서 묻는지, 어떤 실무 상황과 연결되는지, 답변까지 어떤 순서로 사고해야 하는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `PROGRESS.md`를 읽고 완료한 내용은 중복하지 말고 다음 미완료 Day 레슨 하나를 생성해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/python-experienced-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 백엔드 시니어 Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 백엔드 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 백엔드 10년차 이상 개발자 Interview
폴더 slug: `senior-backend-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 CS 암기나 주니어 문답이 아니라, 10년차 이상 백엔드 개발자 인터뷰에서 평가하는 실무 판단력 중심으로 진행해줘.
- 시스템 설계, 아키텍처 trade-off, 확장성, 신뢰성, 데이터 모델링, 트랜잭션, 동시성, 분산 시스템, API 설계, 보안, 관측성, 장애 대응, 배포, 기술 리딩, 커뮤니케이션을 다뤄줘.
- 각 레슨에는 면접 질문, 답변 구조, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `PROGRESS.md`를 읽고 완료한 내용은 중복하지 말고 다음 미완료 Day 레슨 하나를 생성해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-backend-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```
