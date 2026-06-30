# 컴퓨터 구조 10년차 이상 개발자 Interview 학습 진행 상황

## 리셋 기준

이 브랜치부터 컴퓨터 구조 학습은 기존 일반 CS 커리큘럼을 이어가지 않고 **10년차 이상 개발자 기술 면접 형식**으로 Day 1부터 다시 시작한다.

기존 레슨 파일은 참고 자료로 보존하지만, 완료 상태는 새 인터뷰 커리큘럼 기준으로 다시 기록한다.

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|

아직 완료한 인터뷰 레슨이 없다.

## 다음 예정 학습

| Day | 예정 주제 | 핵심 면접 질문 | 답변에서 보여줄 역량 |
|-----|-----------|----------------|----------------------|
| 1 | 코드 성능과 하드웨어 사고 프레임워크 | "같은 Big-O인데 한 구현이 훨씬 빠른 이유를 어떻게 설명하겠습니까?" | locality, cache, branch, allocation, 측정 기준 |
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

**Day 1 시작 전** — 코드 성능과 하드웨어 사고 프레임워크부터 시작한다.

## Interview 답변 체크리스트

- [ ] 어려운 개념을 전제 개념부터 쉬운 한국어로 설명한다.
- [ ] 왜 면접에서 이 질문을 묻는지 설명한다.
- [ ] 실제 운영 상황과 연결한다.
- [ ] 답변 순서를 단계적으로 제시한다.
- [ ] trade-off를 최소 2개 이상 비교한다.
- [ ] 흔한 오해와 약한 답변을 구분한다.
- [ ] follow-up 질문까지 대비한다.
