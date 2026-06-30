# 학습 자료

## 공식 문서

- [GitHub Actions 공식 문서](https://docs.github.com/en/actions) — 워크플로우 문법, 트리거, 잡 구성
- [Jenkins 사용자 핸드북](https://www.jenkins.io/doc/book/) — 파이프라인 DSL, 플러그인, Jenkinsfile
- [Google SRE Book — Release Engineering 챕터](https://sre.google/sre-book/release-engineering/) — 릴리스 엔지니어링 원칙, 배포 철학
- [Martin Fowler — Continuous Delivery](https://martinfowler.com/books/continuousDelivery.html) — CI/CD 원칙의 원전, Jez Humble & David Farley 공저

## 배포 전략 관련

- [Martin Fowler — BlueGreenDeployment](https://martinfowler.com/bliki/BlueGreenDeployment.html) — Blue-Green 개념의 출처
- [Martin Fowler — CanaryRelease](https://martinfowler.com/bliki/CanaryRelease.html) — Canary 배포 개념의 출처
- [Netflix Tech Blog — Spinnaker](https://netflixtechblog.com/global-continuous-delivery-with-spinnaker-2a6896c23ba7) — 대규모 Canary 배포 실무 사례

## 테스트 자동화

- [Martin Fowler — TestPyramid](https://martinfowler.com/bliki/TestPyramid.html) — 테스트 피라미드 원칙
- [Google Testing Blog](https://testing.googleblog.com/) — 대규모 시스템에서의 테스트 전략

## 롤백 전략 / 운영

- [Google SRE Book — Handling Incidents](https://sre.google/sre-book/managing-incidents/) — 인시던트 대응 프레임워크
- [Atlassian — DevOps Deployment Strategies](https://www.atlassian.com/continuous-delivery/principles/deployment-strategies) — 배포 전략 비교 요약

## 국내 실무 사례

- [우아한형제들 기술블로그 — 배포 자동화](https://techblog.woowahan.com/) — 실제 서비스 배포 사례
- [카카오 기술블로그 — CI/CD](https://tech.kakao.com/) — 카카오 배포 시스템 소개
- [LINE Engineering — 배포 전략](https://engineering.linecorp.com/ko/) — LINE 서비스 배포 운영 경험

## 도구 레퍼런스

| 도구 | 용도 | 공식 URL |
|------|------|----------|
| GitHub Actions | CI/CD 파이프라인 | docs.github.com/actions |
| Jenkins | 자체 호스팅 CI | jenkins.io/doc |
| ArgoCD | GitOps 기반 CD | argo-cd.readthedocs.io |
| Spinnaker | 멀티 클라우드 CD | spinnaker.io/docs |
| Flux | GitOps Kubernetes CD | fluxcd.io/docs |
