# Hermes / React Native Runtime — 시니어 개발자 인터뷰 대비 학습 미션

## 목표

10년차 이상 모바일/프론트엔드 개발자로서 Hermes JavaScript 엔진과 React Native 런타임에 대한 인터뷰에서 요구되는 수준의 사고력과 언어를 익힌다.

단순히 "Hermes는 Meta가 만든 JS 엔진이다", "New Architecture는 Fabric과 TurboModules로 구성된다" 수준의 이름 암기가 아니라, 다음을 명확히 설명하고 방어할 수 있어야 한다:

- **JavaScript runtime 선택 판단력**: 왜 모바일에는 브라우저용 JS 엔진(V8, 구 JSC)을 그대로 쓰지 않고 Hermes 같은 모바일 특화 엔진이 필요한지, 언제 엔진 선택이 실제로 프로덕션 지표에 영향을 주는지
- **Startup/memory 성능에 대한 정량적 사고**: TTI(Time-to-Interactive), 메모리 footprint, GC pause를 각각 무엇이 좌우하는지, ahead-of-time bytecode 컴파일이 왜 이 지표들을 개선하는지
- **Native bridge 경계에 대한 정확한 모델**: JSI가 예전 bridge(비동기 JSON 직렬화)와 무엇이 다른지, TurboModules/Fabric이 그 경계를 어떻게 재설계했는지, 이 경계가 실제 장애로 이어지는 지점이 어디인지
- **Crash/debugging 판단력**: Hermes bytecode 크래시를 source map으로 symbolication하는 절차, 프로덕션에서 크래시 원인을 엔진/네이티브/JS 로직 중 어디로 좁힐지 판단하는 능력
- **배포 안정성 판단**: Metro/build 파이프라인에서 Hermes bytecode가 어떻게 생성되는지, React Native 버전과 Hermes 버전이 어떻게 묶여 있는지, OTA(코드 푸시류) 업데이트가 왜 bytecode 호환성 문제를 일으킬 수 있는지
- **운영 관점의 trade-off 설명력**: custom Hermes 빌드, JSC 마이그레이션(현재는 반대 방향 — Hermes가 기본이 된 배경), New Architecture 전환 같은 결정을 비용/이득 관점에서 설명하는 능력

## 대상 역할

- React Native 기반 프로덕션 앱을 담당하는 시니어 모바일/프론트엔드 엔지니어 (10년차 이상)
- JS 런타임 선택, 앱 성능(startup/memory), 크래시 대응, 배포 파이프라인에 대한 아키텍처 의사결정에 관여하는 역할

## 전제 지식

이 워크스페이스는 다음을 이미 안다고 가정한다:

- React Native로 실제 화면을 구현해본 경험 (컴포넌트, 네비게이션, 네이티브 모듈 연동 정도)
- JavaScript 비동기 처리(Promise, `async`/`await`)와 이벤트 루프에 대한 기본 이해
- 모바일 앱 배포(App Store/Play Store) 프로세스에 대한 기초 경험

"Hermes를 켜려면 `gradle.properties`에서 `hermesEnabled=true`를 설정한다" 같은 설정값 암기나 "Hermes vs JSC 뭐가 다른가요?"에 대한 표면적 비교표 수준의 설명은 반복하지 않는다. 대신 그 설정이 왜 그렇게 설계됐는지, 엔진 내부에서 무슨 일이 벌어지는지, 실무에서 잘못 판단하면 어떤 장애·성능 문제로 이어지는지를 다룬다.

## 최신성에 대한 원칙

