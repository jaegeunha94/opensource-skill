# 자료구조 10년차 이상 개발자 Interview 학습 진행 상황

## 리셋 기준

이 브랜치부터 자료구조 학습은 기존 일반 CS 커리큘럼을 이어가지 않고 **10년차 이상 개발자 기술 면접 형식**으로 Day 1부터 다시 시작한다.

기존 레슨 파일은 참고 자료로 보존하지만, 완료 상태는 새 인터뷰 커리큘럼 기준으로 다시 기록한다.

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 자료구조 선택 프레임워크 | [interview-day01-data-structure-selection-framework.html](lessons/interview-day01-data-structure-selection-framework.html) |
| 2 | 2026-07-01 | 배열과 연결 리스트 | [interview-day02-arrays-and-linked-lists.html](lessons/interview-day02-arrays-and-linked-lists.html) |
| 3 | 2026-07-02 | 스택과 큐 | [interview-day03-stack-and-queue.html](lessons/interview-day03-stack-and-queue.html) |
| 4 | 2026-07-03 | 해시 테이블 | [interview-day04-hash-tables.html](lessons/interview-day04-hash-tables.html) |
| 5 | 2026-07-04 | 트리와 균형 트리 | [interview-day05-trees-and-balanced-trees.html](lessons/interview-day05-trees-and-balanced-trees.html) |
| 6 | 2026-07-05 | 힙과 우선순위 큐 | [interview-day06-heap-and-priority-queue.html](lessons/interview-day06-heap-and-priority-queue.html) |
| 7 | 2026-07-06 | 트라이와 문자열 검색 | [interview-day07-trie-and-string-search.html](lessons/interview-day07-trie-and-string-search.html) |
| 8 | 2026-07-07 | 그래프 표현과 탐색 | [interview-day08-graph-representation-and-traversal.html](lessons/interview-day08-graph-representation-and-traversal.html) |
| 9 | 2026-07-08 | 실무 자료구조 설계 (캐시·Rate Limiter·랭킹) | [interview-day09-cache-rate-limiter-ranking-design.html](lessons/interview-day09-cache-rate-limiter-ranking-design.html) |
| 10 | 2026-07-09 | 종합 모의 면접 (요구사항 변화에 따른 자료구조 재검토) | [interview-day10-mock-interview-requirement-change.html](lessons/interview-day10-mock-interview-requirement-change.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 면접 질문 | 답변에서 보여줄 역량 |
|-----|-----------|----------------|----------------------|

계획된 10일 커리큘럼을 모두 완료했다. 추가 심화 주제(예: 동시성 안전 자료구조, 영속(persistent) 자료구조, 분산 자료구조 심화)가 필요하면 다음 세션에서 Day 11로 확장한다.

## 현재 학습 위치

**Day 10 완료** — 자료구조 10년차 이상 개발자 Interview 커리큘럼(Day 1~10) 완료. 다음 세션에서 심화 주제로 확장 가능.

## Interview 답변 체크리스트

- [x] 어려운 개념을 전제 개념부터 쉬운 한국어로 설명한다.
- [x] 왜 면접에서 이 질문을 묻는지 설명한다.
- [x] 실제 운영 상황과 연결한다.
- [x] 답변 순서를 단계적으로 제시한다.
- [x] trade-off를 최소 2개 이상 비교한다.
- [x] 흔한 오해와 약한 답변을 구분한다.
- [x] follow-up 질문까지 대비한다.

## 습득한 핵심 개념

- [x] 자료구조 선택 4축 프레임워크 (연산 패턴, 입력 규모, 메모리/locality, 운영 비용) — Day 1
- [x] Big-O vs 실무 성능 차이 (상수 인자, 최악 케이스, amortized cost, locality) — Day 1
- [x] 메모리 locality와 CPU 캐시 효율 — Day 1
- [x] amortized O(1) vs worst-case O(1) 구분 — Day 1
- [x] 배열 vs 연결 리스트 실무 성능 차이 (locality, pointer chasing, resize spike, 포인터 오버헤드) — Day 2
- [x] 스택/큐 bounded/unbounded, backpressure, 원형 큐 경계 조건, call stack과 재귀 깊이 — Day 3
- [x] 해시 테이블 충돌, load factor, resize, 해시 편향과 해시 DoS — Day 4
- [x] BST 편향(degenerate tree), 회전(rotation), AVL vs Red-Black trade-off, in-memory tree vs 디스크 B-Tree — Day 5
- [x] 힙의 배열 표현과 sift-up/down, decrease-key 한계와 지연 삭제/인덱스 힙, top-k/k-way merge 활용 — Day 6
- [x] 트라이 구조와 prefix search, 알파벳 크기별 자식 표현, radix tree/DAWG 압축 — Day 7
- [x] 인접 행렬 vs 인접 리스트, sparse/dense graph, BFS/DFS 복잡도 차이, 재귀 DFS 콜스택 오버플로우 위험 — Day 8
- [x] LRU 캐시(해시 맵 + 이중 연결 리스트), sliding window/token bucket rate limiter, 스킵 리스트+해시 맵 기반 랭킹 조합 설계 — Day 9
- [x] 요구사항 변화에 따른 자료구조 재검토(유지 vs 교체 구분), 규모 변화가 자료구조 유효성을 무효화하는 원리, 라운드별 trade-off 재계산, 종합 follow-up 대응 — Day 10
