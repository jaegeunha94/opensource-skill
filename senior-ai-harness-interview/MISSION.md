# AI Harness / Agent Harness — 10년차 이상 개발자 Interview 대비

## 학습 목표

10년차 이상 백엔드/AI 애플리케이션 개발자 인터뷰에서 평가하는 **AI Harness / Agent Harness** 설계·운영 역량을 체계적으로 준비한다.

이 트랙은 특정 프레임워크(LangChain/LangGraph는 별도 트랙 `senior-langchain-langgraph-interview`에서 다룬다) 문법 암기가 아니라, **모델을 감싸서 실제로 동작하는 agent 시스템을 만드는 "하네스(harness)" 레이어** — 즉 provider를 넘나드는 공통 원리를 다룬다. 면접관이 실제로 보는 수준인:

- **아키텍처 판단력**: "Agent = Model + Harness"라는 프레임으로, model/tool/runtime의 경계를 구분하고 어디까지 프레임워크(Claude Agent SDK, OpenAI Agents SDK 등)에 맡기고 어디부터 직접 설계할지 판단하는 능력
- **제어 흐름 설계**: agent loop(gather context → take action → verify → repeat), 종료 조건, 무한 루프 방지, human-in-the-loop 개입 지점 설계
- **운영 안정성**: 샌드박스 격리, 권한 스코핑, guardrail, prompt injection 방어, 장애 시 진단·복구
- **평가/관측성**: telemetry/tracing(OpenTelemetry GenAI semantic conventions), 평가 하네스(eval harness), trajectory 평가, replay/regression
- **비용/성능 trade-off**: prompt caching, context compaction, model routing, streaming, multi-agent 비용 구조
- **최신 생태계 판단력**: Model Context Protocol(MCP), provider 간 추상화, 빠르게 바뀌는 SDK/스펙을 스스로 추적하는 능력

을 면접 현장에서 구조적으로 설명할 수 있도록 훈련한다.

## 전제 지식

- LLM API(Anthropic/OpenAI 등) 호출 및 기본적인 tool calling 경험
- 백엔드 서비스 설계, 동시성, 분산 시스템에 대한 일반적인 이해
- LangChain/LangGraph 세부 문법은 이 트랙의 범위가 아니다 — 필요하면 별도 트랙을 참고한다
- 특정 SDK의 세부 API를 몰라도 무방하다 — 이 트랙은 **원리와 아키텍처 판단력**을 중심으로 진행하며, 필요한 API는 그때그때 전제 개념부터 설명한다

## 최신성에 대한 중요 안내

AI Harness / Agent Harness 분야는 2025~2026년에 걸쳐 **용어와 표준 자체가 막 자리를 잡아가는 중**이다. 이 트랙은 레슨 생성 시점(2026-07) 기준 공식 문서·changelog·deprecation 공지·production 사례를 조사해 작성되며, 아래 변화를 전제로 진행한다.

- **"Harness Engineering"이라는 용어가 2026년 초 공식적으로 이름 붙었다.** Martin Fowler와 Thoughtworks의 Birgitta Böckeler가 "AI agent에서 모델을 제외한 모든 것"(tool, 권한, 상태 저장, 테스트, 로그/관측성, guardrail, 복구 메커니즘)을 가리키는 용어로 정리했다. "LLM은 agent 시스템에서 가장 작은 부분"이라는 프레임이 업계 표준 사고방식으로 자리잡고 있다.
- **Claude Agent SDK**(구 Claude Code SDK)는 "gather context → take action → verify → repeat"라는 명시적 agent loop를 공식 아키텍처로 문서화했고, 서브에이전트(Task tool), 권한 모드, hooks, OS 레벨 샌드박스(bubblewrap/Seatbelt), OTel 기반 관측성을 기본 제공한다.
- **OpenAI Assistants API는 2026-08-26에 완전히 종료(sunset)된다.** 대체 표준은 **Responses API + Agents SDK**이며, 자동 마이그레이션 도구는 제공되지 않는다. Agents SDK는 handoff(모델에게는 tool처럼 보이는 제어권 이전), guardrail(tripwire 방식), session(memory 계층), 내장 tracing을 표준 구성요소로 정의한다.
- **Model Context Protocol(MCP)**은 Anthropic 단독 프로토콜에서 **Linux Foundation 산하 Agentic AI Foundation(AAIF)**으로 이관되어 업계 공용 인프라가 되었다. 2025-11-25 스펙이 최근 안정 버전이며, **2026-07-28에 발행 예정인 대규모 개정판(RC 단계)**은 세션 없는 stateless 프로토콜 전환, Sampling/Roots/Logging primitive의 공식 deprecation, MCP Apps(UI 확장), Tasks 승격 등 큰 변화를 포함한다.
- **OpenTelemetry GenAI semantic conventions**는 아직 "Development"(experimental보다 앞선 pre-stable) 단계로, `gen_ai.system` → `gen_ai.provider.name` 같은 breaking rename이 이미 있었다. 별도 저장소(`semantic-conventions-genai`)로 분리되는 등 계속 유동적이다.
- **OpenAI는 자체 hosted Evals/Agent Builder 제품을 2026-06-03에 단종 발표**(2026-11-30 완전 종료)했다. 이는 "벤더 종속적인 평가 도구보다 OTel/trace 기반의 프레임워크 독립적인 평가 인프라가 더 오래간다"는 업계 교훈을 보여주는 최신 사례다.

