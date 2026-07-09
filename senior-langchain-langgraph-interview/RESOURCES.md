# 학습 참고 자료

이 문서의 링크는 2026-07 기준 리서치 결과다. LangChain/LangGraph는 변화가 빠르므로, 레슨을 진행하며 새 Day를 만들 때마다 아래 공식 소스의 최신 상태를 다시 확인한다.

## 공식 문서

- [LangChain 공식 문서 (docs.langchain.com)](https://docs.langchain.com/) — `create_agent`, middleware, structured output, streaming 등 최신 API 레퍼런스
- [LangChain Python Reference](https://reference.langchain.com/python/langchain) — 클래스/함수 시그니처 원본 (예: `middleware`, `wrap_model_call`, `wrap_tool_call`)
- [LangGraph 공식 문서](https://docs.langchain.com/oss/python/langgraph/overview) — StateGraph, 그래프 API 개요
- [LangGraph Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api) — `add_node`/`add_edge`/`compile` 등 그래프 빌더 API
- [LangGraph Interrupts](https://docs.langchain.com/oss/python/langgraph/interrupts) — human-in-the-loop, interrupt 패턴
- [LangSmith Observability 문서](https://docs.langchain.com/langsmith/observability) — 트레이싱, 평가, 프로덕션 모니터링
- [LangSmith Changelog](https://docs.langchain.com/langsmith/changelog) — LangSmith 플랫폼 변경 이력

## Changelog / Release Notes / Deprecation

- [LangChain Changelog](https://changelog.langchain.com/) — LangChain/LangGraph 공지사항, GA 발표 등
- [LangGraph 1.0 GA 발표](https://changelog.langchain.com/announcements/langgraph-1-0-is-now-generally-available) — 1.0 정식 출시 및 안정성 약속
- [langchain-ai/langchain Releases (GitHub)](https://github.com/langchain-ai/langchain/releases) — 버전별 상세 변경 내역
- [langchain-ai/langgraph Releases (GitHub)](https://github.com/langchain-ai/langgraph/releases) — LangGraph 버전별 변경 내역, deprecation 공지
- [Tool node error handling disabled by default after 1.0.1 (GitHub Issue #6486)](https://github.com/langchain-ai/langgraph/issues/6486) — `langgraph-prebuilt` 패치 버전에서 `ToolNode` 에러 핸들링 기본값이 바뀐 사례. 패치 업그레이드도 회귀 테스트가 필요한 이유를 보여주는 실제 사례(Day 2 근거)
- [langchain-ai/langgraphjs Releases (GitHub)](https://github.com/langchain-ai/langgraphjs/releases) — JS/TS 버전 변경 이력(Python과 개념 비교용)
- [Custom Middleware 가이드](https://docs.langchain.com/oss/python/langchain/middleware/custom) — 커스텀 middleware 작성법
- [Prebuilt Middleware 목록](https://docs.langchain.com/oss/python/langchain/middleware/built-in) — HITL, summarization, PII redaction 등 내장 middleware
- [middleware | LangChain Python Reference](https://reference.langchain.com/python/langchain/middleware) — `AgentMiddleware` hook 시그니처(`before_agent`/`before_model`/`wrap_model_call`/`wrap_tool_call`/`after_model`/`after_agent`), 데코레이터, `JumpTo`/`hook_config` 원본 API(Day 3 근거, `docs.langchain.com` 403 차단 시 대체 소스로 사용)
- [langchain-ai/langchain — agents/middleware 소스 (GitHub)](https://github.com/langchain-ai/langchain/tree/master/libs/langchain_v1/langchain/agents/middleware) — `types.py`, `summarization.py`, `pii.py`, `tool_call_limit.py` 등 middleware 구현 원본. `docs.langchain.com`/`reference.langchain.com`이 막힐 때 `raw.githubusercontent.com`으로 직접 소스를 확인 가능(Day 3 근거)
- [How Middleware Lets You Customize Your Agent Harness — LangChain 공식 블로그](https://www.langchain.com/blog/how-middleware-lets-you-customize-your-agent-harness) — middleware가 서브클래싱을 대체한 설계 배경, 실행 순서(onion) 설명
- [Structured Output — LangChain 공식 문서](https://docs.langchain.com/oss/python/langchain/structured-output) — `response_format`, `ToolStrategy`/`ProviderStrategy`/`AutoStrategy` 개요(`docs.langchain.com` 403 차단 시 검색 요약과 아래 이슈로 보강, Day 4 근거)
- [structured_output | langchain | LangChain Reference](https://reference.langchain.com/python/langchain/agents/structured_output) — `ToolStrategy`의 `handle_errors`, 검증·재시도 동작 원본 시그니처(Day 4 근거)
- [Dynamic response_format with create_agent (GitHub Issue #34239)](https://github.com/langchain-ai/langchain/issues/34239) — `response_format`이 정적 스키마로 고정되는 현재 한계(Day 4 근거)
- [`response_format` hardcodes `tool_choice="any"`, breaking Anthropic thinking (GitHub Issue #35539)](https://github.com/langchain-ai/langchain/issues/35539) — `ToolStrategy`의 강제 tool_choice와 Claude extended thinking의 provider-level 충돌 실제 사례(Day 4 근거)
- [`ProviderStrategy` strict flag not exposed (GitHub Issue #34146)](https://github.com/langchain-ai/langchain/issues/34146) — `ProviderStrategy`가 OpenAI `strict: true` JSON schema를 완전히 노출하지 않는 현재 제약(Day 4 근거)
- [create_agent falls back to ToolStrategy for Gemini 3 (GitHub Issue #34463)](https://github.com/langchain-ai/langchain/issues/34463) — 요청한 전략과 실제 적용 전략이 다를 수 있다는 조용한 폴백 사례(Day 4 근거)
- [Streaming — LangChain 공식 문서](https://docs.langchain.com/oss/python/langchain/streaming) — `stream_mode`(values/updates/messages/custom/debug) 개요(`docs.langchain.com` 403 차단 시 검색 요약으로 보강, Day 4 근거)
- [langchain-ai/streaming-cookbook (GitHub)](https://github.com/langchain-ai/streaming-cookbook) — `astream_events(version="v3")` 기반 신규 event streaming/typed projection(content block, tool call 상관관계, lifecycle 채널) 원본 예제(Day 4 근거)
- [From Token Streams to Agent Streams — LangChain 공식 블로그](https://www.langchain.com/blog/token-streams-to-agent-streams) — event streaming 계층이 해결하려는 멀티 에이전트 UI 문제(Day 4 근거, `langchain.com` 403 차단 시 대체 소스로 검색 요약 사용)
- [RAG — LangChain 공식 문서](https://docs.langchain.com/oss/python/langchain/rag) — retriever를 tool로 감싸는 표준 패턴(`docs.langchain.com` 403 차단 시 검색 요약으로 보강, Day 5 근거)
- [Agentic RAG — LangGraph 공식 문서](https://docs.langchain.com/oss/python/langgraph/agentic-rag) — retrieval을 그래프 노드로 구성하는 대안 패턴(Day 5 근거)
- [Migrating Memory to LangGraph — 공식 마이그레이션 가이드](https://python.langchain.com/docs/versions/migrating_memory/) — `ConversationBufferMemory` 등 구버전 memory 클래스가 checkpointer/Store로 대체되는 근거 원문(Day 5 근거)
- [`ConversationBufferMemory` API Reference (deprecated)](https://python.langchain.com/api_reference/langchain/memory/langchain.memory.buffer.ConversationBufferMemory.html) — 0.3.1부터 deprecated 확인(Day 5 근거)
- [Short-term memory — LangChain 공식 문서](https://docs.langchain.com/oss/python/langchain/short-term-memory) — checkpointer 기반 thread-scoped memory 개요(`docs.langchain.com` 403 차단 시 검색 요약으로 보강, Day 5 근거)
- [Memory concepts — LangChain 공식 문서](https://docs.langchain.com/oss/python/concepts/memory) — short-term/long-term memory 개념 정의 원문(Day 5 근거)
- [Semantic Search for LangGraph's Long-Term Memory — 공식 changelog](https://changelog.langchain.com/announcements/semantic-search-for-langgraph-s-long-term-memory) — `BaseStore`의 임베딩 기반 semantic search 추가 공지(`changelog.langchain.com` 403 차단 시 대체 소스로 검색 요약 사용, Day 5 근거)
- [`summarization.py` — langchain_v1 middleware 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langchain/master/libs/langchain_v1/langchain/agents/middleware/summarization.py) — `SummarizationMiddleware`의 `trigger`/`keep`/`trim_tokens_to_summarize` 실제 시그니처 원본(Day 5 근거)
- [langchain-ai/langmem (GitHub)](https://github.com/langchain-ai/langmem) — `BaseStore` 위에 얹는 별도 메모리 관리 패키지, 1.x 코어 미흡수 확인(Day 5 근거)
- [Checkpoint serialization overhead — 85% storage / 38% token bloat (GitHub Issue langgraph#7714)](https://github.com/langchain-ai/langgraph/issues/7714) — 16턴 ReAct agent 기준 실측 오버헤드 수치, short-term memory 비용 근거(Day 5 근거)
- [Unclear whether all checkpointed history auto-injects into context (GitHub Issue langchain-ai/docs#2356)](https://github.com/langchain-ai/docs/issues/2356) — checkpointer 이력과 모델 context 주입 범위의 문서 불명확성 사례(Day 5 근거)
- [`pii.py` — langchain_v1 middleware 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langchain/master/libs/langchain_v1/langchain/agents/middleware/pii.py) — `PIIMiddleware`의 `pii_type`/`strategy`/`apply_to_input`/`apply_to_output`/`apply_to_tool_results` 실제 시그니처와 스트리밍 리댁션(`_PIIStreamTransformer`) 원본(Day 6 근거)
- [`tool_selection.py` — langchain_v1 middleware 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langchain/master/libs/langchain_v1/langchain/agents/middleware/tool_selection.py) — `LLMToolSelectorMiddleware`의 동적 구조화 출력 기반 tool 필터링 원본(Day 6 근거)
- [`tool_call_limit.py` — langchain_v1 middleware 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langchain/master/libs/langchain_v1/langchain/agents/middleware/tool_call_limit.py) — `ToolCallLimitMiddleware`의 `thread_limit`/`run_limit`/`exit_behavior` 원본(Day 6 근거)
- [`model_call_limit.py` — langchain_v1 middleware 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langchain/master/libs/langchain_v1/langchain/agents/middleware/model_call_limit.py) — `ModelCallLimitMiddleware`의 `exit_behavior`("end"/"error") 원본(Day 6 근거)
- [`human_in_the_loop.py` — langchain_v1 middleware 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langchain/master/libs/langchain_v1/langchain/agents/middleware/human_in_the_loop.py) — `HumanInTheLoopMiddleware`의 `interrupt_on`과 `langgraph.types.interrupt()` 호출 지점 원본(Day 6 근거, Day 9 심화 예정)
- [Stacking multiple PIIMiddleware causes GraphRecursionError (GitHub Issue langchain#33740)](https://github.com/langchain-ai/langchain/issues/33740) — PIIMiddleware 다중 인스턴스 시 recursion limit 도달 실제 사례(Day 6 근거)
- [PIIMiddleware custom detector raises KeyError on mask/hash (GitHub Issue langchain#35647)](https://github.com/langchain-ai/langchain/issues/35647) — 커스텀 detector 반환 형태 불일치 시 실패 사례(Day 6 근거)
- [LLMToolSelectorMiddleware selects a tool not in the provided list (GitHub Issue langchain#33651)](https://github.com/langchain-ai/langchain/issues/33651) — selector가 존재하지 않는 tool을 고르는 버그 사례(Day 6 근거)
- [Disable streaming for LLMToolSelectorMiddleware's internal call (GitHub Issue langchain#34139)](https://github.com/langchain-ai/langchain/issues/34139) — selector 내부 LLM 호출이 기본적으로 UI에 함께 스트리밍되는 문제(Day 6 근거)
- [Built-in Middleware for Recursion limit fallback (GitHub Issue langchain#33653)](https://github.com/langchain-ai/langchain/issues/33653) — `exit_behavior="end"`의 급작스러운 종료 UX 문제와 폴백 제안(Day 6 근거)
- [Enable Messages PII Anonymization through External APIs (GitHub Issue langchain#34955)](https://github.com/langchain-ai/langchain/issues/34955) — Presidio 등 외부 anonymization 서비스와 PIIMiddleware 구조 불일치(Day 6 근거)
- [Design partner: middleware to harden Agent/Tool calls against prompt injection (GitHub Issue langchain#35007)](https://github.com/langchain-ai/langchain/issues/35007) — LangChain core에 아직 prompt injection 전용 middleware가 없다는 공백을 보여주는 커뮤니티 제안(Day 6 근거)
- [Mitigating the risk of prompt injections in browser use — Anthropic](https://www.anthropic.com/research/prompt-injection-defenses) — 입력 계층 probe·출력 계층 classifier 기반 3층 방어 전략(Day 6 근거)
- [Mitigate jailbreaks and prompt injections — Claude Platform Docs](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) — 일반 guardrail 권고(Day 6 근거)
- [Rebuff: Detecting Prompt Injection Attacks — LangChain 공식 블로그](https://blog.langchain.com/rebuff/) — 1.x middleware 이전 시대의 휴리스틱+LLM+벡터DB+canary token 접근(Day 6 근거, 개념 참고용)
- [Effective context engineering for AI agents — Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — right altitude, JIT context, compaction, sub-agent isolation 프레임(Day 6 근거)
- [Context Engineering for Agents — LangChain 공식 블로그](https://www.langchain.com/blog/context-engineering-for-agents) — Write/Select/Compress/Isolate 4대 전략(Day 6 근거)
- [Deep Agents — Context Engineering 공식 문서](https://docs.langchain.com/oss/python/deepagents/context-engineering) — 20,000토큰 초과 시 자동 오프로딩, 85% 한도 도달 시 자동 요약, compaction vs summarization 구분의 구체 구현(Day 6 근거)
- [Postmortem: How a LangGraph Multi-Agent Bug Broke a 2026 Customer Support Bot (dev.to)](https://dev.to/johalputt/postmortem-how-a-langgraph-01-multi-agent-bug-broke-our-2026-customer-support-bot-37pp) — context 한도 초과와 무분별한 재시도로 인한 실제 장애 사례(Day 6 근거, 개인 개발 블로그로 출처 신뢰도 낮음에 유의)
- [SubAgentMiddleware does not propagate recursion_limit (GitHub Issue langchain-ai/deepagents#1698)](https://github.com/langchain-ai/deepagents/issues/1698) — sub-agent가 부모의 recursion_limit을 물려받지 못해 기본 25 스텝에서 예상치 못하게 실패하는 사례(Day 6 근거)
- [LangChain/LangGraph 1.0 공식 발표](https://www.langchain.com/blog/langchain-langgraph-1dot0) — `AgentExecutor`/`LLMChain`/`ConversationBufferMemory` 등이 `langchain-classic` 패키지로 분리되고 2.0 전까지 breaking change 없음을 약속한 공지(Day 6 근거)
- [`graph/state.py` — langgraph 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/langgraph/langgraph/graph/state.py) — `StateGraph` 생성자(`state_schema`/`context_schema`/`input_schema`/`output_schema`), `add_node`/`add_edge`/`add_conditional_edges`/`compile` 실제 시그니처와 deprecated 인자(`config_schema`/`input`/`output`/`retry`) 원본(Day 7 근거)
- [`graph/message.py` — langgraph 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/langgraph/langgraph/graph/message.py) — `add_messages` reducer의 id 기반 병합과 `format="langchain-openai"` 옵션 원본(Day 7 근거)
- [`types.py` — langgraph 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/langgraph/langgraph/types.py) — `Command`/`Send`/`Overwrite`/`Runtime` 정의 원본(Day 7 근거)
- [`errors.py` — langgraph 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/langgraph/langgraph/errors.py) — `InvalidUpdateError`/`ErrorCode.INVALID_CONCURRENT_GRAPH_UPDATE` 원본(Day 7 근거)
- [`channels/binop.py` — langgraph 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/langgraph/langgraph/channels/binop.py) — `BinaryOperatorAggregate`의 fold 동작과 `Overwrite` 충돌 처리 원본(Day 7 근거)
- [`channels/last_value.py` — langgraph 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/langgraph/langgraph/channels/last_value.py) — `LastValue` 채널이 스텝당 값 하나만 허용하는 원본 동작(Day 7 근거)
- [`libs/langgraph/pyproject.toml` — 버전 확인 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/langgraph/pyproject.toml) — `main` 브랜치 기준 LangGraph 1.2.8 버전 확인(Day 7 근거)
- [Parallel subgraphs writing shared unreduced key raise InvalidUpdateError (GitHub Issue langgraph#6446, #7099, #2336)](https://github.com/langchain-ai/langgraph/issues/6446) — reducer 없이 병렬 노드가 같은 키에 쓸 때 재현되는 실제 사례(Day 7 근거)
- [`todos` field INVALID_CONCURRENT_GRAPH_UPDATE fixed via operator.add (GitHub Issue deepagents#96)](https://github.com/langchain-ai/deepagents/issues/96) — reducer 누락 수정 사례(Day 7 근거)
- [Command(goto=...) breaks with ParentCommand error at 3+ nested subgraph levels (GitHub Issue langgraph#6409)](https://github.com/langchain-ai/langgraph/issues/6409) — 깊은 subgraph 중첩에서 `Command` 라우팅 실패 사례(Day 7 근거)
- [defer=True + Command + conditional edges produces broken graph (GitHub Issue langgraph#5182)](https://github.com/langchain-ai/langgraph/issues/5182) — `defer` 옵션과 `Command` 조합 문제(Day 7 근거)
- [Possible regression: agent loops until recursion limit on 1.0.6 (GitHub Issue langgraph#6731)](https://github.com/langchain-ai/langgraph/issues/6731) — 버전 간 recursion 관련 회귀 의심 사례(Day 7 근거, 2차 서술)
- [recursionLimit silently reset during config merge (GitHub Issue langgraph#7313)](https://github.com/langchain-ai/langgraph/issues/7313) — 명시적으로 올린 `recursion_limit`이 조용히 리셋되는 사례(Day 7 근거, 2차 서술)
- [Pydantic state schema validation surprises / unhelpful traceback (GitHub Issue langgraph#1977, #1978, #4060, #2555, #6401, #2804)](https://github.com/langchain-ai/langgraph/issues/1977) — Pydantic state schema의 alias 무시·generic 검증·불친절한 traceback 사례 모음(Day 7 근거)
- [`checkpoint/base/__init__.py` — langgraph-checkpoint 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/checkpoint/langgraph/checkpoint/base/__init__.py) — `BaseCheckpointSaver` 추상 메서드(`get_tuple`/`list`/`put`/`put_writes`/`delete_thread`/`delete_for_runs`/`copy_thread`/`prune`)와 `Checkpoint`(`v`/`id`/`ts`/`channel_values`/`channel_versions`/`versions_seen`/`updated_channels`) 구조 원본 — 풀 스냅샷 저장 모델의 1차 근거(Day 8 근거)
- [`checkpoint/memory/__init__.py` — langgraph-checkpoint 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/checkpoint/langgraph/checkpoint/memory/__init__.py) — `InMemorySaver`가 정식 이름이고 `MemorySaver`는 하위 호환 별칭(`MemorySaver = InMemorySaver`)이라는 것, "프로덕션에는 PostgresSaver 권장" docstring 원본(Day 8 근거)
- [`checkpoint-sqlite/__init__.py` — langgraph-checkpoint-sqlite 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/checkpoint-sqlite/langgraph/checkpoint/sqlite/__init__.py) — `SqliteSaver`가 동기 전용이며 "다중 스레드로 스케일되지 않는다"는 docstring, `setup()`/WAL 모드 원본(Day 8 근거)
- [`checkpoint-sqlite/aio.py` — langgraph-checkpoint-sqlite 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/checkpoint-sqlite/langgraph/checkpoint/sqlite/aio.py) — `AsyncSqliteSaver`가 "SQLite 쓰기 성능 한계로 프로덕션 비권장"이라고 명시한 docstring 원본(Day 8 근거)
- [`checkpoint-postgres/__init__.py` — langgraph-checkpoint-postgres 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/checkpoint-postgres/langgraph/checkpoint/postgres/__init__.py) — `PostgresSaver`의 `setup()`이 "반드시 사용자가 직접 호출해야 한다"는 docstring, `ConnectionPool`/pipeline 모드 제약 원본(Day 8 근거)
- [`checkpoint-postgres/shallow.py` — langgraph-checkpoint-postgres 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/checkpoint-postgres/langgraph/checkpoint/postgres/shallow.py) — `ShallowPostgresSaver`가 버전 2.0.20부터 deprecated되고 `PostgresSaver` + `durability="exit"`로 대체됐다는 docstring 원본 — `durability` 파라미터의 실제 용도를 뒷받침하는 결정적 근거(Day 8 근거)
- [`langgraph/types.py` — langgraph 소스 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/langgraph/langgraph/types.py) — `Durability = Literal["sync", "async", "exit"]`, `StateSnapshot`/`Send`/`Command`/`Interrupt` 정의 원본(Day 8 근거)
- [`langgraph/pregel/main.py` — langgraph 소스 (GitHub raw, 부분 확인)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/langgraph/langgraph/pregel/main.py) — `get_state`/`get_state_history`/`update_state` 시그니처와 `update_state`의 "as_node가 반환한 것처럼" docstring 원본. 파일 크기 때문에 `stream`의 `durability` 파라미터 docstring 전문은 확인하지 못함(재요청 시 429) — `types.py`와 `shallow.py`로 교차 확인(Day 8 근거, 부분 1차)
- [`libs/checkpoint/pyproject.toml`, `libs/checkpoint-sqlite/pyproject.toml`, `libs/checkpoint-postgres/pyproject.toml` — 버전 확인 (GitHub raw)](https://raw.githubusercontent.com/langchain-ai/langgraph/main/libs/checkpoint/pyproject.toml) — `main` 브랜치 기준 `langgraph-checkpoint` 4.1.1 / `langgraph-checkpoint-sqlite` 3.1.0 / `langgraph-checkpoint-postgres` 3.1.0 확인(Day 8 근거)
- [Checkpoint serialization produces 85% storage / 38% token bloat (GitHub Issue langgraph#7714)](https://github.com/langchain-ai/langgraph/issues/7714) — 16턴 ReAct 에이전트(메시지 65개) 기준 `dumpd()` 기반 Pydantic 풀 메타데이터 직렬화로 인한 실측 오버헤드 수치, 체크포인트가 diff가 아닌 풀 스냅샷이라는 저장 모델의 비용 근거(Day 5에 이어 Day 8에서 재사용)
- [Time travel then invoke, checkpoint id no longer updates (GitHub Issue langgraph#4987)](https://github.com/langchain-ai/langgraph/issues/4987) — 과거 체크포인트 재실행 시 checkpoint id가 재사용되며 히스토리 조회가 꼬이는 edge case 보고, 연결 PR(#5591) 존재까지만 확인(최종 반영 여부는 미확인, 2차 근거)(Day 8 근거)
- [AsyncPostgresSaver enforces instance-level threading.Lock() during asynchronous execution (GitHub Issue langgraph#7259)](https://github.com/langchain-ai/langgraph/issues/7259) — GKE+Cloud SQL 환경 500명 동시 사용자 부하 테스트에서 락 유무에 따라 처리량 6.5배 차이(199.90 req/s vs 1295.10 req/s)가 났다는 제보자 실측 수치, 근본 원인 진단은 메인테이너 미확인(2차 근거)(Day 8 근거)
- [PostgresSaver: Message history not loaded from checkpoints (GitHub Issue langgraph#6125)](https://github.com/langchain-ai/langgraph/issues/6125) — PostgresSaver에서 일부 메시지가 체크포인트 조회 시 누락되는 열린 이슈, 원인 미확정(2차 근거, 참고용으로만 인지)(Day 8 근거)
- [Mitigating Checkpoint Collisions & Write-Skew in LangGraph (azguards.com)](https://azguards.com/distributed-systems/mitigating-checkpoint-collisions-write-skew-in-langgraph/) — 동일 `thread_id`에 대한 동시 쓰기가 만드는 체크포인트 충돌/write-skew 개념 설명(커뮤니티 블로그로 신뢰도 낮음에 유의, 개념 참고용)(Day 8 근거)

## 아키텍처 딥다이브 / 엔지니어링 블로그

- [Agent Middleware — LangChain 공식 블로그](https://blog.langchain.com/agent-middleware/) — middleware 아키텍처 설계 배경과 이유
- [LangChain 1 Deep Dive: Agent Protocol + Runtime 2026](https://www.digitalapplied.com/blog/langchain-1-deep-dive-agent-protocol-runtime-2026) — 1.0 아키텍처 심층 분석
- [Architecting Human-in-the-Loop Agents (Medium)](https://medium.com/data-science-collective/architecting-human-in-the-loop-agents-interrupts-persistence-and-state-management-in-langgraph-fa36c9663d6f) — interrupt/checkpointer 실전 패턴
- [LangGraph State Management: Checkpoints, Thread State, Failure Recovery](https://eastondev.com/blog/en/posts/ai/20260424-langgraph-agent-architecture/) — 상태 복구 아키텍처
- [LangGraph in Production (Kalvium Labs)](https://www.kalviumlabs.ai/blog/langgraph-in-production-stateful-multi-step-agents/) — 프로덕션 운영 패턴
- [State of Agent Engineering — LangChain](https://www.langchain.com/state-of-agent-engineering) — 업계 설문 기반 observability/eval 도입률 데이터
- [Agent Observability 2026: Evals, Traces, Cost Guide](https://www.digitalapplied.com/blog/agent-observability-2026-evals-traces-cost-guide) — 관측성/평가/비용 가이드

## 인터뷰 준비

- [LangChain Interview Questions: Real Production Probes (2026)](https://interviewbaba.com/langchain-interview-questions/) — production 관점 인터뷰 질문 모음
- [LangChain Deployed Engineer Interview Guide (Exponent)](https://www.tryexponent.com/guides/langchain-deployed-engineer-interview) — 실무 배치 엔지니어 인터뷰 샘플

## 도서 (일반 LLM 애플리케이션 아키텍처)

- **Designing Data-Intensive Applications** (Martin Kleppmann) — 상태/일관성/장애 복구를 시스템 관점에서 이해하기 위한 배경 지식
- **Building LLM Applications** 계열 최신 오라일리/공식 가이드 (레슨 진행 중 구체 도서는 최신 목록으로 갱신)

## 국내 자료

- 국내 기술 블로그(우아한형제들, 카카오, 라인, 토스 등)의 LLM 에이전트/RAG 운영 사례는 Day가 진행되며 주제에 맞게 개별 레슨에서 추가 조사하여 반영한다.

## 사용 시 주의사항

- LangChain/LangGraph 문서 사이트(`docs.langchain.com`, `deepwiki.com` 등) 일부는 자동화 접근을 차단(403)할 수 있다. 이 경우 GitHub Reference(`reference.langchain.com`), 공식 블로그, 또는 검색 결과에 요약된 내용을 근거로 삼고, 레슨에는 실제로 확인 가능했던 소스만 인용한다.
- 각 레슨은 작성 시점의 최신 버전을 기준으로 하되, 버전 번호(예: LangChain 1.3.x, LangGraph 1.2.x)는 빠르게 바뀔 수 있으므로 학습자는 실제 면접 전 공식 changelog로 최종 확인해야 한다.
