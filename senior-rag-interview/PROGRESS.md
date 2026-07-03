# RAG Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-02 | RAG 시스템 설계와 검색 품질 진단 프레임워크 | [0001-rag-architecture-retrieval-quality-diagnosis-framework.html](lessons/0001-rag-architecture-retrieval-quality-diagnosis-framework.html) |
| 2 | 2026-07-02 | 문서 수집과 정제 파이프라인 | [0002-document-ingestion-and-cleaning-pipeline.html](lessons/0002-document-ingestion-and-cleaning-pipeline.html) |
| 3 | 2026-07-03 | Chunking 전략 설계 | [0003-chunking-strategy-design.html](lessons/0003-chunking-strategy-design.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 4 | Embedding 모델 선택과 트레이드오프 | Dense embedding, 차원, 도메인 적합성, 비용 |
| 5 | Vector Database 선택과 운영 | ANN 인덱스, HNSW, 샤딩, 재인덱싱 운영 |
| 6 | Hybrid Search — BM25와 Vector 결합 | Sparse vs Dense, RRF, 하이브리드 스코어링 |
| 7 | Metadata Filtering과 검색 정밀도 | Pre/Post filtering, 스키마 설계, ACL 결합 |
| 8 | Reranking 전략 | Cross-encoder reranking, 비용 대비 품질 개선 |
| 9 | Context 구성과 Prompt 설계 | Context window 관리, ordering, prompt injection 방어 |
| 10 | Hallucination 완화와 답변 근거 표시 | Grounding, citation, 답변 거부(abstain) 전략 |
| 11 | 평가 지표와 Offline/Online Evaluation | Recall@k, Faithfulness, RAGAS, A/B 테스트 |
| 12 | 권한/보안과 개인정보 처리 | Document-level ACL, PII 마스킹, 데이터 거버넌스 |
| 13 | 캐싱과 비용 최적화 | Semantic cache, 임베딩 재사용, 비용 구조 분석 |
| 14 | 관측성과 장애 대응 | 검색/생성 지표 관측, 장애 격리, 인시던트 대응 |

## 현재 학습 위치

**Day 3 완료** — 다음: Day 4 — Embedding 모델 선택과 트레이드오프

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
- [ ] Embedding 모델 선택 기준 (예정 Day 4)
- [ ] Vector Database 운영 (예정 Day 5)
- [ ] Hybrid Search 설계 (예정 Day 6)
- [ ] Metadata Filtering (예정 Day 7)
- [ ] Reranking 전략 (예정 Day 8)
- [ ] Context 구성과 Prompt 설계 (예정 Day 9)
- [ ] Hallucination 완화와 답변 근거 표시 (예정 Day 10)
- [ ] 평가 지표와 Offline/Online Evaluation (예정 Day 11)
- [ ] 권한/보안과 개인정보 처리 (예정 Day 12)
- [ ] 캐싱과 비용 최적화 (예정 Day 13)
- [ ] 관측성과 장애 대응 (예정 Day 14)
