# OpenClaw — 10년차 이상 개발자 Interview 대비

## 학습 목표

10년차 이상 백엔드/AI 애플리케이션 개발자 인터뷰에서 평가하는 **OpenClaw local-first agent platform** 운영 역량을 체계적으로 준비한다.

이 트랙은 OpenClaw CLI 명령어 암기가 아니라, **로컬 우선(local-first)으로 동작하는 개인/팀용 AI 에이전트 게이트웨이를 설계·운영·보안 관점에서 판단하는 능력**을 다룬다. 면접관이 실제로 보는 수준인:

- **아키텍처 판단력**: Gateway를 단일 제어 평면(control plane)으로 두는 이유, local-first 설계가 해결하는 문제와 트레이드오프, 세션/채널/도구 디스패치 구조
- **멀티채널 운영**: 50개 이상 메시징 채널(WhatsApp, Telegram, Slack, Discord 등)을 하나의 Gateway로 라우팅할 때의 바인딩 우선순위, DM 정책(pairing/allowlist/open/disabled) 설계
- **모델/비용/신뢰성 trade-off**: model provider 설정, auth profile rotation, 요금제/rate limit에 따른 model failover 체인 설계
- **보안 판단력**: 단일 신뢰 경계(one trusted operator per gateway) 모델의 한계, 샌드박싱 모드(host/Docker/none), remote exposure runbook, ClawHub 마켓플레이스 공급망 리스크
- **운영/장애 대응**: 로깅 레벨, `openclaw doctor`, 배포 토폴로지(Gateway + Node/companion app), 온보딩·업데이트·마이그레이션 흐름

을 면접 현장에서 구조적으로 설명할 수 있도록 훈련한다.

## 전제 지식

- 메시징 봇/웹훅 기반 통합 서비스를 운영해본 경험, 또는 백엔드 서비스의 프로세스/네트워크 보안 모델에 대한 일반적인 이해
- LLM API 호출 및 tool calling 개념에 대한 기본 이해(자세한 harness 설계 원리는 별도 트랙 `senior-ai-harness-interview` 참고)
- OpenClaw를 직접 설치해본 경험은 없어도 무방하다 — 이 트랙은 **아키텍처 원리와 운영 판단력**을 중심으로 진행하며, CLI 명령어는 그 판단을 뒷받침하는 근거로만 사용한다

## 최신성에 대한 중요 안내

OpenClaw는 2026년 들어 빠르게 성장한 오픈소스 local-first 에이전트 플랫폼으로, **문서·명령어·보안 사고 사례가 매우 빠르게 갱신되는 중**이다. 이 트랙은 레슨 생성 시점(2026-07) 기준 공식 문서(`docs.openclaw.ai`), GitHub 저장소, changelog/migration guide, 그리고 신뢰할 수 있는 보안 리서치(Unit 42, Dark Reading, eSecurity Planet 등)를 조사해 작성되며, 아래 사실을 전제로 진행한다.

