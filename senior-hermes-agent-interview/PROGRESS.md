# Hermes Agent Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-03 | Hermes Agent Runtime과 Task Refinement 운영 프레임워크 | [0001-hermes-agent-runtime-task-refinement-framework.html](lessons/0001-hermes-agent-runtime-task-refinement-framework.html) |
| 2 | 2026-07-04 | Local-first 실행과 배포 토폴로지 | [0002-local-first-execution-deployment-topology.html](lessons/0002-local-first-execution-deployment-topology.html) |
| 3 | 2026-07-05 | Self-Learning과 Skill Capture | [0003-self-learning-skill-capture.html](lessons/0003-self-learning-skill-capture.html) |
| 4 | 2026-07-06 | Model/Tool/Runtime 경계와 Provider 추상화 | [0004-model-tool-runtime-boundary-provider-abstraction.html](lessons/0004-model-tool-runtime-boundary-provider-abstraction.html) |
| 5 | 2026-07-07 | MCP와 API 통합, ACP 기반 IDE 연동 | [0005-mcp-api-integration-acp-ide-integration.html](lessons/0005-mcp-api-integration-acp-ide-integration.html) |
| 6 | 2026-07-08 | Gateway와 채널 통합 | [0006-gateway-channel-integration.html](lessons/0006-gateway-channel-integration.html) |
| 7 | 2026-07-09 | 메모리와 세션 설계 | [0007-memory-session-design.html](lessons/0007-memory-session-design.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 8 | 스케줄링과 반복 작업 | 내장 cron, 자연어 반복 작업 정의, 실패한 예약 작업의 복구/알림 설계 |
| 9 | Replay와 평가 루프 | batch 모드, ShareGPT 포맷 trajectory, trajectory compression, eval harness/파인튜닝 데이터 재활용 |
| 10 | 샌드박싱과 권한 모델 | 7-layer defense, 위험 명령 승인, 컨테이너 격리(Docker/Singularity/Modal/Daytona), MCP 자격증명 필터링 |
| 11 | Provenance와 Prompt Injection 방어 | context 파일(AGENTS.md 등) 스캐닝, skill-injection 벡터, CVE-2026-7396/48710, 감사 사례로 배우는 위협 모델링 |
| 12 | OpenClaw 상호운용성과 운영 Trade-off | "에이전트를 감싼 게이트웨이" vs "게이트웨이를 감싼 에이전트", MCP 브릿지 상호운용의 현실, 생태계 성숙도/커뮤니티 규모 비교 |
| 13 | 관측성과 트러블슈팅 | 의존성 deprecation 경고 대응, 로그/세션 디버깅, 실전 장애 진단 시나리오 |
| 14 | 비용/지연/신뢰성 Trade-off와 종합 운영 패턴 | 배포 백엔드별 비용 구조, provider 라우팅 비용, 신뢰성 vs 지연시간, 면접 종합 시뮬레이션 |

## 현재 학습 위치

**Day 7 완료** — 다음: Day 8 — 스케줄링과 반복 작업

## 습득한 핵심 개념

- [x] Always-on 에이전트 vs 요청-응답 챗봇의 패러다임 차이 (Day 1)
- [x] 단일 `AIAgent` core loop + 다중 entry point(CLI/Gateway/ACP/Batch/API) 구조 (Day 1)
- [x] Prompt Builder → Provider Resolution → Tool Dispatch 파이프라인 (Day 1)
- [x] Task refinement의 파이프라인상 위치(입력 정규화·맥락 주입·모호성 해소·실행 경계 설정) (Day 1)
- [x] Local-first의 실무적 의미와 always-on 배포 토폴로지 판단(전용 VPS 패턴) (Day 1)
- [x] 6개 실행 backend(local/Docker/SSH/Daytona/Singularity/Modal)를 격리·상시성·비용 축으로 분류 (Day 2)
- [x] hibernate-on-idle과 always-on의 구조적 충돌, cold start/wake 지연시간 trade-off (Day 2)
- [x] "$5 VPS + Docker + 프로세스 매니저" 패턴의 근거와 스케일 한계(SPOF) (Day 2)
- [x] 메모리(기억) vs 스킬(재사용 절차)의 구분, `SKILL.md`/`/learn`/`skill_manage` 캡처 메커니즘 (Day 3)
- [x] 스킬 3단계 점진적 로딩(Level 0/1/2)을 통한 토큰 비용 관리 (Day 3)
- [x] `write_approval` 승인 게이트, Skills Guard, GEPA self-evolution 애드온과 코어 루프의 구분 (Day 3)
- [x] Provider 4개 티어(통합 게이트웨이/멀티 라우터/direct 1st-class/custom 호환 엔드포인트) 구분 (Day 4)
- [x] 설정 계층(CLI>yaml>env>기본값)과 secret 분리, credential pool 로테이션/fallback 체인 (Day 4)
- [x] Tool dispatch 파이프라인(`handle_function_call`→agent-loop 툴 분기 vs `registry.dispatch`→`ToolEntry`) (Day 4)
- [x] `execute_code`(programmatic tool calling)의 컨텍스트 절약 메커니즘과 credential stripping 보안 모델 (Day 4)
- [x] MCP client(카탈로그 승인/stdio·HTTP transport/tool filtering/자격증명 격리) vs MCP server(`hermes mcp serve`, 10개 tool, read/send 비대칭) 구분 (Day 5)
- [x] MCP sampling — 서버가 역으로 Hermes에게 추론을 요청하는 방향 반전과 rate limit 필요성 (Day 5)
- [x] ACP(Agent Client Protocol)가 core `AIAgent` loop을 감싼 stdio 진입점이라는 위치, stdout=JSON-RPC 전용/stderr=로그 분리 (Day 5)
- [x] ACP 세션 상태(인메모리, 재시작 시 소실) vs 영속 설정/스킬/메모리/영구 승인의 수명 주기 구분 (Day 5)
- [x] 신생 프로젝트에서 공식 문서와 GitHub 이슈트래커가 상충할 때 출처 우선순위를 판단하는 원칙 (Day 5)
- [x] Gateway는 core `AIAgent` loop의 진입점이며 플랫폼 어댑터는 공통 `MessageEvent`로 정규화한다 (Day 6)
- [x] 신뢰 경계 5단계 판단 순서(allow-all→allowlist→DM 페어링→전역 allow-all→기본 거부)와 admin/user 티어 (Day 6)
- [x] 채널별 세션 키(`agent:main:{platform}:{chat_type}:{chat_id}`)로 인한 채널 간 비연속성과 메모리 설계와의 구분 (Day 6)
- [x] webhook vs polling의 방향성과 로컬-first 배포 토폴로지(방화벽/터널링) 판단 (Day 6)
- [x] CVE-2026-7396 등 실제 사례를 어댑터 위협 모델링 체크리스트(입력 검증/rate limit/자격증명 격리)로 일반화 (Day 6)
- [x] 어댑터별 circuit breaker 장애 격리와 재시작 시 세션 자동 재개(`restart_interrupted`) (Day 6)
- [x] 메모리 3-레이어 구조: 내장 메모리(MEMORY.md/USER.md, frozen snapshot) vs `session_search`(SQLite FTS5, 무압축) vs 외부 provider(9개, additive) (Day 7)
- [x] frozen snapshot이 세션 도중 반영 안 되는 이유(prefix caching 보존)와 최신성 트레이드오프 (Day 7)
- [x] 메모리 용량 초과 시 하드 에러 + 에이전트 자가 정리 설계(사일런트 데이터 유실 방지) (Day 7)
- [x] `session_search`는 FTS5 어휘 검색(LLM 요약 없음)이며 벡터/의미 검색과 다르다는 정정 (Day 7)
- [x] Honcho dialectic reasoning(사후 LLM 분석 기반 사용자 모델링) — base context/dialectic supplement 2계층, contextCadence/dialecticCadence/dialecticDepth 노브 (Day 7)
- [x] Issue #4889 사례로 배우는 "정제된 사용자 입력 vs 다운스트림 페이로드" 경계 원칙 (Day 7)
- [ ] 스케줄링(cron) (예정 Day 8)
- [ ] Replay/평가 루프 (예정 Day 9)
- [ ] 샌드박싱/권한 모델(7-layer defense) (예정 Day 10)
- [ ] Provenance/prompt injection 방어 (예정 Day 11)
- [ ] OpenClaw 상호운용성/운영 trade-off (예정 Day 12)
- [ ] 관측성/트러블슈팅 (예정 Day 13)
- [ ] 비용/지연/신뢰성 trade-off 종합 (예정 Day 14)
