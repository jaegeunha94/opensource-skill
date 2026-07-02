# JavaScript 시니어 인터뷰 — 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | JavaScript 실행 모델과 이벤트 루프 답변 프레임워크 — 코드 실행 순서를 예측하는 사고법 | [0001-js-execution-model-event-loop-framework.html](lessons/0001-js-execution-model-event-loop-framework.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 2 | Execution Context와 Call Stack 심화 | Creation/Execution 단계, Hoisting, TDZ, 스택 오버플로우 |
| 3 | Scope Chain과 Lexical Scoping | `var`/`let`/`const`, 블록 스코프, 스코프 체인 조회 비용 |
| 4 | Closure 심화 | 클로저의 실제 메모리 모델, 반복문 클로저 버그, 실무 활용 패턴 |
| 5 | Prototype과 객체 모델 | Prototype chain, `class`는 syntactic sugar, `Object.create` |
| 6 | `this` 바인딩 규칙 | 4가지 바인딩 규칙, `call`/`apply`/`bind`, 화살표 함수의 `this` |
| 7 | Module 시스템 | CommonJS vs ESM, 순환 참조, 트리쉐이킹, 번들러 경계 |
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

**Day 1 완료** — 다음: Day 2 — Execution Context와 Call Stack 심화

## 습득한 핵심 개념

- [x] Call Stack / Web API / Task Queue / Microtask Queue의 역할 구분 (Day 1)
- [x] 실행 순서 예측 6단계 프레임워크 (Day 1)
- [x] Microtask 큐가 Macrotask보다 항상 먼저 전부 소진된다는 규칙 (Day 1)
- [x] `setTimeout(fn, 0)`이 "즉시 실행"을 의미하지 않는 이유 (Day 1)
- [x] 브라우저 렌더링이 Event Loop의 어느 지점에 끼어드는지 (Day 1)
- [ ] Hoisting과 TDZ가 실제로 만드는 버그 (예정 Day 2)
- [ ] 스코프 체인 조회 비용과 클로저 메모리 모델 (예정 Day 3~4)
- [ ] Prototype chain과 `class` 문법의 실체 (예정 Day 5)
- [ ] `this` 4가지 바인딩 규칙과 화살표 함수 예외 (예정 Day 6)
- [ ] Promise 상태 머신과 에러 전파 규칙 (예정 Day 9)
- [ ] Promise가 취소 불가능한 근본 이유 (예정 Day 11)
- [ ] 메모리 누수 진단 절차 (예정 Day 15)
