# React / Next.js — 시니어 개발자 인터뷰 대비 학습 미션

## 목표

10년차 이상 프론트엔드 개발자로서 React / Next.js 인터뷰에서 요구되는 수준의 사고력과 언어를 익힌다.

단순히 "`useState`는 상태를 관리하고 `useEffect`는 부수효과를 처리한다", "Next.js는 파일 기반 라우팅을 쓴다" 수준의 암기가 아니라, 다음을 명확히 설명하고 방어할 수 있어야 한다:

- **렌더링 모델에 대한 정확한 이해**: React가 컴포넌트 트리를 어떻게 render/commit 단계로 나누어 처리하는지, reconciliation이 실제로 무엇을 비교하고 무엇을 재사용하는지
- **실행 경계를 그리는 능력**: 코드 한 줄이 서버에서 실행되는지, 빌드 타임에 실행되는지, 요청 시점에 실행되는지, 브라우저에서 실행되는지를 즉시 구분하는 능력 — Server Component, Client Component, SSR, SSG, ISR, hydration, 클라이언트 재렌더링까지
- **데이터 흐름과 상태 설계 판단**: 로컬 상태/서버 상태/전역 상태를 구분하고, 어떤 데이터를 어디서 fetch하고 어떻게 캐싱할지 아키텍처 수준에서 설명하는 능력
- **동시성 렌더링과 장애 격리**: Suspense, transition, error boundary가 왜 필요하고 실제 프로덕션에서 어떤 장애를 방지하는지
- **캐싱과 스트리밍 판단**: Next.js의 여러 캐시 계층(Request memoization, Data Cache, Full Route Cache, Router Cache)이 각각 무엇을 언제 캐싱하고, streaming SSR이 TTFB/TTI에 어떤 영향을 주는지
- **운영 관점의 판단력**: 번들 최적화, 인증/보안, 테스트 전략, observability를 프로덕션 장애 대응과 연결해서 설명하는 능력

## 대상 역할

- 프론트엔드 시니어 엔지니어 (10년차 이상)
- React / Next.js 기반 프로덕션 서비스의 아키텍처 설계, 성능 최적화, 장애 대응에 관여하는 역할

## 전제 지식

이 워크스페이스는 다음을 이미 안다고 가정한다:

- React로 컴포넌트를 작성하고 `useState`/`useEffect` 같은 기본 Hook을 사용해본 경험
- JSX 문법과 컴포넌트 합성(composition)의 기본 개념
- Next.js(또는 유사 프레임워크)로 페이지를 최소 하나 이상 만들어본 경험
- JavaScript 비동기 처리(Promise, `async`/`await`)의 기본 이해

React Hook의 기본 사용법("`useEffect`의 두 번째 인자는 의존성 배열이다")이나 Next.js 파일 기반 라우팅의 규칙("`page.tsx`는 라우트가 된다") 같은 입문 수준 설명은 반복하지 않는다. 대신 그 규칙이 왜 그렇게 설계됐는지, 실무에서 어길 때 어떤 장애·성능 문제가 나는지를 다룬다.

## 커리큘럼 개요 (20 Days)

| Day | 주제 |
|-----|------|
| 1 | React 렌더링 모델과 Next.js 실행 경계 답변 프레임워크 — 코드가 어디서 실행되는지 그리는 사고법 |
| 2 | Reconciliation과 Virtual DOM — key, diffing 알고리즘, 재사용/재생성 판단 |
| 3 | Component Boundary 설계 — Server/Client 컴포넌트 경계를 가르는 기준 |
| 4 | Hooks 심화 — `useEffect`/`useMemo`/`useCallback`의 실무 함정과 의존성 배열 사고 |
| 5 | State Management 아키텍처 — 로컬 상태 vs 서버 상태 vs 전역 상태 구분과 도구 선택 |
| 6 | Data Fetching 패턴 — 서버 fetch vs 클라이언트 fetch, 워터폴 방지, request memoization |
| 7 | Suspense와 동시성 렌더링 — concurrent rendering, transition, 우선순위 스케줄링 |
| 8 | Error Boundary와 장애 격리 — 컴포넌트 트리 단위 장애 격리 설계 |
| 9 | Hydration 심화 — hydration mismatch의 원인, 디버깅, 예방 |
| 10 | SSR — 서버 렌더링 파이프라인, TTFB/TTI trade-off, 요청 단위 렌더링 비용 |
| 11 | SSG — 빌드 타임 렌더링과 콘텐츠 갱신 전략, 빌드 시간 폭발 문제 |
| 12 | ISR — Incremental Static Regeneration, on-demand revalidation, stale-while-revalidate |
| 13 | Server Component 심화 — RSC 페이로드 직렬화, 서버-클라이언트 데이터 경계 |
| 14 | Client Component와 `"use client"` 경계 설계 — 번들 전이(propagation) 문제 |
| 15 | App Router 아키텍처 — 레이아웃 트리, 파일 컨벤션, 라우팅과 렌더링의 관계 |
| 16 | Next.js 캐싱 계층 종합 — Request Memoization, Data Cache, Full Route Cache, Router Cache |
| 17 | Streaming — `loading.tsx`, streaming SSR, progressive rendering과 체감 성능 |
| 18 | 번들 최적화 — code splitting, dynamic import, tree shaking, 서드파티 스크립트 관리 |
| 19 | 인증과 프론트엔드 보안 — 세션/토큰 저장 위치, middleware 인증, XSS/CSRF 방어 |
| 20 | 테스트와 Observability 종합 — RTL/E2E 전략, RUM, Core Web Vitals, 프로덕션 장애 대응 |

## 성공 기준

- 면접관이 "이 컴포넌트는 서버에서 실행되나요, 클라이언트에서 실행되나요?"라고 물었을 때 코드를 보지 않고도 판단 기준을 즉시 말할 수 있다
- SSR/SSG/ISR/Server Component의 차이를 "언제, 어디서, 얼마나 자주 렌더링이 일어나는가" 기준으로 설명할 수 있다
- Hydration mismatch가 발생하는 원인과 디버깅 절차를 구체적으로 설명할 수 있다
- Next.js의 4개 캐시 계층이 각각 무엇을 캐싱하고 언제 무효화되는지 구분해서 설명할 수 있다
- 프로덕션에서 "특정 페이지가 느리다/깜빡인다/에러가 난다"는 리포트를 받았을 때 렌더링 모델 기반으로 원인을 좁혀가는 절차를 말할 수 있다
- 상태 관리 라이브러리를 고르는 기준을 "이 데이터가 서버 상태인가 클라이언트 상태인가"로 설명할 수 있다
