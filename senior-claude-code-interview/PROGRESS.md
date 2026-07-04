# Claude Code 인터뷰 대비 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-03 | Claude Code 기반 agentic coding 운영 프레임워크 | [0001-agentic-coding-operating-framework.html](lessons/0001-agentic-coding-operating-framework.html) |
| 2 | 2026-07-04 | Surfaces — Terminal/IDE/Desktop/Web/CI 아키텍처와 선택 기준 | [0002-surfaces-architecture-and-selection.html](lessons/0002-surfaces-architecture-and-selection.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 3 | 코드베이스 컨텍스트 설계 — CLAUDE.md와 auto memory | CLAUDE.md 로드 순서, 서브디렉토리 규칙, auto memory(MEMORY.md), large codebase 전략, 컨텍스트 비용 |
| 4 | 권한 모델 심화 — permission mode와 규칙 문법 | default/acceptEdits/plan/auto/dontAsk/bypassPermissions, allow/deny/ask 평가 순서, settings precedence |
| 5 | 샌드박싱과 shell/file 도구 실행 경계 | OS 레벨 파일시스템/네트워크 격리, permission과 sandbox의 계층 분리, credential 보호 |
| 6 | 보안 — 위협 모델과 prompt injection 방어 | 신뢰 경계, 프롬프트 인젝션, MCP 공급망 리스크, secure deployment 패턴 |
| 7 | MCP — Model Context Protocol 통합과 운영 | MCP 서버 연결, tool search(온디맨드 로드), 권한 규칙, 조직 단위 managed MCP |
| 8 | Skills — 재사용 워크플로우 설계와 컨텍스트 비용 | on-demand 로드, disable-model-invocation, 팀 표준화 |
| 9 | Hooks — 실행 시점 자동화와 안전장치 | PreToolUse/PostToolUse/SessionStart/Stop, 결정론적 통제 vs CLAUDE.md의 비강제성 |
| 10 | Plugins와 마켓플레이스 — 팀 배포/표준화 | 플러그인 구성요소, 마켓플레이스 신뢰 경계, managed 배포 |
| 11 | Subagents — 위임 설계와 컨텍스트 격리 | 독립 컨텍스트, 중첩 스폰, 언제 서브에이전트를 쓰는가 |
| 12 | Agent Teams와 Workflows — 멀티 에이전트 오케스트레이션 | lead-teammate 구조, 결정론적 워크플로우 스크립트, 병렬/파이프라인 패턴 |
| 13 | Background Agent와 Routines — 비동기/예약 자동화 | 백그라운드 세션, 예약 실행(Routines), 알림/승인 흐름 |
| 14 | Remote Control과 멀티 디바이스/채널 운영 | 로컬 실행 + 원격 제어 구조, Channels, 모바일/Slack 연동 |
| 15 | 코드 리뷰 자동화 — Code Review, PR 워크플로우 | 자동 코드 리뷰 설계, 신뢰 경계, false positive 관리 |
| 16 | CI/CD 통합 — GitHub Actions/GitLab CI/CD, headless 자동화 | `-p` 모드, CI 파이프라인 통합, 비용/신뢰성 trade-off |
| 17 | 세션 관리 — resume/fork/checkpoint, worktree 병렬 세션 | 세션 독립성, checkpoint vs git, worktree 기반 병렬 작업 |
| 18 | Context Compaction과 긴 세션 전략 | 자동 압축 메커니즘, PreCompact 훅, thrashing 오류 대응 |
| 19 | Prompt Caching과 비용/성능 최적화 | 캐시 가능한 접두부 설계, 비용 절감 전략 |
| 20 | 모델/프로바이더 설정 — Bedrock/Vertex/Foundry, 모델 선택 trade-off | 인증 우선순위, 모델별 특성, 조직 라우팅 |
| 21 | Enterprise/Admin 설정과 Observability | managed settings, server-managed settings, OpenTelemetry, 감사 로그 |
| 22 | 트러블슈팅과 Production 도입 패턴 — 종합 설계 면접 | 흔한 실패 패턴 진단, 팀 롤아웃 전략, 생산성/품질 trade-off 종합 |

## 현재 학습 위치

**Day 2 완료** — Day 3: 코드베이스 컨텍스트 설계(CLAUDE.md와 auto memory)로 진행 예정.

## 습득한 핵심 개념

- [x] 에이전틱 루프(gather context → take action → verify results)의 공식 정의와 "agentic harness"로서의 Claude Code 개념 (Day 1)
- [x] 모델(추론)과 도구(행동)의 분리, 도구 5개 카테고리(File/Search/Execution/Web/Code intelligence) (Day 1)
- [x] 실행 환경 3분류(Local/Cloud/Remote Control)와 "모든 surface가 같은 루프를 공유한다"는 설계 원칙 (Day 1)
- [x] 세션 독립성, 컨텍스트 윈도우 구성 요소, 자동 compaction 동작(오래된 tool output 삭제 → 요약), CLAUDE.md 재주입 (Day 1)
- [x] checkpoint(파일 되돌리기)와 permission(승인 통제)의 역할 분리, 4대 권한 모드 개요 (Day 1)
- [x] 확장 레이어(Skills/MCP/Hooks/Subagents)가 core loop 위에 있다는 아키텍처 구분 (Day 1)
- [x] 인터페이스 vs 실행 환경(두 독립 축)으로 surface를 분해하는 프레임워크, Web(Cloud)과 Remote Control(Local+원격 제어)의 구분 (Day 2)
- [x] "모든 surface가 동일 엔진을 공유하며 CLAUDE.md/설정/MCP가 이식된다"는 원칙과 headless(-p) 자동화가 실행 환경이 아닌 상호작용 모드의 차이라는 것, GitHub Actions(claude-code-action v1 GA) 구조 (Day 2)
- [ ] CLAUDE.md/auto memory 설계 (예정 Day 3)
- [ ] 권한 모델 심화 (예정 Day 4)
- [ ] 샌드박싱 (예정 Day 5)
- [ ] 보안/위협 모델 (예정 Day 6)
- [ ] MCP (예정 Day 7)
- [ ] Skills (예정 Day 8)
- [ ] Hooks (예정 Day 9)
- [ ] Plugins (예정 Day 10)
- [ ] Subagents (예정 Day 11)
- [ ] Agent Teams/Workflows (예정 Day 12)
- [ ] Background Agent/Routines (예정 Day 13)
- [ ] Remote Control/Channels (예정 Day 14)
- [ ] 코드 리뷰 자동화 (예정 Day 15)
- [ ] CI/CD 통합 (예정 Day 16)
- [ ] 세션 관리 (예정 Day 17)
- [ ] Context Compaction 심화 (예정 Day 18)
- [ ] Prompt Caching (예정 Day 19)
- [ ] 모델/프로바이더 설정 (예정 Day 20)
- [ ] Enterprise/Admin/Observability (예정 Day 21)
- [ ] 트러블슈팅/Production 도입 패턴 (예정 Day 22)
