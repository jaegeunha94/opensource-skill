# AWS / Cloud Architecture 인터뷰 대비 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | AWS 아키텍처 설계 프레임워크 | [0001-aws-architecture-design-framework.html](lessons/0001-aws-architecture-design-framework.html) |
| 2 | 2026-07-01 | VPC 네트워크 경계 설계 | [0002-vpc-network-boundary-design.html](lessons/0002-vpc-network-boundary-design.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 3 | IAM 권한 설계와 최소 권한 원칙 | Role vs User vs Group, 정책 우선순위, SCP, 자격증명 유출 대응 |
| 4 | EC2 운영과 Auto Scaling 설계 | Launch Template, Scaling Policy, ALB 연동, 예약 인스턴스 vs Spot, 비용 최적화 |
| 5 | RDS 고가용성과 데이터 보호 | Multi-AZ, 읽기 복제본, 자동 백업, 페일오버 시나리오, 비용 trade-off |
| 6 | S3 설계와 보안 | 버킷 정책, ACL vs 버킷 정책, 정적 호스팅, 버전 관리, 수명 주기 정책, 비용 계층 |
| 7 | ELB와 트래픽 설계 | ALB vs NLB vs CLB, 헬스체크, 스티키 세션, HTTPS 종료, 다중 AZ 배포 |
| 8 | CloudWatch와 운영 가시성 | 메트릭, 로그, 알람, 대시보드, Auto Scaling 연동, 비용 효율적 모니터링 |
| 9 | 비용 최적화 전략 | 예약 인스턴스, Savings Plans, Spot, 리소스 태깅, Trusted Advisor, 비용 이상 탐지 |
| 10 | 종합 아키텍처 설계 면접 — 웹 서비스 고가용성 설계 | 전 주제 통합, Multi-AZ + ASG + RDS + S3 + CloudFront 조합 설계 |

## 현재 학습 위치

**Day 2 완료** — Day 3: IAM 권한 설계와 최소 권한 원칙으로 진행 예정.

## 습득한 핵심 개념

- [x] AWS Well-Architected Framework 5개 기둥 (Day 1)
- [x] 아키텍처 설계 답변 프레임워크 (Day 1)
- [x] 고가용성 vs 내결함성 차이 (Day 1)
- [x] 시니어 면접 평가 기준과 답변 구조 (Day 1)
- [x] VPC 서브넷 설계와 라우팅 테이블 원리 (Day 2)
- [x] 보안 그룹 vs NACL (Stateful/Stateless) (Day 2)
- [x] NAT Gateway 고가용성/비용 trade-off (Day 2)
- [x] Bastion Host 한계와 Session Manager 대안 (Day 2)
- [ ] IAM 최소 권한 설계 (예정 Day 3)
- [ ] EC2 Auto Scaling 비용/가용성 trade-off (예정 Day 4)
- [ ] RDS Multi-AZ 페일오버 (예정 Day 5)
- [ ] S3 보안 설계 (예정 Day 6)
- [ ] ELB 트래픽 설계 (예정 Day 7)
- [ ] CloudWatch 운영 가시성 (예정 Day 8)
- [ ] 비용 최적화 전략 (예정 Day 9)
- [ ] 종합 아키텍처 설계 (예정 Day 10)
