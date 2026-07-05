# 학습 참고 자료

> 이 파일은 2026-07 기준 조사 결과를 반영한다. 챗봇/LLM 분야는 변화가
> 빠르므로 레슨을 이어갈 때마다 공식 문서·changelog·production 사례를
> 다시 확인하고, 이 파일에 근거와 날짜를 갱신한다. 일부 출처는 직접
> fetch가 차단되어(403 등) 검색 스니펫 기반으로 정리했으며, 그런 항목은
> "확인 필요"로 표시했다. 실제 도입 전 원문을 다시 확인할 것.

## NLU / Dialogflow / Rasa / Lex — 공식 문서와 방향 전환

- [Google Dialogflow CX — Playbooks](https://cloud.google.com/dialogflow/cx/docs/concept/playbook) — 규칙 기반 Flow 대신 목표 지향 생성형 에이전트(Playbook)를 결합하는 하이브리드 구조. Generative Fallback, Data Store Agents(RAG grounding)도 함께 제공.
- [AWS Lex + Bedrock 통합](https://aws.amazon.com/blogs/machine-learning/) — `QnAIntent`로 Bedrock Knowledge Base 기반 RAG fallback 지원.
- [Rasa Pro — CALM (Conversational AI with Language Models)](https://rasa.com/docs/rasa-pro/calm) — 기존 intent 분류+rule 기반 NLU 파이프라인 대신 LLM이 대화 이해를 담당하고, 결정론적 비즈니스 로직은 "flow"로 분리하는 방향으로 전환.
- **정리**: 사람이 직접 작성한 intent tree + 완전 규칙 기반 slot filling만으로 신규 서비스를 설계하는 것은 낡은 접근으로 간주된다. 다만 완전히 사라진 것은 아니며, 정형화된 트래픽을 저비용/저지연으로 처리하는 "빠른 전처리 필터" 역할로 재배치되는 것이 2026년 현재의 표준적 프레이밍이다.

## NLU/LLM Hybrid Routing

- [vLLM Semantic Router v0.1 "Iris"](https://blog.vllm.ai/2026/01/05/vllm-sr-iris.html) (2026-01-05 production 릴리스) — cost/privacy/latency/safety 신호 기반으로 모델/경로를 라우팅하는 경량 계층.
- [aurelio-labs/semantic-router](https://github.com/aurelio-labs/semantic-router) — 임베딩 기반 `HybridRouteLayer`로 LLM 호출 전에 빠른 의사결정 계층을 두는 오픈소스 구현.
- ["Outcome-Aware Tool Selection for Semantic Routers" (arXiv 2603.13426, 2026-03)](https://arxiv.org/pdf/2603.13426) — semantic router 기반 도구 선택이 CPU에서 3–7ms인 반면 LLM 기반 선택은 GPU에서 500–2000ms 소요됨을 정량화. Hybrid routing의 비용/지연 근거 자료.
- ["Toward Super Agent System with Hybrid AI Routers" (arXiv 2504.10519, 2025-04)](https://arxiv.org/pdf/2504.10519)
- **정리**: "규칙 기반 트리는 정형화된 80%를 처리하고 LLM은 나머지 20%의 복잡한/모호한 턴을 처리한다"는 하이브리드 공존 프레이밍이 "트리는 죽었다"는 단순 대체 서사보다 더 근거가 명확하다.

## Intent Taxonomy / Utterance / 동의어 사전 (Day 2 보강, 2026-07-05 확인)

- [Label Your Data — "Intent Classification: 2026 Techniques for NLP Models"](https://labelyourdata.com/articles/machine-learning/intent-classification) — intent당 80–100개 다양한 training utterance 권장, 동의어·구어체·오탈자 포함 다양성 강조, taxonomy 품질이 모델 성능의 상한이 된다는 논지.
- [raia — "Intent Taxonomy Design"](https://docs.raiaai.com/ai-training/ai-training/how-to-train-an-ai-agent/module-4-routing-and-intent-mapping/lesson-4.2-intent-taxonomy-design) — intent taxonomy를 계층적 목표 분류 체계로 설계하고, "living document"로 지속 갱신해야 한다는 가이드.
- [Rasa — Entities and Synonyms](https://rasa.com/docs) (Rasa 공식 문서, entity synonym 매핑) — 동의어는 intent가 아니라 entity 값을 canonical value로 정규화하는 메커니즘임을 명시.
- **정리**: LLM 기반 분류로 넘어가도 intent taxonomy·utterance 데이터 설계·동의어 사전의 역할 자체는 사라지지 않으며, "결정론적 분류기를 학습시키는 용도"에서 "LLM 프롬프트/tool 스키마의 후보 정의 및 평가 기준선" 용도로 재배치되었다. Day 1의 하이브리드 라우팅 프레이밍과 일관된 결론이므로 기존 커리큘럼 방향을 유지함.

## Dialogue State / Session / Context 관리

- [LangGraph Persistence — Checkpointer/Store](https://docs.langchain.com/oss/python/langgraph/persistence) — 그래프 기반 상태 저장(MemorySaver/SqliteSaver/PostgresSaver), human-in-the-loop `interrupt_before`, time-travel.
- [LangSmith Multi-turn Evals / Insights Agent (2026)](https://blog.langchain.com/insights-agent-multiturn-evals-langsmith/)
- [OpenAI Responses API — Conversation State](https://developers.openai.com/api/docs/guides/conversation-state) — `previous_response_id`로 서버 측 턴 체이닝.
- [OpenAI API Deprecations](https://developers.openai.com/api/docs/deprecations) — **Assistants API는 2025-08-26 발표, 2026-08-26 서비스 종료 예정**. Responses API로 이관 필요. 구식 커리큘럼에서 Assistants threads 모델을 표준으로 다루면 outdated.
- [Anthropic Prompt Caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) — Claude는 서버 측 스레드가 없고 클라이언트가 전체 메시지 배열을 재전송하는 구조이며, 캐싱으로 반복 컨텍스트 비용을 절감.
- [Anthropic Memory Tool (`memory_20250818`, GA)](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool) — 클라이언트 실행형 파일 기반 메모리.
- [Anthropic — Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — Compaction, context editing(`clear_tool_uses_20250919`, `clear_thinking_20251015`).
- **정리**: 순수 FSM 기반 dialogue tree를 유일한 상태 관리 수단으로 쓰는 것은 outdated. 2026년 표준은 그래프 기반 상태(LangGraph류) + 요약/캐싱/선택적 RAG를 조합하는 것이다.

## Tool Calling / Function Calling / MCP

- [Anthropic Tool Use 문서](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview) — parallel tool calls, `tool_choice`, fine-grained streaming.
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io) — Anthropic이 2024-11 공개, 이후 OpenAI/Google DeepMind/Microsoft 등이 채택하며 벤더 간 tool/context 연동 표준으로 자리잡는 중.
- [OpenAI Function Calling 가이드](https://developers.openai.com/api/docs/guides/function-calling)
- **정리**: 벤더별 독자 plugin 스키마를 각각 구현하는 방식은 outdated 방향이며, MCP 같은 표준 프로토콜로 수렴하는 흐름을 반영해야 한다.

## Prompt Injection 방어 / Safety Guardrail

- [OWASP Top 10 for LLM Applications 2025 (LLM01:2025 Prompt Injection, 2024-11-18 발행)](https://genai.owasp.org/llm-top-10/)
- [OWASP Top 10 for Agentic Applications (2025-12-09/10 발표, ASI01–ASI10)](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) — 에이전트형 챗봇에 특화된 목표 하이재킹, 도구 오남용, 메모리 오염, 연쇄 실패 등을 다룸. 2026년 인터뷰에서는 고전 LLM Top 10뿐 아니라 이 Agentic Top 10을 함께 참조해야 한다.
- [OWASP Prompt Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html) — RAG나 fine-tuning만으로는 방어되지 않으며 defense-in-depth(최소 권한, 입출력 필터, 고위험 행동 사람 승인)가 필요함을 명시.
- [Anthropic — Prompt Injection Defenses](https://www.anthropic.com/research/prompt-injection-defenses)
- [Anthropic — Constitutional Classifiers](https://www.anthropic.com/research/constitutional-classifiers) — 범용 jailbreak 성공률을 86%→4.4%로 감소시킨 입출력 필터링 계층.
- [Anthropic — Claude Code Sandboxing](https://www.anthropic.com/engineering/claude-code-sandboxing) / [How We Contain Claude](https://www.anthropic.com/engineering/how-we-contain-claude)
- Dual-LLM 패턴(Simon Willison 제안, 2026년 프로덕션에 주류화) — 권한을 가진 오케스트레이터 LLM은 신뢰되지 않은 콘텐츠를 직접 읽지 않고, 격리된 LLM이 이를 읽되 도구 접근 권한이 없이 정제된 요약만 경계를 넘도록 설계.
- **문서화된 인시던트(레거시 사례, 여전히 교훈으로 인용)**: Chevrolet 딜러 챗봇이 조작되어 차량을 1달러에 "판매"(2023-12), Air Canada 챗봇의 잘못된 환불 정책 안내로 소송 패소(2024-02), DPD 챗봇 탈옥(2024).
- **최근 인시던트(에이전틱 시대)**: Perplexity Comet 브라우저 에이전트 간접 프롬프트 인젝션(2025-07 발견, 2025-08 공개), PyPI/LiteLLM 공급망 백도어(2026-03), CVE-2025-6514(MCP 인프라 RCE, CVSS 9.6).
- **정리**: 프롬프트 수준의 지시("악성 입력을 무시하라")만으로 방어하는 것은 불충분하며, 아키텍처(권한 분리·샌드박싱) + 분류기(classifier) 계층화가 2026년 표준이다.

## Human Handoff / Escalation

- [Intercom Fin — Escalation Guidance & Rules](https://www.intercom.com/help/en/articles/12396892-manage-fin-ai-agent-s-escalation-guidance-and-rules) — 신뢰도 임계값뿐 아니라 명시적 요청, 좌절/분노 감지, 반복 루프 감지 등 다중 트리거.
- [Salesforce Agentforce — Agent Handoff](https://www.salesforce.com/blog/agent-handoff/) — `canEscalate` 플래그, Dynamic Escalation(자동화를 먼저 소진하는 if-then 정책), 전체 대화 이력 유지 후 이관, 상담원 부재 시 fallback 흐름 정의.
- **정리**: 단일 신뢰도 임계값만으로 에스컬레이션을 트리거하는 것은 outdated. 신뢰도·감정·명시적 요청·비즈니스 리스크를 조합한 다중 신호 기반 설계 + 구조화된 컨텍스트(요약+원문+감지된 intent) 전달이 현재 표준이다.

## 평가 지표 / Observability

- [LangSmith — Threads, Multi-turn Evals](https://blog.langchain.com/insights-agent-multiturn-evals-langsmith/)
- [OpenAI Evals → Traces/Graders/Datasets 전환](https://developers.openai.com/api/docs/guides/evals) — **기존 OpenAI Evals 프레임워크는 2026-10-31 read-only, 2026-11-30 서비스 종료 예정.** "OpenAI Evals가 표준 평가 도구"라고 가르치는 것은 outdated.
- Containment rate(자동 해결율) 70–90%가 양호한 구간으로 인용되며, 엔터프라이즈 챗봇 평균 hallucination율이 약 18%라는 업계 데이터(Braintrust)도 참고할 값이다(도메인에 따라 편차가 크므로 절대 기준으로 삼지 않는다).
- **정리**: 단일 턴 정확도(BLEU류)만 보는 평가는 outdated이며, end-to-end task 성공률 + 멀티턴 트레이스 기반 평가가 표준이다.

## Production 사례 연구

- **Klarna AI Assistant** — 2024년 "고객 응대의 2/3를 처리, 상담원 700명 분량 업무량"으로 홍보되었으나, 2025년 품질/CX 우려로 사람 상담원을 재채용하며 방향을 일부 수정. 과도한 자동화의 리스크를 보여주는 중요한 사례.
- **Sierra** — "Realtalk" 벤치마크를 포함한 스펙 기반 guardrail·평가 아키텍처를 공개(sierra.ai 블로그, 확인 필요).
- **Intercom Fin** — 멀티 LLM 백엔드, 근거(citation) 기반 grounding과 해상도(resolution rate) 지표 공개.
- **Anthropic 고객 사례** — [anthropic.com/customers](https://www.anthropic.com/customers) — Notion 등 tool use/RAG 결합 사례.
- **국내 사례**: [카카오 기술 블로그](https://tech.kakao.com/) (KakaoTalk 챗봇/AI 기능), [네이버 D2](https://d2.naver.com/home) (HyperCLOVA X 기반 어시스턴트), [토스 기술 블로그](https://toss.tech/) (고객 응대 자동화) — 실제 게시글 URL은 인용 전 별도 확인 필요.

## 도서 및 일반 레퍼런스

- **Designing Data-Intensive Applications** (Martin Kleppmann) — 세션/상태 저장 인프라의 기반 이론.
- **AI Engineering** (Chip Huyen) — LLM 애플리케이션 프로덕션 설계, 평가 프레임워크.
- **Conversational AI** (Michael McTear) — 전통적 대화 시스템 설계 이론(전제 지식으로 유용, 최신 LLM 결합 내용은 별도 보강 필요).

## 인터뷰 준비

- [System Design Interview (Alex Xu)](https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF) — 규모 산정, 장애 격리 사고 프레임.
- [Chip Huyen — Machine Learning Interviews Book](https://huyenchip.com/ml-interviews-book/)
