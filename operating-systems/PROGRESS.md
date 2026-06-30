# 운영체제 10년차 이상 개발자 Interview 학습 진행 상황

## 리셋 기준

이 브랜치부터 운영체제 학습은 기존 일반 CS 커리큘럼을 이어가지 않고 **10년차 이상 개발자 기술 면접 형식**으로 Day 1부터 다시 시작한다.

기존 레슨 파일은 참고 자료로 보존하지만, 완료 상태는 새 인터뷰 커리큘럼 기준으로 다시 기록한다.

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|

아직 완료한 인터뷰 레슨이 없다.

## 다음 예정 학습

| Day | 예정 주제 | 핵심 면접 질문 | 답변에서 보여줄 역량 |
|-----|-----------|----------------|----------------------|
| 1 | OS 관점 성능 진단 프레임워크 | "CPU 사용률은 낮은데 API 응답이 느립니다. OS 관점에서 무엇을 보겠습니까?" | load average, I/O wait, thread state, context switch 해석 |
| 2 | 프로세스와 스레드 | "프로세스와 스레드 차이를 실무 설계 기준으로 설명해보세요." | 주소 공간, 자원 공유, 격리, crash 영향 범위 |
| 3 | Context Switch와 스케줄링 | "스레드를 늘렸는데 성능이 떨어지는 이유는 무엇일 수 있습니까?" | context switch 비용, CPU-bound/I/O-bound 구분 |
| 4 | 동시성 제어 | "race condition을 어떻게 발견하고 예방합니까?" | lock, atomic, critical section, 테스트와 관측 |
| 5 | Deadlock과 Lock Contention | "운영 중 deadlock 또는 lock contention이 의심되면 어떻게 대응합니까?" | dump 분석, lock ordering, timeout, retry |
| 6 | 가상 메모리와 Page Fault | "메모리가 충분해 보여도 성능이 느릴 수 있는 이유를 설명해보세요." | paging, TLB, swap, major/minor fault |
| 7 | 파일 시스템과 I/O | "로그 쓰기가 전체 서비스 latency를 올릴 수 있는 이유는 무엇입니까?" | buffer, fsync, page cache, blocking I/O |
| 8 | 비동기 I/O와 이벤트 루프 | "thread-per-request와 event-driven 방식을 어떻게 선택합니까?" | latency, throughput, backpressure, 디버깅 trade-off |
| 9 | 컨테이너와 OS 격리 | "컨테이너는 VM과 무엇이 다르고, 운영상 어떤 문제가 생길 수 있습니까?" | namespace, cgroup, resource limit, noisy neighbor |
| 10 | 종합 모의 면접 | "운영체제 지표를 바탕으로 성능 저하 RCA를 수행해보세요." | 지표 기반 추론, 해결안 비교, 재발 방지 |

## 현재 학습 위치

**Day 1 시작 전** — OS 관점 성능 진단 프레임워크부터 시작한다.

## Interview 답변 체크리스트

- [ ] 어려운 개념을 전제 개념부터 쉬운 한국어로 설명한다.
- [ ] 왜 면접에서 이 질문을 묻는지 설명한다.
- [ ] 실제 운영 상황과 연결한다.
- [ ] 답변 순서를 단계적으로 제시한다.
- [ ] trade-off를 최소 2개 이상 비교한다.
- [ ] 흔한 오해와 약한 답변을 구분한다.
- [ ] follow-up 질문까지 대비한다.
