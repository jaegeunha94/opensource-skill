# 학습 참고 자료

## 핵심 논문

- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al., 2020)](https://arxiv.org/abs/2005.11401) — RAG 원 논문
- [Dense Passage Retrieval for Open-Domain Question Answering (Karpukhin et al., 2020)](https://arxiv.org/abs/2004.04906) — DPR, dense retrieval의 기반
- [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection (2023)](https://arxiv.org/abs/2310.11511) — 검색 필요성 판단과 self-critique
- [Lost in the Middle: How Language Models Use Long Contexts (2023)](https://arxiv.org/abs/2307.03172) — context ordering이 답변 품질에 미치는 영향
- [Reciprocal Rank Fusion (RRF)](https://plg.uwaterloo.ca/~gvcormac/cormacksigir09-rrf.pdf) — hybrid search 스코어 결합 기법

## 공식 문서 및 프레임워크

- [LangChain 공식 문서](https://python.langchain.com/docs/) — RAG 파이프라인 구성 요소 레퍼런스
- [LlamaIndex 공식 문서](https://docs.llamaindex.ai/) — 인덱싱/검색 전략 레퍼런스
- [Anthropic — Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval) — chunk에 컨텍스트를 부여해 검색 품질을 높이는 기법
- [Pinecone Learning Center](https://www.pinecone.io/learn/) — 벡터 검색, 하이브리드 검색, chunking 실무 가이드
- [Qdrant Documentation](https://qdrant.tech/documentation/) — 벡터 DB 인덱스 구조(HNSW) 및 운영
- [Weaviate Documentation](https://weaviate.io/developers/weaviate) — 하이브리드 검색, metadata filtering
- [Elastic — BM25 and Hybrid Search](https://www.elastic.co/blog) — sparse 검색과 hybrid 결합 실무

## 평가 프레임워크

- [RAGAS (Retrieval-Augmented Generation Assessment)](https://docs.ragas.io/) — faithfulness, answer relevancy 등 RAG 평가 지표
- [TruLens](https://www.trulens.org/) — RAG triad(context relevance, groundedness, answer relevance) 평가
- [OpenAI Evals](https://github.com/openai/evals) — LLM 애플리케이션 평가 프레임워크

## 도서

- **Designing Data-Intensive Applications** (Martin Kleppmann) — 검색/인덱싱 시스템의 기반 이론
- **AI Engineering** (Chip Huyen) — LLM 애플리케이션 및 RAG 시스템의 프로덕션 설계
- **Building LLM Powered Applications** (Valentina Alto) — RAG 파이프라인 구현 패턴

## 기술 아티클 및 엔지니어링 블로그

- [OpenAI Cookbook — RAG 관련 가이드](https://cookbook.openai.com/) — 실무 RAG 패턴
- [Pinecone Blog](https://www.pinecone.io/blog/) — 벡터 검색, reranking, 비용 최적화 사례
- [Cohere Blog — Rerank](https://cohere.com/blog) — reranking 모델과 실무 적용
- [Databricks Blog — RAG in Production](https://www.databricks.com/blog) — 프로덕션 RAG 운영 사례
- [Netflix Tech Blog](https://netflixtechblog.com/) — 대규모 검색/추천 시스템 운영 사례

## 국내 자료

- [카카오 기술 블로그 — LLM/RAG 관련 글](https://tech.kakao.com/) — 국내 RAG 실무 적용 사례
- [당근마켓 기술 블로그](https://medium.com/daangn) — 검색/추천 시스템 운영 경험
- [네이버 D2](https://d2.naver.com/home) — 검색 및 자연어처리 시스템 아티클
- [토스 기술 블로그](https://toss.tech/) — LLM 기반 제품 운영 사례

## Chunking 최신 근거 (Day 3, 2026년 조사 반영)

- [Late Chunking: Contextual Chunk Embeddings Using Long-Context Embedding Models (arXiv 2409.04701)](https://arxiv.org/html/2409.04701v3) — late chunking 원 논문
- [Adaptive Chunking: Optimizing Chunking-Method Selection for RAG (arXiv 2603.25333)](https://arxiv.org/pdf/2603.25333) — 2026년 chunking 방식 선택 비교 연구
- [Reconstructing Context: Evaluating Advanced Chunking Strategies for RAG (arXiv 2504.19754)](https://arxiv.org/pdf/2504.19754) — chunking 전략별 성능 재평가
- [RAG Chunking Strategies 2026: 8 Methods Compared](https://denser.ai/blog/rag-chunking-strategies/) — recursive 512토큰 벤치마크 1위, semantic chunking 비용 배수 데이터
- [Best Chunking Strategies for RAG (and LLMs) in 2026](https://www.firecrawl.dev/blog/best-chunking-strategies-rag) — chunk 크기/overlap 실무 가이드
- [Anthropic — Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval) — chunk에 맥락 헤더를 부여하는 기법과 내부 테스트 결과(위 표에 이미 포함, Day 3에서 재인용)

> 참고: overlap 무효과 분석(2026년 1월, SPLADE 리트리버 기준)은 여러 2026년 chunking 리뷰 아티클에서
> 공통 인용되는 내용으로, 개별 원 출처 접근이 어려운 경우 위 2차 자료(denser.ai, firecrawl)의 요약을
> 통해 확인했다. 실제 도입 전 자체 데이터로 재검증이 필요하다.

## Embedding 모델 최신 근거 (Day 4, 2026년 7월 조사 반영)

- [Embedding Model Leaderboard: MTEB Rankings, April 2026 | Awesome Agents](https://awesomeagents.ai/leaderboards/embedding-model-leaderboard-mteb-april-2026/) — Gemini Embedding 001/2, Qwen3-Embedding, Cohere embed-v4, OpenAI text-3-large 순위
- [New embedding models and API updates | OpenAI](https://openai.com/index/new-embedding-models-and-api-updates/) — text-embedding-3 시리즈, Matryoshka 차원 축소(dimensions 파라미터)
- [voyage-3-large: the new state-of-the-art general-purpose embedding model – Voyage AI](https://blog.voyageai.com/2025/01/07/voyage-3-large/) — Matryoshka + quantization-aware training, int8/binary quantization 지원
- [Voyage 3.5 vs OpenAI vs Cohere Embedding Models 2026](https://www.buildmvpfast.com/blog/best-embedding-model-comparison-voyage-openai-cohere-2026) — Voyage 4(MoE 아키텍처), 도메인 특화 버전(code/finance) 비교
- [Gemini Embedding 2 Review 2026](https://computertech.co/gemini-embedding-2-review/) — 멀티모달(텍스트/이미지/영상/오디오), 다국어 리더 포지션
- [Best Embedding Models for RAG in 2026 | InnovativeAIs](https://innovativeais.com/blog/best-embedding-models-for-rag-in-2026) — BGE-M3(MIT, dense+sparse+multi-vector), Qwen3-Embedding self-host 가이드
- [Vector Quantization: Compress Vectors 4–32x Without Losing Accuracy | Tacnode Blog](https://tacnode.io/post/vector-quantization-explained) — binary/int8 quantization 원리와 recall 트레이드오프
- [Vector Quantization - MongoDB Vector Search 공식 문서](https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-quantization/) — binary quantization으로 RAM 비용 약 1/24 절감 사례
- [Any plans of deprecating text-embedding-ada-002? | OpenAI Developer Community](https://community.openai.com/t/any-plans-of-deprecating-text-embedding-ada-002/700561) — ada-002 지원 종료/마이그레이션 관련 논의(제공사별 정책 상이하니 공식 공지 확인 필요)
- [OpenAI's Text Embeddings v3 | Pinecone](https://www.pinecone.io/learn/openai-embeddings-v3/) — ada-002 대비 text-embedding-3 품질/차원 개선 데이터
- [Fine-tune Embedding models for Retrieval Augmented Generation (RAG) | Philschmid](https://www.philschmid.de/fine-tune-embedding-model-for-rag) — 임베딩 파인튜닝 실행 방법과 비용
- [RAG vs Fine-Tuning — What Actually Works in Production (2026) | DEV Community](https://dev.to/tyson_cung/rag-vs-fine-tuning-what-actually-works-in-production-2026-20jg) — 재인덱싱 비용 정량 사례(5천만 문서 기준), 파인튜닝 vs 저비용 대안 우선순위

> 참고: 임베딩 모델 순위·가격은 제공사가 자주 갱신하므로, 위 자료는 레슨 작성 시점(2026년 7월) 기준
> 최신 공개 정보를 반영한 것이다. 실제 모델 선택 전에는 반드시 각 제공사의 최신 공식 문서와 가격
> 페이지, 그리고 자신의 도메인 평가셋으로 재검증해야 한다.

## Vector Database 최신 근거 (Day 5, 2026년 7월 조사 반영)

- [Best Vector Databases in 2026: Complete Comparison Guide — Encore](https://encore.dev/articles/best-vector-databases) — Pinecone/Qdrant/Weaviate/Milvus/pgvector/Chroma 2026년 프로덕션 선택 기준 비교
- [pgvector vs Pinecone vs Qdrant vs Weaviate (2026): Which We Actually Use in Production — Kalvium Labs](https://www.kalviumlabs.ai/blog/vector-databases-compared-pgvector-pinecone-qdrant-weaviate/) — 기존 Postgres 스택 재사용 vs 전용 벡터 DB 도입 기준
- [HNSW vs DiskANN: comparing the leading ANN algorithms — Vectroid](https://www.vectroid.com/resources/HNSW-vs-DiskANN-comparing-the-leading-ANN-algorithm) — 메모리 상주(HNSW) vs SSD 기반(DiskANN) 트레이드오프
- [Vamana vs. HNSW - Exploring ANN algorithms Part 1 — Weaviate](https://weaviate.io/blog/ann-algorithms-vamana-vs-hnsw) — Vamana/DiskANN 원리와 HNSW 비교
- [HNSW vs. DiskANN — Tiger Data](https://www.tigerdata.com/learn/hnsw-vs-diskann) — billion-scale 규모에서의 실무 선택 기준
- [Introducing Pinecone Serverless — Pinecone](https://www.pinecone.io/blog/serverless/) — 스토리지/쿼리 과금 분리 서버리스 아키텍처
- [Pinecone Pods vs. Serverless: Migration Guide — Pinecone](https://www.pinecone.io/lp/pods-vs-serverless/) — pod 기반과 서버리스의 마이그레이션·손익분기점
- [Vector Database Pricing Comparison 2026: Real Cost Breakdown — Ranksquire](https://ranksquire.com/2026/03/04/vector-database-pricing-comparison-2026/) — 콜드 스타트 지연, 견적 대비 실제 청구서 괴리(2.5~4배) 사례
- [The Art of Scaling a Vector Database like Weaviate — Weaviate](https://weaviate.io/blog/scaling-and-weaviate) — UUID 기반 virtual shard 샤딩 구조
- [Vector Database Reindexing Pipeline — Medium](https://medium.com/@kandaanusha/vector-database-reindexing-pipeline-87efa1d1cd19) — Blue-Green 재인덱싱 전략, 라이브 세그먼트 추가/백필
- [TurboPuffer: Object Storage-First Vector Database Architecture — Jason Liu](https://jxnl.co/writing/2025/09/11/turbopuffer-object-storage-first-vector-database-architecture/) — SPFresh 인덱스, 오브젝트 스토리지 계층화 구조
- [turbopuffer: fast search on object storage](https://turbopuffer.com/blog/turbopuffer) — 클러스터 기반 인덱스와 비용 절감 근거
- [LanceDB vs Turbopuffer (2026): Features, Pricing & Verdict — Respan](https://www.respan.ai/market-map/compare/lancedb-vs-turbopuffer) — Lance 컬럼 포맷 기반 디스크 아키텍처 비교

> 참고: 1억 2천만 벡터 재구축(약 18시간) 장애 사례는 여러 2026년 벡터 DB 운영 리뷰 아티클에서 공통
> 인용되는 내용이며, 벤더별 아키텍처·가격 정책은 자주 갱신되므로 실제 도입 전에는 각 제공사의
> 최신 공식 문서로 재검증해야 한다.

## Hybrid Search 최신 근거 (Day 6, 2026년 7월 조사 반영)

- [Hybrid Search: BM25, Vector & Reranking Reference 2026 — Digital Applied](https://www.digitalapplied.com/blog/hybrid-search-bm25-vector-reranking-reference-2026) — BM25/dense/reranking 결합 실무 레퍼런스
- [Hybrid Search Done Right: Fixing RAG Retrieval Failures using BM25 + HNSW + RRF in Elasticsearch — Medium](https://ashutoshkumars1ngh.medium.com/hybrid-search-done-right-fixing-rag-retrieval-failures-using-bm25-hnsw-reciprocal-rank-fusion-a73596652d22) — RRF가 WANDS 벤치마크에서 BM25/KNN 단독보다 우수한 NDCG 사례
- [Hybrid RAG: Dense and Sparse Retrieval for Better AI Answers — Atlan](https://atlan.com/know/hybrid-rag/) — dense/sparse 결합의 실무 동기
- [Reciprocal Rank Fusion (RRF): How It Works and When to Use It — BigData Boutique](https://bigdataboutique.com/blog/reciprocal-rank-fusion-how-it-works-and-when-to-use-it) — RRF 원리와 적용 시점
- [Advanced RAG — Understanding Reciprocal Rank Fusion in Hybrid Search — Guillaume Laforge (2026)](https://glaforge.dev/posts/2026/02/10/advanced-rag-understanding-reciprocal-rank-fusion-in-hybrid-search/) — RRF k 상수 튜닝 실무 가이드
- [Hybrid retrieval with reciprocal rank fusion: solving the score normalization problem — Andrey Chauzov](https://avchauzov.github.io/blog/2025/hybrid-retrieval-rrf-rank-fusion/) — score incompatibility 문제와 RRF의 해법
- [Introducing reciprocal rank fusion for hybrid search — OpenSearch](https://opensearch.org/blog/introducing-reciprocal-rank-fusion-hybrid-search/) — OpenSearch 네이티브 RRF 구현
- [Hybrid Search Scoring (RRF) — Azure AI Search, Microsoft Learn](https://learn.microsoft.com/en-us/azure/search/hybrid-search-ranking) — 매니지드 서비스의 RRF 기반 하이브리드 스코어링
- [SPLADE vs BM25: Learned Sparse Retrieval for Production Search — Suhas Bhairav](https://suhasbhairav.com/blog/splade-vs-bm25-learned-sparse-retrieval-vs-traditional-keyword-scoring) — learned sparse와 lexical의 강약점 비교
- [Lexical vs Learned Sparse Retrieval: BM25 vs SPLADE at Scale — Cosdata](https://www.cosdata.io/blog/lexical-versus-learned-sparse-retrieval-bm25-vs-splade-at-scale) — 대규모 환경에서의 BM25/SPLADE 비교
- [Production Retrievers in RAG That Work: Hybrid Search + Re-Ranking (ColBERT, SPLADE, e5/BGE) — Medium](https://machine-mind-ml.medium.com/production-rag-that-works-hybrid-search-re-ranking-colbert-splade-e5-bge-624e9703fa2b) — BM25+dense+RRF를 종착점으로 보는 2026년 실무 컨센서스

> 참고: Qdrant `Fusion.RRF`/`Fusion.DBSF`, Weaviate 기본 alpha=0.75 fusion, Elasticsearch/OpenSearch `rrf` retriever
> 등 벤더별 구현 세부사항은 위 자료들을 종합한 것이며, 파라미터 기본값과 라이선스 정책은 자주 갱신되므로
> 실제 도입 전 각 제공사의 최신 공식 문서로 재검증해야 한다.

## 인터뷰 준비

- [System Design Interview (Alex Xu)](https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF) — 검색 시스템 설계 문제와 유사한 사고 프레임
- [Chip Huyen — Machine Learning Interviews Book](https://huyenchip.com/ml-interviews-book/) — ML/AI 시스템 인터뷰 준비
