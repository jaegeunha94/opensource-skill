# 챗봇 서비스 — 10년차 이상 개발자 Interview 대비

## 학습 목표

10년차 이상 백엔드/AI 엔지니어가 챗봇/대화형 AI 서비스 인터뷰에서 평가받는
**서비스 설계 판단력**을 체계적으로 준비한다.

단순 FAQ bot 데모나 "LLM API를 호출해봤어요" 수준의 경험, 혹은 인텐트/슬롯
용어 암기가 아니라, 면접관이 실제로 평가하는:

- **요구사항 분석과 아키텍처 설계**: 사용자 발화를 intent/entity/context로
  구조화하고, 어떤 상황에 규칙 기반 NLU를 쓰고 어떤 상황에 LLM을 쓸지
  근거 있게 판단하는 능력
- **대화 상태 관리**: 멀티턴 대화에서 context/session을 안전하게 유지하고,
  대화가 길어지거나 끊겨도 일관된 사용자 경험을 설계하는 능력
- **운영 품질**: fallback, human handoff, 평가 지표, observability, 장애
  대응까지 "만들고 끝"이 아니라 "운영 가능한 서비스"로 설계하는 능력
- **안전성**: prompt injection 방어, safety guardrail, 개인정보/동의 처리
  등 대화형 AI 특유의 위협 모델에 대한 판단력
- **비용/성능 trade-off**: NLU/LLM hybrid routing, 캐싱, latency 최적화처럼
  정량적 근거로 아키텍처를 선택하는 능력

를 면접 현장에서 자연스럽게 말할 수 있도록 훈련한다.

## 전제 지식

- 백엔드 API 및 이벤트 기반 서비스 설계 경험
- LLM API(OpenAI, Anthropic 등) 호출 및 기본적인 prompt 작성 경험
- 세션/캐시/큐 같은 상태 관리 인프라에 대한 기본 이해

NLU 프레임워크(Rasa, Dialogflow 등)의 세부 문법을 몰라도 괜찮다. 이 트랙은
**대화형 서비스를 프로덕션에 올리는 설계 판단 능력**을 중심으로 진행한다.

## 왜 "레거시 챗봇 패턴"만으로는 부족한가

2023년 이전 챗봇 커리큘럼은 흔히 "intent 분류 → slot filling → 규칙
기반 dialogue tree"만으로 구성됐다. 2026년 현재 업계는 이 패턴을
완전히 버리지는 않았지만(정형화된 트래픽의 저비용/저지연 처리에는 여전히
유효하다), **LLM 기반 이해와 tool calling을 중심에 두고 NLU/규칙 기반
로직을 "빠른 전처리 필터"로 재배치**하는 방향으로 이동했다. 이 트랙은
이 변화를 반영해서, 정적인 프레임워크가 아니라 최신 공식 문서와
production 사례를 기준으로 커리큘럼을 조정한다. 상세 근거는
`RESOURCES.md`를 참고한다.

## 커리큘럼 개요

| Day | 주제 | 핵심 개념 |
|-----|------|-----------|
| 1 | 챗봇 서비스 요구사항과 intent/entity/context 설계 프레임워크 | 요구사항 분석, intent/entity/context 모델, 아키텍처 선택 기준 |
| 2 | Intent 분류 체계와 Utterance/동의어 사전 설계 | Intent taxonomy, utterance 데이터 설계, synonym dictionary |
| 3 | Entity·Slot 추출 설계와 검증 | Slot filling, multi-value entity, NER vs LLM 추출 |
| 4 | NLU-LLM Hybrid Routing 아키텍처 | 비용/지연/컴플라이언스 기준 라우팅, semantic router |
| 5 | Dialogue State 설계 | FSM vs graph 기반 state, 상태 전이 설계 |
| 6 | Session/Context 유지와 Multi-turn Flow 설계 | Context window 관리, 요약, 메모리, 세션 만료 |
| 7 | Fallback 전략과 Escalation/Human Handoff 설계 | Multi-signal escalation, context 전달, 큐 설계 |
| 8 | RAG와 Tool Calling 연동 아키텍처 | Function/tool calling, MCP, grounding |
| 9 | 채널 통합(Multi-channel) 아키텍처 설계 | 채널 어댑터, 메시지 포맷 정규화, 채널별 제약 |
| 10 | 개인정보·동의·보안 설계 | PII 마스킹, 동의 관리, 데이터 거버넌스 |
| 11 | Prompt Injection 방어와 Safety Guardrail | OWASP LLM/Agentic Top 10, defense-in-depth |
| 12 | 평가 지표 설계와 Offline/Online Evaluation | Containment rate, task success, LLM-as-judge |
| 13 | Analytics와 Observability | 멀티턴 트레이싱, 대시보드, 알림 |
| 14 | Latency/Cost 최적화 | 모델 티어링, 캐싱, 스트리밍 |
| 15 | 운영 장애 대응(Incident Response) | 장애 탐지, kill switch, 롤백, postmortem |

## 학습 원칙

1. 각 레슨은 면접 질문 → 전제 개념 → 왜 면접에서 묻는가 → 실무 연결 →
   답변 사고 순서 → 핵심 답변 예시 → senior-level follow-up → 좋은/약한
   답변 비교 → 자기 점검 rubric 순서로 진행한다.
2. 어려운 개념은 "왜 이게 문제가 되는지"부터 쉬운 한국어로 풀어서 설명하고,
   실무 상황·trade-off·흔한 오해까지 다룬다.
3. 모든 설명은 한국어로 하되, 기술 용어는 원어를 병기한다.
4. 단순 데모 구현이나 API 사용법 암기가 아니라 요구사항 분석, 아키텍처
   trade-off, 운영 품질, 안전성, 비용/성능 판단을 중심으로 다룬다.
5. 챗봇/LLM 분야는 변화가 빠르므로, 저장된 커리큘럼과 최신 공식 문서·
   production 사례가 충돌하면 최신 근거를 우선하고 그 이유를 `PROGRESS.md`,
   `RESOURCES.md`에 기록한다.
6. 각 레슨 마지막에는 자기 점검 rubric으로 학습 수준을 확인한다.
