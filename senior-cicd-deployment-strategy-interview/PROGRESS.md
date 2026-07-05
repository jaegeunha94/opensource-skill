# CI/CD와 배포 전략 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 안정적인 배포 전략과 롤백 프레임워크 | [0001-deployment-strategy-rollback-framework.html](lessons/0001-deployment-strategy-rollback-framework.html) |
| 2 | 2026-07-01 | GitHub Actions 파이프라인 설계와 자동화 품질 | [0002-github-actions-pipeline-design-automation-quality.html](lessons/0002-github-actions-pipeline-design-automation-quality.html) |
| 3 | 2026-07-02 | Jenkins와 빌드 자동화 실무 | [0003-jenkins-build-automation-operations.html](lessons/0003-jenkins-build-automation-operations.html) |
| 4 | 2026-07-03 | 테스트 자동화 전략과 CI 품질 게이트 | [0004-test-automation-strategy-ci-quality-gate.html](lessons/0004-test-automation-strategy-ci-quality-gate.html) |
| 5 | 2026-07-04 | Artifact 관리와 버전 관리 전략 | [0005-artifact-management-versioning-strategy.html](lessons/0005-artifact-management-versioning-strategy.html) |
| 6 | 2026-07-05 | Blue-Green 배포 심층 분석 | [0006-blue-green-deployment-deep-dive.html](lessons/0006-blue-green-deployment-deep-dive.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 7 | Rolling 배포와 점진적 릴리스 | 인스턴스 순차 교체, health check, 실패 감지, 부분 장애 처리 |
| 8 | Canary 배포와 트래픽 분산 제어 | 트래픽 가중치, 지표 기반 자동 진행, feature flag 연동, 중단 기준 |
| 9 | 롤백 판단과 인시던트 대응 | 롤백 트리거 기준, 자동 롤백, 데이터 일관성, 롤백 vs 핫픽스 판단 |
| 10 | Release Ownership과 배포 리더십 | 배포 책임 구조, 변경 관리, 팀 커뮤니케이션, 포스트모텀, 재발 방지 |

## 현재 학습 위치

**Day 6 완료** — 다음: Day 7 — Rolling 배포와 점진적 릴리스

## 습득한 핵심 개념

- [x] 배포 전략 선택 프레임워크 (Day 1)
- [x] Blue-Green / Rolling / Canary 개념과 trade-off (Day 1)
- [x] 롤백 판단 기준과 의사결정 트리 (Day 1)
- [x] 배포 리스크 컨트롤 원칙 (Day 1)
- [x] GitHub Actions 파이프라인 설계 (Day 2)
- [x] Jenkins 자체 호스팅 운영과 빌드 자동화 (Day 3)
- [x] 테스트 자동화 전략과 품질 게이트 (Day 4)
- [x] Artifact 관리와 버전 전략 (Day 5)
- [x] Blue-Green 배포 심층 (트래픽 전환 계층, Expand-Contract, 비용 최적화, 롤백 한계) (Day 6)
- [ ] Rolling 배포 (예정 Day 7)
- [ ] Canary 배포 (예정 Day 8)
- [ ] 롤백 인시던트 대응 (예정 Day 9)
- [ ] Release Ownership (예정 Day 10)
