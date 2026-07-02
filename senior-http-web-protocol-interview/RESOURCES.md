# HTTP / Web Protocol & API Traffic 학습 자료

## 1차 자료 (필수 / 기준서)

### 책

| 제목 | 저자 | 이유 |
|------|------|------|
| *HTTP: The Definitive Guide* | Gourley & Totty | HTTP 프로토콜 자체의 가장 상세한 기준서. 캐시, 프록시, 연결 관리 챕터가 특히 유용 |
| *High Performance Browser Networking* | Ilya Grigorik | TCP/TLS/HTTP/1.1/HTTP/2/QUIC의 성능 특성을 다루는 현장 표준서. 무료로 온라인 공개됨 |
| *Web Scalability for Startup Engineers* | Artur Ejsmont | 리버스 프록시, 로드밸런서, CDN 계층을 실무 트래픽 관점에서 설명 |
| *Designing Data-Intensive Applications* | Martin Kleppmann | API 신뢰성, 타임아웃/재시도, 분산 시스템 관점에서 idempotency 이해에 도움 |
| *Release It!* (2nd ed.) | Michael T. Nygard | Timeout, retry, circuit breaker — API 트래픽 신뢰성 설계의 실무 기준 |

### 공식 스펙 / RFC (원전 확인용)

- **RFC 9110 — HTTP Semantics** — https://www.rfc-editor.org/rfc/rfc9110 (메서드, 상태 코드, 헤더 의미의 최신 정본)
- **RFC 9111 — HTTP Caching** — https://www.rfc-editor.org/rfc/rfc9111 (Cache-Control, 검증 캐시 정의)
- **RFC 9112 — HTTP/1.1** — https://www.rfc-editor.org/rfc/rfc9112
- **RFC 9113 — HTTP/2** — https://www.rfc-editor.org/rfc/rfc9113
- **RFC 9114 — HTTP/3** — https://www.rfc-editor.org/rfc/rfc9114
- **MDN HTTP 문서** — https://developer.mozilla.org/en-US/docs/Web/HTTP (헤더/상태 코드 실무 설명이 가장 정리가 잘 되어 있음)
- **MDN CORS 가이드** — https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS

## 2차 자료 (심화 / 케이스 스터디)

### 엔지니어링 블로그

- **Cloudflare Blog** — TLS, HTTP/3/QUIC, CDN 엣지 캐싱 내부 동작 설명이 매우 상세함
- **Fastly Blog** — CDN 캐시 무효화, Vary 헤더 트러블슈팅 사례
- **Envoy Proxy Blog / Docs** — 리버스 프록시·서비스 메시 계층에서의 타임아웃/재시도 설계
- **Stripe Engineering Blog** — API idempotency key 설계 사례 (결제 API의 표준 패턴)
- **Nginx 공식 문서 — Reverse Proxy / Load Balancing** — https://nginx.org/en/docs/

### 영상 강의

- **Ilya Grigorik — "Delivering Fast and Reliable Web Apps"** (다수 컨퍼런스 영상, HTTP/2·QUIC 설명)
- **Cloudflare TV / Cloudflare Blog 영상 시리즈** — HTTP/3 QUIC 핸드셰이크 시각 자료

## 트래픽 분석/디버깅 도구

| 도구 | 용도 |
|------|------|
| **curl -v / curl -w** | 요청·응답 헤더 확인, 타이밍 분해 (DNS/connect/TLS/TTFB) |
| **httpie** | 사람이 읽기 쉬운 형태의 HTTP 요청/응답 확인 |
| **tcpdump / Wireshark** | 실제 패킷 레벨에서 TCP 핸드셰이크·재전송·TLS 협상 확인 |
| **Chrome DevTools Network 탭** | 브라우저 관점의 캐시 히트/미스, 타이밍 워터폴 |
| **mitmproxy** | 중간에서 HTTP 트래픽을 가로채 헤더/바디 확인·변조 |
| **k6 / wrk / hey** | keep-alive, connection pooling 동작을 부하 상황에서 확인 |

## 프록시 / 게이트웨이 / CDN 공식 문서

| 대상 | 문서 |
|------|------|
| Nginx | https://nginx.org/en/docs/http/ngx_http_proxy_module.html |
| Envoy | https://www.envoyproxy.io/docs/envoy/latest/intro/intro |
| Kong / API Gateway 개념 | https://docs.konghq.com/gateway/latest/ |
| Cloudflare Cache 동작 | https://developers.cloudflare.com/cache/ |
| AWS CloudFront | https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html |

## 핵심 개념 사전 이해용

| 개념 | 추천 자료 |
|------|-----------|
| TCP 3-way handshake | Wikipedia로도 충분, TCP 연결 수립 원리 이해용 |
| TLS 1.3 handshake | Cloudflare Blog — "A Detailed Look at RFC 8446 (TLS 1.3)" |
| HOL Blocking (Head-of-Line Blocking) | High Performance Browser Networking, HTTP/2·HTTP/3 챕터 |
| Idempotency Key 패턴 | Stripe API 문서 — https://stripe.com/docs/api/idempotent_requests |
| Vary 헤더와 캐시 오염 | MDN Vary 문서 + Fastly 블로그 사례 |
