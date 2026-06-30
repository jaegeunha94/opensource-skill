# Resources: AWS / Cloud Architecture 인터뷰 대비

## 공식 문서 (최우선)

- **AWS Well-Architected Framework**
  https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html
  — 5개 기둥(운영 우수성, 보안, 안정성, 성능 효율성, 비용 최적화) 공식 정의. 인터뷰에서 아키텍처 판단 근거로 직접 인용 가능.

- **AWS Architecture Center**
  https://aws.amazon.com/architecture/
  — AWS 공식 레퍼런스 아키텍처. 웹 앱, 데이터, 서버리스, 마이크로서비스 등 패턴별 다이어그램과 설명.

- **AWS VPC 공식 문서**
  https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html
  — 서브넷, 라우팅 테이블, 보안 그룹, NACL, Transit Gateway 등 네트워크 경계 설계의 기준.

- **IAM Best Practices**
  https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
  — 최소 권한, MFA, 역할 기반 접근, 자격증명 관리 등 권한 설계 기준.

- **RDS 고가용성 문서**
  https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html
  — Multi-AZ 구성, 자동 페일오버, 읽기 복제본 패턴.

- **Auto Scaling 공식 문서**
  https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html
  — Launch Template, Scaling Policy, Lifecycle Hook, 비용과 가용성 균형.

## 심화 학습

- **AWS re:Invent YouTube 채널**
  https://www.youtube.com/@AWSEventsChannel
  — 연도별 re:Invent 발표. 실제 운영 사례와 아키텍처 결정 배경을 들을 수 있다.

- **The Good Parts of AWS (Daniel Vassallo, Josh Pschorr)**
  — 과도하게 복잡한 AWS 아키텍처를 피하는 실용적 시각. "언제 단순하게 유지해야 하는가"를 논한다.

- **AWS Prescriptive Guidance**
  https://aws.amazon.com/prescriptive-guidance/
  — 마이그레이션, 보안, 운영 자동화 등 AWS 팀이 권장하는 구체적인 접근 방식 모음.

## 인터뷰 대비

- **AWS Solutions Architect Professional 공식 시험 가이드**
  https://aws.amazon.com/certification/certified-solutions-architect-professional/
  — 시험 목적이 아니라, 어떤 판단 기준과 설계 역량을 평가하는지 파악하는 참고 자료로 활용.

- **ByteByteGo System Design Newsletter**
  https://blog.bytebytego.com/
  — AWS 기반 실제 서비스 아키텍처 해설. 면접에서 나오는 "어떻게 설계하겠는가" 유형에 대한 실무 사고 연습.

## 비용 최적화

- **AWS Pricing Calculator**
  https://calculator.aws/pricing/2/home
  — 아키텍처 비용 시뮬레이션.

- **AWS Trusted Advisor**
  https://aws.amazon.com/premiumsupport/technology/trusted-advisor/
  — 비용, 보안, 성능, 내결함성 진단 기준을 실무 맥락에서 학습.

## 주의사항

- 블로그 글은 내용 검증 없이 참고하지 않는다. AWS 공식 문서나 공인된 책을 기준으로 삼는다.
- 서비스 이름 암기보다 "왜 이 서비스를 선택하는가"와 "어떤 상황에서 선택하지 않는가"를 익히는 데 집중한다.
