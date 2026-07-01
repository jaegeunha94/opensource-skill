# 컴퓨터 구조 — 10년차 이상 개발자 Interview 대비 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 코드 성능과 하드웨어 사고 프레임워크 | [0001-hardware-performance-framework.html](lessons/0001-hardware-performance-framework.html) |
| 2 | 2026-07-01 | 메모리 계층 구조 — 숫자로 이해하는 비용 모델 | [0002-memory-hierarchy.html](lessons/0002-memory-hierarchy.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 3 | 캐시 메커니즘 — Cache Line과 Locality | cache line 크기, spatial locality, temporal locality, SoA vs AoS |
| 4 | CPU 파이프라인과 Branch Prediction | pipeline stage, data hazard, control hazard, branch predictor |
| 5 | 멀티코어 동시성과 False Sharing | cache coherence, MESI, false sharing, atomic, memory fence |
| 6 | SIMD와 벡터 연산 | SSE, AVX, auto-vectorization, data-level parallelism |
| 7 | 메모리 접근 패턴 최적화 | prefetching, loop tiling, cache-oblivious algorithm |
| 8 | 프로파일링과 하드웨어 카운터 | perf stat, perf record, flamegraph, cache-miss rate |
| 9 | 실전 성능 설계 패턴 | hot/cold path 분리, object pool, arena allocator, lock-free |
| 10 | 종합 면접 시뮬레이션 | 복합 질문, 설계 판단, trade-off 설명 |

## 현재 학습 위치

**Day 2 완료** — 다음: Day 3 — 캐시 메커니즘(Cache Line과 Locality).

## 습득한 핵심 개념

- [x] 하드웨어 사고 프레임워크 (Day 1)
- [x] "코드는 하드웨어 위에서 실행된다"는 시니어 관점 (Day 1)
- [x] 성능 병목 3계층 분류 (계산, 메모리, 동기화) (Day 1)
- [x] 인터뷰에서 컴퓨터 구조 질문의 평가 목적 이해 (Day 1)
- [x] 메모리 계층 비용 모델 — latency/bandwidth 구분, working set 계산, NUMA (Day 2)
- [ ] Cache Line과 Locality (Day 3 예정)
- [ ] Branch Prediction (Day 4 예정)
- [ ] False Sharing (Day 5 예정)
- [ ] SIMD (Day 6 예정)
- [ ] 프로파일링 방법론 (Day 8 예정)
