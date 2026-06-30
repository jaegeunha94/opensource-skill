# 학습 리소스

## 필독 서적

| 책 | 저자 | 중요도 | 설명 |
|----|------|--------|------|
| *Observability Engineering* | Charity Majors, Liz Fong-Jones, George Miranda | ★★★★★ | 관측성의 핵심 개념과 실무 적용. honeycomb.io 창업자들의 책 |
| *Site Reliability Engineering* (SRE Book) | Google SRE team | ★★★★★ | SLO, Error Budget, 장애 관리의 표준 교과서 |
| *The SRE Workbook* | Google SRE team | ★★★★☆ | SRE Book의 실습 편. 실제 구현 예시 포함 |
| *Distributed Systems Observability* | Cindy Sridharan | ★★★★☆ | Three Pillars 개념을 체계적으로 정리한 짧고 집약적인 책 |
| *Database Reliability Engineering* | Laine Campbell, Charity Majors | ★★★☆☆ | DB 관점의 신뢰성 설계 |

## 공식 문서 / 스펙

| 리소스 | 설명 |
|--------|------|
| OpenTelemetry 공식 문서 (opentelemetry.io) | 분산 트레이싱 표준. Traces/Metrics/Logs API 설계 이해 |
| Google SRE Book 온라인 (sre.google/sre-book) | 무료 공개. SLO/SLI/SLA 챕터 필독 |
| CNCF Observability Whitepaper | 클라우드 네이티브 환경의 관측성 아키텍처 |
| Prometheus Documentation | 메트릭 수집과 레이블 설계 원칙 |

## 공개 Postmortem 데이터베이스

| 리소스 | 설명 |
|--------|------|
| github.com/danluu/post-mortems | 유명 서비스 장애 postmortem 모음 |
| AWS Service Health Dashboard + 공개 RCA | AWS 공식 장애 보고서 |
| Cloudflare Incident Reports (blog.cloudflare.com) | 상세한 기술적 원인 분석 포함 |
| Stripe Engineering Blog | 결제 시스템 관점의 신뢰성 사례 |

## 영상 강의 / 컨퍼런스 발표

| 리소스 | 설명 |
|--------|------|
| SREcon 발표 영상 (usenix.org/srecon) | 업계 최고 SRE 컨퍼런스 |
| KubeCon Observability 트랙 | Kubernetes 환경의 관측성 실무 |
| Charity Majors 유튜브/블로그 | honeycomb.io CEO. 관측성 철학의 핵심 |
| SLOconf 발표 영상 | SLO 중심 장애 관리 심화 |

## 도구 문서 (이해 목적)

- **Prometheus + Grafana**: 메트릭 수집과 시각화 표준 스택
- **Jaeger / Zipkin / Tempo**: 오픈소스 분산 트레이싱
- **Elasticsearch + Kibana (ELK)**: 로그 수집과 검색
- **PagerDuty / OpsGenie**: 온콜 알림과 에스컬레이션 설계
- **DataDog / New Relic**: 상용 올인원 관측성 플랫폼

> 도구 사용법보다 "왜 이 도구 조합을 선택했는가", "어떤 상황에서 어떤 신호를 보았는가"를 설명할 수 있는 것이 인터뷰에서 중요하다.
