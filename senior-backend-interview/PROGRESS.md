# 백엔드 10년차 이상 개발자 Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-29 | 시스템 설계 기초 — URL Shortener 전체 설계 | [0001-system-design-fundamentals.html](lessons/0001-system-design-fundamentals.html) |
| 2 | 2026-06-30 | 데이터베이스 설계 & 트랜잭션 | [0002-database-design-and-transactions.html](lessons/0002-database-design-and-transactions.html) |
| 3 | 2026-07-01 | 확장성 패턴 | [0003-scalability-patterns.html](lessons/0003-scalability-patterns.html) |
| 4 | 2026-07-02 | 분산 시스템 & 일관성 | [0004-distributed-systems-and-consistency.html](lessons/0004-distributed-systems-and-consistency.html) |
| 5 | 2026-07-03 | API 설계 | [0005-api-design.html](lessons/0005-api-design.html) |
| 6 | 2026-07-04 | 동시성 & 비동기 처리 | [0006-concurrency-and-async-processing.html](lessons/0006-concurrency-and-async-processing.html) |
| 7 | 2026-07-05 | 신뢰성 & 장애 대응 | [0007-reliability-and-incident-response.html](lessons/0007-reliability-and-incident-response.html) |
| 8 | 2026-07-06 | 보안 | [0008-security.html](lessons/0008-security.html) |
| 9 | 2026-07-07 | 관측성 | [0009-observability.html](lessons/0009-observability.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| ~~2~~ | ~~데이터베이스 설계 & 트랜잭션~~ | ~~완료~~ |
| ~~3~~ | ~~확장성 패턴~~ | ~~완료~~ |
| ~~4~~ | ~~분산 시스템 & 일관성~~ | ~~완료~~ |
| ~~5~~ | ~~API 설계~~ | ~~완료~~ |
| ~~6~~ | ~~동시성 & 비동기 처리~~ | ~~완료~~ |
| ~~7~~ | ~~신뢰성 & 장애 대응~~ | ~~완료~~ |
| ~~8~~ | ~~보안~~ | ~~완료~~ |
| ~~9~~ | ~~관측성~~ | ~~완료~~ |
| 10 | 배포 & DevOps | CI/CD, 블루-그린, 카나리, 피처 플래그, 롤백 |
| 11 | 기술 리딩 | 설계 리뷰, 기술 부채 관리, RFC 프로세스, 멘토링 |
| 12 | 커뮤니케이션 & 케이스 스터디 | 비즈니스 번역, 갈등 해결, 실전 케이스 종합 |

## 현재 학습 위치

**Day 9 완료** — Day 10 (배포 & DevOps)이 다음 차례.

## 습득한 핵심 개념

- [x] 시스템 설계 면접 프레임워크 (요구사항 → 추정 → 설계 → 심화) (Day 1)
- [x] URL Shortener 전체 설계 (해시 전략, 캐싱, DB 선택, 가용성) (Day 1)
- [x] 좋은 답변 vs 약한 답변 구별 기준 (Day 1)
- [x] 트랜잭션 격리 수준과 실무 적용 (Day 2)
- [x] 인덱싱 전략과 쿼리 최적화 (Day 2)
- [x] 수평/수직 확장 판단 기준과 stateless 전환 (Day 3)
- [x] 샤딩 전략, 샤드 키 선택, Hot Shard 완화 (Day 3)
- [x] 레플리케이션, Replication Lag, Failover와 스플릿 브레인 (Day 3)
- [x] 캐싱 전략(Cache-Aside/Write-Through/Write-Behind), Cache Stampede/Penetration 방지 (Day 3)
- [x] CDN 동적 콘텐츠 캐싱 조건과 위험 (Day 3)
- [x] CAP 정리와 PACELC, 도메인별 CP/AP 선택 기준 (Day 4)
- [x] 일관성 모델(Strong/Eventual/Read-your-writes/Causal) 구분 (Day 4)
- [x] 분산 합의(Raft)의 Quorum 기반 스플릿 브레인 방지 원리 (Day 4)
- [x] 2PC의 블로킹 문제와 코디네이터 SPOF (Day 4)
- [x] Saga 패턴(Choreography/Orchestration)과 보상 트랜잭션 설계 (Day 4)
- [x] Richardson Maturity Model과 REST 성숙도 자가 진단 (Day 5)
- [x] REST/GraphQL/gRPC 프로토콜 선택 기준과 GraphQL N+1 대응 (Day 5)
- [x] API 버전 관리 전략과 Deprecation/sunset 설계 (Day 5)
- [x] 하위 호환성 판단(Breaking/Non-breaking)과 계약 테스트 (Day 5)
- [x] 낙관적/비관적 동시성 제어 선택 기준과 핫스팟 대응 (Day 6)
- [x] 분산 락의 TTL, 소유자 토큰, 펜싱 토큰, 데드락 예방 (Day 6)
- [x] 멱등키 설계와 재시도 안전성 확보 (Day 6)
- [x] 메시지 큐 at-least-once 전달과 컨슈머 측 중복 제거 (Day 6)
- [x] 서킷 브레이커 상태 전이(Closed/Open/Half-Open)와 재시도 조합 시 retry storm 방지 (Day 7)
- [x] Rate Limiting 알고리즘(Token/Leaky Bucket, Sliding Window) 선택 기준과 분산 카운팅 (Day 7)
- [x] Bulkhead — Thread Pool/Semaphore/Connection Pool 격리로 연쇄 장애 차단 (Day 7)
- [x] 장애 대응 절차(탐지→완화→RCA→포스트모텀)와 블레임리스 문화, SLO/에러 예산 (Day 7)
- [x] 인증(AuthN)/인가(AuthZ) 분리, 세션 vs JWT, OAuth2/OIDC 역할 구분과 PKCE (Day 8)
- [x] JWT alg confusion, 즉시 무효화 한계와 블랙리스트/Refresh Token 전략, 저장 위치 딜레마 (Day 8)
- [x] OWASP Top 10 실전 식별(SQL Injection, IDOR/BOLA, 저장형 XSS, SSRF, CSRF)과 코드 수정 (Day 8)
- [x] 비밀번호 해싱(bcrypt/Argon2), 지연 마이그레이션, 시크릿 관리(KMS/Vault), 전송/저장 암호화 (Day 8)
- [x] 구조화 로깅과 상관관계 ID로 여러 서비스에 걸친 요청 추적 (Day 9)
- [x] RED/USE 메트릭 프레임워크와 percentile(p50/p95/p99) 중심 관찰 (Day 9)
- [x] 메트릭 라벨 카디널리티 폭발 방지 (Day 9)
- [x] 분산 트레이싱(trace/span/context propagation)과 Head/Tail-based 샘플링 (Day 9)
- [x] SLI/SLO/SLA 구분과 에러 예산, burn rate 기반 알림 설계 (Day 9)
- [ ] 배포 전략 (예정 Day 10)
- [ ] 기술 리딩 역량 (예정 Day 11)
- [ ] 커뮤니케이션 & 케이스 스터디 (예정 Day 12)
