# Docker / Kubernetes / 가상화 — 10년차 이상 개발자 Interview 학습 미션

## 목표

단순 명령어 암기나 주니어 수준의 개념 설명이 아니라,
**10년차 이상 시니어 개발자가 인터뷰에서 실제로 평가받는 판단력과 운영 경험**을 체계적으로 준비한다.

면접관이 Docker / Kubernetes 질문을 통해 확인하려는 것은 다음이다:
- 컨테이너화의 근본 원리와 VM 대비 trade-off를 설명할 수 있는가
- Kubernetes 컨트롤 플레인과 데이터 플레인의 역할과 장애 패턴을 이해하는가
- 실제 프로덕션 배포에서 resource limit, rollout 전략, health check를 어떻게 설계하는가
- 장애가 발생했을 때 Pod / Node / 네트워크 레벨에서 어떻게 진단하고 해결하는가
- Ingress, Service, DNS, 네트워크 정책을 서비스 운영 관점에서 설명할 수 있는가

## 전제 조건

- Linux 기본 개념(프로세스, 파일시스템, 네트워크)을 이해하고 있다고 가정
- Docker와 Kubernetes를 실무에서 한 번이라도 운영해본 경험이 있다고 가정
- 기본 YAML 문법과 kubectl 기본 명령어는 이미 알고 있다고 가정

## 학습 범위

| 영역 | 핵심 주제 |
|------|-----------|
| 컨테이너 기초 | 네임스페이스, cgroup, 이미지 레이어, OCI |
| Dockerfile 설계 | 레이어 최적화, 멀티스테이지, 보안 이미지 |
| 볼륨 / 스토리지 | 바인드 마운트 vs named volume, PVC/PV |
| 네트워크 | bridge, host, overlay, CNI, Service DNS |
| Docker Compose | 로컬 환경 구성, 서비스 의존성, 운영 고려사항 |
| Kubernetes 핵심 | Pod, Deployment, ReplicaSet, DaemonSet, StatefulSet |
| Service / Ingress | ClusterIP, NodePort, LoadBalancer, Ingress Controller |
| 롤아웃 전략 | RollingUpdate, Recreate, maxSurge/maxUnavailable |
| Resource 관리 | requests/limits, QoS 클래스, LimitRange, ResourceQuota |
| 운영 Troubleshooting | CrashLoopBackOff, OOMKilled, Pending Pod, 네트워크 진단 |
| 가상화 | VM vs 컨테이너, hypervisor 계층, 성능 오버헤드 |

## 커리큘럼 구성 (예정)

| Day | 주제 |
|-----|------|
| 1 | 컨테이너와 Kubernetes 운영 프레임워크 — 면접의 사고 구조 |
| 2 | 컨테이너 격리 원리 — 네임스페이스, cgroup, 이미지 레이어 |
| 3 | Dockerfile 설계 — 레이어 최적화, 멀티스테이지, 보안 |
| 4 | 컨테이너 볼륨과 스토리지 — PVC/PV, StatefulSet 설계 |
| 5 | 컨테이너 네트워크 — bridge, CNI, Service DNS, 네트워크 정책 |
| 6 | Docker Compose — 로컬 개발부터 운영 경계까지 |
| 7 | Kubernetes 컨트롤 플레인 — etcd, kube-apiserver, 스케줄러 |
| 8 | Pod 생명주기 — 설계, health check, 재시작 정책 |
| 9 | Deployment와 롤아웃 전략 — RollingUpdate, 롤백, 카나리 |
| 10 | Service와 Ingress — 트래픽 흐름, 로드밸런싱, TLS 종료 |
| 11 | Resource limit과 QoS — requests/limits, OOMKilled 대응 |
| 12 | 운영 Troubleshooting — CrashLoopBackOff, Pending, 진단 프레임워크 |
| 13 | VM vs 컨테이너 vs 서버리스 — 가상화 스택과 trade-off |
| 14 | 시니어 종합 — 실무 설계 케이스, follow-up 대응 |

## 성공 기준

이 커리큘럼을 완료하면 다음을 할 수 있어야 한다:
1. "컨테이너와 VM의 차이"를 기술 원리와 운영 trade-off 관점에서 3분 안에 설명
2. 프로덕션 Kubernetes 클러스터의 배포 전략과 리소스 설정을 설계
3. CrashLoopBackOff, OOMKilled, Pending 상태를 진단하는 체계적 접근법 설명
4. "왜 이 설정을 선택했나"라는 follow-up에 실무 경험 기반으로 답변
5. Kubernetes 네트워크 흐름을 Ingress → Service → Pod까지 추적하여 설명
