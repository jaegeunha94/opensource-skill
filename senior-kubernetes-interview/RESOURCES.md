# Resources: Kubernetes 인터뷰 대비

## 공식 문서 (최우선)

- **Kubernetes 공식 문서**
  https://kubernetes.io/docs/home/
  — 컨셉, 태스크, 레퍼런스 전체. 인터뷰 답변의 1차 근거로 삼는다.

- **Kubernetes Concepts — Cluster Architecture**
  https://kubernetes.io/docs/concepts/architecture/
  — 컨트롤 플레인/노드 컴포넌트 공식 정의.

- **Kubernetes Release Notes**
  https://kubernetes.io/releases/
  — 마이너 버전별 릴리스, 지원 정책(버전 스큐), 패치 일정.

- **API Deprecation Guide**
  https://kubernetes.io/docs/reference/using-api/deprecation-guide/
  — 폐기/제거된 API 버전 전체 목록. 업그레이드 전략 답변의 핵심 근거.

- **Gateway API 공식 문서**
  https://gateway-api.sigs.k8s.io/
  — Ingress 대비 역할 분리, 라우팅 모델.

- **Production Best Practices (kubernetes.io Blog/Docs 통합)**
  https://kubernetes.io/docs/setup/best-practices/
  — 프로덕션 클러스터 구성 권장사항.

## 조사 시점(2026-07) 기준 확인된 최신 사실

레슨 작성 시 아래 사실을 기준으로 예시와 커리큘럼을 조정했다. Kubernetes는 계속 변하므로, 다음 세션에서 레슨을 이어갈 때도 날짜가 오래됐다면 재확인한다.

- **최신 안정 버전**: v1.36 ("Haru", 2026-04-22 릴리스). 직전 v1.35(2025-12), v1.34(2025-08). 지원 정책은 최근 3개 마이너 버전(현재 1.34~1.36), 각 버전 약 1년 패치 지원. kubelet은 kube-apiserver보다 최대 3개 마이너 버전 낮을 수 있음.
  https://kubernetes.io/releases/ , https://kubernetes.io/releases/version-skew-policy/
- **in-tree 클라우드 프로바이더 완전 제거**: 외부 Cloud Controller Manager(CCM)가 필수. `DisableCloudProviders` 기본 true.
  https://github.com/kubernetes/enhancements/blob/master/keps/sig-cloud-provider/2395-removing-in-tree-cloud-providers/README.md
- **kube-proxy nftables 모드**: v1.33부터 stable이지만 기본값은 아직 iptables. 최신 커널(5.13+)·대규모 클러스터에는 nftables 권장.
  https://kubernetes.io/blog/2025/02/28/nftables-kube-proxy/
- **DRA(Dynamic Resource Allocation)**: v1.34에 core GA, v1.36 시점에는 `resource.k8s.io` 그룹 전반이 GA. GPU/가속기 스케줄링의 표준 메커니즘으로 자리잡음.
  https://kubernetes.io/blog/2025/09/01/kubernetes-v1-34-dra-updates/
- **네이티브 사이드카 컨테이너**(`restartPolicy: Always` init container): v1.33에 GA.
  https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/
- **In-place Pod Resize**: v1.33 베타 → v1.35에 GA (메모리 limit 축소 포함). HPA/VPA 답변에서 "리소스 변경 시 Pod 재시작이 필수는 아니다"로 갱신 필요.
  https://kubernetes.io/blog/2025/12/19/kubernetes-v1-35-in-place-pod-resize-ga/
- **FlowSchema/PriorityLevelConfiguration**: `v1beta3`는 v1.32부터 서빙 중단, `flowcontrol.apiserver.k8s.io/v1` 사용.
- **Gateway API**: v1.5(2026-02)에서 나머지 experimental 기능이 Standard/Stable로 승격. Ingress는 여전히 GA이고 폐기되지 않았지만, 신규 클러스터에는 Gateway API가 기본 권장.
  https://gateway-api.sigs.k8s.io/faq/
- **Pod Security 정책**: PodSecurityPolicy는 이미 제거됐고, 내장 후속 기능은 Pod Security Admission(PSA) + Pod Security Standards. 세밀한 정책은 Kyverno(CNCF Incubating) 또는 OPA/Gatekeeper(CNCF Graduated)를 PSA 위에 얹는 구성이 표준.
- **노드 오토스케일링**: Karpenter가 AWS 환경에서 주류(EKS Auto Mode 기본값), Cluster Autoscaler는 GKE 등 멀티 클라우드에서 여전히 표준.
- **멀티 클러스터/플릿 관리**: Cluster API(클러스터 생명주기), Karmada/Rancher(멀티 클러스터 오케스트레이션), Argo CD/Flux(GitOps 일관성)로 무게중심 이동.

## 심화 학습

- **Kubernetes Failure Stories**
  https://k8s.af/
  — 실제 프로덕션 장애 사례 모음. 장애 대응 답변에 구체성을 더할 때 참고.

- **CNCF Blog**
  https://www.cncf.io/blog/
  — 생태계 전반의 최신 실무 동향.

- **Learning Kubernetes / Kubernetes Patterns (O'Reilly)**
  — 워크로드 패턴과 아키텍처 trade-off를 다루는 책. 면접 답변의 구조를 세우는 데 유용.

## 인터뷰 대비

- **CNCF/Linux Foundation CKA 커리큘럼 개요**
  https://github.com/cncf/curriculum
  — 시험 목적이 아니라, 어떤 범위를 시니어 운영 지식으로 기대하는지 파악하는 참고 자료.

- **ByteByteGo / 프로덕션 아키텍처 뉴스레터**
  https://blog.bytebytego.com/
  — Kubernetes 기반 실제 서비스 아키텍처 해설.

## 주의사항

- 블로그 글은 내용 검증 없이 참고하지 않는다. Kubernetes 공식 문서와 release note를 기준으로 삼는다.
- 리소스 이름/필드 암기보다 "왜 이 구조를 선택하는가"와 "장애가 나면 어디부터 확인하는가"를 익히는 데 집중한다.
- 버전과 폐기 정책은 빠르게 바뀐다. 몇 달 이상 지난 뒤 이어서 학습한다면 release notes와 deprecation guide를 다시 확인한다.
