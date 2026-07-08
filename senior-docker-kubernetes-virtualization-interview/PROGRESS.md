# Docker / Kubernetes / 가상화 Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 컨테이너와 Kubernetes 운영 프레임워크 | [0001-container-kubernetes-operations-framework.html](lessons/0001-container-kubernetes-operations-framework.html) |
| 2 | 2026-07-01 | 컨테이너 격리 원리 — 네임스페이스, cgroup, 이미지 레이어 | [0002-container-isolation-namespace-cgroup.html](lessons/0002-container-isolation-namespace-cgroup.html) |
| 3 | 2026-07-02 | Dockerfile 설계 — 레이어 최적화, 멀티스테이지, 보안 | [0003-dockerfile-design-multistage-security.html](lessons/0003-dockerfile-design-multistage-security.html) |
| 4 | 2026-07-03 | 컨테이너 볼륨과 스토리지 — PVC/PV, StatefulSet 설계 | [0004-container-volume-storage-statefulset.html](lessons/0004-container-volume-storage-statefulset.html) |
| 5 | 2026-07-04 | 컨테이너 네트워크 — bridge, CNI, Service DNS | [0005-container-network-cni-service-dns.html](lessons/0005-container-network-cni-service-dns.html) |
| 6 | 2026-07-05 | Docker Compose — 로컬 개발부터 운영 경계까지 | [0006-docker-compose-local-to-production-boundary.html](lessons/0006-docker-compose-local-to-production-boundary.html) |
| 7 | 2026-07-06 | Kubernetes 컨트롤 플레인 — etcd, kube-apiserver, 스케줄러 | [0007-kubernetes-control-plane-etcd-apiserver-scheduler.html](lessons/0007-kubernetes-control-plane-etcd-apiserver-scheduler.html) |
| 8 | 2026-07-07 | Pod 생명주기 — health check, 재시작 정책 | [0008-pod-lifecycle-health-check-restart-policy.html](lessons/0008-pod-lifecycle-health-check-restart-policy.html) |
| 9 | 2026-07-08 | Deployment와 롤아웃 전략 — RollingUpdate, 롤백, 카나리 | [0009-deployment-rollout-rollback-canary.html](lessons/0009-deployment-rollout-rollback-canary.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 10 | Service와 Ingress — 트래픽 흐름, 로드밸런싱, TLS 종료 | ClusterIP, NodePort, LoadBalancer, Ingress Controller |
| 11 | Resource limit과 QoS — requests/limits, OOMKilled 대응 | requests, limits, BestEffort, Burstable, Guaranteed |
| 12 | 운영 Troubleshooting — CrashLoopBackOff, Pending, 진단 | kubectl describe, logs, events, node 상태 |
| 13 | VM vs 컨테이너 vs 서버리스 — 가상화 스택과 trade-off | hypervisor, hardware virt, cold start, isolation |
| 14 | 시니어 종합 — 실무 설계 케이스, follow-up 대응 | 종합 설계, 인터뷰 시뮬레이션 |

## 현재 학습 위치

**Day 9 완료** — Day 10 (Service와 Ingress) 예정.

## 습득한 핵심 개념

- [x] 컨테이너 vs VM 차이와 면접 답변 프레임워크 (Day 1)
- [x] Kubernetes 아키텍처 큰 그림 — 컨트롤 플레인 / 데이터 플레인 (Day 1)
- [x] 시니어 인터뷰에서 평가하는 판단 기준 이해 (Day 1)
- [x] 네임스페이스 / cgroup 격리 원리와 PID 1, OOMKilled, OCI 레이어 구조 (Day 2)
- [x] 멀티스테이지 빌드, non-root 컨테이너 권한 모델, 베이스 이미지 trade-off (Day 3)
- [x] 컨테이너 쓰기 가능 레이어의 휘발성, emptyDir/hostPath/PVC 구분, PV/PVC/StorageClass 관계, StatefulSet 설계 원리 (Day 4)
- [x] veth/bridge/CNI 기반 컨테이너·Pod 네트워크 구성, Service/kube-proxy/CoreDNS 트래픽 흐름 (Day 5)
- [x] Compose 네트워크/볼륨 자동화 원리, depends_on의 순서 vs 준비 상태 함정, healthcheck 기반 해결, Compose와 Kubernetes 운영 경계 판단 기준 (Day 6)
- [x] etcd Raft 쿼럼과 홀수 노드 구성 근거, kube-apiserver 검문소 역할과 watch 기반 컨트롤 루프, 스케줄러 Filtering/Scoring, 컴포넌트별 장애 영향 범위 구분 (Day 7)
- [x] livenessProbe/readinessProbe 역할 분리와 오설계 시 연쇄 재시작 위험, restartPolicy와 CrashLoopBackOff 지수 백오프, startupProbe와 종료 시퀀스(SIGTERM/preStop/terminationGracePeriodSeconds)의 무중단 배포 연관성 (Day 8)
- [x] maxSurge/maxUnavailable과 readinessProbe 연계, rollout undo의 ReplicaSet 복원 원리와 되돌릴 수 없는 부수 효과(DB 마이그레이션), Deployment 기반 근사 카나리와 진짜 트래픽 분할의 차이 (Day 9)
- [ ] Service / Ingress 트래픽 흐름 (예정 Day 10)
- [ ] Resource QoS 클래스 (예정 Day 11)
- [ ] CrashLoopBackOff 진단 프레임워크 (예정 Day 12)
- [ ] VM vs 컨테이너 trade-off (예정 Day 13)
