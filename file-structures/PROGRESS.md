# 파일구조 10년차 이상 개발자 Interview 학습 진행 상황

## 리셋 기준

이 브랜치부터 파일구조 학습은 기존 일반 CS 커리큘럼을 이어가지 않고 **10년차 이상 개발자 기술 면접 형식**으로 Day 1부터 다시 시작한다.

기존 레슨 파일은 참고 자료로 보존하지만, 완료 상태는 새 인터뷰 커리큘럼 기준으로 다시 기록한다.

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 저장장치와 접근 패턴 프레임워크 | [interview-day01-storage-access-patterns.html](lessons/interview-day01-storage-access-patterns.html) |
| 2 | 2026-07-01 | 파일 조직 선택 (Sequential / Indexed / Hash) | [interview-day02-file-organization.html](lessons/interview-day02-file-organization.html) |
| 3 | 2026-07-02 | 인덱스 기본 구조 (Dense Index / Sparse Index) | [interview-day03-index-structures.html](lessons/interview-day03-index-structures.html) |
| 4 | 2026-07-03 | B-Tree와 B+Tree (Fanout, Height, Range Scan) | [interview-day04-btree-bplustree.html](lessons/interview-day04-btree-bplustree.html) |
| 5 | 2026-07-04 | 해싱 기반 파일 (Collision, Overflow, Rehashing, Range Query 한계) | [interview-day05-hash-files.html](lessons/interview-day05-hash-files.html) |
| 6 | 2026-07-05 | 클러스터링과 보조 인덱스 (Data Locality, Write Amplification, Secondary Lookup) | [interview-day06-clustered-secondary-index.html](lessons/interview-day06-clustered-secondary-index.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 면접 질문 | 답변에서 보여줄 역량 |
|-----|-----------|----------------|----------------------|
| 7 | 외부 정렬 | "메모리보다 큰 파일을 정렬해야 한다면 어떻게 설계하겠습니까?" | run generation, k-way merge, I/O pass |
| 8 | 파일 시스템 구조 | "inode와 FAT 방식은 어떤 trade-off가 있습니까?" | metadata, random access, recovery, fragmentation |
| 9 | 대용량 로그/이벤트 저장 | "append-only 파일 구조는 어떤 장점과 단점이 있습니까?" | sequential write, compaction, index, recovery |
| 10 | 종합 모의 면접 | "검색 요구사항을 받고 저장 구조와 인덱스를 설계해보세요." | 접근 패턴 분석, 구조 선택, 운영 비용 |

## 현재 학습 위치

**Day 6 완료** — 클러스터링과 보조 인덱스 (data locality, write amplification, bookmark lookup).
**다음: Day 7** — 외부 정렬.

## Interview 답변 체크리스트

- [x] 어려운 개념을 전제 개념부터 쉬운 한국어로 설명한다. *(Day 1~6 완료)*
- [x] 왜 면접에서 이 질문을 묻는지 설명한다. *(Day 1~6 완료)*
- [x] 실제 운영 상황과 연결한다. *(Day 1~6 완료)*
- [x] 답변 순서를 단계적으로 제시한다. *(Day 1~6 완료)*
- [x] trade-off를 최소 2개 이상 비교한다. *(Day 1~6 완료)*
- [x] 흔한 오해와 약한 답변을 구분한다. *(Day 1~6 완료)*
- [x] follow-up 질문까지 대비한다. *(Day 1~6 완료)*

## 습득한 핵심 개념

- [x] 저장 계층 (Storage Hierarchy) — RAM, SSD, HDD 비용 모델 (Day 1)
- [x] Block I/O — 디스크 최소 접근 단위, 왜 block인가 (Day 1)
- [x] Sequential vs Random Access — 비용 차이, HDD/SSD 각각 (Day 1)
- [x] Buffer Pool / Page Cache — hot data 캐싱 원리 (Day 1)
- [x] I/O 비용 모델 — 비교 횟수가 아닌 I/O 횟수 기준 성능 평가 (Day 1)
- [x] BST vs B+Tree — fanout 차이와 I/O 횟수 비교 (Day 1)
- [x] Sequential / Indexed / Hash 파일 조직 선택 기준 (Day 2)
- [x] Heap file, overflow area, 인덱스 유지 비용 (Day 2)
- [x] Hash file의 range query 한계 (Day 2)
- [x] Dense Index vs Sparse Index — 정렬 전제, 저장 공간, 갱신 비용 (Day 3)
- [x] Primary Index vs Secondary Index — 밀도 제약과 클러스터드 인덱스 연결 (Day 3)
- [x] B-Tree vs B+Tree — fanout, height, internal node 구조, leaf linkage (Day 4)
- [x] Hash File — collision, overflow chain, static vs dynamic(extendible/linear) hashing, range query 불가 이유 (Day 5)
- [x] Clustered vs Secondary Index — data locality, bookmark lookup, write amplification, covering index (Day 6)
- [ ] External Sort — run generation, k-way merge (예정 Day 7)
- [ ] inode vs FAT (예정 Day 8)
- [ ] Append-only 구조 — WAL, LSM-Tree (예정 Day 9)
- [ ] 종합 설계 모의 면접 (예정 Day 10)
