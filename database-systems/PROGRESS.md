# 데이터베이스 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-22 | 데이터베이스 개요 및 관계형 모델 | [day-001-relational-model.html](lessons/day-001-relational-model.html) |
| 2 | 2026-06-22 | SQL 기초 — DDL | [day-002-sql-ddl.html](lessons/day-002-sql-ddl.html) |
| 3 | 2026-06-22 | SQL 기초 — DML | [day-003-sql-dml.html](lessons/day-003-sql-dml.html) |
| 4 | 2026-06-23 | SQL 중급 — JOIN & 집계 | [day-004-sql-join-aggregate.html](lessons/day-004-sql-join-aggregate.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 5 | SQL 고급 — 서브쿼리·뷰·인덱스 | 상관 서브쿼리, EXISTS, CREATE VIEW, CREATE INDEX |
| 6 | 정규화 | 함수적 종속, 1NF·2NF·3NF·BCNF, 역정규화 |
| 7 | 트랜잭션과 동시성 제어 | ACID, Commit/Rollback, 격리 수준, Dirty Read·Phantom Read |
| 8 | 인덱스 구조와 쿼리 최적화 | B-Tree 인덱스, EXPLAIN, 커버링 인덱스, 슬로우 쿼리 |
| 9 | 저장 프로시저·트리거·함수 | CREATE PROCEDURE, CREATE TRIGGER, 사용자 정의 함수 |
| 10 | NoSQL 데이터베이스 | Document·Key-Value·Column·Graph, CAP 정리, 사용 사례 비교 |

## 현재 학습 위치

**Day 4 완료** — Day 5 (SQL 고급 — 서브쿼리·뷰·인덱스)부터 시작.

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
- [ ] 서브쿼리·상관 서브쿼리·EXISTS (예정 Day 5)
- [ ] 정규화 1NF·2NF·3NF·BCNF (예정 Day 6)
- [ ] ACID & 트랜잭션 (예정 Day 7)
- [ ] 인덱스 구조 및 쿼리 최적화 (예정 Day 8)
