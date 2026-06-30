# Backend 구성을 위한 Python 실무자 기준 학습 — 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-29 | Python 백엔드 아키텍처 전체 구조 개요 | [0001-python-backend-architecture-overview.html](lessons/0001-python-backend-architecture-overview.html) |
| 2 | 2026-06-30 | API 설계 원칙 — REST, OpenAPI, FastAPI 실전 | [0002-api-design-principles.html](lessons/0002-api-design-principles.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 3 | 데이터 모델링과 ORM | SQLAlchemy 2.x 모델, Alembic 마이그레이션, Pydantic ↔ ORM 분리 |
| 4 | 서비스 경계 설계 | 레이어드 아키텍처, Repository 패턴, 도메인 서비스 vs 응용 서비스 |
| 5 | 트랜잭션과 동시성 | ACID, 격리 수준, 낙관적/비관적 잠금, 데드락 방지 |
| 6 | 인증과 인가 | JWT 구조와 검증, OAuth2 Password Flow, RBAC, 토큰 갱신 전략 |
| 7 | 백그라운드 작업 | Celery + Redis 아키텍처, 재시도 전략, 태스크 幂等성 |
| 8 | 관측성 | 구조화 로깅, Prometheus 메트릭, OpenTelemetry 트레이싱 |
| 9 | 배포와 운영 | Docker 이미지 최적화, Compose, 헬스체크, 환경 변수 관리, CI/CD |

## 현재 학습 위치

**Day 2 완료** — Day 3 (데이터 모델링과 ORM)으로 진행 예정.

## 습득한 핵심 개념

- [x] Python 백엔드 아키텍처의 전체 구조와 계층 (Day 1)
- [x] 프레임워크 선택 기준: FastAPI vs Django vs Flask (Day 1)
- [x] 요청 수명 주기 (Request Lifecycle) (Day 1)
- [x] 실무 프로젝트 디렉터리 구조 (Day 1)
- [x] REST API 설계 원칙 (Day 2)
- [x] HTTP 메서드 의미론과 Safe/Idempotent 속성 (Day 2)
- [x] HTTP 상태 코드 실무 선택 기준 (Day 2)
- [x] URL 설계 원칙과 API 버전 관리 (Day 2)
- [x] Pydantic v2 스키마 설계 — Request/Response/DB 분리 (Day 2)
- [x] FastAPI 라우터 구조와 Dependency Injection (Day 2)
- [x] 에러 응답 표준화 (Day 2)
- [x] OpenAPI 자동 생성과 하위 호환성 관리 (Day 2)
- [ ] SQLAlchemy 2.x ORM (예정 Day 3)
- [ ] 마이그레이션 전략 (예정 Day 3)
- [ ] 레이어드 아키텍처 (예정 Day 4)
- [ ] ACID와 격리 수준 (예정 Day 5)
- [ ] JWT 인증 흐름 (예정 Day 6)
- [ ] Celery 태스크 설계 (예정 Day 7)
- [ ] 구조화 로깅 (예정 Day 8)
- [ ] Docker 배포 패턴 (예정 Day 9)
