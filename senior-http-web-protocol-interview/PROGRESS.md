# HTTP / Web Protocol & API Traffic 시니어 인터뷰 — 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | HTTP 트래픽 분석과 시니어 답변 프레임워크 — 요청 경로 전체를 그리는 사고법 | [0001-http-traffic-analysis-framework.html](lessons/0001-http-traffic-analysis-framework.html) |
| 2 | 2026-07-03 | Method Semantics와 Idempotency — Safe/Idempotent가 재시도 설계를 결정한다 | [0002-method-semantics-idempotency.html](lessons/0002-method-semantics-idempotency.html) |
| 3 | 2026-07-04 | Status Code 판단과 API 에러 설계 — 재시도 가능/불가능을 코드로 구분하기 | [0003-status-code-error-design.html](lessons/0003-status-code-error-design.html) |
| 4 | 2026-07-05 | HTTP Headers 심화 — 요청/응답 헤더로 트래픽을 읽는 법 | [0004-http-headers-deep-dive.html](lessons/0004-http-headers-deep-dive.html) |
| 5 | 2026-07-06 | Content Negotiation과 Vary 캐시 오염 — Accept/Vary가 만드는 캐시 사고 | [0005-content-negotiation-vary-cache-pollution.html](lessons/0005-content-negotiation-vary-cache-pollution.html) |
| 6 | 2026-07-07 | Cookies & Session 관리 — SameSite, Secure, HttpOnly, 세션 vs 토큰 trade-off | [0006-cookies-session-management.html](lessons/0006-cookies-session-management.html) |
| 7 | 2026-07-08 | CORS 심화 — Preflight, credentials, Vary: Origin과 실전 트러블슈팅 | [0007-cors-preflight-credentials.html](lessons/0007-cors-preflight-credentials.html) |
| 8 | 2026-07-09 | Cache-Control 심화 — freshness, private/public, no-cache vs no-store, 캐시 계층별 해석 | [0008-cache-control-freshness-private-public.html](lessons/0008-cache-control-freshness-private-public.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 9 | ETag와 조건부 요청 | If-None-Match, If-Modified-Since, 검증 캐시와 대역폭 절감 |
| 10 | Compression | gzip/br, Content-Encoding, CPU-대역폭 trade-off |
| 11 | Keep-Alive와 Connection 관리 | HTTP/1.1 지속 연결, Head-of-Line Blocking |

## 현재 학습 위치

**Day 8 완료** — 다음: Day 9 — ETag와 조건부 요청

## 습득한 핵심 개념

- [x] 요청 경로 전체 매핑: 클라이언트 → CDN → 리버스 프록시/LB → API 게이트웨이 → 앱 서버 → 다운스트림 (Day 1)
- [x] HTTP 트래픽 분석 6단계 프레임워크 (Day 1)
- [x] 계층별 책임 분리 — 각 경계가 담당하는 일과 실패 모드 (Day 1)
- [x] curl -v / curl -w 를 이용한 raw 트래픽 확인과 타이밍 분해 (Day 1)
- [x] 상태 코드/헤더로 "누가 응답했는지" 특정하는 법 (Day 1)
- [x] Stateless 프로토콜과 세션/쿠키가 필요한 이유 (Day 1)
- [x] Safe/Idempotent 메서드 구분과 재시도 설계 (Day 2)
- [x] PUT vs POST 설계 판단 기준 (Day 2)
- [x] Idempotency Key 패턴으로 POST를 안전하게 재시도하는 법 (Day 2)
- [x] 4xx vs 5xx의 재시도 가능성 판단 기준 (Day 3)
- [x] 429 vs 503의 원인 위치 구분 (Day 3)
- [x] RFC 9457 Problem Details 기반 에러 바디 설계 (Day 3)
- [x] Hop-by-hop vs End-to-end 헤더 구분과 프록시 전달 규칙 (Day 4)
- [x] X-Forwarded-For 신뢰 경계 설계와 IP 스푸핑 방지 (Day 4)
- [x] Via / X-Request-Id / traceparent로 분산 트래픽 경로 추적 (Day 4)
- [x] Content negotiation과 캐시의 "URL=응답" 전제 충돌 원리 (Day 5)
- [x] Vary 헤더로 인한 캐시 오염 사고 원리와 진단 절차 (Day 5)
- [x] Vary 카디널리티 trade-off와 private/no-store와의 구분 (Day 5)
- [x] Stateless HTTP 위에서 세션/토큰이 상태를 유지하는 서로 다른 방식 (Day 6)
- [x] HttpOnly/Secure/SameSite가 각각 다른 공격을 막는 인과관계 (Day 6)
- [x] SameSite=Strict/Lax/None 차이와 브라우저 기본값 변화 (Day 6)
- [x] 세션 vs 토큰 trade-off와 Access+Refresh Token 절충 설계 (Day 6)
- [x] Same-Origin Policy와 CORS의 관계, CORS가 브라우저에서 강제되는 규칙이라는 것 (Day 7)
- [x] Simple Request vs Preflighted Request 판단 기준 (Day 7)
- [x] credentials 포함 요청에서 Access-Control-Allow-Origin: *가 불가능한 이유 (Day 7)
- [x] Vary: Origin으로 CORS 응답의 캐시 오염을 막는 원리 (Day 7)
- [x] Origin 무조건 반사 + Allow-Credentials 조합의 보안 취약점 (Day 7)
- [x] Cache-Control의 저장 가능(storability)과 재사용 가능(reusability) 질문 분리 (Day 8)
- [x] freshness_lifetime과 Age(current_age)를 이용한 신선도 계산 원리 (Day 8)
- [x] max-age vs s-maxage — private/shared 캐시별 다른 적용 (Day 8)
- [x] no-cache vs no-store — 저장 허용 여부와 검증 필수 여부 구분 (Day 8)
- [x] private/public 지시어와 개인화 응답의 shared 캐시 오염 방지 (Day 8)
- [x] must-revalidate, stale-while-revalidate, stale-if-error의 trade-off (Day 8)
- [x] "CDN이 오래된 응답을 계속 서빙" 장애의 계층별 원인 격리 절차 (Day 8)
- [ ] ETag/Last-Modified 기반 조건부 요청과 304 Not Modified (예정 Day 9)
