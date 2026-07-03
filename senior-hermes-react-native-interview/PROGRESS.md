# Hermes / React Native Runtime 시니어 인터뷰 — 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-03 | Hermes runtime 선택과 React Native 성능 진단 프레임워크 | [0001-hermes-runtime-selection-performance-diagnosis-framework.html](lessons/0001-hermes-runtime-selection-performance-diagnosis-framework.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 2 | JS 엔진 선택 심화 — Hermes vs JSC(레거시) vs V8 | JSC RN 코어 제거(0.81), 커뮤니티 패키지로만 존속, 엔진별 설계 목표 차이 |
| 3 | Ahead-of-Time 컴파일과 Hermes Bytecode(HBC) | hermesc 컴파일 파이프라인, bytecode 포맷, mmap 로딩 |
| 4 | Startup time 최적화 | TTI, lazy parsing, RAM bundle의 몰락(Hermes와 비호환) |
| 5 | Memory footprint와 메모리 프로파일링 | heap segment, 프로파일링 도구, OOM 진단 |
| 6 | Garbage Collection — GenGC와 Hades | concurrent GC, SATB, pause time trade-off |
| 7 | JSI(JavaScript Interface) | 동기 native 호출, 엔진 독립적 인터페이스, 구 bridge와의 차이 |
| 8 | TurboModules | lazy loading, Codegen, 크래시 패턴(void 메서드 예외) |
| 9 | Fabric 렌더러와 New Architecture 개요 | ShadowNode, Codegen, Bridgeless |
| 10 | New Architecture 전환과 레거시 제거의 실무 영향 | freeze(2025-06), opt-out 제거(0.82), 서드파티 라이브러리 호환성 |

## 현재 학습 위치

**Day 1 완료** — 다음: Day 2 — JS 엔진 선택 심화

## 습득한 핵심 개념

- [x] JS 엔진/런타임의 정의와 모바일 환경이 브라우저와 다른 제약(startup, memory, 배포 크기)을 갖는 이유 (Day 1)
- [x] Hermes 히스토리 타임라인 — RN 0.70(2022) 기본 엔진화 → RN 0.81(2025-08) JSC 코어 제거 → RN 0.82(2025-10) New Architecture 강제화·Hermes V1 opt-in → RN 0.84(2026-02) Hermes V1 기본화 (Day 1)
- [x] Ahead-of-Time 컴파일이 무엇이고 왜 모바일 startup에 유리한지의 기본 개념 (Day 1)
- [x] React Native 성능을 startup / interaction(런타임) / memory / native bridge 경계 4개 축으로 나눠 진단하는 프레임워크 (Day 1)
- [x] "Hermes vs JSC" 질문에 최신 상태(JSC는 커뮤니티 패키지로만 존속)를 반영해서 답하는 법 (Day 1)
- [x] Hermes V1과 Static Hermes(진짜 AOT-네이티브 컴파일)를 혼동하지 않는 구분 (Day 1)
- [ ] Hermes bytecode 컴파일 파이프라인 세부 (예정 Day 3)
- [ ] GenGC vs Hades GC 내부 동작 (예정 Day 6)
- [ ] JSI와 구 bridge의 구조적 차이 (예정 Day 7)
