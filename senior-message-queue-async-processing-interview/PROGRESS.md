# 메시지 큐 / 비동기 처리 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 비동기 처리와 메시지 큐 설계 프레임워크 | [0001-async-design-and-message-queue-framework.html](lessons/0001-async-design-and-message-queue-framework.html) |
| 2 | 2026-07-01 | Kafka 아키텍처와 파티셔닝 / 순서 보장 설계 | [0002-kafka-partitioning-and-ordering.html](lessons/0002-kafka-partitioning-and-ordering.html) |
| 3 | 2026-07-02 | RabbitMQ Exchange 유형과 라우팅 설계 | [0003-rabbitmq-exchange-routing-and-dlx.html](lessons/0003-rabbitmq-exchange-routing-and-dlx.html) |
| 4 | 2026-07-03 | AWS SQS/SNS 패턴과 클라우드 비동기 설계 | [0004-sqs-sns-cloud-async-patterns.html](lessons/0004-sqs-sns-cloud-async-patterns.html) |
| 5 | 2026-07-04 | Idempotency (멱등성) 설계와 재시도 안전성 | [0005-idempotency-and-retry-safety.html](lessons/0005-idempotency-and-retry-safety.html) |
| 6 | 2026-07-05 | Dead-Letter Queue 설계와 장애 격리 | [0006-dead-letter-queue-and-failure-isolation.html](lessons/0006-dead-letter-queue-and-failure-isolation.html) |
| 7 | 2026-07-06 | 재시도 전략 — Exponential Backoff와 재시도 횟수 결정 | [0007-exponential-backoff-retry-strategy.html](lessons/0007-exponential-backoff-retry-strategy.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 8 | Backpressure와 Consumer Rate Control | 처리량 병목, Prefetch, Consumer 수 조정, 큐 길이 모니터링 |
| 9 | Celery와 Python 비동기 작업 설계 | Task 설계, Retry, Priority Queue, chord/chain, Worker 관리 |
| 10 | 대규모 비동기 처리 아키텍처 종합 설계 | 전체 시나리오 설계, 처리량 산정, 장애 전파 차단, 운영 체크리스트 |

## 현재 학습 위치

**Day 7 완료** — Day 8: Backpressure와 Consumer Rate Control 예정.

## 습득한 핵심 개념

- [x] 동기 vs 비동기 처리 판단 기준 (Day 1)
- [x] 메시지 큐 도입 결정 프레임워크 — 4가지 판단 축 (Day 1)
- [x] At-least-once / At-most-once / Exactly-once 의미 (Day 1)
- [x] Producer → Broker → Consumer 기본 흐름 (Day 1)
- [x] 비동기 처리의 장애 전파 차단 원리 (Day 1)
- [x] Kafka Topic/Partition/Offset 구조와 순서 보장 조건 (Day 2)
- [x] 파티션 키 설계와 핫 파티션 리스크 (Day 2)
- [x] Consumer Group과 Rebalancing (Day 2)
- [x] RabbitMQ Exchange 유형별 라우팅 (Direct/Fanout/Topic/Headers) (Day 3)
- [x] ACK/NACK와 신뢰성 전달, Prefetch(QoS) (Day 3)
- [x] Dead Letter Exchange를 통한 독성 메시지 격리 (Day 3)
- [x] SNS Fan-out과 SQS Standard vs FIFO 선택 기준 (Day 4)
- [x] Visibility Timeout 기반 재전달과 멱등 처리 필요성 (Day 4)
- [x] FIFO MessageGroupId와 head-of-line blocking 리스크 (Day 4)
- [x] Lambda Event Source Mapping의 배치 부분 실패 처리 (Day 4)
- [x] 멱등키 설계 기준과 DB 유니크 제약을 통한 원자적 중복 방지 (Day 5)
- [x] check-then-act 패턴의 동시성 결함과 원자적 연산의 필요성 (Day 5)
- [x] 외부 API 호출 경계에서의 멱등성(Idempotency-Key, reconciliation) (Day 5)
- [x] DLQ의 격리 목적과 head-of-line blocking 방지 원리 (Day 6)
- [x] 일시적 실패 vs 영구적 실패 구분과 재시도 분기 기준 (Day 6)
- [x] 브로커별 DLQ 메커니즘(SQS Redrive Policy, RabbitMQ DLX, Kafka DLT 컨벤션) (Day 6)
- [x] DLQ 이후의 알림·메타데이터 기록·재처리(redrive) 설계 (Day 6)
- [x] 고정 간격 재시도의 문제(회복 방해, retry storm)와 Exponential Backoff 공식 (Day 7)
- [x] Full/Equal/Decorrelated Jitter의 차이와 선택 기준 (Day 7)
- [x] 재시도 대상 구분(상태 코드/예외 유형)과 Idempotency와의 결합 필요성 (Day 7)
- [x] 최대 재시도 횟수를 SLA·회복 시간·비용으로 역산하는 기준 (Day 7)
- [ ] Backpressure 처리 패턴 (예정 Day 8)
- [ ] Celery 작업 설계 (예정 Day 9)
- [ ] 대규모 비동기 아키텍처 종합 (예정 Day 10)
