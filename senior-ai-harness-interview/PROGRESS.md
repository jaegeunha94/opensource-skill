# AI Harness / Agent Harness Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-03 | AI Harness와 Agent Runtime 설계/운영 프레임워크 | [0001-ai-agent-harness-runtime-design-framework.html](lessons/0001-ai-agent-harness-runtime-design-framework.html) |
| 2 | 2026-07-04 | Model/Tool/Runtime 경계와 Provider 추상화 | [0002-model-tool-runtime-boundary-provider-abstraction.html](lessons/0002-model-tool-runtime-boundary-provider-abstraction.html) |
| 3 | 2026-07-05 | Prompt/Context/Memory Scaffolding | [0003-prompt-context-memory-scaffolding.html](lessons/0003-prompt-context-memory-scaffolding.html) |
| 4 | 2026-07-06 | Control-Flow Scaffolding과 루프 안정성 | [0004-control-flow-scaffolding-loop-stability.html](lessons/0004-control-flow-scaffolding-loop-stability.html) |
| 5 | 2026-07-07 | Guardrail과 Prompt Injection 방어 | [0005-guardrail-prompt-injection-defense.html](lessons/0005-guardrail-prompt-injection-defense.html) |
| 6 | 2026-07-08 | Sandboxed Workspace Execution과 권한 스코핑 | [0006-sandboxed-workspace-execution-permission-scoping.html](lessons/0006-sandboxed-workspace-execution-permission-scoping.html) |
| 7 | 2026-07-09 | Model Context Protocol(MCP) | [0007-model-context-protocol.html](lessons/0007-model-context-protocol.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 8 | Handoff와 Multi-Agent Coordination | orchestrator-worker, manager(agents-as-tools) vs handoff 패턴, 토큰 비용 구조(15x), multi-agent를 쓰지 말아야 할 때 |
| 9 | Streaming과 Structured Output | SSE 스트리밍, fine-grained tool streaming, 지연시간 vs UX trade-off, structured output 설계 |
| 10 | Telemetry, Tracing, Observability | OTel GenAI semantic conventions, span 계층, 분산 트레이싱, 벤더별 관측성 통합 |
| 11 | Evaluation Harness와 Replay | task/trial/transcript/grader, trajectory 평가, LLM-as-judge 캘리브레이션, replay/regression 테스트 |
| 12 | Human-in-the-Loop과 Session/권한 설계 | 승인 게이트, approval binding, session 영속성, 권한 모드, 위험도 기반 개입 설계 |
| 13 | 비용/성능 최적화 | prompt caching, context compaction, model routing/tiering, batch 처리, cost-per-task 모니터링 |
| 14 | 운영 장애 대응과 종합 트레이드오프 | 런어웨이 루프/비용 폭주 사례, context poisoning 실전 대응, harness engineering 원칙 종합, 면접 종합 시뮬레이션 |

## 현재 학습 위치

**Day 7 완료** — 다음: Day 8 — Handoff와 Multi-Agent Coordination

## 습득한 핵심 개념

- [x] Agent = Model + Harness 프레임 (Day 1)
- [x] Harness Engineering 개념(Fowler/Böckeler) (Day 1)
- [x] Agent loop: gather context → take action → verify → repeat (Day 1)
- [x] Claude Agent SDK vs OpenAI Agents SDK 아키텍처 비교 (Day 1)
- [x] Build vs Framework 판단 기준 (Day 1)
- [x] Tool calling 스키마 표준화(Anthropic/OpenAI/MCP 공통 핵심과 provider별 차이) (Day 2)
- [x] Provider abstraction layer 설계와 leaky abstraction(caching/reasoning 토큰/tool_choice/스트리밍) (Day 2)
- [x] Tool 설계 원칙(통합, 네임스페이싱, poka-yoke, Vercel d0 80% 삭감 사례) (Day 2)
- [x] Tool error handling(is_error, 정보 노출/인젝션 방어, idempotency) (Day 2)
- [x] Context 예산 편성과 context rot(attention 비용, Chroma 실증 수치) (Day 3)
- [x] Context poisoning과 hallucination의 차이, multi-agent anchoring, OWASP ASI06 (Day 3)
- [x] Compaction/Context Editing/Memory tool의 역할 분리(Anthropic API) (Day 3)
- [x] Session(단기) vs Memory(장기) 설계, memory 패턴 분류와 보안/위생 (Day 3)
- [x] ReAct 루프와 "종료 미보장" 원칙, Claude Agent SDK turn 정의 (Day 4)
- [x] Step cap(max_turns/recursion_limit) vs budget cap(max_budget_usd) 구분 (Day 4)
- [x] Repeated-state/progress 감지, 텍스트만 반복하는 정체(Claude Code 사례) (Day 4)
- [x] Agent circuit breaker(소비 속도 감시) vs 전통 circuit breaker(실패율 감시), OWASP LLM10 (Day 4)
- [x] 멀티에이전트 전역 예산 소유권과 사이클 방지 (Day 4)
- [x] Lethal trifecta(비공개 데이터/신뢰 불가 콘텐츠/외부 통신) (Day 5)
- [x] Direct vs indirect prompt injection 위협 모델 구분 (Day 5)
- [x] Input/output guardrail과 tripwire(OpenAI Agents SDK) (Day 5)
- [x] Tool-result 격리, JSON 인코딩, tool 출력 스크리닝(Anthropic 공식 가이드) (Day 5)
- [x] 계단식(cascade) 분류기 비용 최적화(Claude Code Auto Mode 사례) (Day 5)
- [x] OWASP ASI Top 10 2026 개관과 defense-in-depth 원칙 (Day 5)
- [x] 판단(prompt) vs 강제(OS/인프라) 권한 통제 구분 (Day 6)
- [x] 로컬 OS 샌드박스(bubblewrap/Seatbelt) 파일시스템/네트워크 격리, credential deny/mask (Day 6)
- [x] Hosted 샌드박스 격리 스펙트럼: E2B(Firecracker microVM) vs Daytona(컨테이너, ~90ms 콜드스타트) (Day 6)
- [x] OpenAI Agents SDK harness-compute 분리(2026-04-15), 상태 외부화/재수화 (Day 6)
- [x] Least-privilege: standing credential vs just-in-time 권한, 거버넌스는 추론 루프 밖 (Day 6)
- [x] Replit 프로덕션 DB 삭제(2025-07), Railway/PocketOS 권한 사고(2026-04) 근본 원인 분석 (Day 6)
- [x] MCP N×M 문제와 tool calling과의 층위 구분 (Day 7)
- [x] Primitive: Tools/Resources/Prompts(서버→클라이언트), Sampling/Roots(클라이언트→서버, 신뢰 역전) (Day 7)
- [x] Transport: stdio vs Streamable HTTP, 2026-07-28 RC의 stateless 전환(핸드셰이크/세션 제거) (Day 7)
- [x] 거버넌스: AAIF/Linux Foundation 이관(2025-12-09 완료), Extensions Framework, MCP Apps·Tasks 지위(코어 승격 아님) (Day 7)
- [x] MCP 보안 위협 4패턴: tool poisoning, rug pull, confused deputy, toxic agent flow (Day 7)
- [x] OWASP MCP Top 10 (MCP01~MCP10) (Day 7)
- [ ] Handoff, multi-agent coordination (예정 Day 8)
- [ ] Streaming, structured output (예정 Day 9)
- [ ] Telemetry/Tracing/Observability (예정 Day 10)
- [ ] Evaluation harness, replay (예정 Day 11)
- [ ] Human-in-the-loop, session/권한 설계 (예정 Day 12)
- [ ] 비용/성능 최적화 (예정 Day 13)
- [ ] 운영 장애 대응 종합 (예정 Day 14)
