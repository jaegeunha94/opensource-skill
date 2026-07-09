# 컴퓨터 구조 10년차 이상 개발자 Interview 학습 진행 상황

## 리셋 기준

이 브랜치부터 컴퓨터 구조 학습은 기존 일반 CS 커리큘럼을 이어가지 않고 **10년차 이상 개발자 기술 면접 형식**으로 Day 1부터 다시 시작한다.

기존 레슨 파일은 참고 자료로 보존하지만, 완료 상태는 새 인터뷰 커리큘럼 기준으로 다시 기록한다.

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | 코드 성능과 하드웨어 사고 프레임워크 | [0011-code-performance-hardware-framework.html](lessons/0011-code-performance-hardware-framework.html) |
| 2 | 2026-07-03 | CPU 실행 모델 | [0012-cpu-execution-model.html](lessons/0012-cpu-execution-model.html) |
| 3 | 2026-07-04 | 메모리 계층 심화 | [0013-memory-hierarchy-deep-dive.html](lessons/0013-memory-hierarchy-deep-dive.html) |
| 4 | 2026-07-05 | 캐시와 데이터 배치 | [0014-cache-line-data-layout.html](lessons/0014-cache-line-data-layout.html) |
| 5 | 2026-07-06 | 파이프라인과 분기 예측 | [0015-pipeline-branch-prediction.html](lessons/0015-pipeline-branch-prediction.html) |
| 6 | 2026-07-07 | 멀티코어와 캐시 일관성 | [0016-multicore-cache-coherence-false-sharing.html](lessons/0016-multicore-cache-coherence-false-sharing.html) |
| 7 | 2026-07-08 | SIMD와 배치 처리 | [0017-simd-vectorization.html](lessons/0017-simd-vectorization.html) |
| 8 | 2026-07-09 | 프로파일링과 성능 측정 | [0018-profiling-performance-measurement.html](lessons/0018-profiling-performance-measurement.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 면접 질문 | 답변에서 보여줄 역량 |
|-----|-----------|----------------|----------------------|
| 9 | 컴퓨터 구조와 시스템 설계 | "하드웨어 특성이 DB, queue, cache 설계에 어떤 영향을 줍니까?" | storage hierarchy, index, serialization |
| 10 | 종합 모의 면접 | "성능이 느린 코드를 받고 하드웨어 관점에서 개선안을 제시해보세요." | 측정 기반 추론, 개선안 비교, 한계 설명 |

## 현재 학습 위치

**Day 8 완료** — 다음은 Day 9 컴퓨터 구조와 시스템 설계부터 진행한다.

## Interview 답변 체크리스트

- [x] 어려운 개념을 전제 개념부터 쉬운 한국어로 설명한다. (Day 1, Day 2, Day 3, Day 4, Day 5, Day 6, Day 7, Day 8)
- [x] 왜 면접에서 이 질문을 묻는지 설명한다. (Day 1, Day 2, Day 3, Day 4, Day 5, Day 6, Day 7, Day 8)
- [x] 실제 운영 상황과 연결한다. (Day 1, Day 2, Day 3, Day 4, Day 5, Day 6, Day 7, Day 8)
- [x] 답변 순서를 단계적으로 제시한다. (Day 1, Day 2, Day 3, Day 4, Day 5, Day 6, Day 7, Day 8)
- [x] trade-off를 최소 2개 이상 비교한다. (Day 1, Day 2, Day 3, Day 4, Day 5, Day 6, Day 7, Day 8)
- [x] 흔한 오해와 약한 답변을 구분한다. (Day 1, Day 2, Day 3, Day 4, Day 5, Day 6, Day 7, Day 8)
- [x] follow-up 질문까지 대비한다. (Day 1, Day 2, Day 3, Day 4, Day 5, Day 6, Day 7, Day 8)

## 습득한 핵심 개념

- [x] Big-O와 실제 실행 시간의 차이 (상수 항, 하드웨어 비용) (Day 1)
- [x] 메모리 계층(register/L1/L2/L3/RAM)과 지연 시간 자릿수 (Day 1)
- [x] 시간적/공간적 지역성, cache line, prefetching (Day 1)
- [x] pointer chasing과 cache miss (Day 1)
- [x] CPU 실행 모델, register, ALU, load/store (Day 2)
- [x] fetch-decode-execute 사이클, register pressure/spilling, volatile·atomic과 실행 모델의 연결 (Day 2)
- [x] latency vs bandwidth 구분, memory wall, memory-level parallelism(MLP) (Day 3)
- [x] 메모리 대역폭 공유로 인한 멀티코어 확장 한계, roofline(compute-bound vs memory-bound) 사고방식 (Day 3)
- [x] cache line 단위 동작과 크기 트레이드오프, array-of-structs vs struct-of-arrays (Day 4)
- [x] pointer chasing이 느린 근본 원인을 메모리 배치(흩어짐) 관점으로 재해석 (Day 4)
- [x] 파이프라이닝, hazard(structural/data/control), 분기 예측과 투기적 실행 (Day 5)
- [x] misprediction penalty, pipeline flush, branchless 코드의 trade-off (Day 5)
- [x] cache coherence(MESI), 캐시 라인 단위 무효화, false sharing과 data race의 구분 (Day 6)
- [x] padding/alignment를 통한 false sharing 해결과 메모리 비용 trade-off (Day 6)
- [x] SIMD와 벡터화, ILP/SIMD/멀티코어의 구분, 자동 벡터화 조건 (Day 7)
- [x] SIMD 이득과 cache locality의 연결, alignment, memory-bound 상황에서의 SIMD 한계 (Day 7)
- [x] sampling vs instrumentation profiling, 하드웨어 성능 카운터, IPC (Day 8)
- [x] IPC·cache-miss rate·branch-miss rate 조합으로 CPU-bound/memory-bound 구분, on-CPU vs off-CPU 분석 (Day 8)
- [ ] 컴퓨터 구조와 시스템 설계 연결 (예정 Day 9)
- [ ] 종합 모의 면접 (예정 Day 10)
