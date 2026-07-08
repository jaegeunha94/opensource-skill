# JavaScript 시니어 인터뷰 — 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | JavaScript 실행 모델과 이벤트 루프 답변 프레임워크 — 코드 실행 순서를 예측하는 사고법 | [0001-js-execution-model-event-loop-framework.html](lessons/0001-js-execution-model-event-loop-framework.html) |
| 2 | 2026-07-03 | Execution Context와 Call Stack 심화 — Creation/Execution 단계, Hoisting, TDZ, 스택 오버플로우 | [0002-execution-context-call-stack-deep-dive.html](lessons/0002-execution-context-call-stack-deep-dive.html) |
| 3 | 2026-07-04 | Scope Chain과 Lexical Scoping — 스코프 체인 조회 규칙, 함수/블록 스코프, 섀도잉 | [0003-scope-chain-lexical-scoping.html](lessons/0003-scope-chain-lexical-scoping.html) |
| 4 | 2026-07-05 | Closure 심화 — 클로저의 실제 메모리 모델, 반복문 클로저 버그, 실무 활용 패턴 | [0004-closure-memory-model-deep-dive.html](lessons/0004-closure-memory-model-deep-dive.html) |
| 5 | 2026-07-06 | Prototype과 객체 모델 — Prototype chain 조회 알고리즘, `class`는 syntactic sugar, `Object.create`로 체인 직접 다루기 | [0005-prototype-object-model.html](lessons/0005-prototype-object-model.html) |
| 6 | 2026-07-07 | `this` 바인딩 규칙 — 4가지 바인딩 규칙과 우선순위, `call`/`apply`/`bind`, 화살표 함수의 `this` 예외 | [0006-this-binding-rules.html](lessons/0006-this-binding-rules.html) |
| 7 | 2026-07-08 | Module 시스템 — CommonJS vs ESM, 순환 참조 처리 차이, 트리쉐이킹이 ESM에서만 가능한 이유, 번들러 경계(interop/dual package hazard) | [0007-module-system-cjs-esm.html](lessons/0007-module-system-cjs-esm.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 8 | Event Loop 심화 — Microtask vs Macrotask | 큐 우선순위, `requestAnimationFrame`, 렌더링 타이밍과의 관계 |
| 9 | Promise 내부 동작 | 상태 머신(pending/fulfilled/rejected), 체이닝, 에러 전파 규칙 |
| 10 | `async`/`await` 심화 | 내부적으로 Promise로 변환되는 방식, 순차 vs 병렬 실행 함정 |
| 11 | Cancellation과 AbortController | Promise가 취소 불가능한 이유, 취소 가능한 비동기 설계 패턴 |
| 12 | DOM Event 모델 | Capturing/Bubbling, `target` vs `currentTarget`, 커스텀 이벤트 |
| 13 | Event Delegation | 대량 리스트 이벤트 처리 최적화, 위임이 실패하는 경우 |
| 14 | Browser API 심화 | `IntersectionObserver`, `requestIdleCallback`, Web Worker 경계 |
| 15 | Memory Leak 진단 | Detached DOM, 클로저로 인한 누수, `WeakMap`/`WeakRef` |
| 16 | Error Handling 전략 | 동기/비동기 에러 전파 차이, 전역 에러 핸들러, 복구 전략 |
| 17 | Performance Profiling | DevTools Performance 탭, Long Task, Web Vitals(INP) 해석 |
| 18 | Garbage Collection 심화 | Mark-and-sweep, 세대별 GC, GC가 성능에 미치는 영향 |
| 19 | TypeScript와의 경계 판단 | 컴파일타임 vs 런타임 안전성, 타입 시스템 도입 트레이드오프 |
| 20 | 종합 — 프로덕션 JS 장애 디버깅 시나리오 | Event Loop·메모리·비동기를 통합한 실전 디버깅 절차 |

## 현재 학습 위치

**Day 7 완료** — 다음: Day 8 — Event Loop 심화 — Microtask vs Macrotask

## 습득한 핵심 개념

- [x] Call Stack / Web API / Task Queue / Microtask Queue의 역할 구분 (Day 1)
- [x] 실행 순서 예측 6단계 프레임워크 (Day 1)
- [x] Microtask 큐가 Macrotask보다 항상 먼저 전부 소진된다는 규칙 (Day 1)
- [x] `setTimeout(fn, 0)`이 "즉시 실행"을 의미하지 않는 이유 (Day 1)
- [x] 브라우저 렌더링이 Event Loop의 어느 지점에 끼어드는지 (Day 1)
- [x] Execution Context의 Creation Phase / Execution Phase 2단계 모델 (Day 2)
- [x] Hoisting과 TDZ가 실제로 만드는 버그, `ReferenceError` vs `undefined` 구분 (Day 2)
- [x] Call Stack의 물리적 한계와 스택 오버플로우 진단·대응 (Day 2)
- [x] 스코프 체인이 정의 시점에 정적으로 고정되는 원리와 섀도잉 (Day 3)
- [x] 함수 스코프(`var`)와 블록 스코프(`let`/`const`)의 실무 차이 (Day 3)
- [x] 스코프 체인 조회 비용이 성능에 영향을 주는 조건 (Day 3)
- [x] 클로저가 값이 아니라 바인딩(변수 자리)에 대한 참조를 유지한다는 원리 (Day 4)
- [x] 반복문에서 `var` vs `let`의 클로저 캡처 차이와 근본 원인 (Day 4)
- [x] 모듈 패턴/메모이제이션/디바운스 등 실무 클로저 활용 패턴 (Day 4)
- [x] Prototype chain 조회 알고리즘과 섀도잉(shadowing) 원리 (Day 5)
- [x] `class`가 실제로 만드는 프로토타입 링크 구조와 ES5 방식과의 차이 (Day 5)
- [x] `Object.create(null)`과 프로토타입 오염(prototype pollution)의 관계 (Day 5)
- [x] `this` 4가지 바인딩 규칙(new/명시적/암시적/기본)과 우선순위 (Day 6)
- [x] 화살표 함수가 렉시컬 스코프의 `this`를 물려받는 예외 원리 (Day 6)
- [x] `call`/`apply`/`bind`의 차이와 하드 바인딩이 `new`에는 예외적으로 재정의되는 규칙 (Day 6)
- [x] CommonJS(동기/동적)와 ESM(정적/2단계 로딩)의 실행 모델 차이와 live binding vs 값 복사 (Day 7)
- [x] 순환 참조에서 CJS가 부분 스냅샷을 돌려주는 이유와 ESM의 TDZ/호이스팅 차이 (Day 7)
- [x] 트리쉐이킹이 ESM 정적 분석에 의존하는 이유와 CJS에서 실패하는 패턴 (Day 7)
- [x] 번들러 interop(default export 변환)과 dual package hazard, `exports` 필드 (Day 7)
- [ ] Promise 상태 머신과 에러 전파 규칙 (예정 Day 9)
- [ ] Promise가 취소 불가능한 근본 이유 (예정 Day 11)
- [ ] 메모리 누수 진단 절차 (예정 Day 15)
