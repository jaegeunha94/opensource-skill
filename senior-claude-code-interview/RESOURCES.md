# Resources: Claude Code 인터뷰 대비

## 공식 문서 (최우선)

- **Claude Code 문서 홈**
  https://code.claude.com/docs/en/overview
  — 2026년 초 `docs.claude.com/.../claude-code` 경로가 `code.claude.com/docs`로 이전됨. 인터뷰 답변의 1차 근거로 삼는다.

- **How Claude Code works (agentic loop)**
  https://code.claude.com/docs/en/how-claude-code-works
  — gather context / take action / verify results 3단계 루프, 도구 카테고리, 실행 환경(local/cloud/remote control), 세션·컨텍스트 윈도우·checkpoint 개념의 1차 출처.

- **Agent SDK — How the agent loop works**
  https://code.claude.com/docs/en/agent-sdk/agent-loop
  — turn/message 단위로 더 형식화된 루프 설명(SystemMessage/AssistantMessage/UserMessage/ResultMessage), max_turns/max_budget_usd, effort level, 자동 compaction 메커니즘의 1차 출처.

- **Configure permissions**
  https://code.claude.com/docs/en/permissions
  — 권한 규칙 문법(allow/deny/ask), 평가 순서(deny → ask → allow), Bash/Read/Edit/WebFetch/MCP/Agent별 규칙, managed settings, 샌드박싱과의 관계.

- **Choose a permission mode**
  https://code.claude.com/docs/en/permission-modes
  — default / acceptEdits / plan / auto / dontAsk / bypassPermissions 모드별 상세.

- **Sandboxing**
  https://code.claude.com/docs/en/sandboxing , https://code.claude.com/docs/en/sandbox-environments
  — Bash 도구의 OS 레벨 파일시스템/네트워크 격리.

- **Memory (CLAUDE.md, auto memory)**
  https://code.claude.com/docs/en/memory
  — CLAUDE.md와 자동 메모리(MEMORY.md, 세션 시작 시 최대 200줄/25KB 로드)의 차이, `.claude/rules/` path-scoped rules, import(`@path`), AGENTS.md 상호운용, enforcement 한계, compaction과의 상호작용.

- **Monorepos and large codebases**
  https://code.claude.com/docs/en/large-codebases
  — 서브디렉토리별 CLAUDE.md, `claudeMdExcludes`, Read deny 규칙, code intelligence 플러그인, sparse worktree, `additionalDirectories`/`--add-dir` 차이, 플러그인/MCP를 통한 컨벤션 중앙화.

- **MCP, Skills, Hooks, Plugins**
  https://code.claude.com/docs/en/mcp , https://code.claude.com/docs/en/skills , https://code.claude.com/docs/en/hooks-guide , https://code.claude.com/docs/en/plugins

- **Subagents, Agent Teams, Workflows, Background agent**
  https://code.claude.com/docs/en/sub-agents , https://code.claude.com/docs/en/agent-teams , https://code.claude.com/docs/en/workflows , https://code.claude.com/docs/en/agent-view

- **Remote Control, Channels, Routines**
  https://code.claude.com/docs/en/remote-control , https://code.claude.com/docs/en/channels , https://code.claude.com/docs/en/routines

- **Code Review, GitHub Actions, GitLab CI/CD**
  https://code.claude.com/docs/en/code-review , https://code.claude.com/docs/en/github-actions , https://code.claude.com/docs/en/gitlab-ci-cd

- **Sessions, Checkpointing, Context window, Prompt caching, Costs**
  https://code.claude.com/docs/en/sessions , https://code.claude.com/docs/en/checkpointing , https://code.claude.com/docs/en/context-window , https://code.claude.com/docs/en/prompt-caching , https://code.claude.com/docs/en/costs

- **Model configuration, 클라우드 프로바이더**
  https://code.claude.com/docs/en/model-config , https://code.claude.com/docs/en/amazon-bedrock , https://code.claude.com/docs/en/google-vertex-ai , https://code.claude.com/docs/en/microsoft-foundry

- **Enterprise/Admin, Server-managed settings, Analytics**
  https://code.claude.com/docs/en/admin-setup , https://code.claude.com/docs/en/server-managed-settings , https://code.claude.com/docs/en/analytics

- **Security**
  https://code.claude.com/docs/en/security , https://code.claude.com/docs/en/security-guidance , https://code.claude.com/docs/en/agent-sdk/secure-deployment

- **Observability (OpenTelemetry)**
  https://code.claude.com/docs/en/monitoring-usage , https://code.claude.com/docs/en/agent-sdk/observability

