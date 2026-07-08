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

## Day 2 최신 근거 (2026년 7월 조사 반영)

- [LLM Wiki - Karpathy (Gist)](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) — raw/wiki/schema 3계층, ingest/query/lint 3연산, index.md/log.md, compounding knowledge의 조건부 가치(미러링 페이지는 마이너스 가치) 원문 상세
- [The enterprise LLM wiki: scaling Karpathy's pattern to your org (Falconer, 2026-04)](https://falconer.com/guides/enterprise-llm-wiki-karpathy/) — 개인 패턴을 조직 규모로 확장할 때 capture/link/compound/stay-current 4대 속성이 각각 어떻게 바뀌어야 하는지, 기존 엔터프라이즈 도구(Confluence/Notion/Glean)의 한계
- [Anthropic — Agent Skills Overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) — SKILL.md 구조, Level 1(메타데이터)/Level 2(본문)/Level 3(리소스) 점진적 공개(progressive disclosure), 표면(claude.ai/API/Claude Code) 간 미동기화, 보안 감사 원칙, `/v1/skills` 버전 관리
- [Anthropic Engineering — Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) — Skill 아키텍처 설계 배경과 실무 적용 사례
- [An LLM Wiki Won't Compound Your Knowledge. Here's What Will. (bitsofchris)](https://bitsofchris.com/p/an-llm-wiki-wont-compound-your-knowledge) — LLM Wiki 패턴에 대한 비판적 관점: 사람의 사고 과정을 아웃소싱하면 검증되지 않은 종합이 그대로 누적될 위험이 있다는 지적. 조직 규모에서는 이 위험이 "오류의 compound"로 이어질 수 있음을 시사

> 참고: LLM Wiki는 2026년 초 공개된 신생 패턴으로 아직 표준 구현체나 벤치마크가
> 정립되지 않았다. 위 자료는 레슨 작성 시점(2026년 7월) 기준 공개된 1차 자료와
> 실무 해설을 반영한 것이며, 패턴 자체가 계속 진화 중이므로 실제 도입 전 최신
> 논의를 재확인해야 한다.

## Day 3 최신 근거 (2026년 7월 조사 반영)

- [How connectors power the Glean experience](https://docs.glean.com/connectors/connectors-power-glean) — 초기 전체 동기화 이후 웹훅+주기적 증분 크롤을 병행하는 steady-state 커넥터 운영, 권한 맵을 색인에 동봉하는 구조
- [About connectors — Glean](https://docs.glean.com/connectors/about) — 커넥터가 콘텐츠 인덱싱뿐 아니라 소스 권한을 미러링하고 최신성을 유지하는 책임을 진다는 아키텍처 설명
- [Top 10 Enterprise Content Connectors for RAG: Features, Pros, Cons & Comparison](https://www.devopsschool.com/blog/top-10-enterprise-content-connectors-for-rag-features-pros-cons-comparison/) — Airbyte(범용 데이터 통합, CDC)와 Unstructured(비정형 문서 파싱) 등 커넥터 계층별 역할 비교
- [What is RAG Architecture? — Airbyte](https://airbyte.com/agentic-data/what-is-rag-architecture) — Agent Engine의 거버넌스형 커넥터, 자동 스키마 처리, 증분 동기화/CDC 아키텍처
- [RAG Pipeline Orchestration: Production Guide — Kestra](https://kestra.io/resources/ai/rag-pipeline) — Airflow/Prefect/Dagster/Kestra 등 오케스트레이터가 트리거·재시도·관측성·알림을 통합 관리하는 2026년 프로덕션 패턴
- [RAG and LLM Platform at Scale: Ingestion, Retrieval, Generation, and Evaluation for 10M Queries/Day (CrackingWalnuts)](https://crackingwalnuts.com/post/rag-llm-platform-design) — Dead Letter Queue, 고정 재시도, 컴포넌트 격리(벡터 DB/LLM 교체 가능성)를 포함한 대규모 RAG 운영 아키텍처
- [MIME Type Lookup: A Reference and Magic-Bytes Sniffer for Uploads](https://zerotool.dev/blog/mime-type-lookup-guide/) — 매직 바이트 기반 포맷 검증이 확장자/클라이언트 MIME보다 신뢰도가 높은 이유, DOCX/PPTX/XLSX/EPUB/JAR가 동일 ZIP 시그니처(`50 4B 03 04`)를 공유해 컨테이너 내부(`[Content_Types].xml`, `META-INF/MANIFEST.MF`, `mimetype`)까지 확인해야 하는 이유
- [What Is MIME Type & Why It Matters for Developers and Upload Validation](https://thetexttool.com/blog/what-is-mime-type-why-it-matters-developers-upload-validation-2025) — 확장자 기반/매직 바이트 기반/콘텐츠 기반 포맷 감지 3분류와 보안 검증 우선순위

> 참고: 커넥터 플랫폼과 오케스트레이션 도구의 기능은 벤더가 자주 갱신하므로, 위 자료는
> 레슨 작성 시점(2026년 7월) 기준 공개 정보를 반영한 것이다. 실제 벤더/도구 선택 전에는
> 각 공식 문서로 재검증해야 한다.

## Day 4 최신 근거 (2026년 7월 조사 반영)

- [PyMuPDF-Layout v1.28.0 (Artifex, 2026-06-29)](https://pymupdf.io/blog/pymupdf-layout-10-faster-pdf-parsing-without-gpus) — 이미지 기반 VLM 파싱 대신 PDF의 네이티브 구조(폰트/줄간격/들여쓰기)를 먼저 활용하는 CPU 전용 하이브리드 레이아웃 모델, GPU 기반 파서 대비 10배 속도
- [Docling GitHub (docling-project/docling)](https://github.com/docling-project/docling) — MIT 라이선스, v2.110.0(2026-07-04) 기준 거의 매일 릴리스, Heron 레이아웃 모델 + TableFormer + CodeFormula VLM 파이프라인
- [Docling Technical Report (arXiv 2501.17887)](https://arxiv.org/abs/2501.17887) — PDF는 `StandardPdfPipeline`(AI 기반 구조 복원), Office/HTML/Markdown은 `SimplePipeline`(이미 있는 구조를 python-docx/python-pptx/openpyxl로 보존)으로 이원화한 근거
- [Unstructured CHANGELOG (raw, GitHub)](https://raw.githubusercontent.com/Unstructured-IO/unstructured/main/CHANGELOG.md) — v0.24.0(2026-07-06) SSRF 방어 강화, `table_extraction_method` 메타데이터가 `grid`/`tatr`/`vlm`을 동급 방법으로 추적, `partition_pdf` strategy(`fast`/`hi_res`/`ocr_only`/`vlm`/`auto`) 구성
- [OmniDocBench (opendatalab, CVPR 2025, arXiv 2412.07626)](https://github.com/opendatalab/OmniDocBench) — 2026년 4월 v1.6 기준 MinerU2.5-Pro(1.2B) 95.75, GLM-OCR(0.9B) 95.22 등 소형 특화 모델이 GPT-4o/Gemini 3 Pro 같은 범용 프론티어 모델(86~93점대)보다 높은 점수를 받는 현상
- [ParseBench (LlamaIndex, 2026년 6월)](https://www.llamaindex.ai/blog/parsebench) — LlamaParse Agentic 84.88점으로 자사 벤치마크 1위, 단 LlamaIndex가 벤치마크를 설계·채점한 벤더 자체 벤치마크라는 편향 존재
- [olmOCR-Bench (Allen Institute for AI)](https://github.com/allenai/olmocr) — Mistral OCR API가 표(Tables) 세부 항목에서 29.3점에 그쳐 Chandra(50.4점)와 큰 격차, 벤더의 "종합 1위" 주장 뒤 세부 항목 취약점이 숨을 수 있음을 보여주는 사례
- [Reducto RD-TableBench / RD-FormsBench](https://reducto.ai/) — Reducto 자체 "Agentic OCR"(CV+VLM+다중 패스)도 토큰 recall 1위였지만 hallucination("추가된 토큰") 비율은 3번째로 높음을 스스로 공개, Mistral OCR은 밀도 높은 재무 표·손글씨 양식에서 약 45% 정확도(vs Gemini 2.0 Flash 약 80%)
- [LlamaIndex — OmniDocBench is Saturated](https://www.llamaindex.ai/blog/omnidocbench-is-saturated-what-s-next-for-ocr-benchmarks) — 2026년 SOTA 파싱 방법도 근거 충실도(faithfulness)가 약 90% 수준 → 약 10페이지 중 1페이지꼴로 의미 있는 hallucination/누락 발생
- [Anthropic — PDF support 공식 문서](https://platform.claude.com/docs/en/build-with-claude/pdf-support) — Claude의 PDF 처리는 페이지를 이미지로 변환하는 동시에 텍스트 레이어도 함께 추출해 나란히 제공하는 하이브리드 구조(순수 vision 방식이 아님), 최대 600페이지/32MB, 고밀도 페이지는 페이지 수 제한 전에 컨텍스트가 소진될 수 있음
- [python-docx GitHub Issue #340](https://github.com/python-openxml/python-docx/issues/340), [Issue #566](https://github.com/python-openxml/python-docx/issues/566) — 추적된 변경 내용(track changes) 승인/거부 미지원이 2016년부터 미해결
- [Unstructured GitHub Issue #2106](https://github.com/Unstructured-IO/unstructured/issues/2106) — DOCX 병합 셀 텍스트가 병합 셀 개수만큼 중복 출력되는 현상
- [Unstructured GitHub Issue #2485](https://github.com/Unstructured-IO/unstructured/issues/2485) — 캐시된 값이 없는 XLSX 수식 셀이 텍스트 추출에서 통째로 누락되는 현상
- [openpyxl 공식 튜토리얼](https://openpyxl.readthedocs.io/en/3.1/tutorial.html) — openpyxl은 수식을 직접 계산하지 않으며 `data_only=True`는 Excel이 마지막으로 캐싱한 값만 반환한다는 공식 설명
- [langchain-community README (raw, GitHub)](https://raw.githubusercontent.com/langchain-ai/langchain-community/main/README.md) — 저장소가 2026-05-26 아카이브 처리되며 문서 로더 등 커뮤니티 통합이 개별 파트너 패키지로 이전

> 참고: 문서 파싱 벤더의 벤치마크(ParseBench, RD-TableBench 등)는 벤더가 자체
> 설계·채점한 경우가 많아 자사 상위 티어 제품이 1위로 나오는 경향이 있다.
> 위 자료는 레슨 작성 시점(2026년 7월) 기준 공개 정보를 반영한 것이며,
> 실제 도구 선택 전에는 반드시 도메인 골든셋으로 자체 검증해야 한다.

## Day 5 최신 근거 (2026년 7월 조사 반영)

- [cAST: Enhancing Code Retrieval-Augmented Generation with Structural Chunking via Abstract Syntax Tree (arXiv 2506.15655)](https://arxiv.org/abs/2506.15655) — AST 기반 청킹의 4대 설계 원칙(문법 완결성/정보 밀도/언어 불변성/재조립 가능성), RepoEval Recall@5 +4.3점, SWE-bench Pass@1 +2.67점, CrossCodeEval +4.3점
- [Trafilatura 공식 문서 — Evaluation](https://trafilatura.readthedocs.io/en/latest/evaluation.html) — ScrapingHub 벤치마크 F1 0.958, SIGIR 2023 평가에서 8개 데이터셋 평균 F1 최고 기록
- [WCXB: A Multi-Type Web Content Extraction Benchmark (arXiv 2605.21097)](https://arxiv.org/abs/2605.21097) — 휴리스틱 추출기가 대형 신경망 기반 추출기보다 강건하다는 SIGIR 2023 평가 결과의 후속 검증
- [PixelRAG — snackonai.com](https://www.snackonai.com/p/pixelrag-your-rag-pipeline-is-losing-40-of-the-evidence-before-the-llm-ever-sees-it-the-fix-is-scree) — 페이지 스크린샷을 비전 모델로 직접 임베딩하는 접근, SimpleQA에서 text-RAG(Trafilatura) 71.6% 대비 78.8%지만 근거 인용(citation grounding)이 어려워지는 트레이드오프
- [LangChain — MarkdownHeaderTextSplitter 레퍼런스](https://python.langchain.com/api_reference/text_splitters/markdown/langchain_text_splitters.markdown.MarkdownHeaderTextSplitter.html) / [RecursiveJsonSplitter 가이드](https://docs.langchain.com/oss/python/integrations/splitters) — 헤더 계층·중첩 JSON 구조를 보존하며 분할하는 공식 구현
- [PyYAML 보안 권고 — Sourcery Vulnerability DB](https://www.sourcery.ai/vulnerabilities/python-pyyaml-unsafe-load-rce) / [Datadog 정적 분석 규칙](https://docs.datadoghq.com/security/code_security/static_analysis/static_analysis_rules/python-security/yaml-load/) — `yaml.load()`/`yaml.unsafe_load()`의 `!python/object/apply` 태그를 통한 원격 코드 실행(RCE) 위험과 `yaml.safe_load()` 강제 권고
- [Optimizing Tabular Data for High-Fidelity Retrieval — Fahad Siddique Faisal (Medium)](https://fahadsid1770.medium.com/optimizing-tabular-data-for-high-fidelity-retrieval-a-deep-dive-into-structuring-vectorization-82e906629d00) — 서술적 콘텐츠(임베딩 대상)와 사실적 메타데이터(필터 대상)를 분리해 의미 희석(semantic dilution)을 막는 전략
- [CSR-RAG: An Efficient Retrieval System for Text-to-SQL on the Enterprise Scale (arXiv 2601.06564)](https://arxiv.org/abs/2601.06564) — 질의의 의미적 문맥·DB 스키마·테이블 간 연결성을 분리해 검색하는 엔터프라이즈 Text-to-SQL 하이브리드 구조
- [pandas 3.0.0 릴리스 노트 (2026-01-21)](https://pandas.pydata.org/docs/whatsnew/v3.0.0.html) / [문자열 dtype 마이그레이션 가이드](https://pandas.pydata.org/docs/user_guide/migration-3-strings.html) — `read_csv` 등에서 문자열 컬럼 기본 dtype이 object에서 PyArrow 기반 전용 string dtype으로 변경, 비문자열 값 저장 시 에러 발생

## 인터뷰 준비

- [System Design Interview (Alex Xu)](https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF) — 검색 시스템 설계 문제와 유사한 사고 프레임
- [Chip Huyen — Machine Learning Interviews Book](https://huyenchip.com/ml-interviews-book/) — ML/AI 시스템 인터뷰 준비
- `senior-rag-interview` 트랙 — RAG 기초(chunking, embedding, hybrid search, evaluation)를 먼저 다지고 싶다면 병행 학습 권장
