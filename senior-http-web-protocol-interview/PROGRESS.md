# HTTP / Web Protocol & API Traffic 시니어 인터뷰 — 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | HTTP 트래픽 분석과 시니어 답변 프레임워크 — 요청 경로 전체를 그리는 사고법 | [0001-http-traffic-analysis-framework.html](lessons/0001-http-traffic-analysis-framework.html) |
| 2 | 2026-07-03 | Method Semantics와 Idempotency — Safe/Idempotent가 재시도 설계를 결정한다 | [0002-method-semantics-idempotency.html](lessons/0002-method-semantics-idempotency.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 3 | Status Code 판단과 API 에러 설계 | 재시도 가능/불가능 코드 구분, 4xx vs 5xx 실무 의미, 커스텀 에러 바디 설계 |
| 4 | HTTP Headers 심화 | 요청/응답 헤더로 트래픽 읽기, 커스텀 헤더 규칙, 헤더 기반 디버깅 |
| 5 | Content Negotiation | Accept/Accept-Encoding/Accept-Language, Vary 헤더와 캐시 오염 |
| 6 | Cookies & Session 관리 | SameSite, Secure, HttpOnly, 세션 vs 토큰 trade-off |
| 7 | CORS 심화 | Preflight 요청, credentials, 실전 CORS 장애 트러블슈팅 |
| 8 | Cache-Control 심화 | freshness, private/public, no-cache vs no-store, 캐시 계층별 해석 |
| 9 | ETag와 조건부 요청 | If-None-Match, If-Modified-Since, 검증 캐시와 대역폭 절감 |
| 10 | Compression | gzip/br, Content-Encoding, CPU-대역폭 trade-off |

## 현재 학습 위치

**Day 2 완료** — 다음: Day 3 — Status Code 판단과 API 에러 설계

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
- [ ] 4xx vs 5xx의 재시도 가능성 판단 기준 (예정 Day 3)
- [ ] Vary 헤더로 인한 캐시 오염 사고 원리 (예정 Day 5)
- [ ] SameSite 쿠키와 CSRF 방어 연결 (예정 Day 6)
- [ ] CORS Preflight가 발생하는 조건 (예정 Day 7)
