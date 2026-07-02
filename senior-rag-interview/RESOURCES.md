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

## 인터뷰 준비

- [System Design Interview (Alex Xu)](https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF) — 검색 시스템 설계 문제와 유사한 사고 프레임
- [Chip Huyen — Machine Learning Interviews Book](https://huyenchip.com/ml-interviews-book/) — ML/AI 시스템 인터뷰 준비
