# HTTP / Web Protocol & API Traffic — 시니어 개발자 인터뷰 대비 학습 미션

## 목표

10년차 이상 백엔드/플랫폼 개발자로서 HTTP·웹 프로토콜·API 트래픽 인터뷰에서 요구되는 수준의 사고력과 언어를 익힌다.

단순히 "메서드는 GET/POST/PUT/PATCH/DELETE가 있고 상태 코드는 2xx/4xx/5xx다" 수준의 암기가 아니라, 다음을 명확히 설명하고 방어할 수 있어야 한다:

- **트래픽 경로 전체를 그리는 능력**: 클라이언트 → CDN → 리버스 프록시/로드밸런서 → API 게이트웨이 → 앱 서버 → 다운스트림까지, 요청 하나가 지나가는 모든 경계와 각 경계의 책임
- **계층별 원인 격리(isolation)**: 502/504/CORS 실패/캐시 이상 현상이 어느 계층에서 발생했는지 헤더·타이밍·로그로 좁혀가는 절차
- **성능/캐시 판단**: Cache-Control, ETag, compression, keep-alive, connection pooling이 실제 latency와 서버 부하에 미치는 영향과 trade-off
- **신뢰성 설계 판단**: timeout, retry, idempotency를 분산 환경에서 안전하게 조합하는 기준
- **경계 기술에 대한 이해**: reverse proxy, API gateway, CDN, TLS termination이 왜 필요하고 각각 무엇을 대신 처리해주는지
- **관측성 기반 장애 분석**: 로그/메트릭/트레이싱으로 HTTP 트래픽 이상을 재현하고 근본 원인을 설명하는 절차

## 대상 역할

- 백엔드/플랫폼 시니어 엔지니어 (10년차 이상)
- API 설계, 트래픽 경계(프록시/게이트웨이/CDN) 설계, 프로덕션 HTTP 장애 대응에 관여하는 역할

## 전제 지식

이 워크스페이스는 다음을 이미 안다고 가정한다:

- HTTP API를 최소 하나 이상의 프레임워크로 개발한 경험
- REST API의 기본 개념 (엔드포인트, JSON 요청/응답)
- 리눅스 터미널 기본 사용, `curl` 기본 사용법
- TCP/IP의 아주 기본적인 개념 (클라이언트-서버, 포트)

HTTP 메서드/상태 코드의 사전적 정의나 "GET은 조회, POST는 생성" 수준의 기초 설명은 반복하지 않는다. 대신 그 정의가 실무에서 왜 중요한지, 어길 때 어떤 장애가 나는지를 다룬다.

## 커리큘럼 개요 (20 Days)

| Day | 주제 |
|-----|------|
| 1 | HTTP 트래픽 분석과 시니어 답변 프레임워크 — 요청 경로 전체를 그리는 사고법 |
| 2 | Method Semantics와 Idempotency — Safe/Idempotent가 재시도 설계를 결정한다 |
| 3 | Status Code 판단과 API 에러 설계 — 재시도 가능/불가능을 코드로 구분하기 |
| 4 | HTTP Headers 심화 — 요청/응답 헤더로 트래픽을 읽는 법 |
| 5 | Content Negotiation — Accept/Vary와 캐시 오염 사고 |
| 6 | Cookies & Session 관리 — SameSite, Secure, 세션 vs 토큰 |
| 7 | CORS 심화 — Preflight, credentials, 실전 트러블슈팅 |
| 8 | Cache-Control 심화 — freshness, private/public, 캐시 계층별 해석 |
| 9 | ETag와 조건부 요청 — 검증 캐시와 대역폭 절감 |
| 10 | Compression — gzip/br과 CPU-대역폭 trade-off |
| 11 | Keep-Alive와 Connection 관리 — HTTP/1.1 지속 연결과 Head-of-Line Blocking |
| 12 | Connection Pooling — 클라이언트 풀 설계와 고갈 장애 |
| 13 | Timeout / Retry / Idempotency 종합 설계 — 분산 환경에서 안전하게 재시도하기 |
| 14 | HTTP/1.1 vs HTTP/2 — Multiplexing, HPACK, Server Push의 현실 |
| 15 | HTTP/3와 QUIC — UDP 기반 전송과 채택 판단 기준 |
| 16 | Reverse Proxy — Nginx/Envoy의 역할과 헤더 전달 규칙 |
| 17 | API Gateway — 라우팅, 인증, Rate Limiting과 마이크로서비스 경계 |
| 18 | CDN 동작 원리 — Edge 캐싱, 무효화, Origin Shield |
| 19 | TLS Termination — 핸드셰이크, mTLS, 종료 지점 선택 |
| 20 | Observability와 트래픽 장애 분석 종합 — 로그/메트릭/트레이싱으로 HTTP 장애 재현하기 |

## 성공 기준

- 면접관이 "이 API가 간헐적으로 504를 뱉습니다. 어떻게 접근하시겠어요?"라고 물었을 때 계층별 원인 격리 절차를 즉시 말할 수 있다
- Cache-Control, ETag, Vary 조합을 보고 어떤 캐시 동작이 일어날지 예측할 수 있다
- Reverse proxy / API gateway / CDN이 각각 무엇을 담당하고 TLS는 어디서 종료되는지 아키텍처 다이어그램 없이 설명할 수 있다
- Timeout/retry를 설계할 때 idempotency를 근거로 안전성을 주장할 수 있다
- HTTP/1.1, HTTP/2, HTTP/3의 차이를 성능 특성과 채택 판단 기준으로 설명할 수 있다
