# 데이터베이스 Resources

## Knowledge

- [Book: _Database System Concepts_ (7th ed.) — Silberschatz, Korth, Sudarshan](https://db-book.com/)
  DB 교과서의 표준. 관계형 모델, SQL, 정규화, 트랜잭션, 인덱스, 쿼리 최적화 전 범위 커버. 공식 사이트에서 슬라이드·연습문제 무료 제공.

- [Book: _Learning SQL_ (3rd ed.) — Alan Beaulieu (O'Reilly)](https://www.oreilly.com/library/view/learning-sql-3rd/9781492057604/)
  실습 중심 SQL 입문서. MySQL/MariaDB 예제 기반이지만 표준 SQL에 충실. 서브쿼리·조인·집합 연산을 단계별로 설명.

- [Course: CMU 15-445/645 Intro to Database Systems — Andy Pavlo](https://15445.courses.cs.cmu.edu/)
  카네기멜론 공개 강의. 강의 슬라이드·영상·숙제 무료 공개. 인덱스 구조·쿼리 실행 계획·동시성 제어 등 내부 구현까지 다룸.

- [Documentation: PostgreSQL Official Docs](https://www.postgresql.org/docs/current/)
  SQL 표준 준수도가 높고 설명이 정확. 특정 기능의 정확한 동작을 확인할 때 기준 문서로 사용.

- [Tutorial: SQLZoo](https://sqlzoo.net/)
  브라우저에서 바로 실행되는 인터랙티브 SQL 연습. 기초 SELECT부터 윈도우 함수까지 단계별 문제 제공.

- [Tutorial: SQLBolt](https://sqlbolt.com/)
  짧고 명확한 레슨 + 즉시 실행 가능한 연습문제. SQL 문법을 처음 접할 때 워밍업으로 적합.

- [Article: "Use The Index, Luke" — Markus Winand](https://use-the-index-luke.com/)
  인덱스 동작 원리와 쿼리 최적화를 B-Tree 구조 기반으로 설명. 무료 웹 버전 제공. 인덱스 챕터 학습 시 반드시 참조.

## Wisdom (Communities)

- [r/PostgreSQL](https://reddit.com/r/PostgreSQL)
  PostgreSQL 사용자 커뮤니티. 쿼리 성능 문제·설계 질문에 양질의 답변이 자주 올라옴.

- [Stack Overflow — [sql] tag](https://stackoverflow.com/questions/tagged/sql)
  특정 SQL 문법 오류나 동작 이해 질문에 빠른 참고용. 답변 날짜와 DB 종류를 반드시 확인.

- [DBA Stack Exchange](https://dba.stackexchange.com/)
  데이터베이스 관리·설계·성능 관련 전문 Q&A. Stack Overflow보다 DB 심화 주제 답변 품질이 높음.

## Gaps

- 한국어 기반 PostgreSQL 실무 튜토리얼이 부족함 — 영문 공식 문서와 SQLZoo로 보완
- NoSQL(MongoDB, Redis) 공식 문서는 해당 Day에 별도 추가 예정
