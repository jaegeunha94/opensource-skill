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

## HTTP / Web Protocol Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 HTTP / Web Protocol & API Traffic 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: HTTP / Web Protocol & API Traffic
폴더 slug: `senior-http-web-protocol-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- HTTP를 메서드/상태코드 암기로만 좁게 다루지 말고, 10년차 이상 개발자 인터뷰에서 평가하는 API 트래픽 해석, 성능/캐시 판단, 프록시/CDN/TLS 경계, 장애 분석 중심으로 진행해줘.
- HTTP/1.1, HTTP/2, HTTP/3, request/response, method semantics, status code, headers, content negotiation, cookies/session, CORS, Cache-Control, ETag, compression, keep-alive, connection pooling, timeout/retry/idempotency, reverse proxy, API gateway, CDN, TLS termination, observability를 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — HTTP 트래픽 분석과 시니어 답변 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-http-web-protocol-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
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

## HTML / CSS Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 HTML / CSS 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: HTML / CSS
폴더 slug: `senior-html-css-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 태그/속성 암기나 CSS 선택자 문법 퀴즈가 아니라, 10년차 이상 프론트엔드 개발자 인터뷰에서 평가하는 semantic structure, 접근성, 브라우저 렌더링, 반응형 레이아웃, 유지보수 가능한 스타일링, 성능 trade-off 중심으로 진행해줘.
- Semantic HTML, 문서 구조, form, ARIA, accessibility tree, SEO 기본 판단, CSS cascade, specificity, inheritance, box model, Flexbox, Grid, stacking context, responsive design, design token, CSS architecture, reflow/repaint, cross-browser issue를 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — Semantic HTML과 CSS 렌더링/접근성 답변 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-html-css-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## JavaScript Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 JavaScript 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: JavaScript
폴더 slug: `senior-javascript-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 문법 퀴즈나 코딩 테스트 암기가 아니라, 10년차 이상 프론트엔드 개발자 인터뷰에서 평가하는 실행 모델, 비동기 동작, 브라우저 성능, 유지보수 가능한 애플리케이션 로직, production debugging 중심으로 진행해줘.
- Execution context, scope, closure, prototype/object model, `this`, module, event loop, microtask/macrotask, Promise, `async`/`await`, cancellation, DOM event, event delegation, browser API, memory leak, error handling, performance profiling, TypeScript와의 경계 판단을 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — JavaScript 실행 모델과 이벤트 루프 답변 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-javascript-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## React / Next.js Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 React / Next.js 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: React / Next.js
폴더 slug: `senior-react-nextjs-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 Hook 사용법이나 파일 기반 라우팅 암기가 아니라, 10년차 이상 프론트엔드 개발자 인터뷰에서 평가하는 렌더링 모델, 데이터 흐름, hydration, 캐싱, 앱 아키텍처, 운영 장애 대응 중심으로 진행해줘.
- React rendering model, reconciliation, component boundary, hooks, state management, data fetching, Suspense, error boundary, hydration, SSR, SSG, ISR, Server Component, Client Component, App Router, routing, caching, streaming, bundle optimization, authentication, frontend security, testing, observability를 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — React 렌더링 모델과 Next.js 실행 경계 답변 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-react-nextjs-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 프론트엔드 Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 프론트엔드 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 프론트엔드 10년차 이상 개발자 Interview
폴더 slug: `senior-frontend-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 UI 구현 팁이나 라이브러리 사용법이 아니라, 10년차 이상 프론트엔드 개발자 인터뷰에서 평가하는 브라우저 제약, 제품 품질, 성능 예산, 접근성, 애플리케이션 아키텍처, 기술 리딩, 장애 분석 중심으로 진행해줘.
- HTML, CSS, JavaScript, browser rendering pipeline, accessibility, Web Vitals, performance budget, API integration, state/data architecture, React, Next.js, design system, frontend security, testing strategy, observability/RUM, deployment, SEO, i18n, cross-functional communication을 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 프론트엔드 시니어 인터뷰 답변 프레임워크와 브라우저 기반 사고부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-frontend-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
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

## 시스템 설계 Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 시스템 설계 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 시스템 설계 Interview
폴더 slug: `senior-system-design-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 아키텍처 용어 암기나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 요구사항 정리, 규모 산정, trade-off 판단, 장애 격리, 확장성 설계 중심으로 진행해줘.
- 대용량 트래픽 처리, 서버 확장, 캐시, 큐, DB 샤딩, 장애 격리, 고가용성, 분산 시스템, capacity estimation, consistency trade-off를 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 시스템 설계 답변 프레임워크와 요구사항 정리부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-system-design-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## Linux 서버 운영 Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 Linux 서버 운영 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: Linux 서버 운영
폴더 slug: `senior-linux-server-operations-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 명령어 암기나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 서버 장애 대응, 원인 분석, 운영 판단 중심으로 진행해줘.
- 리눅스 명령어, 프로세스 확인, 포트 확인, 로그 분석, CPU/메모리/디스크 사용량 확인, systemd, 권한 관리, 네트워크 진단을 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 리눅스 서버 장애 대응 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-linux-server-operations-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 백엔드 보안 / Secure Coding Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 백엔드 보안 / Secure Coding 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 백엔드 보안 / Secure Coding
폴더 slug: `senior-backend-security-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 취약점 정의 암기나 주니어 문답이 아니라, 10년차 이상 백엔드 개발자 인터뷰에서 평가하는 위협 모델링, 방어 설계, 실무 보안 판단 중심으로 진행해줘.
- 인증, 인가, 세션, JWT, SQL Injection, XSS, CSRF, 파일 업로드 보안, API 보안, 비밀번호 저장 방식, secret 관리, secure coding을 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 백엔드 보안 사고 프레임워크와 인증/인가부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-backend-security-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## Observability / 장애 대응 Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 Observability / 장애 대응 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: Observability / 장애 대응
폴더 slug: `senior-observability-incident-response-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 모니터링 도구 설명이나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 장애 탐지, 원인 분석, 재발 방지, 커뮤니케이션 중심으로 진행해줘.
- 로그, 메트릭, 트레이싱, 알림, 대시보드, 장애 원인 분석, 장애 보고서, postmortem, 재발 방지 대책, SLO를 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 장애 대응과 관측성 설계 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-observability-incident-response-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## AWS / Cloud Architecture Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 AWS / Cloud Architecture 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: AWS / Cloud Architecture
폴더 slug: `senior-aws-cloud-architecture-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 AWS 서비스 나열이나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 클라우드 아키텍처 설계, 운영 안정성, 비용/보안 trade-off 중심으로 진행해줘.
- EC2, S3, RDS, VPC, IAM, ELB, Auto Scaling, CloudWatch, Availability Zone, 네트워크 경계, 권한 설계, 비용 최적화를 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — AWS 아키텍처 설계 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-aws-cloud-architecture-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## Cloudflare 구성 Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 Cloudflare 구성 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: Cloudflare 구성
폴더 slug: `senior-cloudflare-configuration-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 대시보드 설정 나열이나 제품 기능 암기가 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 DNS/CDN/보안 경계 설계, origin 보호, 캐시 전략, 장애 대응, 비용/성능 trade-off 중심으로 진행해줘.
- Cloudflare DNS, proxied/DNS-only 차이, CDN 캐시, Cache Rules와 기존 Page Rules 경계, SSL/TLS mode, Origin Certificate, WAF, DDoS protection, Rate Limiting, Bot Management/Turnstile, Load Balancing, Workers, Redirect/Transform Rules, Zero Trust Access/Tunnel, DNSSEC, 로그/Analytics, 배포/마이그레이션 runbook을 다뤄줘.
- Cloudflare는 기능과 권장 설정이 계속 바뀌므로 레슨 생성 시점의 최신 공식 문서, changelog/release note, deprecation/migration guide, 주요 production 사례를 먼저 확인하고 커리큘럼과 예시를 조정해줘. 위 기술 목록은 최소 기준이며, 최신 운영 표준과 충돌하면 최신 근거를 우선해줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — Cloudflare DNS/CDN/보안 경계 구성 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-cloudflare-configuration-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## Docker / Kubernetes / 가상화 Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 Docker / Kubernetes / 가상화 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: Docker / Kubernetes / 가상화
폴더 slug: `senior-docker-kubernetes-virtualization-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 명령어 암기나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 컨테이너 배포 구조, 장애 대응, 운영 trade-off 중심으로 진행해줘.
- 컨테이너, 이미지, 볼륨, 네트워크, Dockerfile, Compose, Kubernetes Pod, Deployment, Service, Ingress, rollout, resource limit, 운영 troubleshooting을 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 컨테이너와 Kubernetes 운영 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-docker-kubernetes-virtualization-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## Kubernetes Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 Kubernetes 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: Kubernetes 10년차 이상 개발자 Interview
폴더 slug: `senior-kubernetes-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 kubectl 명령어 암기나 리소스 정의 나열이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 클러스터 운영 판단, 장애 대응, 배포 안정성, 보안/권한 경계, 비용/성능 trade-off 중심으로 진행해줘.
- Kubernetes cluster architecture, control plane, node, Pod, Deployment, StatefulSet, DaemonSet, Service, Ingress, Gateway API, CoreDNS, CNI networking, storage/volume, ConfigMap, Secret, probe, request/limit, HPA/VPA, rollout/rollback, scheduling, RBAC, admission control, security hardening, observability, troubleshooting, upgrade strategy, multi-cluster trade-off를 다뤄줘.
- Kubernetes는 릴리스와 운영 권장사항이 계속 바뀌므로 레슨 생성 시점의 최신 공식 문서, release note, deprecation/migration guide를 먼저 확인하고 커리큘럼과 예시를 조정해줘. 위 기술 목록은 최소 기준이며, 최신 운영 표준과 충돌하면 최신 근거를 우선해줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — Kubernetes 클러스터 운영과 장애 대응 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-kubernetes-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## CI/CD와 배포 전략 Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 CI/CD와 배포 전략 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: CI/CD와 배포 전략
폴더 slug: `senior-cicd-deployment-strategy-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 파이프라인 도구 설명이나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 배포 안정성, 자동화 품질, 롤백 판단, release ownership 중심으로 진행해줘.
- GitHub Actions, Jenkins, 빌드 자동화, 테스트 자동화, artifact 관리, Blue-Green 배포, Rolling 배포, Canary 배포, 롤백 전략을 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 안정적인 배포 전략과 롤백 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-cicd-deployment-strategy-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 성능 최적화 Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 성능 최적화 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 성능 최적화
폴더 slug: `senior-performance-optimization-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 튜닝 팁 암기나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 병목 분석, 측정 기반 판단, 성능/복잡도 trade-off 중심으로 진행해줘.
- 느린 API 분석, DB 쿼리 튜닝, 인덱스 최적화, 캐시 적용, 비동기 처리, 부하 테스트, 병목 분석, profiling, 성능 지표 해석을 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 성능 병목 분석 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-performance-optimization-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## Redis / 캐시 전략 Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 Redis / 캐시 전략 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: Redis / 캐시 전략
폴더 slug: `senior-redis-cache-strategy-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 Redis 명령어 암기나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 캐시 설계, 데이터 구조 선택, 무효화 전략, 고가용성, 장애 시 동작, 메모리/성능 trade-off 중심으로 진행해줘.
- Redis 자료구조, TTL, 캐시 무효화, 세션 저장소, 분산 락, 랭킹, Pub/Sub, Streams, 캐시 스탬피드, hot key, pipelining, Lua scripting, transaction, persistence, eviction policy, replication, Sentinel, Cluster, memory sizing, latency diagnosis, failover behavior를 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 캐시 전략과 Redis 사용 판단 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-redis-cache-strategy-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 메시지 큐 / 비동기 처리 Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 메시지 큐 / 비동기 처리 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 메시지 큐 / 비동기 처리
폴더 slug: `senior-message-queue-async-processing-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 큐 제품 비교나 주니어 문답이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 비동기 설계, 재시도, 장애 격리, 대량 처리 판단 중심으로 진행해줘.
- Kafka, RabbitMQ, SQS, Celery, 비동기 작업 설계, 외부 연동, 재시도, idempotency, dead-letter queue, ordering, backpressure, 장애 격리를 다뤄줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 비동기 처리와 메시지 큐 설계 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-message-queue-async-processing-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## RAG Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 RAG 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: RAG
폴더 slug: `senior-rag-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 LLM 용어 암기나 데모 구현이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 검색 품질, 데이터 파이프라인, 운영 안정성, 비용/성능 trade-off, 제품 품질 판단 중심으로 진행해줘.
- RAG 아키텍처, 문서 수집/정제, chunking 전략, embedding 모델 선택, vector database, hybrid search, metadata filtering, reranking, context 구성, prompt 설계, hallucination 완화, 답변 근거 표시, 평가 지표, offline/online evaluation, 권한/보안, 개인정보 처리, 캐시, 비용 최적화, 관측성, 장애 대응을 다뤄줘.
- RAG는 빠르게 변하는 분야이므로 레슨 생성 시점의 최신 공식 문서, changelog/release note, deprecation/migration guide, 주요 production 사례를 먼저 확인하고 커리큘럼과 예시를 조정해줘. 위 기술 목록은 최소 기준이며, 최신 인터뷰 트렌드나 실무 표준과 충돌하면 최신 근거를 우선해줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — RAG 시스템 설계와 검색 품질 진단 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-rag-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## LangChain / LangGraph Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 LangChain / LangGraph 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: LangChain / LangGraph
폴더 slug: `senior-langchain-langgraph-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 튜토리얼 따라하기나 API 호출 예제가 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 LLM 애플리케이션 아키텍처, agent 설계, 상태 관리, 운영 안정성, 평가/관측성, 비용/성능 trade-off 중심으로 진행해줘.
- LangChain agent 구성, model/tool/message abstraction, middleware, retrieval, memory, structured output, streaming, guardrails, context engineering, tool calling, LangGraph StateGraph, node/edge 설계, state schema, persistence, checkpointer, store, interrupt, human-in-the-loop, subgraph, fault tolerance, retry, LangSmith tracing/evaluation, 배포, 운영 장애 대응을 다뤄줘.
- LangChain과 LangGraph는 빠르게 변하는 분야이므로 레슨 생성 시점의 최신 공식 문서, changelog/release note, deprecation/migration guide, 주요 production 사례를 먼저 확인하고 커리큘럼과 예시를 조정해줘. 위 기술 목록은 최소 기준이며, 최신 인터뷰 트렌드나 실무 표준과 충돌하면 최신 근거를 우선해줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — LangChain과 LangGraph 기반 Agent 설계/운영 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-langchain-langgraph-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## AI Harness / Agent Harness Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 AI Harness / Agent Harness 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: AI Harness / Agent Harness
폴더 slug: `senior-ai-harness-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 SDK 사용법이나 prompt template 암기가 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 AI agent runtime 설계, model/tool/runtime 경계, orchestration, 운영 안정성, 평가/관측성, 비용/성능 trade-off 중심으로 진행해줘.
- AI harness와 agent harness 개념, agent loop, prompt/tool/memory/control-flow scaffolding, provider abstraction, tool calling, handoff, guardrail, session/memory, sandboxed workspace execution, MCP, streaming, telemetry, tracing, evaluation harness, replay, human-in-the-loop, multi-agent coordination, 권한/보안, 비용 최적화, 장애 대응을 다뤄줘.
- AI Harness 분야는 빠르게 변하므로 레슨 생성 시점의 최신 공식 문서, changelog/release note, deprecation/migration guide, 주요 production 사례를 먼저 확인하고 커리큘럼과 예시를 조정해줘. 위 기술 목록은 최소 기준이며, 최신 인터뷰 트렌드나 실무 표준과 충돌하면 최신 근거를 우선해줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — AI Harness와 Agent Runtime 설계/운영 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-ai-harness-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## LLM Engineering Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 LLM Engineering 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: LLM Engineering
폴더 slug: `senior-llm-engineering-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 LLM 용어 암기나 prompt tip 나열이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 모델 선택, 제품 품질, 운영 안정성, 안전성, 평가 체계, 비용/성능 trade-off 중심으로 진행해줘.
- LLM 동작 특성, model selection, capability boundary, tokenization, context window, prompt engineering, reasoning model 사용 판단, structured output, function/tool calling, multimodal input/output, embedding, fine-tuning, reinforcement fine-tuning, evaluation, hallucination 완화, safety/guardrail, prompt injection 방어, latency/cost 최적화, prompt caching, observability, rate limit, fallback, vendor abstraction, production incident 대응을 다뤄줘.
- LLM 분야는 빠르게 변하므로 레슨 생성 시점의 최신 공식 문서, changelog/release note, deprecation/migration guide, 주요 production 사례를 먼저 확인하고 커리큘럼과 예시를 조정해줘. 위 기술 목록은 최소 기준이며, 최신 인터뷰 트렌드나 실무 표준과 충돌하면 최신 근거를 우선해줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — LLM 제품 품질과 모델 선택/운영 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-llm-engineering-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## 챗봇 서비스 Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 챗봇 서비스 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: 챗봇 서비스
폴더 slug: `senior-chatbot-service-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 FAQ bot 데모나 LLM API 호출 예제가 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 대화형 서비스 요구사항 분석, 의도/개체 모델링, context 유지, 운영 품질, 안전성, 비용/성능 trade-off 중심으로 진행해줘.
- 사용자 의도(intent), 개체(entity)와 slot 추출, 동의어(synonym) 사전, utterance 설계, NLU/LLM hybrid routing, dialogue state, session/context 유지, multi-turn flow, fallback/escalation, human handoff, RAG와 tool calling 연동, 채널 연동, 개인정보/동의/보안, prompt injection 방어, safety guardrail, 평가 지표, analytics, observability, latency/cost 최적화, 운영 장애 대응을 다뤄줘.
- 챗봇과 LLM 애플리케이션 분야는 빠르게 변하므로 레슨 생성 시점의 최신 공식 문서, changelog/release note, deprecation/migration guide, 주요 production 사례를 먼저 확인하고 커리큘럼과 예시를 조정해줘. 위 기술 목록은 최소 기준이며, 최신 인터뷰 트렌드나 실무 표준과 충돌하면 최신 근거를 우선해줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — 챗봇 서비스 요구사항과 intent/entity/context 설계 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-chatbot-service-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## Claude Code Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 Claude Code 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: Claude Code
폴더 slug: `senior-claude-code-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 CLI 사용법이나 프롬프트 팁이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 agentic coding runtime 이해, 코드베이스 컨텍스트 설계, 권한/보안, 자동화, 팀 운영, CI/CD 통합, 생산성/품질 trade-off 중심으로 진행해줘.
- Claude Code 동작 모델, terminal/IDE/web/desktop surface, CLI automation, codebase context, `CLAUDE.md`, instructions/memory, permission mode, shell/file tool execution, MCP, skills, hooks, plugins, subagents/agent teams, background agent, Remote Control, code review, CI/CD workflow, session management, context compaction, prompt caching, model/provider configuration, sandboxing, security, enterprise/admin settings, observability, troubleshooting, production adoption pattern을 다뤄줘.
- Claude Code는 빠르게 변하는 분야이므로 레슨 생성 시점의 최신 공식 문서, changelog/release note, deprecation/migration guide, 주요 production 사례를 먼저 확인하고 커리큘럼과 예시를 조정해줘. 위 기술 목록은 최소 기준이며, 최신 인터뷰 트렌드나 실무 표준과 충돌하면 최신 근거를 우선해줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — Claude Code 기반 agentic coding 운영 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-claude-code-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## Hermes Agent Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 Hermes Agent 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: Hermes Agent
폴더 slug: `senior-hermes-agent-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 설치 절차나 프롬프트 팁이 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 always-on agent runtime 설계, local-first 실행, task refinement, self-learning/skill capture, tool/permission 보안, OpenClaw와의 운영 trade-off 중심으로 진행해줘.
- Hermes Agent architecture, always-on runtime, local-first execution, task refinement, self-learning, skill capture, model/tool/runtime boundary, memory/session design, planner/executor handoff, provider abstraction, tool calling, MCP/API integration, Gateway/channel integration, scheduling, replay/evaluation loop, sandboxing, permission model, provenance, prompt injection defense, OpenClaw interoperability, observability, troubleshooting, cost/latency/reliability trade-off, production operation pattern을 다뤄줘.
- Hermes Agent는 빠르게 변하는 분야이므로 레슨 생성 시점의 최신 공식 문서, changelog/release note, deprecation/migration guide, 주요 production 사례를 먼저 확인하고 커리큘럼과 예시를 조정해줘. 위 기술 목록은 최소 기준이며, 최신 인터뷰 트렌드나 실무 표준과 충돌하면 최신 근거를 우선해줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — Hermes Agent runtime과 task refinement 운영 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-hermes-agent-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```

## OpenClaw Interview

```text
`.claude/skills/study-track` 스킬을 사용해서 OpenClaw 10년차 이상 개발자 Interview 대비 학습 워크스페이스를 생성하거나 재개해줘.

