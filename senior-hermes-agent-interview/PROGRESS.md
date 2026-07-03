# Hermes Agent Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-03 | Hermes Agent Runtime과 Task Refinement 운영 프레임워크 | [0001-hermes-agent-runtime-task-refinement-framework.html](lessons/0001-hermes-agent-runtime-task-refinement-framework.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 2 | Local-first 실행과 배포 토폴로지 | 6개 실행 backend(local/Docker/SSH/Daytona/Singularity/Modal), hibernate-on-idle vs always-on 충돌, "$5 VPS" 패턴, cold start/지연시간 trade-off |
| 3 | Self-Learning과 Skill Capture | 학습 루프(learning loop), 작업 후 자동 스킬 생성, agentskills.io 표준, Skills Hub, 스킬 자기개선의 안전성 문제 |
| 4 | Model/Tool/Runtime 경계와 Provider 추상화 | `hermes model` provider 전환, Nous Portal/OpenRouter/OpenAI 등 다중 provider, tool dispatch 설계 |
| 5 | MCP와 API 통합, ACP 기반 IDE 연동 | MCP 서버 연결, Agent Control Protocol(ACP), VS Code/Zed/JetBrains 연동, diff/터미널 렌더링 |
| 6 | Gateway와 채널 통합 | 단일 gateway의 다중 채널 팬아웃(Telegram/Discord/Slack/WhatsApp/Signal), 채널 간 대화 연속성, 신뢰 경계 |
| 7 | 메모리와 세션 설계 | FTS5 전문 검색 + LLM 요약, Honcho 기반 dialectic user modeling, 세션 영속성 vs 컨텍스트 예산 |
| 8 | 스케줄링과 반복 작업 | 내장 cron, 자연어 반복 작업 정의, 실패한 예약 작업의 복구/알림 설계 |
| 9 | Replay와 평가 루프 | batch 모드, ShareGPT 포맷 trajectory, trajectory compression, eval harness/파인튜닝 데이터 재활용 |
| 10 | 샌드박싱과 권한 모델 | 7-layer defense, 위험 명령 승인, 컨테이너 격리(Docker/Singularity/Modal/Daytona), MCP 자격증명 필터링 |
| 11 | Provenance와 Prompt Injection 방어 | context 파일(AGENTS.md 등) 스캐닝, skill-injection 벡터, CVE-2026-7396/48710, 감사 사례로 배우는 위협 모델링 |
| 12 | OpenClaw 상호운용성과 운영 Trade-off | "에이전트를 감싼 게이트웨이" vs "게이트웨이를 감싼 에이전트", MCP 브릿지 상호운용의 현실, 생태계 성숙도/커뮤니티 규모 비교 |
| 13 | 관측성과 트러블슈팅 | 의존성 deprecation 경고 대응, 로그/세션 디버깅, 실전 장애 진단 시나리오 |
| 14 | 비용/지연/신뢰성 Trade-off와 종합 운영 패턴 | 배포 백엔드별 비용 구조, provider 라우팅 비용, 신뢰성 vs 지연시간, 면접 종합 시뮬레이션 |

## 현재 학습 위치

**Day 1 완료** — 다음: Day 2 — Local-first 실행과 배포 토폴로지

## 습득한 핵심 개념

- [x] Always-on 에이전트 vs 요청-응답 챗봇의 패러다임 차이 (Day 1)
- [x] 단일 `AIAgent` core loop + 다중 entry point(CLI/Gateway/ACP/Batch/API) 구조 (Day 1)
- [x] Prompt Builder → Provider Resolution → Tool Dispatch 파이프라인 (Day 1)
- [x] Task refinement의 파이프라인상 위치(입력 정규화·맥락 주입·모호성 해소·실행 경계 설정) (Day 1)
- [x] Local-first의 실무적 의미와 always-on 배포 토폴로지 판단(전용 VPS 패턴) (Day 1)
- [ ] 6개 실행 backend별 trade-off, hibernate-on-idle 충돌 (예정 Day 2)
- [ ] Self-learning/skill capture 루프와 안전성 (예정 Day 3)
- [ ] Model/Tool/Runtime 경계, provider 추상화 (예정 Day 4)
- [ ] MCP/ACP 통합 (예정 Day 5)
- [ ] Gateway/채널 통합 (예정 Day 6)
- [ ] 메모리/세션 설계, dialectic user modeling (예정 Day 7)
- [ ] 스케줄링(cron) (예정 Day 8)
- [ ] Replay/평가 루프 (예정 Day 9)
- [ ] 샌드박싱/권한 모델(7-layer defense) (예정 Day 10)
- [ ] Provenance/prompt injection 방어 (예정 Day 11)
- [ ] OpenClaw 상호운용성/운영 trade-off (예정 Day 12)
- [ ] 관측성/트러블슈팅 (예정 Day 13)
- [ ] 비용/지연/신뢰성 trade-off 종합 (예정 Day 14)
