# 네트워크 10년차 이상 개발자 Interview 학습 진행 상황

## 리셋 기준

이 브랜치부터 네트워크 학습은 기존 일반 CS 커리큘럼을 이어가지 않고 **10년차 이상 개발자 기술 면접 형식**으로 Day 1부터 다시 시작한다.

기존 레슨 파일은 참고 자료로 보존하지만, 완료 상태는 새 인터뷰 커리큘럼 기준으로 다시 기록한다.

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 네트워크 장애 분석 프레임워크 | `lessons/interview-day-01-network-failure-analysis-framework.html` |
| 2 | 2026-07-01 | OSI/TCP-IP 계층과 실무 장애 분석 | `lessons/interview-day-02-osi-tcpip-layers-troubleshooting.html` |
| 3 | 2026-07-02 | TCP vs UDP와 연결 관리 | `lessons/interview-day-03-tcp-udp-connection-management.html` |
| 4 | 2026-07-03 | DNS와 서비스 발견 | `lessons/interview-day-04-dns-service-discovery.html` |
| 5 | 2026-07-04 | HTTP/HTTPS와 TLS 핸드셰이크 | `lessons/interview-day-05-https-tls-handshake.html` |
| 6 | 2026-07-05 | 로드밸런싱과 프록시 | `lessons/interview-day-06-load-balancing-and-proxy.html` |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 면접 질문 | 답변에서 보여줄 역량 |
|-----|-----------|----------------|----------------------|
| 7 | 클라우드 네트워킹 | "VPC 안에서 외부 API 호출이 실패하면 어떤 순서로 확인합니까?" | subnet, route table, NAT, security group, NACL |
| 8 | 네트워크 보안 | "방화벽, NAT, VPN, zero trust를 실무 관점에서 비교해보세요." | 경계 보안 vs identity 기반 보안 |
| 9 | 성능 최적화 | "RTT가 큰 환경에서 API 성능을 어떻게 개선합니까?" | keep-alive, batching, compression, CDN, protocol 선택 |
| 10 | 종합 모의 면접 | "실제 장애 시나리오를 받아 네트워크 관점 RCA를 수행해보세요." | 구조화된 답변, follow-up 대응, 재발 방지 |

## 현재 학습 위치

**Day 6 완료, Day 7 예정** — 클라우드 네트워킹(VPC).

## Interview 답변 체크리스트

- [x] 어려운 개념을 전제 개념부터 쉬운 한국어로 설명한다. (Day 1~6 적용)
- [x] 왜 면접에서 이 질문을 묻는지 설명한다. (Day 1~6 적용)
- [x] 실제 운영 상황과 연결한다. (Day 1~6 적용)
- [x] 답변 순서를 단계적으로 제시한다. (Day 1~6 적용)
- [x] trade-off를 최소 2개 이상 비교한다. (Day 1~6 적용)
- [x] 흔한 오해와 약한 답변을 구분한다. (Day 1~6 적용)
- [x] follow-up 질문까지 대비한다. (Day 1~6 적용)
