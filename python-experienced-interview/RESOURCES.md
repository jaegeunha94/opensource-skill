# 파이썬 경력자 Interview 학습 리소스

## 공식 문서 및 레퍼런스

| 리소스 | 설명 | 용도 |
|--------|------|------|
| [Python Data Model (공식 문서)](https://docs.python.org/3/reference/datamodel.html) | CPython 데이터 모델 완전 명세 | data model, dunder 메서드 |
| [Python Language Reference](https://docs.python.org/3/reference/) | 실행 모델, 표현식, 문 명세 | 실행 모델, 네임스페이스 |
| [asyncio 공식 문서](https://docs.python.org/3/library/asyncio.html) | 이벤트 루프, coroutine, Task, Future | 비동기 프로그래밍 |
| [typing 모듈 공식 문서](https://docs.python.org/3/library/typing.html) | 타입 힌트 시스템 | typing, Protocol, Generic |
| [gc 모듈 공식 문서](https://docs.python.org/3/library/gc.html) | 가비지 컬렉터 API | 메모리 관리 |

## 핵심 도서

| 도서 | 저자 | 용도 |
|------|------|------|
| Fluent Python (2nd ed.) | Luciano Ramalho | data model, 고급 패턴 전체 |
| Python Cookbook (3rd ed.) | David Beazley, Brian K. Jones | 실무 패턴, iterator, decorator |
| High Performance Python (2nd ed.) | Micha Gorelick, Ian Ozsvald | 성능, profiling, GIL |
| CPython Internals | Anthony Shaw | CPython 내부, 바이트코드, GIL |
| Architecture Patterns with Python | Harry Percival, Bob Gregory | 유지보수성, 설계 패턴 |

## 영상 강의

| 강의 | 설명 |
|------|------|
| [David Beazley — Python Concurrency From the Ground Up (PyCon 2015)](https://www.youtube.com/watch?v=MCs5OvhV9S4) | GIL, threading, asyncio 원리 |
| [Raymond Hettinger — Super considered super! (PyCon 2015)](https://www.youtube.com/watch?v=EiOglTERPEo) | Python MRO, OOP 심화 |
| [James Powell — So you want to be a Python expert? (PyData 2017)](https://www.youtube.com/watch?v=cKPlPJyQrt4) | data model, descriptor, metaclass |
| [Łukasz Langa — AsyncIO + Music (PyCon 2020)](https://www.youtube.com/watch?v=02CLD-42VdI) | asyncio 실전 |

## 인터뷰 준비 자료

| 리소스 | 설명 |
|--------|------|
| [Real Python — Python Interviews](https://realpython.com/interview-questions/) | 실전 인터뷰 질문 모음 |
| [python-interview-questions (GitHub)](https://github.com/sigmapie8/python-interview-questions) | 커뮤니티 인터뷰 질문 |

## CPython 소스 탐색

| 리소스 | 설명 |
|--------|------|
| [CPython GitHub](https://github.com/python/cpython) | 레퍼런스 카운팅, GIL, 바이트코드 실제 구현 확인 |
| [Python Insider Blog](https://blog.python.org/) | Python 릴리스 노트, 변경 이유 |
