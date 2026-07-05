# Resources: Cloudflare 구성 인터뷰 대비

이 목록은 2026-07-04 기준으로 공식 문서/changelog/커뮤니티 공지를 확인해 작성했다(Day 2 작성 시 2026-07-05 기준으로 DNS/DNSSEC 관련 문서를 재확인해 링크를 추가함).
Cloudflare는 기능과 권장 설정이 빠르게 바뀌므로, 새 레슨을 만들 때마다 아래 문서의 최신 버전을 다시 확인하고 필요하면 이 목록과 커리큘럼을 갱신한다.

## 공식 문서 (최우선)

- **DNS Proxy status**
  https://developers.cloudflare.com/dns/proxy-status/
  — Proxied vs DNS-only의 정의, 어떤 레코드 타입이 proxied 가능한지(A/AAAA/CNAME만), 기본값 차이(대시보드는 기본 on, API는 기본 off).
- **Proxy status limitations**
  https://developers.cloudflare.com/dns/proxy-status/limitations/
  — proxied 불가능한 레코드, TTL 고정 동작, 도메인 검증용 CNAME 주의사항.
- **Enforce DNS-only (긴급 킬스위치)**
  https://developers.cloudflare.com/dns/proxy-status/enforce-dns-only/
  — 계정 전체를 즉시 DNS-only로 되돌리는 장애 대응용 API.
- **SSL/TLS encryption modes**
  https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/
  — Off/Flexible/Full/Full(strict) 정의와 공식 권장사항("Full 또는 Full(strict) 사용을 강력히 권장").
- **Origin CA certificates**
  https://developers.cloudflare.com/ssl/origin-configuration/origin-ca/
  — Cloudflare 발급 origin 인증서, Full(strict) 구성.
- **Universal SSL**
  https://developers.cloudflare.com/ssl/edge-certificates/universal-ssl/
  — 무료 엣지 인증서 자동 발급/갱신.
- **Minimum TLS Version**
  https://developers.cloudflare.com/ssl/edge-certificates/additional-options/minimum-tls/
  — 기본값이 여전히 TLS 1.0이라는 점(고객이 직접 올려야 함)에 주의.
- **Post-Quantum Cryptography**
  https://developers.cloudflare.com/ssl/post-quantum-cryptography/
  — 2022년부터 기본 적용된 X25519MLKEM768 하이브리드 키 교환, ML-DSA 서명 지원 현황.
- **Cache — Default cache behavior**
  https://developers.cloudflare.com/cache/concepts/default-cache-behavior/
  — 확장자 기반 기본 캐싱(HTML/JSON은 기본 미캐싱), Set-Cookie/Cache-Control 예외.
- **Cache Rules**
  https://developers.cloudflare.com/cache/how-to/cache-rules/
  — 현재 표준 캐시 설정 방법, Edge TTL/Browser TTL/Cache Key.
- **Cache Key customization**
  https://developers.cloudflare.com/cache/how-to/cache-keys/
- **Page Rules (deprecated) 및 마이그레이션 가이드**
  https://developers.cloudflare.com/rules/page-rules/
  https://developers.cloudflare.com/rules/reference/page-rules-migration/
  https://developers.cloudflare.com/cache/how-to/cache-rules/page-rules-migration/
  — 공식 문서에 "(deprecated)"로 명시. 신규 Page Rule 생성은 2025-01-06부로 전 플랜에서 완전히 차단. 설정별 Cache/Configuration/Origin/Redirect/Transform Rules 매핑표 포함.
- **WAF 개요 / Managed Rules / Custom Rules**
  https://developers.cloudflare.com/waf/
  https://developers.cloudflare.com/waf/managed-rules/
  https://developers.cloudflare.com/waf/custom-rules/
- **Firewall Rules 업그레이드 가이드 (레거시)**
  https://developers.cloudflare.com/waf/reference/legacy/firewall-rules-upgrade/
  — Firewall Rules/Filters API는 2025-06-15부로 지원 종료, WAF Custom Rules로 통합.
- **Rate Limiting Rules**
  https://developers.cloudflare.com/waf/rate-limiting-rules/
  https://developers.cloudflare.com/waf/reference/legacy/old-rate-limiting/upgrade/
  — 구 Rate Limiting 상품도 2025-06-15 지원 종료, WAF 안의 Rate Limiting Rules로 통합.
- **DDoS Protection 개요**
  https://developers.cloudflare.com/ddos-protection/
  https://developers.cloudflare.com/ddos-protection/managed-rulesets/adaptive-protection/
  — 상시 무료 L3/4/7 방어, Adaptive DDoS Protection(Enterprise).
- **Bot Fight Mode / Super Bot Fight Mode / Bot Management**
  https://developers.cloudflare.com/bots/get-started/bot-fight-mode/
  https://developers.cloudflare.com/bots/get-started/super-bot-fight-mode/
  https://developers.cloudflare.com/bots/get-started/bot-management/
- **Turnstile**
  https://developers.cloudflare.com/turnstile/
  https://developers.cloudflare.com/turnstile/tutorials/integrating-turnstile-waf-and-bot-management/
