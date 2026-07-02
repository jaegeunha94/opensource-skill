# Redis / 캐시 전략 Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 캐시 전략과 Redis 사용 판단 프레임워크 | [0001-cache-strategy-redis-decision-framework.html](lessons/0001-cache-strategy-redis-decision-framework.html) |
| 2 | 2026-07-01 | TTL 설계와 캐시 무효화 전략 | [0002-ttl-design-cache-invalidation.html](lessons/0002-ttl-design-cache-invalidation.html) |
| 3 | 2026-07-02 | 캐시 스탬피드와 Hot Key 문제 | [0003-cache-stampede-hot-key.html](lessons/0003-cache-stampede-hot-key.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 4 | Redis 자료구조 실무 선택 기준 | String, Hash, List, Set, Sorted Set 선택 판단 |
| 5 | 세션 저장소와 분산 락 | Session store 설계, Redlock 알고리즘, 분산 락 패턴 |
| 6 | 랭킹 시스템과 Sorted Set | ZADD, ZRANGE, 실시간 랭킹 갱신 전략 |
| 7 | Pub/Sub과 이벤트 처리 | SUBSCRIBE, PUBLISH, Pub/Sub vs Kafka 판단 |
| 8 | Redis Persistence — RDB vs AOF | Snapshot, Append-only log, 운영 판단 |
| 9 | Eviction Policy와 메모리 관리 | LRU, LFU, noeviction, maxmemory 설계 |
| 10 | Redis 장애 대응과 운영 패턴 | Sentinel, Cluster, Failover, 장애 격리 |

## 현재 학습 위치

**Day 3 완료** — 다음: Day 4 — Redis 자료구조 실무 선택 기준

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
- [ ] Redis 자료구조 선택 기준 (예정 Day 4)
- [ ] 세션 저장소 설계 (예정 Day 5)
- [ ] 분산 락 (Redlock) (예정 Day 5)
- [ ] 실시간 랭킹 설계 (예정 Day 6)
- [ ] Pub/Sub 패턴 (예정 Day 7)
- [ ] RDB vs AOF 판단 (예정 Day 8)
- [ ] Eviction Policy 설계 (예정 Day 9)
- [ ] Redis 장애 대응 (예정 Day 10)
