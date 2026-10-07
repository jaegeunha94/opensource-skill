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
| 8 | 2026-07-07 | Redis Streams와 메시지 처리 | [0008-redis-streams-message-processing.html](lessons/0008-redis-streams-message-processing.html) |
| 9 | 2026-07-08 | Redis Persistence — RDB vs AOF | [0009-persistence-rdb-vs-aof.html](lessons/0009-persistence-rdb-vs-aof.html) |
| 10 | 2026-07-09 | Eviction Policy와 메모리 사이징 | [0010-eviction-policy-memory-sizing.html](lessons/0010-eviction-policy-memory-sizing.html) |
| 11 | 2026-10-05 | Redis Pipelining·Lua·Transaction — round trip과 원자성 | [0011-pipelining-lua-scripting-transaction.html](lessons/0011-pipelining-lua-scripting-transaction.html) |
| 12 | 2026-10-07 | Redis Replication과 Latency — 지연의 분모와 복제 보장 | [0012-replication-lag-latency-evidence.html](lessons/0012-replication-lag-latency-evidence.html) |

## 다음 예정 학습


| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 13 | Redis 장애 대응과 운영 패턴 | Sentinel, Cluster, Failover, 장애 격리 |
## 현재 학습 위치

**Day 12 레슨 작성 완료** — 다음은 Day 13 Redis 장애 대응과 운영 패턴.

레슨 작성 상태를 기록했으며, 학습자의 이해·연습 완료는 별도 확인이 필요하다.

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
- [x] Redis Streams / Consumer Group / PEL / XAUTOCLAIM (Day 8)
- [x] RDB vs AOF 판단, fork/COW 운영 리스크 (Day 9)
- [x] Eviction Policy(noeviction/LRU/LFU/random/ttl)와 메모리 사이징 (Day 10)
- [x] Pipelining · Lua Scripting · Transaction  (Day 11)
- [x] Replication과 Latency 진단 (Day 12 레슨 작성)
- [ ] Redis 장애 대응 (Sentinel/Cluster/Failover) (예정 Day 13)

- [x] Redis Replication과 Latency — 지연의 분모와 복제 보장 — Day 12 레슨 작성; 이해 확인은 레슨 자기 점검으로 진행
