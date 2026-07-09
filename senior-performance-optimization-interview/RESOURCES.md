# 성능 최적화 학습 자료

## 1차 자료 (필수 / 기준서)

### 책

| 제목 | 저자 | 이유 |
|------|------|------|
| *High Performance MySQL* (4th ed.) | Schwartz, Zaitsev, Tkachenko | DB 쿼리 튜닝, 인덱스, EXPLAIN 해석의 현장 기준서 |
| *Systems Performance* (2nd ed.) | Brendan Gregg | CPU/IO/메모리/네트워크 병목 분석의 표준. USE Method 원전 |
| *Designing Data-Intensive Applications* | Martin Kleppmann | DB 선택, 일관성 trade-off, 복제·샤딩 의사결정 기준 |
| *Release It!* (2nd ed.) | Michael T. Nygard | Circuit breaker, timeout, bulkhead — 운영 안정성과 성능 |
| *Database Internals* | Alex Petrov | B-Tree, LSM-Tree, 저장 엔진 내부 구조 이해 |

### 공식 문서

- **PostgreSQL EXPLAIN docs** — https://www.postgresql.org/docs/current/using-explain.html
- **MySQL EXPLAIN format** — https://dev.mysql.com/doc/refman/8.0/en/explain-output.html
- **Prometheus 데이터 모델** — https://prometheus.io/docs/concepts/data_model/
- **Grafana 대시보드 가이드** — https://grafana.com/docs/grafana/latest/dashboards/
- **Python cProfile 문서** — https://docs.python.org/3/library/profile.html
- **Linux perf 튜토리얼** — https://perf.wiki.kernel.org/index.php/Tutorial
- **HikariCP — About Pool Sizing** — https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing
- **PgBouncer 공식 문서** — https://www.pgbouncer.org/

## DB Connection Pool / 자원 sizing 심화

- **PostgreSQL — Number Of Database Connections** (wiki) — https://wiki.postgresql.org/wiki/Number_Of_Database_Connections
- **HikariCP Dead Lock 관련 이슈 토론** — pool-level self-deadlock 사례 이해용, HikariCP GitHub Issues 검색

## 2차 자료 (심화 / 케이스 스터디)

### 블로그 & 엔지니어링 블로그

- **Uber Engineering Blog** — DB 샤딩, API latency 개선 사례 다수
- **Netflix Tech Blog** — Hystrix, circuit breaker, 부하 테스트 사례
- **Discord Engineering Blog** — Elixir/Python 성능 이슈 RCA 사례
- **Cloudflare Blog** — 네트워크 레이어 성능 최적화 원리

### 영상 강의

- **Brendan Gregg — Linux Performance Tools** (YouTube, Netflix 공개 강연)
- **GOTO Conferences — Performance Engineering** (YouTube)

## 부하 테스트 도구

| 도구 | 용도 |
|------|------|
| **k6** | 스크립트 기반 부하 테스트, Grafana 연동 |
| **Locust** | Python 기반, 동작 시나리오 작성이 자유로움 |
| **Apache JMeter** | GUI 기반, 기업 환경에서 많이 사용 |
| **wrk / hey** | HTTP 벤치마크 빠른 시작용 |

## Profiling 도구

| 도구 | 용도 |
|------|------|
| **py-spy** | Python 실행 중 CPU 프로파일링 (production safe) |
| **cProfile + snakeviz** | 함수 단위 CPU 소요 시간 |
| **memory_profiler** | Python 메모리 증가 추적 |
| **perf (Linux)** | 커널 레벨 CPU 프로파일링 |
| **async-profiler (Java/JVM)** | JVM 계열 CPU/힙 프로파일링 |

## DB 분석 도구

| 도구 | 용도 |
|------|------|
| **EXPLAIN / EXPLAIN ANALYZE** | 쿼리 실행 계획 분석 |
| **pg_stat_statements (PostgreSQL)** | 느린 쿼리 통계 수집 |
| **slow query log (MySQL)** | 기준 시간 초과 쿼리 자동 기록 |
| **pgBadger** | PostgreSQL 로그 분석 리포트 |
| **DataGrip / DBeaver** | 쿼리 실행 계획 시각화 |

## 핵심 개념 사전 이해용

| 개념 | 추천 자료 |
|------|-----------|
| USE Method | Brendan Gregg 블로그 — http://www.brendangregg.com/usemethod.html |
| RED Method | Tom Wilkie (Grafana) 블로그 |
| Amdahl's Law | Wikipedia 로도 충분, 병렬화 한계 이해용 |
| Little's Law | 큐잉 이론 기초, 동시성 계산에 직접 적용 |
| p99 latency 왜곡 | Gil Tene — "How NOT to Measure Latency" (YouTube) |
