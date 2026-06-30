# 시스템 설계 Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 시스템 설계 답변 프레임워크와 요구사항 정리 | [0001-system-design-answer-framework.html](lessons/0001-system-design-answer-framework.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 2 | Capacity Estimation 심화 — QPS, 저장 용량, 대역폭 계산 | DAU→QPS 변환, 스토리지 산정, 네트워크 대역폭, 서버 대수 추정 |
| 3 | 수평 확장과 로드밸런싱 | Stateless 서버, L4/L7 LB, 세션 관리, Sticky Session 문제 |
| 4 | 캐시 전략과 CDN | Cache-aside vs Write-through, 캐시 무효화, CDN 전략 |
| 5 | 데이터베이스 확장 — 복제와 샤딩 | Primary-Replica, Sharding 전략, Hot Shard 문제 |
| 6 | 메시지 큐와 비동기 처리 | Kafka vs RabbitMQ, 이벤트 드리븐 아키텍처, Backpressure |
| 7 | 장애 격리와 고가용성 | Circuit Breaker, Bulkhead, Retry with backoff, 다중 AZ |
| 8 | 분산 시스템과 일관성 | CAP Theorem, BASE vs ACID, Eventual Consistency, 분산 트랜잭션 |
| 9 | 실전 설계 — URL 단축 서비스 | Hash 전략, Collision 처리, 분산 ID 생성 |
| 10 | 실전 설계 — 뉴스 피드 / 타임라인 | Fanout on Write vs Read, 소셜 그래프 DB 선택 |
| 11 | 실전 설계 — 채팅 서비스 | WebSocket, 메시지 순서, 오프라인 처리, 대화방 확장 |
| 12 | 실전 설계 — 동영상 스트리밍 | 인코딩 파이프라인, CDN, Adaptive Bitrate |
| 13 | 실전 설계 — 검색 자동완성 | Trie, Prefix 압축, 분산 Trie, 랭킹 알고리즘 |
| 14 | 실전 설계 — 알림 시스템 | Push/Pull, 배달 보장, 알림 우선순위, 디바이스 토큰 관리 |
| 15 | 실전 설계 — 결제 시스템 | 멱등성, 2단계 커밋, 분산 트랜잭션, 정산 일관성 |

## 현재 학습 위치

**Day 1 완료** — Day 2: Capacity Estimation 심화로 이어짐.

## 습득한 핵심 개념

- [x] 시스템 설계 면접 답변 5단계 프레임워크 (Day 1)
- [x] Functional vs Non-functional Requirements 정리법 (Day 1)
- [x] 요구사항 질문 패턴 (Day 1)
- [x] 강한 답변 vs 약한 답변 구분 (Day 1)
- [ ] Capacity Estimation — QPS, 저장, 대역폭 계산 (예정 Day 2)
- [ ] 수평 확장 / 로드밸런싱 (예정 Day 3)
- [ ] 캐시 전략 / CDN (예정 Day 4)
- [ ] DB 복제 / 샤딩 (예정 Day 5)
- [ ] 메시지 큐 (예정 Day 6)
- [ ] 장애 격리 / 고가용성 (예정 Day 7)
- [ ] CAP Theorem / 분산 일관성 (예정 Day 8)
