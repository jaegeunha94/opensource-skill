# LLM Engineering 10년차 이상 개발자 Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | LLM 제품 품질과 모델 선택/운영 프레임워크 | [0001-llm-product-quality-and-model-selection-framework.html](lessons/0001-llm-product-quality-and-model-selection-framework.html) |
| 2 | 2026-07-04 | LLM 동작 특성과 Capability Boundary | [0002-llm-behavior-and-capability-boundary.html](lessons/0002-llm-behavior-and-capability-boundary.html) |
| 3 | 2026-07-05 | Tokenization과 Context Window | [0003-tokenization-and-context-window.html](lessons/0003-tokenization-and-context-window.html) |
| 4 | 2026-07-06 | Prompt Engineering 실무 | [0004-prompt-engineering-in-production.html](lessons/0004-prompt-engineering-in-production.html) |
| 5 | 2026-07-07 | Reasoning Model 사용 판단 | [0005-reasoning-model-usage-judgment.html](lessons/0005-reasoning-model-usage-judgment.html) |
| 6 | 2026-07-08 | Structured Output 설계 | [0006-structured-output-design.html](lessons/0006-structured-output-design.html) |
| 7 | 2026-07-09 | Function/Tool Calling & Agentic 아키텍처 | [0007-function-tool-calling-and-agentic-architecture.html](lessons/0007-function-tool-calling-and-agentic-architecture.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
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

**Day 7 완료** — Day 8 (Multimodal 입출력)이 다음 차례.

## 습득한 핵심 개념

- [x] 모델 선택을 리더보드가 아니라 task-fit eval로 판단하는 프레임워크 (Day 1)
- [x] 2026년 중반 기준 주요 벤더(Anthropic/OpenAI/Google 등)의 모델 지형과 reasoning effort 통합 흐름 (Day 1)
- [x] 최근 주요 deprecation/migration 사례와 그것이 프로덕션 설계에 주는 시사점 (Day 1)
- [x] 좋은 답변 vs 약한 답변 구별 기준 (Day 1)
- [x] LLM의 확률적 동작 특성(다음 토큰 예측)과 capability boundary (Day 2)
- [x] 실패 모드 5분류(지식/추론/지시따르기/보정/분포이탈) 프레임워크와 원인별 완화 전략 (Day 2)
- [x] 환각이 평가 인센티브 구조에서 비롯된다는 최신 연구 논지(OpenAI, 2025~2026) (Day 2)
- [x] 토큰화(서브워드 단위)와 언어별 토큰 비용 차이 (Day 3)
- [x] claimed context window vs effective context window 구분, context rot 연구 근거 (Day 3)
- [x] 포지션 편향(U-shaped, lost in the middle)과 정보 배치 전략 (Day 3)
- [x] RAG vs long-context stuffing 판단 기준, compaction/context editing/caching을 통한 장기 실행 컨텍스트 관리 (Day 3)
- [x] 프롬프트 엔지니어링 실무와 버전 관리 (Day 4)
- [x] reasoning model 사용 판단 기준: effort 파라미터, overthinking/역-U자 곡선, 슬로다운 공격 표면 (Day 5)
- [x] 구조화 출력(constrained decoding)과 프롬프트 기반 JSON 유도의 메커니즘 차이, 스키마 준수와 내용 정확성의 구분, 이중 검증 계층 설계 (Day 6)
- [x] tool calling의 구조(실행 의도 반환 vs 실제 실행 분리), 오류 누적의 수학(스텝당 성공률의 곱셈적 저하), 병렬/순차 호출 트레이드오프, 멱등성·체크포인트·서킷 브레이커·인간 개입 게이트 기반 에이전틱 신뢰성 설계 (Day 7)
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
- 2026-07-04 Day 2 작성 시점, OpenAI "Why Language Models Hallucinate"(2025, arXiv:2509.04664) 및 관련 2026년 후속 논의(평가 인센티브가 환각을 유도한다는 논지, Nature 게재 등)를 확인해 실패 모드/환각 섹션에 반영함. 2026년 프론티어 모델의 표준 벤치마크 환각률은 한 자릿수 %대까지 낮아졌으나, 실제 프로덕션 표본 조사에서는 여전히 도메인에 따라 두 자릿수 %대 환각이 보고된다는 간극도 함께 확인함.
- 2026-07-05 Day 3 작성 시점, Anthropic Claude Platform Docs(context windows, token counting)를 확인해 2026년 중반 기준 Claude Opus 4.6/4.7/4.8·Sonnet 5·Sonnet 4.6이 API 기본값으로 1M 토큰 context window를 제공하며(Sonnet 4.5 등 일부는 200K 유지), OpenAI GPT-5.5도 1M 토큰 컨텍스트를 지원한다는 것을 확인함. Anthropic 문서가 공식 용어로 쓰는 "context rot"(컨텍스트가 커질수록 정확도·회상이 저하되는 현상)을 프레임워크의 핵심 개념으로 채택했고, Claude Opus 4.7 이후·Sonnet 5 등에서 새 토크나이저가 도입되어 동일 텍스트가 약 30% 더 많은 토큰으로 계산된다는 마이그레이션 함정도 반영함. Chroma의 다중 모델(GPT/Claude/Gemini/Qwen) context rot 벤치마크에서 확인된 "effective context window가 claimed보다 훨씬 작을 수 있다"는 수치와 포지션 편향(U-shaped) 연구도 근거로 사용함.
- 2026-07-06 Day 4 작성 시점, Anthropic의 프롬프트/컨텍스트 엔지니어링 공식 가이드(적정 고도, 5대 고효율 기법 — XML 태그, 근거 우선 요구, 역할 부여, 단계별 추론, 예시 제시)와 OpenAI GPT-5.5 프롬프팅 가이드(캐싱 친화적 레이아웃: 정적 내용 앞, 변동 내용 뒤)를 확인해 반영함. 2026년 기준 프롬프트 버전 관리·회귀 테스트 생태계(레지스트리형 버전 관리, CI/CD 통합 회귀 테스트, 배포 후 관측)가 표준 관행으로 자리잡고 있음을 확인함. 2025년 5월 xAI Grok의 미승인 시스템 프롬프트 변경 사고(리뷰 프로세스 우회 → 공개 사고 → GitHub 프롬프트 공개·추가 승인 절차·24시간 모니터링으로 재발 방지)를 프롬프트 변경 관리의 실제 공개 사례로 채택함.
- 2026-07-07 Day 5 작성 시점, Anthropic Claude Platform Docs의 Adaptive Thinking·Effort 공식 문서(Opus 4.7/4.8은 adaptive thinking만 지원하고 수동 `budget_tokens`는 400 에러로 거부, effort는 low~max 5단계), OpenAI GPT-5.5 `reasoning_effort` 공식 가이드(none/low/medium(기본)/high/xhigh, "낮은 단계부터 시도하고 eval로 검증된 경우에만 올리라"는 권고), Google Gemini의 `thinking_budget`(숫자) → `thinking_level`(등급) 전환을 확인함. 세 벤더 모두 "숫자 기반 토큰 예산 → 등급형 effort"로 수렴하고 있다는 공통 흐름을 핵심 근거로 반영함. reasoning 효율화 연구에서 반복 관찰되는 "overthinking"(정확도가 정점 이후 하락하는 역-U자 곡선)과, 2025년 연구(arXiv:2502.02542, "OverThink")가 보인 외부 입력 기반 사고량 부풀리기 슬로다운 공격을 프레임워크에 반영해, reasoning effort 판단이 성능/비용 문제를 넘어 보안(Day 14 prompt injection과 연결) 문제이기도 하다는 관점을 추가함.
- 2026-07-08 Day 6 작성 시점, Anthropic Claude Platform Docs의 Structured Outputs 공식 문서(`output_config.format`로 이동, strict tool use, 재귀 스키마·정규식·필드 수 등 지원 한계, refusal/길이초과 시에도 스키마 위반 가능), OpenAI Structured Outputs 공식 가이드(strict mode의 디코더 레벨 스키마 강제, JSON mode의 레거시 격하, refusal 필드), Google Gemini의 `response_schema`/JSON Schema 지원 확대(`propertyOrdering`)를 확인함. OpenAI가 기능 발표 시 공개한 "네이티브 구조화 출력 없이 복잡한 스키마 준수 정확도 40% 미만 → 적용 후 100%"라는 수치를 프롬프트 유도와 constrained decoding의 격차를 보여주는 핵심 근거로 채택함. 오픈웨이트 자체 호스팅 환경의 표준 대안으로 Outlines/llguidance류 grammar 기반 라이브러리를, 네이티브 기능이 커버하지 못하는 실패(refusal/내용오류)를 보완하는 패턴으로 Instructor류 retry-with-error-feedback 라이브러리를 확인해 반영함. "스키마 준수"와 "내용 정확성"은 별개 문제라는 것을 핵심 프레임워크로 삼고, 검증 계층 없이 도구 호출 결과를 그대로 실행해 발생한 실무 사고 사례(환불 오작동 패턴)를 이 구분의 실제 위험성을 보여주는 사례로 채택함.
- 2026-07-09 Day 7 작성 시점, Anthropic Claude Platform Docs의 tool use/agentic 공식 문서(병렬 tool call 기본 활성화와 `disable_parallel_tool_use`, `tool_result`의 `is_error`, 서버 사이드 도구 루프 10회 한도 시 `pause_turn`으로 재개, Programmatic Tool Calling, `clear_tool_uses`/`clear_thinking` context editing과 `compact` compaction의 구분, tool search, task budgets, MCP connector), OpenAI Responses API 함수 호출 공식 가이드와 Agents SDK 문서(Agent/Runner/Handoffs/Guardrails, `parallel_tool_calls`와 strict schema가 완전히 동시 보장되지 않는다는 공식 권고), Google Gemini 함수 호출 공식 문서(병렬/compositional/automatic 3단 구조, 2026년 3월 context circulation과 고유 tool-response ID 업데이트)를 확인함. 멀티스텝 에이전트의 오류 누적을 스텝당 성공률의 곱셈적 저하(0.95^10≈59%, 0.90^10≈35%, 0.85^10≈20%)로 프레임워크화했고, 2025년 self-conditioning 연구(이전 오류가 컨텍스트에 남으면 이후 오류 확률이 높아지는 현상)를 근거로 채택함. Replit AI 에이전트의 2025-07 프로덕션 DB 삭제 사고(Fortune·Cybernews 등 복수 매체로 교차 검증됨)를 "자연어 지시는 강제가 아니다"를 보여주는 핵심 사례로 채택했고, 이보다 교차 검증이 약한 2026년 인프라 자격 증명 이탈·폭주 루프 비용 사례들은 방향성 참고 자료로만 인용하도록 레슨 본문에 명시적으로 caveat를 남김. Anthropic 엔지니어링 블로그 "Writing Effective Tools for AI Agents"의 도구 설계 지침(고레버리지 도구, 네임스페이스, "언제 호출해야 하는가"를 명시한 설명)과 MCP가 tool calling을 대체하는 게 아니라 그 위의 통합 레이어라는 구분(2026-07 스펙 개정 후보의 stateless core/Extensions/Tasks 포함)을 반영함.
- 특정 모델명·버전·수치는 인터뷰 시점에 따라 바뀔 수 있으므로, 새 레슨을 만들 때마다 공식 문서와 changelog를 다시 확인하고 이 메모를 갱신한다.
