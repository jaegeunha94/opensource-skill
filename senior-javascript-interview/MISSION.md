# JavaScript 10년차 이상 개발자 Interview 학습 미션

## 목표

10년차 이상 프론트엔드/JavaScript 시니어 개발자로서 기술 인터뷰에서 요구되는 수준의 **실행 모델 사고력**을 입증한다.

단순히 "클로저는 함수가 자신이 선언된 렉시컬 스코프를 기억하는 것이다" 같은 정의 암기나, 코딩테스트용 문법 퀴즈가 아니라 다음을 명확히 설명하고 방어할 수 있어야 한다:

- **실행 모델을 정확히 그리는 능력**: Call Stack, Web API, Task Queue, Microtask Queue가 실제로 어떻게 상호작용하는지, 코드 한 줄 한 줄이 어느 시점에 실행되는지 예측하는 능력
- **비동기 동작의 근본 원리**: Promise의 상태 머신, `async`/`await`이 왜 microtask 기반으로 동작하는지, 취소가 왜 어려운지
- **브라우저 성능에 대한 판단**: 이벤트 위임, 메모리 누수, GC, 렌더링과 JS 실행의 관계, DevTools로 병목을 특정하는 절차
- **유지보수 가능한 애플리케이션 로직 설계**: 모듈 경계, `this`/스코프로 인한 버그를 피하는 설계, 에러 처리 전략
- **Production debugging 능력**: 간헐적 버그, 메모리 누수, 느려지는 UI를 재현·격리·근본 원인 규명하는 절차
- **TypeScript와의 경계 판단**: 언제 타입 시스템이 실제 안전성을 주는지, 언제 런타임 검증이 여전히 필요한지 구분하는 판단력

## 대상 역할

- 프론트엔드/풀스택 시니어 엔지니어 (10년차 이상)
- 대규모 SPA, 성능이 중요한 웹 애플리케이션, 프로덕션 장애 대응에 관여하는 역할

## 전제 지식

이 워크스페이스는 다음을 이미 안다고 가정한다:

- JavaScript로 실제 프로덕션 코드를 작성한 경험 (함수, 배열/객체 메서드, ES6+ 문법 기본 사용)
- `setTimeout`, `fetch`, `Promise` 같은 비동기 API를 사용해본 경험
- 브라우저 개발자도구를 열어본 경험

`var`가 무엇인지, 함수 선언 문법이 무엇인지 같은 기초 문법 설명은 반복하지 않는다. 대신 그 문법 뒤에 있는 실행 모델과, 실무에서 그것이 왜 버그·성능 문제로 이어지는지를 다룬다.

## 평가 대상 역량

| 역량 | 세부 항목 |
|------|----------|
| 실행 모델 | Execution Context, Call Stack, Scope Chain, Hoisting, TDZ |
| 객체 모델 | Prototype chain, `class`의 실체, `this` 바인딩 규칙 |
| 모듈 시스템 | CommonJS vs ESM, 순환 참조, 트리쉐이킹, 번들링 경계 |
| 비동기 모델 | Event Loop, Microtask/Macrotask, Promise 상태 머신, `async`/`await` |
| 동시성 제어 | Cancellation, AbortController, race condition, debounce/throttle |
| 브라우저 통합 | DOM Event, Capturing/Bubbling, Event Delegation, 주요 Browser API |
| 메모리 관리 | GC 동작 원리, 메모리 누수 패턴, WeakMap/WeakRef |
| 에러 처리 | 동기/비동기 에러 전파, 전역 에러 핸들링, 복구 전략 |
| 성능 | DevTools 프로파일링, Long Task, Web Vitals, 렌더링과 JS의 관계 |
| 타입 시스템 판단 | TypeScript가 주는 것과 못 주는 것, 런타임 검증과의 경계 |

## 성공 기준

- 면접관이 `setTimeout`/`Promise`가 섞인 코드를 보여주고 "실행 순서를 말해보세요"라고 물었을 때, 추측이 아니라 실행 모델 기반으로 즉시 답할 수 있다
- "이 페이지가 몇 분 쓰면 느려집니다"라는 리포트에 메모리 누수 진단 절차를 순서대로 설명할 수 있다
- 클로저, 프로토타입, `this`가 실제로 만들어내는 프로덕션 버그 사례를 최소 하나씩 구체적으로 설명할 수 있다
- Promise 취소가 왜 근본적으로 불가능하고 `AbortController`가 무엇을 대신 해결하는지 설명할 수 있다
- 이벤트 위임이 왜 필요한지를 DOM 노드 수와 메모리·성능 관점에서 설명할 수 있다
- "이 프로젝트에 TypeScript를 도입해야 할까요?"라는 질문에 트레이드오프 기반으로 답할 수 있다
