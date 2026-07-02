# Docker / Kubernetes / 가상화 Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 컨테이너와 Kubernetes 운영 프레임워크 | [0001-container-kubernetes-operations-framework.html](lessons/0001-container-kubernetes-operations-framework.html) |
| 2 | 2026-07-01 | 컨테이너 격리 원리 — 네임스페이스, cgroup, 이미지 레이어 | [0002-container-isolation-namespace-cgroup.html](lessons/0002-container-isolation-namespace-cgroup.html) |
| 3 | 2026-07-02 | Dockerfile 설계 — 레이어 최적화, 멀티스테이지, 보안 | [0003-dockerfile-design-multistage-security.html](lessons/0003-dockerfile-design-multistage-security.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 4 | 컨테이너 볼륨과 스토리지 — PVC/PV, StatefulSet 설계 | emptyDir, hostPath, PVC, StorageClass, StatefulSet |
| 5 | 컨테이너 네트워크 — bridge, CNI, Service DNS | bridge network, overlay, CNI plugin, kube-dns |
| 6 | Docker Compose — 로컬 개발부터 운영 경계까지 | depends_on, network, volume, 운영 적합성 |
| 7 | Kubernetes 컨트롤 플레인 — etcd, kube-apiserver, 스케줄러 | etcd consensus, API server, controller manager, scheduler |
| 8 | Pod 생명주기 — 설계, health check, 재시작 정책 | liveness, readiness, startupProbe, restartPolicy |
| 9 | Deployment와 롤아웃 전략 — RollingUpdate, 롤백, 카나리 | maxSurge, maxUnavailable, rollback, canary |
| 10 | Service와 Ingress — 트래픽 흐름, 로드밸런싱, TLS 종료 | ClusterIP, NodePort, LoadBalancer, Ingress Controller |
| 11 | Resource limit과 QoS — requests/limits, OOMKilled 대응 | requests, limits, BestEffort, Burstable, Guaranteed |
| 12 | 운영 Troubleshooting — CrashLoopBackOff, Pending, 진단 | kubectl describe, logs, events, node 상태 |
| 13 | VM vs 컨테이너 vs 서버리스 — 가상화 스택과 trade-off | hypervisor, hardware virt, cold start, isolation |
| 14 | 시니어 종합 — 실무 설계 케이스, follow-up 대응 | 종합 설계, 인터뷰 시뮬레이션 |

## 현재 학습 위치

**Day 3 완료** — Day 4 (컨테이너 볼륨과 스토리지) 예정.

## 습득한 핵심 개념

- [x] 컨테이너 vs VM 차이와 면접 답변 프레임워크 (Day 1)
- [x] Kubernetes 아키텍처 큰 그림 — 컨트롤 플레인 / 데이터 플레인 (Day 1)
- [x] 시니어 인터뷰에서 평가하는 판단 기준 이해 (Day 1)
- [x] 네임스페이스 / cgroup 격리 원리와 PID 1, OOMKilled, OCI 레이어 구조 (Day 2)
- [x] 멀티스테이지 빌드, non-root 컨테이너 권한 모델, 베이스 이미지 trade-off (Day 3)
- [ ] PVC/PV 설계 (예정 Day 4)
- [ ] CNI와 서비스 네트워크 (예정 Day 5)
- [ ] Docker Compose 운영 고려사항 (예정 Day 6)
- [ ] etcd와 컨트롤 플레인 장애 (예정 Day 7)
- [ ] Pod health check 설계 (예정 Day 8)
- [ ] RollingUpdate와 롤백 (예정 Day 9)
- [ ] Service / Ingress 트래픽 흐름 (예정 Day 10)
- [ ] Resource QoS 클래스 (예정 Day 11)
- [ ] CrashLoopBackOff 진단 프레임워크 (예정 Day 12)
- [ ] VM vs 컨테이너 trade-off (예정 Day 13)
