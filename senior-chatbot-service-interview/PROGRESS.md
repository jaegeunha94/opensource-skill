# 챗봇 서비스 Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-04 | 챗봇 서비스 요구사항과 intent/entity/context 설계 프레임워크 | [0001-chatbot-service-requirements-and-intent-entity-context-framework.html](lessons/0001-chatbot-service-requirements-and-intent-entity-context-framework.html) |
| 2 | 2026-07-05 | Intent 분류 체계와 Utterance/동의어 사전 설계 | [0002-intent-taxonomy-utterance-synonym-dictionary-design.html](lessons/0002-intent-taxonomy-utterance-synonym-dictionary-design.html) |
| 3 | 2026-07-06 | Entity·Slot 추출 설계와 검증 | [0003-entity-slot-extraction-design-and-validation.html](lessons/0003-entity-slot-extraction-design-and-validation.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
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

## 현재 학습 위치

**Day 3 완료** — 다음: Day 4 — NLU-LLM Hybrid Routing 아키텍처

## 습득한 핵심 개념

- [x] 챗봇 서비스 요구사항 분석 프레임워크(트래픽 유형, 실패 비용, latency/compliance 제약) (Day 1)
- [x] Intent/Entity/Context 3요소 모델과 각 요소가 실패했을 때의 증상 구분 (Day 1)
- [x] 규칙 기반 NLU vs LLM 기반 이해 vs 하이브리드 선택 기준 (Day 1)
- [x] 2023년식 "intent tree만" 설계가 2026년 기준으로 재배치된 이유 (Day 1)
- [x] Intent 경계를 시스템 행동(같은 API/로직) 기준으로 나누는 원칙 (Day 2)
- [x] Utterance 표현 공간 설계(문장형태·격식·생략·오탈자·부정 표현 축) (Day 2)
- [x] 동의어 사전(synonym dictionary)과 intent 분류의 책임 분리 (Day 2)
- [x] LLM 기반 시스템에서도 taxonomy 품질이 성능 상한이 되는 이유 (Day 2)
- [x] Entity 추출과 slot filling의 원인 위치 구분, 추출 방법 스펙트럼(규칙/통계 NER/LLM) (Day 3)
- [x] LLM 구조화 출력의 한계와 span grounding 기반 hallucination 방어 (Day 3)
- [x] Multi-value entity를 리스트 타입으로 모델링해야 하는 이유 (Day 3)
- [x] 스키마·비즈니스 규칙·사용자 확인 3단계 검증과 위험도 기반 차등화 (Day 3)
- [ ] NLU-LLM Hybrid Routing (예정 Day 4)
- [ ] Dialogue State 설계 (예정 Day 5)
- [ ] Session/Context 유지와 Multi-turn Flow (예정 Day 6)
- [ ] Fallback/Escalation/Human Handoff (예정 Day 7)
- [ ] RAG와 Tool Calling 연동 (예정 Day 8)
- [ ] 채널 통합 아키텍처 (예정 Day 9)
- [ ] 개인정보/동의/보안 설계 (예정 Day 10)
- [ ] Prompt Injection 방어와 Safety Guardrail (예정 Day 11)
- [ ] 평가 지표 설계 (예정 Day 12)
- [ ] Analytics와 Observability (예정 Day 13)
- [ ] Latency/Cost 최적화 (예정 Day 14)
- [ ] 운영 장애 대응 (예정 Day 15)

## 커리큘럼 조정 기록

- 2026-07-04: 최신 조사(OWASP Agentic Top 10 2025-12, Rasa CALM, Dialogflow CX
  Playbooks, vLLM Semantic Router, OpenAI Assistants API 2026-08-26 종료 예정
  등)를 반영해 "intent tree/slot filling만으로 구성된 레거시 챗봇" 프레임이
  아니라 "NLU/규칙 기반 로직을 빠른 전처리 필터로 두고 LLM 기반 이해·tool
  calling을 중심에 두는 하이브리드 아키텍처" 관점으로 커리큘럼을 설계함.
  근거는 `RESOURCES.md` 참고.
- 2026-07-05: Day 2 작성 전 최신 조사(Label Your Data "Intent Classification:
  2026 Techniques", raia AI Training "Intent Taxonomy Design", Rasa 동의어
  entity 매핑 공식 문서)를 확인한 결과 기존 커리큘럼 방향과 상충하는 내용은
  없었음. Intent당 80~100개 utterance 권장치와 taxonomy 품질이 모델 성능의
  상한이 된다는 논지를 레슨에 반영함. 근거는 `RESOURCES.md` 참고.
- 2026-07-06: Day 3 작성 전 최신 조사(OpenAI Structured Outputs 공식 문서,
  Anthropic Claude Structured Outputs beta 2025-11-13, Dialogflow CX
  Parameters, Rasa Slot Filling 공식 문서, LLM entity 추출 hallucination/
  span grounding 관련 연구)를 확인함. "JSON 자유 생성 후 정규식 파싱"이나
  순수 규칙 기반 NER만 다루는 구식 프레임 대신, constrained decoding 기반
  구조화 출력을 추출의 기본값으로 삼되 span grounding 검증을 별도 계층으로
  강조하는 방향으로 레슨을 구성함. 기존 커리큘럼 방향과 상충하는 내용은
  없었음. 근거는 `RESOURCES.md` 참고.