Hermes와 React Native 런타임은 릴리스 주기가 빠르고 최근에도 구조적 변화가 있었다(JavaScriptCore가 React Native 코어에서 제거됨, Hermes V1이라는 재작성된 컴파일러/VM이 새 기본 엔진이 됨, Static Hermes라는 실험적 AOT-네이티브 컴파일 트랙이 별도로 진행 중, Microsoft가 App Center/CodePush를 단계적으로 종료함 등). 이 워크스페이스는 레슨을 만들 때마다 그 시점의 공식 문서·릴리스 노트·deprecation/migration 가이드·신뢰할 수 있는 production 사례를 확인하고, 오래된 정보와 충돌하면 최신 근거를 우선한다. 각 레슨에는 확인 시점 기준의 최신 상태를 명시하고, 출처가 불확실한 수치(특히 마케팅성 벤치마크)는 "미검증" 또는 "참고용"으로 구분해서 표기한다.

## 커리큘럼 개요 (20 Days)

| Day | 주제 |
|-----|------|
| 1 | Hermes runtime 선택과 React Native 성능 진단 프레임워크 |
| 2 | JS 엔진 선택 심화 — Hermes vs JSC(레거시) vs V8, 언제 무엇이 문제가 되는가 |
| 3 | Ahead-of-Time 컴파일과 Hermes Bytecode(HBC) — 컴파일 파이프라인 |
| 4 | Startup time 최적화 — TTI, lazy parsing, RAM bundle의 몰락 |
| 5 | Memory footprint와 메모리 프로파일링 |
| 6 | Garbage Collection — GenGC와 Hades, concurrent GC의 trade-off |
| 7 | JSI(JavaScript Interface) — bridge를 넘어선 native 통신 모델 |
| 8 | TurboModules — native module 설계, lazy loading, 타입 안전성 |
| 9 | Fabric 렌더러와 New Architecture 개요 |
| 10 | New Architecture 전환과 레거시 아키텍처 제거의 실무 영향 |
| 11 | Metro/build 파이프라인과 Hermes 통합 |
| 12 | Source map과 symbolication — 프로덕션 크래시 스택 복원 |
| 13 | Profiling — Hermes debugger, Chrome DevTools Protocol, React Native DevTools로의 전환 |
| 14 | Crash diagnosis — native bridge 경계에서 발생하는 크래시 패턴 |
| 15 | Android/iOS 패키징 파이프라인에서 Hermes의 역할 |
| 16 | React Native 버전 호환성과 Hermes 버전 관리, 업그레이드 판단 |
| 17 | Custom Hermes 빌드 — 언제, 왜 필요한가 |
| 18 | OTA 업데이트와 Hermes bytecode 호환성 — CodePush 종료와 대안 서비스 비교 |
| 19 | ES 기능 지원과 폴리필 판단 — Hermes가 지원하는 JS 버전의 실무적 의미 |
| 20 | Production 성능 튜닝 종합 — 장애 시나리오 기반 통합 진단 |

## 성공 기준

- 면접관이 "왜 React Native가 Hermes라는 자체 JS 엔진을 만들었나요?"라고 물었을 때, 브라우저용 엔진과 모바일 앱의 제약(startup, memory, 배포 크기)이 왜 다른지부터 설명할 수 있다
- "우리 앱 시작이 느려요"라는 리포트를 받았을 때, startup/interaction/memory/native bridge 중 어디가 병목인지 좁혀가는 절차를 구체적으로 말할 수 있다
- JSI가 왜 기존 bridge보다 native 호출 비용을 줄이는지, 그 대가로 어떤 새로운 위험(동기 호출로 인한 크래시 전파 등)이 생기는지 trade-off로 설명할 수 있다
- 프로덕션 크래시 스택(난독화된 Hermes bytecode 주소)을 어떻게 symbolication해서 실제 원인 코드까지 추적하는지 절차를 설명할 수 있다
- React Native 버전 업그레이드 시 Hermes 버전 호환성을 어떻게 확인하고, OTA 업데이트에서 bytecode 버전 불일치가 왜 위험한지 설명할 수 있다
- "Hermes vs JSC", "구 아키텍처 vs New Architecture" 같은 질문에 최신 상태(무엇이 기본값이고 무엇이 제거되었는지)를 정확히 반영해서 답할 수 있다
