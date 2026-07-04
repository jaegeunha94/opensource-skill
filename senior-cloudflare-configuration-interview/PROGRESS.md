# Cloudflare 구성 인터뷰 대비 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-04 | Cloudflare DNS/CDN/보안 경계 구성 프레임워크 | [0001-cloudflare-dns-cdn-security-boundary-framework.html](lessons/0001-cloudflare-dns-cdn-security-boundary-framework.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 2 | DNS 심화 설계와 DNSSEC | 레코드 타입별 proxied 가능 여부, CNAME flattening, DNSSEC 체인, 마이그레이션 시 TTL 전략 |
| 3 | CDN 캐시 전략과 Cache Rules | Cache Rules vs 레거시 Page Rules, Cache Key 커스터마이징, Edge TTL vs Browser TTL, Tiered Cache, 캐시 스탬피드 |
| 4 | SSL/TLS 모드와 Origin 보호 | Flexible/Full/Full(strict), Origin CA, Authenticated Origin Pulls, mTLS, 리다이렉트 루프 장애 |
| 5 | WAF와 Rate Limiting 설계 | Managed Rules, Custom Rules, Rate Limiting Rules, 오탐(false positive) 대응, 단계적 배포(Log → Block) |
| 6 | DDoS Protection과 Bot Management/Turnstile | L3/4/7 상시 방어 구조, Bot Fight Mode vs Super Bot Fight Mode vs Bot Management, Turnstile 도입 판단 |
| 7 | Load Balancing과 트래픽 스티어링 | Health Check, Steering Policy, Failover, 멀티 리전/멀티 클라우드 라우팅 |
| 8 | Workers와 Redirect/Transform Rules | 엣지 로직 설계, 레거시 Page Rules 리다이렉트 마이그레이션, Rules 실행 순서와 우선순위 |
| 9 | Zero Trust — Access와 Tunnel | origin IP 은닉, Cloudflare Tunnel 아키텍처, Access 정책 설계, VPN 대체 판단 |
| 10 | 로그/Analytics, 장애 대응, 마이그레이션 runbook | Logpush, Analytics Engine, 실제 outage 사례 분석, 네임서버 전환 runbook, 롤백 시나리오 |

## 현재 학습 위치

**Day 1 완료** — Day 2: DNS 심화 설계와 DNSSEC로 진행 예정.

## 습득한 핵심 개념

- [x] Proxied(orange cloud) vs DNS-only(grey cloud) 동작 원리와 선택 기준 (Day 1)
- [x] CDN 캐시가 성능/비용에 미치는 영향과 기본 캐시 동작 (Day 1)
- [x] SSL/TLS 모드가 만드는 보안 경계와 흔한 설정 실수 (Day 1)
- [x] WAF/DDoS/Rate Limiting/Bot Management가 계층을 이루는 방식 (Day 1)
- [x] Page Rules → Cache Rules/Configuration Rules/Origin Rules 전환 배경 (Day 1)
- [x] 시니어 면접 답변 프레임워크: 요구사항 → 경계 설계 → 장애 시나리오 → trade-off (Day 1)
- [ ] DNSSEC와 레코드별 마이그레이션 전략 (예정 Day 2)
- [ ] Cache Rules 세부 설계와 캐시 스탬피드 방지 (예정 Day 3)
- [ ] Origin 인증서와 mTLS 설계 (예정 Day 4)
- [ ] WAF/Rate Limiting 단계적 배포 전략 (예정 Day 5)
- [ ] DDoS/Bot Management 계층 설계 (예정 Day 6)
- [ ] Load Balancing 스티어링 정책 (예정 Day 7)
- [ ] Workers 기반 엣지 로직과 Rules 우선순위 (예정 Day 8)
- [ ] Zero Trust Access/Tunnel 아키텍처 (예정 Day 9)
- [ ] 로그/Analytics 설계와 마이그레이션 runbook (예정 Day 10)

## 커리큘럼 기준 노트

- 이 커리큘럼은 2026-07-04 기준 Cloudflare 공식 문서(developers.cloudflare.com), changelog, Page Rules 마이그레이션 가이드, 공식 post-mortem 블로그를 확인한 뒤 작성됐다. 상세 출처는 `RESOURCES.md` 참고.
- **Page Rules**: 공식 문서에 "(deprecated)"로 명시. 2025-01-06부로 전 플랜에서 신규 생성이 완전히 차단됐다(Free/Pro/Business는 2024-07-01부터, Enterprise 신규 계정은 2024-08-01부터 순차 차단). 기존 규칙은 계속 동작하며 Cloudflare가 Cache Rules 등으로 자동 전환 중이다. 신규 구성은 Cache Rules / Configuration Rules / Origin Rules / Redirect Rules / Transform Rules로 설계한다. (Day 1, 3, 8에 반영)
- **Firewall Rules / 구 Rate Limiting**: API 지원이 2025-06-15부로 종료되고 WAF Custom Rules / Rate Limiting Rules로 완전히 통합됐다. 대시보드 경로도 Security &gt; Security rules로 바뀌었다. (Day 5에 반영)
- **Origin 보호 우선순위**: 공식 가이드(protect-your-origin-server)는 Cloudflare Tunnel을 최상위 권장으로 명시하고, 공개 IP를 유지해야 하는 경우의 차선책으로 Authenticated Origin Pulls + IP 허용목록을 제시한다. (Day 1, 9에 반영)
- **Pages/Workers**: Pages는 유지보수 모드로 전환되고 신규 풀스택 프로젝트는 Workers가 공식 권장이다(2025-04 GA). (Day 8에 반영 예정)
- **실제 장애 사례**: 2024-10-10 WAF 정규식 ReDoS로 인한 전세계 502 장애, 2025-11-18 Bot Management 설정 파일 전파로 인한 대규모 장애를 Day 1과 Day 10에서 근거로 사용한다.
- 이후 Day를 생성할 때도 항상 최신 공식 문서/changelog를 먼저 확인하고, 이 표와 충돌하면 최신 근거를 우선해 PROGRESS.md와 RESOURCES.md를 갱신한다.
