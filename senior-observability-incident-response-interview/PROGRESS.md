# Observability / 장애 대응 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 장애 대응과 관측성 설계 프레임워크 | [0001-observability-incident-response-framework.html](lessons/0001-observability-incident-response-framework.html) |
| 2 | 2026-07-01 | 구조화 로깅과 로그 설계 전략 | [0002-structured-logging-log-design-strategy.html](lessons/0002-structured-logging-log-design-strategy.html) |
| 3 | 2026-07-02 | 메트릭과 알림 설계 | [0003-metrics-and-alerting-design.html](lessons/0003-metrics-and-alerting-design.html) |
| 4 | 2026-07-03 | 분산 트레이싱 심화 | [0004-distributed-tracing-deep-dive.html](lessons/0004-distributed-tracing-deep-dive.html) |
| 5 | 2026-07-04 | 장애 원인 분석 (RCA) | [0005-root-cause-analysis.html](lessons/0005-root-cause-analysis.html) |
| 6 | 2026-07-05 | 대시보드 설계 원칙 | [0006-dashboard-design-principles.html](lessons/0006-dashboard-design-principles.html) |
| 7 | 2026-07-06 | SLO / SLI / SLA와 Error Budget | [0007-slo-sli-sla-error-budget.html](lessons/0007-slo-sli-sla-error-budget.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 8 | Postmortem 작성과 재발 방지 | 비난 없는 postmortem, 액션 아이템 추적 |
| 9 | 장애 커뮤니케이션 | 이해관계자 보고, 에스컬레이션, 장애 브리핑 |
| 10 | 대규모 관측성 아키텍처 | 파이프라인 설계, 비용 trade-off, 카디널리티 |

## 현재 학습 위치

**Day 7 완료** — Day 8 (Postmortem 작성과 재발 방지) 예정.

## 습득한 핵심 개념

- [x] Observability vs Monitoring 차이 (Day 1)
- [x] Three Pillars: Logs / Metrics / Traces 역할 구분 (Day 1)
- [x] 장애 대응 6단계 프레임워크 (Day 1)
- [x] MTTD / MTTR / MTBF 의미와 인터뷰 활용 (Day 1)
- [x] SLO / SLI / SLA 기초 개념 (Day 1)
- [x] 구조화 로깅과 correlation ID (Day 2)
- [x] 로그 레벨 전략과 Alert Fatigue 연관성 (Day 2)
- [x] RED/USE 메트릭 방법론과 Golden Signals (Day 3)
- [x] Percentile(p50/p95/p99)과 평균의 함정 (Day 3)
- [x] 알림 임계값 설계와 False Positive/Negative 트레이드오프 (Day 3)
- [x] Trace/Span 구조와 Context Propagation (Day 4)
- [x] Critical Path 기반 병목 분석과 Exemplar 연결 (Day 4)
- [x] Head-based/Tail-based Sampling 트레이드오프 (Day 4)
- [x] 원인(Cause) vs 증상(Symptom) 구분 (Day 5)
- [x] 5 Whys 적용과 한계(선형 사슬 vs 나무 구조) (Day 5)
- [x] 타임라인 재구성과 가설 검증(Correlation vs Causation) (Day 5)
- [x] Contributing Factors / Swiss Cheese Model (Day 5)
- [x] Golden Signals(Latency/Traffic/Errors/Saturation) (Day 6)
- [x] Signal vs Noise, Drill-down 계층 구조 (Day 6)
- [x] 역할별 대시보드 설계와 대시보드/알림 역할 구분 (Day 6)
- [x] Dashboard as Code와 카디널리티/실시간성 trade-off (Day 6)
- [x] SLI / SLO / SLA 정의와 관계 (Day 7)
- [x] Error Budget 계산과 조직적 의미 (Day 7)
- [x] Burn Rate와 Multi-window Multi-burn-rate 알림 설계 (Day 7)
- [x] Error Budget과 Release Gating 연결 (Day 7)
- [ ] 비난 없는 postmortem 작성 (예정 Day 8)
