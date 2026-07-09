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
| 7 | 2026-07-06 | 클라우드 네트워킹(VPC) | `lessons/interview-day-07-vpc-cloud-networking.html` |
| 8 | 2026-07-07 | 네트워크 보안(방화벽/NAT/VPN/Zero Trust) | `lessons/interview-day-08-firewall-nat-vpn-zerotrust.html` |
| 9 | 2026-07-08 | 네트워크 성능 최적화(RTT/keep-alive/CDN/HTTP/2·3) | `lessons/interview-day-09-network-performance-optimization.html` |
| 10 | 2026-07-09 | 종합 모의 면접: 네트워크 장애 RCA | `lessons/interview-day-10-comprehensive-mock-rca.html` |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 면접 질문 | 답변에서 보여줄 역량 |
|-----|-----------|----------------|----------------------|
| 11 | 글로벌 트래픽 분산과 장애 격리 아키텍처 설계 | "여러 리전에 서비스를 배포한다면 트래픽 라우팅, 장애 격리(blast radius 축소), 데이터 일관성을 네트워크 관점에서 어떻게 설계하시겠습니까?" | 아키텍처 의사결정, 일관성/가용성 trade-off, 리전 장애 대응 설계 |

## 현재 학습 위치

**Day 10 완료** — 신규 인터뷰 커리큘럼(Day 1~10) 전체 완료. 다음은 Day 11, 글로벌 트래픽 분산/장애 격리 아키텍처 설계로 심화 예정.

## Interview 답변 체크리스트

- [x] 어려운 개념을 전제 개념부터 쉬운 한국어로 설명한다. (Day 1~10 적용)
- [x] 왜 면접에서 이 질문을 묻는지 설명한다. (Day 1~10 적용)
- [x] 실제 운영 상황과 연결한다. (Day 1~10 적용)
- [x] 답변 순서를 단계적으로 제시한다. (Day 1~10 적용)
- [x] trade-off를 최소 2개 이상 비교한다. (Day 1~10 적용)
- [x] 흔한 오해와 약한 답변을 구분한다. (Day 1~10 적용)
- [x] follow-up 질문까지 대비한다. (Day 1~10 적용)
