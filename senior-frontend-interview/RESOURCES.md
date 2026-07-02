# 참고 자료

## 브라우저 & 렌더링 핵심 자료

| 자료 | 설명 |
|------|------|
| web.dev — Rendering Performance | Critical Rendering Path, Reflow/Repaint, Composite 단계별 공식 가이드 |
| web.dev — Vitals | LCP/INP/CLS 정의, 측정 방법, 개선 전략 공식 문서 |
| "How Browsers Work" (HTML5 Rocks) | 렌더링 엔진 내부 동작 고전 레퍼런스 |
| MDN — Critical Rendering Path | DOM/CSSOM/Render Tree/Layout/Paint 표준 설명 |
| Chrome DevTools Performance panel 문서 | 실제 프로파일링·플레임 차트 해석 가이드 |

## HTML/CSS/접근성

| 자료 | 설명 |
|------|------|
| WAI-ARIA Authoring Practices Guide (APG) | 접근성 패턴별 공식 구현 가이드 |
| WCAG 2.2 | 접근성 표준 명세 |
| Josh Comeau — CSS for JS Developers | Cascade, Layout, Stacking Context를 실무 관점으로 설명 |
| Every Layout (Heydon Pickering & Andy Bell) | 알고리즘적 CSS 레이아웃 사고 |
| Inclusive Components (Heydon Pickering) | 접근성 있는 컴포넌트 설계 패턴 |

## JavaScript & 성능

| 자료 | 설명 |
|------|------|
| *You Don't Know JS* (Kyle Simpson) | 실행 컨텍스트, 클로저, 스코프 심화 |
| *High Performance Browser Networking* (Ilya Grigorik) | 네트워크 계층부터의 성능 사고 |
| web.dev — Performance Budgets | 성능 예산 설계와 CI 통합 가이드 |
| Chrome DevTools Memory panel 문서 | 메모리 누수 진단 실전 가이드 |

## React & Next.js

| 자료 | 설명 |
|------|------|
| React 공식 문서 — Rendering, Concurrent Features | 렌더링 모델, Suspense, Transition 공식 설명 |
| Next.js 공식 문서 — App Router, Rendering | Server/Client Components, 캐싱, 스트리밍 |
| Dan Abramov — Overreacted 블로그 | React 내부 동작에 대한 깊이 있는 에세이 |
| Josh W. Comeau, Kent C. Dodds 블로그 | 실무 React 패턴과 안티패턴 |

## 상태 관리 & API 통합

| 자료 | 설명 |
|------|------|
| TanStack Query 공식 문서 | 서버 상태 캐싱·무효화 패턴의 사실상 표준 |
| REST/GraphQL 설계 가이드 (각 공식 스펙) | API 계약 설계 원칙 |
| Kent C. Dodds — "State Colocation" | 상태 위치 결정 기준 |

## 디자인 시스템 & 테스팅

| 자료 | 설명 |
|------|------|
| Design Systems Handbook (InVision) | 토큰·거버넌스·크로스팀 운영 |
| Testing Library 공식 문서 | 사용자 관점 테스트 철학 |
| Kent C. Dodds — Testing Trophy | 테스트 피라미드 대안 모델 |
| Playwright 공식 문서 | E2E/시각적 회귀 테스트 실무 |

## 보안 & 관측성 & 배포

| 자료 | 설명 |
|------|------|
| OWASP Top 10 / OWASP Cheat Sheet Series | XSS, CSRF 등 프론트엔드 관련 취약점 표준 |
| Content Security Policy (MDN/W3C) | CSP 설계 표준 |
| web.dev — Measure RUM | 실사용자 모니터링 설계 가이드 |
| Google SRE Book | 배포 전략, 롤백, 에러 예산 개념(백엔드와 공통) |

## SEO & i18n

| 자료 | 설명 |
|------|------|
| Google Search Central | 렌더링 전략과 SEO 크롤링/인덱싱 공식 가이드 |
| MDN — Internationalization API | 로케일, 포맷팅, RTL 대응 표준 API |

## 커뮤니티 & 케이스 스터디

| 플랫폼 | 활용 방법 |
|--------|----------|
| web.dev / Chrome Developers YouTube | 성능·접근성 실전 케이스 |
| Netflix/Airbnb/Shopify Tech Blog | 대규모 프론트엔드 아키텍처 실전 사례 |
| Frontend Masters | 심화 강의 (렌더링, 성능, 아키텍처) |
| Patterns.dev | 프론트엔드 렌더링 패턴(SSR/SSG/ISR 등) 정리 |
