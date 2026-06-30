# Mission — 컴퓨터 구조 10년차 이상 개발자 Interview 대비

## 학습 목표

10년차 이상 시니어 개발자 인터뷰에서 컴퓨터 구조 관련 질문에 **하드웨어 기반 설계 판단력**으로 답할 수 있는 능력을 기른다.

단순 회로 암기나 교과서 개념 나열이 아니라, 다음 세 가지 역량을 인터뷰어에게 증명하는 것이 목표다:

1. **성능 병목 분석 능력** — "왜 이 코드가 느린가"를 CPU, 캐시, 메모리 계층 관점에서 설명할 수 있다
2. **메모리 계층 이해** — 레지스터부터 DRAM까지 계층별 비용을 숫자와 함께 설명하고, 실무 설계에 반영할 수 있다
3. **하드웨어 기반 설계 판단** — false sharing, cache line, branch misprediction, SIMD 같은 개념을 실제 코드/아키텍처 결정에 적용할 수 있다

## 전제 조건

- C, C++, Java, Python, Go 중 하나 이상의 실무 경험
- 운영체제 프로세스/스레드 기초 이해 (없어도 레슨 내에서 필요한 부분은 설명)
- 기본 자료구조 이해 (배열, 연결 리스트 차이 정도)

## 커버리지

| 핵심 주제 | 면접 연결 |
|-----------|-----------|
| CPU 실행 모델, 레지스터 | 인터프리터/JIT/AOT 설계 판단, instruction-level 성능 |
| 메모리 계층 구조 | 캐시 비용 모델, 데이터 구조 선택 |
| Cache Locality & Cache Line | 배열 vs 연결 리스트, SoA vs AoS |
| Branch Prediction | hot path 설계, if문 정렬 전략 |
| CPU Pipeline & Hazard | pipeline stall 원인과 해결 |
| Multicore & Cache Coherence | lock contention, false sharing |
| SIMD / Vectorization | 데이터 병렬화 설계 |
| Profiling & Hardware Counter | perf, flamegraph, cache-miss 측정 |

## 학습 기간 목표

- 총 10 Day 레슨으로 면접 준비 완성
- 각 레슨은 1~2시간 완독 기준
