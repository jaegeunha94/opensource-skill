# Hermes Agent — 10년차 이상 개발자 Interview 대비

## 학습 목표

10년차 이상 백엔드/AI 애플리케이션 개발자 인터뷰에서 평가하는 **Hermes Agent**(Nous Research가 만든 always-on, local-first, self-learning 오픈소스 에이전트) 설계·운영 역량을 체계적으로 준비한다.

이 트랙은 CLI 명령어 암기나 설치 튜토리얼이 아니라, 면접관이 실제로 평가하는 수준인:

- **런타임 아키텍처 판단력**: 요청-응답형 챗봇과 always-on 에이전트 런타임의 차이, 단일 core loop이 여러 진입점(CLI/Gateway/ACP/Batch/API)을 어떻게 재사용하는지, task refinement(애매한 요청을 실행 가능한 작업으로 다듬는 과정)를 어디서 어떻게 설계하는지
- **local-first 배포 판단력**: 로컬 실행, 컨테이너 격리, 원격 백엔드, 서버리스 백엔드 사이의 실제 운영 trade-off — "로컬에서 돈다"가 곧 "24시간 켜져 있다"를 의미하지 않는다는 것을 구조적으로 설명하는 능력
- **자가 학습/스킬 캡처 설계**: 에이전트가 작업 이후 스스로 재사용 가능한 스킬을 생성·개선하는 학습 루프를 어떻게 안전하게 운영하는지
- **모델/툴/런타임 경계**: provider abstraction, tool calling, MCP/ACP 통합, Gateway/채널 통합을 아키텍처 레이어로 구분해서 설명하는 능력
- **메모리/세션/스케줄링**: 세션 간 기억, 사용자 모델링, cron 기반 반복 작업 설계
- **replay/평가 루프**: batch 모드와 trajectory 기록을 이용한 회귀 테스트·파인튜닝 데이터 생성 감각
- **보안 판단력**: 샌드박스 격리, 권한 모델(7-layer defense), provenance, prompt injection 방어를 실제 공개된 CVE·감사 사례에 근거해 설명하는 능력
- **OpenClaw와의 운영 trade-off**: 유사 목적을 가진 두 오픈소스 프로젝트의 아키텍처 철학 차이(“에이전트를 감싼 게이트웨이” vs “게이트웨이를 감싼 에이전트”)와 상호운용성의 현실적 한계
- **관측성/트러블슈팅/비용-지연-신뢰성 trade-off**: 프로덕션 운영 판단

을 면접 현장에서 구조적으로, 근거를 대며 설명할 수 있도록 훈련한다.

## 전제 지식

- LLM API 호출과 기본적인 tool calling 경험
- 에이전트 하네스/AI harness 일반 원리(가능하면 `senior-ai-harness-interview` 트랙 선행 권장, 필수는 아님)
- 백엔드 서비스 배포, 컨테이너, 네트워크 보안에 대한 일반적인 이해
- Hermes Agent나 OpenClaw를 실제로 설치해본 경험은 없어도 무방하다 — 이 트랙은 **아키텍처 원리와 운영 판단력**을 중심으로 진행하며, 필요한 배경 지식은 그때그때 쉬운 한국어로 설명한다

## Hermes Agent란 무엇인가 (용어 혼동 주의)

**Hermes Agent**는 AI 모델 회사 **Nous Research**가 만든 오픈소스 always-on 에이전트 프로젝트다(`github.com/NousResearch/hermes-agent`, MIT 라이선스). "The self-improving AI agent... the only agent with a built-in learning loop"라는 카피로 2026-02-25 공개되었다. Nous Research가 이전에 내놓은 파인튜닝 LLM 체크포인트 시리즈("Hermes" 모델들)와는 **다른, 별개의 제품**이므로 혼동하지 않는다. 또한 명품 브랜드 Hermès, Meta의 Hermes JS 엔진과도 무관하다.

