# Hermes / React Native Runtime 학습 자료

> 이 워크스페이스는 2026-07-03 기준으로 리서치한 최신 정보를 반영한다. Hermes/React Native는 릴리스가 빠르고(약 2개월 주기), 최근에도 JSC 제거·New Architecture 강제화·Hermes V1 출시 같은 구조적 변화가 있었다. 레슨을 추가할 때마다 아래 1차 자료(특히 `CHANGELOG.md`, npm 릴리스 타임스탬프, GitHub Discussions)를 재확인하고 최신 근거를 우선한다.

## 1차 자료 (필수 / 기준서)

### 공식 문서 · 릴리스 소스

- **React Native 공식 문서** — https://reactnative.dev/docs/hermes (엔진 개요), https://reactnative.dev/architecture/overview (New Architecture 개요)
- **facebook/react-native `CHANGELOG.md`** — https://github.com/facebook/react-native/blob/main/CHANGELOG.md (버전별 Hermes/JSC/New Architecture 변경 사항의 가장 신뢰도 높은 1차 소스. 리서치 시점 기준 세션 내에서 직접 fetch로 검증됨)
- **npm 레지스트리 `react-native` 배포 타임스탬프** — https://registry.npmjs.org/react-native (각 버전의 정확한 출시일 확인용)
- **facebook/hermes 저장소** — https://github.com/facebook/hermes , 특히:
  - `doc/GenGC.md` — 기본(레거시) generational GC 설계
  - `doc/Hades.md` — 프로덕션 기본 concurrent GC 설계와 pause time 수치
  - `doc/ReactNativeIntegration.md` — RN과 Hermes 버전이 어떻게 묶여 배포되는지(0.69부터 번들, 0.71부터 Maven Central 배포)
  - `static_h` 브랜치 — Static Hermes(AOT 네이티브 컴파일) 실험 트랙, 아직 프로덕션 미출시
- **reactwg/react-native-new-architecture GitHub Discussions** — https://github.com/reactwg/react-native-new-architecture/discussions (Bridgeless 기본화 #174, Legacy Architecture freeze 공지 #290, Codegen 문서 등 New Architecture 전환의 1차 공지 채널)
- **reactwg/react-native-releases** — https://github.com/reactwg/react-native-releases (Hermes 릴리스가 RN 릴리스와 어떻게 분리·매핑되는지에 대한 `guide-hermes-release.md` 포함)
- **Apple App Store Review Guidelines 2.5.2** — https://developer.apple.com/app-store/review/guidelines/ (OTA JS 업데이트의 정책 근거)
- **Google Play Device and Network Abuse policy** — https://support.google.com/googleplay/android-developer/answer/16559646 (인터프리터/VM에서 실행되는 JS는 명시적으로 예외)

### 책

| 제목 | 저자 | 이유 |
|------|------|------|
| *Fullstack React Native* | Houssein Djirdeh, Anthony Accomazzo 외 | React Native 아키텍처 전반을 실무 코드 기준으로 다룸 |
| *Engineering a Compiler* (2nd ed.) | Keith Cooper, Linda Torczon | AOT 컴파일, bytecode, GC 설계의 이론적 기초 — Hermes 내부 구조를 이해할 때 배경지식으로 유용 |
| *The Garbage Collection Handbook* | Richard Jones 외 | generational GC, concurrent/incremental GC(Hades와 유사한 설계)의 이론적 배경 |
| *Release It!* (2nd ed.) | Michael T. Nygard | 배포 안정성, 롤백 설계를 OTA 업데이트/bytecode 호환성 문제에 유추 적용할 때 참고 |

## 2차 자료 (심화 / 케이스 스터디)

### 엔진 히스토리와 최신 상태 (2024-2026)

- **"Hermes as the Default"** — https://reactnative.dev/blog/2022/07/08/hermes-as-the-default (RN 0.70, 2022-09)
- **RN 0.76 — New Architecture by default, React Native DevTools** — https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture
- **RN 0.81 — JSC 1st-party 지원 제거** — https://reactnative.dev/blog/2025/08/12/react-native-0.81
- **RN 0.82 — "A New Era", New Architecture opt-out 제거, Hermes V1 opt-in** — CHANGELOG.md `v0.82.0` 섹션
- **RN 0.84 — Hermes V1 기본 엔진화, Legacy Architecture 코드 제거** — https://reactnative.dev/blog/2026/02/11/react-native-0.84 (2026-02-11)
- **Software Mansion — "Welcoming the Next Generation of Hermes"** — https://blog.swmansion.com/welcoming-the-next-generation-of-hermes-67ab5679e184 (Hermes V1이 무엇이고 무엇이 아닌지: native codegen·JIT는 아직 없음, Hades가 기본 GC)
- **`@react-native-community/javascriptcore`** — https://github.com/react-native-community/javascriptcore (JSC를 계속 쓰려면 필요한 커뮤니티 패키지, RN 0.79+ New Architecture 전제)
- **Static Hermes 관련 GitHub Discussions** — https://github.com/facebook/hermes/discussions/1137 (시도 방법과 미성숙도), https://github.com/facebook/hermes/discussions/1685