- **Gateway는 단일 Node.js 프로세스**로, 기본 포트(문서 기준 `18789`)에서 WebSocket과 HTTP를 함께 멀티플렉싱하며, **기본값은 loopback(127.0.0.1) 바인딩**이다. Control UI와 WebChat도 같은 포트에서 서비스된다.
- OpenClaw 보안 문서는 **"one trusted operator boundary per gateway"(게이트웨이당 신뢰 경계 1개, personal-assistant 모델)**를 공식 전제로 명시한다. 이는 멀티테넌트 회사 환경에 그대로 맞지 않으며, 팀에서 쓰려면 별도의 격리 설계가 필요하다.
- **DM 정책은 4가지 모드**(pairing/allowlist/open/disabled)로 나뉘며, 기본값은 pairing이다. `allowlist` 모드에서 빈 allow 목록은 설정 검증 단계에서 거부된다.
- **모델 장애 대응은 2단계 구조**다 — 같은 provider 안에서의 auth profile rotation(자격 증명 교체) 후, 그래도 실패하면 `agents.defaults.model.fallbacks`에 정의된 다음 모델로 전환한다. 프로필은 세션당 pin되어 provider 캐시를 따뜻하게 유지한다. 프로필 로테이션은 방금 성공한 프로필(lastGood)을 우선하지 않고 타입 우선순위(oauth>token>api-key) + `lastUsed` 라운드로빈을 쓰는데, 이는 "특정 프로필이 트래픽을 독점해 다른 정상 프로필이 굶주리는 것을 막기 위한" 의도적 설계로 문서/소스 코드에 명시돼 있다(Day 4, 2026-07 리서치로 확인).
- **auth profile 저장소는 2026.6.x부터 JSON(`auth-profiles.json`)에서 SQLite로 전환 중**이며, 이 전환 자체가 기존 프로필을 경고 없이 유실시켜 인증/폴백 체인을 무력화하는 미해결 이슈(GitHub #100067, 2026-07-04 기준 open)를 안고 있다. 또한 세션 모델 오버라이드가 compaction 이후에도 조용히 유지되거나(#92864), 업그레이드 마이그레이션이 기본 모델을 조용히 유료 변형으로 바꾸는(#74395) 등, "failover/폴백 자동화가 비용 안전망은 아니다"라는 것을 보여주는 실제 production 사고 사례가 여러 건 보고돼 있다(Day 4).
- **ClawHub(스킬 마켓플레이스)는 2026년 상반기에 여러 차례 공급망 공격 사례를 겪었다.** Bitdefender Labs는 초기 몇 주간 분석된 스킬의 약 17%가 악성 페이로드를 포함했다고 보고했고, Koi Security의 "ClawHavoc" 리서치는 341개의 악성 스킬을 문서화했으며, Unit 42는 2~5월 사이 자동 스캐너(VirusTotal, ClawScan)를 우회한 정교한 악성 스킬 5건(인포스틸러, 스캐너 우회, 에이전틱 사기)을 공개했다. 이후 ClawHub는 VirusTotal/ClawScan 통합과 NVIDIA와의 협업 스캐닝을 추가했다.
- **Node(companion app)는 Gateway가 아니다.** macOS/iOS/Android/headless에서 동작하는 Node는 `role: "node"`로 같은 WebSocket에 연결해 카메라/화면/시스템 명령 같은 기기별 capability를 노출할 뿐, 자체적으로 Gateway를 구동하지 않는다. Android는 Gateway를 호스팅할 수 없고 반드시 별도의 Gateway(주로 macOS/Linux/WSL2)가 필요하다.
- `openclaw migrate`(플랜 모드, dry-run, 자동 백업 지원)와 `openclaw doctor --fix`가 정식 마이그레이션/자동 복구 도구로 자리잡았다. `openclaw doctor --deep --yes`는 문제의 상당수를 자동으로 해결하는 1차 트러블슈팅 진입점으로 문서화되어 있다.

커리큘럼 진행 중 위 내용과 상충하는 최신 근거(공식 문서, changelog, deprecation 공지, 신뢰할 수 있는 production/보안 사례)가 발견되면, 아래 커리큘럼 개요보다 **최신 근거를 우선**하여 각 Day의 내용과 예시를 조정한다.

## 커리큘럼 개요 (총 14 Day)

| Day | 주제 | 핵심 개념 |
|-----|------|-----------|
| 1 | OpenClaw Gateway와 local-first agent 운영 프레임워크 | 단일 프로세스 control plane, WS+HTTP 멀티플렉싱, loopback 기본 바인딩, "one trusted operator per gateway", 운영 명령(`status`/`restart`/`doctor`) |
| 2 | 멀티채널 통합과 메시지 라우팅 | 50+ 채널 통합, 8-tier 바인딩 우선순위, 세션 스코핑(`agent:main:<mainKey>`), 채널별 config 네임스페이스 |
| 3 | 온보딩과 업데이트/마이그레이션 흐름 | `openclaw onboard`, import 플로우, `openclaw migrate`(plan/dry-run/backup), breaking change 대응, `doctor --fix` |
| 4 | Model Provider 설정과 Auth Profile Rotation/Failover | auth-profiles.json, profile pinning(auto vs user), 라운드로빈 순서, cooldown/backoff, 에러 분류(terminal vs retryable) |
| 5 | Tools와 Tool Dispatch 보안 | tool router, 실행 정책(approve/deny), exec/browser/read tool 권한 스코핑, least-privilege 설계 |
| 6 | Sessions, Prompt/Memory 파일 | SOUL.md/AGENTS.md/USER.md, agentDir 격리, daily memory(`memory/*.md`), 부트스트랩 주입, 컨텍스트 예산 |
| 7 | Skills와 ClawHub | SKILL.md 구조, skill install/update, clawhub CLI(publish/version/search), 벡터 검색, moderation hook |
| 8 | Multi-Agent 라우팅과 격리 | 다중 에이전트 workspace 분리, agentDir 충돌 방지, per-agent 세션 스토어, 워크스페이스 간 경계 |
| 9 | 샌드박싱 아키텍처 | host/Docker/none 실행 모드, 네트워크 없는 컨테이너 격리, 상대경로 vs 절대경로 파일 접근 위험 |
| 10 | DM Pairing, Allowlist, Remote Exposure Runbook | 4가지 DM 정책, pairing 핸드셰이크, allowlist 검증 규칙, exposure runbook 체크리스트, 리버스 프록시/터널 패턴 |
| 11 | Companion App/Node와 배포 토폴로지 | Gateway(brain) vs Node(limbs), `node.invoke`, macOS/Android/iOS 앱의 role 차이, "cloud brain, local hands" 토폴로지 |
| 12 | 로깅과 트러블슈팅 | 5단계 로그 레벨, `OPENCLAW_LOG_LEVEL`, diagnostics flags, `openclaw doctor`/`logs --follow` 운영 루틴 |
| 13 | 마켓플레이스 보안과 공급망 리스크 | ClawHub 악성 스킬 사고(Unit 42/Bitdefender/Koi Security), 스캐너 우회 기법, 조직 차원의 스킬 승인 정책 |
| 14 | Production Operation Trade-off 종합 | local-first vs 클라우드 SaaS, 가용성/백업/멀티디바이스, 신뢰 경계 확장 전략, 면접 종합 시뮬레이션 |

이 목록은 최소 기준이며, 진행 중 최신 인터뷰 트렌드나 공식 문서/보안 사고 변화에 따라 Day가 추가되거나 순서가 조정될 수 있다.

## 학습 원칙

1. 각 레슨은 **면접 질문 → 전제 개념 → 왜 면접에서 묻는가 → 실무 연결 → 답변 사고 순서 → 핵심 답변 예시 → senior-level follow-up → 좋은 답변 vs 약한 답변 → 흔한 오해 → 자기 점검 rubric** 순서로 진행한다.
2. 어려운 개념은 쉬운 한국어로 전제 개념부터 설명하고, 영어 기술 용어는 원어를 병기한다.
3. CLI 문법 나열이 아니라 **"왜 이렇게 설계했는가"와 "이게 프로덕션에서 어떤 사고로 이어지는가"**를 항상 함께 설명한다. 명령어/설정 키/포트 번호는 레슨 작성 시점(2026-07) 기준이며 실제 면접 전 공식 문서로 재확인해야 한다.
4. ClawHub 악성 스킬 사고처럼 실제 보안 리서치가 확인한 production 사례를 근거로 삼되, 출처가 불확실한 수치는 "리서치에 따르면" 식으로 조건부로 인용한다.
5. 각 레슨 마지막에는 자기 점검 rubric으로 학습 수준을 확인한다.
