# AI Harness / Agent Harness Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-03 | AI Harness와 Agent Runtime 설계/운영 프레임워크 | [0001-ai-agent-harness-runtime-design-framework.html](lessons/0001-ai-agent-harness-runtime-design-framework.html) |
| 2 | 2026-07-04 | Model/Tool/Runtime 경계와 Provider 추상화 | [0002-model-tool-runtime-boundary-provider-abstraction.html](lessons/0002-model-tool-runtime-boundary-provider-abstraction.html) |
| 3 | 2026-07-05 | Prompt/Context/Memory Scaffolding | [0003-prompt-context-memory-scaffolding.html](lessons/0003-prompt-context-memory-scaffolding.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 4 | Control-Flow Scaffolding과 루프 안정성 | ReAct 루프, step cap/budget cap/repeated-state detection, 종료 조건 설계, circuit breaker |
| 5 | Guardrail과 Prompt Injection 방어 | lethal trifecta, input/output/tool guardrail, tripwire, defense-in-depth, OWASP Agentic Top 10 |
| 6 | Sandboxed Workspace Execution과 권한 스코핑 | OS 레벨 샌드박스(bubblewrap/Seatbelt), hosted code execution, E2B/Daytona, least-privilege 권한 설계 |
| 7 | Model Context Protocol(MCP) | tools/resources/prompts/sampling, stdio/streamable HTTP, stateless 전환, 거버넌스(AAIF) |
| 8 | Handoff와 Multi-Agent Coordination | orchestrator-worker, manager(agents-as-tools) vs handoff 패턴, 토큰 비용 구조(15x), multi-agent를 쓰지 말아야 할 때 |
| 9 | Streaming과 Structured Output | SSE 스트리밍, fine-grained tool streaming, 지연시간 vs UX trade-off, structured output 설계 |
| 10 | Telemetry, Tracing, Observability | OTel GenAI semantic conventions, span 계층, 분산 트레이싱, 벤더별 관측성 통합 |
| 11 | Evaluation Harness와 Replay | task/trial/transcript/grader, trajectory 평가, LLM-as-judge 캘리브레이션, replay/regression 테스트 |
| 12 | Human-in-the-Loop과 Session/권한 설계 | 승인 게이트, approval binding, session 영속성, 권한 모드, 위험도 기반 개입 설계 |
| 13 | 비용/성능 최적화 | prompt caching, context compaction, model routing/tiering, batch 처리, cost-per-task 모니터링 |
| 14 | 운영 장애 대응과 종합 트레이드오프 | 런어웨이 루프/비용 폭주 사례, context poisoning 실전 대응, harness engineering 원칙 종합, 면접 종합 시뮬레이션 |

## 현재 학습 위치

**Day 3 완료** — 다음: Day 4 — Control-Flow Scaffolding과 루프 안정성

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
- [ ] Control-flow scaffolding, 루프 안정성 (예정 Day 4)
- [ ] Guardrail, prompt injection 방어 (예정 Day 5)
- [ ] Sandboxed execution, 권한 스코핑 (예정 Day 6)
- [ ] MCP (예정 Day 7)
- [ ] Handoff, multi-agent coordination (예정 Day 8)
- [ ] Streaming, structured output (예정 Day 9)
- [ ] Telemetry/Tracing/Observability (예정 Day 10)
- [ ] Evaluation harness, replay (예정 Day 11)
- [ ] Human-in-the-loop, session/권한 설계 (예정 Day 12)
- [ ] 비용/성능 최적화 (예정 Day 13)
- [ ] 운영 장애 대응 종합 (예정 Day 14)
