---
name: study-track
description: Use this skill when the user wants to create or continue a subject-specific IT learning workspace, continue beyond an exhausted plan, avoid repeating completed topics, record completed lessons, or periodically commit and push learning progress. Trigger for Korean or English requests such as "IT 과목 학습 폴더 만들어줘", "컴퓨터 구조 이어서 학습", "완료한 부분 중복 없이 다음 학습", "Day30 이후 계속 진행", "학습 진행상황 저장", "git push로 업데이트", "continue my OS study", or any request to track a course-like learning path over multiple sessions.
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
- `python-backend-engineering`
- `professional-python`
- `python-experienced-interview`
- `senior-backend-interview`
- `senior-system-design-interview`
- `senior-linux-server-operations-interview`
- `senior-backend-security-interview`
- `senior-observability-incident-response-interview`
- `senior-aws-cloud-architecture-interview`
- `senior-docker-kubernetes-virtualization-interview`
- `senior-cicd-deployment-strategy-interview`
- `senior-performance-optimization-interview`
- `senior-http-web-protocol-interview`
- `senior-html-css-interview`
- `senior-javascript-interview`
- `senior-react-nextjs-interview`
- `senior-frontend-interview`
- `senior-redis-cache-strategy-interview`
- `senior-message-queue-async-processing-interview`
- `senior-rag-interview`

If the user gives a Korean subject name, map it to a stable English slug. Prefer common CS course names:

