# Observability / 장애 대응 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 장애 대응과 관측성 설계 프레임워크 | [0001-observability-incident-response-framework.html](lessons/0001-observability-incident-response-framework.html) |
| 2 | 2026-07-01 | 구조화 로깅과 로그 설계 전략 | [0002-structured-logging-log-design-strategy.html](lessons/0002-structured-logging-log-design-strategy.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 3 | 메트릭과 알림 설계 | RED/USE 방법론, 알림 임계값, false positive/negative |
| 4 | 분산 트레이싱 심화 | Trace ID 전파, span 설계, 병목 분석, sampling |
| 5 | 장애 원인 분석 (RCA) | 5 Whys, 타임라인 재구성, 원인 vs 증상 구분 |
| 6 | 대시보드 설계 원칙 | 역할별 대시보드, Golden Signal, 지표 선택 |
| 7 | SLO / SLI / SLA 와 Error Budget | SLO 정의, Error Budget 소진율, Burn Rate 알림 |
| 8 | Postmortem 작성과 재발 방지 | 비난 없는 postmortem, 액션 아이템 추적 |
| 9 | 장애 커뮤니케이션 | 이해관계자 보고, 에스컬레이션, 장애 브리핑 |
| 10 | 대규모 관측성 아키텍처 | 파이프라인 설계, 비용 trade-off, 카디널리티 |

## 현재 학습 위치

**Day 2 완료** — Day 3 (메트릭과 알림 설계) 예정.

## 습득한 핵심 개념

- [x] Observability vs Monitoring 차이 (Day 1)
- [x] Three Pillars: Logs / Metrics / Traces 역할 구분 (Day 1)
- [x] 장애 대응 6단계 프레임워크 (Day 1)
- [x] MTTD / MTTR / MTBF 의미와 인터뷰 활용 (Day 1)
- [x] SLO / SLI / SLA 기초 개념 (Day 1)
- [x] 구조화 로깅과 correlation ID (Day 2)
- [x] 로그 레벨 전략과 Alert Fatigue 연관성 (Day 2)
- [ ] RED/USE 메트릭 방법론 (예정 Day 3)
- [ ] 분산 트레이싱 전파 원리 (예정 Day 4)
- [ ] RCA 5 Whys 적용 (예정 Day 5)
- [ ] Error Budget 소진율 알림 (예정 Day 7)
- [ ] 비난 없는 postmortem 작성 (예정 Day 8)
