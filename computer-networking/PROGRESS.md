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

## 다음 예정 학습

| Day | 예정 주제 | 핵심 면접 질문 | 답변에서 보여줄 역량 |
|-----|-----------|----------------|----------------------|
| 4 | DNS와 서비스 발견 | "DNS 장애와 애플리케이션 장애를 어떻게 구분합니까?" | 캐싱, TTL, 재귀 질의, failover, split-horizon DNS |
| 5 | HTTP/HTTPS와 TLS | "TLS 핸드셰이크가 성능과 보안에 주는 영향을 설명해보세요." | 인증서 체인, 세션 재사용, HTTP/2/3, 보안 설정 |
| 6 | 로드밸런싱과 프록시 | "L4와 L7 로드밸런서를 어떤 기준으로 선택합니까?" | 성능, 기능, 관측성, 장애 범위 trade-off |
| 7 | 클라우드 네트워킹 | "VPC 안에서 외부 API 호출이 실패하면 어떤 순서로 확인합니까?" | subnet, route table, NAT, security group, NACL |
| 8 | 네트워크 보안 | "방화벽, NAT, VPN, zero trust를 실무 관점에서 비교해보세요." | 경계 보안 vs identity 기반 보안 |
| 9 | 성능 최적화 | "RTT가 큰 환경에서 API 성능을 어떻게 개선합니까?" | keep-alive, batching, compression, CDN, protocol 선택 |
| 10 | 종합 모의 면접 | "실제 장애 시나리오를 받아 네트워크 관점 RCA를 수행해보세요." | 구조화된 답변, follow-up 대응, 재발 방지 |

## 현재 학습 위치

**Day 3 완료, Day 4 예정** — DNS와 서비스 발견.

## Interview 답변 체크리스트

- [ ] 어려운 개념을 전제 개념부터 쉬운 한국어로 설명한다.
- [ ] 왜 면접에서 이 질문을 묻는지 설명한다.
- [ ] 실제 운영 상황과 연결한다.
- [ ] 답변 순서를 단계적으로 제시한다.
- [ ] trade-off를 최소 2개 이상 비교한다.
- [ ] 흔한 오해와 약한 답변을 구분한다.
- [ ] follow-up 질문까지 대비한다.