- `컴퓨터 구조` -> `computer-architecture`
- `운영체제` -> `operating-systems`
- `데이터베이스` -> `database-systems`
- `네트워크` -> `computer-networking`
- `자료구조` -> `data-structures`
- `알고리즘` -> `algorithms`
- `Python 백엔드` -> `python-backend-engineering`
- `파이썬 백엔드` -> `python-backend-engineering`
- `Backend 구성을 위한 Python 실무자 기준 학습` -> `python-backend-engineering`
- `실무 파이썬` -> `professional-python`
- `파이썬 실무` -> `professional-python`
- `파이썬 Syntax 기초 아닌 실무자 기준` -> `professional-python`
- `파이썬 경력자 Interview` -> `python-experienced-interview`
- `파이썬 경력자 인터뷰` -> `python-experienced-interview`
- `Python 경력자 Interview` -> `python-experienced-interview`
- `백엔드 10년차 이상 개발자 Interview` -> `senior-backend-interview`
- `백엔드 시니어 인터뷰` -> `senior-backend-interview`
- `Senior Backend Developer Interview` -> `senior-backend-interview`
- `시스템 설계 Interview` -> `senior-system-design-interview`
- `시스템 설계 인터뷰` -> `senior-system-design-interview`
- `System Design Interview` -> `senior-system-design-interview`
- `Linux 서버 운영` -> `senior-linux-server-operations-interview`
- `리눅스 서버 운영` -> `senior-linux-server-operations-interview`
- `Linux Server Operations Interview` -> `senior-linux-server-operations-interview`
- `백엔드 보안 / Secure Coding` -> `senior-backend-security-interview`
- `백엔드 보안` -> `senior-backend-security-interview`
- `Secure Coding Interview` -> `senior-backend-security-interview`
- `Observability / 장애 대응` -> `senior-observability-incident-response-interview`
- `옵저버빌리티 장애 대응` -> `senior-observability-incident-response-interview`
- `Observability Incident Response Interview` -> `senior-observability-incident-response-interview`
- `AWS / Cloud Architecture` -> `senior-aws-cloud-architecture-interview`
- `AWS 클라우드 아키텍처` -> `senior-aws-cloud-architecture-interview`
- `AWS Cloud Architecture Interview` -> `senior-aws-cloud-architecture-interview`
- `Docker / Kubernetes / 가상화` -> `senior-docker-kubernetes-virtualization-interview`
- `Docker Kubernetes 가상화` -> `senior-docker-kubernetes-virtualization-interview`
- `Docker Kubernetes Virtualization Interview` -> `senior-docker-kubernetes-virtualization-interview`
- `CI/CD와 배포 전략` -> `senior-cicd-deployment-strategy-interview`
- `CI/CD 배포 전략` -> `senior-cicd-deployment-strategy-interview`
- `CI/CD Deployment Strategy Interview` -> `senior-cicd-deployment-strategy-interview`
- `성능 최적화` -> `senior-performance-optimization-interview`
- `Performance Optimization Interview` -> `senior-performance-optimization-interview`
- `HTTP / Web Protocol & API Traffic` -> `senior-http-web-protocol-interview`
- `HTTP / Web Protocol Interview` -> `senior-http-web-protocol-interview`
- `HTTP API 트래픽 Interview` -> `senior-http-web-protocol-interview`
- `HTTP 학습` -> `senior-http-web-protocol-interview`
- `HTTP Interview` -> `senior-http-web-protocol-interview`
- `HTTP 시니어 인터뷰` -> `senior-http-web-protocol-interview`
- `HTTP 10년차 이상 개발자 Interview` -> `senior-http-web-protocol-interview`
- `HTML / CSS Interview` -> `senior-html-css-interview`
- `HTML CSS Interview` -> `senior-html-css-interview`
- `html css Interview` -> `senior-html-css-interview`
- `HTML 10년차 이상 개발자 Interview` -> `senior-html-css-interview`
- `html 10년차 이상 개발자 Interview` -> `senior-html-css-interview`
- `HTML 시니어 인터뷰` -> `senior-html-css-interview`
- `CSS 10년차 이상 개발자 Interview` -> `senior-html-css-interview`
- `css 10년차 이상 개발자 Interview` -> `senior-html-css-interview`
- `CSS 시니어 인터뷰` -> `senior-html-css-interview`
- `JavaScript 10년차 이상 개발자 Interview` -> `senior-javascript-interview`
- `javascript 10년차 이상 개발자 Interview` -> `senior-javascript-interview`
- `자바스크립트 10년차 이상 개발자 Interview` -> `senior-javascript-interview`
- `JavaScript 시니어 인터뷰` -> `senior-javascript-interview`
- `React 10년차 이상 개발자 Interview` -> `senior-react-nextjs-interview`
- `react 10년차 이상 개발자 Interview` -> `senior-react-nextjs-interview`
- `React 시니어 인터뷰` -> `senior-react-nextjs-interview`
- `리액트 10년차 이상 개발자 Interview` -> `senior-react-nextjs-interview`
- `Next.js 10년차 이상 개발자 Interview` -> `senior-react-nextjs-interview`
- `NextJS 10년차 이상 개발자 Interview` -> `senior-react-nextjs-interview`
- `nextjs 10년차 이상 개발자 Interview` -> `senior-react-nextjs-interview`
- `Next.js 시니어 인터뷰` -> `senior-react-nextjs-interview`
- `React / Next.js Interview` -> `senior-react-nextjs-interview`
- `react nextjs Interview` -> `senior-react-nextjs-interview`
- `프론트엔드 10년차 이상 개발자 Interview` -> `senior-frontend-interview`
- `프론트엔드 Interview` -> `senior-frontend-interview`
- `프론트엔드 시니어 인터뷰` -> `senior-frontend-interview`
- `Frontend Developer Interview` -> `senior-frontend-interview`
- `Senior Frontend Developer Interview` -> `senior-frontend-interview`
- `Redis / 캐시 전략` -> `senior-redis-cache-strategy-interview`
- `Redis 캐시 전략` -> `senior-redis-cache-strategy-interview`
- `Redis Cache Strategy Interview` -> `senior-redis-cache-strategy-interview`
- `메시지 큐 / 비동기 처리` -> `senior-message-queue-async-processing-interview`
- `메시지 큐 비동기 처리` -> `senior-message-queue-async-processing-interview`
- `Message Queue Async Processing Interview` -> `senior-message-queue-async-processing-interview`
- `RAG` -> `senior-rag-interview`
- `RAG Interview` -> `senior-rag-interview`
- `RAG 10년차 이상 개발자 Interview` -> `senior-rag-interview`
- `RAG 시니어 인터뷰` -> `senior-rag-interview`
- `Retrieval Augmented Generation Interview` -> `senior-rag-interview`

If the slug is ambiguous, ask one short clarifying question before creating the folder.

For practitioner-focused Python subjects, assume the learner already knows basic syntax unless they explicitly ask for beginner review:

- `python-backend-engineering`: Python backend construction for practitioners, including backend architecture, API design, service boundaries, persistence, transactions, authentication, background jobs, observability, deployment, and design concepts.
- `professional-python`: practical Python beyond syntax, including idioms, project structure, packaging, dependency management, typing, errors and exceptions, testing, debugging, profiling, standard library depth, concurrency, maintainability, and production code quality.

Do not start these tracks with basic Python syntax. Start with the first practical foundation needed for the subject and mention the assumed prerequisite in `MISSION.md`.

