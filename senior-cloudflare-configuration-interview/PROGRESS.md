# Cloudflare 구성 인터뷰 대비 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-04 | Cloudflare DNS/CDN/보안 경계 구성 프레임워크 | [0001-cloudflare-dns-cdn-security-boundary-framework.html](lessons/0001-cloudflare-dns-cdn-security-boundary-framework.html) |
| 2 | 2026-07-05 | DNS 심화 설계와 DNSSEC | [0002-dns-deep-dive-cname-flattening-dnssec.html](lessons/0002-dns-deep-dive-cname-flattening-dnssec.html) |
| 3 | 2026-07-06 | CDN 캐시 전략과 Cache Rules | [0003-cdn-cache-strategy-and-cache-rules.html](lessons/0003-cdn-cache-strategy-and-cache-rules.html) |
| 4 | 2026-07-07 | SSL/TLS 모드와 Origin 보호 | [0004-ssl-tls-modes-and-origin-protection.html](lessons/0004-ssl-tls-modes-and-origin-protection.html) |
| 5 | 2026-07-08 | WAF와 Rate Limiting 설계 | [0005-waf-and-rate-limiting-design.html](lessons/0005-waf-and-rate-limiting-design.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 6 | DDoS Protection과 Bot Management/Turnstile | L3/4/7 상시 방어 구조, Bot Fight Mode vs Super Bot Fight Mode vs Bot Management, Turnstile 도입 판단 |
| 7 | Load Balancing과 트래픽 스티어링 | Health Check, Steering Policy, Failover, 멀티 리전/멀티 클라우드 라우팅 |
| 8 | Workers와 Redirect/Transform Rules | 엣지 로직 설계, 레거시 Page Rules 리다이렉트 마이그레이션, Rules 실행 순서와 우선순위 |
| 9 | Zero Trust — Access와 Tunnel | origin IP 은닉, Cloudflare Tunnel 아키텍처, Access 정책 설계, VPN 대체 판단 |
| 10 | 로그/Analytics, 장애 대응, 마이그레이션 runbook | Logpush, Analytics Engine, 실제 outage 사례 분석, 네임서버 전환 runbook, 롤백 시나리오 |

## 현재 학습 위치

**Day 5 완료** — Day 6: DDoS Protection과 Bot Management/Turnstile로 진행 예정.

## 습득한 핵심 개념

- [x] Proxied(orange cloud) vs DNS-only(grey cloud) 동작 원리와 선택 기준 (Day 1)
- [x] CDN 캐시가 성능/비용에 미치는 영향과 기본 캐시 동작 (Day 1)
- [x] SSL/TLS 모드가 만드는 보안 경계와 흔한 설정 실수 (Day 1)
- [x] WAF/DDoS/Rate Limiting/Bot Management가 계층을 이루는 방식 (Day 1)
- [x] Page Rules → Cache Rules/Configuration Rules/Origin Rules 전환 배경 (Day 1)
- [x] 시니어 면접 답변 프레임워크: 요구사항 → 경계 설계 → 장애 시나리오 → trade-off (Day 1)
- [x] 레코드 타입별 proxied 가능 여부와 "이름 단위" 묶임 규칙 (Day 2)
- [x] CNAME flattening 동작과 부작용(도메인 검증 실패, dangling CNAME) (Day 2)
- [x] DNSSEC 체인 구조와 마이그레이션 시 DS 레코드 처리 (Day 2)
- [x] Multi-signer DNSSEC과 마이그레이션 시 TTL/SOA 전략 (Day 2)
- [x] Cache Rules Edge TTL 3모드와 Edge/Browser TTL 목적 분리 (Day 3)
- [x] Cache Key 커스터마이징(히트율 vs 캐시 오염/개인정보 격리) (Day 3)
- [x] Tiered Cache/Smart Shield 계층화 원리 (Day 3)
- [x] 캐시 스탬피드 방어: request collapsing과 2026 비동기 stale-while-revalidate (Day 3)
- [x] SSL/TLS 5가지 모드와 암호화/신원 검증 구분(Full strict vs AOP) (Day 4)
- [x] Origin CA vs Let's Encrypt 선택 기준과 15년 인증서 트레이드오프 (Day 4)
- [x] Authenticated Origin Pulls(Global/Zone/Per-hostname)로 origin IP 유출 우회 공격 방어 (Day 4)
- [x] mTLS/RFC 9440 클라이언트 인증서 필드와 헤더 스푸핑 방지 원칙 (Day 4)
- [x] 리다이렉트 루프(ERR_TOO_MANY_REDIRECTS)를 SSL 모드 오설정 진단 신호로 해석 (Day 4)
- [x] WAF Custom Rules/Rate Limiting/Managed Rules 평가 순서(Skip의 실무적 의미) (Day 5)
- [x] Managed Rules 7일 릴리스 사이클(1주차 Log → 2주차 기본 액션)과 배포 원칙 (Day 5)
- [x] Overrides(민감도/액션 조정) vs Exceptions(평가 자체 제외, 우선순위 상위) 구분 (Day 5)
- [x] Rate Limiting characteristic 설계: IP 단독의 한계, IP+NAT support(_cfuvid), JA3/JA4 (Day 5)
- [ ] DDoS/Bot Management 계층 설계 (예정 Day 6)
- [ ] Load Balancing 스티어링 정책 (예정 Day 7)
- [ ] Workers 기반 엣지 로직과 Rules 우선순위 (예정 Day 8)
- [ ] Zero Trust Access/Tunnel 아키텍처 (예정 Day 9)
- [ ] 로그/Analytics 설계와 마이그레이션 runbook (예정 Day 10)

## 커리큘럼 기준 노트

- 이 커리큘럼은 2026-07-04 기준 Cloudflare 공식 문서(developers.cloudflare.com), changelog, Page Rules 마이그레이션 가이드, 공식 post-mortem 블로그를 확인한 뒤 작성됐다. 상세 출처는 `RESOURCES.md` 참고.
- **Day 2 작성 시(2026-07-05) 재확인 내용**: DNS proxy status/limitations, CNAME flattening, DNSSEC, multi-signer DNSSEC, DNSSEC active migration, full setup(네임서버 전환) 공식 문서를 다시 확인했다. 기존 커리큘럼과 충돌하는 내용은 없었고, 다음 세부 규칙을 새로 반영했다: ① 같은 이름(name)의 A/AAAA 레코드는 하나라도 proxied면 전체가 proxied로 취급된다(레코드 단위가 아닌 이름 단위 규칙). ② Cloudflare는 multi-signer DNSSEC에서 공급자별 별도 KSK를 쓰는 "model 2"를 공식 권장한다. ③ 네임서버 전환 전 DNSSEC은 반드시 registrar에서 먼저 해제(또는 active migration)해야 하며, 그러지 않으면 DNSSEC을 검증하는 리졸버 사용자에게만 전면 장애가 발생한다.
- **Page Rules**: 공식 문서에 "(deprecated)"로 명시. 2025-01-06부로 전 플랜에서 신규 생성이 완전히 차단됐다(Free/Pro/Business는 2024-07-01부터, Enterprise 신규 계정은 2024-08-01부터 순차 차단). 기존 규칙은 계속 동작하며 Cloudflare가 Cache Rules 등으로 자동 전환 중이다. 신규 구성은 Cache Rules / Configuration Rules / Origin Rules / Redirect Rules / Transform Rules로 설계한다. (Day 1, 3, 8에 반영)
- **Firewall Rules / 구 Rate Limiting**: API 지원이 2025-06-15부로 종료되고 WAF Custom Rules / Rate Limiting Rules로 완전히 통합됐다. 대시보드 경로도 Security &gt; Security rules로 바뀌었다. (Day 5에 반영)
- **Origin 보호 우선순위**: 공식 가이드(protect-your-origin-server)는 Cloudflare Tunnel을 최상위 권장으로 명시하고, 공개 IP를 유지해야 하는 경우의 차선책으로 Authenticated Origin Pulls + IP 허용목록을 제시한다. (Day 1, 9에 반영)
- **Pages/Workers**: Pages는 유지보수 모드로 전환되고 신규 풀스택 프로젝트는 Workers가 공식 권장이다(2025-04 GA). (Day 8에 반영 예정)
- **실제 장애 사례**: 2024-10-10 WAF 정규식 ReDoS로 인한 전세계 502 장애, 2025-11-18 Bot Management 설정 파일 전파로 인한 대규모 장애를 Day 1과 Day 10에서 근거로 사용한다.
- **Day 3 작성 시(2026-07-06) 재확인 내용**: Cache Rules settings, Edge/Browser Cache TTL, Cache Key customization, default cache behavior, Tiered Cache/Smart Shield 관련 공식 문서와 changelog를 재확인했다. 두 가지 유의미한 변화를 반영했다: ① Tiered Cache(Argo Smart Routing, Regional Tiered Cache, Cache Reserve, Connection Reuse)는 2026년 기준 "Smart Shield"라는 하나의 origin 보호 상품 우산으로 재편됐다(developers.cloudflare.com/smart-shield/). ② stale-while-revalidate가 2026-02-26부로 비동기 방식으로 전환돼, 캐시 만료 직후 첫 요청도 origin을 기다리지 않고 즉시 stale 콘텐츠(UPDATING 상태)를 받는다. 대용량/스트리밍 파일에는 별도로 "Concurrent Streaming Acceleration"이 캐시 락을 제거해 origin fetch 도중에도 다중 클라이언트 동시 read를 지원한다(공식 블로그 기준, OTT 고객 사례에서 P99 캐시 락 대기 1.5s → 거의 0으로 감소). 이 두 변화는 Day 3의 캐시 스탬피드 답변 핵심 근거로 반영했다.
- **Day 4 작성 시(2026-07-07) 재확인 내용**: SSL/TLS encryption modes, Authenticated Origin Pulls(Global/Zone-level/Per-hostname), Origin CA, mTLS/Client Certificates, Transform Rules changelog를 재확인했다. 네 가지 유의미한 변화를 반영했다: ① SSL/TLS 모드는 Off/Flexible/Full/Full(strict) 4가지 외에 Enterprise 전용 `Strict (SSL-Only Origin Pull)`까지 공식적으로 5가지다 — 방문자 프로토콜과 무관하게 origin에는 항상 검증된 HTTPS로만 연결한다. ② Automatic SSL/TLS(SSL/TLS Recommender 기반)가 이미 600만 개 도메인에 적용돼 트래픽 1%→10% 단위로 점진적으로 더 안전한 모드로 자동 전환하고 실패 시 롤백한다. ③ Origin CA 발급에 쓰던 레거시 Origin CA Key(Service Key) 인증 방식이 2026-09-30부로 완전히 제거되며 Zone-SSL/Certificates-Edit 권한의 API Token으로 전환해야 한다. ④ 2026-03 RFC 9440 mTLS 필드(`cf.tls_client_auth.cert_rfc9440`, `cert_chain_rfc9440`)가 Transform Rules/Workers에 추가돼 클라이언트 인증서 정보를 표준 포맷으로 origin에 전달할 수 있게 됐고, 2026-06에는 AOP/Custom Origin Trust Store가 ML-DSA(post-quantum) 인증서까지 지원하기 시작했다. 다만 origin이 `Client-Cert` 헤더를 무조건 먼저 제거하고 Cloudflare가 채운 값만 신뢰해야 한다는 스푸핑 방지 원칙은 여전히 구현자 책임이라는 점을 Day 4의 핵심 보안 함정으로 반영했다.
- **Day 5 작성 시(2026-07-08) 재확인 내용**: WAF 개요, Custom Rules, Rate Limiting Rules(parameters/best-practices), Managed Rules/troubleshooting, DDoS override 문서와 2026년 WAF changelog(03-23, 04-27, 05-04/11/20, 06-23)를 재확인했다. 다섯 가지를 반영했다: ① 보안 phase 평가 순서는 DDoS L7(`ddos_l7`) → Custom Rules(`http_request_firewall_custom`) → Rate Limiting(`http_ratelimit`) → Managed Rules(`http_request_firewall_managed`) 순으로, Managed Rules가 가장 나중에 평가된다(Custom Rules의 Skip이 뒤 phase를 건너뛸 수 있는 이유). ② Managed Rules 신규/변경 규칙은 7일 릴리스 사이클(1주차 Log 전용 → 2주차 기본 액션)로 배포되며, 긴급 CVE만 예외다. ③ 오탐 대응은 Overrides(액션/민감도 조정)와 Exceptions(평가 자체 제외, Overrides보다 우선순위 높음)로 구분된다. ④ Rate Limiting characteristic은 IP 외에 IP with NAT support(`_cfuvid` 쿠키 기반)와 JA3/JA4 TLS 핑거프린트를 지원하며, 공유 IP 환경(VPN/CGNAT)에서 IP 단독 사용의 위험이 공식 문서에 명시돼 있다. ⑤ OWASP Core Ruleset은 폐기되지 않았지만 공식 문서가 "Cloudflare Managed Ruleset 위에 추가 시 오탐이 잦고 이득은 제한적"이라 명시해, Cloudflare Managed Ruleset을 1차 방어선으로 삼는 걸 Day 5의 기준으로 반영했다.
- 이후 Day를 생성할 때도 항상 최신 공식 문서/changelog를 먼저 확인하고, 이 표와 충돌하면 최신 근거를 우선해 PROGRESS.md와 RESOURCES.md를 갱신한다.
