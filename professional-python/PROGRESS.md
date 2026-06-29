# 실무자 기준 Python 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-29 | Pythonic 이디엄 — 컴프리헨션·제너레이터·언패킹·컨텍스트 매니저 | [0001-pythonic-idioms.html](lessons/0001-pythonic-idioms.html) |
| 2 | 2026-06-29 | 타입 힌트 실전 — typing, TypeVar, Protocol, TypedDict, mypy | [0002-type-hints.html](lessons/0002-type-hints.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| ~~2~~ | ~~타입 힌트 실전~~ | ~~완료~~ |
| 3 | 예외 처리 설계 | 커스텀 예외 계층, `raise … from`, `__cause__` / `__context__`, ExceptionGroup |
| 4 | 프로젝트 구조와 패키징 | `src` 레이아웃, `pyproject.toml`, build backend, wheel 빌드 |
| 5 | 의존성 관리 | `venv`, `pip-tools`, poetry, lock 파일, 결정론적 빌드 |
| 6 | pytest 실전 | fixture, `conftest.py`, parametrize, mock, coverage |
| 7 | 디버깅 & 로깅 | `pdb` / `breakpoint()`, logging 계층, 포매터, 핸들러 |
| 8 | 프로파일링 & 최적화 | `cProfile`, `line_profiler`, `memory_profiler`, `timeit` |
| 9 | 표준 라이브러리 심화 | `collections`, `itertools`, `functools`, `pathlib`, `dataclasses` |
| 10 | 동시성 | `threading`, `multiprocessing`, `asyncio`, `concurrent.futures` |
| 11 | 유지보수성 | `ruff` / `black`, docstring 컨벤션, pre-commit, CI 린팅 |

## 현재 학습 위치

**Day 2 완료** — Day 3 (예외 처리 설계) 진행 예정.

## 습득한 핵심 개념

- [x] 리스트·딕셔너리·셋 컴프리헨션 (Day 1)
- [x] 제너레이터 표현식과 `yield` (Day 1)
- [x] 확장 언패킹 `*rest`, `**kwargs` 패턴 (Day 1)
- [x] `with` 문과 `contextlib.contextmanager` (Day 1)
- [x] `walrus operator (:=)` 활용 (Day 1)
- [x] `enumerate`, `zip`, `zip_longest` (Day 1)
- [x] `typing` 모듈 — `Optional`, `Union`, `TypeVar`, `Generic` (Day 2)
- [x] `Protocol`로 구조적 서브타이핑 (Day 2)
- [x] `TypedDict`, `Literal`, `Final` 활용 (Day 2)
- [x] mypy 프로젝트 설정 및 타입 좁히기 (Day 2)
- [ ] 커스텀 예외 계층 설계 (예정 Day 3)
- [ ] `pyproject.toml` 기반 패키징 (예정 Day 4)
- [ ] pytest 픽스처와 `conftest.py` (예정 Day 6)
- [ ] `asyncio` 이벤트 루프 모델 (예정 Day 10)
