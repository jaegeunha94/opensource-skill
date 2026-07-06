# 학습 참고 자료

이 문서의 링크는 2026-07 기준 리서치 결과다. OpenClaw는 릴리스 주기가 빠르고 보안 사고 리서치가 계속 갱신되므로,
새 Day를 만들 때마다 아래 공식 소스와 보안 리서치의 최신 상태를 다시 확인한다.

## 공식 문서 — docs.openclaw.ai

- [Gateway architecture](https://docs.openclaw.ai/concepts/architecture) — 단일 프로세스, WS+HTTP 멀티플렉싱, 세션/채널/도구 디스패치
- [Security](https://docs.openclaw.ai/gateway/security) — "one trusted operator boundary per gateway" 전제, DM 정책, 자격 증명 처리
- [Configuration](https://docs.openclaw.ai/gateway/configuration) / [Configuration reference](https://docs.openclaw.ai/gateway/configuration-reference)
- [Configuration — agents](https://docs.openclaw.ai/gateway/config-agents) — 에이전트별 workspace, agentDir, 세션 키
- [Channel routing](https://docs.openclaw.ai/channels/channel-routing) — 8-tier 바인딩 우선순위(peer/parent peer/guild+roles/guild/team/account/channel/default), 세션 키 스코핑 규칙 (Day 2 핵심 출처)
- [Configuration — channels](https://docs.openclaw.ai/gateway/config-channels) — `channels.<channel>.accounts.<id>` 네임스페이스, `defaultAccount` fallback 규칙 (Day 2)
- [Remote access](https://docs.openclaw.ai/gateway/remote)
- [Gateway exposure runbook](https://docs.openclaw.ai/gateway/security/exposure-runbook) — 원격 접근/DM 정책/리버스 프록시 변경 전 체크리스트
- [Troubleshooting](https://docs.openclaw.ai/gateway/troubleshooting)
- [Logging](https://docs.openclaw.ai/logging)
- [Pairing](https://docs.openclaw.ai/channels/pairing) — DM pairing 핸드셰이크
- [Nodes](https://docs.openclaw.ai/nodes) — companion node, `node.invoke`, capability 노출
- [Skills](https://docs.openclaw.ai/tools/skills)
- [Multi-agent routing](https://docs.openclaw.ai/concepts/multi-agent)
- [Multi-agent sandbox and tools](https://docs.openclaw.ai/tools/multi-agent-sandbox-tools)
- [Model providers](https://docs.openclaw.ai/concepts/model-providers)
- [Model failover](https://docs.openclaw.ai/concepts/model-failover)
- [Models CLI](https://docs.openclaw.ai/concepts/models)
- [FAQ — models and auth](https://docs.openclaw.ai/help/faq-models)
- [Migration guide](https://docs.openclaw.ai/install/migrating)
- [Plugin SDK migration](https://docs.openclaw.ai/plugins/sdk-migration)
- [Android app](https://docs.openclaw.ai/platforms/android)

## 소스 저장소 / 패키지

- [GitHub — openclaw/openclaw](https://github.com/openclaw/openclaw) — 메인 저장소, README
- [GitHub — openclaw/clawhub](https://github.com/openclaw/clawhub) — 스킬/플러그인 레지스트리
- [GitHub — openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) — Windows companion node(트레이 앱)
- [npm — openclaw](https://www.npmjs.com/package/openclaw)
- [GitHub — rohitg00/awesome-openclaw](https://github.com/rohitg00/awesome-openclaw) — 커뮤니티 큐레이션 목록

## DM 정책 / 원격 노출 / 보안 하드닝 (2차 해설 자료)

- [OpenClaw DM Policy: How All Four Modes Actually Work — Stack Junkie](https://www.stack-junkie.com/blog/openclaw-dm-policy-explained-pairing-allowlist-open-and-disabled)
- [OpenClaw security: architecture and hardening guide — Nebius](https://nebius.com/blog/posts/openclaw-security)
- [Secure Remote Access to OpenClaw Control Panel with Cloudflare Tunnel](https://www.frank.hk/en/posts/2026/secure-remote-access-openclaw-cloudflare-tunnel/)
- [OpenClaw Behind Cloudflare Tunnel or Tailscale (No Public Ports)](https://blog.canadianwebhosting.com/openclaw-cloudflare-tunnel-tailscale-no-public-ports/)
- [Securely access OpenClaw over the Internet: Cloudflare Workers VPC — Harshil](https://harshil.dev/writings/expose-openclaw-with-cloudflare-tunnels-and-workers-vpc/)
- [OpenClaw Gateway Commands: Port 18789 Setup, Start/Stop & Token Auth — Meta Intelligence](https://www.meta-intelligence.tech/en/insight-openclaw-gateway-commands)

## 멀티채널 라우팅 (2차 해설 자료 — Day 2 교차 검증용)

- [How OpenClaw Routes Messages Across Channels — Team 400 Blog](https://team400.ai/blog/2026-03-openclaw-channel-routing-explained)
- [OpenClaw Channel Routing: Keep One Agent Smart Across Every App — OpenClaw Playbook Blog](https://www.openclawplaybook.ai/blog/openclaw-channel-routing-multi-app-agent/)
- [The Ultimate Guide to OpenClaw Gateway Bind Configuration in 2026 — Skywork](https://skywork.ai/skypage/en/openclaw-gateway-bind-configuration/2038554785426968576)
- [OpenClaw Config Reference: Every openclaw.json Option — Stack Junkie](https://www.stack-junkie.com/blog/openclaw-environment-variables-reference)

## 아키텍처 딥다이브 (2차 해설 자료 — 교차 검증 필요)

- [OpenClaw Architecture & Setup Guide (2026) — Valletta](https://vallettasoftware.com/blog/post/openclaw-2026-guide)
- [OpenClaw Architecture, Explained: How It Works — ppaolo (Substack)](https://ppaolo.substack.com/p/openclaw-system-architecture-overview)
- [Deep dive into the OpenClaw Gateway architecture — practiceoverflow (Substack)](https://practiceoverflow.substack.com/p/deep-dive-into-the-openclaw-gateway)
- [OpenClaw Architecture Explained: Gateway, Channel, LLM Layers — BetterLink](https://eastondev.dev/blog/en/posts/ai/20260205-openclaw-architecture-guide/)
- [Deep Dive into OpenClaw: Architecture, Code & Ecosystem — Medium](https://medium.com/@dingzhanjun/deep-dive-into-openclaw-architecture-code-ecosystem-e6180f34bd07)
- [Every Way to Deploy OpenClaw: Architecture Setups Compared — FlowZap](https://flowzap.xyz/blog/every-way-to-deploy-openclaw)
- [How to Run Multiple OpenClaw Agents on a Single Server — Stack Junkie](https://www.stack-junkie.com/blog/openclaw-multi-agent-setup-guide)
- [OpenClaw multi-agent coordination, patterns and governance — LumaDock](https://lumadock.com/tutorials/openclaw-multi-agent-coordination-governance)
- [OpenClaw Gateway in 2026: Multi-Model Providers — API Keys, Env Vars & Auth Profiles — clonzone](https://clonzone.com/en/blog/articles/openclaw-gateway-multi-provider-api-key-env-auth-profile-failover-2026/openclaw-gateway-multi-provider-api-key-env-auth-profile-failover-2026.html)

## 마켓플레이스 보안 / 공급망 사고 (핵심 production 사례)

- [Unit 42 — OpenClaw's Skill Marketplace and the Emerging AI Supply Chain Threat](https://unit42.paloaltonetworks.com/openclaw-ai-supply-chain-risk/) — 2~5월 사이 스캐너(VirusTotal/ClawScan) 우회 악성 스킬 5건
- [Dark Reading — More Malicious OpenClaw Skills Threaten AI Supply Chain](https://www.darkreading.com/cyber-risk/malicious-openclaw-skills-clawhub-threaten-ai-supply-chain)
- [eSecurity Planet — Hundreds of Malicious Skills Found in OpenClaw's ClawHub](https://www.esecurityplanet.com/threats/hundreds-of-malicious-skills-found-in-openclaws-clawhub/) — Koi Security "ClawHavoc" 리서치, 341개 악성 스킬
- [Cybersecurity News — OpenClaw Skill Marketplace Exposes AI Agents to Supply Chain Malware and Financial Fraud](https://cybersecuritynews.com/openclaw-skill-marketplace-exposes-ai-agents/)
- [Security Online — Malicious OpenClaw Skills Found on ClawHub Marketplace](https://securityonline.info/malicious-openclaw-skills-clawhub/)
- [Open Source For You — OpenClaw Skill Store Breach Raises Open Source AI Security Alarm](https://www.opensourceforu.com/2026/07/openclaw-skill-store-breach-raises-open-source-ai-security-alarm/)

## 온보딩 / 변경 이력 / 마이그레이션 (2차 해설 자료)

- [OpenClaw Update Survival Guide 2026 — ManageMyClaw](https://managemyclaw.com/blog/openclaw-update-survival-guide/)
- [OpenClaw Changelog: 2026 Release Notes and Updates — Fastio](https://fast.io/resources/openclaw-changelog-guide/)
- [OpenClaw Release Notes - July 2026 Latest Updates — Releasebot](https://releasebot.io/updates/openclaw)
- [Onboard CLI reference](https://docs.openclaw.ai/cli/onboard), [Migrate CLI reference](https://docs.openclaw.ai/cli/migrate), [Update CLI reference](https://docs.openclaw.ai/cli/update), [Doctor / Gateway diagnostics](https://docs.openclaw.ai/gateway/doctor), [Onboarding overview](https://docs.openclaw.ai/start/onboarding-overview), [Migrating from Hermes](https://docs.openclaw.ai/install/migrating-hermes) (Day 3 핵심 출처, 자동화 접근 시 403 가능 — raw.githubusercontent.com/openclaw/openclaw/main/docs/... 경로로 교차 확인)
- [GitHub issue #35957 — v2026.3.3 config key rejection startup-loop outage](https://github.com/openclaw/openclaw/issues/35957) (Day 3 핵심 사고 사례, primary source)
- [GitHub issue #38249 — `doctor --config-diff` feature request, closed not planned](https://github.com/openclaw/openclaw/issues/38249) (Day 3, primary source)
- [GitHub issue #29552](https://github.com/openclaw/openclaw/issues/29552), [openclaw/openclaw releases](https://github.com/openclaw/openclaw/releases), [CHANGELOG.md](https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md)
- [OpenClaw 4.26 release — migrate tool introduction — openclaws.io](https://openclaws.io/blog/openclaw-4-26-release)
- [OpenClaw upgrade & maintenance guide — LumaDock](https://lumadock.com/tutorials/openclaw-upgrade-maintenance)

## Model Provider / Auth Profile / Failover (Day 4 핵심 출처)

- [GitHub raw — docs/concepts/model-providers.md](https://raw.githubusercontent.com/openclaw/openclaw/main/docs/concepts/model-providers.md), [docs/concepts/model-failover.md](https://raw.githubusercontent.com/openclaw/openclaw/main/docs/concepts/model-failover.md), [docs/concepts/models.md](https://raw.githubusercontent.com/openclaw/openclaw/main/docs/concepts/models.md) — `docs.openclaw.ai`가 자동화 접근에 403을 반환해, 이 레슨은 GitHub raw 경로의 문서 원문으로 교차 검증했다
- [GitHub — src/agents/auth-profiles/order.ts](https://github.com/openclaw/openclaw/blob/main/src/agents/auth-profiles) — 프로필 정렬 로직(타입 우선순위 + lastUsed 라운드로빈, lastGood 의도적 배제) 원본 소스
- [GitHub issue #100067 — 2026.6.x JSON→SQLite auth 저장소 마이그레이션이 기존 프로필을 경고 없이 유실시키는 사고 (open)](https://github.com/openclaw/openclaw/issues/100067)
- [GitHub issue #48623 — lastGood 우선순위 기능 요청(not_planned) + failover 시도 간 타임아웃 예산 공유 버그](https://github.com/openclaw/openclaw/issues/48623)
- [GitHub issue #99809 — subscription_limit 차단이 모델 단위가 아니라 프로필 전체에 적용되는 버그 (open)](https://github.com/openclaw/openclaw/issues/99809)
- [GitHub issue #99993 — DeepSeek 401 인증 오류를 일시적 오류로 오분류해 정상 키를 오래 막는 버그 (closed)](https://github.com/openclaw/openclaw/issues/99993)
- [GitHub issue #92864 — 세션 모델 오버라이드가 compaction 이후에도 조용히 유지되어 하루 $300 청구된 사고 (closed)](https://github.com/openclaw/openclaw/issues/92864)
- [GitHub issue #74395 — 업그레이드 자동 마이그레이션이 기본 모델을 조용히 유료 preview 변형으로 전환 (open)](https://github.com/openclaw/openclaw/issues/74395)
- [GitHub issue #73182 — Claude 계열 reasoning 기본값이 조용히 켜져 비용 2배 + thinking 블록 노출 (open)](https://github.com/openclaw/openclaw/issues/73182)
- [GitHub issue #92674 — thinking 레벨 "adaptive" 폴백으로 토큰 사용량 4~5배 증가 (open)](https://github.com/openclaw/openclaw/issues/92674)
- [GitHub issue #88371 — Windows 온보딩 첫 채팅이 크레딧 경고 없이 유료 모델로 시작 (open)](https://github.com/openclaw/openclaw/issues/88371)

## 사용 시 주의사항

- `docs.openclaw.ai` 도메인은 자동화 접근(WebFetch)에 403을 반환하는 경우가 있었다. 이 트랙의 공식 문서 인용은
  검색 스니펫과 다수의 독립적인 2차 출처로 교차 검증한 것이며, 정확한 원문 인용이 필요하면 실제 브라우저로
  원문을 재확인한다.
- 이 트랙에 등장하는 포트 번호(`18789`), 설정 키 경로, 명령어 플래그, 사고 통계(악성 스킬 개수 등)는
  레슨 작성 시점(2026-07) 기준 리서치 결과이며 빠르게 바뀔 수 있다. 실제 면접 전 공식 문서/최신 보안 리포트로
  최종 확인해야 한다.
- Day 4의 쿨다운 백오프 수치(1분/5분/25분/1시간, 5시간/24시간)는 문서 요약 기반으로 확정도가 중간이다.
  GitHub 이슈 번호(#100067 등)는 리서치 시점(2026-07) 기준 open/closed 상태이며, 면접 전 최신 상태로
  재확인한다. auth 저장소가 `auth-profiles.json`(JSON)에서 SQLite로 전환 중이라는 사실 자체는 소스 코드/
  이슈로 직접 확인했지만, 전환이 최종적으로 어떻게 안정화될지는 계속 지켜봐야 한다.
- ClawHub 관련 보안 사고 수치는 서로 다른 리서치 기관(Unit 42, Bitdefender, Koi Security)이 각기 다른 시점·기준으로
  집계한 것이므로, 절대적인 수치보다 **"마켓플레이스형 스킬 배포는 구조적으로 공급망 리스크를 가진다"는 패턴**에
  집중해서 이해한다.
