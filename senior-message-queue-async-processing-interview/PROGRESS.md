# 메시지 큐 / 비동기 처리 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 비동기 처리와 메시지 큐 설계 프레임워크 | [0001-async-design-and-message-queue-framework.html](lessons/0001-async-design-and-message-queue-framework.html) |
| 2 | 2026-07-01 | Kafka 아키텍처와 파티셔닝 / 순서 보장 설계 | [0002-kafka-partitioning-and-ordering.html](lessons/0002-kafka-partitioning-and-ordering.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 3 | RabbitMQ Exchange 유형과 라우팅 설계 | Direct/Topic/Fanout/Headers Exchange, DLX, ACK/NACK 전략 |
| 4 | AWS SQS/SNS 패턴과 클라우드 비동기 설계 | Standard vs FIFO, 가시성 타임아웃, Fan-out, Lambda 연동 |
| 5 | Idempotency (멱등성) 설계와 재시도 안전성 | 멱등 키, DB 유니크 제약, 상태 기반 중복 방지, at-least-once 처리 |
| 6 | Dead-Letter Queue 설계와 장애 격리 | DLQ 구성, 독성 메시지 탐지, 재처리 파이프라인, 알림 연동 |
| 7 | 재시도 전략 — Exponential Backoff와 재시도 횟수 결정 | Backoff 공식, Jitter, 최대 재시도 횟수 결정 기준, 재시도 비용 |
| 8 | Backpressure와 Consumer Rate Control | 처리량 병목, Prefetch, Consumer 수 조정, 큐 길이 모니터링 |
| 9 | Celery와 Python 비동기 작업 설계 | Task 설계, Retry, Priority Queue, chord/chain, Worker 관리 |
| 10 | 대규모 비동기 처리 아키텍처 종합 설계 | 전체 시나리오 설계, 처리량 산정, 장애 전파 차단, 운영 체크리스트 |

## 현재 학습 위치

**Day 2 완료** — Day 3: RabbitMQ Exchange 유형과 라우팅 설계 예정.

## 습득한 핵심 개념

- [x] 동기 vs 비동기 처리 판단 기준 (Day 1)
- [x] 메시지 큐 도입 결정 프레임워크 — 4가지 판단 축 (Day 1)
- [x] At-least-once / At-most-once / Exactly-once 의미 (Day 1)
- [x] Producer → Broker → Consumer 기본 흐름 (Day 1)
- [x] 비동기 처리의 장애 전파 차단 원리 (Day 1)
- [x] Kafka Topic/Partition/Offset 구조와 순서 보장 조건 (Day 2)
- [x] 파티션 키 설계와 핫 파티션 리스크 (Day 2)
- [x] Consumer Group과 Rebalancing (Day 2)
- [ ] RabbitMQ Exchange 유형별 라우팅 (예정 Day 3)
- [ ] AWS SQS Standard vs FIFO 선택 기준 (예정 Day 4)
- [ ] Idempotency 설계 패턴 (예정 Day 5)
- [ ] Dead-Letter Queue 설계 (예정 Day 6)
- [ ] Exponential Backoff 재시도 전략 (예정 Day 7)
- [ ] Backpressure 처리 패턴 (예정 Day 8)
- [ ] Celery 작업 설계 (예정 Day 9)
- [ ] 대규모 비동기 아키텍처 종합 (예정 Day 10)
