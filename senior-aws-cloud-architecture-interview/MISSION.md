# Mission: AWS / Cloud Architecture — 10년차 이상 개발자 인터뷰 대비

## Why

AWS를 단순히 사용하는 수준을 넘어, 클라우드 아키텍처를 설계하고 운영하는 시니어 역할에서 요구하는 판단력을 갖추기 위해서다.
인터뷰에서는 "어떤 서비스를 쓰냐"가 아니라 "왜 그 구조를 선택했는가, 장애가 나면 어떻게 대응하는가, 비용·보안·안정성 사이의 trade-off를 어떻게 결정하는가"를 본다.
이 워크스페이스는 그 판단 근거를 체계적으로 익히는 것을 목표로 한다.

## Success looks like

- AWS Well-Architected Framework 5개 기둥을 면접 답변 구조로 활용할 수 있다
- VPC, 서브넷, 보안 그룹, NACL의 네트워크 경계를 설계하고 이유를 설명할 수 있다
- Multi-AZ, Auto Scaling, ELB를 조합해 가용성을 설계하고 장애 시나리오를 추론할 수 있다
- IAM 권한 설계에서 최소 권한 원칙을 적용하고 흔한 실수를 설명할 수 있다
- RDS, S3, EC2, CloudWatch의 비용·성능·보안 trade-off를 근거 있게 설명할 수 있다
- 시니어 면접관의 follow-up 질문에 아키텍처 결정 근거를 명확히 언어화할 수 있다

## Constraints

- 기본 리눅스, 네트워크(IP, 서브넷, HTTP), RDB 개념은 이미 알고 있다고 전제한다
- AWS 콘솔 사용법이나 CLI 명령어 암기는 이 워크스페이스의 목표가 아니다
- 레슨은 면접 대비 중심이므로 각 Day는 인터뷰 질문 → 사고 구조 → 실무 판단 순서로 구성한다

## Out of scope

- AWS 입문자용 서비스 개요 (EC2가 뭔지 처음 배우는 수준)
- CDK, CloudFormation 코드 실습
- AWS 자격증 시험 문제 풀이 (SAA, SAP 등)
- 특정 SaaS 제품 연동이나 Lambda 함수 코드 작성
