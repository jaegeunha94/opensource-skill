# Day 2 — SQL 기초: DDL (Data Definition Language)

**날짜**: 2026-06-22
**소요 시간**: 약 60분
**선행 조건**: Day 1 — 데이터베이스 개요 및 관계형 모델

---

## 학습 목표

이 레슨을 마치면 다음을 할 수 있다:

1. DDL과 DML의 차이를 설명할 수 있다
2. `CREATE TABLE`로 테이블을 정의하고 데이터 타입을 선택할 수 있다
3. `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `NOT NULL`, `CHECK` 제약조건을 올바르게 적용할 수 있다
4. `ALTER TABLE`로 테이블 구조를 변경할 수 있다
5. `DROP TABLE`과 `TRUNCATE TABLE`의 차이를 알 수 있다

---

## 1. SQL 분류 개요

SQL은 목적에 따라 세 가지 하위 언어로 나뉜다.

| 분류 | 의미 | 주요 명령어 |
|------|------|-------------|
| **DDL** (Data Definition Language) | 구조 정의 | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` |
| **DML** (Data Manipulation Language) | 데이터 조작 | `SELECT`, `INSERT`, `UPDATE`, `DELETE` |
| **DCL** (Data Control Language) | 권한 제어 | `GRANT`, `REVOKE` |

> 이 레슨은 **DDL**에 집중한다.

---

## 2. 데이터 타입

테이블을 만들기 전에 각 컬럼에 알맞은 타입을 골라야 한다.

### 숫자형

| 타입 | 범위 / 특징 | 사용 예 |
|------|-------------|---------|
| `INTEGER` / `INT` | 정수 (4바이트, ±21억) | 나이, 수량 |
| `BIGINT` | 정수 (8바이트, ±922경) | 고유 ID, 타임스탬프 |
| `NUMERIC(p, s)` | 정밀 소수 (p자리, 소수점 s자리) | 금액, 환율 |
| `REAL` / `FLOAT` | 부동소수점 (정밀도 손실 가능) | 과학 계산 |

```sql
-- 금액은 NUMERIC 사용 (FLOAT은 반올림 오류 발생 가능)
price NUMERIC(10, 2)  -- 최대 10자리, 소수점 2자리
```

### 문자형

| 타입 | 특징 | 사용 예 |
|------|------|---------|
| `CHAR(n)` | 고정 길이 (공백 패딩) | 국가 코드 'KR', 우편번호 |
| `VARCHAR(n)` | 가변 길이 (최대 n) | 이름, 이메일 |
| `TEXT` | 길이 제한 없음 | 게시글 본문, 설명 |

```sql
country_code CHAR(2)      -- 항상 2자리 → CHAR
email        VARCHAR(255)  -- 최대 255자 → VARCHAR
description  TEXT          -- 무제한 → TEXT
```

### 날짜·시간형

| 타입 | 저장 내용 | 예시 |
|------|-----------|------|
| `DATE` | 날짜만 | `'2026-06-22'` |
| `TIME` | 시간만 | `'14:30:00'` |
| `TIMESTAMP` | 날짜+시간 | `'2026-06-22 14:30:00'` |
| `TIMESTAMPTZ` | 날짜+시간+시간대 | `'2026-06-22 14:30:00+09'` |

### 기타

| 타입 | 특징 |
|------|------|
| `BOOLEAN` | `TRUE` / `FALSE` / `NULL` |
| `UUID` | 범용 고유 식별자 (36자) |
| `JSON` / `JSONB` | JSON 저장 (JSONB는 PostgreSQL 바이너리 색인 가능) |

---

## 3. CREATE TABLE

기본 구문:

```sql
CREATE TABLE 테이블명 (
    컬럼명 데이터타입 [제약조건],
    ...
    [테이블 수준 제약조건]
);
```

### 예시: 학생 테이블

```sql
CREATE TABLE student (
    student_id  BIGINT       NOT NULL,
    name        VARCHAR(50)  NOT NULL,
    email       VARCHAR(255) NOT NULL,
    age         INTEGER      CHECK (age >= 0 AND age <= 150),
    major       VARCHAR(100),
    created_at  TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (student_id),
    UNIQUE (email)
);
```

### 예시: 강좌와 수강 테이블 (FK 포함)

