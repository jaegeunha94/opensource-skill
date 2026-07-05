# Kubernetes 인터뷰 대비 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-03 | Kubernetes 클러스터 운영과 장애 대응 프레임워크 | [0001-cluster-architecture-incident-response-framework.html](lessons/0001-cluster-architecture-incident-response-framework.html) |
| 2 | 2026-07-03 | Pod 설계, Probe, Resource Request/Limit | [0002-pod-probe-resource-request-limit.html](lessons/0002-pod-probe-resource-request-limit.html) |
| 3 | 2026-07-04 | Deployment Rollout/Rollback과 배포 안정성 | [0003-deployment-rollout-rollback-stability.html](lessons/0003-deployment-rollout-rollback-stability.html) |
| 4 | 2026-07-05 | StatefulSet과 상태 유지 워크로드 설계 | [0004-statefulset-stateful-workload-design.html](lessons/0004-statefulset-stateful-workload-design.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 5 | DaemonSet과 노드 레벨 운영 | 노드당 1개 보장, 업그레이드 롤아웃, 로그/모니터링 에이전트 배치 패턴, 리소스 경합 |
| 6 | Service, CoreDNS, 서비스 디스커버리 | ClusterIP/NodePort/LoadBalancer/Headless, kube-proxy 동작(iptables vs nftables), CoreDNS 캐싱/장애 패턴 |
| 7 | Ingress vs Gateway API — 트래픽 라우팅 설계 | Ingress Controller 구조, Gateway API 역할 분리(GatewayClass/Gateway/HTTPRoute), 마이그레이션 판단 |
| 8 | CNI 네트워킹과 클러스터 네트워크 트러블슈팅 | Pod 네트워크 모델, CNI 플러그인 비교, NetworkPolicy, DNS/연결 장애 진단 순서 |
| 9 | Storage/Volume 설계 (PV/PVC, StorageClass, CSI) | 동적 프로비저닝, 접근 모드, Reclaim Policy, StatefulSet과 볼륨, CSI 장애 패턴 |
| 10 | ConfigMap/Secret과 설정/시크릿 관리 | 마운트 vs 환경변수, 갱신 전파 지연, Secret 암호화(etcd encryption at rest), 외부 시크릿 매니저 연동 |
| 11 | HPA/VPA와 오토스케일링, DRA/GPU 스케줄링 | 메트릭 기반 스케일링, HPA·VPA 충돌, In-place Resize와 VPA 관계, DRA(GPU/가속기) 개요, 노드 오토스케일러(Karpenter vs Cluster Autoscaler) |
| 12 | 스케줄링 심화 | Affinity/Anti-affinity, Taint/Toleration, Topology Spread Constraint, 스케줄링 실패 진단 |
| 13 | RBAC와 권한 경계 설계 | Role vs ClusterRole, 최소 권한, ServiceAccount 토큰, 흔한 과잉 권한 실수 |
| 14 | Admission Control과 보안 하드닝 | Pod Security Admission/Standards, Kyverno/OPA Gatekeeper, Webhook 장애 시 클러스터 영향, 이미지 서명/공급망 보안 |
| 15 | Observability — 로그/메트릭/트레이싱 | 클러스터 레벨 로깅 아키텍처, Prometheus 기반 메트릭, 분산 트레이싱, 컨테이너 재시작/OOM 가시성 |
| 16 | 프로덕션 장애 트러블슈팅 종합 시나리오 | Pending/CrashLoopBackOff/ImagePullBackOff/NotReady 노드 등 복합 장애 진단 순서 |
| 17 | 업그레이드 전략과 버전 스큐 관리 | 컨트롤 플레인/노드 업그레이드 순서, API 폐기 대응, 무중단 업그레이드 설계 |
| 18 | Multi-cluster Trade-off와 플릿 관리 | 단일 대형 클러스터 vs 다중 클러스터, Cluster API, GitOps 기반 플릿 관리, 재해 복구 |
| 19 | 종합 설계 면접 — 대규모 서비스 Kubernetes 아키텍처 설계 | 전 주제 통합, 요구사항부터 배포/보안/관측성까지 end-to-end 설계 |

## 현재 학습 위치

**Day 4 완료** — Day 5: DaemonSet과 노드 레벨 운영으로 진행 예정.

## 습득한 핵심 개념

- [x] 컨트롤 플레인 컴포넌트(kube-apiserver, etcd, kube-scheduler, kube-controller-manager, cloud-controller-manager) 역할과 장애 시 blast radius (Day 1)
- [x] 노드 컴포넌트(kubelet, kube-proxy, container runtime/CRI) 역할 (Day 1)
- [x] 선언적 모델과 reconciliation loop, watch 메커니즘 (Day 1)
- [x] 클러스터 장애 대응 프레임워크(범위 판단 → 컨트롤 플레인 상태 → 노드 상태 → 워크로드 레벨 → 네트워크 → 완화/롤백 → 재발 방지) (Day 1)
- [x] etcd가 단일 진실 소스(SSOT)인 이유와 쿼럼/백업의 중요성 (Day 1)
- [x] Request(스케줄링 예약) vs Limit(커널 강제)의 역할 차이, CPU 쓰로틀링 vs 메모리 OOM kill 비대칭성 (Day 2)
- [x] QoS Class(Guaranteed/Burstable/BestEffort)와 노드 메모리 압박 시 축출 우선순위 (Day 2)
- [x] liveness/readiness/startup probe의 실패 결과 차이와 설계 실수 패턴 (Day 2)
- [x] OOMKilled 진단(Last State 확인)과 일반 크래시와의 구분 (Day 2)
- [x] In-place Pod Resize GA(v1.35)와 resizePolicy·VPA InPlaceOrRecreate 베타의 한계 (Day 2)
- [x] Deployment의 ReplicaSet 세대 관리와 revisionHistoryLimit, maxSurge/maxUnavailable, progressDeadlineSeconds/Proportional Scaling (Day 3)
- [x] PodDisruptionBudget은 워크로드 컨트롤러의 rolling update를 제한하지 않는다는 것(voluntary eviction 전용), unhealthyPodEvictionPolicy(AlwaysAllow, v1.27 stable) (Day 3)
- [x] 롤백이 항상 안전하지 않은 이유(데이터 마이그레이션 동반 배포, expand/contract 패턴) (Day 3)
- [x] Ordinal identity, Headless Service, volumeClaimTemplates로 구성되는 StatefulSet의 안정적 정체성 3요소 (Day 4)
- [x] OrderedReady vs Parallel podManagementPolicy 선택 기준과 애플리케이션의 부팅 순서 의존성 (Day 4)
- [x] RollingUpdate 역순 진행과 partition을 이용한 순번 단위 canary 검증 (Day 4)
- [x] PersistentVolumeClaimRetentionPolicy(GA, v1.32~)의 whenDeleted/whenScaled Retain vs Delete 트레이드오프 (Day 4)
- [x] PV 토폴로지 제약(존/노드 바인딩)이 StatefulSet Pod 재스케줄을 막을 수 있다는 것과 StatefulSet이 클러스터링 로직 자체를 대신하지 않는다는 경계 (Day 4)
- [ ] DaemonSet 운영 (예정 Day 5)
- [ ] Service/CoreDNS (예정 Day 6)
- [ ] Ingress vs Gateway API (예정 Day 7)
- [ ] CNI 네트워킹/NetworkPolicy (예정 Day 8)
- [ ] Storage/Volume/CSI (예정 Day 9)
- [ ] ConfigMap/Secret 관리 (예정 Day 10)
- [ ] HPA/VPA, DRA, 노드 오토스케일링 (예정 Day 11)
- [ ] 스케줄링 심화 (예정 Day 12)
- [ ] RBAC (예정 Day 13)
- [ ] Admission Control/보안 하드닝 (예정 Day 14)
- [ ] Observability (예정 Day 15)
- [ ] 종합 트러블슈팅 (예정 Day 16)
- [ ] 업그레이드 전략 (예정 Day 17)
- [ ] Multi-cluster trade-off (예정 Day 18)
- [ ] 종합 아키텍처 설계 (예정 Day 19)
