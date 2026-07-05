# 파이썬 경력자 Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-29 | Python Data Model — `__dunder__` 메서드와 객체 프로토콜 | [0001-python-data-model.html](lessons/0001-python-data-model.html) |
| 2 | 2026-06-30 | 메모리 관리 — 레퍼런스 카운팅, 가비지 컬렉션, 순환 참조, `__del__` | [0002-memory-management.html](lessons/0002-memory-management.html) |
| 3 | 2026-07-01 | GIL(Global Interpreter Lock) — 동시성 한계와 우회 전략 | [0003-gil-concurrency.html](lessons/0003-gil-concurrency.html) |
| 4 | 2026-07-02 | Iterator/Generator 프로토콜과 lazy evaluation | [0004-iterator-generator.html](lessons/0004-iterator-generator.html) |
| 5 | 2026-07-03 | asyncio와 이벤트 루프 — 협력적 멀티태스킹과 `await`의 실행 모델 | [0005-asyncio-event-loop.html](lessons/0005-asyncio-event-loop.html) |
| 6 | 2026-07-04 | Context Manager — 리소스 관리 패턴과 `with`의 실행 모델 | [0006-context-manager.html](lessons/0006-context-manager.html) |
| 7 | 2026-07-05 | Descriptor 프로토콜 — `__get__`/`__set__`/`__delete__`와 속성 접근의 실체 | [0007-descriptor-protocol.html](lessons/0007-descriptor-protocol.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 8 | Decorator — 함수형 패턴과 실무 활용 | closure, `functools.wraps`, 클래스 decorator, stacking |
| 9 | Python 실행 모델 | 바이트코드, CPython 인터프리터, 네임스페이스, LEGB |
| 10 | Typing — 타입 힌트 심화 | `Protocol`, `Generic`, `TypeVar`, `Literal`, `overload` |
| 11 | Testing 전략 | pytest fixture, mock, property-based testing, 테스트 격리 |
| 12 | Debugging과 Profiling | `pdb`, `cProfile`, `memory_profiler`, flamegraph |
| 13 | 패키징과 의존성 관리 | `pyproject.toml`, `poetry`, `pip`, virtual env, lock file |
| 14 | 표준 라이브러리 심화 | `collections`, `itertools`, `functools`, `pathlib`, `dataclasses` |
| 15 | 유지보수성과 코드 품질 | 설계 원칙, 리팩토링, 코드 리뷰 사고 |

## 현재 학습 위치

**Day 7 완료** — Day 8 (Decorator — 함수형 패턴과 실무 활용)부터 계속.

## 습득한 핵심 개념

- [x] Python data model 정의와 역할 (Day 1)
- [x] `__repr__` vs `__str__` 차이와 올바른 구현 (Day 1)
- [x] `__eq__`와 `__hash__` 계약(contract) — 왜 함께 정의해야 하는가 (Day 1)
- [x] `__len__`, `__getitem__`으로 시퀀스 프로토콜 구현 (Day 1)
- [x] `__bool__` 암묵적 진리값 평가 (Day 1)
- [x] 레퍼런스 카운팅 — `sys.getrefcount`, 카운트 증감 조건 (Day 2)
- [x] 순환 참조와 cyclic GC — generation 기반 수집 원리 (Day 2)
- [x] `weakref` — 순환 참조 해결 패턴, `WeakValueDictionary` (Day 2)
- [x] `__del__` 위험성 — 시점 불확실, 인터프리터 종료, 예외 묵살 (Day 2)
- [x] 메모리 진단 도구 — `tracemalloc`, `objgraph`, `gc` (Day 2)
- [x] `__slots__` — 대규모 인스턴스 메모리 최적화 (Day 2)
- [x] GIL 원리 — 레퍼런스 카운팅 원자성 문제, CPython 구현 특성 (Day 3)
- [x] CPU-bound vs I/O-bound와 GIL의 실제 영향 (Day 3)
- [x] threading vs multiprocessing 선택 기준과 비용 (Day 3)
- [x] C 확장의 GIL 해제 메커니즘 (Day 3)
- [x] Python 3.13+ No-GIL(PEP 703) 개요 (Day 3)
- [x] Iterable vs Iterator 프로토콜 구분 (Day 4)
- [x] Generator와 lazy evaluation, 메모리 곡선 (Day 4)
- [x] `send()`/`throw()`/`close()`, priming, `GeneratorExit` (Day 4)
- [x] `yield from` 위임과 코루틴의 역사적 연결 (Day 4)
- [x] 이벤트 루프와 협력적 멀티태스킹 모델 (Day 5)
- [x] coroutine / Task / Future 계층 구분과 스케줄링 시점 (Day 5)
- [x] 블로킹 호출이 이벤트 루프를 멈추는 원리와 진단·해결 (Day 5)
- [x] `gather` vs `create_task` vs `TaskGroup`, 취소와 예외 전파 (Day 5)
- [x] `with` 문의 동작 원리 — `__enter__`/`__exit__`와 `try/finally`의 동등성 (Day 6)
- [x] `__exit__` 반환값에 의한 예외 억제와 그 위험성 (Day 6)
- [x] `contextlib.contextmanager`와 제너레이터 기반 구현, 재진입 제약 (Day 6)
- [x] 다중 리소스 정리 순서와 `contextlib.ExitStack` (Day 6)
- [x] 속성 접근 탐색 순서 — data/non-data descriptor 우선순위 규칙 (Day 7)
- [x] `property`의 descriptor 기반 구현 원리 (Day 7)
- [x] 커스텀 descriptor 설계 — `__set_name__`, 상태 공유 함정 회피 (Day 7)
- [x] `functools.cached_property`가 non-data descriptor인 설계 의도 (Day 7)

- [ ] Decorator 구현 원리 (예정 Day 8)
