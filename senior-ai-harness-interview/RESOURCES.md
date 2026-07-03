# 학습 참고 자료

이 문서의 링크는 2026-07 기준 리서치 결과다. AI Harness / Agent Harness 분야는 변화가 매우 빠르므로(용어 자체가 2026년에 막 정립되는 중), 새 Day를 만들 때마다 아래 공식 소스의 최신 상태를 다시 확인한다.

## 공식 문서 — Anthropic / Claude

- [Claude Agent SDK — Agent Loop](https://code.claude.com/docs/en/agent-sdk/agent-loop) — gather context → take action → verify → repeat 공식 아키텍처
- [Building agents with the Claude Agent SDK (Claude 블로그)](https://claude.com/blog/building-agents-with-the-claude-agent-sdk)
- [Effective harnesses for long-running agents (Anthropic Engineering)](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [How we built our multi-agent research system (Anthropic Engineering)](https://www.anthropic.com/engineering/multi-agent-research-system) — orchestrator-worker 패턴, 90.2% 성능 향상, 15x 토큰 비용
- [When to use multi-agent systems (Claude 블로그)](https://claude.com/blog/building-multi-agent-systems-when-and-how-to-use-them)
- [Demystifying evals for AI agents (Anthropic Engineering)](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) — task/trial/transcript/grader 용어
- [Writing effective tools for AI agents (Anthropic Engineering)](https://www.anthropic.com/engineering/writing-tools-for-agents)
- [Mitigating prompt injection risk in browser use (Anthropic Research)](https://www.anthropic.com/research/prompt-injection-defenses)
- [Claude Code sandboxing — 보안·자율성 (Anthropic Engineering)](https://www.anthropic.com/engineering/claude-code-sandboxing)
- [Claude Code — Sandboxing 문서](https://code.claude.com/docs/en/sandboxing)
- [Claude Code — Observability(OTel) 문서](https://code.claude.com/docs/en/agent-sdk/observability)
- [Claude Code — Context Window / Auto-compact 문서](https://code.claude.com/docs/en/context-window)
- [Bash tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/bash-tool) / [Code execution tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool)
- [Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [Context compaction (server-side, beta)](https://platform.claude.com/docs/en/build-with-claude/compaction)
- [Streaming Messages](https://platform.claude.com/docs/en/build-with-claude/streaming) / [Fine-grained tool streaming](https://platform.claude.com/docs/en/agents-and-tools/tool-use/fine-grained-tool-streaming)
- [Choosing the right model (모델 라우팅/티어링)](https://docs.anthropic.com/en/docs/about-claude/models/choosing-a-model)

## 공식 문서 — OpenAI

- [OpenAI Agents SDK — Handoffs](https://openai.github.io/openai-agents-python/handoffs/)
- [OpenAI Agents SDK — Guardrails](https://openai.github.io/openai-agents-python/guardrails/)
- [OpenAI Agents SDK — Sessions](https://openai.github.io/openai-agents-python/sessions/)
- [OpenAI Agents SDK — Tracing](https://openai.github.io/openai-agents-python/tracing/)
- [OpenAI Agents SDK — Multi-agent orchestration 가이드](https://developers.openai.com/api/docs/guides/agents/orchestration)
- [Deprecations 목록 (Assistants API 등)](https://developers.openai.com/api/docs/deprecations)
- [Assistants → Responses/Conversations 마이그레이션 가이드](https://developers.openai.com/api/docs/guides/migrate-to-responses)
- [Prompt caching (OpenAI)](https://developers.openai.com/api/docs/guides/prompt-caching)
- [openai/swarm (레거시, 교육용 참고)](https://github.com/openai/swarm)
- [PyPI — openai-agents (Python SDK 릴리스)](https://pypi.org/project/openai-agents/)
- [npm — @openai/agents (TS SDK 릴리스)](https://www.npmjs.com/package/@openai/agents)

## Model Context Protocol (MCP)

- [MCP 공식 스펙 (2025-11-25, 최근 안정 버전)](https://modelcontextprotocol.io/specification/2025-11-25)
- [MCP 2026-07-28 Release Candidate 발표](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) — stateless 전환, Sampling/Roots/Logging deprecation, MCP Apps, Tasks 승격
- [MCP 2026 로드맵](https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/)
- [MCP Registry Preview 발표](https://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/) / [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io/)
- [Anthropic — MCP를 Agentic AI Foundation에 기부(Linux Foundation 이관)](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation)
- [modelcontextprotocol/modelcontextprotocol GitHub Releases](https://github.com/modelcontextprotocol/modelcontextprotocol/releases)

## Observability / OpenTelemetry GenAI

- [OpenTelemetry GenAI Semantic Conventions (spec, Development 상태)](https://opentelemetry.io/docs/specs/semconv/gen-ai/)
- [Semantic conventions for generative client AI spans](https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-spans/)
- [open-telemetry/semantic-conventions-genai (분리된 신규 저장소)](https://github.com/open-telemetry/semantic-conventions-genai)
- [open-telemetry/semantic-conventions Releases (v1.37 breaking rename 등)](https://github.com/open-telemetry/semantic-conventions/releases)
- [Inside the LLM Call: GenAI Observability with OpenTelemetry (공식 블로그)](https://opentelemetry.io/blog/2026/genai-observability/)
- [OpenInference semantic conventions (Arize Phoenix)](https://arize-ai.github.io/openinference/spec/)
- [Langfuse — Observation types (span/generation/agent/tool 구분)](https://langfuse.com/docs/observability/features/observation-types)

## 평가(Eval) / Trajectory / Replay

- [LangSmith — Trajectory evals (AgentEvals)](https://docs.langchain.com/langsmith/trajectory-evals)
- [Braintrust — Evaluating agents](https://www.braintrust.dev/blog/evaluating-agents)
- [Braintrust — How to eval stateful agents](https://www.braintrust.dev/blog/stateful-agent-evals)
- [Inspect (UK AI Security Institute) — 프레임워크](https://inspect.aisi.org.uk/)
- [DeepEval — LLM-as-judge 가이드](https://deepeval.com/guides/guides-llm-as-a-judge)
- [Promptfoo — 코딩 에이전트 평가 가이드 (trajectory 어써션)](https://www.promptfoo.dev/docs/guides/evaluate-coding-agents/)

## 보안 / Guardrail / 샌드박스

- [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html)
- [OWASP Top 10 for Agentic Applications 2026 (정리 글)](https://goteleport.com/blog/owasp-top-10-agentic-applications/)
- [E2B — Enterprise AI Agent Cloud (Firecracker microVM 샌드박스)](https://e2b.dev/)
- [Daytona — Secure Infrastructure for AI-generated code](https://www.daytona.io/)

## 아키텍처 딥다이브 / 엔지니어링 블로그 / 사례 연구

- [Martin Fowler — Harness Engineering](https://martinfowler.com/articles/harness-engineering.html) — "LLM은 agent 시스템에서 가장 작은 부분" 프레임 정립
- [Vercel — We removed 80% of our agent's tools](https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools) — 도구 축소로 성공률 80%→100%, 응답시간 3.5배 개선 사례
- [Chroma Research — Context Rot](https://www.trychroma.com/research/context-rot) — 컨텍스트 길이 증가에 따른 성능 저하 실증 연구
- [Redis — Context Poisoning in Agent Reasoning](https://redis.io/blog/context-poisoning-agent-reasoning/)
- [Arize — Common AI Agent Failure Modes](https://arize.com/blog/common-ai-agent-failures/)
- [MongoDB — Agent Harness: Why the LLM Is the Smallest Part of Your Agent System](https://www.mongodb.com/company/blog/technical/agent-harness-why-llm-is-smallest-part-of-your-agent-system)

## 사용 시 주의사항

- `anthropic.com`, `openai.github.io`, `braintrust.dev`, `inspect.aisi.org.uk` 등 다수의 공식/블로그 도메인이 자동화 접근(WebFetch)에 403을 반환하는 경우가 있다. 이 경우 검색 스니펫과 다수의 독립적인 2차 출처(커뮤니티 스레드, 미러 블로그)로 교차 검증한 뒤 사용하고, 정확한 인용이 필요하면 실제 브라우저로 원문을 재확인한다.
- 이 트랙에 등장하는 모델 이름(Sonnet 5, Opus 4.8, Fable 5 등), 버전 번호, 가격, deprecation 날짜는 레슨 작성 시점(2026-07) 기준이며 빠르게 바뀔 수 있다. 실제 면접 전 공식 changelog/deprecation 페이지로 최종 확인해야 한다.
- **OpenAI Assistants API는 2026-08-26에 완전히 종료된다.** 이 트랙의 예시는 Responses API + Agents SDK 기준으로 작성한다.
- **MCP 2026-07-28 개정판(RC)**은 이 레슨 작성 시점 기준 아직 최종본이 아니다(발행 예정). Sampling/Roots/Logging deprecation 등은 RC 내용이므로 실제 적용 여부를 재확인한다.
