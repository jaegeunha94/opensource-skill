# HTML / CSS 시니어 인터뷰 — 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | Semantic HTML과 CSS 렌더링/접근성 답변 프레임워크 — 시니어가 마크업을 리뷰하는 사고법 | [0001-semantic-html-css-rendering-a11y-framework.html](lessons/0001-semantic-html-css-rendering-a11y-framework.html) |
| 2 | 2026-07-03 | Document 구조와 Semantic HTML 심화 — `header`/`nav`/`main`/`article`/`section`/`aside`/`footer` 구분, `div` 남용의 실무 비용 | [0002-document-structure-semantic-html-deep-dive.html](lessons/0002-document-structure-semantic-html-deep-dive.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 3 | Forms 심화 | 네이티브 검증, label 연결, 접근성 있는 폼 설계 |
| 4 | ARIA와 Accessibility Tree | role/name/state, ARIA 사용 원칙, 스크린 리더 실제 동작 |
| 5 | SEO 기본 판단 | 시맨틱 마크업과 크롤러 파싱, CSR/SSR이 SEO에 미치는 영향 |
| 6 | CSS Cascade 심화 | Cascade Layers, `!important`의 실무 함정 |
| 7 | Specificity 심화 | 계산법, 유지보수 가능한 selector 전략 |
| 8 | Inheritance와 CSS 커스텀 프로퍼티 | 상속 속성/비상속 속성, CSS 변수 활용 |
| 9 | Box Model 심화 | `box-sizing`, margin collapsing, 실무 버그 사례 |
| 10 | Flexbox 심화 | 실무 레이아웃 패턴, 흔한 버그 |

## 현재 학습 위치

**Day 2 완료** — 다음: Day 3 — Forms 심화

## 습득한 핵심 개념

- [x] Semantic HTML의 정의와 class 이름으로 대체 불가능한 이유 (Day 1)
- [x] 브라우저 렌더링 파이프라인 6단계 (Parse → CSSOM → Render Tree → Layout → Paint → Composite) (Day 1)
- [x] Accessibility Tree와 DOM Tree의 차이, role/name/state (Day 1)
- [x] 6단계 HTML/CSS 리뷰 프레임워크 (Day 1)
- [x] `div onclick` vs `button`의 접근성 차이 (Day 1)
- [x] Reflow와 Repaint의 차이, 유발 속성 개요 (Day 1)
- [x] ARIA 남용이 접근성 향상과 동일하지 않은 이유 (Day 1)
- [x] Landmark 개념과 스크린 리더의 랜드마크 탐색 방식 (Day 2)
- [x] `article`/`section`/`div`를 독립 재사용성·제목 유무로 구분하는 기준 (Day 2)
- [x] `header`/`footer`가 sectioning 대상 기준으로 반복될 수 있는 이유 (Day 2)
- [x] `aside`를 위치가 아니라 콘텐츠 관계로 판단하는 기준 (Day 2)
- [x] HTML5 outline algorithm이 실무에서 신뢰할 수 없는 이유 (Day 2)
- [ ] 네이티브 폼 검증과 접근성 있는 폼 설계 (예정 Day 3)
- [ ] ARIA 패턴별 공식 구현 가이드 적용 (예정 Day 4)
- [ ] SEO 관점의 CSR/SSR 판단 기준 (예정 Day 5)
- [ ] Cascade Layers(`@layer`)를 이용한 우선순위 통제 (예정 Day 6)
