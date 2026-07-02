# JavaScript 시니어 인터뷰 학습 자료

## 1차 자료 (필수 / 기준서)

### 책

| 제목 | 저자 | 이유 |
|------|------|------|
| *You Don't Know JS (Yet)* 시리즈 (Scope & Closures, this & Object Prototypes, Async & Performance) | Kyle Simpson | JS 실행 모델, 스코프, `this`, 비동기를 가장 근본부터 다루는 시리즈. 무료로 온라인 공개됨 |
| *Effective JavaScript* | David Herman | 관용구 수준이 아니라 언어 설계 의도까지 파고드는 실무 중심 서적 |
| *JavaScript: The Definitive Guide* (7th ed.) | David Flanagan | 언어 스펙 수준의 상세한 레퍼런스. 프로토타입/모듈/비동기 챕터가 특히 상세 |
| *High Performance Browser Networking* | Ilya Grigorik | 렌더링 파이프라인과 네트워크가 JS 실행에 미치는 영향을 이해하는 데 도움 |
| *Design Patterns* 대신 실무 관점: *JavaScript Application Design* | Nathan Green, Aaron Frost | 모듈 경계와 유지보수 가능한 애플리케이션 구조 설계 |

### 공식 스펙 / 표준 문서 (원전 확인용)

- **ECMA-262 (ECMAScript Language Specification)** — https://tc39.es/ecma262/ (실행 컨텍스트, 잡 큐(Job Queue), 클로저의 공식 정의)
- **MDN — JavaScript 가이드** — https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide
- **MDN — Event Loop** — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop
- **MDN — Memory Management** — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management
- **WHATWG HTML Living Standard — Event loops** — https://html.spec.whatwg.org/multipage/webappapis.html#event-loops (Task/Microtask 큐의 표준 정의)
- **TC39 Proposals** — https://github.com/tc39/proposals (언어의 방향성과 아직 실험적인 기능 확인용)

## 2차 자료 (심화 / 케이스 스터디)

### 엔지니어링 블로그 & 아티클

- **V8 Blog (v8.dev)** — 실제 엔진이 클로저, GC, 최적화를 어떻게 처리하는지 원전 수준의 설명
- **Jake Archibald — "Tasks, microtasks, queues and schedules"** — Event Loop/microtask 설명의 사실상 표준 아티클
- **web.dev (구글)** — Web Vitals, 성능 프로파일링, 메모리 누수 진단 가이드가 매우 실무적
- **Philip Roberts — "What the heck is the event loop anyway?"** (JSConf 발표) — Event Loop 시각화의 고전
- **Nolan Lawson — 다수의 Promise/microtask 성능 아티클** — 실무에서 자주 마주치는 미묘한 비동기 버그 사례

### 도구

- **Chrome DevTools — Performance / Memory 탭** — Long Task, 힙 스냅샷, 플레임그래프 분석
- **Node.js `--inspect` / Chrome DevTools 연동** — 서버사이드 JS 프로파일링
- **`console.trace`, `performance.mark/measure`** — 코드 레벨 타이밍 계측
- **Lighthouse / PageSpeed Insights** — Web Vitals(INP, LCP 등) 측정

### TypeScript 경계 판단 참고 자료

- **TypeScript 공식 핸드북** — https://www.typescriptlang.org/docs/handbook/intro.html
- **"TypeScript is not a type checker for runtime values"**류의 아티클 — 컴파일타임 타입과 런타임 검증(Zod 등)의 경계를 다루는 자료

## 실전 문제 은행

- 대기업/스타트업 프론트엔드 면접 후기 (블라인드, GeeksforGeeks JS 섹션 등) — 이벤트 루프, 클로저, `this` 관련 실제 출제 패턴 참고
- LeetCode/JavaScript30류 문제는 문법 숙련도 확인용으로만 참고하고, 이 트랙의 핵심 학습 방식은 아님 (이 트랙은 실행 모델·아키텍처 판단력에 집중)
