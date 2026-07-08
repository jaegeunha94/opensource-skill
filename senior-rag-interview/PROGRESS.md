# RAG Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | RAG 시스템 설계와 검색 품질 진단 프레임워크 | [0001-rag-architecture-retrieval-quality-diagnosis-framework.html](lessons/0001-rag-architecture-retrieval-quality-diagnosis-framework.html) |
| 2 | 2026-07-02 | 문서 수집과 정제 파이프라인 | [0002-document-ingestion-and-cleaning-pipeline.html](lessons/0002-document-ingestion-and-cleaning-pipeline.html) |
| 3 | 2026-07-03 | Chunking 전략 설계 | [0003-chunking-strategy-design.html](lessons/0003-chunking-strategy-design.html) |
| 4 | 2026-07-04 | Embedding 모델 선택과 트레이드오프 | [0004-embedding-model-selection-and-tradeoffs.html](lessons/0004-embedding-model-selection-and-tradeoffs.html) |
| 5 | 2026-07-05 | Vector Database 선택과 운영 | [0005-vector-database-selection-and-operations.html](lessons/0005-vector-database-selection-and-operations.html) |
| 6 | 2026-07-06 | Hybrid Search — BM25와 Vector 결합 | [0006-hybrid-search-bm25-and-vector-fusion.html](lessons/0006-hybrid-search-bm25-and-vector-fusion.html) |
| 7 | 2026-07-07 | Metadata Filtering과 검색 정밀도 | [0007-metadata-filtering-and-retrieval-precision.html](lessons/0007-metadata-filtering-and-retrieval-precision.html) |
| 8 | 2026-07-08 | Reranking 전략 | [0008-reranking-strategy.html](lessons/0008-reranking-strategy.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 9 | Context 구성과 Prompt 설계 | Context window 관리, ordering, prompt injection 방어 |
| 10 | Hallucination 완화와 답변 근거 표시 | Grounding, citation, 답변 거부(abstain) 전략 |
| 11 | 평가 지표와 Offline/Online Evaluation | Recall@k, Faithfulness, RAGAS, A/B 테스트 |
| 12 | 권한/보안과 개인정보 처리 | Document-level ACL, PII 마스킹, 데이터 거버넌스 |
| 13 | 캐싱과 비용 최적화 | Semantic cache, 임베딩 재사용, 비용 구조 분석 |
| 14 | 관측성과 장애 대응 | 검색/생성 지표 관측, 장애 격리, 인시던트 대응 |

## 현재 학습 위치

**Day 8 완료** — 다음: Day 9 — Context 구성과 Prompt 설계

## 습득한 핵심 개념

- [x] RAG 파이프라인 구조 (Ingestion / Query pipeline) (Day 1)
- [x] Retrieval 실패 vs Generation 실패 진단 프레임워크 (Day 1)
- [x] RAG vs Fine-tuning 선택 기준 (Day 1)
- [x] RAG와 hallucination의 관계 (Day 1)
- [x] 문서 수집/정제 파이프라인 설계 (Day 2)
- [x] 정확/근접 중복 탐지와 신선도(freshness) 전략 (Day 2)
- [x] Ingestion 시점의 권한 메타데이터 설계 (Day 2)
- [x] Chunking 전략(fixed-size/recursive/구조 인식/semantic)과 크기·overlap 트레이드오프 (Day 3)
- [x] Late chunking과 Contextual Retrieval의 원리·비용 차이 (Day 3)
- [x] Embedding 모델 선택 기준(MTEB 재검증, MRL, quantization, self-host vs API) (Day 4)
- [x] 임베딩 모델 교체의 재인덱싱 비용과 마이그레이션 전략, 파인튜닝 도입 순서 (Day 4)
- [x] ANN 인덱스 구조(HNSW/DiskANN/오브젝트 스토리지)의 메모리·비용 트레이드오프 (Day 5)
- [x] 매니지드 vs self-host TCO 판단, 서버리스 비용 구조와 콜드 스타트 (Day 5)
- [x] 샤딩·복제 목적 구분과 Blue-Green 재인덱싱 운영 전략 (Day 5)
- [x] Dense/BM25/SPLADE 강약점과 score incompatibility 문제 (Day 6)
- [x] RRF(순위 기반 fusion)와 가중치 fusion(alpha/DBSF)의 트레이드오프, k 상수 튜닝 기준 (Day 6)
- [x] Pre/Post filtering의 실패 모드와 필터 선택도 기반 인덱스 전략(Qdrant/Weaviate/Pinecone/ACORN) (Day 7)
- [x] ACL 쿼리 레벨 강제와 소스 시스템 ACL 동기화 지연(staleness) 위험 (Day 7)
- [x] Bi-encoder/cross-encoder/late-interaction(ColBERT)/LLM listwise reranking의 구조적 차이와 지연·비용 트레이드오프 (Day 8)
- [x] Reranker 모델·경로 계층화, 도메인 재검증, 장애 시 graceful degradation 설계 (Day 8)
- [ ] Context 구성과 Prompt 설계 (예정 Day 9)
- [ ] Hallucination 완화와 답변 근거 표시 (예정 Day 10)
- [ ] 평가 지표와 Offline/Online Evaluation (예정 Day 11)
- [ ] 권한/보안과 개인정보 처리 (예정 Day 12)
- [ ] 캐싱과 비용 최적화 (예정 Day 13)
- [ ] 관측성과 장애 대응 (예정 Day 14)