- **Load Balancing — Steering Policies / Health Checks**
  https://developers.cloudflare.com/load-balancing/understand-basics/traffic-steering/steering-policies/
  https://developers.cloudflare.com/load-balancing/monitors/
- **Redirect Rules (Single/Bulk) / Transform Rules**
  https://developers.cloudflare.com/rules/url-forwarding/
  https://developers.cloudflare.com/rules/transform/
- **Workers 정적 자산 / Pages→Workers 마이그레이션**
  https://developers.cloudflare.com/workers/static-assets/
  https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/
  — Pages는 유지보수 모드, 신규 풀스택 프로젝트는 Workers 권장(공식 가이드).
- **Cloudflare One / Zero Trust Access / Tunnel**
  https://developers.cloudflare.com/cloudflare-one/
  https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/
  https://developers.cloudflare.com/cloudflare-one/policies/access/
- **Origin 보호 공식 가이드**
  https://developers.cloudflare.com/fundamentals/security/protect-your-origin-server/
  https://developers.cloudflare.com/ssl/origin-configuration/authenticated-origin-pull/
  — Tunnel을 최상위 권장으로 명시, AOP+IP 허용목록을 차선책으로 명시.
- **DNSSEC**
  https://developers.cloudflare.com/dns/dnssec/
  https://developers.cloudflare.com/dns/dnssec/multi-signer-dnssec/setup/
- **로그/Analytics**
  https://developers.cloudflare.com/logs/logpush/
  https://developers.cloudflare.com/analytics/analytics-engine/
  https://developers.cloudflare.com/analytics/graphql-api/
- **존 마이그레이션(네임서버 전환) 공식 runbook**
  https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/
  — DNSSEC이 걸려있다면 네임서버 전환 전에 registrar에서 먼저 비활성화해야 한다는 주의사항 포함.
- **CNAME flattening**
  https://developers.cloudflare.com/dns/cname-flattening/
  https://developers.cloudflare.com/dns/cname-flattening/set-up-cname-flattening/
  — apex(zone 루트) CNAME 표준 제약 우회, 모든 플랜 기본 적용, 도메인 검증 실패/dangling CNAME(NODATA) 부작용.
- **DNSSEC active migration / multi-signer DNSSEC**
  https://developers.cloudflare.com/dns/dnssec/dnssec-active-migration/
  https://developers.cloudflare.com/dns/dnssec/multi-signer-dnssec/setup/
  https://developers.cloudflare.com/dns/dnssec/multi-signer-dnssec/about/
  — 공급자별 별도 KSK를 쓰는 model 2 권장, 다운타임 없이 DNSSEC 유지한 채 공급자 전환하는 절차.

## 공식 changelog / 블로그 (변화 추적용)

- Cloudflare Changelog — https://developers.cloudflare.com/changelog/ (Rules, Cache, WAF 등 카테고리별 최신 변경사항)
- "The future of Page Rules" (2022, Page Rules deprecation 배경) — https://blog.cloudflare.com/future-of-page-rules/
- "Bringing a unified developer experience to Cloudflare Workers and Pages" (2024-04) — https://blog.cloudflare.com/pages-and-workers-are-converging-into-one-experience/
- "Your frontend, backend, and database — now in one Cloudflare Worker" (2025-04) — https://blog.cloudflare.com/full-stack-development-on-cloudflare-workers/

## 실제 장애/보안 사례 (production 사례 학습용)

- **2024-10-10 전세계 502 장애 (WAF 규칙 ReDoS)** 공식 post-mortem — https://blog.cloudflare.com/cloudflare-outage/
- **2025-11-18 전세계 장애 (Bot Management feature file)** 공식 post-mortem — https://blog.cloudflare.com/18-november-2025-outage/
- **2023-11 Control Plane & Analytics 장애 (데이터센터 정전)** — https://blog.cloudflare.com/post-mortem-on-cloudflare-control-plane-and-analytics-outage/
- **2024-06-20 장애 (재귀 호출 버그)** — https://blog.cloudflare.com/cloudflare-incident-on-june-20-2024/
- **2025-12-05 장애** — https://blog.cloudflare.com/5-december-2025-outage/
- **"Fail Small" 회복탄력성 계획** — https://blog.cloudflare.com/fail-small-resilience-plan/
- Origin IP 노출을 통한 Cloudflare 우회 리서치 — https://thehackernews.com/2023/10/researcher-reveal-new-technique-to.html

## 주의사항

- developers.cloudflare.com / blog.cloudflare.com 문서는 매우 자주 갱신된다. 레슨을 만들기 전 위 링크를 다시 확인하고, 이 파일과 `PROGRESS.md`의 "커리큘럼 기준 노트"를 함께 갱신한다.
- 블로그나 커뮤니티 글이 "Firewall Rules", "Page Rules", "구 Rate Limiting", "Pages(신규 권장)"를 현재 표준처럼 설명한다면 레거시 정보일 가능성이 높다 — 반드시 공식 문서의 deprecated 표기를 재확인한다.
- 서비스 이름/설정 위치 암기보다 "왜 이 경계를 이렇게 설계하는가"와 "이 설정이 무너지면 무엇이 뚫리는가"를 익히는 데 집중한다.
