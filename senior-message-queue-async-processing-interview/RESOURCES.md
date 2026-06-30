# 메시지 큐 / 비동기 처리 — 참고 자료

## 공식 문서

| 자료 | 설명 |
|------|------|
| Apache Kafka Documentation (kafka.apache.org/documentation) | Kafka 공식 문서 — 파티셔닝, 컨슈머 그룹, 오프셋, 복제 개념의 1차 출처 |
| RabbitMQ Documentation (rabbitmq.com/documentation.html) | Exchange, Queue, Binding, ACK 공식 설명 |
| AWS SQS Developer Guide | Standard vs FIFO, 가시성 타임아웃, DLQ 설정 공식 가이드 |
| AWS SNS Developer Guide | Fan-out 패턴, SQS 연동 아키텍처 |
| Celery Documentation (docs.celeryq.dev) | Task, Retry, Beat, Canvas(chord/chain) 설계 |

## 교재 및 서적

| 자료 | 설명 |
|------|------|
| Designing Data-Intensive Applications (Martin Kleppmann) | 분산 메시지 시스템의 이론적 기반 — Kafka 설계 원리, 로그 기반 메시지 브로커, 스트림 처리 |
| Enterprise Integration Patterns (Gregor Hohpe) | 메시지 채널, 라우팅, 변환, 엔드포인트 패턴의 고전 참고서 |
| Building Event-Driven Microservices (Adam Bellemare) | 이벤트 중심 마이크로서비스 설계 실전 패턴 |

## 엔지니어링 블로그 (신뢰도 높은 실무 사례)

| 자료 | 설명 |
|------|------|
| Confluent Blog (confluent.io/blog) | Kafka 실전 패턴, 카프카 스트림즈, ksqlDB 사례 |
| Uber Engineering Blog | 대규모 Kafka 운영, 주문 처리 비동기화 실사례 |
| LinkedIn Engineering Blog | Kafka 원래 개발팀의 설계 의도와 운영 경험 |
| Airbnb Engineering Blog | Celery 기반 대규모 비동기 작업 처리 사례 |
| AWS Architecture Blog | SQS/SNS fan-out, Lambda 연동 비동기 패턴 |

## 핵심 개념 논문 / 설계 문서

| 자료 | 설명 |
|------|------|
| "The Log: What every software engineer should know about real-time data's unifying abstraction" (Jay Kreps, LinkedIn) | Kafka 설계 철학의 근원 — 로그를 중심으로 한 비동기 아키텍처 |
| "Exactly-once Semantics are Possible: Here's How Kafka Does It" (Confluent) | 메시지 중복 처리 방지의 기술적 구현 |

## 학습 순서 권장

1. DDIA 8~11장 (분산 시스템, 스트림 처리) → 이론 기반
2. Kafka 공식 문서 → 파티셔닝, 컨슈머 그룹, 오프셋 커밋
3. RabbitMQ 공식 문서 → Exchange 유형별 라우팅
4. AWS SQS 개발자 가이드 → 클라우드 환경 설계
5. Celery 문서 → Python 비동기 작업 실전
6. Enterprise Integration Patterns → 패턴 언어로 설계 소통
