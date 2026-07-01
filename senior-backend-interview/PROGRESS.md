# 백엔드 10년차 이상 개발자 Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-29 | 시스템 설계 기초 — URL Shortener 전체 설계 | [0001-system-design-fundamentals.html](lessons/0001-system-design-fundamentals.html) |
| 2 | 2026-06-30 | 데이터베이스 설계 & 트랜잭션 | [0002-database-design-and-transactions.html](lessons/0002-database-design-and-transactions.html) |
| 3 | 2026-07-01 | 확장성 패턴 | [0003-scalability-patterns.html](lessons/0003-scalability-patterns.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| ~~2~~ | ~~데이터베이스 설계 & 트랜잭션~~ | ~~완료~~ |
| ~~3~~ | ~~확장성 패턴~~ | ~~완료~~ |
| 4 | 분산 시스템 & 일관성 | CAP, 일관성 모델, 분산 합의, 분산 트랜잭션, Saga |
| 5 | API 설계 | REST 성숙도, GraphQL, gRPC, 버전 관리, 하위 호환성 |
| 6 | 동시성 & 비동기 처리 | 락 전략, 낙관적/비관적 동시성, 멱등성, 이벤트 큐 |
| 7 | 신뢰성 & 장애 대응 | 서킷 브레이커, Rate Limiting, Bulkhead, 포스트모텀 |
| 8 | 보안 | AuthN/AuthZ, JWT, OAuth2, OWASP Top10, 암호화 |
| 9 | 관측성 | 로깅 전략, 메트릭, 분산 트레이싱, SLO/SLA/에러 예산 |
| 10 | 배포 & DevOps | CI/CD, 블루-그린, 카나리, 피처 플래그, 롤백 |
| 11 | 기술 리딩 | 설계 리뷰, 기술 부채 관리, RFC 프로세스, 멘토링 |
| 12 | 커뮤니케이션 & 케이스 스터디 | 비즈니스 번역, 갈등 해결, 실전 케이스 종합 |

## 현재 학습 위치

**Day 3 완료** — Day 4 (분산 시스템 & 일관성)가 다음 차례.

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
- [ ] CAP 정리와 실무 적용 (예정 Day 4)
- [ ] API 설계 원칙 (예정 Day 5)
- [ ] 동시성 제어 패턴 (예정 Day 6)
- [ ] 신뢰성 패턴 (예정 Day 7)
- [ ] 보안 설계 (예정 Day 8)
- [ ] 관측성 전략 (예정 Day 9)
- [ ] 배포 전략 (예정 Day 10)
- [ ] 기술 리딩 역량 (예정 Day 11)
- [ ] 커뮤니케이션 & 케이스 스터디 (예정 Day 12)
