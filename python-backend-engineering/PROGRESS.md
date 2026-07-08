# Backend 구성을 위한 Python 실무자 기준 학습 — 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-29 | Python 백엔드 아키텍처 전체 구조 개요 | [0001-python-backend-architecture-overview.html](lessons/0001-python-backend-architecture-overview.html) |
| 2 | 2026-06-30 | API 설계 원칙 — REST, OpenAPI, FastAPI 실전 | [0002-api-design-principles.html](lessons/0002-api-design-principles.html) |
| 3 | 2026-07-01 | 데이터 모델링과 ORM — SQLAlchemy 2.x, Alembic 실전 | [0003-data-modeling-and-orm.html](lessons/0003-data-modeling-and-orm.html) |
| 4 | 2026-07-02 | 서비스 경계 설계 — 레이어드 아키텍처, Repository 패턴 | [0004-service-boundaries.html](lessons/0004-service-boundaries.html) |
| 5 | 2026-07-03 | 트랜잭션과 동시성 — ACID, 격리 수준, 낙관적/비관적 잠금, 데드락 방지 | [0005-transactions-and-concurrency.html](lessons/0005-transactions-and-concurrency.html) |
| 6 | 2026-07-04 | 인증과 인가 — JWT 구조와 검증, OAuth2 Password Flow, RBAC, 토큰 갱신 전략 | [0006-authentication-and-authorization.html](lessons/0006-authentication-and-authorization.html) |
| 7 | 2026-07-05 | 백그라운드 작업 — Celery + Redis 아키텍처, 재시도 전략, 태스크 멱등성 | [0007-background-jobs.html](lessons/0007-background-jobs.html) |
| 8 | 2026-07-06 | 관측성 — 구조화 로깅, Prometheus 메트릭, OpenTelemetry 트레이싱 | [0008-observability.html](lessons/0008-observability.html) |
| 9 | 2026-07-07 | 배포와 운영 — Docker 최적화, Compose, 헬스체크, 환경 변수, CI/CD | [0009-deployment-and-operations.html](lessons/0009-deployment-and-operations.html) |
| 10 | 2026-07-08 | 캐싱과 성능 최적화 — Redis 캐싱 전략과 무효화, 캐시 스탬피드 방지, 응답 압축, 커넥션 풀 튜닝, 쿼리 성능 프로파일링 | [0010-caching-and-performance.html](lessons/0010-caching-and-performance.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 11 | 테스트 전략 — 단위/통합 테스트 경계, 계약 테스트, 부하 테스트 | 테스트 피라미드, pytest 통합 테스트, API 계약 테스트, Locust 부하 테스트 |

## 현재 학습 위치

**Day 10 완료** — 다음: Day 11 — 테스트 전략 (단위/통합 테스트 경계, 계약 테스트, 부하 테스트).

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
- [x] SQLAlchemy 2.x 선언적 모델과 Data Mapper 패턴 (Day 3)
- [x] 관계 매핑과 cascade 정책 (Day 3)
- [x] N+1 문제와 로딩 전략 (selectinload, joinedload) (Day 3)
- [x] Async Engine/Session 설정 (Day 3)
- [x] Alembic 마이그레이션과 무중단 배포 순서 (Day 3)
- [x] 레이어드 아키텍처와 의존성 역전 원칙 (Day 4)
- [x] Repository 패턴 — 영속성 추상화 (Day 4)
- [x] 도메인 서비스 vs 응용 서비스 구분 (Day 4)
- [x] FastAPI Depends를 이용한 레이어 조립 (Day 4)
- [x] ACID와 트랜잭션 격리 수준 (Day 5)
- [x] 낙관적 잠금 vs 비관적 잠금 선택 기준 (Day 5)
- [x] 데드락 원인과 잠금 순서 예방 전략 (Day 5)
- [x] 비밀번호 해싱(bcrypt/argon2)과 안전한 저장 (Day 6)
- [x] JWT 구조, 서명 검증, 알고리즘 혼동 공격 방지 (Day 6)
- [x] OAuth2 Password Flow와 FastAPI Depends 인증 조립 (Day 6)
- [x] Access/Refresh Token 분리와 Refresh Token Rotation (Day 6)
- [x] RBAC와 소유권 기반 인가(IDOR 방지) (Day 6)
- [x] Celery + Redis 태스크 큐 아키텍처 (Broker/Worker/Result Backend) (Day 7)
- [x] 태스크 멱등성 설계 (상태 체크, Idempotency Key, UPSERT) (Day 7)
- [x] 재시도 전략 (autoretry_for, backoff, jitter, max_retries) (Day 7)
- [x] acks_late의 유실/중복 트레이드오프와 Dead Letter 처리 (Day 7)
- [x] 태스크 직렬화 보안 (pickle 대신 json) (Day 7)
- [x] structlog 기반 구조화 로깅과 이벤트 이름 설계 (Day 8)
- [x] request_id/contextvars를 이용한 요청 컨텍스트 전파 (Day 8)
- [x] Prometheus Counter/Gauge/Histogram과 라벨 cardinality 설계 (Day 8)
- [x] OpenTelemetry 분산 트레이싱과 trace/span 모델 (Day 8)
- [x] SLI/SLO/Error Budget과 알림 설계(alert fatigue 방지) (Day 8)
- [x] Multi-stage Dockerfile과 레이어 캐싱 최적화 (Day 9)
- [x] Docker Compose 헬스체크 기반 서비스 기동 순서 제어 (Day 9)
- [x] Liveness vs Readiness 구분과 재시작 폭풍 방지 (Day 9)
- [x] Graceful Shutdown — SIGTERM 처리와 커넥션 정리 (Day 9)
- [x] 12-Factor Config와 시크릿 런타임 주입 (Day 9)
- [x] CI/CD 파이프라인 — 테스트/린트 게이팅, 불변 이미지 태깅, 마이그레이션-배포 순서 (Day 9)
- [x] Cache-Aside / Write-Through / Write-Behind 전략 비교와 선택 기준 (Day 10)
- [x] 캐시 무효화 — "invalidate, don't update" 원칙과 버전 키 설계 (Day 10)
- [x] 캐시 스탬피드(Thundering Herd) 원리와 분산 락/확률적 조기 갱신 대응 (Day 10)
- [x] 응답 압축의 CPU-대역폭 trade-off와 최소 크기 임계값 설정 (Day 10)
- [x] DB/Redis 커넥션 풀 크기 산정 기준과 풀 고갈 위험 (Day 10)
- [x] EXPLAIN ANALYZE와 슬로우 쿼리 로깅 기반 성능 진단 절차 (Day 10)
- [ ] 테스트 피라미드와 단위/통합/계약/부하 테스트 경계 (예정 Day 11)
