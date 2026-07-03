# Mission: Kubernetes — 10년차 이상 개발자 인터뷰 대비

## Why

Kubernetes를 단순히 `kubectl apply`로 배포하는 수준을 넘어, 프로덕션 클러스터를 설계·운영·복구하는 시니어 역할에서 요구하는 판단력을 갖추기 위해서다.
인터뷰에서는 "이 리소스가 뭐냐"가 아니라 "왜 이 구조를 선택했는가, 클러스터에 장애가 났을 때 어떤 순서로 접근하는가, 배포 안정성·보안 경계·비용/성능 사이의 trade-off를 어떻게 결정하는가"를 본다.
이 워크스페이스는 그 판단 근거를 체계적으로 익히는 것을 목표로 한다.

## Success looks like

- 컨트롤 플레인과 노드 컴포넌트의 역할을 설명하고, 각 컴포넌트 장애 시 blast radius를 추론할 수 있다
- Pod/Deployment/StatefulSet/DaemonSet의 차이를 "언제 무엇을 쓰는가" 기준으로 설명할 수 있다
- Service/CoreDNS/Ingress/Gateway API로 이어지는 트래픽 경로를 그리고, 각 계층에서 장애가 나면 어떻게 진단하는지 설명할 수 있다
- CNI 네트워킹, 스토리지/볼륨 설계에서 흔한 프로덕션 실패 패턴을 알고 있다
- probe, request/limit, HPA/VPA를 조합해 안정적인 오토스케일링을 설계하고 실패 모드를 설명할 수 있다
- rollout/rollback, 스케줄링, RBAC, admission control, 보안 하드닝을 실무 판단 기준으로 설명할 수 있다
- 관측성, 트러블슈팅, 업그레이드 전략, 멀티 클러스터 trade-off를 시니어 면접관의 follow-up에 근거 있게 답할 수 있다

## Constraints

- 기본 Docker/컨테이너 개념, Linux 프로세스/네트워크 기본은 이미 알고 있다고 전제한다
- `kubectl` 명령어 문법 암기나 YAML 필드 나열은 이 워크스페이스의 목표가 아니다
- 레슨은 면접 대비 중심이므로 각 Day는 인터뷰 질문 → 사고 구조 → 실무 판단 순서로 구성한다
- Kubernetes는 릴리스 주기가 빠르고(연 3회) 폐기(deprecation) 정책이 자주 바뀌므로, 레슨 작성 시점 기준 최신 공식 문서·release note·deprecation guide를 확인하고 반영한다. 아래 `RESOURCES.md`에 조사 시점(2026-07)의 최신 사실을 기록해 둔다.

## Out of scope

- Kubernetes 입문자용 리소스 정의 나열 (Pod가 뭔지 처음 배우는 수준)
- Helm/Kustomize 문법 실습, CKA/CKAD 시험 문제 풀이
- 특정 클라우드 벤더(EKS/GKE/AKS) 콘솔 조작법
- Operator/CRD 코드 작성 튜토리얼
