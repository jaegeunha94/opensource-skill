# Resources — 컴퓨터 구조 학습 자료

## 교재 (1순위)

| 자료 | 설명 |
|------|------|
| **Computer Systems: A Programmer's Perspective (CS:APP)** — Bryant & O'Hallaron | 프로그래머 관점의 컴퓨터 구조 최고 교재. 캐시, 메모리 계층, 병렬성을 코드와 함께 설명. 3판 기준. |
| **Computer Organization and Design (RISC-V Edition)** — Patterson & Hennessy | CPU 파이프라인, 메모리 계층, 캐시 구조를 체계적으로 설명. 학술 기준. |
| **What Every Programmer Should Know About Memory** — Ulrich Drepper (2007, lwn.net) | 캐시, TLB, NUMA, prefetching을 실측 데이터와 함께 설명하는 최고의 실무 참고자료. 무료. |

## 성능 분석 (실무 1순위)

| 자료 | 설명 |
|------|------|
| **Agner Fog's Optimization Manuals** (agner.org/optimize) | CPU microarchitecture, instruction latency, throughput 실측 자료. x86 최적화 기준서. |
| **Intel 64 and IA-32 Architectures Optimization Reference Manual** | Intel CPU 최적화 공식 문서. 캐시 구조, prefetching, SIMD 지침 포함. |
| **Brendan Gregg — Systems Performance (2nd ed.)** | 프로덕션 성능 분석의 바이블. perf, flamegraph, USE method 포함. |
| **Brendan Gregg — perf Examples** (brendangregg.com/perf) | perf 명령 실전 예제 모음. hardware counter 활용법 포함. |

## 강의

| 자료 | 설명 |
|------|------|
| **CMU 15-213: Introduction to Computer Systems** | CS:APP 교재와 함께하는 Carnegie Mellon 강의. YouTube에서 무료 시청 가능. |
| **MIT 6.004: Computation Structures** (MIT OpenCourseWare) | 하드웨어 추상화 계층을 논리적으로 쌓아가는 구성. |

## 실무 블로그 / 논문

| 자료 | 설명 |
|------|------|
| **"Gallery of Processor Cache Effects"** — Igor Ostrovsky | 캐시 misalignment, false sharing, 캐시 라인 효과를 코드로 직접 확인. |
| **"Latency Numbers Every Programmer Should Know"** — Jeff Dean | 메모리 계층별 지연 시간 레퍼런스. 면접 답변에 숫자 근거 제공. |
| **"Why software developers should care about CPU caches"** — Martin Thompson | Java/JVM 관점 캐시 최적화 실무 사례. |
| **Linux `perf` Documentation** (perf.wiki.kernel.org) | hardware performance counter 활용 공식 문서. |

## 인터뷰 참고

| 자료 | 설명 |
|------|------|
| **"Systems Programming" interview questions** — various tech blogs | Google, Meta, Jane Street, Two Sigma 수준의 시스템 프로그래밍 면접 실제 질문 모음. |
| **Mechanical Sympathy blog** — Martin Thompson | 하드웨어를 이해한 소프트웨어 설계 철학. 면접에서 "왜 이런 설계를 했나"에 대한 깊이 있는 답변 근거. |
