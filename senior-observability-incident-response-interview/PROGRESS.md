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
| 8 | 2026-07-07 | Postmortem 작성과 재발 방지 | [0008-postmortem-and-recurrence-prevention.html](lessons/0008-postmortem-and-recurrence-prevention.html) |
| 9 | 2026-07-08 | 장애 커뮤니케이션 | [0009-incident-communication.html](lessons/0009-incident-communication.html) |
| 10 | 2026-07-09 | 대규모 관측성 아키텍처 | [0010-large-scale-observability-architecture.html](lessons/0010-large-scale-observability-architecture.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 11 | 카오스 엔지니어링과 장애 훈련 (Game Day) | 장애 주입, 복원력 검증, Game Day 설계 |

## 현재 학습 위치

**Day 10 완료** — Day 11 (카오스 엔지니어링과 장애 훈련) 예정.

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
- [x] Blameless Postmortem과 accountability의 차이 (Day 8)
- [x] 장애 보고서 표준 구조(요약/임팩트/타임라인/근본원인/액션아이템) (Day 8)
- [x] 액션 아이템 방치("postmortem 무덤") 방지 구조(담당자/기한/추적) (Day 8)
- [x] 심각도별 postmortem 프로세스 차등화 (Day 8)
- [x] Incident Commander 역할 분리와 이유 (Day 9)
- [x] 심각도별 Who/What/When/How 커뮤니케이션 매트릭스 (Day 9)
- [x] 정량적 에스컬레이션 기준 설계 (Day 9)
- [x] 내부/외부 커뮤니케이션 언어 차이 (Day 9)
- [x] 카디널리티 개념과 카디널리티 폭발 원인 (Day 10)
- [x] 관측성 파이프라인 구조(Agent/Collector/Buffer/Storage/Query) (Day 10)
- [x] 핫/웜/콜드 저장 계층과 보존 정책 차등화 (Day 10)
- [x] 관측성 파이프라인 자체의 메타 모니터링 필요성 (Day 10)
- [ ] 카오스 엔지니어링과 Game Day 설계 (예정 Day 11)
