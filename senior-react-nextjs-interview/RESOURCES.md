# React / Next.js 학습 자료

## 1차 자료 (필수 / 기준서)

### 공식 문서

- **react.dev — Learn / Reference** — https://react.dev/learn (현재 React 팀이 유지하는 공식 문서, 렌더링 모델·Hook·Suspense 설명의 기준)
- **react.dev — "Render and Commit"** — https://react.dev/learn/render-and-commit (render/commit 단계 구분의 원전)
- **Next.js 공식 문서 — App Router** — https://nextjs.org/docs/app (Server/Client Component, 캐싱, 라우팅 규칙의 기준)
- **Next.js 공식 문서 — Caching** — https://nextjs.org/docs/app/building-your-application/caching (4개 캐시 계층 설명)
- **React RFCs** — https://github.com/reactjs/rfcs (Server Components, Concurrent Rendering 등 설계 배경과 트레이드오프 토론)

### 책

| 제목 | 저자 | 이유 |
|------|------|------|
| *Learning React* (2nd ed.) | Alex Banks & Eve Porcello | Hook과 렌더링 모델을 처음부터 다시 정리할 때 참고할 표준 입문~중급서 |
| *Fullstack React with TypeScript* | 다수 | 상태 관리, 데이터 페칭 패턴을 실무 코드 기준으로 다룸 |
| *Designing Data-Intensive Applications* | Martin Kleppmann | 캐싱, 일관성, 데이터 흐름을 프론트엔드 캐시 계층에 유추 적용할 때 유용 |
| *Release It!* (2nd ed.) | Michael T. Nygard | Error Boundary/장애 격리 설계를 백엔드 회복탄력성 패턴과 연결해 이해할 때 참고 |

## 2차 자료 (심화 / 케이스 스터디)

### 블로그 / 아티클

- **Dan Abramov — overreacted.io** — https://overreacted.io (React 내부 동작, closure, `useEffect` 함정을 만든 사람의 관점에서 설명)
- **Josh W. Comeau Blog** — https://www.joshwcomeau.com (렌더링, hydration, CSS-in-JS 트레이드오프를 시각 자료와 함께 설명)
- **patterns.dev** — https://www.patterns.dev (렌더링 패턴: CSR/SSR/SSG/ISR/Islands를 비교하는 표준 참고서)
- **Vercel Blog / Next.js Blog** — https://vercel.com/blog, https://nextjs.org/blog (App Router, PPR, 캐싱 변경사항의 1차 출처)
- **web.dev — Rendering on the Web** — https://web.dev/rendering-on-the-web (렌더링 전략별 성능 특성 비교)
- **web.dev — Core Web Vitals** — https://web.dev/vitals (LCP/INP/CLS와 렌더링 전략의 관계)
- **Kent C. Dodds Blog — Testing** — https://kentcdodds.com/blog (React Testing Library 철학, 테스트 전략)

### 컨퍼런스 영상

- **React Conf — "React Server Components"** 관련 발표 (RSC 설계 배경과 페이로드 직렬화 원리)
- **Vercel Next.js Conf** 발표 시리즈 (App Router, 캐싱, PPR 실무 적용 사례)

## 실습 / 디버깅 도구

| 도구 | 용도 |
|------|------|
| **React DevTools Profiler** | render 단계 커밋 시간, 불필요한 재렌더링 탐지 |
| **Next.js `next build` 산출물 분석** (`@next/bundle-analyzer`) | 번들 크기, code splitting 경계 확인 |
| **Chrome DevTools Performance 탭** | hydration 시점, Long Task, main thread blocking 확인 |
| **Chrome DevTools Network 탭** | streaming SSR의 chunk 도착 순서, 캐시 헤더 확인 |
| **Lighthouse / PageSpeed Insights** | Core Web Vitals 측정 |
| **React Testing Library** | 컴포넌트 동작 기준 테스트 |
| **Playwright / Cypress** | E2E 시나리오 테스트, 실제 hydration/라우팅 동작 검증 |
| **Sentry / Datadog RUM** | 프로덕션 클라이언트 에러·성능 관측성 |

## 핵심 개념 사전 이해용

| 개념 | 추천 자료 |
|------|-----------|
| Virtual DOM과 diffing | react.dev — "Preserving and Resetting State" |
| Fiber 아키텍처 개요 | react.dev 공식 문서에는 없음 — Lin Clark의 "A Cartoon Intro to Fiber" 발표/자료 |
| Concurrent Rendering | react.dev — "Concurrent Features" 관련 섹션 |
| RSC 페이로드 직렬화 | Next.js 공식 문서 — "Server and Client Composition Patterns" |
| stale-while-revalidate | RFC 5861, Next.js ISR 문서 |
| Core Web Vitals (LCP/INP/CLS) | web.dev/vitals |
