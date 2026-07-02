# HTML / CSS — 시니어 개발자 인터뷰 대비 학습 미션

## 목표

10년차 이상 프론트엔드 개발자로서 HTML/CSS 인터뷰에서 요구되는 수준의 사고력과 언어를 익힌다.

단순히 "이 태그는 이런 속성을 가진다", "이 선택자의 우선순위는 이렇다" 수준의 암기가 아니라, 다음을 명확히 설명하고 방어할 수 있어야 한다:

- **Semantic 구조 판단력**: 콘텐츠를 왜 그 태그로 표현해야 하는지, `div`/`span` 남용이 실제로 어떤 비용(접근성, SEO, 유지보수)을 발생시키는지
- **접근성(Accessibility) 설계 능력**: Accessibility Tree가 DOM과 어떻게 다른지, ARIA를 언제 쓰고 언제 쓰지 말아야 하는지, 폼과 인터랙션을 키보드/스크린 리더 사용자 기준으로 설계하는 법
- **브라우저 렌더링 이해**: HTML/CSS 파싱부터 Layout, Paint, Composite까지의 파이프라인, reflow/repaint를 유발하는 패턴과 그 성능 비용
- **레이아웃 모델 판단력**: Box model, Flexbox, Grid, stacking context를 콘텐츠 특성에 맞게 선택하고 그 근거를 설명하는 능력
- **Cascade/유지보수 설계**: Cascade, specificity, inheritance가 대규모 코드베이스에서 어떻게 유지보수 비용으로 이어지는지, design token과 CSS 아키텍처로 이를 통제하는 법
- **성능/크로스브라우저 trade-off 판단**: 반응형 설계, 렌더링 성능, 브라우저 호환성 사이의 실무적 절충안을 근거 있게 설명하는 능력

## 대상 역할

- 프론트엔드 시니어 엔지니어 (10년차 이상)
- 디자인 시스템 구축, 접근성 준수, 프로덕션 UI 성능/유지보수성에 책임을 지는 역할

## 전제 지식

이 워크스페이스는 다음을 이미 안다고 가정한다:

- HTML 태그, CSS 선택자 문법을 실무에서 사용해본 경험
- 실제 서비스의 UI를 마크업/스타일링해본 경험
- 브라우저 개발자 도구를 기본적으로 사용할 수 있는 능력

`<div>`가 무엇인지, `flex-direction`이 무슨 값을 가지는지 같은 태그/속성 사전적 정의나 CSS 선택자 문법 자체는 반복하지 않는다. 대신 그 지식이 실무에서 왜 중요한지, 잘못 쓰면 어떤 장애·접근성 문제·성능 문제로 이어지는지를 다룬다.

## 커리큘럼 개요 (20 Days)

| Day | 주제 |
|-----|------|
| 1 | Semantic HTML과 CSS 렌더링/접근성 답변 프레임워크 — 시니어가 마크업을 리뷰하는 사고법 |
| 2 | Document 구조와 Semantic HTML 심화 — `div`/`span` 남용의 실무 비용 |
| 3 | Forms 심화 — 네이티브 검증, label 연결, 접근성 있는 폼 설계 |
| 4 | ARIA와 Accessibility Tree — role/name/state, 스크린 리더가 실제로 보는 것 |
| 5 | SEO 기본 판단 — 시맨틱 마크업과 크롤러가 파싱하는 것 |
| 6 | CSS Cascade 심화 — Cascade Layers, `!important`의 실무 함정 |
| 7 | Specificity 심화 — 계산법과 유지보수 가능한 selector 전략 |
| 8 | Inheritance와 CSS 커스텀 프로퍼티 — 상속을 활용한 유지보수 설계 |
| 9 | Box Model 심화 — `box-sizing`, margin collapsing, 실무 버그 사례 |
| 10 | Flexbox 심화 — 실무 레이아웃 패턴과 흔한 버그 |
| 11 | Grid 심화 — 2차원 레이아웃과 Flexbox 대신 Grid를 쓰는 기준 |
| 12 | Stacking Context — z-index 지옥의 원인과 해결 |
| 13 | Responsive Design 심화 — media query, container query, fluid typography |
| 14 | Design Token과 Design System — 유지보수 가능한 스타일링의 기반 |
| 15 | CSS Architecture — BEM, utility-first, CSS Modules, CSS-in-JS trade-off |
| 16 | Browser Rendering Pipeline — Parse → Style → Layout → Paint → Composite |
| 17 | Reflow/Repaint 성능 — 무엇이 트리거하고 어떻게 피하는가 |
| 18 | CSS 렌더링 성능 심화 — `will-change`, containment, GPU 가속의 trade-off |
| 19 | Cross-browser Issues — feature detection, progressive enhancement, 벤더 프리픽스 |
| 20 | 종합 — 대규모 프로덕션 UI 시스템 설계 리뷰 (semantic + a11y + 성능 + 아키텍처 종합) |

## 성공 기준

- 면접관이 마크업/CSS 스니펫을 보여주고 "리뷰해달라"고 했을 때, semantic → accessibility → cascade → layout → 성능 → 크로스브라우저 순서로 구조화된 리뷰를 즉시 말할 수 있다
- `div` 기반 클릭 가능 요소가 왜 문제인지, ARIA를 붙이는 것만으로 왜 완전히 해결되지 않는지 설명할 수 있다
- 브라우저 렌더링 파이프라인을 그리고, 어떤 CSS 변경이 reflow/repaint/composite 중 무엇을 유발하는지 예측할 수 있다
- Flexbox와 Grid 중 무엇을 쓸지, 그 판단 근거를 콘텐츠 특성으로 설명할 수 있다
- Cascade/specificity/inheritance가 얽힌 실제 유지보수 문제를 design token과 CSS 아키텍처로 어떻게 예방하는지 설명할 수 있다
- 반응형·성능·크로스브라우저 사이의 trade-off를 근거를 들어 판단하고 방어할 수 있다
