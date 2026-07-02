# RAG — 10년차 이상 개발자 Interview 대비

## 학습 목표

10년차 이상 백엔드/AI 엔지니어 인터뷰에서 평가하는 RAG(Retrieval-Augmented Generation) 시스템 설계 역량을 체계적으로 준비한다.

단순 "LangChain으로 RAG 만들어봤어요" 수준의 데모 구현이나 LLM 용어 암기가 아니라, 면접관이 실제로 평가하는:

- **검색 품질 판단**: 검색이 실패했는지 생성이 실패했는지 구조적으로 진단하는 능력
- **데이터 파이프라인 설계**: 문서 수집, 정제, chunking, 임베딩, 인덱싱을 프로덕션 규모로 운영하는 판단
- **운영 안정성**: 인덱스 갱신, 장애 격리, 관측성, 인시던트 대응
- **비용/성능 trade-off**: 임베딩 모델 크기, context 길이, reranking 비용, 캐싱 전략 간의 정량적 판단
- **제품 품질 판단**: hallucination 완화, 답변 근거 표시, 평가 지표 설계, 권한/개인정보 처리

를 면접 현장에서 자연스럽게 말할 수 있도록 훈련한다.

## 전제 지식

- LLM API(OpenAI, Anthropic 등) 호출 경험
- 벡터 검색 또는 전문 검색(Elasticsearch 등) 사용 경험
- 백엔드 API 및 데이터 파이프라인 설계 경험

RAG 프레임워크의 세부 API를 모르더라도, **검색-생성 시스템을 프로덕션에 올리는 설계 판단 능력**을 중심으로 진행한다.

## 커리큘럼 개요

| Day | 주제 | 핵심 개념 |
|-----|------|-----------|
| 1 | RAG 시스템 설계와 검색 품질 진단 프레임워크 | RAG 아키텍처, Retrieval vs Generation 실패 분리, 진단 프레임워크 |
| 2 | 문서 수집과 정제 파이프라인 | Ingestion, 전처리, 중복 제거, 데이터 신선도 |
| 3 | Chunking 전략 설계 | Fixed-size, Semantic, Recursive chunking, overlap 설계 |
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

## 학습 원칙

1. 각 레슨은 면접 질문 → 전제 개념 → 왜 면접에서 묻는가 → 실무 연결 → 답변 사고 순서 → 핵심 답변 예시 → senior-level follow-up → 좋은/약한 답변 비교 → 자기 점검 rubric 순서로 진행한다.
2. 개념 설명은 "왜 이게 문제가 되는지"부터 시작하고, 어려운 개념은 전제 개념을 쉬운 한국어로 먼저 풀어준다.
3. 모든 설명은 한국어로 하되, 기술 용어는 원어를 병기한다.
4. 단순 LLM 용어 암기가 아니라 검색 품질, 데이터 파이프라인, 운영 안정성, 비용/성능 trade-off, 제품 품질 판단을 중심으로 다룬다.
5. 각 레슨 마지막에는 자기 점검 rubric으로 학습 수준을 확인한다.
