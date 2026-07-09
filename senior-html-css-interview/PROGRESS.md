# HTML / CSS 시니어 인터뷰 — 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | Semantic HTML과 CSS 렌더링/접근성 답변 프레임워크 — 시니어가 마크업을 리뷰하는 사고법 | [0001-semantic-html-css-rendering-a11y-framework.html](lessons/0001-semantic-html-css-rendering-a11y-framework.html) |
| 2 | 2026-07-03 | Document 구조와 Semantic HTML 심화 — `header`/`nav`/`main`/`article`/`section`/`aside`/`footer` 구분, `div` 남용의 실무 비용 | [0002-document-structure-semantic-html-deep-dive.html](lessons/0002-document-structure-semantic-html-deep-dive.html) |
| 3 | 2026-07-04 | Forms 심화 — 네이티브 검증, label 연결, 접근성 있는 폼 설계 | [0003-forms-native-validation-accessible-design.html](lessons/0003-forms-native-validation-accessible-design.html) |
| 4 | 2026-07-05 | ARIA와 Accessibility Tree — role/name/state, First Rule of ARIA, aria-hidden 함정 | [0004-aria-accessibility-tree.html](lessons/0004-aria-accessibility-tree.html) |
| 5 | 2026-07-06 | SEO 기본 판단 — 크롤러의 렌더링 예산, semantic 마크업, CSR/SSR/SSG/하이드레이션의 SEO trade-off | [0005-seo-fundamentals-semantic-markup-rendering.html](lessons/0005-seo-fundamentals-semantic-markup-rendering.html) |
| 6 | 2026-07-07 | CSS Cascade 심화 — Origin/Importance → Cascade Layer → Specificity → Source Order, `!important`의 실무 함정 | [0006-css-cascade-deep-dive-layers-important.html](lessons/0006-css-cascade-deep-dive-layers-important.html) |
| 7 | 2026-07-08 | Specificity 심화 — A-B-C 3열 비교 계산법, `:is()`/`:where()`/`:not()`의 specificity 규칙, BEM 기반 유지보수 가능한 selector 전략 | [0007-specificity-deep-dive-maintainable-selectors.html](lessons/0007-specificity-deep-dive-maintainable-selectors.html) |
| 8 | 2026-07-09 | Inheritance와 CSS 커스텀 프로퍼티 — 상속 속성/비상속 속성의 설계 원칙, `inherit`/`initial`/`unset`/`revert`, 런타임 상속을 활용한 design token/다크모드 설계 | [0008-inheritance-css-custom-properties.html](lessons/0008-inheritance-css-custom-properties.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 9 | Box Model 심화 | `box-sizing`, margin collapsing, 실무 버그 사례 |
| 10 | Flexbox 심화 | 실무 레이아웃 패턴, 흔한 버그 |
| 11 | Grid 심화 | 2차원 레이아웃과 Flexbox 대신 Grid를 쓰는 기준 |

## 현재 학습 위치

**Day 8 완료** — 다음: Day 9 — Box Model 심화

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
- [x] `label`과 입력창의 프로그램적 연결 방법과 `placeholder`의 한계 (Day 3)
- [x] 네이티브 HTML5 Constraint Validation을 우선 사용해야 하는 이유 (Day 3)
- [x] `aria-invalid`/`aria-describedby`로 에러 상태와 메시지를 연결하는 방법 (Day 3)
- [x] `role="alert"`/`aria-live`로 동적 에러를 스크린 리더에 즉시 통지하는 방법 (Day 3)
- [x] `fieldset`/`legend`로 라디오·체크박스 그룹을 의미적으로 묶는 이유 (Day 3)
- [x] Accessibility Tree와 DOM Tree의 구조적 차이 (Day 4)
- [x] role/name/state 세 축으로 컴포넌트를 분해하는 방법 (Day 4)
- [x] Accessible Name Computation의 우선순위 (Day 4)
- [x] First Rule of ARIA — 네이티브 요소 우선 원칙 (Day 4)
- [x] ARIA 선언과 키보드 상호작용 구현이 별개라는 원칙 (Day 4)
- [x] `aria-hidden`이 포커스 가능 여부에 영향을 주지 않아 생기는 함정 (Day 4)
- [x] 검색 엔진 크롤러의 크롤 예산/렌더링 예산 개념과 1차 크롤·2차 렌더링 분리 (Day 5)
- [x] CSR/SSR/SSG/하이드레이션의 SEO 관점 trade-off 구분 (Day 5)
- [x] Semantic 마크업(제목 계층, 랜드마크)이 크롤러의 콘텐츠 구조 판단에 쓰이는 방식 (Day 5)
- [x] `robots.txt`(방문 차단)와 `meta robots`(색인 차단)의 목적 차이 (Day 5)
- [x] `canonical` 태그로 중복 콘텐츠 문제를 해결하는 방법 (Day 5)
- [x] 구조화 데이터(JSON-LD)가 랭킹 요인이 아니라 rich result/CTR 개선 도구라는 구분 (Day 5)
- [x] Cascade 4단계 판정 순서 (Origin/Importance → Cascade Layer → Specificity → Source Order) (Day 6)
- [x] Cascade Layers(`@layer`)가 specificity보다 상위 기준이라는 것과 우선순위 통제 방법 (Day 6)
- [x] `!important`가 문제를 해결하지 않고 경쟁 구간을 이동시킬 뿐이라는 원칙 (Day 6)
- [x] `!important` 선언끼리 경쟁할 때 레이어 우선순위가 반대로 뒤집히는 함정 (Day 6)
- [x] User `!important`가 Author `!important`를 이길 수 있는 접근성 설계 의도 (Day 6)
- [x] 레거시 `!important` 코드베이스를 회귀 없이 점진적으로 이관하는 절차 (Day 6)
- [x] Specificity가 자릿수 올림 없는 A(ID)-B(class류)-C(태그류) 3열 독립 비교라는 것 (Day 7)
- [x] class를 아무리 조합해도 ID selector 1개를 이길 수 없는 이유 (Day 7)
- [x] `:not()`/`:is()`는 괄호 안 최고 specificity를 가져오고 `:where()`는 항상 0이라는 차이 (Day 7)
- [x] 결합자(`>`, `+`, `~`, 공백)와 `*`가 specificity에 기여하지 않는다는 것 (Day 7)
- [x] BEM으로 계층을 클래스 명명으로 표현해 specificity를 평평하게 만드는 원리 (Day 7)
- [x] `:where()`를 CSS 리셋/유틸리티/공용 컴포넌트의 override 가능성 보장 도구로 쓰는 이유 (Day 7)
- [x] Inheritance가 Cascade 이후 값이 비어있을 때 작동하는 별도 단계라는 것 (Day 8)
- [x] 상속 속성/비상속 속성이 나뉘는 설계 원칙 — 텍스트 일관성 vs 박스 독립성 (Day 8)
- [x] `inherit`/`initial`/`unset`/`revert` 4가지 전역 키워드의 차이와 사용처 (Day 8)
- [x] CSS 커스텀 프로퍼티가 기본적으로 상속 속성이라는 것과 SASS 변수(빌드타임)와의 런타임 메커니즘 차이 (Day 8)
- [x] Guaranteed-invalid value와 `var(--token, fallback)`의 필요성 (Day 8)
- [x] `@property`로 타입/애니메이션 가능 여부/상속 여부(`inherits: false`)를 통제하는 이유 (Day 8)
- [x] 커스텀 프로퍼티 상속을 design token, 다크모드 전환, 컴포넌트 스코프 오버라이드에 응용하는 방법 (Day 8)
- [ ] Box Model 심화 — `box-sizing`, margin collapsing, 실무 버그 사례 (예정 Day 9)
