# Mission: 실무자 기준 Python

## Why

기초 문법은 이미 알고 있다. 이 워크스페이스의 목표는 프로덕션 환경에서 동료와 협업하고, 유지보수 가능하고, 안정적으로 동작하는 Python 코드를 작성하는 역량을 갖추는 것이다. 단순히 동작하는 코드가 아니라 **리뷰를 통과하고 배포 후에도 살아남는 코드**를 쓸 수 있어야 한다.

## Success looks like

- Pythonic idiom을 자연스럽게 적용해 코드 가독성과 표현력을 높일 수 있다.
- 타입 힌트와 mypy를 사용해 정적 분석을 통과하는 코드를 작성할 수 있다.
- pytest로 단위 테스트·픽스처·모킹을 구성하고 커버리지를 측정할 수 있다.
- pyproject.toml 기반 프로젝트 구조로 패키지를 빌드하고 배포할 수 있다.
- poetry 또는 pip-tools로 의존성을 결정론적으로 관리할 수 있다.
- 예외 계층을 설계하고 적절한 컨텍스트를 보존하며 오류를 전파할 수 있다.
- pdb / logging으로 실 서비스 이슈를 빠르게 진단할 수 있다.
- cProfile, line_profiler로 병목을 찾아 최적화할 수 있다.
- asyncio / threading / multiprocessing을 상황에 맞게 선택해 쓸 수 있다.
- itertools, functools, collections, pathlib 등 표준 라이브러리를 적극 활용할 수 있다.

## Constraints

- 기초 문법(변수, 반복문, 함수, 클래스) 학습은 범위 밖이다 — 이미 알고 있다고 가정한다.
- 각 레슨은 한 세션에 완료할 수 있는 분량으로 제한한다.
- 실습 예제는 실무에서 마주치는 패턴을 중심으로 선정한다.

## Out of scope

- Python 기초 문법 입문 (변수, 조건문, 반복문, 함수 정의)
- 머신러닝·데이터 사이언스 스택 (NumPy, Pandas, PyTorch)
- 웹 프레임워크 (Django, FastAPI) 심화
