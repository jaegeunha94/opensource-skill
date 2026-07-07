# 운영체제 10년차 이상 개발자 Interview 학습 진행 상황

## 리셋 기준

이 브랜치부터 운영체제 학습은 기존 일반 CS 커리큘럼을 이어가지 않고 **10년차 이상 개발자 기술 면접 형식**으로 Day 1부터 다시 시작한다.

기존 레슨 파일은 참고 자료로 보존하지만, 완료 상태는 새 인터뷰 커리큘럼 기준으로 다시 기록한다.

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | OS 관점 성능 진단 프레임워크 | [0011-day1-os-performance-diagnosis-framework.html](lessons/0011-day1-os-performance-diagnosis-framework.html) |
| 2 | 2026-07-01 | 프로세스와 스레드 (실무 설계 기준) | [0012-day2-process-vs-thread-design.html](lessons/0012-day2-process-vs-thread-design.html) |
| 3 | 2026-07-02 | Context Switch와 스케줄링 | [0013-day3-context-switch-and-scheduling.html](lessons/0013-day3-context-switch-and-scheduling.html) |
| 4 | 2026-07-03 | 동시성 제어와 Race Condition | [0014-day4-race-condition-and-concurrency-control.html](lessons/0014-day4-race-condition-and-concurrency-control.html) |
| 5 | 2026-07-04 | Deadlock과 Lock Contention | [0015-day5-deadlock-and-lock-contention.html](lessons/0015-day5-deadlock-and-lock-contention.html) |
| 6 | 2026-07-05 | 가상 메모리와 Page Fault | [0016-day6-virtual-memory-and-page-fault.html](lessons/0016-day6-virtual-memory-and-page-fault.html) |
| 7 | 2026-07-06 | 파일 시스템과 I/O | [0017-day7-file-io-and-buffer-cache.html](lessons/0017-day7-file-io-and-buffer-cache.html) |
| 8 | 2026-07-07 | 비동기 I/O와 이벤트 루프 | [0018-day8-async-io-and-event-loop.html](lessons/0018-day8-async-io-and-event-loop.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 면접 질문 | 답변에서 보여줄 역량 |
|-----|-----------|----------------|----------------------|
| 9 | 컨테이너와 OS 격리 | "컨테이너는 VM과 무엇이 다르고, 운영상 어떤 문제가 생길 수 있습니까?" | namespace, cgroup, resource limit, noisy neighbor |
| 10 | 종합 모의 면접 | "운영체제 지표를 바탕으로 성능 저하 RCA를 수행해보세요." | 지표 기반 추론, 해결안 비교, 재발 방지 |

## 현재 학습 위치

**Day 8 완료** (2026-07-07) — 비동기 I/O와 이벤트 루프
**다음**: Day 9 — 컨테이너와 OS 격리

## Interview 답변 체크리스트

- [x] 어려운 개념을 전제 개념부터 쉬운 한국어로 설명한다.
- [x] 왜 면접에서 이 질문을 묻는지 설명한다.
- [x] 실제 운영 상황과 연결한다.
- [x] 답변 순서를 단계적으로 제시한다.
- [x] trade-off를 최소 2개 이상 비교한다.
- [x] 흔한 오해와 약한 답변을 구분한다.
- [x] follow-up 질문까지 대비한다.

## 습득한 핵심 개념

- [x] load average 해석 (CPU 수 대비 부하 판단) — Day 1
- [x] 스레드 상태 (R/S/D/Z) — Day 1
- [x] I/O wait (iowait, D 상태 스레드) — Day 1
- [x] vmstat 지표 읽기 (r, b, wa, cs, si, so) — Day 1
- [x] voluntary vs involuntary context switch 해석 — Day 1
- [x] swap on/off trade-off — Day 1
- [x] 프로세스 vs 스레드 주소 공간 차이, crash 격리 범위 — Day 2
- [x] context switch 비용 측정과 스케줄러/캐시/Little's Law 기반 용량 산정 — Day 3
- [x] race condition 탐지와 예방 (critical section, mutex/atomic/CAS, 비관적/낙관적 락, 분산 락) — Day 4
- [x] deadlock RCA와 대응 (Coffman conditions, thread dump 분석, lock ordering, timeout) — Day 5
- [x] virtual memory, TLB, major/minor page fault, swap/thrashing 진단 (available memory, vmstat, cgroup 메모리 한도) — Day 6
- [x] page cache, dirty page, write-back, fsync/fdatasync, 저널링 오버헤드 — Day 7
- [x] blocking I/O, non-blocking I/O, select/poll/epoll, 이벤트 루프 블로킹, io_uring, cgroup CPU throttling과 이벤트 루프 — Day 8
- [ ] namespace, cgroup, noisy neighbor (예정 Day 9)