- **Troubleshooting, Error reference, Glossary**
  https://code.claude.com/docs/en/troubleshooting , https://code.claude.com/docs/en/errors , https://code.claude.com/docs/en/glossary

- **Changelog / What's New (주간 릴리스 로그)**
  https://code.claude.com/docs/en/changelog , https://code.claude.com/docs/en/whats-new
  Raw changelog: https://raw.githubusercontent.com/anthropics/claude-code/refs/heads/main/CHANGELOG.md

- **전체 문서 인덱스**
  https://code.claude.com/docs/llms.txt
  — 모든 문서 페이지 목록. 새 레슨 작성 전 이 인덱스로 최신 페이지 구성을 다시 확인한다.

## 조사 시점(2026-07) 기준 확인된 최신 사실

레슨 작성 시 아래 사실을 기준으로 예시와 커리큘럼을 조정했다. Claude Code는 변경 주기가 매우 빠르므로, 다음 세션에서 레슨을 이어갈 때도 시간이 지났다면 재확인한다.

- **문서 도메인 이전**: `docs.claude.com/en/docs/claude-code/*` → `code.claude.com/docs/en/*`로 301 이전됨. 오래된 링크를 인용할 때는 리다이렉트를 감안한다.
- **기본 모델**: Claude Sonnet 5가 네이티브 1M 토큰 컨텍스트 윈도우와 함께 기본 모델로 도입됨(버전 2.1.197 전후). Opus 4.8도 병행 제공되며 복잡한 아키텍처 판단에는 Opus, 일반 코딩 작업에는 Sonnet을 권장하는 기조가 유지됨.
- **에이전틱 루프의 공식 프레이밍**: 문서는 루프를 "gather context → take action → verify results" 3단계로 설명하고, Claude Code 자체를 모델을 감싸는 "agentic harness"(도구·컨텍스트 관리·실행 환경을 제공하는 층)로 정의한다. Agent SDK 문서는 이를 turn 단위(SystemMessage → AssistantMessage ↔ tool 실행 → 최종 ResultMessage)로 더 형식화해서 설명한다.
- **권한 모드**: `default`, `acceptEdits`, `plan`, `auto`(research preview, 백그라운드 안전성 분류기로 자동 승인/거부), `dontAsk`, `bypassPermissions` 6종. `auto` 모드는 아직 연구 프리뷰 단계이므로 프로덕션 표준으로 서술하지 않는다. `bypassPermissions`는 루트/홈 디렉토리 삭제 같은 위험 명령에는 여전히 프롬프트하는 circuit breaker가 있다.
- **권한 규칙 평가 순서**: deny → ask → allow 순으로 평가되며, 규칙의 구체성은 순서를 바꾸지 않는다. `PreToolUse` 훅의 차단(exit code 2)은 permission 규칙보다도 먼저 적용된다.
- **샌드박싱과 권한은 별개 계층**: 권한(permission)은 Claude Code가 어떤 도구를 시도할지를 통제하고, 샌드박스는 Bash 도구와 그 자식 프로세스에 대해 OS 레벨로 파일시스템/네트워크 접근을 강제한다. 두 계층을 함께 써야 defense-in-depth가 된다.
- **컨텍스트 관리**: 컨텍스트가 한도에 근접하면 오래된 tool output부터 지우고, 필요하면 대화를 요약(compaction)한다. `CLAUDE.md`에 "Compact Instructions" 섹션을 추가하거나 `/compact focus on ...`으로 요약 시 보존할 내용을 지정할 수 있다. 시스템 프롬프트/도구 정의/CLAUDE.md처럼 매 요청 동일한 접두부는 prompt caching으로 비용을 낮춘다.
- **서브에이전트 컨텍스트 격리**: 서브에이전트는 완전히 새로운 컨텍스트에서 시작하며(프로젝트 레벨 CLAUDE.md는 로드하지만 부모의 대화 turn은 보지 않음), 부모 컨텍스트는 서브에이전트의 전체 transcript가 아니라 최종 요약만큼만 늘어난다. 이는 긴 세션에서 서브에이전트가 컨텍스트 관리 수단으로 쓰이는 핵심 이유다.
- **에이전트 확장 계층**: 문서는 core agentic loop 위에 Skills(온디맨드 로드, 재사용 워크플로우), MCP(외부 도구/데이터 연결), Hooks(실행 시점 자동화), Subagents(위임·컨텍스트 격리)를 "확장 레이어"로 명시적으로 구분한다. 이 구분 자체가 인터뷰에서 자주 묻는 포인트다.
- **Surfaces**: Terminal, VS Code, JetBrains(베타), Desktop app, Web(claude.ai/code), Remote Control, Slack, Chrome(GA), GitHub Actions/GitLab CI/CD까지 확장됨. 문서는 "모든 surface가 동일한 agentic loop과 엔진을 공유하며, CLAUDE.md/설정/MCP 서버가 surface 간에 공유된다"는 점을 강조한다. 실행 환경은 Local(로컬 머신) / Cloud(Anthropic 관리 VM) / Remote Control(로컬 실행 + 브라우저 제어) 3가지로 구분된다.
- **최근 changelog 주요 흐름(버전 2.1.17x ~ 2.1.199)**: 서브에이전트 기본 백그라운드 실행 및 최대 5단계 중첩 스폰, Agent Teams의 실패 리포팅 개선, Auto mode의 안전장치 강화(파괴적 git/terraform 명령 차단), `sandbox.credentials`/`sandbox.allowAppleEvents` 등 샌드박스 세분화 설정 추가, `/simplify`가 `/code-review`로 개명, `/agents` 위저드 제거 등 UI 정리가 계속 진행 중. 버전 번호와 세부 동작은 몇 달 내 다시 바뀔 수 있으므로 재확인 없이 특정 버전 번호를 단정적으로 답하지 않는다.
- **Agent SDK와 Claude Code CLI의 관계**: Agent SDK는 Claude Code CLI와 동일한 실행 루프·도구 세트를 프로그래밍 방식으로 노출하는 별도 패키지로, CLI 설치 없이도 커스텀 에이전트를 만들 수 있다. `permission_mode`, `max_turns`, `max_budget_usd`, `effort` 같은 옵션으로 자율성/비용/추론 깊이를 세밀하게 통제한다.
- **(Day 2 조사, 2026-07-04) Surfaces와 실행 환경**: 공식 문서(`/en/overview`, `/en/how-claude-code-works`)는 "각 surface는 동일한 엔진에 연결되며 CLAUDE.md/설정/MCP 서버가 surface 간 공유된다"고 명시하고, 실행 환경을 Local/Cloud/Remote Control 3가지로 구분한다. Remote Control은 Cloud가 아니라 Local 실행 + 브라우저 원격 제어라는 점이 Web(claude.ai/code, Cloud 실행)과 가장 혼동되는 지점이다.
- **(Day 2 조사) CLI headless 자동화**: `-p`/`--print` 모드는 `--output-format text|json|stream-json`, `--max-turns`, `--max-budget-usd`, `--permission-mode`, `--allowedTools`/`--disallowedTools` 등으로 사람의 실시간 승인을 대체하는 명시적 상한선을 설정한다. `claude-code-action`은 베타에서 GA `v1`으로 전환되며 `mode` 설정 제거(자동 감지), `direct_prompt`→`prompt`, 개별 옵션들이 `claude_args`로 통합되는 breaking change가 있었다.
- **(Day 2 조사) Surface 간 브리지 기능**: 최근 changelog에는 `claude --teleport`(웹/모바일 세션을 터미널로), Dispatch(모바일→Desktop 세션 기동), Channels(Telegram/Discord/iMessage/webhook 연동), Agent view(`claude agents`), Ultraplan(클라우드 계획 초안→웹 리뷰→원격/로컬 실행, 초기 프리뷰), Routines(웹에서 스케줄/이벤트/API로 템플릿 클라우드 에이전트 실행) 등이 계속 추가되고 있다. 세부 명령어와 GA/beta 상태는 몇 주 단위로 바뀌므로 `/en/whats-new`로 재확인한다.
- **(Day 3 조사, 2026-07-05) CLAUDE.md 4단계 스코프와 로드 순서**: managed policy(OS별 고정 경로 또는 `managed-settings.json`의 `claudeMd` 키) → user(`~/.claude/CLAUDE.md`) → project(`./CLAUDE.md` 또는 `./.claude/CLAUDE.md`) → local(`./CLAUDE.local.md`) 순으로 이어붙여진다(덮어쓰기 아님). 작업 디렉토리와 그 모든 상위 디렉토리의 CLAUDE.md/CLAUDE.local.md는 launch 시 즉시 로드되지만, **서브디렉토리**의 CLAUDE.md는 Claude가 그 서브디렉토리 안의 파일을 읽을 때 온디맨드로 로드된다. 이 즉시-로드 vs 온디맨드-로드 구분이 가장 자주 놓치는 지점이다.
- **(Day 3 조사) `.claude/rules/` — path-scoped rules**: per-directory CLAUDE.md와 별개로, `.claude/rules/*.md`에 YAML frontmatter `paths:` 글롭 패턴을 지정해 특정 파일 패턴을 다룰 때만 조건부로 로드되는 규칙을 만들 수 있다(`paths` 없으면 `.claude/CLAUDE.md`와 같은 우선순위로 launch 시 로드). 심볼릭 링크 지원, 사용자 레벨(`~/.claude/rules/`)이 프로젝트 레벨보다 먼저(=낮은 우선순위로) 로드된다. Per-directory CLAUDE.md(코드 옆에 위치, 그 팀이 소유)와 path-scoped rules(중앙 `.claude/`에 위치, 흩어진 여러 경로에 같은 규칙 적용) 중 상황에 맞게 선택한다.
- **(Day 3 조사) 컨텍스트 비용의 진짜/가짜 절감 수단**: CLAUDE.md는 200줄 이하 권장(길수록 컨텍스트 소모↑, 준수율↓). `@path` import(최대 4단계 재귀, 첫 사용 시 승인 다이얼로그)는 파일 정리 목적일 뿐 **컨텍스트 비용을 줄이지 않는다** — import된 파일도 launch 시 그대로 로드된다. 실제로 비용을 줄이는 것은 path-scoped rules, 서브디렉토리별 온디맨드 로딩, `claudeMdExcludes`(모노레포에서 무관한 팀 CLAUDE.md 제외)다. Claude Code는 `AGENTS.md`를 직접 읽지 않고 `@AGENTS.md` import나 심볼릭 링크로 연동해야 한다.
- **(Day 3 조사) Auto Memory 상세**: v2.1.59+, 기본 켜짐(`autoMemoryEnabled`/`CLAUDE_CODE_DISABLE_AUTO_MEMORY`로 토글). 저장 위치 `~/.claude/projects/<project>/memory/`, `<project>`는 git 저장소 기준이라 같은 저장소의 모든 worktree가 공유하지만 **머신 로컬**(다른 컴퓨터/클라우드 환경과 비공유). `MEMORY.md`가 인덱스 역할이고 처음 200줄 또는 25KB(먼저 도달하는 쪽)만 매 세션 로드, 상세 주제 파일은 온디맨드. 이 200줄/25KB 제한은 MEMORY.md에만 적용되고 CLAUDE.md는 길이 무관하게 전체 로드(단 길수록 준수율↓는 동일 적용). `/memory` 명령으로 로드된 파일 확인·편집 가능.
- **(Day 3 조사) Enforcement 경계**: 공식 문서가 명시 — "CLAUDE.md content is delivered as a user message after the system prompt, not as part of the system prompt itself." CLAUDE.md/auto memory는 컨텍스트이지 강제 설정이 아니다. 특정 시점에 반드시 실행되거나 절대 우회되면 안 되는 규칙은 `PreToolUse` 훅이나 permission `deny` 규칙으로 옮겨야 한다. `/compact` 이후 프로젝트 루트 CLAUDE.md는 디스크에서 재주입되지만, 서브디렉토리 CLAUDE.md는 자동 재주입되지 않고 그 디렉토리 파일을 다시 읽을 때 재로드된다.
- **(Day 3 조사) 모노레포/대규모 코드베이스 가이드**(`/en/large-codebases`, 신규 확인 문서): 세션 시작 위치(루트 vs 서브디렉토리)가 파일 접근 범위와 launch 시 로드되는 CLAUDE.md를 동시에 결정한다. `claudeMdExcludes`(글롭, 여러 설정 스코프 병합), `permissions.deny`의 `Read(...)` 규칙(생성물/벤더 코드 차단, `.gitignore` 경로는 검색에서 이미 제외됨), code intelligence 플러그인(언어 서버 연동으로 파일 스캔 대신 심볼 조회), `worktree.sparsePaths`+`symlinkDirectories`(서브에이전트/worktree 경량화), 디렉토리별 `.claude/skills/`(온디맨드 로드, 이름은 항상 로드되지만 설명은 개수 많을 때 축약됨), `additionalDirectories` 설정(파일 접근만, CLAUDE.md/rules/skills 전혀 로드 안 함) vs `--add-dir`/`/add-dir`(skills는 로드, CLAUDE.md/rules는 `CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD` 환경 변수 필요)를 조합한다. 레이어링이 거버넌스 부담이 되면 플러그인/MCP 서버로 컨벤션을 중앙화하는 것이 다음 단계로 제시된다.
- **(Day 3 조사) 최근 changelog 스캔(Week 13~26, 2026-03~2026-07)**: Auto mode가 research preview → Pro/Bedrock/Vertex/Foundry로 확대, Opus 4.8이 기본 모델로 전환(고효과 기본, `/effort xhigh`), `/code-review`(구 `/simplify`와 별개로 정확성 버그 리포트), dynamic workflows(스크립트가 수십~수백 서브에이전트 오케스트레이션), Artifacts 베타, `/goal`, Agent view, Ultraplan, Routines, computer use, `/ultrareview` 등이 순차 도입됨. 버전 번호와 기능 상태(preview/beta/GA)는 몇 주 단위로 바뀌므로 재확인 없이 단정하지 않는다.
- **(Day 4 조사, 2026-07-06) 권한 모드 명칭 변경(v2.1.200)**: `default` 모드가 CLI/VS Code/JetBrains에서 **"Manual"**로 라벨링됨. 설정값 자체는 여전히 `default`(hooks/SDK가 쓰는 값)이고, CLI는 `manual`을 별칭으로 허용(`claude --permission-mode manual`, `"defaultMode": "manual"`). 6개 모드 확정: `default`(Manual)/`acceptEdits`/`plan`/`auto`(research preview)/`dontAsk`/`bypassPermissions`.
- **(Day 4 조사) 권한 규칙 평가 순서 재확인**: `deny → ask → allow` 순으로 평가되고, **규칙의 구체성은 순서를 바꾸지 않는다** — 넓은 deny(`Bash(aws *)`)가 더 구체적인 allow(`Bash(aws s3 ls)`)까지 전부 막는다. bare 도구명(`Bash`) deny는 그 도구 자체를 Claude 컨텍스트에서 제거하고, scoped deny(`Bash(rm *)`)는 도구는 남기되 매칭되는 호출만 차단한다.
- **(Day 4 조사) `Tool(param:value)` 매개변수 매칭 문법(v2.1.178+)**: deny/ask 규칙이 도구의 최상위 스칼라 파라미터를 직접 매치할 수 있다(`Agent(model:opus)`, `Agent(isolation:worktree)`, `Bash(run_in_background:true)`). 단, canonicalizing 필드(Bash/PowerShell의 `command`, Read/Edit/Write의 `file_path`, Grep/Glob의 `path`, WebFetch의 `url`)는 이 방식으로 매치 불가 — 우회 가능성 때문에 시작 시 경고와 함께 무시된다.
- **(Day 4 조사) Bash 규칙의 구조적 세부사항**: compound command(`&&`,`||`,`;`,`|`,`|&`,`&`, 줄바꿈)는 각 하위 명령이 독립적으로 매칭되어야 하며, "Yes, don't ask again"으로 승인 시 compound 전체가 아니라 하위 명령별로 최대 5개 규칙이 저장된다. `timeout`/`time`/`nice`/`nohup`/`stdbuf`/무옵션 `xargs`는 매칭 전에 벗겨지는 built-in wrapper(설정 불가), 반면 `direnv exec`/`devbox run`/`npx`/`docker exec` 같은 환경 러너는 벗겨지지 않아 `Bash(devbox run *)` 같은 규칙이 내부 명령을 통제하지 못하는 함정이 있다. `watch`/`setsid`/`ionice`/`flock`, `find -exec`/`-delete`는 prefix 규칙으로 승인 불가(항상 프롬프트).
- **(Day 4 조사) curl 필터링의 구조적 함정**: `Bash(curl http://github.com/ *)` 같은 규칙은 옵션 순서 변경, 프로토콜 변경, 리다이렉트(`bit.ly` → GitHub), 변수 치환(`URL=... && curl $URL`)으로 쉽게 우회된다. 공식 문서가 권장하는 대안은 ① Bash의 curl/wget류를 deny하고 `WebFetch(domain:...)` allow로 대체 ② `PreToolUse` 훅으로 URL 검증 ③ CLAUDE.md 안내(강제 아님, 보조 수단일 뿐)의 조합이다.
- **(Day 4 조사) Read/Edit 규칙의 gitignore 스타일 문법**: `//path`(파일시스템 루트 기준 절대경로), `~/path`(홈 기준), `/path`(규칙이 정의된 settings 소스 기준 앵커), `path`/`./path`(현재 디렉토리 기준) 4종. `/path`는 프로젝트 설정이면 프로젝트 루트, 사용자 설정이면 `~/.claude/`가 앵커라는 점이 흔히 놓치는 지점. 심볼릭 링크는 allow 규칙에서는 심볼릭 링크 경로와 타깃 경로 **둘 다** 매치해야 자동 승인되고(하나만 매치하면 프롬프트로 폴백), deny 규칙은 **둘 중 하나만** 매치해도 차단된다.
- **(Day 4 조사) Protected paths(모든 모드 공통, bypassPermissions 제외)**: `.git`, `.config/git`, `.vscode`, `.idea`, `.husky`, `.cargo`, `.devcontainer`, `.yarn`, `.mvn`, `.claude`(단 `.claude/worktrees` 제외) 등 디렉토리와 `.gitconfig`, 각종 shell rc 파일(`.zshrc`, `.bashrc` 등), `.npmrc`, `.mcp.json`, `.claude.json` 등 파일. `permissions.allow` 규칙으로도 이 보호를 우회할 수 없다(안전 검사가 allow 평가보다 먼저 실행됨). 모드별 처리: default/acceptEdits/plan은 프롬프트, auto는 classifier 라우팅, dontAsk는 거부, **bypassPermissions는 허용(v2.1.126+ 변경, 그 이전에는 프롬프트했음)**. bypassPermissions에서도 `rm -rf /`, `rm -rf ~` 같은 루트/홈 삭제는 circuit breaker로 여전히 프롬프트한다.
- **(Day 4 조사) 훅과 권한의 상호작용**: `PreToolUse` 훅은 permission 프롬프트보다 먼저 실행되지만, 훅의 판정이 deny/ask 규칙을 무시하게 만들지는 못한다 — 훅이 "allow"를 반환해도 매칭되는 deny/ask 규칙은 여전히 강제된다. 반대로 훅이 exit code 2로 차단하면 permission 규칙 평가 자체보다 먼저 적용된다(훅의 차단은 allow 규칙보다도 우선).
- **(Day 4 조사) 샌드박스와 권한의 layered defense 세부**: `autoAllowBashIfSandboxed`(기본 `true`)가 켜져 있으면 샌드박스된 Bash 명령은 bare `Bash`/`Bash(*)` ask 규칙이 있어도 프롬프트 없이 실행된다(샌드박스 경계가 그 프롬프트를 대신함). 단 `Bash(git push *)` 같은 content-scoped ask 규칙, 명시적 deny 규칙, 루트/홈 대상 `rm`은 여전히 프롬프트한다. 필터시스템 경계는 `sandbox.filesystem` 설정과 Read/Edit deny 규칙이 병합되고, 네트워크 경계는 WebFetch 권한 규칙과 샌드박스 `allowedDomains`/`deniedDomains`가 병합된다.
- **(Day 4 조사) Settings precedence 5단계**: managed settings(최상위, CLI 인자로도 못 넘음) → command line arguments → local project(`.claude/settings.local.json`) → shared project(`.claude/settings.json`) → user(`~/.claude/settings.json`). 어느 레벨에서든 deny되면 다른 레벨이 allow할 수 없다(deny가 항상 이김). Managed-only 설정 예: `allowManagedPermissionRulesOnly`, `disableBypassPermissionsMode`, `disableAutoMode`, `strictPluginOnlyCustomization`, `strictKnownMarketplaces` 등 — 사용자/프로젝트 설정에 적어도 무시된다.
- **(Day 4 조사) Workspace trust와 project allow 규칙**: 프로젝트 `.claude/settings.json`의 `permissions.allow`와 `additionalDirectories`는 **워크스페이스 신뢰 다이얼로그를 수락하기 전까지 읽히기만 하고 적용되지 않는다**(반면 `deny`/`ask`는 신뢰 여부와 무관하게 즉시 적용— "확장은 신중하게, 축소는 즉시"라는 비대칭 설계). `-p`(non-interactive) 모드에서는 다이얼로그가 뜨지 않고 신뢰 안 된 규칙은 그대로 무시된 채 진행된다 — CI에서 프로젝트의 allow 규칙이 조용히 무시될 수 있는 지점이므로, CI 파이프라인은 관리형 설정이나 `~/.claude/settings.json`(신뢰 불필요)에 규칙을 두는 것이 안전하다.
- **(Day 4 조사) `Cd` 규칙(신규)**: `/cd` 명령이 이동할 수 있는 디렉토리를 통제하는 규칙(모델이 직접 호출 불가, 사용자가 `/cd`를 칠 때만 적용). `Cd` allow 규칙을 하나라도 추가하면 `/cd`가 허용목록 모드로 전환된다.
- **(Day 4 조사) Auto mode 세부(research preview 지위 유지)**: 액션은 ① allow/deny 규칙(protected path writes 제외) ② 작업 디렉토리 내 read/edit 자동승인(protected path 제외) ③ 나머지는 classifier 순으로 결정된다. 대화 중 사용자가 말로 정한 경계("push하지 마")는 classifier가 소프트 차단 신호로 인식하지만 규칙으로 저장되지 않아 compaction으로 사라질 수 있다 — 하드 보장이 필요하면 deny 규칙을 쓴다. classifier가 연속 3회 또는 총 20회 차단하면 auto mode가 일시 정지되고 프롬프트 모드로 복귀한다(임계값 설정 불가). 서브에이전트는 스폰 전(작업 설명 평가)/실행 중(각 액션)/종료 후(전체 히스토리 재검토) 3단계로 검사된다.
- **(Day 5 조사, 2026-07-07) 신규 확인 문서**: `/en/sandboxing`(sandboxed Bash tool 설정)과 `/en/sandbox-environments`(격리 접근법 비교)를 1차 출처로 확인. 샌드박스는 **Bash 도구와 그 자식 프로세스만** 격리하고, Read/Edit/Write/WebFetch/MCP 서버/Hooks는 Claude Code 프로세스 안에서 직접 실행되거나(파일 도구) host에서 별도 프로세스로 무제한 실행된다(MCP/훅) — permission 규칙으로만 통제된다는 scope 경계가 명시적으로 문서화되어 있다.
- **(Day 5 조사) OS 레벨 구현**: macOS는 내장 Seatbelt(설치 불필요), Linux/WSL2는 `bubblewrap`(파일시스템 격리)+`socat`(네트워크 프록시 릴레이) 패키지 필요, 네이티브 Windows 미지원(WSL2 안에서 실행). Ubuntu 24.04+는 AppArmor가 `bwrap`의 user namespace 생성을 막을 수 있어 별도 AppArmor 프로필이 필요할 수 있다. seccomp 필터(Unix domain socket 차단, 선택)는 `npm install -g @anthropic-ai/sandbox-runtime`으로 설치.
- **(Day 5 조사) Sandbox mode 2종**: Auto-allow(샌드박스된 명령은 프롬프트 없이 자동 승인, 불가능한 명령은 일반 permission 흐름으로 폴백)와 Regular permissions(항상 일반 흐름). Auto-allow에서도 명시적 deny, 루트/홈 대상 rm, content-scoped ask(`Bash(git push *)`)는 여전히 프롬프트하며, bare `Bash`/`Bash(*)` ask만 샌드박스된 명령에 한해 생략된다. 이 auto-allow는 permission mode의 auto mode(Day 4, classifier 기반)와 이름은 비슷하지만 별개 메커니즘이며 함께 쓸 수 있다.
- **(Day 5 조사) 파일시스템 격리 기본값**: 쓰기는 작업 디렉토리+세션 임시 디렉토리로 제한되지만, **읽기는 기본적으로 컴퓨터 전체가 허용**되며 여기에는 `~/.aws/credentials`, `~/.ssh/` 같은 credential 파일도 포함된다 — 별도로 `sandbox.credentials`나 `denyRead`를 설정해야 막힌다. `sandbox.filesystem.allowWrite`/`denyWrite`/`denyRead`/`allowRead`의 경로 프리픽스는 `/path`=절대경로, `~/path`=홈 기준, `./path`/프리픽스 없음=프로젝트 루트(프로젝트 설정) 또는 `~/.claude`(사용자 설정) 기준으로, Day 4의 permission Read/Edit 규칙(`//path`=절대, `/path`=설정 소스 기준 앵커)과 슬래시 개수의 의미가 다르다.
- **(Day 5 조사) `sandbox.credentials`(v2.1.187+)**: `deny`(파일 read 차단+환경변수 unset)와 `mask`(v2.1.199+, 환경변수 전용 — 샌드박스 안에서는 세션별 sentinel 값만 보이고 `injectHosts`로 나가는 요청만 프록시가 실제 값으로 치환)로 구성. `mask`는 `network.tlsTerminate`가 없으면 프록시가 요청 내용을 못 봐 sentinel이 그대로 서버에 전달되어 인증이 fail-closed된다(시작 시점과 `/doctor`에서 경고). `mask`/`tlsTerminate`/`credentials.allowPlaintextInject`는 저장소에 커밋되는 프로젝트 설정(`.claude/settings.json`, `settings.local.json`)에서는 무시되고 사용자/managed 설정과 `--settings` CLI 플래그에서만 유효하다.
- **(Day 5 조사) 네트워크 격리와 핵심 보안 한계**: 격리 바깥에서 도는 프록시가 통제하며, 기본 사전 허용 도메인은 없고 v2.1.191부터는 한 번 승인한 호스트는 세션 동안 재프롬프트하지 않는다. `allowedDomains`/`deniedDomains`, 관리자 전용 `allowManagedDomainsOnly`, 커스텀 프록시(`httpProxyPort`/`socksProxyPort`)로 확장 가능. **프록시는 기본적으로 TLS를 종료·검사하지 않고 hostname만으로 판단**하므로, 넓은 도메인 허용은 domain fronting류의 우회 가능성을 남긴다. `network.tlsTerminate`(실험적, v2.1.199+)는 `mask` 치환을 위한 것일 뿐 콘텐츠 필터링을 추가하지 않는다.
- **(Day 5 조사) 탈출구와 Strict mode**: 샌드박스에서 실행 불가능한 명령은 Claude가 `dangerouslyDisableSandbox` 파라미터로 재시도하며, 이 재시도는 일반 permission 흐름을 거친다. `allowUnsandboxedCommands: false`(`/sandbox`의 Strict sandbox mode)로 이 탈출구를 봉쇄 가능.
- **(Day 5 조사) 격리 스펙트럼**(`/en/sandbox-environments`): Sandboxed Bash tool(Bash만) < Sandbox runtime(`@anthropic-ai/sandbox-runtime`, beta — 전체 프로세스: 파일 도구/MCP/훅 포함, Docker 불필요) < Dev container/Custom container(Docker 필요) < VM(가장 강한 격리) < Claude Code on the web(Anthropic 관리 VM). `--dangerously-skip-permissions`는 explicit ask rule과 protected path circuit breaker 외 모든 사전 검토를 제거하므로 반드시 전체 프로세스 격리(sandbox-runtime/컨테이너/VM) 안에서 써야 하고, Bash 샌드박스만으로는 부족하다. auto mode(classifier)는 완전한 review 제거가 아니라 격리 요구가 상대적으로 낮다.
- **(Day 5 조사) 조직 강제**: managed settings로 `sandbox.enabled`/`failIfUnavailable`/`allowUnsandboxedCommands: false` 배포. boolean 키는 managed 값이 항상 이기지만 `excludedCommands` 같은 배열 키는 스코프 간 병합되어 개발자가 계속 추가할 수 있고 이를 막는 managed-only 잠금이 없다 — `allowManagedReadPathsOnly`/`allowManagedDomainsOnly`는 read 경로/도메인에는 존재하지만 `excludedCommands`에는 존재하지 않는다는 비대칭이 있다.
- **(Day 5 조사) 최근 changelog(2026-05~06)**: v2.1.187 `sandbox.credentials` 도입, v2.1.181 `sandbox.allowAppleEvents`(opt-in, code-execution 격리 일부 해제 트레이드오프) 도입, v2.1.183 auto mode가 파괴적 git/`terraform destroy`류 명령을 사용자가 요청하지 않은 대상에는 차단하도록 강화, v2.1.199 `network.tlsTerminate` 실험적 도입, v2.1.154→163→179에 걸쳐 `$TMPDIR` 샌드박스/비샌드박스 불일치 버그와 대규모 `denyRead`/`allowRead` glob이 세션을 멈추게 한 버그가 순차 수정됨 — 샌드박스 세부 동작은 몇 주 단위로 계속 바뀌므로 재확인 없이 특정 버전 동작을 단정하지 않는다.