### New Architecture / Legacy Architecture 전환

- **Bridgeless by Default (RN 0.74)** — https://github.com/reactwg/react-native-new-architecture/discussions/174
- **Freezing the Legacy Architecture (2025-05-29 공지, 2025-06-02 발효)** — https://github.com/reactwg/react-native-new-architecture/discussions/290
- **Codegen 문서** — https://github.com/reactwg/react-native-new-architecture/blob/main/docs/codegen.md

### 크래시 진단 · 디버깅 · Symbolication

- **RFC 0641 — Decoupling Flipper from React Native Core** — https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0641-decoupling-flipper-from-react-native-core.md (Flipper 폐지 배경과 React Native DevTools로의 전환)
- **Sentry — React Native Hermes source maps** — https://docs.sentry.io/platforms/react-native/sourcemaps/uploading/hermes/
- **facebook/react-native 이슈 #53960** — TurboModule void 메서드 예외가 JS로 전파되지 않아 발생하는 EXC_BAD_ACCESS/SIGABRT 패턴 (실제 프로덕션 크래시 사례)
- **Radon IDE (Software Mansion)** — https://github.com/software-mansion/radon-ide (React Native DevTools + Hermes CPU 프로파일러를 에디터에 통합)

### OTA 업데이트 / CodePush 대체재

- **Microsoft App Center 은퇴 공지** — App Center는 2025-03-31 종료(Analytics/Diagnostics만 2027-03-31까지 유지). `microsoft/react-native-code-push` 저장소는 2025-05-20 archive됨. 자체 호스팅용 `microsoft/code-push-server`가 남아있으나 비공식/무지원.
- **EAS Update (Expo)** — https://docs.expo.dev/eas-update/introduction/ , 마이그레이션 가이드 https://docs.expo.dev/eas-update/codepush/ — 채널/브랜치 기반 서버 사이드 업데이트 제어, 롤백/republish, code signing, `runtimeVersion`으로 네이티브 바이너리-JS 번들 호환성 게이팅
- **react-native-update (Pushy / Cresc)** — https://github.com/reactnativecn/react-native-update — bsdiff 기반 delta 업데이트, Hermes bytecode·New Architecture 지원(단, RN 0.73~0.76 구간 New Arch 이슈 있음)
- **Hot Updater** — https://github.com/gronxb/hot-updater — 셀프호스팅, S3/R2/Supabase 등 스토리지 플러그인 구조
- **Apple DPLA §3.3.2 / Guideline 2.5.2 해설** — interpreted code(JS)는 앱의 "primary purpose"를 바꾸지 않고, 별도 스토어를 만들지 않고, 보안 기능을 우회하지 않는 한 다운로드·실행 가능하다는 예외 조항. OTA 업데이트가 "왜 심사 없이 가능한가"의 근거.

## 실습 / 디버깅 도구

| 도구 | 용도 |
|------|------|
| **React Native DevTools** (Metro 터미널에서 `j`) | RN 0.76+ 기본 디버거. CDP 기반, Network/Performance 패널(0.83+), React DevTools 통합 |
| **metro-symbolicate** / `metro-source-map` | Hermes bytecode 오프셋 크래시 스택을 원본 소스 위치로 복원 |
| **hermesc** (`-O -emit-binary -output-source-map`) | JS를 Hermes bytecode로 AOT 컴파일하고 source map 생성 |
| **Sentry / SmartBear Insight Hub(구 Bugsnag)** | 프로덕션 크래시 리포팅, Hermes bytecode 인식 source map 업로드 지원 |
| **Radon IDE** | VS Code/Cursor 내 React Native DevTools + Hermes CPU 프로파일러 통합 |
| **Xcode Instruments / Android Studio Profiler** | JS 엔진 경계를 넘어선 네이티브 메모리·CPU 프로파일링 |

## 핵심 개념 사전 이해용

| 개념 | 추천 자료 |
|------|-----------|
| JS 엔진과 bytecode란 무엇인가 | *Engineering a Compiler* 1~2장, 또는 V8/Hermes 아키텍처 개요 발표 |
| Generational/Concurrent GC | *The Garbage Collection Handbook* 관련 챕터, `doc/Hades.md` |
| JSI와 native bridge 경계 | reactnative.dev/architecture/overview, `RCTTurboModule.mm` 관련 논의 |
| 앱스토어 OTA 업데이트 정책 | Apple Guideline 2.5.2 + DPLA §3.3.2, Google Play Device and Network Abuse policy |
