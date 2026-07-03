# LangChain / LangGraph Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | LangChain·LangGraph 기반 Agent 설계/운영 프레임워크 | [0001-langchain-langgraph-agent-architecture-framework.html](lessons/0001-langchain-langgraph-agent-architecture-framework.html) |
| 2 | 2026-07-03 | Model / Tool / Message abstraction | [0002-langchain-model-tool-message-abstraction.html](lessons/0002-langchain-model-tool-message-abstraction.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 3 | Middleware 아키텍처 | `before_model`/`after_model`/`wrap_model_call`/`wrap_tool_call`/`before_agent`/`after_agent`, built-in middleware, custom middleware 설계 |
| 4 | Structured Output과 Streaming | `with_structured_output`, streaming mode(values/updates/messages/custom), 지연시간 vs UX trade-off |
| 5 | Retrieval과 Memory | RAG 통합 지점, short-term vs long-term memory, memory 설계가 agent 품질에 미치는 영향 |
| 6 | Guardrails와 Context Engineering | context window 예산 관리, prompt injection 방어, tool scoping, context 압축/요약 middleware |
| 7 | LangGraph StateGraph 설계 | node/edge, conditional edge, state schema(TypedDict/Pydantic), reducer |
| 8 | Persistence와 Checkpointer | MemorySaver/SqliteSaver/PostgresSaver, thread-scoped state, time travel/replay |
| 9 | Store, Interrupt, Human-in-the-loop | 장기 메모리용 Store vs 세션용 Checkpointer, `interrupt()`, 승인 게이트 설계 |
| 10 | Subgraph와 Multi-agent 설계 | subgraph 합성, supervisor/swarm/handoff 패턴, 상태 격리 |
| 11 | Fault Tolerance와 Retry | durable execution, 재시도 전략, 부분 실패 복구, idempotency |
| 12 | LangSmith Tracing과 Evaluation | offline/online eval, LLM-as-judge, dataset 설계, production drift 탐지 |
| 13 | 배포(Deployment) | LangGraph Platform/Server, 배포 옵션, 스케일링, 버전 관리 |
| 14 | 운영 장애 대응과 비용/성능 트레이드오프 | 프로덕션 장애 사례, 비용 최적화, 모델/아키텍처 트레이드오프 종합 |

## 현재 학습 위치

**Day 2 완료** — 다음: Day 3 — Middleware 아키텍처

## 습득한 핵심 개념

- [x] Agent = model + harness 개념 (Day 1)
- [x] `create_agent` vs `StateGraph` 선택 기준 (Day 1)
- [x] AgentExecutor deprecation과 마이그레이션 판단 (Day 1)
- [x] ChatModel/Message 표준화(content_blocks)와 provider 독립성 (Day 2)
- [x] Tool 정의(`@tool`, docstring/타입 힌트가 곧 스펙)와 `ToolRuntime` 실행 컨텍스트 주입 (Day 2)
- [x] Tool error handling 원칙과 `handle_tool_errors` 기본값 변경 운영 리스크 (Day 2)
- [ ] Middleware 아키텍처 (예정 Day 3)
- [ ] Structured Output / Streaming (예정 Day 4)
- [ ] Retrieval / Memory 설계 (예정 Day 5)
- [ ] Guardrails / Context Engineering (예정 Day 6)
- [ ] StateGraph 설계(node/edge/reducer) (예정 Day 7)
- [ ] Checkpointer / Persistence (예정 Day 8)
- [ ] Store / Interrupt / Human-in-the-loop (예정 Day 9)
- [ ] Subgraph / Multi-agent (예정 Day 10)
- [ ] Fault Tolerance / Retry (예정 Day 11)
- [ ] LangSmith Tracing / Evaluation (예정 Day 12)
- [ ] 배포 전략 (예정 Day 13)
- [ ] 운영 장애 대응 / 비용·성능 trade-off (예정 Day 14)