For senior backend interview subjects, focus on 10+ year practitioner expectations: architecture trade-offs, system design, scale, reliability, data modeling, transactions, concurrency, distributed systems, APIs, security, observability, incident response, deployment, technical leadership, and communication. Include mock interview questions, answer frameworks, senior-level follow-ups, strong/weak answer examples, and self-check rubrics. Do not turn the track into junior CS trivia unless the topic is used to evaluate production reasoning.

For specialized senior interview subjects, keep the same 10+ year practitioner interview format as `senior-backend-interview`. Each lesson should connect concepts to production constraints, architecture trade-offs, incident examples, leadership-level communication, and interviewer follow-ups:

- `senior-system-design-interview`: high traffic handling, server scaling, cache, queues, DB sharding, failure isolation, high availability, distributed systems, capacity estimation, consistency trade-offs, and design review communication.
- `senior-linux-server-operations-interview`: Linux commands, process inspection, port checks, log analysis, CPU/memory/disk diagnosis, systemd, permissions, networking basics, and real server incident response.
- `senior-backend-security-interview`: authentication, authorization, sessions, JWT, SQL injection, XSS, CSRF, secure file uploads, API security, password storage, secrets handling, threat modeling, and secure coding trade-offs.
- `senior-observability-incident-response-interview`: logs, metrics, tracing, alerts, dashboards, incident triage, root cause analysis, postmortems, recurrence prevention, SLOs, and stakeholder communication during failures.
- `senior-aws-cloud-architecture-interview`: EC2, S3, RDS, VPC, IAM, ELB, Auto Scaling, CloudWatch, network boundaries, availability zones, cost/reliability trade-offs, and cloud architecture design.
- `senior-docker-kubernetes-virtualization-interview`: containers, images, volumes, networks, Dockerfile, Compose, Kubernetes Pod, Deployment, Service, Ingress, rollout behavior, resource limits, and production troubleshooting.
- `senior-cicd-deployment-strategy-interview`: GitHub Actions, Jenkins, build automation, test automation, artifact management, Blue-Green, Rolling, Canary, rollback strategy, deployment risk control, and release ownership.
- `senior-performance-optimization-interview`: slow API analysis, DB query tuning, index optimization, caching, asynchronous processing, load testing, bottleneck analysis, profiling, and measurable performance trade-offs.
- `senior-http-web-protocol-interview`: HTTP/1.1, HTTP/2, HTTP/3, request/response semantics, methods, status codes, headers, content negotiation, cookies and sessions, CORS, Cache-Control, ETag, compression, keep-alive, connection pooling, timeout/retry/idempotency, reverse proxies, API gateways, CDN behavior, TLS termination, observability, and production traffic debugging.
- `senior-html-css-interview`: semantic HTML, accessibility, forms, document structure, browser parsing, CSS cascade, specificity, layout, responsive design, design systems, maintainable styling, cross-browser issues, rendering performance, and production UI trade-offs.
- `senior-javascript-interview`: execution context, event loop, microtasks/macrotasks, closures, prototypes, `this`, modules, promises, `async`/`await`, DOM/browser APIs, memory leaks, browser performance, error handling, and production debugging.
- `senior-react-nextjs-interview`: React rendering model, hooks, component boundaries, state and data fetching, hydration, SSR/SSG/ISR, Server and Client Components, routing, caching, streaming, bundle optimization, authentication, security, testing, and production troubleshooting.
- `senior-frontend-interview`: integrated frontend architecture across HTML, CSS, JavaScript, React, Next.js, browser rendering, accessibility, performance, API integration, state/data design, design systems, testing, frontend security, observability, UX trade-offs, and technical leadership.
- `senior-redis-cache-strategy-interview`: Redis data structures, TTL, cache invalidation, session stores, distributed locks, ranking, Pub/Sub, cache stampede prevention, persistence modes, and failure behavior.
- `senior-message-queue-async-processing-interview`: Kafka, RabbitMQ, SQS, Celery, asynchronous job design, retries, idempotency, dead-letter queues, ordering, backpressure, failure isolation, and large-scale processing.
- `senior-rag-interview`: RAG architecture, document ingestion and cleaning, chunking strategy, embedding model selection, vector databases, hybrid search, metadata filtering, reranking, context construction, prompt design, hallucination mitigation, answer grounding, offline and online evaluation, access control, privacy, caching, cost/performance trade-offs, observability, and production incident response.

For senior frontend interview subjects, assume the learner already knows beginner syntax and basic framework usage. Focus on 10+ year practitioner expectations: browser/platform constraints, accessibility, performance budgets, rendering behavior, architecture trade-offs, maintainability, testing strategy, frontend security, production debugging, cross-functional communication, and senior-level design review. Do not turn these tracks into beginner tag/property/API drills unless the topic is used to evaluate production reasoning.

