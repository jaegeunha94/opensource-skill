# 학습 참고 자료

이 문서의 링크와 사실관계는 2026-07 기준 리서치 결과다. Hermes Agent는 2026-02에 공개된 신생 프로젝트로 변화가 매우 빠르므로, 새 Day를 만들 때마다 아래 공식 소스의 최신 상태를 다시 확인한다.

## 공식 소스 — Hermes Agent (Nous Research)

- [Hermes Agent 공식 문서](https://hermes-agent.nousresearch.com/docs/) — quickstart, CLI, configuration, messaging gateway, security, tools, skills, memory, MCP, cron, ACP, API server, architecture
- [Hermes Agent — Configuration](https://hermes-agent.nousresearch.com/docs/user-guide/configuration), [Hermes Agent — Docker](https://hermes-agent.nousresearch.com/docs/user-guide/docker) — terminal backend 설정(local/docker/ssh/daytona/singularity/modal), 작업 디렉토리/타임아웃/컨테이너 이미지 설정(WebFetch가 403을 반환해 직접 인용은 어려웠고, 검색 스니펫과 2차 출처로 교차검증함 — 실제 면접 전 브라우저로 재확인 권장)
- [GitHub — NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — MIT 라이선스, 최신 태그 v0.18.0 "The Judgment Release"(2026-07-01, 2026-07-04 기준 재확인해도 최신 릴리스 동일)
- [GitHub Releases — v0.18.0 "The Judgment Release"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1) — ~1,720 commits, 998 merged PR, P0/P1 이슈 100% 종료, Mixture-of-Agents 정식 지원
- Nous Research 공식 발표(2026-02-25) — "the self-improving AI agent... the only agent with a built-in learning loop"
- GitHub Issues — 의존성 deprecation 경고 사례(예: Issue #29322, `hermes update` 실행 시 `glob`/`inflight` deprecation, v0.14.0 기준 보고)

## Day 2 리서치 — 실행 backend / 배포 토폴로지 (2차 출처, 교차검증 완료)

- Hermes Agent 6개 terminal backend(local/docker/ssh/daytona/singularity/modal) 구성 — 공식 문서, GitHub README, 다수의 독립 튜토리얼(Hermes Agent Tutorial 7: Terminal Backends 등)에서 공통 확인. 일부 3rd-party 블로그(`hermesagents.net`)는 "7개 sandbox backend"라고 서술하나 이는 소수 의견이라 6개를 기준으로 채택
- "$5 VPS" always-on 배포 패턴 — DigitalOcean/Hetzner/Vultr 등 월 5~7달러 VPS, Docker 공식 이미지(`nousresearch/hermes-agent`) 권장, PM2/systemd로 프로세스 상주, 메모리 사용량 500MB 미만(로컬 LLM 미사용 시) — 다수의 실무 배포 가이드(Contabo, Servury, Hostinger 튜토리얼)에서 반복 확인된 패턴
- Daytona hibernate-on-idle: 장시간 유휴 후 첫 요청 약 300ms 깨어남 지연, 이후 요청은 컨테이너 상주로 빠름 / Modal cold start: 워크로드에 따라 약 200ms~2-4초 — 서드파티 인프라 비교 아티클(Modal 공식 블로그, mcp.directory 비교 글) 기준, 수치는 워크로드·리전에 따라 달라질 수 있어 참고치로만 사용

## Day 3 리서치 — Self-Learning/Skill Capture (1차 출처 우선, 2026-07-05 확인)

- [Skills System 공식 문서](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills) 및 GitHub 미러
  [`website/docs/user-guide/features/skills.md`](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/skills.md) —
  `SKILL.md` YAML frontmatter 포맷, When to Use/Procedure/Pitfalls/Verification 표준 섹션, 3가지 호출 경로(슬래시/자연어/번들),
  3단계 점진적 로딩(Level 0 목록 ~3k 토큰 / Level 1 전체 본문 / Level 2 참조 파일), `skill_manage` 툴 6개 액션(create/patch/edit/delete/write_file/remove_file),
  `write_approval` 승인 스테이징(`/skills pending`, `/skills diff`, `/skills approve`), Skills Hub(외부 디렉토리·skills.sh·well-known·GitHub 저장소·ClawHub/LobeHub),
  bundled skill manifest(`.bundled_manifest`, `hermes skills reset/--restore`) — WebFetch 직접 접근은 403이었으나 GitHub raw 미러로 원문 확인
- [Security 공식 문서](https://hermes-agent.nousresearch.com/docs/user-guide/security) — Skills Guard의 사전 스캔(의심스러운 env 접근 패턴),
  `required_environment_variables` 선언 기반 자격증명 passthrough, 컨테이너 격리 시 승인 스킵("컨테이너 자체가 보안 경계") — GitHub raw 미러로 확인
- [MarkTechPost — Nous Research Adds /learn to Hermes Agent's Skills System](https://www.marktechpost.com/2026/06/24/nous-research-adds-learn-to-hermes-agents-skills-system-capturing-workflows-as-slash-commands-without-hand-writing-skill-md/) —
  v0.18.0에서 추가된 `/learn` 커맨드(디렉토리/URL/직전 대화를 소스로 지정해 자동으로 `SKILL.md` 생성), `/journey` 커맨드(스킬·메모리 타임라인 열람/편집/삭제) — 2차 출처, WebSearch 스니펫 기준
- [GitHub — NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution) — DSPy + GEPA(Genetic-Pareto, ICLR 2026 Oral)
  기반 스킬/프롬프트/코드 진화적 최적화. 실행 트레이스 수집 → 반성적 실패 분석 → 실패 모드당 10~20개 변이 생성 → 다목적(성공률×토큰효율×속도) Pareto 평가 → PR 리뷰 게이트,
  러닝당 약 $2~10 비용 — 코어 저장소와 분리된 별도 애드온이라는 점에 유의(WebSearch 스니펫 기준, 원문은 브라우저로 재확인 권장)
- [Security Boulevard — 8 Self-Evolving Skills Hermes Agent Writes on Its Own](https://securityboulevard.com/2026/06/8-self-evolving-skills-hermes-agent-writes-on-its-own/) —
  자기수정형 스킬의 보안 리스크 3계열: 자격증명 응고(credential hardening), 스킬 위장 prompt injection, `.env`/SSH 키 유출 경로화 — 2차 출처

## Day 4 리서치 — Model/Tool/Runtime 경계, Provider 추상화 (1차 출처 우선, 2026-07-06 확인)

- [AI Providers 공식 문서](https://hermes-agent.nousresearch.com/docs/integrations/providers) 및 GitHub 미러
  [`website/docs/integrations/providers.md`](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/integrations/providers.md) —
  provider 4개 티어(Nous Portal/OpenRouter/direct 1st-class provider/custom OpenAI-호환 엔드포인트),
  Nous Tool Gateway(웹검색/이미지생성/TTS/브라우저), Vertex AI 서비스 계정 OAuth2 토큰 발급, credential pool
  로테이션 전략(`fill_first`/`round_robin`/`least_used`/`random`), `fallback_providers` 체인 — WebFetch로
  GitHub raw 미러 원문 확인
- [Configuration 공식 문서](https://hermes-agent.nousresearch.com/docs/user-guide/configuration) — 설정
  계층(CLI 인자 > `config.yaml` > `.env` > 기본값), secret과 비-secret 분리 원칙, auxiliary 모델
  라우팅(`provider: "auto"` 기본값), 프로바이더/모델별 timeout 설정 — WebFetch로 확인
- [Tools Runtime 개발자 문서](https://hermes-agent.nousresearch.com/docs/developer-guide/tools-runtime) 및
  GitHub 미러 `website/docs/developer-guide/tools-runtime.md` — tool dispatch 파이프라인(`run_agent.py`→
  `model_tools.handle_function_call`→agent-loop 툴(`todo`/`memory`/`session_search`/`delegate_task`) 직접
  처리 vs `registry.dispatch`→`ToolEntry`), `ToolEntry` 필드(name/toolset/schema/handler/check_fn/
  requires_env/is_async/emoji), pre-tool/post-tool hook, 이중 에러 래핑, native tool calling vs 텍스트
  fallback(vLLM `--enable-auto-tool-choice --tool-call-parser hermes`, llama.cpp `--jinja`) — WebFetch로
  GitHub raw 미러 원문 확인
- [Code Execution (Programmatic Tool Calling) 공식 문서](https://hermes-agent.nousresearch.com/docs/user-guide/features/code-execution)
  및 GitHub 미러 `website/docs/user-guide/features/code-execution.md` — `execute_code` Unix domain socket
  RPC 아키텍처, `hermes_tools.py` stub 생성, 자식 프로세스 격리, credential stripping(`KEY`/`TOKEN`/`SECRET`
  등 패턴 제거), 리소스 제한(5분 타임아웃/stdout 50KB/stderr 10KB/tool call 50회), Linux/macOS 전용(Windows
  자동 비활성화) — WebFetch로 GitHub raw 미러 원문 확인
- [GitHub Releases — v0.18.0 "The Judgment Release"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1) —
  2026-07-06 기준 재확인해도 최신 릴리스 동일. Mixture-of-Agents(MoA)가 "이름 붙은 앙상블"로 1st-class
  모델 선택지에 승격, Google Vertex AI가 Gemini용 1st-class provider로 추가(서비스 계정 기반 무정적-키
  인증) — 이번 Day의 핵심 최신 근거로 채택

## Day 5 리서치 — MCP/API 통합, ACP 기반 IDE 연동 (1차 출처 우선, 2026-07-07 확인)

- [MCP (Model Context Protocol) 공식 문서](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp)
  및 GitHub 미러 [`website/docs/user-guide/features/mcp.md`](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/mcp.md) —
  Nous 승인 카탈로그(`optional-mcps/`), `hermes mcp`/`catalog`/`install`/`configure`/`login`/`add`/`serve`
  CLI, `/reload-mcp`, stdio vs HTTP transport, OAuth 2.1 자동 처리(discovery/PKCE/토큰 갱신), mTLS
  (`client_cert`/`client_key`), `mcp_<server>_<tool>` 명명 규칙과 `notifications/tools/list_changed`
  기반 동적 재적재, `tools.include`/`exclude`/`prompts`/`resources` 필터링, 자격증명 처리(전체 env
  미전달, `~/.hermes/.env`, `~/.hermes/mcp-tokens/<server>.json` 0o600, `${VAR}`는 연결 시점 치환 vs
  `${INSTALL_DIR}`는 설치 시점 치환), sampling 설정(`max_tokens_cap`/`max_rpm`/`max_tool_rounds`),
  Hermes as MCP server의 10개 tool과 read/send 비대칭 — WebFetch로 GitHub raw 미러 원문 확인
- [MCP Config Reference](https://hermes-agent.nousresearch.com/docs/reference/mcp-config-reference),
  [Use MCP with Hermes 가이드](https://hermes-agent.nousresearch.com/docs/guides/use-mcp-with-hermes) —
  WebSearch 스니펫으로 존재 확인, 세부 설정 항목은 실제 면접/도입 전 브라우저로 재확인 권장
- [ACP Editor Integration 공식 문서](https://hermes-agent.nousresearch.com/docs/user-guide/features/acp)
  및 GitHub 미러 `website/docs/user-guide/features/acp.md` — ACP(Agent Client Protocol) 정의, 세
  진입점(`hermes acp`/`hermes-acp`/`python -m acp_adapter`), 에디터용 축소 toolset(메시징 발신·cron
  제외), stdout=JSON-RPC 전용/stderr=로그, 세션 상태 수명 주기(인메모리 세션 vs 영속
  config.yaml/.env/skills/state.db), 승인 3단계(allow_once/allow_session/allow_always), VS
  Code/Zed/JetBrains 설치 방법, 브라우저 tool 별도 설정(`--setup-browser`) — WebFetch로 GitHub raw
  미러 원문 확인
- [GitHub Issue #569 — Feature: Agent Client Protocol (ACP) Server Mode](https://github.com/NousResearch/hermes-agent/issues/569)
  (2026-03-07 오픈, 2026-07-07 기준 재확인해도 **Open** 상태) — ACP 배경(Apache 2.0, Zed/JetBrains가
  2025-10부터 후원, JSON-RPC 2.0 over stdio, "LSP의 에이전트 버전" 비유), 3단계 구현 로드맵 제안, 툴
  이중성(Hermes 자체 tool vs 에디터 제공 tool) 미해결 논의 — **주의:** 이 이슈는 여전히 제안 단계로
  서술되어 있어 공식 문서(이미 동작하는 기능으로 서술)와 직접 상충한다. 이 트랙 원칙에 따라 더 최신·
  구체적인 공식 문서 쪽을 채택했고, 이 불일치 자체를 Day 5 레슨의 교재(출처 교차검증)로 사용했다.
  실제 도입 전에는 `hermes acp --help` 등으로 직접 재검증 필요
- [GitHub Releases — v0.18.0 "The Judgment Release"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1) —
  2026-07-07 기준 재확인해도 최신 릴리스 동일

## Day 6 리서치 — Gateway와 채널 통합 (1차 출처 우선, 2026-07-08 확인)

- [Messaging Gateway 공식 문서](https://hermes-agent.nousresearch.com/docs/user-guide/messaging) 및
  GitHub 미러 [`website/docs/user-guide/messaging/index.md`](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/messaging/index.md) —
  20개 이상 메시징 플랫폼(Telegram/Discord/Slack/Google Chat/WhatsApp/Signal/SMS/Email/Home
  Assistant/Mattermost/Matrix/DingTalk/Feishu·Lark/WeCom/WeCom Callback/Weixin/BlueBubbles/QQ/
  Yuanbao/Microsoft Teams/LINE/ntfy/Raft/IRC/범용 Webhooks/API Server) 목록과 플랫폼별 기능 비교표,
  아키텍처 다이어그램(어댑터 → per-chat 세션 스토어 → `AIAgent`, cron 스케줄러 60초 tick), 기본값
  "allowlist/DM 페어링 안 되면 전부 거부" 보안 원칙, allowlist 환경변수 표, DM 페어링 흐름
  (`hermes pairing approve/list/revoke`, 코드 1시간 만료·rate-limit), admin/일반 사용자 2단계 티어
  (스코프별 `allow_admin_from`/`user_allowed_commands`), 플랫폼별 toolset 표(대부분
  "터미널 포함 전체 툴"), `/platform list/pause/resume` 명령과 circuit breaker(자동 정지·수동 재개),
  게이트웨이 재시작 시 `restart_interrupted` 세션 자동 재개 — **주의:** 이 문서는
  `user-guide/features/`가 아니라 별도의 `user-guide/messaging/` 디렉터리 하위에 있고,
  "messaging-gateway.md"/"channels.md" 같은 단일 파일명을 가정하면 404가 난다(다수 경로 프로빙 후
  `tree` 페이지 열람으로 실제 경로 확인) — WebFetch로 GitHub raw 미러 원문 확인
- [Gateway Internals 개발자 문서](https://hermes-agent.nousresearch.com/docs/developer-guide/gateway-internals)
  및 GitHub 미러 `website/docs/developer-guide/gateway-internals.md` — 메시지 처리 4단계
  파이프라인(어댑터 정규화 → `MessageEvent` → 세션 가드 → `GatewayRunner._handle_message()`), 세션 키
  포맷 `agent:main:{platform}:{chat_type}:{chat_id}`(`build_session_key()` 강제, 수동 조립 금지),
  권한 판단 5단계 순서(플랫폼 allow-all → 플랫폼 allowlist → DM 페어링 → 전역 allow-all → 기본 거부),
  플랫폼 어댑터 공통 인터페이스(`connect`/`disconnect`/`send`/`on_message`) — WebFetch로 GitHub raw
  미러 원문 확인
- [Adding a Platform Adapter 개발자 문서](https://hermes-agent.nousresearch.com/docs/developer-guide/adding-platform-adapters)
  및 GitHub 미러 `website/docs/developer-guide/adding-platform-adapters.md` — 플러그인 경로
  (`~/.hermes/plugins/<name>/`, 코어 코드 수정 불필요) vs 빌트인 경로(20개 이상 파일 수정) 구분, long-poll
  vs callback/webhook 어댑터 패턴 예시 코드, 콜백형 어댑터의 "즉시 ACK 후 비동기 전달"(WeCom 5초 응답
  데드라인 예시), 토큰 스코프드 락(`acquire_scoped_lock`), 참고 구현 표에서 `weixin.py`(long-poll+CDN,
  미디어 처리·암호화 참고용)와 `wecom_callback.py`(callback/webhook, HTTP 서버·AES crypto·multi-app
  참고용)를 명시 — WebFetch로 GitHub raw 미러 원문 확인
- 개별 채널 문서(GitHub raw 미러로 원문 확인, `website/docs/user-guide/messaging/` 하위) —
  [`telegram.md`](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/messaging/telegram.md)
  (기본 long polling vs 선택적 webhook 모드, `TELEGRAM_WEBHOOK_SECRET` 필수 및 근거로 직접 인용된
  보안 어드바이저리 `GHSA-3vpc-7q5r-276h`, 서버리스 배포에서 webhook이 유리한 이유),
  [`discord.md`](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/messaging/discord.md)
  (게이트웨이 기반 지속 연결, 기본 `group_sessions_per_user: true`로 같은 채널 내 사용자별 세션 분리),
  [`slack.md`](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/messaging/slack.md)
  (Socket Mode — "공개 엔드포인트 없음 = 공격 표면 감소"),
  [`whatsapp.md`](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/messaging/whatsapp.md)
  (비공식 브리지 vs WhatsApp Business Cloud API의 공개 webhook 요구),
  [`weixin.md`](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/messaging/weixin.md)
  (개인 WeChat, iLink Bot API long-polling, "공개 엔드포인트/webhook 불필요" 명시, AES-128-ECB 암호화
  CDN, "SSRF protection — 아웃바운드 미디어 URL 다운로드 전 검증" 명시),
  [`wecom.md`](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/messaging/wecom.md)
  (기업용 WeChat Work, AES-256-CBC 미디어 복호화),
  [`webhooks.md`](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/messaging/webhooks.md)
  (범용 GitHub/GitLab webhook 어댑터, HMAC 서명 3방식 GitHub/GitLab/Generic V1·V2, 시크릿 필수 및
  `INSECURE_NO_AUTH`는 loopback 바인딩에서만 허용, rate limit 분당 30회 기본, idempotency 1시간,
  body size 1MB 기본, "인증됐다는 것과 신뢰할 수 있다는 것은 다르다" 경고 섹션)
- CVE-2026-7396(WeCom `gateway/platforms/wecom.py` path traversal, 인증 불필요·원격·낮은 복잡도)은
  이번 리서치에서 다수의 독립 취약점 데이터베이스로 교차검증했다 — [SentinelOne](https://www.sentinelone.com/vulnerability-database/cve-2026-7396/),
  [Tenable](https://www.tenable.com/cve/CVE-2026-7396), [VulDB](https://vuldb.com/vuln/360120)
  (제목에서 `wecom.py`를 명시적으로 지목), [OffSeq Threat Radar](https://radar.offseq.com/threat/cve-2026-7396-path-traversal-in-nousresearch-herme-04c10dff) —
  전부 2차 출처이며 패치 커밋 diff는 직접 확인하지 못했다. 오늘 재확인한 `weixin.md`/`wecom.md`
  공식 문서에는 SSRF 방지·AES 암호화 같은 강화된 미디어 처리가 명시돼 있어 v0.18.0 시점에는 관련 계층이
  강화된 것으로 보이나, "이 CVE가 정확히 이렇게 패치됐다"는 changelog 문장은 찾지 못했다 — 레슨 본문에
  이 부분을 추론으로 명시했다
- GitHub 이슈 [`#8127`](https://github.com/NousResearch/hermes-agent/issues/8127)("Feature: Cloudflare
  Tunnel controller"), [`#361`](https://github.com/NousResearch/hermes-agent/issues/361)("Feature:
  Pinggy Skill — Zero-Install Localhost Tunnels via SSH") — 둘 다 WebSearch로 존재만 확인(제목
  스니펫 기준), 2026-07-08 기준 열려 있는 것으로 보이며 로컬-first 배포에서 webhook 필수 채널을 받을 때
  터널링이 아직 1급 내장 기능이 아니라 운영자가 직접 구성해야 하는 수동 단계임을 뒷받침하는 정황
  증거로만 사용했다 — 실제 이슈 상태·본문은 실제 도입 전 브라우저로 재확인 필요
- 릴리스 검색 스니펫(2차 출처, WebSearch 기준) — v0.18.0 "The Judgment Release"가 게이트웨이의
  scale-to-zero 운영(유휴 시 dormant, 재시작/마이그레이션/자동 업데이트 전 진행 중 대화를 끊지 않고
  quiesce)을 도입했다고 서술하는 검색 결과가 다수 있었으나, GitHub Releases 원문 페이지에서 이 구체
  문장을 직접 인용 확인하지는 못했다 — 레슨 본문에 2차 출처임을 명시했다
- [GitHub Releases — v0.18.0 "The Judgment Release"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1) —
  2026-07-08 기준 재확인해도 최신 릴리스 동일

## Day 7 리서치 — 메모리와 세션 설계 (1차 출처 우선, 2026-07-09 확인)

- [Memory 공식 문서](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory) 및 GitHub
  미러 [`website/docs/user-guide/features/memory.md`](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/memory.md) —
  `MEMORY.md`(2,200자)/`USER.md`(1,375자) 2파일 구조, `~/.hermes/memories/`, 세션 시작 시 시스템
  프롬프트에 frozen snapshot으로 주입(prefix caching 보존 근거), `memory` 툴 3액션(add/replace/remove,
  read 없음), 용량 초과 시 하드 에러 + 에이전트 자가 정리(80% 사전 통합 권장), `write_approval` 승인
  게이트, `session_search` 툴(SQLite `~/.hermes/state.db`, FTS5, "LLM 요약도 truncation도 없이 실제
  메시지를 그대로 반환"이 원문 문장), `memory.memory_char_limit`/`user_char_limit`/`write_approval`
  등 `config.yaml` 설정 — WebFetch로 GitHub raw 미러 원문 확인
- [Memory Providers 공식 문서](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers)
  및 GitHub 미러 `website/docs/user-guide/features/memory-providers.md` — 외부 메모리 provider
  **9개**(Honcho/OpenViking/Mem0/Hindsight/Holographic/RetainDB/ByteRover/Supermemory/Memori) 목록,
  "내장 메모리는 이전과 동일하게 계속 동작, 외부 provider는 additive"라는 원문 문장, 동시 활성화는
  provider 1개로 제한, `hermes memory setup` 설정 흐름, 프로필별 자격증명/저장 위치 분리, 비용 구조
  (Holographic/ByteRover 로컬 모드 무료, 클라우드 provider 구독제) — WebFetch로 GitHub raw 미러 원문
  확인. **PROGRESS.md 정정:** 사전에 "8개"로 적어뒀던 숫자를 공식 문서 원문 기준 9개로 수정
- [Honcho Memory 공식 문서](https://hermes-agent.nousresearch.com/docs/user-guide/features/honcho) 및
  GitHub 미러 `website/docs/user-guide/features/honcho.md` — 5개 툴(`honcho_profile`/`honcho_search`/
  `honcho_context`/`honcho_reasoning`/`honcho_conclude`), dialectic reasoning(턴마다 `dialecticCadence`
  게이팅, 사후 LLM 분석으로 사용자 선호·습관·목표 도출), base context(요약/표상/peer card/AI
  자기표상, `contextCadence` 갱신) vs dialectic supplement(LLM 합성, `dialecticCadence` 갱신) 2계층,
  cold start vs warm session 프롬프트 분기, `dialecticDepth`(1~3, Pass 0/1/2), 질의 길이 기반
  reasoning level 자동 상향(`reasoningLevelCap`), 세션 전략(`per-session`/`per-directory`)과
  `pinUserPeer` 토글 시 고아 메모리 생성 한계 — WebFetch로 GitHub raw 미러 원문 확인
- [GitHub Issue #4889 — Bug: Honcho dialectic queries fail with oversized `user_message` (skill
  content injected into memory prefetch)](https://github.com/NousResearch/hermes-agent/issues/4889) —
  스킬 실행 시 시스템 프리픽스 + `SKILL.md` 전체 본문이 `user_message`에 섞여 Honcho의 1만 자 질의
  한도를 넘겨 `queue_prefetch_all()`/`sync_all()`이 조용히 실패하는 버그. 코드베이스에 이미 존재하는
  "정제된" `persist_user_message` 변수를 Honcho 호출 지점만 쓰지 않은 게 근본 원인으로 지목됨. WebFetch
  요약 결과 헤더 문구와 본문 상태 라벨이 엇갈려("Closed" 헤더 vs 본문 "Status: Open") 정확한 현재 상태는
  실제 도입 전 브라우저로 재확인 필요 — 이 불일치 자체를 레슨에 명시했다
- [GitHub Releases — v0.18.1(2026.7.7)](https://github.com/NousResearch/hermes-agent/releases) —
  v0.18.0 이후 약 667 커밋 롤업, 설치 프로그램 자가복구·대시보드 안정화 위주 인프라 패치.
  [v0.18.2(2026.7.7.2)](https://github.com/NousResearch/hermes-agent/releases) — WhatsApp Baileys
  의존성을 고정 git 커밋 대신 정식 npm 릴리스로 전환하는 당일 패치. 둘 다 2026-07-08 배포, 메모리/세션
  기능에는 영향 없음을 확인 — WebFetch로 릴리스 목록 확인
- **PROGRESS.md 정정:** 사전에 "FTS5 전문 검색 + LLM 요약"으로 적어뒀던 Day 7 예정 주제 설명 중
  "LLM 요약" 부분은 공식 문서 원문("no LLM summarization, no truncation")과 상충해 정정함. LLM 기반
  사후 처리는 `session_search`가 아니라 Honcho dialectic reasoning 쪽 기능이다

## 보안 감사 / CVE

- 독립 보안 감사(연구자 @Anic888, 2026-04-11) — 기본 설정 기준 Critical 4건 + High 9건: 무제한 셸 실행, 컨테이너 승인 우회, 지속적인 skill-injection 벡터
- `CVE-2026-7396` — WeChat 플랫폼 어댑터 path traversal
- `CVE-2026-48710` — Starlette "BadHost" 이슈, Starlette ≥1.0.1 고정 + SSRF 하드닝/subprocess 자격증명 스트리핑으로 대응
- Repello AI, Cloud Security Alliance — Hermes Agent/에이전트형 도구 CVE 분석 및 위협모델링 글 (2차 출처, 원문은 브라우저로 재확인 권장)

## OpenClaw (비교 대상)

- [GitHub — openclaw/openclaw](https://github.com/openclaw/openclaw) — MIT, Node 24/pnpm, TypeScript
- Wikipedia — OpenClaw 항목(연혁: Warelay(2025-11 최초 공개) → Moltbot(2026-01-27, 상표 이슈로 개명) → OpenClaw(3일 뒤 재개명))
- Fortune 지 보도 — Peter Steinberger의 프로젝트 배경, 2026-02-14 OpenAI 합류 및 OpenClaw Foundation 이관
- `senior-openclaw-interview` 트랙 — OpenClaw 자체의 심층 아키텍처는 별도 트랙에서 다룬다(이 트랙에서는 Day 12 비교 관점 위주)

## 일반 에이전트 하네스 배경 지식 (원리 보강용)

- `senior-ai-harness-interview` 트랙의 RESOURCES.md — Agent = Model + Harness, agent loop, provider abstraction, MCP, 샌드박싱, 관측성 등 provider-agnostic 원리를 먼저 다진다
- [Model Context Protocol 공식 스펙](https://modelcontextprotocol.io/specification/2025-11-25) — Hermes Agent가 채택한 MCP의 표준 스펙
- [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html) — 샌드박싱/권한/prompt injection 방어 원리

## 사용 시 주의사항

- Hermes Agent 관련 콘텐츠는 대부분 튜토리얼/비교 블로그(Composio, Flowtivity, MindStudio, The New Stack, innFactory 등)이며, "10년차 개발자 인터뷰 준비" 목적의 큐레이션 자료는 존재하지 않는다. 이 트랙의 인터뷰 질문·모범답안은 공식 아키텍처 문서와 공개 보안 사례를 근거로 **새로 구성한 것**이며, 실제 면접 전 공식 문서로 세부 사항을 재확인해야 한다.
- `anthropic.com`, GitHub 등 다수의 공식/블로그 도메인이 자동화 접근(WebFetch)에 403을 반환하는 경우가 있다. 이 경우 검색 스니펫과 다수의 독립적인 2차 출처로 교차 검증한 뒤 사용하고, 정확한 인용이 필요하면 실제 브라우저로 원문을 재확인한다.
- 이 트랙에 등장하는 버전 번호(v0.18.0 등), star 수, CVE 대응 상태는 레슨 작성 시점(2026-07) 기준이며 빠르게 바뀔 수 있다.
- "Hermes"라는 이름은 Nous Research의 이전 LLM 파인튜닝 체크포인트 시리즈, 명품 브랜드 Hermès, Hermes JS 엔진과 검색 결과가 섞이기 쉽다. 자료를 찾을 때 항상 "Nous Research hermes-agent" 또는 저장소 URL로 교차 확인한다.