## 심화 학습

- **Claude Code GitHub 저장소**
  https://github.com/anthropics/claude-code
  — 이슈 트래커와 CHANGELOG.md. 실제 버그/회귀 사례를 통해 운영 리스크를 파악하는 데 유용.

- **Anthropic Engineering Blog**
  https://www.anthropic.com/engineering
  — 프로덕션 도입 패턴, 내부 사례 공유.

- **Claude Code 예시 설정 저장소**
  https://github.com/anthropics/claude-code/tree/main/examples/settings
  — 조직 배포 시나리오별 시작 설정.

## 인터뷰 대비

- **What's New (주간 릴리스 로그)**
  https://code.claude.com/docs/en/whats-new
  — 최근 몇 주의 변경 흐름을 빠르게 스캔해 "최근에 뭐가 바뀌었는지" 질문에 대비.

- **Glossary**
  https://code.claude.com/docs/en/glossary
  — 공식 용어 정의. 인터뷰에서 용어를 정확히 쓰는지 자기 점검할 때 참고.

## 주의사항

- 블로그 글이나 오래된 캡처는 내용 검증 없이 참고하지 않는다. `code.claude.com/docs`와 changelog를 1차 근거로 삼는다.
- 슬래시 커맨드 이름, 버전 번호, UI 세부 동작은 몇 주 단위로 바뀐다. 몇 주 이상 지난 뒤 이어서 학습한다면 changelog와 `llms.txt` 인덱스를 다시 확인한다.
- 인터뷰에서는 "어떤 기능이 있는가"보다 "왜 이렇게 설계됐는가, 어떤 trade-off인가, 팀에 어떻게 도입/운영하는가"를 중심으로 답하는 데 집중한다.
