# 데이터베이스 10년차 이상 개발자 Interview 학습 진행 상황

## 리셋 기준

이 브랜치부터 데이터베이스 학습은 기존 일반 SQL/DB 커리큘럼을 이어가지 않고 **10년차 이상 개발자 기술 면접 형식**으로 Day 1부터 다시 시작한다.

기존 레슨 파일은 참고 자료로 보존하지만, 완료 상태는 새 인터뷰 커리큘럼 기준으로 다시 기록한다.

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | DB 성능 진단 프레임워크 | [interview-day-001-db-performance-diagnosis.html](lessons/interview-day-001-db-performance-diagnosis.html) |
| 2 | 2026-07-01 | 스키마 설계와 정규화 | [interview-day-002-schema-design.html](lessons/interview-day-002-schema-design.html) |
| 3 | 2026-07-02 | 인덱스 설계 | [interview-day-003-index-design.html](lessons/interview-day-003-index-design.html) |
| 4 | 2026-07-03 | 트랜잭션과 격리 수준 | [interview-day-004-transactions-isolation.html](lessons/interview-day-004-transactions-isolation.html) |
| 5 | 2026-07-04 | Lock과 Deadlock | [interview-day-005-lock-deadlock.html](lessons/interview-day-005-lock-deadlock.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 면접 질문 | 답변에서 보여줄 역량 |
|-----|-----------|----------------|----------------------|
| 6 | 쿼리 튜닝 | "EXPLAIN에서 rows가 큰데 key가 잡혀 있습니다. 무엇을 의심하겠습니까?" | 실행 계획 해석, 통계, cardinality, rewrite |
| 7 | 복제와 고가용성 | "Primary-Replica 구조에서 read-after-write 문제를 어떻게 다룹니까?" | replication lag, consistency, failover |
| 8 | 파티셔닝과 샤딩 | "샤딩은 언제 필요하고 어떤 비용을 치릅니까?" | 라우팅, rebalancing, cross-shard query, 운영 복잡도 |
| 9 | RDB vs NoSQL | "Document DB를 선택할 때 어떤 위험을 감수합니까?" | 모델 유연성, 트랜잭션, 쿼리 패턴, 확장성 |
| 10 | 종합 모의 면접 | "주문 시스템 DB 장애 시나리오를 분석하고 개선안을 제시해보세요." | 데이터 정합성, 성능, 복구, 재발 방지 |

## 현재 학습 위치

**Day 5 완료** — 다음: Day 6 쿼리 튜닝

## Interview 답변 체크리스트

- [x] 어려운 개념을 전제 개념부터 쉬운 한국어로 설명한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓)
- [x] 왜 면접에서 이 질문을 묻는지 설명한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓)
- [x] 실제 운영 상황과 연결한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓)
- [x] 답변 순서를 단계적으로 제시한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓)
- [x] trade-off를 최소 2개 이상 비교한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓)
- [x] 흔한 오해와 약한 답변을 구분한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓)
- [x] follow-up 질문까지 대비한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓)

## 습득한 핵심 개념

- [x] ACID, Isolation 손잡이 개념 (Day 4)
- [x] Dirty Read / Non-repeatable Read / Phantom Read / Lost Update 구분 (Day 4)
- [x] MVCC 스냅샷/버전 관리 원리 (Day 4)
- [x] InnoDB REPEATABLE READ의 gap lock / next-key lock 특성 (Day 4)
- [x] 비관적 락 vs 낙관적 락 선택 기준 (Day 4)
- [x] 공유 락(S) vs 배타 락(X)과 충돌 규칙 (Day 5)
- [x] Record/Gap/Next-key/Intention Lock의 범위 차이 (Day 5)
- [x] Deadlock vs Lock Wait Timeout 구분과 감지 방식(wait-for graph vs timeout) (Day 5)
- [x] 접근 순서 불일치로 인한 deadlock 패턴과 재발 방지 설계 (Day 5)
