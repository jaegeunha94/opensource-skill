# 참고 자료

> LLM 분야는 빠르게 변한다. 아래 자료는 각 레슨을 만들 당시(2026-07) 기준 확인한 최신 공식 문서·업계 사례이며, 새 레슨을 만들 때마다 공식 문서·changelog·deprecation 안내를 다시 확인하고 필요하면 이 표를 갱신한다.

## 공식 모델/플랫폼 문서

| 자료 | 설명 |
|------|------|
| Anthropic — Claude Docs (platform.claude.com/docs) | 모델 목록, context window, extended thinking/reasoning effort, prompt caching, tool use, structured output 공식 스펙 |
| Anthropic Engineering Blog | 실제 postmortem, agent 설계, 프롬프트 엔지니어링 실무 사례 |
| OpenAI — Platform Docs & Model Deprecations | GPT 계열 모델 스펙, reasoning effort 파라미터, deprecation/migration 공지 |
| OpenAI Changelog | API/모델 변경 이력, 신규 기능 공지 |
| Google — Gemini API / Vertex AI Docs | Gemini 계열 스펙, thinking mode, 멀티모달 입출력 가이드 |
| Meta — Llama 모델 문서 | 오픈 웨이트 모델 스펙, 라이선스, MoE 아키텍처 설명 |
| Mistral AI Docs | 오픈 웨이트/상업 모델 스펙, function calling 가이드 |

## 모델 선택 & 평가

| 자료 | 설명 |
|------|------|
| Anthropic — "Building Effective Evals" | task-fit eval 설계 원칙, 공식 가이드 |
| OpenAI Evals (오픈소스) | eval 하네스 구조, LLM-as-judge 패턴 |
| Chatbot Arena / LMSYS | 공개 리더보드 — 참고용이나 프로덕션 의사결정 근거로는 한계가 있음을 함께 학습 |
| Damien Charlotin — AI Hallucination Cases Database | 실제 hallucination 관련 소송·사고 사례 아카이브 |
| OpenAI — "Why Language Models Hallucinate" (arXiv:2509.04664, 2025) | 환각이 정답률만 보상하는 평가 인센티브 구조에서 비롯된다는 핵심 논지. capability boundary/실패 모드 논의의 이론적 근거 |
| Knowledge Boundary Discovery 관련 연구 (arXiv, 2026) | 모델이 자신의 지식 경계를 스스로 판별(calibration)하도록 만드는 기법 동향 |

## Tokenization & Context Window

| 자료 | 설명 |
|------|------|
| Anthropic — Context Windows 공식 문서 (platform.claude.com/docs) | context window 구성 요소, 모델별 크기, extended thinking/tool use와의 상호작용, "context rot" 공식 용어 정의 |
| Anthropic — Token Counting 공식 문서 | 토큰 카운팅 API, 토크나이저 세대 변경(신규 토크나이저 적용 시 토큰 수 약 30% 증가) 공지 |
| Anthropic Engineering — "Effective context engineering for AI agents" | 컨텍스트를 "유한하고 저하되는 자원"으로 다루는 실무 원칙 |
| Chroma — Context Rot 벤치마크 | GPT/Claude/Gemini/Qwen 등 다중 모델 대상, 입력 길이 증가에 따른 정확도 저하와 claimed vs effective context window 간극 실측 |
| Lost in the Middle 계열 연구 (포지션 편향) | 정답 근거 위치(맨 앞/뒤 vs 중간)에 따른 U자형 회상률 저하 현상 |
| Anthropic — Compaction / Context Editing 공식 문서 | 장기 실행 대화·에이전트를 위한 서버 사이드 컨텍스트 압축·정리 기능 |
| OpenAI — API Changelog (컨텍스트 자동 요약/압축 공지) | 대화 이력 자동 압축을 통한 장기 실행 컨텍스트 관리 |

## Prompt Engineering & Structured Output