과목: OpenClaw
폴더 slug: `senior-openclaw-interview`

요구사항:
- 기존 `.claude/skills/teach` 스킬은 수정하지 마.
- 단순 설치 절차나 데모 자동화가 아니라, 10년차 이상 개발자 인터뷰에서 평가하는 local-first agent platform 설계, Gateway 운영, multi-channel integration, tool/skill 보안, sandboxing, 모델/비용/신뢰성 trade-off 중심으로 진행해줘.
- OpenClaw architecture, local-first Gateway, channel integration, onboarding/update flow, model provider configuration, auth profile rotation, failover, tools, sessions, prompt/memory files, skills, ClawHub, multi-agent routing, sandboxing, DM pairing, allowlist, remote exposure runbook, companion apps/nodes, deployment topology, logging, troubleshooting, marketplace security, production operation trade-off를 다뤄줘.
- OpenClaw는 빠르게 변하는 분야이므로 레슨 생성 시점의 최신 공식 문서, changelog/release note, deprecation/migration guide, 주요 production 사례를 먼저 확인하고 커리큘럼과 예시를 조정해줘. 위 기술 목록은 최소 기준이며, 최신 인터뷰 트렌드나 실무 표준과 충돌하면 최신 근거를 우선해줘.
- 각 레슨에는 면접 질문, 전제 개념, 왜 면접에서 묻는지, 실무 연결, 답변 사고 순서, 핵심 답변 예시, senior-level follow-up, 좋은 답변과 약한 답변의 차이, 자기 점검 rubric을 포함해줘.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 설명하고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 풀어서 설명해줘.
- 폴더가 없으면 `MISSION.md`, `RESOURCES.md`, `PROGRESS.md`, `lessons/`, `learning-records/`, `reference/`, `assets/` 구조로 새로 만들고 Day 1 레슨을 생성해줘.
- 폴더가 있으면 `MISSION.md`와 `PROGRESS.md`를 먼저 읽고, 새 인터뷰 커리큘럼 기준의 다음 미완료 Day 레슨 하나를 생성해줘.
- 현재 인터뷰 커리큘럼은 Day 1부터 다시 시작하는 기준이므로, `PROGRESS.md`가 "Day 1 시작 전"이면 Day 1 — OpenClaw Gateway와 local-first agent 운영 프레임워크부터 진행해줘.
- 작업 후 변경사항을 요약하고, 적절한 커밋 메시지로 commit한 뒤 `study/senior-openclaw-interview` 브랜치에 push해줘. `main`에는 직접 push하지 마.
```
