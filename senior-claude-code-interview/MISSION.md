# Mission: Claude Code — 10년차 이상 개발자 인터뷰 대비

## Why

Claude Code를 "터미널에서 자연어로 코드 짜주는 툴"로만 다루는 수준을 넘어, 팀/조직에 agentic coding 워크플로우를 설계·도입·운영하는 시니어 역할이 요구하는 판단력을 갖추기 위해서다.
인터뷰에서는 "어떤 명령어를 치느냐"가 아니라 "이 도구가 내부적으로 어떻게 동작하는가, 코드베이스 컨텍스트를 어떻게 설계해야 신뢰할 수 있는 결과가 나오는가, 권한/보안 경계를 어떻게 설정해야 하는가, CI/CD와 팀 운영에 어떻게 통합하고 생산성과 품질 사이의 trade-off를 어떻게 관리하는가"를 본다.
이 워크스페이스는 그 판단 근거를 체계적으로 익히는 것을 목표로 한다.

## Success looks like

- Claude Code의 agentic loop(도구 호출 루프)이 내부적으로 어떻게 동작하는지 설명하고, 이것이 왜 단순 코드 자동완성과 다른지 근거를 들어 설명할 수 있다
- terminal/IDE/web/desktop 등 surface별 아키텍처 차이와 각각을 언제 선택해야 하는지 실무 기준으로 설명할 수 있다
- CLAUDE.md, instructions, memory 설계를 통해 코드베이스 컨텍스트 품질을 어떻게 관리하는지 설명할 수 있다
- 권한 모드(permission mode), 샌드박싱, shell/file 도구 실행 경계를 조직 보안 요구사항에 맞게 설계할 수 있다
- MCP, Skills, Hooks, Plugins, Subagents/agent teams, background agent의 차이를 정확히 구분하고 언제 무엇을 쓰는지 판단할 수 있다
- Remote Control, 세션 관리, context compaction, prompt caching이 실무 비용/성능/신뢰성에 미치는 영향을 설명할 수 있다
- 코드 리뷰 자동화, CI/CD 파이프라인 통합, 팀 단위 운영/거버넌스(enterprise/admin 설정)를 설계할 수 있다
- observability, 트러블슈팅, production 도입 패턴을 실제 장애/도입 시나리오 기준으로 설명할 수 있다
- 생산성 향상과 코드 품질/보안 사이의 trade-off를 인터뷰어의 follow-up에 근거 있게 답할 수 있다

## Constraints

- 기본적인 CLI 사용 경험(터미널 명령 실행, git 기본)은 이미 알고 있다고 전제한다
- 단순 슬래시 커맨드 목록 암기나 프롬프트 작성 팁 나열은 이 워크스페이스의 목표가 아니다
- 레슨은 면접 대비 중심이므로 각 Day는 인터뷰 질문 → 사고 구조 → 실무 판단 순서로 구성한다
- Claude Code는 변경 주기가 매우 빠른 제품이므로, 레슨 작성 시점 기준 최신 공식 문서·changelog·release note·deprecation/migration guide를 확인하고 반영한다. 아래 `RESOURCES.md`에 조사 시점의 최신 사실을 기록해 둔다. 저장된 커리큘럼 항목이 최신 근거와 충돌하면 최신 근거를 우선한다

## Out of scope

- Claude Code 입문자용 설치 가이드, 슬래시 커맨드 사용법 나열
- 특정 프로젝트의 코딩 스타일 가이드 작성 실습
- Claude API/Anthropic SDK 자체의 모델 파라미터 심화 (해당 내용은 `senior-llm-engineering-interview`에서 다룬다)
- 범용 AI 에이전트 하네스 설계 이론 (해당 내용은 `senior-ai-harness-interview`에서 다룬다)
