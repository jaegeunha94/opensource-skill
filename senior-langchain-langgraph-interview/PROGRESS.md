# LangChain / LangGraph Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | LangChain·LangGraph 기반 Agent 설계/운영 프레임워크 | [0001-langchain-langgraph-agent-architecture-framework.html](lessons/0001-langchain-langgraph-agent-architecture-framework.html) |
| 2 | 2026-07-03 | Model / Tool / Message abstraction | [0002-langchain-model-tool-message-abstraction.html](lessons/0002-langchain-model-tool-message-abstraction.html) |
| 3 | 2026-07-04 | Middleware 아키텍처 | [0003-langchain-middleware-architecture.html](lessons/0003-langchain-middleware-architecture.html) |
| 4 | 2026-07-05 | Structured Output과 Streaming | [0004-langchain-structured-output-streaming.html](lessons/0004-langchain-structured-output-streaming.html) |
| 5 | 2026-07-06 | Retrieval과 Memory | [0005-langchain-retrieval-memory.html](lessons/0005-langchain-retrieval-memory.html) |
| 6 | 2026-07-07 | Guardrails와 Context Engineering | [0006-langchain-guardrails-context-engineering.html](lessons/0006-langchain-guardrails-context-engineering.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 7 | LangGraph StateGraph 설계 | node/edge, conditional edge, state schema(TypedDict/Pydantic), reducer |
| 8 | Persistence와 Checkpointer | MemorySaver/SqliteSaver/PostgresSaver, thread-scoped state, time travel/replay |
| 9 | Store, Interrupt, Human-in-the-loop | 장기 메모리용 Store vs 세션용 Checkpointer, `interrupt()`, 승인 게이트 설계 |
| 10 | Subgraph와 Multi-agent 설계 | subgraph 합성, supervisor/swarm/handoff 패턴, 상태 격리 |
| 11 | Fault Tolerance와 Retry | durable execution, 재시도 전략, 부분 실패 복구, idempotency |
| 12 | LangSmith Tracing과 Evaluation | offline/online eval, LLM-as-judge, dataset 설계, production drift 탐지 |
| 13 | 배포(Deployment) | LangGraph Platform/Server, 배포 옵션, 스케일링, 버전 관리 |
| 14 | 운영 장애 대응과 비용/성능 트레이드오프 | 프로덕션 장애 사례, 비용 최적화, 모델/아키텍처 트레이드오프 종합 |

## 현재 학습 위치

**Day 6 완료** — 다음: Day 7 — LangGraph StateGraph 설계

## 습득한 핵심 개념

- [x] Agent = model + harness 개념 (Day 1)
- [x] `create_agent` vs `StateGraph` 선택 기준 (Day 1)
- [x] AgentExecutor deprecation과 마이그레이션 판단 (Day 1)
- [x] ChatModel/Message 표준화(content_blocks)와 provider 독립성 (Day 2)
- [x] Tool 정의(`@tool`, docstring/타입 힌트가 곧 스펙)와 `ToolRuntime` 실행 컨텍스트 주입 (Day 2)
- [x] Tool error handling 원칙과 `handle_tool_errors` 기본값 변경 운영 리스크 (Day 2)
- [x] 생명주기형(`before_agent`/`before_model`/`after_model`/`after_agent`) vs 감싸기형(`wrap_model_call`/`wrap_tool_call`) hook 구분 (Day 3)
- [x] 다중 middleware 실행 순서(onion 구조)와 등록 순서에 따른 실무 실패 사례 (Day 3)
- [x] `jump_to` 기반 제어 흐름과 built-in middleware 카탈로그(Summarization/HITL/PII/호출 제한/Fallback) (Day 3)
- [x] `ToolStrategy`/`ProviderStrategy`/`AutoStrategy` 구조화된 출력 전략과 전략 폴백 검증 습관 (Day 4)
- [x] 구조화된 출력 검증 실패 시 self-correction 재시도와 재시도 상한 설계 (Day 4)
- [x] `tool_choice` 강제와 extended thinking의 provider-level 충돌 (Day 4)
- [x] `stream_mode`(values/updates/messages/custom/debug) trade-off와 신규 event streaming(typed projection) 계층 (Day 4)
- [x] 구조화된 출력과 토큰 스트리밍의 충돌 및 혼합 렌더링 전략 (Day 4)
- [x] Retrieval = tool 패턴(create_retriever_tool)과 agentic RAG vs 그래프 노드 판단 기준 (Day 5)
- [x] Short-term memory(checkpointer, thread-scoped) vs long-term memory(Store, cross-thread) 구분 (Day 5)
- [x] Store의 semantic search와 recall/precision trade-off, 구버전 memory 클래스 deprecation (Day 5)
- [x] `SummarizationMiddleware` 기반 context 압박 관리와 checkpoint 직렬화 비용 인지 (Day 5)
- [x] 장기기억 쓰기 자동화의 설계 공백(직접 구현 vs LangMem) (Day 5)
- [x] `PIIMiddleware`의 타입별 인스턴스 분리, 적용 범위(input/output/tool_results) 기본값과 함정, 스트리밍 리댁션 (Day 6)
- [x] `LLMToolSelectorMiddleware`를 통한 tool scoping — 비용/혼동 완화이자 공격 표면 축소 장치 (Day 6)
- [x] `ToolCallLimitMiddleware`/`ModelCallLimitMiddleware`의 thread_limit vs run_limit, exit_behavior 트레이드오프 (Day 6)
- [x] Prompt injection의 3층 방어(입력 소독/행동 평가/환경적 봉쇄)와 LangChain core의 현재 공백 인지 (Day 6)
- [x] Context engineering — Anthropic(Right altitude/JIT/Compaction/Isolation) vs LangChain(Write/Select/Compress/Isolate) 프레임 비교 (Day 6)
- [ ] StateGraph 설계(node/edge/reducer) (예정 Day 7)
- [ ] Checkpointer / Persistence (예정 Day 8)
- [ ] Store / Interrupt / Human-in-the-loop (예정 Day 9)
- [ ] Subgraph / Multi-agent (예정 Day 10)
- [ ] Fault Tolerance / Retry (예정 Day 11)
- [ ] LangSmith Tracing / Evaluation (예정 Day 12)
- [ ] 배포 전략 (예정 Day 13)
- [ ] 운영 장애 대응 / 비용·성능 trade-off (예정 Day 14)
