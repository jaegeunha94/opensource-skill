# 성능 최적화 시니어 인터뷰 — 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 성능 병목 분석 프레임워크 — 측정 없이 최적화하지 않는다 | [0001-performance-bottleneck-analysis-framework.html](lessons/0001-performance-bottleneck-analysis-framework.html) |
| 2 | 2026-07-01 | DB 쿼리 튜닝 — EXPLAIN 읽기와 N+1 문제 | [0002-db-query-tuning-explain-n-plus-one.html](lessons/0002-db-query-tuning-explain-n-plus-one.html) |
| 3 | 2026-07-02 | 인덱스 최적화 — 언제 인덱스가 오히려 느려지나 | [0003-index-optimization-when-indexes-slow-you-down.html](lessons/0003-index-optimization-when-indexes-slow-you-down.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 4 | 느린 API 분석 — latency 분해와 병목 특정 | latency breakdown, tracing, 외부 의존성 격리 |
| 5 | 캐시 전략 설계 — 히트율, 무효화, 일관성 trade-off | cache hit/miss, TTL, invalidation, cache stampede |
| 6 | 비동기 처리와 동시성 — async가 해결책인 경우와 함정 | async I/O, thread pool, GIL, event loop blocking |
| 7 | 부하 테스트 설계 — 현실적인 트래픽 시뮬레이션 | 부하 패턴, k6/Locust, ramp-up, 병목 판별 |
| 8 | Profiling 실전 — CPU/메모리/I/O 해석 | py-spy, cProfile, flame graph, I/O wait |
| 9 | 성능 지표 해석 — p50/p95/p99, throughput, error rate | percentile latency, histogram, SLO |
| 10 | DB Connection Pool 튜닝 | pool exhaustion, deadlock, timeout 설정 |

## 현재 학습 위치

**Day 3 완료** — 다음: Day 4 — 느린 API 분석 (latency 분해와 병목 특정)

## 습득한 핵심 개념

- [x] 성능 병목 분석 5단계 프레임워크 (Day 1)
- [x] USE Method — Utilization, Saturation, Errors (Day 1)
- [x] RED Method — Rate, Errors, Duration (Day 1)
- [x] Measure First 원칙 (Day 1)
- [x] 병목 유형 분류: CPU / DB I/O / 네트워크 / 동시성 / 메모리 (Day 1)
- [x] p99 latency의 함정 (Day 1)
- [x] Amdahl's Law — 병렬화 한계 (Day 1)
- [x] EXPLAIN vs EXPLAIN ANALYZE — 추정치와 실측치 (Day 2)
- [x] Seq Scan / Index Scan / Index Only Scan 구분 (Day 2)
- [x] 선택도(Selectivity)와 인덱스 사용 판단 (Day 2)
- [x] N+1 문제 패턴과 ORM 지연 로딩 (Day 2)
- [x] Eager Loading vs Batch Loading 트레이드오프 (Day 2)
- [x] B-Tree 인덱스 구조와 Composite Index (Day 3)
- [x] 왼쪽 우선 원칙(Leftmost Prefix Rule) (Day 3)
- [x] Covering Index와 Index Only Scan (Day 3)
- [x] 인덱스의 쓰기/저장 비용 트레이드오프 (Day 3)
- [x] 온라인 인덱스 생성(CONCURRENTLY)과 락 회피 (Day 3)
- [ ] latency breakdown과 분산 트레이싱 (예정 Day 4)
- [ ] 캐시 무효화 전략 (예정 Day 5)
- [ ] 부하 테스트 설계 원칙 (예정 Day 7)
