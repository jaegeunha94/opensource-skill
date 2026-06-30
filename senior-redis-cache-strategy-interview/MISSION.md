# Redis / 캐시 전략 — 10년차 이상 개발자 Interview 대비

## 학습 목표

10년차 이상 백엔드 개발자 인터뷰에서 평가하는 Redis 및 캐시 설계 역량을 체계적으로 준비한다.

단순 명령어 암기나 "Redis 써봤어요"가 아니라, 면접관이 기대하는 수준인:

- **캐시 적용 판단**: 언제 캐시를 써야 하고 쓰지 말아야 하는지 구조화된 이유
- **설계 수준의 사고**: 캐시 전략 선택, TTL 설계, 무효화 전략, 장애 시나리오
- **트레이드오프 언어**: 일관성 vs 성능, 복잡도 vs 속도 간의 명확한 설명
- **운영 경험**: 캐시 스탬피드, hot key, eviction, persistence 운영 판단

을 면접 현장에서 자연스럽게 말할 수 있도록 훈련한다.

## 전제 지식

- HTTP API 개발 경험 (REST 또는 GraphQL)
- RDB(MySQL/PostgreSQL) 기본 사용 경험
- Redis 기본 사용 경험 (설치 및 GET/SET 수준 이상)

Redis 내부 구조나 Lua 스크립트를 모르더라도, **실무 설계 판단 능력**을 중심으로 진행한다.

## 커리큘럼 개요

| Day | 주제 | 핵심 개념 |
|-----|------|-----------|
| 1 | 캐시 전략과 Redis 사용 판단 프레임워크 | Cache-aside, Write-through, 도입 판단 기준 |
| 2 | TTL 설계와 캐시 무효화 전략 | TTL, Event-based invalidation, 무효화 패턴 |
| 3 | 캐시 스탬피드와 Hot Key 문제 | Dog-pile effect, Mutex lock, Local cache |
| 4 | Redis 자료구조 실무 선택 기준 | String, Hash, List, Set, Sorted Set, 사용 판단 |
| 5 | 세션 저장소와 분산 락 | Session store, Redlock, 분산 환경 락 설계 |
| 6 | 랭킹 시스템과 Sorted Set | Sorted Set, ZADD, ZRANGE, 실시간 랭킹 |
| 7 | Pub/Sub과 이벤트 처리 | SUBSCRIBE, PUBLISH, Pub/Sub vs Kafka |
| 8 | Redis Persistence — RDB vs AOF | Snapshot, Append-only, 운영 판단 |
| 9 | Eviction Policy와 메모리 관리 | LRU, LFU, noeviction, maxmemory 설계 |
| 10 | Redis 장애 대응과 운영 패턴 | Redis Sentinel, Cluster, Failover, 장애 격리 |

## 학습 원칙

1. 각 레슨은 면접 질문 → 개념 → 실무 → 모범 답변 → 약한 답변 비교 순서로 진행한다.
2. 개념 설명은 "왜 이게 문제가 되는지"부터 시작한다.
3. 모든 설명은 한국어로 하되, Redis 명령어와 기술 용어는 원어를 병기한다.
4. 각 레슨 마지막에는 자기 점검 rubric으로 학습 수준을 확인한다.
