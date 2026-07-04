# Mission: Cloudflare 구성 — 10년차 이상 개발자 인터뷰 대비

## Why

Cloudflare는 단순한 DNS 관리 도구가 아니라 DNS, CDN, TLS 종료, WAF, DDoS 방어, Zero Trust 접근 제어까지 아우르는 **엣지 보안/성능 경계**다.
시니어 인터뷰에서는 "Cloudflare 대시보드 설정 방법"을 묻지 않는다. "왜 이 설정을 선택했는가, origin을 어떻게 보호하는가, 캐시 오작동이 장애로 이어졌을 때 어떻게 진단하는가, 비용/성능/보안 사이에서 무엇을 타협했는가"를 본다.
이 워크스페이스는 그 판단 근거를 체계적으로 익히는 것을 목표로 한다.

## Success looks like

- Proxied(orange cloud)와 DNS-only(grey cloud)의 차이를 원리 수준에서 설명하고, 레코드 타입별로 언제 어떤 것을 써야 하는지 근거를 댈 수 있다
- CDN 캐시 동작(Cache Rules, Edge TTL, Cache Key)과 레거시 Page Rules의 경계를 이해하고 마이그레이션 판단을 할 수 있다
- SSL/TLS 모드(Off/Flexible/Full/Full strict)의 차이와 origin 인증서(Origin CA) 설계를 설명하고, 잘못된 모드가 만드는 보안 구멍을 지적할 수 있다
- WAF, DDoS 방어, Rate Limiting, Bot Management/Turnstile을 조합해 계층적 보안 경계를 설계할 수 있다
- Load Balancing, Workers, Redirect/Transform Rules로 트래픽 제어와 엣지 로직을 설계할 수 있다
- Zero Trust(Access, Tunnel)로 origin IP를 노출하지 않는 아키텍처를 설명할 수 있다
- DNSSEC, 로그/Analytics(Logpush)를 운영 관점에서 설계할 수 있다
- 실제 장애 사례(설정 실수, 대규모 outage)를 근거로 원인 분석과 재발 방지 대책을 제시할 수 있다
- 존 마이그레이션(네임서버 전환, 점진적 proxied 전환) runbook을 설계하고 롤백 시나리오를 설명할 수 있다
- 시니어 면접관의 follow-up 질문에 설정 결정의 근거를 명확히 언어화할 수 있다

## Constraints

- 기본 DNS, HTTP/HTTPS, TCP/IP 개념은 이미 알고 있다고 전제한다
- Cloudflare 대시보드 클릭 순서 암기는 이 워크스페이스의 목표가 아니다
- Cloudflare는 기능/권장 설정이 빠르게 바뀌는 제품이므로, 레슨 생성 시점마다 공식 문서·changelog·deprecation guide를 먼저 확인하고 최신 근거를 우선한다. 이 문서의 기술 목록은 최소 기준이며 고정된 커리큘럼이 아니다
- 레슨은 면접 대비 중심이므로 각 Day는 인터뷰 질문 → 사고 구조 → 실무 판단 순서로 구성한다

## Out of scope

- Cloudflare 대시보드 UI 클릭 튜토리얼 (버튼이 어디 있는지 찾는 수준)
- Cloudflare 파트너 인증/자격증 시험 문제 풀이
- Workers 코드 작성 실습 자체 (설계 판단과 trade-off는 다루되, 코딩 튜토리얼은 다루지 않는다)
- 특정 고객사 계약/가격 협상
