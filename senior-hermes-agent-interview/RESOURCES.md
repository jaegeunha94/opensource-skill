# 학습 참고 자료

이 문서의 링크와 사실관계는 2026-07 기준 리서치 결과다. Hermes Agent는 2026-02에 공개된 신생 프로젝트로 변화가 매우 빠르므로, 새 Day를 만들 때마다 아래 공식 소스의 최신 상태를 다시 확인한다.

## 공식 소스 — Hermes Agent (Nous Research)

- [Hermes Agent 공식 문서](https://hermes-agent.nousresearch.com/docs/) — quickstart, CLI, configuration, messaging gateway, security, tools, skills, memory, MCP, cron, ACP, API server, architecture
- [GitHub — NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — MIT 라이선스, 최신 태그 v0.18.0 "The Judgment Release"(2026-07-01)
- Nous Research 공식 발표(2026-02-25) — "the self-improving AI agent... the only agent with a built-in learning loop"
- GitHub Issues — 의존성 deprecation 경고 사례(예: Issue #29322, `hermes update` 실행 시 `glob`/`inflight` deprecation, v0.14.0 기준 보고)

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
