# HTML / CSS 학습 자료

## 1차 자료 (필수 / 기준서)

### 책

| 제목 | 저자 | 이유 |
|------|------|------|
| *CSS: The Definitive Guide* (4th ed.) | Eric A. Meyer & Estelle Weyl | Cascade, specificity, box model, stacking context를 가장 정확하게 다루는 기준서 |
| *Inclusive Components* | Heydon Pickering | 실제 UI 컴포넌트(탭, 모달, 토글 등)를 접근성 관점에서 어떻게 설계하는지 다루는 실전서 |
| *Every Layout* | Heydon Pickering & Andy Bell | Flexbox/Grid 레이아웃 패턴을 알고리즘적으로 설명, "왜 이 레이아웃을 이렇게 짜는가"에 강함 |
| *Adaptive Web Design* (2nd ed.) | Aaron Gustafson | Progressive enhancement의 철학과 실무 적용을 다루는 기준서 |
| *Responsive Web Design* (2nd ed.) | Ethan Marcotte | 반응형 디자인 개념의 원전 |
| *Refactoring UI* | Adam Wathan & Steve Schoger | 디자인 시스템/토큰 설계를 실무 UI 관점에서 다룸 |

### 공식 스펙 / 표준 문서 (원전 확인용)

- **WHATWG HTML Living Standard** — https://html.spec.whatwg.org/multipage/ (HTML 시맨틱스의 최신 정본)
- **W3C WAI-ARIA Authoring Practices Guide (APG)** — https://www.w3.org/WAI/ARIA/apg/ (ARIA 패턴별 공식 구현 가이드)
- **WCAG 2.2** — https://www.w3.org/TR/WCAG22/ (접근성 준수 기준)
- **CSS Working Group 스펙 모음** — https://www.w3.org/Style/CSS/current-work (Cascade, Box, Flexbox, Grid 등 각 모듈 스펙)
- **MDN Web Docs — HTML** — https://developer.mozilla.org/en-US/docs/Web/HTML
- **MDN Web Docs — CSS** — https://developer.mozilla.org/en-US/docs/Web/CSS
- **MDN — Accessibility Tree** — https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree

## 2차 자료 (심화 / 케이스 스터디)

### 엔지니어링 블로그

- **web.dev (Google)** — 렌더링 성능, Core Web Vitals, 접근성 실무 가이드가 매우 상세함
- **CSS-Tricks** — Flexbox/Grid 가이드("A Complete Guide to Flexbox/Grid")가 실무 참조 표준
- **Smashing Magazine** — 디자인 시스템, 접근성, 반응형 디자인 케이스 스터디
- **Josh W. Comeau 블로그** — CSS 내부 동작(stacking context, box model)을 시각적으로 설명
- **Rachel Andrew 블로그** — CSS Grid 명세 공동 저자, Grid 심화 자료
- **Chrome for Developers — Rendering** — https://developer.chrome.com/docs/devtools/rendering/ (reflow/repaint 진단)

### 영상 강의

- **Kevin Powell (YouTube)** — Flexbox/Grid/Cascade Layers를 실무 예제로 설명
- **Jen Simmons — "Layout Land"** — CSS Grid/Flexbox의 설계 철학
- **Google I/O — "Rendering Performance"** (Paul Lewis) — 브라우저 렌더링 파이프라인 심화

## 접근성/렌더링 진단 도구

| 도구 | 용도 |
|------|------|
| **Chrome DevTools — Accessibility 탭** | Accessibility Tree를 DOM과 나란히 확인 |
| **Chrome DevTools — Rendering 탭** | Paint flashing, Layout Shift Regions로 reflow/repaint 시각 확인 |
| **axe DevTools** | 자동화된 접근성 위반 스캔 |
| **Lighthouse** | 성능/접근성/SEO 종합 감사 |
| **WAVE (WebAIM)** | 접근성 위반을 페이지 위에 시각적으로 표시 |
| **VoiceOver(macOS/iOS) / NVDA(Windows)** | 실제 스크린 리더 사용자 경험 재현 |
| **Can I Use** — https://caniuse.com | 브라우저별 CSS/HTML 기능 지원 여부 확인 |

## 핵심 개념 사전 이해용

| 개념 | 추천 자료 |
|------|-----------|
| DOM vs Accessibility Tree | MDN Accessibility Tree 문서 |
| Critical Rendering Path | web.dev — "Critical Rendering Path" 가이드 |
| BFC (Block Formatting Context) | MDN — "Block formatting context" |
| Cascade Layers (`@layer`) | MDN — "@layer" + web.dev 소개 글 |
| Container Query | MDN — "CSS container queries" |
| Design Token 개념 | Design Tokens Community Group — https://design-tokens.github.io/community-group/format/ |
