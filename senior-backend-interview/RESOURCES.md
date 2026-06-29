# 참고 자료

## 시스템 설계 핵심 서적

| 자료 | 설명 |
|------|------|
| *Designing Data-Intensive Applications* (Martin Kleppmann) | 분산 시스템·데이터 모델 바이블. 면접 질문의 80%가 이 책에서 나옴 |
| *System Design Interview* Vol.1 & 2 (Alex Xu) | 인터뷰 포맷 기준서. 용량 추정·컴포넌트 설계 템플릿 |
| *Building Microservices* (Sam Newman) | MSA 설계 실전 가이드 |
| *Release It!* (Michael Nygard) | 신뢰성·회복탄력성 패턴 (서킷 브레이커 원조) |
| *Site Reliability Engineering* (Google SRE 팀) | SLO, 오류 예산, 장애 대응 기준서 |
| *Clean Architecture* (Robert C. Martin) | 아키텍처 원칙과 경계 설계 |

## 분산 시스템 논문 & 글

| 자료 | 설명 |
|------|------|
| CAP Theorem (Brewer, 2000) | 일관성·가용성·분단 내성 trade-off |
| Dynamo: Amazon's Highly Available Key-value Store | 실전 분산 KV 스토어 설계 |
| Spanner: Google's Globally Distributed Database | TrueTime, 글로벌 트랜잭션 |
| Raft Consensus Algorithm | 분산 합의 알고리즘 (Paxos보다 이해하기 쉬운 대안) |
| The Log: What every software engineer should know | LinkedIn Jay Kreps. 로그 기반 아키텍처 |

## 온라인 플랫폼

| 플랫폼 | 활용 방법 |
|--------|----------|
| High Scalability (highscalability.com) | 실제 서비스 아키텍처 케이스 스터디 |
| InfoQ Architecture (infoq.com) | 컨퍼런스 발표, 실무 아키텍처 사례 |
| AWS/GCP/Azure Architecture Center | 클라우드 레퍼런스 아키텍처 |
| Netflix Tech Blog | 대규모 스트리밍 시스템 실전 사례 |
| Uber Engineering Blog | 실시간 데이터·지도 서비스 설계 |
| Cloudflare Blog | 글로벌 엣지 네트워크, 보안 실전 |

## 인터뷰 준비 자료

| 자료 | 설명 |
|------|------|
| Grokking the System Design Interview (Educative) | 구조화된 시스템 설계 학습 경로 |
| Pramp / interviewing.io | 라이브 모의 인터뷰 |
| ByteByteGo (YouTube, Alex Xu) | 시각적 시스템 설계 설명 |
| Tech Interview Handbook | 전반적 인터뷰 준비 가이드 |

## 표준 문서

| 문서 | 설명 |
|------|------|
| RFC 7231 (HTTP/1.1 Semantics) | REST API 설계 표준 |
| OpenAPI Specification 3.x | API 스펙 정의 표준 |
| OWASP Top 10 | 웹 보안 취약점 표준 목록 |
| OAuth 2.0 / OIDC RFC | 인증·인가 프로토콜 |
| OpenTelemetry Specification | 관측성 표준 |
