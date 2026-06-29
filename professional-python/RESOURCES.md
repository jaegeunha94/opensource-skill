# 실무자 기준 Python Resources

## Knowledge

- [Book: _Fluent Python_ (2nd ed.) — Luciano Ramalho (O'Reilly)](https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/)
  실무 Python의 바이블. Pythonic 코드, 데이터 모델, 동시성까지 심층 설명. 전 레슨에 걸쳐 기본 참고서.

- [Book: _Effective Python_ (3rd ed.) — Brett Slatkin (Addison-Wesley)](https://effectivepython.com/)
  90개의 구체적인 항목으로 실무 패턴을 다룬다. 타입 힌트, 메타클래스, 동시성 챕터가 특히 유용.

- [PEP 8 — Style Guide for Python Code](https://peps.python.org/pep-0008/)
  공식 코드 스타일 가이드. 코드 리뷰 기준의 공통 언어.

- [PEP 484 / 526 / 544 / 585 / 604 — Type Hints 시리즈](https://peps.python.org/pep-0484/)
  타입 힌트의 공식 스펙. `typing`, `Protocol`, 제네릭 사용법의 근거 문서.

- [Python Docs: typing 모듈](https://docs.python.org/3/library/typing.html)
  표준 타입 힌트 레퍼런스. Use for: `TypeVar`, `Generic`, `Protocol`, `TypedDict` 사용법.

- [Python Docs: unittest.mock](https://docs.python.org/3/library/unittest.mock.html)
  표준 mocking 레퍼런스. pytest-mock과 함께 사용 시 참고.

- [pytest 공식 문서](https://docs.pytest.org/en/stable/)
  픽스처, 파라미터화, 플러그인 생태계 전반. Use for: 테스트 레슨 전 범위.

- [Python Packaging User Guide](https://packaging.python.org/en/latest/)
  pyproject.toml, build backend, PyPI 배포 공식 가이드.

- [Real Python — Concurrency and Async IO in Python](https://realpython.com/python-concurrency/)
  threading / multiprocessing / asyncio 세 가지 모델을 비교하며 설명. 동시성 레슨 주 참고.

- [Python Docs: logging HOWTO](https://docs.python.org/3/howto/logging.html)
  공식 로깅 가이드. Use for: 로거 계층, 핸들러, 포매터 설정.

- [cProfile 공식 문서](https://docs.python.org/3/library/profile.html)
  표준 프로파일러 레퍼런스.

## Wisdom (Communities)

- [Python Discord](https://pythondiscord.com/)
  활성화된 Python 커뮤니티. 코드 리뷰 채널이 별도로 존재해 실무 피드백을 받기 좋다.

- [r/Python](https://www.reddit.com/r/Python/)
  뉴스, 라이브러리 소개, 토론. 시그널 대비 노이즈가 낮은 편.

- [r/learnpython](https://www.reddit.com/r/learnpython/)
  질문 친화적인 커뮤니티. 실무 패턴 관련 질문에도 적극적으로 응답.

## Gaps

- 대규모 모노레포에서의 Python 프로젝트 관리 (Bazel, pants) — 아직 고품질 단일 소스 없음.
