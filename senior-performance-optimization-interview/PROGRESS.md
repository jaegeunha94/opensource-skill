# 성능 최적화 시니어 인터뷰 — 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 성능 병목 분석 프레임워크 — 측정 없이 최적화하지 않는다 | [0001-performance-bottleneck-analysis-framework.html](lessons/0001-performance-bottleneck-analysis-framework.html) |
| 2 | 2026-07-01 | DB 쿼리 튜닝 — EXPLAIN 읽기와 N+1 문제 | [0002-db-query-tuning-explain-n-plus-one.html](lessons/0002-db-query-tuning-explain-n-plus-one.html) |
| 3 | 2026-07-02 | 인덱스 최적화 — 언제 인덱스가 오히려 느려지나 | [0003-index-optimization-when-indexes-slow-you-down.html](lessons/0003-index-optimization-when-indexes-slow-you-down.html) |
| 4 | 2026-07-03 | 느린 API 분석 — latency 분해와 병목 특정 | [0004-slow-api-latency-breakdown-bottleneck-isolation.html](lessons/0004-slow-api-latency-breakdown-bottleneck-isolation.html) |
| 5 | 2026-07-04 | 캐시 전략 설계 — 히트율, 무효화, 일관성 trade-off | [0005-cache-strategy-hit-rate-invalidation-consistency.html](lessons/0005-cache-strategy-hit-rate-invalidation-consistency.html) |
| 6 | 2026-07-05 | 비동기 처리와 동시성 — async가 해결책인 경우와 함정 | [0006-async-concurrency-when-it-helps-and-traps.html](lessons/0006-async-concurrency-when-it-helps-and-traps.html) |
| 7 | 2026-07-06 | 부하 테스트 설계 — 현실적인 트래픽 시뮬레이션 | [0007-load-testing-realistic-traffic-simulation.html](lessons/0007-load-testing-realistic-traffic-simulation.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 8 | Profiling 실전 — CPU/메모리/I/O 해석 | py-spy, cProfile, flame graph, I/O wait |
| 9 | 성능 지표 해석 — p50/p95/p99, throughput, error rate | percentile latency, histogram, SLO |
| 10 | DB Connection Pool 튜닝 | pool exhaustion, deadlock, timeout 설정 |

## 현재 학습 위치

**Day 7 완료** — 다음: Day 8 — Profiling 실전 (CPU/메모리/I/O 해석)

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
- [x] Trace/Span과 Context Propagation (Day 4)
- [x] Head-based vs Tail-based Sampling (Day 4)
- [x] Fan-out과 Tail Latency Amplification (Day 4)
- [x] Processing Time vs Queueing Time 구분 (Day 4)
- [x] 외부 의존성 격리 — timeout budget, fallback, 비동기 처리 (Day 4)
- [x] 캐시 히트율과 캐시 적합/부적합 데이터 판단 기준 (Day 5)
- [x] Cache-Aside / Write-Through / Write-Behind trade-off (Day 5)
- [x] TTL 기반 vs 이벤트 기반 무효화, 캐시 키 버전 관리 (Day 5)
- [x] Cache Stampede와 완화 전략 (Jittered TTL, 분산 락, Early Recomputation) (Day 5)
- [x] 캐시 장애 격리와 최종 일관성(Eventual Consistency) trade-off (Day 5)
- [x] 동시성(Concurrency)과 병렬성(Parallelism)의 구분 (Day 6)
- [x] I/O bound vs CPU bound와 적합한 동시성 모델 선택 (Day 6)
- [x] 이벤트 루프 단일 스레드 모델과 Event Loop Blocking (Day 6)
- [x] GIL의 범위 — CPU 병렬성 제한, I/O 대기 동시 처리는 무관 (Day 6)
- [x] Thread Pool Executor를 통한 blocking 코드 격리 (Day 6)
- [x] 부하 패턴 분류 — Load/Stress/Spike/Soak Test의 목적 구분 (Day 7)
- [x] VU(가상 사용자)와 RPS(초당 요청 수)의 차이 (Day 7)
- [x] Ramp-up과 breaking point 탐색 (Day 7)
- [x] 현실적인 트래픽 재현 — think time, 엔드포인트 비율, 데이터 편향 (Day 7)
- [x] 테스트 환경과 운영 환경의 격차(Environment Parity) (Day 7)
- [x] 부하 테스트 결과에서 지표 기반 병목 판별 (Day 7)
- [ ] Profiling 도구와 flame graph 해석 (예정 Day 8)
