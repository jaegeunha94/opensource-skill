# LLM Engineering 10년차 이상 개발자 Interview 학습 미션

## 목표

10년차 이상 시니어 LLM/AI 엔지니어로서 기술 인터뷰에서 **모델 선택 판단력, 제품 품질 책임감, 운영 안정성, 비용/성능 trade-off 사고**를 입증한다.

단순 LLM 용어 암기나 prompt tip 나열이 아니라, "어떤 모델을 왜 쓰는가", "이 답변을 얼마나 믿을 수 있는가", "장애·비용 폭증이 났을 때 어떻게 대응하는가"를 구조적으로 설명할 수 있어야 한다. LLM 자체를 만드는 리서처가 아니라, LLM을 **제품에 통합해 운영하는 엔지니어**의 관점을 기준으로 한다.

- 모델의 확률적 동작 특성과 capability boundary를 정확히 이해하고, 이를 근거로 모델을 선택
- 벤치마크/리더보드가 아니라 **task-fit eval**로 모델을 검증하는 절차를 설명
- 구조화 출력, tool calling, 멀티모달, 파인튜닝/RFT 중 무엇을 언제 쓸지 trade-off로 판단
- hallucination, prompt injection, 안전성 실패를 **제품 리스크**로 다루고 완화 전략을 제시
- latency/cost, prompt caching, rate limit, fallback, observability 등 **운영 안정성**을 수치로 논증
- 실제 production incident(장애, 안전사고, 비용 폭증)에 대한 대응 경험과 재발 방지 체계를 시연

## 평가 대상 역량

| 역량 | 세부 항목 |
|------|----------|
| LLM 동작 특성 이해 | 다음 토큰 예측의 확률적 본질, capability boundary, 실패 모드 분류 |
| 모델 선택 | task-fit eval 설계, 벤치마크의 함정, 벤더별 모델 지형, 버전 마이그레이션 |
| Tokenization & Context | 토큰 비용, context window 활용 전략, long-context 함정 |
| Prompt Engineering | 시스템 프롬프트 설계, few-shot, 버전 관리, 프롬프트도 코드라는 관점 |
| Reasoning Model 판단 | extended thinking/reasoning effort를 언제·왜 쓰는지, latency/cost 대가 |
| Structured Output & Tool Calling | 스키마 강제, 파싱 실패 처리, 멀티스텝 tool call 신뢰성 |
| Multimodal | vision/audio/generation 입출력의 품질·비용·안전 trade-off |
| Embedding & 검색 판단 | embedding 모델 선택 기준, 언제 RAG/검색이 필요한지 |
| Fine-tuning & RFT | SFT/RFT를 언제 쓰는지, prompting/RAG와의 판단 기준, 리스크 |
| Evaluation 체계 | 오프라인/온라인 eval, LLM-as-judge, trajectory-level grading |
| Hallucination 완화 | grounding, 인용, 신뢰도 표시, 완화의 한계 |
| Safety & Guardrail | 콘텐츠 안전, 계층형 방어, 오탐/미탐 trade-off |
| Prompt Injection 방어 | 직접/간접 injection, 데이터-명령 경계, 실제 사고 사례 |
| Latency/Cost 최적화 | 토큰 비용 모델, prompt caching, 배치·스트리밍 전략 |
| Observability & 운영 | 로깅, 트레이싱, rate limit, fallback, vendor abstraction |
| Production Incident 대응 | 장애 대응, postmortem, 재발 방지, 경영진/비개발 조직 커뮤니케이션 |

## 학습 원칙

- 용어 정의 나열이 아니라 **모델 선택, 제품 품질, 운영 안정성, 안전성, 평가 체계, 비용/성능 trade-off** 중심으로 다룬다.
- LLM 분야는 빠르게 변하므로, 레슨 생성 시점의 최신 공식 문서·changelog·deprecation 안내·실제 production 사례를 우선 확인하고 반영한다. 특정 모델명/버전은 인터뷰 시점에 따라 달라질 수 있으므로, **판단 프레임워크 자체**를 암기 대상으로 삼는다.
- 어려운 개념은 전제 개념부터 쉬운 한국어로 풀고, 어떤 실무 상황과 연결되는지, trade-off와 흔한 오해까지 설명한다.
- 매 레슨은 면접 질문 → 왜 묻는가 → 전제 개념 → 실무 연결 → 답변 사고 순서 → 핵심 답변 예시 → senior follow-up → 좋은/약한 답변 비교 → 자기 점검 rubric 구조를 따른다.
- RAG 세부(청킹, 벡터DB, 리랭킹), LangChain/LangGraph, Agent Harness 설계는 각각 `senior-rag-interview`, `senior-langchain-langgraph-interview`, `senior-ai-harness-interview`에서 깊게 다루므로, 이 트랙은 LLM 자체의 동작·선택·운영에 집중하고 중복을 최소화한다.

## 성공 기준

- "왜 이 모델을 선택했나요?"에 리더보드가 아니라 자체 eval과 제품 요구사항으로 답변
- reasoning model, 파인튜닝, RAG, structured output을 서로 경쟁하는 대안이 아니라 상황별 도구로 설명
- hallucination과 prompt injection을 "언젠가 생기는 리스크"로 인정하고, 완화·탐지·대응 체계를 함께 제시
- 비용/latency 수치와 trade-off 언어로 운영 판단을 정당화
- 실제 장애·안전사고 사례(자신의 경험 또는 업계 사례)를 근거로 재발 방지 설계를 구체적으로 설명
