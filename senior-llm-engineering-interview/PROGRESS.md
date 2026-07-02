# LLM Engineering 10년차 이상 개발자 Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | LLM 제품 품질과 모델 선택/운영 프레임워크 | [0001-llm-product-quality-and-model-selection-framework.html](lessons/0001-llm-product-quality-and-model-selection-framework.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 2 | LLM 동작 특성과 Capability Boundary | 다음 토큰 예측의 확률적 본질, capability boundary, 실패 모드 분류 |
| 3 | Tokenization과 Context Window | 토큰화 메커니즘, 토큰 비용, context window 활용/함정 |
| 4 | Prompt Engineering 실무 | 시스템 프롬프트 설계, few-shot, 프롬프트 버전 관리 |
| 5 | Reasoning Model 사용 판단 | extended thinking/reasoning effort 판단 기준, latency/cost 대가 |
| 6 | Structured Output 설계 | 스키마 강제, 파싱 실패 처리, 신뢰성 있는 출력 계약 |
| 7 | Function/Tool Calling & Agentic 아키텍처 | tool calling 설계, 멀티스텝 신뢰성, 실패 복구 |
| 8 | Multimodal 입출력 | vision/audio/generation 품질·비용·안전 trade-off |
| 9 | Embedding과 검색 판단 | 임베딩 모델 선택 기준, 언제 RAG/검색이 필요한지 |
| 10 | Fine-tuning 판단 | SFT를 언제 쓰는지, prompting/RAG와의 트레이드오프 |
| 11 | Reinforcement Fine-Tuning & 정렬 심화 | RFT, RLHF/RLAIF, 정렬 기법과 리스크 |
| 12 | Evaluation 체계 설계 | 오프라인/온라인 eval, LLM-as-judge, trajectory-level grading |
| 13 | Hallucination 완화 전략 | grounding, 인용, 신뢰도 표시, 완화의 한계 |
| 14 | Safety, Guardrail & Prompt Injection 방어 | 계층형 안전 설계, 직접/간접 injection, 실제 사고 사례 |
| 15 | Latency/Cost 최적화와 Prompt Caching | 토큰 비용 모델, 캐싱, 배치·스트리밍 전략 |
| 16 | Observability, Rate Limit, Fallback, Vendor Abstraction | 로깅/트레이싱, rate limit 대응, 벤더 추상화 설계 |
| 17 | Production Incident 대응과 시니어 커뮤니케이션 | 장애 대응, postmortem, 재발 방지, 비개발 조직 커뮤니케이션 |

## 현재 학습 위치

**Day 1 완료** — Day 2 (LLM 동작 특성과 Capability Boundary)가 다음 차례.

## 습득한 핵심 개념

- [x] 모델 선택을 리더보드가 아니라 task-fit eval로 판단하는 프레임워크 (Day 1)
- [x] 2026년 중반 기준 주요 벤더(Anthropic/OpenAI/Google 등)의 모델 지형과 reasoning effort 통합 흐름 (Day 1)
- [x] 최근 주요 deprecation/migration 사례와 그것이 프로덕션 설계에 주는 시사점 (Day 1)
- [x] 좋은 답변 vs 약한 답변 구별 기준 (Day 1)
- [ ] LLM의 확률적 동작 특성과 capability boundary (예정 Day 2)
- [ ] 토큰화와 context window 활용/함정 (예정 Day 3)
- [ ] 프롬프트 엔지니어링 실무와 버전 관리 (예정 Day 4)
- [ ] reasoning model 사용 판단 기준 (예정 Day 5)
- [ ] structured output 설계와 실패 처리 (예정 Day 6)
- [ ] function/tool calling과 agentic 아키텍처 (예정 Day 7)
- [ ] 멀티모달 입출력 trade-off (예정 Day 8)
- [ ] 임베딩과 검색 필요성 판단 (예정 Day 9)
- [ ] fine-tuning 판단 기준 (예정 Day 10)
- [ ] reinforcement fine-tuning과 정렬 심화 (예정 Day 11)
- [ ] evaluation 체계 설계 (예정 Day 12)
- [ ] hallucination 완화 전략 (예정 Day 13)
- [ ] safety/guardrail과 prompt injection 방어 (예정 Day 14)
- [ ] latency/cost 최적화와 prompt caching (예정 Day 15)
- [ ] observability, rate limit, fallback, vendor abstraction (예정 Day 16)
- [ ] production incident 대응과 시니어 커뮤니케이션 (예정 Day 17)

## 커리큘럼 최신성 메모

- 2026-07-02 Day 1 작성 시점 기준, Anthropic 최신 플래그십은 Claude Fable 5(적응형 thinking 기본 탑재), OpenAI는 GPT-5.5(reasoning effort 파라미터로 o-계열 통합), Google은 Gemini 3.5 Flash/3.1 Pro 조합을 확인함.
- 특정 모델명·버전은 인터뷰 시점에 따라 바뀔 수 있으므로, 새 레슨을 만들 때마다 공식 문서와 changelog를 다시 확인하고 이 메모를 갱신한다.
