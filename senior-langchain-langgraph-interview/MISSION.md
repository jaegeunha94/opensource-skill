# LangChain / LangGraph — 10년차 이상 개발자 Interview 대비

## 학습 목표

10년차 이상 백엔드/AI 애플리케이션 개발자 인터뷰에서 평가하는 LangChain·LangGraph 역량을 체계적으로 준비한다.

단순 튜토리얼 따라하기("체인 만들어봤어요", "에이전트 데모 돌려봤어요")가 아니라, 면접관이 실제로 보는 수준인:

- **아키텍처 판단력**: 언제 `create_agent`(prebuilt harness)를 쓰고, 언제 `StateGraph`로 직접 그래프를 설계해야 하는지
- **상태/제어 흐름 설계**: state schema, node/edge, reducer, conditional routing, subgraph 설계 능력
- **운영 안정성**: checkpointer/store를 이용한 durability, fault tolerance, retry, human-in-the-loop 설계
- **평가/관측성**: LangSmith tracing, offline/online evaluation, production drift 탐지
- **비용/성능 trade-off**: context engineering, streaming, 모델 선택, 토큰 비용과 지연시간 사이의 의사결정
- **장애 대응 경험**: 프로덕션에서 agent가 무한루프에 빠지거나, tool call이 실패하거나, 상태가 깨졌을 때의 진단·복구 능력

을 면접 현장에서 구조적으로 설명할 수 있도록 훈련한다.

## 전제 지식

- LLM API(OpenAI/Anthropic 등) 호출 및 tool calling 기본 경험
- Python 동기/비동기 프로그래밍 기본기
- REST API 설계, 상태 관리, 분산 시스템에 대한 일반적인 이해
- LangChain/LangGraph의 세부 문법을 몰라도 무방하다 — 이 트랙은 **아키텍처 판단력**을 중심으로 진행하며, 필요한 API는 그때그때 전제 개념부터 설명한다.

## 최신성에 대한 중요 안내

LangChain과 LangGraph는 2025~2026년에 걸쳐 **API가 크게 재편**되었다. 이 트랙은 레슨 생성 시점(2026-07)의 공식 문서·changelog·마이그레이션 가이드를 기준으로 작성되며, 아래 변화를 전제로 진행한다.

- **LangChain 1.0 / LangGraph 1.0이 GA(정식 출시)** 되었고, 이후 마이너 업데이트(LangChain 1.3.x, LangGraph 1.2.x대)가 이어지고 있다. 1.0 이후에는 2.0 전까지 **breaking change 없는 안정성**을 공식 약속했다.
- 레거시 `AgentExecutor`(체인 기반 에이전트)는 더 이상 권장되지 않는다. 새로운 표준 진입점은 **`langchain.agents.create_agent`** 이며, 이는 내부적으로 **LangGraph 런타임 위에 컴파일된 그래프**로 동작한다.
- `langgraph.prebuilt.create_react_agent`의 기능은 `langchain.agents.create_agent`로 흡수·확장되었다(하위 호환은 유지되지만 신규 구현 시 새 API를 기준으로 학습한다).
- 에이전트 커스터마이징의 중심축이 **서브클래싱 → Middleware(`before_agent`/`before_model`/`wrap_model_call`/`wrap_tool_call`/`after_model`/`after_agent`)** 로 이동했다. supervisor, swarm, deep agent 같은 이전의 개별 아키텍처들도 middleware 조합으로 재현 가능해졌다.
- LangSmith는 단순 트레이싱 도구를 넘어 **evaluation + insights + 배포(Fleet)를 포함하는 "agent operations" 플랫폼**으로 확장되었다.

커리큘럼 진행 중 위 내용과 상충하는 최신 근거(공식 문서, changelog, deprecation 공지, 신뢰할 수 있는 production 사례)가 발견되면, 목록에 있는 최소 기준보다 **최신 근거를 우선**하여 커리큘럼과 예시를 조정한다.

## 커리큘럼 개요 (총 14 Day)

| Day | 주제 | 핵심 개념 |
|-----|------|-----------|
| 1 | LangChain·LangGraph 기반 Agent 설계/운영 프레임워크 | Agent = model + harness, `create_agent` vs `StateGraph`, AgentExecutor deprecation, 아키텍처 판단 기준 |
| 2 | Model / Tool / Message abstraction | ChatModel 인터페이스, tool calling, 구조화된 tool 정의, message 타입, tool error handling |
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

이 목록은 최소 기준이며, 진행 중 최신 인터뷰 트렌드나 공식 문서 변화에 따라 Day가 추가되거나 순서가 조정될 수 있다.

## 학습 원칙

1. 각 레슨은 **면접 질문 → 전제 개념 → 왜 면접에서 묻는가 → 실무 연결 → 답변 사고 순서 → 핵심 답변 예시 → senior-level follow-up → 좋은 답변 vs 약한 답변 → 흔한 오해 → 자기 점검 rubric** 순서로 진행한다.
2. 어려운 개념은 쉬운 한국어로 전제 개념부터 설명하고, 영어 기술 용어는 원어를 병기한다.
3. 모든 코드 예시는 레슨 작성 시점 기준 LangChain 1.x / LangGraph 1.x API를 따른다.
4. 단순 API 사용법이 아니라 **"왜 이 설계를 선택하는가"** 를 항상 함께 설명한다.
5. 각 레슨 마지막에는 자기 점검 rubric으로 학습 수준을 확인한다.
