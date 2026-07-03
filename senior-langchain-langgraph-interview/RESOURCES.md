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
