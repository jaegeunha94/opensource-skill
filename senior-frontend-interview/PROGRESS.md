# 프론트엔드 10년차 이상 개발자 Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | 프론트엔드 시니어 인터뷰 답변 프레임워크와 브라우저 기반 사고 | [0001-senior-frontend-interview-framework-and-browser-thinking.html](lessons/0001-senior-frontend-interview-framework-and-browser-thinking.html) |
| 2 | 2026-07-03 | HTML/CSS 아키텍처와 크로스 브라우저 레이아웃 사고 | [0002-html-css-architecture-and-cross-browser-layout-thinking.html](lessons/0002-html-css-architecture-and-cross-browser-layout-thinking.html) |
| 3 | 2026-07-04 | 브라우저 렌더링 파이프라인 심화 (Critical Rendering Path, Reflow/Repaint, Layout Thrashing, Compositor) | [0003-rendering-pipeline-reflow-repaint-composite.html](lessons/0003-rendering-pipeline-reflow-repaint-composite.html) |
| 4 | 2026-07-05 | JavaScript 실행 모델, 클로저와 메모리 누수 (콜스택/이벤트 루프/마이크로태스크, 클로저 기반 누수, 프로덕션 힙 스냅샷 진단) | [0004-javascript-execution-model-closures-memory-leaks.html](lessons/0004-javascript-execution-model-closures-memory-leaks.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 5 | 웹 접근성(A11y) 심화 | WAI-ARIA, 키보드 내비게이션, 스크린리더 대응, 접근성 감사 프로세스 |
| 6 | Web Vitals & 성능 예산 | LCP/INP/CLS, RUM, 성능 예산 설계와 CI 통합 |
| 7 | API 통합 & 네트워크 계층 | REST/GraphQL, 캐싱, 에러 처리, 오프라인/재시도 전략 |
| 8 | 상태/데이터 아키텍처 | 클라이언트 상태 vs 서버 상태, 캐시 무효화, 데이터 정합성 |
| 9 | React 렌더링 모델 & 아키텍처 | 컴포넌트 경계, 리렌더링 최적화, 훅 설계, 커스텀 훅 |
| 10 | Next.js & 서버 사이드 아키텍처 | SSR/SSG/ISR, Server/Client Components, 하이드레이션 |
| 11 | 디자인 시스템 & 컴포넌트 API 설계 | 토큰 설계, 합성 가능성, 크로스팀 거버넌스 |
| 12 | 프론트엔드 보안 | XSS, CSRF, CSP, 서드파티 스크립트 리스크, 토큰 저장 |
| 13 | 테스팅 전략 | 테스트 피라미드, 단위/통합/E2E, 시각적 회귀 |
| 14 | 관측성 & RUM | 프론트엔드 모니터링, 에러 트래킹, 실사용자 데이터 기반 진단 |
| 15 | 배포 전략 | 카나리/피처 플래그, 롤백, 프론트엔드 릴리즈 리스크 관리 |
| 16 | SEO & i18n | 렌더링 전략과 SEO, 다국어/RTL, 로케일별 성능 |
| 17 | 기술 리딩, 장애 분석 & 크로스펑셔널 커뮤니케이션 | 설계 리뷰, 포스트모텀, PM/디자이너/백엔드와의 협업 |

## 현재 학습 위치

**Day 4 완료** — Day 5 (웹 접근성(A11y) 심화)가 다음 차례.

## 습득한 핵심 개념

- [x] 프론트엔드 시니어 인터뷰 공통 답변 프레임워크(증상 구체화 → 브라우저 경로 재구성 → 원인 계층 격리 → 트레이드오프 언급 → 검증) (Day 1)
- [x] 사용자 상호작용 → 화면 갱신까지의 브라우저 내부 경로 전체 지도 (Day 1)
- [x] 좋은 답변 vs 약한 답변 구별 기준 (Day 1)
- [x] 시맨틱 HTML과 접근성/SEO 연결, Cascade/Specificity 붕괴 원인 사슬, CSS 아키텍처 방법론 트레이드오프, 크로스 브라우저 레이아웃 디버깅 절차 (Day 2)
- [x] Critical Rendering Path 단계별 비용 모델, Reflow/Repaint 트리거 조건, Layout Thrashing 발생 메커니즘과 batch 해결 패턴, GPU 레이어 승격의 트레이드오프 (Day 3)
- [x] 콜스택/이벤트 루프/마이크로·매크로태스크 실행 순서, 클로저가 참조를 유지시켜 발생시키는 메모리 누수 패턴, 힙 스냅샷 비교와 Retainers 추적을 통한 프로덕션 진단 절차 (Day 4)
- [ ] 웹 접근성 심화와 감사 프로세스 (예정 Day 5)
- [ ] Web Vitals와 성능 예산 운영 (예정 Day 6)
- [ ] API 통합과 네트워크 계층 설계 (예정 Day 7)
- [ ] 상태/데이터 아키텍처 (예정 Day 8)
- [ ] React 렌더링 모델과 아키텍처 (예정 Day 9)
- [ ] Next.js 서버 사이드 아키텍처 (예정 Day 10)
- [ ] 디자인 시스템과 컴포넌트 API 설계 (예정 Day 11)
- [ ] 프론트엔드 보안 (예정 Day 12)
- [ ] 테스팅 전략 (예정 Day 13)
- [ ] 관측성과 RUM (예정 Day 14)
- [ ] 배포 전략과 릴리즈 리스크 관리 (예정 Day 15)
- [ ] SEO와 i18n (예정 Day 16)
- [ ] 기술 리딩, 장애 분석, 크로스펑셔널 커뮤니케이션 (예정 Day 17)
