# 파일구조 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-22 | 파일구조 개요 및 기본 개념 | [0001-introduction-to-file-structures.html](lessons/0001-introduction-to-file-structures.html) |
| 2 | 2026-06-22 | 순차 파일 구조 | [0002-sequential-files.html](lessons/0002-sequential-files.html) |
| 3 | 2026-06-23 | 인덱스 구조 기초 | [0003-index-structures.html](lessons/0003-index-structures.html) |
| 4 | 2026-06-24 | 직접 파일 / 해싱 | [0004-hashing.html](lessons/0004-hashing.html) |
| 5 | 2026-06-25 | B-트리 | [0005-b-trees.html](lessons/0005-b-trees.html) |
| 6 | 2026-06-26 | B+-트리 | [0006-b-plus-trees.html](lessons/0006-b-plus-trees.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 7 | 고급 인덱싱 | 다중 키 인덱스, 비트맵 인덱스, 인덱스 선택 기준 |
| 8 | 파일 시스템 | FAT, inode, 디렉터리 구조, 연속/연결/인덱스 할당 |
| 9 | 외부 정렬 | k-way 합병 정렬, 런 생성, 패스 수 계산 |
| 10 | 종합 정리 | 파일구조 선택 기준, 트레이드오프 비교, 실전 응용 |

## 현재 학습 위치

**Day 6 완료** — Day 7 (고급 인덱싱)을 시작할 준비가 됨.

## 습득한 핵심 개념

- [x] 필드·레코드·파일·데이터베이스 계층 구조 (Day 1)
- [x] 주기억장치 vs 보조기억장치 차이 및 블록 I/O 개념 (Day 1)
- [x] 기본 키 / 보조 키 구분 (Day 1)
- [x] 고정 길이 / 가변 길이 레코드 비교 (Day 1)
- [x] 세 가지 파일 조직 방법 개요 — 순차/인덱스/직접 파일 (Day 1)
- [x] 순차 파일 상세 구조 — 직렬 vs 순차, 삽입/삭제 비용, 오버플로우 영역 (Day 2)
- [x] 인덱스 구조 — 기본/보조 인덱스, 덴스/스파스, 클러스터링 (Day 3)
- [x] 해싱 — 해시 함수, 충돌 해결(체이닝/오픈 어드레싱), 버킷, 적재율 (Day 4)
- [x] B-트리 — 차수(Order), 노드 분할, 삽입/삭제(빌림·합병) (Day 5)
- [x] B+-트리 — 리프 연결 리스트, Copy Up vs Push Up, 범위 검색 최적화, DBMS 적용 (Day 6)
- [ ] 파일 시스템 구조 — FAT, inode (예정 Day 8)
- [ ] 외부 정렬 알고리즘 (예정 Day 9)
