# Redis / 캐시 전략 Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 캐시 전략과 Redis 사용 판단 프레임워크 | [0001-cache-strategy-redis-decision-framework.html](lessons/0001-cache-strategy-redis-decision-framework.html) |
| 2 | 2026-07-01 | TTL 설계와 캐시 무효화 전략 | [0002-ttl-design-cache-invalidation.html](lessons/0002-ttl-design-cache-invalidation.html) |
| 3 | 2026-07-02 | 캐시 스탬피드와 Hot Key 문제 | [0003-cache-stampede-hot-key.html](lessons/0003-cache-stampede-hot-key.html) |
| 4 | 2026-07-03 | Redis 자료구조 실무 선택 기준 | [0004-redis-data-structure-selection.html](lessons/0004-redis-data-structure-selection.html) |
| 5 | 2026-07-04 | 세션 저장소와 분산 락 | [0005-session-store-distributed-lock.html](lessons/0005-session-store-distributed-lock.html) |
| 6 | 2026-07-05 | 랭킹 시스템과 Sorted Set | [0006-ranking-sorted-set.html](lessons/0006-ranking-sorted-set.html) |
| 7 | 2026-07-06 | Pub/Sub과 이벤트 처리 | [0007-pubsub-event-processing.html](lessons/0007-pubsub-event-processing.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 8 | Redis Streams와 메시지 처리 | Streams, Consumer Group, Pub/Sub과의 차이 |
| 9 | Redis Persistence — RDB vs AOF | Snapshot, Append-only log, 운영 판단 |
| 10 | Eviction Policy와 메모리 사이징 | LRU, LFU, noeviction, maxmemory, 메모리 용량 산정 |
| 11 | Pipelining · Lua Scripting · Transaction | Pipelining, EVAL, MULTI/EXEC, 원자성 설계 |
| 12 | Replication과 Latency 진단 | Master-Replica 복제, 복제 지연, latency 진단 방법론 |
| 13 | Redis 장애 대응과 운영 패턴 | Sentinel, Cluster, Failover, 장애 격리 |

> Day 8, 11, 12는 Streams / Pipelining·Lua·Transaction / Replication·Latency 진단을 별도 Day로 다루기 위해
> 커리큘럼에 새로 추가되었다 (기존 계획에는 없던 인터뷰 필수 주제).

## 현재 학습 위치

**Day 7 완료** — 다음: Day 8 — Redis Streams와 메시지 처리

## 습득한 핵심 개념

- [x] 캐시 도입 판단 기준 (Day 1)
- [x] Cache-aside 패턴 (Day 1)
- [x] Write-through 패턴 (Day 1)
- [x] Write-behind 패턴 (Day 1)
- [x] 캐시 히트율과 성능 관계 (Day 1)
- [x] Redis vs Memcached 판단 기준 (Day 1)
- [x] TTL 설계 원칙 (Day 2)
- [x] 캐시 무효화 전략 (Day 2)
- [x] 캐시 스탬피드 방지 (Day 3)
- [x] Hot Key 문제 해결 (Day 3)
- [x] Redis 자료구조 선택 기준 (Day 4)
- [x] 세션 저장소 설계 (Day 5)
- [x] 분산 락 (Redlock) (Day 5)
- [x] 실시간 랭킹 설계 (Sorted Set, ZADD/ZRANGE/ZINCRBY) (Day 6)
- [x] Pub/Sub 패턴과 전달 보장 수준 (Day 7)
- [ ] Redis Streams / Consumer Group (예정 Day 8)
- [ ] RDB vs AOF 판단 (예정 Day 9)
- [ ] Eviction Policy와 메모리 사이징 (예정 Day 10)
- [ ] Pipelining · Lua Scripting · Transaction (예정 Day 11)
- [ ] Replication과 Latency 진단 (예정 Day 12)
- [ ] Redis 장애 대응 (Sentinel/Cluster/Failover) (예정 Day 13)
