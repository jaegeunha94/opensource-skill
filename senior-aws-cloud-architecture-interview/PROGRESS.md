# AWS / Cloud Architecture 인터뷰 대비 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | AWS 아키텍처 설계 프레임워크 | [0001-aws-architecture-design-framework.html](lessons/0001-aws-architecture-design-framework.html) |
| 2 | 2026-07-01 | VPC 네트워크 경계 설계 | [0002-vpc-network-boundary-design.html](lessons/0002-vpc-network-boundary-design.html) |
| 3 | 2026-07-02 | IAM 권한 설계와 최소 권한 원칙 | [0003-iam-least-privilege-design.html](lessons/0003-iam-least-privilege-design.html) |
| 4 | 2026-07-03 | EC2 운영과 Auto Scaling 설계 | [0004-ec2-auto-scaling-design.html](lessons/0004-ec2-auto-scaling-design.html) |
| 5 | 2026-07-04 | RDS 고가용성과 데이터 보호 | [0005-rds-high-availability-data-protection.html](lessons/0005-rds-high-availability-data-protection.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 6 | S3 설계와 보안 | 버킷 정책, ACL vs 버킷 정책, 정적 호스팅, 버전 관리, 수명 주기 정책, 비용 계층 |
| 7 | ELB와 트래픽 설계 | ALB vs NLB vs CLB, 헬스체크, 스티키 세션, HTTPS 종료, 다중 AZ 배포 |
| 8 | CloudWatch와 운영 가시성 | 메트릭, 로그, 알람, 대시보드, Auto Scaling 연동, 비용 효율적 모니터링 |
| 9 | 비용 최적화 전략 | 예약 인스턴스, Savings Plans, Spot, 리소스 태깅, Trusted Advisor, 비용 이상 탐지 |
| 10 | 종합 아키텍처 설계 면접 — 웹 서비스 고가용성 설계 | 전 주제 통합, Multi-AZ + ASG + RDS + S3 + CloudFront 조합 설계 |

## 현재 학습 위치

**Day 5 완료** — Day 6: S3 설계와 보안으로 진행 예정.

## 습득한 핵심 개념

- [x] AWS Well-Architected Framework 5개 기둥 (Day 1)
- [x] 아키텍처 설계 답변 프레임워크 (Day 1)
- [x] 고가용성 vs 내결함성 차이 (Day 1)
- [x] 시니어 면접 평가 기준과 답변 구조 (Day 1)
- [x] VPC 서브넷 설계와 라우팅 테이블 원리 (Day 2)
- [x] 보안 그룹 vs NACL (Stateful/Stateless) (Day 2)
- [x] NAT Gateway 고가용성/비용 trade-off (Day 2)
- [x] Bastion Host 한계와 Session Manager 대안 (Day 2)
- [x] IAM 최소 권한 설계 (Day 3)
- [x] Role vs User vs Group 임시/장기 자격증명 구분 (Day 3)
- [x] SCP vs Permission Boundary (권한 부여가 아닌 상한선) (Day 3)
- [x] Confused Deputy Problem과 ExternalId (Day 3)
- [x] Access Key 유출 사고 대응 절차 (Day 3)
- [x] Launch Template vs Launch Configuration (Day 4)
- [x] Scaling Policy 종류와 Cooldown/진동(flapping) (Day 4)
- [x] Health Check Grace Period와 Connection Draining (Day 4)
- [x] Lifecycle Hook을 통한 안전한 시작/종료 (Day 4)
- [x] Mixed Instances Policy와 Spot 비용 최적화 (Day 4)
- [x] Reserved Instance vs Savings Plans vs Spot (Day 4)
- [x] Multi-AZ 동기 복제와 자동 페일오버 (Day 5)
- [x] 읽기 복제본 비동기 복제와 Replica Lag (Day 5)
- [x] RTO/RPO 기준으로 고가용성 도구 구분 (Day 5)
- [x] PITR/스냅샷과 페일오버의 역할 차이 (Day 5)
- [ ] S3 보안 설계 (예정 Day 6)
- [ ] ELB 트래픽 설계 (예정 Day 7)
- [ ] CloudWatch 운영 가시성 (예정 Day 8)
- [ ] 비용 최적화 전략 (예정 Day 9)
- [ ] 종합 아키텍처 설계 (예정 Day 10)