For Python experienced interview subjects, assume the learner already knows basic Python syntax. Focus on experienced developer interview expectations: Python data model, object model, execution model, memory management, reference counting and garbage collection, GIL, concurrency, `asyncio`, iterators, generators, context managers, descriptors, decorators, typing, packaging, testing, debugging, profiling, performance, standard library depth, maintainability, and production troubleshooting. Include mock interview questions, answer frameworks, senior-level follow-ups, strong/weak answer examples, and self-check rubrics. Do not turn the track into beginner syntax drills.

Interview lessons for senior backend, senior frontend, specialized senior interview, and Python experienced subjects must be detailed enough for a learner who finds the interview question difficult. Do not only list definitions, answer bullets, or comparison tables. For each hard concept or interview question, explain:

- the real production situation behind the question
- the prerequisite concept in plain Korean before using senior-level terms
- why interviewers ask it and what signal they are evaluating
- a step-by-step reasoning path from problem constraints to answer
- trade-offs, failure modes, and when the preferred answer changes
- strong answer, weak answer, and why the weak answer is weak
- follow-up questions with model reasoning, not just final answers
- common misconceptions and how to correct them

Quiz and self-check feedback must explain why each wrong option is wrong and why the correct answer is better. Avoid short feedback like "오답입니다. 다시 읽어보세요." for interview lessons.

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
2. Read the planned learning path and find the next uncompleted Day. If the planned learning path is exhausted, extend it before creating the lesson.
3. Check `lessons/` and `learning-records/` numbering to choose the next sequential file number.
4. Create exactly one next lesson unless the user explicitly asks for more. Lesson files must be self-contained `.html` files under `lessons/`; do not create Markdown lesson files in `lessons/`, even if older lessons used `.md`.
5. Reuse existing `assets/` before creating new assets.
6. Update `lessons/index.html` so GitHub Pages can show the lesson list for the folder URL.
7. Update `PROGRESS.md` immediately after completing the lesson.
8. Add or update learning records only for demonstrated understanding, corrected misconceptions, prior knowledge, or mission changes.

## Continuing after the planned path is exhausted

Do not treat Day 30, the last planned Day, or an empty `## 다음 예정 학습` table as course completion unless the user explicitly asks to stop.

When all planned Days are completed:

1. Set the next Day to one greater than the highest completed Day.
2. Choose a new topic that advances the subject mission without duplicating completed material.
3. Prefer deeper treatment of completed foundations when that is the next useful step, but do not limit continuation to the same topic. Add adjacent or newly needed topics when they better serve the learner.
4. Base the topic choice on `MISSION.md`, `RESOURCES.md`, completed lesson titles, learning records, and gaps implied by the current path.
5. Good continuation topics include advanced theory, production application, design trade-offs, debugging and failure analysis, performance, security, reliability, case studies, interview follow-ups, and project-style synthesis.
6. Add the new Day to `## 다음 예정 학습`, then create the lesson and update `PROGRESS.md` using the normal completion workflow.
7. Ask the user only when the next useful topic would change the subject mission or create a separate subject workspace.

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
- Is the new lesson filename ending in `.html`, not `.md`?
- Will `PROGRESS.md` be updated in the same change as the lesson?
- Will `lessons/index.html` be created or updated in the same change as the lesson?

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

## Lesson index for GitHub Pages

GitHub Pages does not automatically show a directory listing for `lessons/`. Every subject workspace must maintain:

```text
{subject-slug}/lessons/index.html
```

When creating the first lesson, create `lessons/index.html`. When adding any later lesson, update that same index in the same change.

The index should contain a simple Korean HTML page with:

- a UTF-8 charset
- a title such as `{Subject} 학습 목록`
- an `<h1>` with the same subject list title
- one `<li><a href="./{lesson-file}">...</a></li>` per lesson, in Day order

Every lesson link in the index must point to an `.html` file. If a previous lesson exists as Markdown, convert it to HTML before adding more lessons so future runs do not copy the Markdown pattern.

Example:

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>컴퓨터 구조 학습 목록</title>
</head>
<body>
  <h1>컴퓨터 구조 학습 목록</h1>
  <ul>
    <li><a href="./0001-what-is-computer-architecture.html">Day 1 — 컴퓨터 구조란 무엇인가?</a></li>
  </ul>
</body>
</html>
```

The folder URL will then work, for example:

```text
https://jaegeunha94.github.io/opensource-skill/computer-architecture/lessons/
```

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
