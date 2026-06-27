# 데이터베이스 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-22 | 데이터베이스 개요 및 관계형 모델 | [day-001-relational-model.html](lessons/day-001-relational-model.html) |
| 2 | 2026-06-22 | SQL 기초 — DDL | [day-002-sql-ddl.html](lessons/day-002-sql-ddl.html) |
| 3 | 2026-06-22 | SQL 기초 — DML | [day-003-sql-dml.html](lessons/day-003-sql-dml.html) |
| 4 | 2026-06-23 | SQL 중급 — JOIN & 집계 | [day-004-sql-join-aggregate.html](lessons/day-004-sql-join-aggregate.html) |
| 5 | 2026-06-24 | SQL 고급 — 서브쿼리·뷰·인덱스 | [day-005-sql-advanced.html](lessons/day-005-sql-advanced.html) |
| 6 | 2026-06-26 | 정규화 — 1NF·2NF·3NF·BCNF·역정규화 | [day-006-normalization.html](lessons/day-006-normalization.html) |
| 7 | 2026-06-27 | 트랜잭션과 동시성 제어 | [day-007-transactions.html](lessons/day-007-transactions.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| ~~6~~ | ~~정규화~~ | ~~완료~~ |
| ~~7~~ | ~~트랜잭션과 동시성 제어~~ | ~~완료~~ |
| 8 | 인덱스 구조와 쿼리 최적화 | B-Tree 인덱스, EXPLAIN, 커버링 인덱스, 슬로우 쿼리 |
| 9 | 저장 프로시저·트리거·함수 | CREATE PROCEDURE, CREATE TRIGGER, 사용자 정의 함수 |
| 10 | NoSQL 데이터베이스 | Document·Key-Value·Column·Graph, CAP 정리, 사용 사례 비교 |

## 현재 학습 위치

**Day 7 완료** — Day 8 (인덱스 구조와 쿼리 최적화)부터 시작.

## 습득한 핵심 개념

- [x] 데이터베이스 vs DBMS vs 파일 시스템 (Day 1)
- [x] 관계형 모델: 릴레이션·튜플·속성·도메인 (Day 1)
- [x] 키의 종류: 슈퍼키·후보키·기본키·외래키 (Day 1)
- [x] 관계 대수 기초: Selection·Projection·Join·Union (Day 1)
- [x] ERD 구성 요소: 엔티티·속성·관계·카디널리티 (Day 1)
- [x] DDL: CREATE TABLE, ALTER TABLE, DROP (Day 2)
- [x] 무결성 제약조건: PK·FK·UNIQUE·NOT NULL·CHECK (Day 2)
- [x] DML: SELECT, INSERT, UPDATE, DELETE (Day 3)
- [x] WHERE 조건 필터링: 비교·논리·LIKE·IN·BETWEEN·IS NULL (Day 3)
- [x] ORDER BY 정렬, LIMIT/OFFSET 페이지네이션 (Day 3)
- [x] SELECT 실행 순서: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT (Day 3)
- [x] JOIN 종류와 동작 원리: INNER/LEFT/RIGHT/FULL OUTER JOIN (Day 4)
- [x] 집계 함수: COUNT·SUM·AVG·MAX·MIN 및 NULL 처리 (Day 4)
- [x] GROUP BY: 그룹별 집계 수행 (Day 4)
- [x] HAVING: 집계 결과에 대한 그룹 필터링 (Day 4)
- [x] 서브쿼리·상관 서브쿼리·EXISTS (Day 5)
- [x] 스칼라·집합·인라인 뷰 서브쿼리 분류 (Day 5)
- [x] EXISTS vs IN: NULL 안전성 및 Short-circuit (Day 5)
- [x] CREATE VIEW: 가상 테이블 생성 및 관리 (Day 5)
- [x] CREATE INDEX: B-Tree 인덱스 생성 및 장단점 (Day 5)
- [x] 정규화 1NF·2NF·3NF·BCNF (Day 6)
- [x] 함수적 종속·부분FD·이행적FD (Day 6)
- [x] 역정규화와 절충점 (Day 6)
- [x] ACID & 트랜잭션 (Day 7)
- [x] Commit·Rollback·Savepoint (Day 7)
- [x] 격리 수준: READ UNCOMMITTED·READ COMMITTED·REPEATABLE READ·SERIALIZABLE (Day 7)
- [x] Dirty Read·Non-repeatable Read·Phantom Read (Day 7)
- [x] Lock (S Lock·X Lock·갭 락) & Deadlock (Day 7)
- [x] MVCC (Multi-Version Concurrency Control) (Day 7)
- [ ] 인덱스 구조 및 쿼리 최적화 심화 (예정 Day 8)
