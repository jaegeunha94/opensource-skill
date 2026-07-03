# React / Next.js 시니어 인터뷰 — 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | React 렌더링 모델과 Next.js 실행 경계 답변 프레임워크 — 코드가 어디서 실행되는지 그리는 사고법 | [0001-react-rendering-model-execution-boundary-framework.html](lessons/0001-react-rendering-model-execution-boundary-framework.html) |
| 2 | 2026-07-03 | Reconciliation과 Virtual DOM — key, diffing 알고리즘, 리스트 렌더링 시 재사용/재생성 판단 | [0002-reconciliation-virtual-dom-key-diffing.html](lessons/0002-reconciliation-virtual-dom-key-diffing.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 3 | Component Boundary 설계 | Server/Client 컴포넌트 경계를 가르는 기준, composition pattern |
| 4 | Hooks 심화 | `useEffect`/`useMemo`/`useCallback`의 실무 함정, 의존성 배열 사고 |
| 5 | State Management 아키텍처 | 로컬 상태 vs 서버 상태 vs 전역 상태 구분과 도구 선택 |
| 6 | Data Fetching 패턴 | 서버 fetch vs 클라이언트 fetch, 워터폴 방지, request memoization |
| 7 | Suspense와 동시성 렌더링 | concurrent rendering, transition, 우선순위 스케줄링 |
| 8 | Error Boundary와 장애 격리 | 컴포넌트 트리 단위 장애 격리 설계 |
| 9 | Hydration 심화 | hydration mismatch의 원인, 디버깅, 예방 |
| 10 | SSR | 서버 렌더링 파이프라인, TTFB/TTI trade-off |

## 현재 학습 위치

**Day 2 완료** — 다음: Day 3 — Component Boundary 설계

## 습득한 핵심 개념

- [x] Render 단계와 Commit 단계의 분리, 각각의 역할 (Day 1)
- [x] 빌드 타임 / 요청 시점 서버 / hydration / hydration 이후 클라이언트의 4가지 실행 시점 구분 (Day 1)
- [x] 4단계 실행 경계 판단 프레임워크(서버 전용 자원 → 브라우저 전용 API → 실행 빈도 → 전달 비용) (Day 1)
- [x] Server Component와 Client Component가 클라이언트로 전달하는 것의 차이 (결과 vs 코드) (Day 1)
- [x] SSR과 hydration의 순서 구분 (Day 1)
- [x] Server Component에서 `useState`를 쓸 수 없는 이유 (Day 1)
- [x] `"use client"`의 하위 트리 전이(propagation) 문제 (Day 1)
- [x] key 기반 reconciliation과 배열 인덱스를 key로 쓰면 안 되는 이유 (Day 2)
- [x] React diffing이 O(n)에 가까운 이유(타입 비교 + key 비교 휴리스틱) (Day 2)
- [x] key를 이용한 컴포넌트 강제 리셋 패턴 (Day 2)
- [x] Fiber 아키텍처와 current/work-in-progress 이중 트리 개념 (Day 2)
- [ ] Server/Client Component composition pattern (예정 Day 3)
- [ ] `useEffect` 의존성 배열의 실무 함정 (예정 Day 4)
- [ ] 서버 상태 vs 클라이언트 상태 구분 기준 (예정 Day 5)
