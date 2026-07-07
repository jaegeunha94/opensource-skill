# Resources: Cloudflare 구성 인터뷰 대비

이 목록은 2026-07-04 기준으로 공식 문서/changelog/커뮤니티 공지를 확인해 작성했다(Day 2 작성 시 2026-07-05 기준으로 DNS/DNSSEC 관련 문서를, Day 3 작성 시 2026-07-06 기준으로 Cache Rules/Tiered Cache/캐시 스탬피드 관련 문서를, Day 4 작성 시 2026-07-07 기준으로 SSL/TLS 모드/AOP/Origin CA/mTLS 관련 문서를 재확인해 링크를 추가함).
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
- **Strict (SSL-Only Origin Pull)**
  https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/ssl-only-origin-pull/
  — Enterprise 전용 5번째 모드. 방문자 프로토콜과 무관하게 origin에는 항상 검증된 HTTPS로만 연결.
- **ERR_TOO_MANY_REDIRECTS 트러블슈팅**
  https://developers.cloudflare.com/ssl/troubleshooting/too-many-redirects/
  — Flexible 모드 + origin의 강제 HTTPS 리다이렉트 조합이 만드는 무한 루프의 공식 진단/해결 가이드.
- **Automatic SSL/TLS (공식 블로그)**
  https://blog.cloudflare.com/introducing-automatic-ssl-tls-securing-and-simplifying-origin-connectivity/
  — SSL/TLS Recommender 기반 점진적(1%→10%) 자동 모드 상향, 실패 시 자동 롤백. 600만+ 도메인 적용 사례.
- **Authenticated Origin Pulls — Global/Zone-level/Per-hostname**
  https://developers.cloudflare.com/ssl/origin-configuration/authenticated-origin-pull/
  https://developers.cloudflare.com/ssl/origin-configuration/authenticated-origin-pull/set-up/per-hostname/
  https://developers.cloudflare.com/ssl/origin-configuration/authenticated-origin-pull/set-up/zone-level/
  https://developers.cloudflare.com/ssl/origin-configuration/authenticated-origin-pull/set-up/global/
  — 세 설정은 서로 독립적이며 per-hostname이 우선순위 최상위. per-hostname은 자체 업로드 인증서 필수(zone당 10개, 인증서당 최대 100 연결).
- **Origin CA API 인증 방식 변경(Service Key 폐기)**
  https://developers.cloudflare.com/fundamentals/api/get-started/ca-keys/
  — 레거시 Origin CA Key(Service Key) 인증이 2026-09-30 제거 예정, Zone-SSL/Certificates-Edit 권한의 API Token으로 전환 필요.
- **RFC 9440 mTLS 필드 (Transform Rules / Workers, 2026 changelog)**
  https://developers.cloudflare.com/changelog/post/2026-03-25-rfc9440-mtls-fields/
  https://developers.cloudflare.com/changelog/post/2026-03-27-rfc9440-mtls-fields/
  https://developers.cloudflare.com/ssl/client-certificates/forward-a-client-certificate/
  https://developers.cloudflare.com/ssl/client-certificates/client-certificate-variables/
  — `cf.tls_client_auth.cert_rfc9440`/`cert_chain_rfc9440` 필드로 클라이언트 인증서를 표준 포맷 전달. origin은 `Client-Cert` 헤더를 무조건 제거 후 재설정해야 스푸핑 방지.
- **ML-DSA(post-quantum) 인증서 지원 — AOP / Custom Origin Trust Store (2026-06 changelog)**
  https://developers.cloudflare.com/changelog/post/2026-06-17-pqc-mldsa-aop-cots/
  — AOP와 Custom Origin Trust Store가 ML-DSA(FIPS 204) 인증서를 지원, Cloudflare-origin 구간의 post-quantum 인증까지 확장.
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
- **Cache Rules settings**
  https://developers.cloudflare.com/cache/how-to/cache-rules/settings/
  — Edge TTL 3가지 모드(Cache-Control 있으면 따르고 없으면 bypass / 없으면 기본 동작 / 무시하고 강제 TTL), Cache Eligibility, Browser TTL.
- **Edge and Browser Cache TTL**
  https://developers.cloudflare.com/cache/how-to/edge-browser-cache-ttl/
  — Edge TTL(Cloudflare 엣지 기준)과 Browser TTL(클라이언트 로컬 캐시 기준)의 통제 주체 차이.
- **Cache Key customization / Customize cache**
  https://developers.cloudflare.com/cache/how-to/cache-keys/
  https://developers.cloudflare.com/cache/best-practices/customize-cache/
  — 기본 Cache Key(host+path+query string), 쿼리 스트링 무시/선택 포함, 헤더(Accept-Language, CF-Device-Type)·쿠키 포함 옵션.
- **Tiered Cache / Smart Shield**
  https://developers.cloudflare.com/cache/how-to/tiered-cache/
  https://developers.cloudflare.com/smart-shield/
  https://developers.cloudflare.com/smart-shield/configuration/smart-tiered-cache/
  — lower/upper-tier 계층 구조, Smart Tiered Cache 자동 토폴로지 선택과 cloud region hint. 2026년 기준 Argo Smart Routing/Regional Tiered Cache/Cache Reserve/Connection Reuse가 "Smart Shield" 상품 우산으로 재편.
- **비동기 stale-while-revalidate (2026 changelog)**
  https://developers.cloudflare.com/changelog/post/2026-02-26-async-stale-while-revalidate/
  https://developers.cloudflare.com/cache/concepts/revalidation/
  — 캐시 만료 후 첫 요청도 origin을 기다리지 않고 즉시 stale 콘텐츠(UPDATING 상태)를 받고, 갱신은 백그라운드에서 진행.
- **Concurrent Streaming Acceleration (캐시 락 제거, 공식 블로그)**
  https://blog.cloudflare.com/introducing-concurrent-streaming-acceleration/
  — 대용량/스트리밍 파일에서 origin fetch 도중 다중 클라이언트 동시 read 지원, OTT 고객 사례 P99 캐시 락 대기 1.5s → 거의 0.

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
