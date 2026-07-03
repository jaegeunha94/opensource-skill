# CPU 실행 모델 학습 (Day 2, 인터뷰 커리큘럼)

Day 2 레슨에서 fetch-decode-execute 사이클, 레지스터/ALU/load-store 구조,
레지스터 압력과 spilling, 그리고 volatile·atomic이 이 실행 모델과 어떻게
연결되는지를 학습했습니다. Day 1의 메모리 계층 지연 시간 개념을 "왜 ALU는
메모리를 직접 계산하지 않고 레지스터를 거치는가"에 대한 근거로 재사용했습니다.

## Implications

- Day 3(메모리 계층 심화)에서 캐시-RAM 사이의 bandwidth 관점을 다룰 때,
  load/store 명령어가 실제로 어떤 하드웨어 자원과 충돌하는지 연결할 수 있음
- register spilling 개념은 Day 5(pipeline, branch prediction)의 데이터
  의존성 스톨(stall) 논의와 자연스럽게 이어짐
- volatile/atomic과 실행 모델의 연결은 Day 6(멀티코어, cache coherence,
  false sharing) 학습의 사전 지식으로 활용 가능
