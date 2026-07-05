# 학습 참고 자료

이 문서의 링크와 사실관계는 2026-07 기준 리서치 결과다. Hermes Agent는 2026-02에 공개된 신생 프로젝트로 변화가 매우 빠르므로, 새 Day를 만들 때마다 아래 공식 소스의 최신 상태를 다시 확인한다.

## 공식 소스 — Hermes Agent (Nous Research)

- [Hermes Agent 공식 문서](https://hermes-agent.nousresearch.com/docs/) — quickstart, CLI, configuration, messaging gateway, security, tools, skills, memory, MCP, cron, ACP, API server, architecture
- [Hermes Agent — Configuration](https://hermes-agent.nousresearch.com/docs/user-guide/configuration), [Hermes Agent — Docker](https://hermes-agent.nousresearch.com/docs/user-guide/docker) — terminal backend 설정(local/docker/ssh/daytona/singularity/modal), 작업 디렉토리/타임아웃/컨테이너 이미지 설정(WebFetch가 403을 반환해 직접 인용은 어려웠고, 검색 스니펫과 2차 출처로 교차검증함 — 실제 면접 전 브라우저로 재확인 권장)
- [GitHub — NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — MIT 라이선스, 최신 태그 v0.18.0 "The Judgment Release"(2026-07-01, 2026-07-04 기준 재확인해도 최신 릴리스 동일)
- [GitHub Releases — v0.18.0 "The Judgment Release"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1) — ~1,720 commits, 998 merged PR, P0/P1 이슈 100% 종료, Mixture-of-Agents 정식 지원
- Nous Research 공식 발표(2026-02-25) — "the self-improving AI agent... the only agent with a built-in learning loop"
- GitHub Issues — 의존성 deprecation 경고 사례(예: Issue #29322, `hermes update` 실행 시 `glob`/`inflight` deprecation, v0.14.0 기준 보고)

## Day 2 리서치 — 실행 backend / 배포 토폴로지 (2차 출처, 교차검증 완료)

- Hermes Agent 6개 terminal backend(local/docker/ssh/daytona/singularity/modal) 구성 — 공식 문서, GitHub README, 다수의 독립 튜토리얼(Hermes Agent Tutorial 7: Terminal Backends 등)에서 공통 확인. 일부 3rd-party 블로그(`hermesagents.net`)는 "7개 sandbox backend"라고 서술하나 이는 소수 의견이라 6개를 기준으로 채택
- "$5 VPS" always-on 배포 패턴 — DigitalOcean/Hetzner/Vultr 등 월 5~7달러 VPS, Docker 공식 이미지(`nousresearch/hermes-agent`) 권장, PM2/systemd로 프로세스 상주, 메모리 사용량 500MB 미만(로컬 LLM 미사용 시) — 다수의 실무 배포 가이드(Contabo, Servury, Hostinger 튜토리얼)에서 반복 확인된 패턴
- Daytona hibernate-on-idle: 장시간 유휴 후 첫 요청 약 300ms 깨어남 지연, 이후 요청은 컨테이너 상주로 빠름 / Modal cold start: 워크로드에 따라 약 200ms~2-4초 — 서드파티 인프라 비교 아티클(Modal 공식 블로그, mcp.directory 비교 글) 기준, 수치는 워크로드·리전에 따라 달라질 수 있어 참고치로만 사용

## Day 3 리서치 — Self-Learning/Skill Capture (1차 출처 우선, 2026-07-05 확인)

- [Skills System 공식 문서](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills) 및 GitHub 미러
  [`website/docs/user-guide/features/skills.md`](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/skills.md) —
  `SKILL.md` YAML frontmatter 포맷, When to Use/Procedure/Pitfalls/Verification 표준 섹션, 3가지 호출 경로(슬래시/자연어/번들),
  3단계 점진적 로딩(Level 0 목록 ~3k 토큰 / Level 1 전체 본문 / Level 2 참조 파일), `skill_manage` 툴 6개 액션(create/patch/edit/delete/write_file/remove_file),
  `write_approval` 승인 스테이징(`/skills pending`, `/skills diff`, `/skills approve`), Skills Hub(외부 디렉토리·skills.sh·well-known·GitHub 저장소·ClawHub/LobeHub),
  bundled skill manifest(`.bundled_manifest`, `hermes skills reset/--restore`) — WebFetch 직접 접근은 403이었으나 GitHub raw 미러로 원문 확인
- [Security 공식 문서](https://hermes-agent.nousresearch.com/docs/user-guide/security) — Skills Guard의 사전 스캔(의심스러운 env 접근 패턴),
  `required_environment_variables` 선언 기반 자격증명 passthrough, 컨테이너 격리 시 승인 스킵("컨테이너 자체가 보안 경계") — GitHub raw 미러로 확인
- [MarkTechPost — Nous Research Adds /learn to Hermes Agent's Skills System](https://www.marktechpost.com/2026/06/24/nous-research-adds-learn-to-hermes-agents-skills-system-capturing-workflows-as-slash-commands-without-hand-writing-skill-md/) —
  v0.18.0에서 추가된 `/learn` 커맨드(디렉토리/URL/직전 대화를 소스로 지정해 자동으로 `SKILL.md` 생성), `/journey` 커맨드(스킬·메모리 타임라인 열람/편집/삭제) — 2차 출처, WebSearch 스니펫 기준
- [GitHub — NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution) — DSPy + GEPA(Genetic-Pareto, ICLR 2026 Oral)
  기반 스킬/프롬프트/코드 진화적 최적화. 실행 트레이스 수집 → 반성적 실패 분석 → 실패 모드당 10~20개 변이 생성 → 다목적(성공률×토큰효율×속도) Pareto 평가 → PR 리뷰 게이트,
  러닝당 약 $2~10 비용 — 코어 저장소와 분리된 별도 애드온이라는 점에 유의(WebSearch 스니펫 기준, 원문은 브라우저로 재확인 권장)
- [Security Boulevard — 8 Self-Evolving Skills Hermes Agent Writes on Its Own](https://securityboulevard.com/2026/06/8-self-evolving-skills-hermes-agent-writes-on-its-own/) —
  자기수정형 스킬의 보안 리스크 3계열: 자격증명 응고(credential hardening), 스킬 위장 prompt injection, `.env`/SSH 키 유출 경로화 — 2차 출처

## 보안 감사 / CVE

- 독립 보안 감사(연구자 @Anic888, 2026-04-11) — 기본 설정 기준 Critical 4건 + High 9건: 무제한 셸 실행, 컨테이너 승인 우회, 지속적인 skill-injection 벡터
- `CVE-2026-7396` — WeChat 플랫폼 어댑터 path traversal
- `CVE-2026-48710` — Starlette "BadHost" 이슈, Starlette ≥1.0.1 고정 + SSRF 하드닝/subprocess 자격증명 스트리핑으로 대응
- Repello AI, Cloud Security Alliance — Hermes Agent/에이전트형 도구 CVE 분석 및 위협모델링 글 (2차 출처, 원문은 브라우저로 재확인 권장)

## OpenClaw (비교 대상)

- [GitHub — openclaw/openclaw](https://github.com/openclaw/openclaw) — MIT, Node 24/pnpm, TypeScript
- Wikipedia — OpenClaw 항목(연혁: Warelay(2025-11 최초 공개) → Moltbot(2026-01-27, 상표 이슈로 개명) → OpenClaw(3일 뒤 재개명))
- Fortune 지 보도 — Peter Steinberger의 프로젝트 배경, 2026-02-14 OpenAI 합류 및 OpenClaw Foundation 이관
- `senior-openclaw-interview` 트랙 — OpenClaw 자체의 심층 아키텍처는 별도 트랙에서 다룬다(이 트랙에서는 Day 12 비교 관점 위주)

## 일반 에이전트 하네스 배경 지식 (원리 보강용)

- `senior-ai-harness-interview` 트랙의 RESOURCES.md — Agent = Model + Harness, agent loop, provider abstraction, MCP, 샌드박싱, 관측성 등 provider-agnostic 원리를 먼저 다진다
- [Model Context Protocol 공식 스펙](https://modelcontextprotocol.io/specification/2025-11-25) — Hermes Agent가 채택한 MCP의 표준 스펙
- [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html) — 샌드박싱/권한/prompt injection 방어 원리

## 사용 시 주의사항

- Hermes Agent 관련 콘텐츠는 대부분 튜토리얼/비교 블로그(Composio, Flowtivity, MindStudio, The New Stack, innFactory 등)이며, "10년차 개발자 인터뷰 준비" 목적의 큐레이션 자료는 존재하지 않는다. 이 트랙의 인터뷰 질문·모범답안은 공식 아키텍처 문서와 공개 보안 사례를 근거로 **새로 구성한 것**이며, 실제 면접 전 공식 문서로 세부 사항을 재확인해야 한다.
- `anthropic.com`, GitHub 등 다수의 공식/블로그 도메인이 자동화 접근(WebFetch)에 403을 반환하는 경우가 있다. 이 경우 검색 스니펫과 다수의 독립적인 2차 출처로 교차 검증한 뒤 사용하고, 정확한 인용이 필요하면 실제 브라우저로 원문을 재확인한다.
- 이 트랙에 등장하는 버전 번호(v0.18.0 등), star 수, CVE 대응 상태는 레슨 작성 시점(2026-07) 기준이며 빠르게 바뀔 수 있다.
- "Hermes"라는 이름은 Nous Research의 이전 LLM 파인튜닝 체크포인트 시리즈, 명품 브랜드 Hermès, Hermes JS 엔진과 검색 결과가 섞이기 쉽다. 자료를 찾을 때 항상 "Nous Research hermes-agent" 또는 저장소 URL로 교차 확인한다.
