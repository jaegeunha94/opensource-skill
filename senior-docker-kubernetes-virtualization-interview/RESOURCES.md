# Docker / Kubernetes / 가상화 — 학습 참고 자료

## 공식 문서

| 자료 | 설명 |
|------|------|
| [Docker 공식 문서](https://docs.docker.com/) | Dockerfile, Compose, 네트워크, 볼륨 레퍼런스 |
| [Kubernetes 공식 문서](https://kubernetes.io/docs/) | 가장 신뢰할 수 있는 K8s 레퍼런스 |
| [Kubernetes API Reference](https://kubernetes.io/docs/reference/kubernetes-api/) | Pod, Deployment, Service YAML 필드 완전 참조 |
| [OCI Image Spec](https://github.com/opencontainers/image-spec) | 컨테이너 이미지 표준 |
| [CNI Spec](https://github.com/containernetworking/cni) | 컨테이너 네트워크 인터페이스 표준 |

## 핵심 서적

| 서적 | 설명 |
|------|------|
| *Kubernetes in Action* — Marko Luksa | K8s 내부 동작 원리까지 다루는 가장 심층적인 입문서 |
| *Docker Deep Dive* — Nigel Poulton | Docker 핵심 개념을 간결하게 정리 |
| *Production Kubernetes* — Josh Rosso 외 | 실제 프로덕션 운영에서 마주치는 문제들 |
| *Container Security* — Liz Rice | 컨테이너 보안과 격리 원리 |

## 심층 학습 자료

| 자료 | 설명 |
|------|------|
| [CNCF Landscape](https://landscape.cncf.io/) | 클라우드 네이티브 생태계 전체 지도 |
| [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) | 컨트롤 플레인을 직접 구성하며 원리 이해 |
| [Ivan Velichko — Container Internals](https://iximiuz.com/en/) | 컨테이너 내부 동작을 가장 잘 설명하는 블로그 |
| [Learnk8s](https://learnk8s.io/) | 시각화로 K8s 개념을 설명하는 고품질 자료 |
| [Linux Namespaces](https://man7.org/linux/man-pages/man7/namespaces.7.html) | 커널 레벨 격리 원리 |

## 인터뷰 준비 참고

| 자료 | 설명 |
|------|------|
| [CKAD Curriculum](https://github.com/cncf/curriculum) | Kubernetes 인증 커리큘럼 — 시험 범위가 곧 실무 기준 |
| [CKA Curriculum](https://github.com/cncf/curriculum) | 클러스터 관리자 수준의 운영 지식 |
| [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes) | K8s 관련 자료 모음 |

## 실습 환경

| 도구 | 설명 |
|------|------|
| [minikube](https://minikube.sigs.k8s.io/) | 로컬 단일 노드 K8s 클러스터 |
| [kind (Kubernetes in Docker)](https://kind.sigs.k8s.io/) | Docker 컨테이너 안에서 K8s 클러스터 실행 |
| [k3s](https://k3s.io/) | 경량 K8s, 실제 노드에 설치하기 좋음 |
| [Play with Kubernetes](https://labs.play-with-k8s.com/) | 브라우저에서 무료 K8s 실습 |