이 트랙에서 자주 비교 대상으로 등장하는 **OpenClaw**(전 Warelay → Moltbot → OpenClaw, Peter Steinberger가 만든 프로젝트, 현재는 OpenClaw Foundation이 운영)는 Hermes Agent와 **계보가 다른 독립 프로젝트**다. 둘 다 "로컬 우선 always-on 개인 에이전트"라는 목표는 공유하지만 아키텍처 철학이 다르다 — 자세한 비교는 Day 12에서 다룬다.

## 최신성에 대한 중요 안내

Hermes Agent는 **2026-02에 처음 공개된 신생 프로젝트**이고, 이 트랙 작성 시점(2026-07)에도 활발히 버전이 올라가고 있다(최신 태그 v0.18.0 "The Judgment Release", 2026-07-01). 이 분야는:

- **공식 문서(`hermes-agent.nousresearch.com/docs/`)와 GitHub README/Issues/CVE가 유일하게 신뢰할 수 있는 1차 출처**이고, "Hermes Agent 인터뷰 준비" 같은 큐레이션된 콘텐츠는 아직 존재하지 않는다. 이 트랙의 인터뷰 질문·답변은 공식 아키텍처 문서와 공개된 보안 감사·CVE를 근거로 **새로 구성한 것**이다.
- 실제 인터뷰 전에는 반드시 `hermes-agent.nousresearch.com/docs/`의 최신 changelog, GitHub Releases, 그리고 CVE 데이터베이스를 재확인해야 한다. 버전 번호, star 수, 세부 기능 이름은 트랙 작성 시점 기준이며 빠르게 바뀔 수 있다.
- 독립 보안 감사(2026-04-11, 연구자 @Anic888)에서 기본 설정 기준 Critical 4건 + High 9건이 발견되었고, `CVE-2026-7396`(WeChat 어댑터 path traversal), `CVE-2026-48710`(Starlette BadHost/SSRF)가 공개되어 있다. v0.18.0은 P0/P1 이슈를 모두 닫았다고 주장하지만, **면접에서는 "지금 이 버전이 안전하다"가 아니라 "이런 취약점 계열을 어떻게 미리 방어하도록 설계하는가"를 답할 수 있어야 한다.**

커리큘럼 진행 중 위 내용과 상충하는 최신 근거(공식 문서, changelog, CVE, 신뢰할 수 있는 production 사례)가 발견되면, 아래 최소 기준보다 **최신 근거를 우선**하여 커리큘럼과 예시를 조정한다.

## 커리큘럼 개요 (총 14 Day)

| Day | 주제 | 핵심 개념 |
|-----|------|-----------|
| 1 | Hermes Agent Runtime과 Task Refinement 운영 프레임워크 | always-on vs 요청-응답, 단일 AIAgent core loop + 다중 entry point, Prompt Builder → Provider Resolution → Tool Dispatch, task refinement 위치, local-first 배포 판단 |
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

이 목록은 최소 기준이며, 진행 중 최신 인터뷰 트렌드나 공식 문서 변화에 따라 Day가 추가되거나 순서가 조정될 수 있다.

## 학습 원칙

1. 각 레슨은 **면접 질문 → 전제 개념 → 왜 면접에서 묻는가 → 실무 연결 → 답변 사고 순서 → 핵심 답변 예시 → senior-level follow-up → 좋은 답변 vs 약한 답변 → 흔한 오해 → 자기 점검 rubric** 순서로 진행한다.
2. 어려운 개념은 쉬운 한국어로 전제 개념부터 설명하고, 영어 기술 용어는 원어를 병기한다.
3. Hermes Agent는 신생·고속 변화 프로젝트이므로, 공식 문서에 명시되지 않은 세부 사항은 "공식 문서에 명시되지 않았지만 아키텍처상 이렇게 추론할 수 있다"처럼 **추론과 사실을 구분해서** 설명한다.
4. OpenClaw를 자주 비교 대상으로 쓰되, 매번 "왜 이 차이가 실제 운영 판단에 영향을 주는가"로 마무리한다.
5. 각 레슨 마지막에는 자기 점검 rubric으로 학습 수준을 확인한다.
