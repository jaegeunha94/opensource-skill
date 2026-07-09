# OpenClaw Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-03 | OpenClaw Gateway와 local-first agent 운영 프레임워크 | [0001-openclaw-gateway-local-first-operating-framework.html](lessons/0001-openclaw-gateway-local-first-operating-framework.html) |
| 2 | 2026-07-04 | 멀티채널 통합과 메시지 라우팅 | [0002-multichannel-integration-message-routing.html](lessons/0002-multichannel-integration-message-routing.html) |
| 3 | 2026-07-05 | 온보딩과 업데이트/마이그레이션 흐름 | [0003-onboarding-update-migration-flow.html](lessons/0003-onboarding-update-migration-flow.html) |
| 4 | 2026-07-06 | Model Provider 설정과 Auth Profile Rotation/Failover | [0004-model-provider-auth-profile-rotation-failover.html](lessons/0004-model-provider-auth-profile-rotation-failover.html) |
| 5 | 2026-07-07 | Tools와 Tool Dispatch 보안 | [0005-tools-tool-dispatch-security.html](lessons/0005-tools-tool-dispatch-security.html) |
| 6 | 2026-07-08 | Sessions, Prompt/Memory 파일 | [0006-sessions-prompt-memory-files.html](lessons/0006-sessions-prompt-memory-files.html) |
| 7 | 2026-07-09 | Skills와 ClawHub | [0007-skills-clawhub.html](lessons/0007-skills-clawhub.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 8 | Multi-Agent 라우팅과 격리 | 다중 에이전트 workspace 분리, agentDir 충돌 방지, per-agent 세션 스토어 |
| 9 | 샌드박싱 아키텍처 | host/Docker/none 실행 모드, 네트워크 없는 컨테이너 격리, 절대경로 파일 접근 위험 |
| 10 | DM Pairing, Allowlist, Remote Exposure Runbook | 4가지 DM 정책, pairing 핸드셰이크, allowlist 검증 규칙, exposure runbook, 리버스 프록시/터널 패턴 |
| 11 | Companion App/Node와 배포 토폴로지 | Gateway(brain) vs Node(limbs), `node.invoke`, 플랫폼별 role 차이, "cloud brain, local hands" |
| 12 | 로깅과 트러블슈팅 | 5단계 로그 레벨, `OPENCLAW_LOG_LEVEL`, diagnostics flags, `openclaw doctor`/`logs --follow` |
| 13 | 마켓플레이스 보안과 공급망 리스크 | ClawHub 악성 스킬 사고, 스캐너 우회 기법, 조직 차원의 스킬 승인 정책 |
| 14 | Production Operation Trade-off 종합 | local-first vs 클라우드 SaaS, 가용성/백업/멀티디바이스, 신뢰 경계 확장 전략, 면접 종합 시뮬레이션 |

## 현재 학습 위치

**Day 7 완료** — 다음: Day 8 — Multi-Agent 라우팅과 격리

## 습득한 핵심 개념

- [x] Gateway = 단일 Node.js 프로세스, WS+HTTP 멀티플렉싱 control plane (Day 1)
- [x] Local-first 아키텍처의 의미와 트레이드오프 (Day 1)
- [x] Loopback 기본 바인딩과 "one trusted operator per gateway" 보안 모델 (Day 1)
- [x] Gateway 운영 명령(`status`/`restart`/`doctor`)과 SPOF 완화 전략 (Day 1)
- [x] 8-tier 바인딩 우선순위(구체성 기준: peer → parent peer → guild+roles → guild → team → account → channel → default) (Day 2)
- [x] 세션 키 스코핑(DM 합침 vs 그룹/스레드 쪼갬), 채널 config 네임스페이스(`channels.<channel>.accounts.<id>`)와 `defaultAccount` 리스크 (Day 2)
- [x] `onboard`(quickstart/manual/import) vs `migrate`(타 도구 import 전용 dry-run/backup) vs `doctor --fix`(사후 복구)의 경계, 버전 간 config 스키마 변경에 대한 proactive diff 도구 공백(GitHub #35957/#38249) (Day 3)
- [x] 2단계 failover 구조(auth profile 로테이션 → model fallback), 정렬 로직(타입 우선순위 + lastUsed 라운드로빈, lastGood 의도적 배제), 세션 pin, retryable/terminal 에러 분류, 2026.6.x JSON→SQLite auth 저장소 마이그레이션 리스크, 실제 비용/신뢰성 사고 사례(GitHub #100067/#48623/#99809/#99993/#92864/#74395/#73182/#92674/#88371) (Day 4)
- [x] tool policy는 모델 호출 전에 스키마 자체를 제거하는 방식으로 작동, sandbox/tool policy/elevated의 3축 독립성, exec vs write/edit 부작용 함정, 샌드박스 유무에 따른 exec 기본값 비대칭(gateway 기본 full), 승인 바인딩(cwd/args/env/실행파일 경로 고정 후 drift 시 거부), workspaceOnly 옵트인, 프롬프트 기반 가드레일의 실증적 한계, 실제 사고 사례(GitHub #16323, GHSA-m3mh-3mpg-37hw, #12173, GHSA-cv7m-c9jx-vg7q/CVE-2026-26329, #12202/#5948/#32637) (Day 5)
- [x] 세션 키 패턴(`agent:<agentId>:<mainKey>`)과 소스별(DM/그룹/방/cron/webhook) 스코핑, 세션 가시성 통제(`tools.sessions.visibility`)가 CVE-2026-27004 리트로핏으로 도입된 배경 (Day 6)
- [x] 부트스트랩 파일 8종(AGENTS/SOUL/TOOLS/IDENTITY/USER/HEARTBEAT/BOOTSTRAP/MEMORY)의 순차 주입(병합 아님) 순서, 서브 에이전트 필터링, 캐시 경계 배치 (Day 6)
- [x] workspace vs agentDir 구분과 혼동 시 보안 규칙이 조용히 무효화되는 실제 사고(#29387) (Day 6)
- [x] 메모리 3계층(MEMORY.md/daily notes/DREAMS.md) 증류 구조, 무한 증가 방지(디스크 무제한 vs 주입 사본 예산 내 절단), compaction-memoryFlush 연결 (Day 6)
- [x] compaction(보이는 것만 변경, 전체 이력 보존)과 session pruning(캐시 TTL+크기 임계값 동시 충족)의 구분, 압축 경계에서 세션 오버라이드 미리셋으로 인한 실제 비용 사고(#92864, $300/일) (Day 6)
- [x] 부트스트랩/메모리 파일 로딩의 인젝션 탐지 공백(#66350), 압축 위장 프롬프트 인젝션 실제 페이로드(#30111), 공식 위협 모델의 커버리지 공백, 관련 CVE(CVE-2026-27004/53844/53825) (Day 6)
- [x] SKILL.md frontmatter(`metadata.openclaw`, `requires.env/bins/anyBins`, `always`, `skillKey` 등)가 단순 문서화가 아니라 선언-행동 일치를 검증하는 계약이라는 것, 스킬 디스커버리 6-tier 우선순위(workspace > project agent > personal agent > managed > bundled > extra), ClawHub 설치만 `skills update`가 자동 추적하는 비대칭성, ClawHub 벡터 검색(OpenAI 임베딩 + Convex), 다중 스캐너(VirusTotal/NVIDIA SkillSpector/정적 분석) + 판사 하니스 스캐닝 파이프라인과 스캐너 간 낮은 합의율(공통 탐지 10.4% 이하, 단일 스캐너 전용 81.9%)의 한계, "서드파티 스킬 = untrusted code" 공식 경고 (Day 7)
- [ ] Multi-agent 라우팅과 격리 (예정 Day 8)
- [ ] 샌드박싱 아키텍처 (예정 Day 9)
- [ ] DM pairing/allowlist/remote exposure runbook (예정 Day 10)
- [ ] Companion app/Node, 배포 토폴로지 (예정 Day 11)
- [ ] 로깅/트러블슈팅 (예정 Day 12)
- [ ] 마켓플레이스 보안/공급망 리스크 (예정 Day 13)
- [ ] Production operation trade-off 종합 (예정 Day 14)