커리큘럼 진행 중 위 내용과 상충하는 최신 근거(공식 문서, changelog, deprecation 공지, 신뢰할 수 있는 production 사례)가 발견되면, 목록에 있는 최소 기준보다 **최신 근거를 우선**하여 커리큘럼과 예시를 조정한다.

## 커리큘럼 개요 (총 14 Day)

| Day | 주제 | 핵심 개념 |
|-----|------|-----------|
| 1 | AI Harness와 Agent Runtime 설계/운영 프레임워크 | Agent = Model + Harness, harness engineering, agent loop(gather-act-verify), Claude Agent SDK vs OpenAI Agents SDK, build vs framework 판단 |
| 2 | Model/Tool/Runtime 경계와 Provider 추상화 | tool calling 스키마 표준화, provider abstraction layer, tool 설계 원칙(Vercel 80% 도구 삭감 사례), tool error handling |
| 3 | Prompt/Context/Memory Scaffolding | context window 예산, context rot, context poisoning, compaction(서버사이드/Claude Code auto-compact), session/memory 설계 |
| 4 | Control-Flow Scaffolding과 루프 안정성 | ReAct 루프, step cap/budget cap/repeated-state detection, 종료 조건 설계, circuit breaker |
| 5 | Guardrail과 Prompt Injection 방어 | lethal trifecta, input/output/tool guardrail, tripwire, defense-in-depth, OWASP Agentic Top 10 |
| 6 | Sandboxed Workspace Execution과 권한 스코핑 | OS 레벨 샌드박스(bubblewrap/Seatbelt), hosted code execution, E2B/Daytona, least-privilege 권한 설계 |
| 7 | Model Context Protocol(MCP) | tools/resources/prompts/sampling, stdio/streamable HTTP, stateless 전환(2026-07-28), 거버넌스(AAIF) |
| 8 | Handoff와 Multi-Agent Coordination | orchestrator-worker, manager(agents-as-tools) vs handoff 패턴, 토큰 비용 구조(15x), multi-agent를 쓰지 말아야 할 때 |
| 9 | Streaming과 Structured Output | SSE 스트리밍, fine-grained tool streaming, 지연시간 vs UX trade-off, structured output 설계 |
| 10 | Telemetry, Tracing, Observability | OTel GenAI semantic conventions, span 계층(interaction/llm_request/tool), 분산 트레이싱, 벤더별 관측성 통합 |
| 11 | Evaluation Harness와 Replay | task/trial/transcript/grader, trajectory 평가, LLM-as-judge 캘리브레이션, replay/regression 테스트 |
| 12 | Human-in-the-Loop과 Session/권한 설계 | 승인 게이트, approval binding, session 영속성, 권한 모드, 위험도 기반 개입 설계 |
| 13 | 비용/성능 최적화 | prompt caching, context compaction, model routing/tiering, batch 처리, cost-per-task 모니터링 |
| 14 | 운영 장애 대응과 종합 트레이드오프 | 런어웨이 루프/비용 폭주 사례, context poisoning 실전 대응, harness engineering 원칙 종합, 면접 종합 시뮬레이션 |

이 목록은 최소 기준이며, 진행 중 최신 인터뷰 트렌드나 공식 문서 변화에 따라 Day가 추가되거나 순서가 조정될 수 있다.

## 학습 원칙

1. 각 레슨은 **면접 질문 → 전제 개념 → 왜 면접에서 묻는가 → 실무 연결 → 답변 사고 순서 → 핵심 답변 예시 → senior-level follow-up → 좋은 답변 vs 약한 답변 → 흔한 오해 → 자기 점검 rubric** 순서로 진행한다.
2. 어려운 개념은 쉬운 한국어로 전제 개념부터 설명하고, 영어 기술 용어는 원어를 병기한다.
3. 특정 SDK 버전의 문법이 아니라 **"왜 이 harness 구조를 선택하는가"**를 항상 함께 설명한다. 버전/수치는 레슨 작성 시점(2026-07) 기준이며 실제 면접 전 공식 changelog로 재확인해야 한다.
4. Claude Agent SDK와 OpenAI Agents SDK를 대표 사례로 자주 쓰되, 항상 "provider-agnostic한 원리는 무엇인가"로 마무리한다.
5. 각 레슨 마지막에는 자기 점검 rubric으로 학습 수준을 확인한다.
