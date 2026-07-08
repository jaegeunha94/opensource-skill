# React / Next.js 시니어 인터뷰 — 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | React 렌더링 모델과 Next.js 실행 경계 답변 프레임워크 — 코드가 어디서 실행되는지 그리는 사고법 | [0001-react-rendering-model-execution-boundary-framework.html](lessons/0001-react-rendering-model-execution-boundary-framework.html) |
| 2 | 2026-07-03 | Reconciliation과 Virtual DOM — key, diffing 알고리즘, 리스트 렌더링 시 재사용/재생성 판단 | [0002-reconciliation-virtual-dom-key-diffing.html](lessons/0002-reconciliation-virtual-dom-key-diffing.html) |
| 3 | 2026-07-04 | Component Boundary 설계 — Server/Client 컴포넌트 경계, "use client" 전이 문제, composition pattern | [0003-component-boundary-server-client-composition.html](lessons/0003-component-boundary-server-client-composition.html) |
| 4 | 2026-07-05 | Hooks 심화 — `useEffect`/`useMemo`/`useCallback`의 실무 함정, 의존성 배열 사고, stale closure | [0004-hooks-deep-dive-dependency-array-pitfalls.html](lessons/0004-hooks-deep-dive-dependency-array-pitfalls.html) |
| 5 | 2026-07-06 | State Management 아키텍처 — 로컬 상태 vs 서버 상태 vs 전역 상태 vs URL 상태 구분과 도구 선택 | [0005-state-management-architecture-local-server-global.html](lessons/0005-state-management-architecture-local-server-global.html) |
| 6 | 2026-07-07 | Data Fetching 패턴 — 서버 fetch vs 클라이언트 fetch, 워터폴 방지, request memoization | [0006-data-fetching-patterns-waterfall-request-memoization.html](lessons/0006-data-fetching-patterns-waterfall-request-memoization.html) |
| 7 | 2026-07-08 | Suspense와 동시성 렌더링 — concurrent rendering, transition, 우선순위 스케줄링 | [0007-suspense-concurrent-rendering-transitions.html](lessons/0007-suspense-concurrent-rendering-transitions.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 8 | Error Boundary와 장애 격리 | 컴포넌트 트리 단위 장애 격리 설계 |
| 9 | Hydration 심화 | hydration mismatch의 원인, 디버깅, 예방 |
| 10 | SSR | 서버 렌더링 파이프라인, TTFB/TTI trade-off |

## 현재 학습 위치

**Day 7 완료** — 다음: Day 8 — Error Boundary와 장애 격리

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
- [x] "use client"가 모듈 그래프 경계를 표시하는 컴파일 타임 지시라는 정확한 모델 (Day 3)
- [x] Client Component가 Server Component를 import할 수 없는 이유 (Day 3)
- [x] children을 이용한 Server/Client composition pattern (Day 3)
- [x] Server Component → Client Component prop 직렬화 제약과 Server Action 예외 (Day 3)
- [x] useEffect를 "동기화 메커니즘"으로 이해하는 정신 모델 (Day 4)
- [x] 의존성 배열의 Object.is 얕은 비교와 객체/함수 재생성으로 인한 무한 루프 원인 (Day 4)
- [x] 무한 루프의 근본 해결책 — 의존성을 원시값으로 좁히는 설계 (Day 4)
- [x] stale closure의 원인과 함수형 업데이트/ref 미러링을 이용한 해결 (Day 4)
- [x] useMemo/useCallback이 정확성이 아닌 최적화 도구라는 경계 (Day 4)
- [x] 상태를 로컬 UI / 서버 / 전역 클라이언트 / URL / 파생 상태로 분류하는 프레임워크 (Day 5)
- [x] 서버 상태 고유의 문제(staleness, 중복 요청, 재검증, 캐시 무효화, 경쟁 상태) (Day 5)
- [x] 서버 상태를 Redux/Context로 관리할 때 생기는 구조적 누락 (Day 5)
- [x] Context API의 리렌더링 전파 원리와 관심사 분리 원칙 (Day 5)
- [x] URL 상태 판단 기준(북마크/공유/새로고침 재현성)과 파생 상태를 별도 저장하지 않는 원칙 (Day 5)
- [x] 서버 fetch vs 클라이언트 fetch 판단 기준 — "렌더링 이전에 필요가 확정되는가" (Day 6)
- [x] 진짜 의존 관계와 우연한(가짜) 의존 관계를 구분해 워터폴을 진단하는 방법 (Day 6)
- [x] 컴포넌트 트리 계층이 만드는 암묵적 워터폴과 preload 패턴 (Day 6)
- [x] Request Memoization의 동작 범위(단일 렌더링, URL/옵션 기반)와 `cache()`의 필요성 (Day 6)
- [x] Request Memoization과 Data Cache의 생존 범위·목적 차이 (Day 6)
- [x] Suspense가 "아직 준비 안 된 자식의 처리를 조상에게 위임하는" 메커니즘이라는 정확한 모델 (Day 7)
- [x] 동시성 렌더링 = 병렬 처리가 아니라 "중단 가능한 싱글 스레드 스케줄링" (Day 7)
- [x] `useTransition`(내가 트리거하는 업데이트)과 `useDeferredValue`(외부에서 온 값) 구분 기준 (Day 7)
- [x] Suspense의 두 가지 용도(코드 분할 vs 데이터 페칭)와 그 공통 메커니즘 (Day 7)
- [x] Suspense boundary 배치 — 하나로 뭉치기 vs 세분화하기의 trade-off (Day 7)
- [ ] Error Boundary가 잡을 수 있는 에러의 범위와 컴포넌트 트리 단위 장애 격리 설계 (예정 Day 8)
