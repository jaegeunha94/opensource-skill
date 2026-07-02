# 컴퓨터 구조 10년차 이상 개발자 Interview 학습 진행 상황

## 리셋 기준

이 브랜치부터 컴퓨터 구조 학습은 기존 일반 CS 커리큘럼을 이어가지 않고 **10년차 이상 개발자 기술 면접 형식**으로 Day 1부터 다시 시작한다.

기존 레슨 파일은 참고 자료로 보존하지만, 완료 상태는 새 인터뷰 커리큘럼 기준으로 다시 기록한다.

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | 코드 성능과 하드웨어 사고 프레임워크 | [0011-code-performance-hardware-framework.html](lessons/0011-code-performance-hardware-framework.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 면접 질문 | 답변에서 보여줄 역량 |
|-----|-----------|----------------|----------------------|
| 2 | CPU 실행 모델 | "CPU가 코드를 실행한다는 말을 개발자 관점에서 설명해보세요." | instruction, register, ALU, load/store |
| 3 | 메모리 계층 | "메모리 접근이 성능 병목이 되는 이유는 무엇입니까?" | cache/RAM/disk latency, locality, bandwidth |
| 4 | 캐시와 데이터 배치 | "배열이 연결 리스트보다 빠를 수 있는 하드웨어적 이유는 무엇입니까?" | cache line, spatial locality, pointer chasing |
| 5 | 파이프라인과 분기 예측 | "if 분기가 많은 코드가 느려질 수 있는 이유를 설명해보세요." | pipeline flush, branch prediction, data dependency |
| 6 | 멀티코어와 캐시 일관성 | "멀티스레드 코드에서 false sharing이 왜 문제가 됩니까?" | cache coherence, cache line invalidation |
| 7 | SIMD와 배치 처리 | "대량 데이터를 빠르게 처리할 때 CPU 특성을 어떻게 활용합니까?" | vectorization, batch, alignment, trade-off |
| 8 | 프로파일링과 성능 측정 | "CPU-bound와 memory-bound를 어떻게 구분합니까?" | profiling, perf 지표, flame graph, cache miss |
| 9 | 컴퓨터 구조와 시스템 설계 | "하드웨어 특성이 DB, queue, cache 설계에 어떤 영향을 줍니까?" | storage hierarchy, index, serialization |
| 10 | 종합 모의 면접 | "성능이 느린 코드를 받고 하드웨어 관점에서 개선안을 제시해보세요." | 측정 기반 추론, 개선안 비교, 한계 설명 |

## 현재 학습 위치

**Day 1 완료** — 다음은 Day 2 CPU 실행 모델부터 진행한다.

## Interview 답변 체크리스트

- [x] 어려운 개념을 전제 개념부터 쉬운 한국어로 설명한다. (Day 1)
- [x] 왜 면접에서 이 질문을 묻는지 설명한다. (Day 1)
- [x] 실제 운영 상황과 연결한다. (Day 1)
- [x] 답변 순서를 단계적으로 제시한다. (Day 1)
- [x] trade-off를 최소 2개 이상 비교한다. (Day 1)
- [x] 흔한 오해와 약한 답변을 구분한다. (Day 1)
- [x] follow-up 질문까지 대비한다. (Day 1)

## 습득한 핵심 개념

- [x] Big-O와 실제 실행 시간의 차이 (상수 항, 하드웨어 비용) (Day 1)
- [x] 메모리 계층(register/L1/L2/L3/RAM)과 지연 시간 자릿수 (Day 1)
- [x] 시간적/공간적 지역성, cache line, prefetching (Day 1)
- [x] pointer chasing과 cache miss (Day 1)
- [ ] CPU 실행 모델, register, ALU, load/store (예정 Day 2)
- [ ] 메모리 계층 심화와 bandwidth (예정 Day 3)
- [ ] cache line과 데이터 배치 심화 (예정 Day 4)
- [ ] pipeline과 branch prediction (예정 Day 5)
- [ ] multicore와 cache coherence, false sharing (예정 Day 6)
- [ ] SIMD와 벡터화 (예정 Day 7)
- [ ] profiling과 성능 측정 (예정 Day 8)
- [ ] 컴퓨터 구조와 시스템 설계 연결 (예정 Day 9)
- [ ] 종합 모의 면접 (예정 Day 10)