```sql
CREATE TABLE course (
    course_id   CHAR(8)      NOT NULL,
    title       VARCHAR(100) NOT NULL,
    credits     INTEGER      NOT NULL CHECK (credits BETWEEN 1 AND 6),

    PRIMARY KEY (course_id)
);

CREATE TABLE enrollment (
    student_id  BIGINT  NOT NULL,
    course_id   CHAR(8) NOT NULL,
    grade       CHAR(2),
    enrolled_at DATE    NOT NULL DEFAULT CURRENT_DATE,

    PRIMARY KEY (student_id, course_id),           -- 복합 기본키
    FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id)  REFERENCES course(course_id)   ON DELETE RESTRICT
);
```

---

## 4. 제약조건 (Constraints)

### PRIMARY KEY

- 행을 유일하게 식별 (NULL 불허 + UNIQUE 자동 적용)
- 단일 컬럼 또는 복합 컬럼으로 지정 가능

```sql
-- 단일
PRIMARY KEY (student_id)

-- 복합
PRIMARY KEY (student_id, course_id)
```

### FOREIGN KEY

참조 무결성 보장. 참조된 행이 삭제될 때의 동작을 `ON DELETE`로 지정한다.

| 옵션 | 동작 |
|------|------|
| `RESTRICT` (기본값) | 참조되는 행이 있으면 삭제 거부 |
| `CASCADE` | 참조하는 행도 함께 삭제 |
| `SET NULL` | 외래키 컬럼을 NULL로 변경 |
| `SET DEFAULT` | 외래키 컬럼을 기본값으로 변경 |

```sql
FOREIGN KEY (student_id) REFERENCES student(student_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
```

### NOT NULL

해당 컬럼에 NULL 저장 불허.

```sql
name VARCHAR(50) NOT NULL
```

### UNIQUE

같은 값이 중복으로 들어올 수 없다. NULL은 여러 개 허용(DBMS마다 다를 수 있음).

```sql
email VARCHAR(255) UNIQUE
-- 또는 테이블 수준
UNIQUE (email)
```

### CHECK

지정한 조건을 위반하는 값은 거부된다.

```sql
age     INTEGER CHECK (age >= 0)
credits INTEGER CHECK (credits BETWEEN 1 AND 6)
status  VARCHAR(10) CHECK (status IN ('active', 'inactive', 'suspended'))
```

### DEFAULT

값이 명시되지 않을 때 사용할 기본값.

```sql
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
is_active  BOOLEAN   DEFAULT TRUE
```

---

## 5. ALTER TABLE

기존 테이블의 구조를 변경한다.

```sql
-- 컬럼 추가
ALTER TABLE student ADD COLUMN phone VARCHAR(20);

-- 컬럼 삭제
ALTER TABLE student DROP COLUMN phone;

-- 컬럼 타입 변경 (PostgreSQL 문법)
ALTER TABLE student ALTER COLUMN name TYPE VARCHAR(100);

-- 컬럼 이름 변경
ALTER TABLE student RENAME COLUMN major TO department;

-- NOT NULL 추가
ALTER TABLE student ALTER COLUMN phone SET NOT NULL;

-- NOT NULL 제거
ALTER TABLE student ALTER COLUMN phone DROP NOT NULL;

-- 제약조건 추가
ALTER TABLE student ADD CONSTRAINT chk_age CHECK (age >= 0);

-- 제약조건 삭제
ALTER TABLE student DROP CONSTRAINT chk_age;

-- 테이블 이름 변경
ALTER TABLE student RENAME TO students;
```

> **주의**: 프로덕션 DB에서 `ALTER TABLE`은 테이블 잠금(lock)이 발생할 수 있다. 대용량 테이블은 무중단 마이그레이션 전략(pt-online-schema-change 등)이 필요하다.

---

## 6. DROP TABLE vs TRUNCATE TABLE

### DROP TABLE

테이블 **구조까지** 완전히 삭제한다.

```sql
DROP TABLE enrollment;

-- 참조하는 테이블이 있어도 강제로 삭제 (PostgreSQL)
DROP TABLE student CASCADE;

-- 테이블이 없어도 에러 없음
DROP TABLE IF EXISTS temp_data;
```

### TRUNCATE TABLE

테이블 **구조는 유지**하고 모든 데이터만 빠르게 삭제한다.

```sql
TRUNCATE TABLE enrollment;

-- 연쇄 삭제
TRUNCATE TABLE student CASCADE;
```

### 비교

| | `DELETE` (DML) | `TRUNCATE` | `DROP` |
|---|---|---|---|
| 구조 유지 | ✅ | ✅ | ❌ |
| WHERE 조건 | ✅ | ❌ | ❌ |
| 트리거 발동 | ✅ | ❌ (DBMS별 다름) | ❌ |
| 롤백 가능 | ✅ | ✅ (트랜잭션 내) | ✅ (트랜잭션 내) |
| 속도 | 느림 | 빠름 | 빠름 |

