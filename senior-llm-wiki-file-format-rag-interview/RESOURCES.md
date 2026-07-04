# 학습 참고 자료

## 핵심 논문 및 원 자료

- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al., 2020)](https://arxiv.org/abs/2005.11401) — RAG 원 논문
- [Lost in the Middle: How Language Models Use Long Contexts (2023)](https://arxiv.org/abs/2307.03172) — context ordering이 답변 품질에 미치는 영향
- [Anthropic — Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval) — chunk에 컨텍스트를 부여해 검색 품질을 높이는 기법
- [Andrej Karpathy — LLM Wiki (Gist)](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) — LLM이 원본 자료를 구조화된 마크다운 위키로 점진적으로 정리·유지하는 패턴의 원 출처
- [Securing Retrieval-Augmented Generation: A Taxonomy of Attacks, Defenses, and Future Directions (arXiv 2604.08304)](https://arxiv.org/pdf/2604.08304) — RAG 보안 공격/방어 분류 체계
- [Structure-Aware Chunking for Tabular Data in Retrieval-Augmented Generation (arXiv 2605.00318)](https://arxiv.org/abs/2605.00318) — 표 데이터를 Row Tree로 구조화해 chunking하는 기법과 MRR 개선 수치

## 공식 문서 및 프레임워크

- [LangChain 공식 문서](https://python.langchain.com/docs/) — 문서 로더, 텍스트 분할기, RAG 파이프라인 구성 요소
- [LlamaIndex 공식 문서](https://docs.llamaindex.ai/) — 인덱싱/검색 전략, LlamaParse 레퍼런스
- [Docling (IBM Research) 공식 문서/저장소](https://github.com/docling-project/docling) — PDF/DOCX/PPTX를 Markdown/JSON으로 변환하는 오픈소스 레이아웃 분석기
- [Unstructured 공식 문서](https://docs.unstructured.io/) — 30종 이상 포맷을 시맨틱 엘리먼트로 변환, RAG 전용 chunking 전략 다수 제공
- [Azure AI Search — Document-Level Access Control](https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview) — 벡터 인덱스 계층에서 문서별 권한을 반영하는 공식 아키텍처 가이드
- [AWS Textract 공식 문서](https://docs.aws.amazon.com/textract/) — OCR/표/양식 추출 관리형 서비스
- [RAGAS 공식 문서](https://docs.ragas.io/) — faithfulness, context precision/recall 등 RAG 평가 지표
- [OWASP Top 10 for LLM Applications — LLM01 Prompt Injection](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — prompt injection 위협 분류와 완화 원칙

## 평가/관측성 프레임워크

- [DeepEval](https://docs.confident-ai.com/) — CI 게이트용 골든셋 평가
- [TruLens](https://www.trulens.org/) — RAG triad(context relevance, groundedness, answer relevance) 프로덕션 관측
- [Arize Phoenix](https://docs.arize.com/phoenix) — LLM/RAG 트레이싱 및 평가 통합 관측성

## 도서

- **Designing Data-Intensive Applications** (Martin Kleppmann) — 검색/인덱싱 시스템, 데이터 파이프라인의 기반 이론
- **AI Engineering** (Chip Huyen) — LLM 애플리케이션 및 RAG 시스템의 프로덕션 설계
- **Building LLM Powered Applications** (Valentina Alto) — RAG 파이프라인 구현 패턴

## 기술 아티클 및 엔지니어링 블로그

- [Glean — Unlocking the power of enterprise search with LLM technology](https://www.glean.com/blog/enterprise-search-llm-tech) — 커넥터 기반 크롤링, 지식 그래프, 권한 동기화 아키텍처
- [Pinecone Learning Center](https://www.pinecone.io/learn/) — 벡터 검색, 하이브리드 검색, chunking 실무 가이드
- [Databricks Blog — RAG in Production](https://www.databricks.com/blog) — 프로덕션 RAG 운영 사례
- [Netflix Tech Blog](https://netflixtechblog.com/) — 대규모 검색/추천 시스템 운영 사례

## 국내 자료

- [카카오 기술 블로그 — LLM/RAG 관련 글](https://tech.kakao.com/) — 국내 RAG 실무 적용 사례
- [네이버 D2](https://d2.naver.com/home) — 검색 및 자연어처리 시스템 아티클
- [토스 기술 블로그](https://toss.tech/) — LLM 기반 제품 운영 사례

## Day 1 최신 근거 (2026년 7월 조사 반영)

- [LLM Wiki - Karpathy (Gist)](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) — raw/wiki/schema 3계층, ingest/query/lint 3연산으로 구성된 LLM Wiki 패턴 원문
- [The enterprise LLM wiki: scaling Karpathy's pattern to your org (Falconer, 2026-04)](https://falconer.com/guides/enterprise-llm-wiki-karpathy/) — 개인 패턴을 조직 규모로 확장할 때 필요한 capture/link/compound/stay-current 4대 속성
- [What Is an LLM Knowledge Base? How Karpathy's Wiki Architecture Works (MindStudio)](https://www.mindstudio.ai/blog/what-is-llm-knowledge-base-karpathy-wiki-architecture) — query-time RAG와 pre-compiled wiki의 구조적 차이 설명
- [Enterprise LLM Knowledge Base: Architecture and Governance Guide (Atlan)](https://atlan.com/know/enterprise-llm-knowledge-base/) — 소스 인증, 접근 제어, freshness 거버넌스, 컴플라이언스 감사 가능성 요구사항
- [Best PDF Parsers for AI and RAG Workflows in 2026 (Firecrawl)](https://www.firecrawl.dev/blog/best-pdf-parsers) — LlamaParse/Docling/Unstructured/Reducto/Marker 비교, 정확도·비용·속도 수치
- [pdfmux vs LlamaParse vs Docling vs Unstructured: Which PDF extractor for RAG in 2026?](https://pdfmux.com/blog/pdfmux-vs-llamaparse-vs-docling-vs-unstructured-2026/) — 포맷별 파서 선택 기준 상세 비교
- [Document-Level RBAC for RAG Pipelines: The 2026 Enterprise Architecture Guide (Truto)](https://truto.one/blog/how-to-maintain-document-level-rbac-in-enterprise-rag-pipelines/) — 벡터 스토어 스키마에 권한을 1급 데이터로 설계해야 하는 이유
- [Permission-Aware Retrieval: Why Access Control in Enterprise RAG Must Live in the Vector Layer (TianPan.co, 2026-05)](https://tianpan.co/blog/2026-05-04-permission-aware-retrieval-enterprise-rag-access-control) — 애플리케이션 계층 권한 체크의 실패 사례와 벡터 계층 강제의 필요성
- [Indirect Prompt Injection: Attacks, Defenses, and the 2026 State of the Art (Zylos Research)](https://zylos.ai/research/2026-04-12-indirect-prompt-injection-defenses-agents-untrusted-content/) — Spotlighting, 인코딩/구분자 기반 방어, defense-in-depth 원칙
- [Structure-Aware Chunking for Tabular Data in Retrieval-Augmented Generation (arXiv 2605.00318)](https://arxiv.org/abs/2605.00318) — 표를 Row Tree로 구조화한 chunking이 MRR을 0.36→0.59로 개선한 실험 결과
- [RAG Evaluation Metrics 2026: The Complete Guide](https://qaskills.sh/blog/rag-evaluation-metrics-complete-2026) — offline(Ragas)·CI 게이트(DeepEval)·production 관측(TruLens)을 하나의 평가 프레임으로 연결하는 2026년 흐름

> 참고: 파서/플랫폼의 정확도·가격·순위는 벤더가 자주 갱신하므로, 위 자료는 레슨 작성 시점(2026년 7월)
> 기준 최신 공개 정보를 반영한 것이다. 실제 벤더 선택 전에는 반드시 각 공식 문서와 자체 평가셋으로
> 재검증해야 한다.

## 인터뷰 준비

- [System Design Interview (Alex Xu)](https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF) — 검색 시스템 설계 문제와 유사한 사고 프레임
- [Chip Huyen — Machine Learning Interviews Book](https://huyenchip.com/ml-interviews-book/) — ML/AI 시스템 인터뷰 준비
- `senior-rag-interview` 트랙 — RAG 기초(chunking, embedding, hybrid search, evaluation)를 먼저 다지고 싶다면 병행 학습 권장
