# CI/CD와 배포 전략 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 안정적인 배포 전략과 롤백 프레임워크 | [0001-deployment-strategy-rollback-framework.html](lessons/0001-deployment-strategy-rollback-framework.html) |
| 2 | 2026-07-01 | GitHub Actions 파이프라인 설계와 자동화 품질 | [0002-github-actions-pipeline-design-automation-quality.html](lessons/0002-github-actions-pipeline-design-automation-quality.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 3 | Jenkins와 빌드 자동화 실무 | Jenkinsfile, 선언적 파이프라인, 멀티브랜치, 플러그인, 자체 호스팅 운영 |
| 4 | 테스트 자동화 전략과 CI 품질 게이트 | 테스트 피라미드, 단위/통합/E2E, 커버리지 임계값, flaky test, 실패 시 정책 |
| 5 | Artifact 관리와 버전 관리 전략 | 이미지 레지스트리, 태깅 전략, semantic versioning, artifact 불변성, 프로모션 |
| 6 | Blue-Green 배포 심층 분석 | 이중 환경 구성, 트래픽 전환, DB 마이그레이션 문제, 비용, 롤백 |
| 7 | Rolling 배포와 점진적 릴리스 | 인스턴스 순차 교체, health check, 실패 감지, 부분 장애 처리 |
| 8 | Canary 배포와 트래픽 분산 제어 | 트래픽 가중치, 지표 기반 자동 진행, feature flag 연동, 중단 기준 |
| 9 | 롤백 판단과 인시던트 대응 | 롤백 트리거 기준, 자동 롤백, 데이터 일관성, 롤백 vs 핫픽스 판단 |
| 10 | Release Ownership과 배포 리더십 | 배포 책임 구조, 변경 관리, 팀 커뮤니케이션, 포스트모텀, 재발 방지 |

## 현재 학습 위치

**Day 2 완료** — 다음: Day 3 — Jenkins와 빌드 자동화 실무

## 습득한 핵심 개념

- [x] 배포 전략 선택 프레임워크 (Day 1)
- [x] Blue-Green / Rolling / Canary 개념과 trade-off (Day 1)
- [x] 롤백 판단 기준과 의사결정 트리 (Day 1)
- [x] 배포 리스크 컨트롤 원칙 (Day 1)
- [x] GitHub Actions 파이프라인 설계 (Day 2)
- [ ] 테스트 자동화 전략과 품질 게이트 (예정 Day 4)
- [ ] Artifact 관리와 버전 전략 (예정 Day 5)
- [ ] Blue-Green 배포 심층 (예정 Day 6)
- [ ] Rolling 배포 (예정 Day 7)
- [ ] Canary 배포 (예정 Day 8)
- [ ] 롤백 인시던트 대응 (예정 Day 9)
- [ ] Release Ownership (예정 Day 10)