---

## 7. IF NOT EXISTS / IF EXISTS 패턴

스크립트를 멱등(idempotent)하게 작성하는 패턴.

```sql
-- 이미 존재하면 에러 없이 스킵
CREATE TABLE IF NOT EXISTS student ( ... );

-- 없어도 에러 없이 스킵
DROP TABLE IF EXISTS temp_results;
```

---

## 8. 실습 과제

아래 요구사항을 SQL DDL로 작성해 보세요.

**시나리오**: 도서관 시스템

```
도서관은 다음 정보를 관리한다:
- 회원: 회원번호(PK), 이름(NOT NULL), 이메일(UNIQUE, NOT NULL), 가입일(DEFAULT 오늘)
- 도서: ISBN(PK, CHAR 13자리), 제목(NOT NULL), 저자(NOT NULL), 출판년도(1000~2100 사이)
- 대출: 대출번호(PK), 회원번호(FK), ISBN(FK), 대출일(NOT NULL), 반납기한(NOT NULL), 반납일(NULL 허용)
- 회원이 삭제되면 대출 기록도 함께 삭제되어야 한다
- 도서가 대출 중이면 도서를 삭제할 수 없어야 한다
```

<details>
<summary>정답 보기</summary>

```sql
CREATE TABLE member (
    member_id   BIGINT       NOT NULL,
    name        VARCHAR(50)  NOT NULL,
    email       VARCHAR(255) NOT NULL,
    joined_at   DATE         NOT NULL DEFAULT CURRENT_DATE,

    PRIMARY KEY (member_id),
    UNIQUE (email)
);

CREATE TABLE book (
    isbn        CHAR(13)     NOT NULL,
    title       VARCHAR(200) NOT NULL,
    author      VARCHAR(100) NOT NULL,
    pub_year    INTEGER      CHECK (pub_year BETWEEN 1000 AND 2100),

    PRIMARY KEY (isbn)
);

CREATE TABLE loan (
    loan_id     BIGINT   NOT NULL,
    member_id   BIGINT   NOT NULL,
    isbn        CHAR(13) NOT NULL,
    loan_date   DATE     NOT NULL,
    due_date    DATE     NOT NULL,
    return_date DATE,

    PRIMARY KEY (loan_id),
    FOREIGN KEY (member_id) REFERENCES member(member_id) ON DELETE CASCADE,
    FOREIGN KEY (isbn)      REFERENCES book(isbn)        ON DELETE RESTRICT
);
```

</details>

---

## 9. 핵심 요약

```
DDL 핵심
├── CREATE TABLE: 컬럼명 + 타입 + 제약조건 정의
├── 데이터 타입 선택
│   ├── 정수 → INTEGER / BIGINT
│   ├── 금액 → NUMERIC(p, s)  (FLOAT 사용 금지)
│   ├── 짧은 문자 → CHAR / VARCHAR, 긴 문자 → TEXT
│   └── 날짜 → DATE / TIMESTAMP / TIMESTAMPTZ
├── 제약조건
│   ├── PRIMARY KEY: 유일 식별, NULL 불허
│   ├── FOREIGN KEY: 참조 무결성 (ON DELETE 옵션 주의)
│   ├── NOT NULL: NULL 차단
│   ├── UNIQUE: 중복 차단 (NULL은 허용)
│   └── CHECK: 도메인 규칙 강제
├── ALTER TABLE: 컬럼 추가/삭제/변경, 제약조건 추가/삭제
└── DROP vs TRUNCATE: 구조까지 삭제 vs 데이터만 삭제
```

---

## 10. 다음 레슨 예고

**Day 3 — SQL 기초: DML**

- `INSERT INTO`, `UPDATE`, `DELETE`
- `SELECT` 기초: `WHERE`, `ORDER BY`, `LIMIT`, `DISTINCT`
- 비교 연산자와 논리 연산자 (`=`, `<>`, `LIKE`, `IN`, `BETWEEN`, `IS NULL`)

---

## 참고 자료

- *Database System Concepts* 7판 Ch.3 (Silberschatz) — SQL DDL 원전
- PostgreSQL 공식 문서 — [CREATE TABLE](https://www.postgresql.org/docs/current/sql-createtable.html)
- CMU 15-445 Lecture 2: SQL — [강의 슬라이드](https://15445.courses.cs.cmu.edu/)
- SQLBolt Lesson 13–16 — DDL 실습
