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
| 6 | 2026-07-05 | 쿼리 튜닝 | [interview-day-006-query-tuning.html](lessons/interview-day-006-query-tuning.html) |
| 7 | 2026-07-06 | 복제와 고가용성 | [interview-day-007-replication-ha.html](lessons/interview-day-007-replication-ha.html) |
| 8 | 2026-07-07 | 파티셔닝과 샤딩 | [interview-day-008-sharding-partitioning.html](lessons/interview-day-008-sharding-partitioning.html) |
| 9 | 2026-07-08 | RDB vs NoSQL | [interview-day-009-rdb-vs-nosql.html](lessons/interview-day-009-rdb-vs-nosql.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 면접 질문 | 답변에서 보여줄 역량 |
|-----|-----------|----------------|----------------------|
| 10 | 종합 모의 면접 | "주문 시스템 DB 장애 시나리오를 분석하고 개선안을 제시해보세요." | 데이터 정합성, 성능, 복구, 재발 방지 |

## 현재 학습 위치

**Day 9 완료** — 다음: Day 10 종합 모의 면접

## Interview 답변 체크리스트

- [x] 어려운 개념을 전제 개념부터 쉬운 한국어로 설명한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓ / Day 6 ✓ / Day 7 ✓ / Day 8 ✓ / Day 9 ✓)
- [x] 왜 면접에서 이 질문을 묻는지 설명한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓ / Day 6 ✓ / Day 7 ✓ / Day 8 ✓ / Day 9 ✓)
- [x] 실제 운영 상황과 연결한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓ / Day 6 ✓ / Day 7 ✓ / Day 8 ✓ / Day 9 ✓)
- [x] 답변 순서를 단계적으로 제시한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓ / Day 6 ✓ / Day 7 ✓ / Day 8 ✓ / Day 9 ✓)
- [x] trade-off를 최소 2개 이상 비교한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓ / Day 6 ✓ / Day 7 ✓ / Day 8 ✓ / Day 9 ✓)
- [x] 흔한 오해와 약한 답변을 구분한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓ / Day 6 ✓ / Day 7 ✓ / Day 8 ✓ / Day 9 ✓)
- [x] follow-up 질문까지 대비한다. (Day 1 ✓ / Day 2 ✓ / Day 3 ✓ / Day 4 ✓ / Day 5 ✓ / Day 6 ✓ / Day 7 ✓ / Day 8 ✓ / Day 9 ✓)

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
- [x] EXPLAIN 추정치(rows)와 실측치의 차이, 통계 노후화가 계획에 미치는 영향 (Day 6)
- [x] Cardinality/Selectivity가 인덱스 효용에 미치는 영향 (Day 6)
- [x] Sargable 쿼리 작성과 대표적인 인덱스 무력화 패턴 (Day 6)
- [x] OFFSET vs Keyset 페이지네이션의 성능 특성 차이 (Day 6)
- [x] 동기/비동기/준동기 복제와 replication lag 발생 원인 (Day 7)
- [x] Read-after-write 문제와 라우팅/토큰 기반 해결 전략 (Day 7)
- [x] Failover 시 데이터 유실 가능성과 split-brain, fencing/쿼럼 방어 (Day 7)
- [x] 파티셔닝(단일 서버 내부 분리) vs 샤딩(여러 서버로 분산)의 근본적 차이 (Day 8)
- [x] 샤딩 키 선택이 되돌리기 어려운 이유와 hash/range/directory 방식의 trade-off (Day 8)
- [x] Consistent hashing/가상 노드가 rebalancing 비용을 줄이는 원리 (Day 8)
- [x] Cross-shard JOIN/트랜잭션/전역 정렬/유니크 제약이 다시 설계돼야 하는 이유 (Day 8)
- [x] 스키마리스는 스키마 부재가 아니라 검증 책임의 애플리케이션 이동임을 구분 (Day 9)
- [x] CAP 정리와 강한 일관성 vs 최종 일관성의 실무적 판단 기준 (Day 9)
- [x] Document DB 임베딩 vs 참조 선택 기준과 되돌리기 어려움 (Day 9)
- [x] Polyglot persistence의 이득과 동기화/운영 복잡도 비용 (Day 9)