| 자료 | 설명 |
|------|------|
| Anthropic — Prompt Engineering 공식 가이드 | 시스템 프롬프트 설계, few-shot, chain-of-thought 공식 권장 패턴 |
| Anthropic — "Effective context engineering for AI agents" | 적정 고도(right altitude), 5대 고효율 기법(XML 구조화, 근거 우선, 역할 부여, 단계별 추론, 예시 제시) |
| OpenAI — Prompt Engineering Guide / GPT-5 프롬프팅 가이드 | 프롬프트 구조화, 캐싱 친화적 레이아웃(정적 내용 앞·변동 내용 뒤), 구조화 출력(JSON mode/schema) 가이드 |
| JSON Schema 공식 스펙 | 구조화 출력 검증의 표준 |
| 프롬프트 버전 관리·회귀 테스트 생태계 (Braintrust, MLflow prompt registry, Confident AI/DeepEval 등) | 프롬프트 레지스트리, CI/CD 통합 회귀 테스트, 배포 후 관측 패턴 — 구체 도구명은 계속 바뀌므로 파이프라인 구조 자체를 참고 |
| xAI — Grok 미승인 시스템 프롬프트 변경 사고 공개 설명 (2025-05) | 프롬프트 변경 리뷰 프로세스 우회로 인한 실제 공개 사고 사례, 재발 방지 조치(공개 프롬프트, 승인 절차, 24시간 모니터링) |

## Fine-tuning, RFT & Embedding

| 자료 | 설명 |
|------|------|
| Anthropic/OpenAI — Fine-tuning & Reinforcement Fine-Tuning 공식 문서 | SFT/RFT API 스펙, 언제 파인튜닝이 적합한지 공식 가이드 |
| OpenAI/Anthropic/Google — Embeddings 공식 문서 | 임베딩 모델 스펙, 차원, 유사도 계산 |
| InstructGPT / RLHF 원 논문 | 정렬(alignment) 기법의 이론적 배경 |

## Safety, Guardrail & Prompt Injection

| 자료 | 설명 |
|------|------|
| OWASP Top 10 for LLM Applications | LLM 애플리케이션 보안 위협 표준 분류 (Prompt Injection 포함) |
| Anthropic — Responsible Scaling Policy / Safety 문서 | 안전성 계층 설계, 콘텐츠 분류기 공식 접근법 |
| Microsoft — EchoLeak(CVE-2025-32711) 공개 분석 | 간접 prompt injection 실제 사고의 대표 사례 |
| Simon Willison — Prompt Injection 블로그 시리즈 | 실무자 관점의 injection 공격·방어 패턴 정리 |

## 비용/성능, Observability, 운영

| 자료 | 설명 |
|------|------|
| Anthropic/OpenAI — Prompt Caching 공식 문서 | 캐싱 단가, TTL, 캐시 히트 설계 |
| Anthropic/OpenAI — Rate Limits & Error 공식 문서 | rate limit 정책, 재시도/백오프 권장 패턴 |
| OpenTelemetry GenAI Semantic Conventions | LLM 호출 트레이싱 표준화 시도 |
| Anthropic — "A Postmortem of Three Recent Issues" | 실제 프로덕션 품질 저하 사고의 공개 postmortem |
| OpenAI — 대규모 장애 공개 postmortem | 인프라 장애의 근본 원인 분석 공개 사례 |

## Production 사고/판례 (인터뷰 케이스 스터디용)

| 사례 | 활용 방법 |
|------|----------|
| Air Canada 챗봇 환불 정책 오안내 판결 | 기업이 챗봇 출력에 법적 책임을 지는 사례 — 안전성/guardrail 논의에 활용 |
| Character.AI 관련 소송/합의 | AI 출력물을 "제품"으로 보는 책임 프레임 변화 논의 |
| 법률 AI 환각으로 인한 제재 사례들 | hallucination의 실질적 비용(신뢰·법적 리스크) 논의 |
| EchoLeak (CVE-2025-32711) | 간접 prompt injection의 구체적 공격 경로와 방어 설계 논의 |
| xAI Grok 미승인 시스템 프롬프트 변경 사고 (2025-05) | 프롬프트를 코드처럼 버전 관리·리뷰·회귀 테스트해야 하는 이유의 실제 공개 사례 — Prompt Engineering/변경 관리 논의에 활용 |

## 커뮤니티 & 업계 사례

| 플랫폼 | 활용 방법 |
|--------|----------|
| Anthropic/OpenAI/Google Engineering Blog | 실제 프로덕션 아키텍처, 장애, 성능 최적화 사례 |
| a16z / Latent Space | LLM 프로덕트 엔지니어링 트렌드와 실무자 인터뷰 |
| Hacker News, r/LocalLLaMA | 최신 모델 출시·deprecation에 대한 실무자 반응 (교차 검증용, 1차 출처 아님) |
