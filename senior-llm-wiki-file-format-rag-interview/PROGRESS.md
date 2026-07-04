# LLM Wiki / File Format RAG Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-04 | LLM Wiki와 파일 형식 RAG 시스템 설계/운영 프레임워크 | [0001-llm-wiki-file-format-rag-architecture-operations-framework.html](lessons/0001-llm-wiki-file-format-rag-architecture-operations-framework.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 2 | LLM Wiki 지식 큐레이션과 Skill 문서 관리 | raw/wiki/schema 3계층, ingest/query/lint, compounding knowledge, 버전 관리 |
| 3 | 이기종 문서 수집 아키텍처와 커넥터 설계 | Connector, 포맷 감지, 파이프라인 오케스트레이션, 실패 격리 |
| 4 | PDF/DOCX/PPTX/XLSX 파싱 전략 | 레이아웃 분석, 구조 보존, Docling/Unstructured/LlamaParse/Reducto 선택 기준 |
| 5 | HTML/Markdown/코드/CSV/JSON/YAML 파싱과 구조화 데이터 처리 | 시맨틱 태그 활용, AST 기반 코드 파싱, 스키마 인식 |
| 6 | OCR과 Table/Image Extraction | 레이아웃 인식 모델, 병합 셀 표, 멀티모달 추출, 품질 검증 |
| 7 | Metadata와 Provenance 설계 | 근거 추적, lineage, freshness, 출처 시스템 매핑 |
| 8 | 문서 구조 기반 Semantic Chunking | Structure-aware/table-aware chunking, 계층적 chunk, contextual retrieval |
| 9 | Incremental Indexing, Deduplication, Versioning | 변경 감지, 정확/근접 중복 제거, 재인덱싱 비용 관리 |
| 10 | Embedding 모델 선택과 Vector Database 운영 | 도메인 적합성, 멀티모달 임베딩, ANN 인덱스 운영 |
| 11 | Hybrid Search, Metadata Filtering, Reranking | Sparse+Dense 결합, pre/post filtering, cross-encoder reranking |
| 12 | Citation Grounding, Context 구성, Prompt Injection 방어 | 근거 인용, ordering, spotlighting/sanitization 방어 기법 |
| 13 | Permission-aware Retrieval과 보안 | 벡터 계층 ACL, 실시간 권한 동기화, 감사 가능성 |
| 14 | 평가 지표와 Offline/Online Evaluation | 포맷별 파싱 정확도, RAGAS/DeepEval/TruLens, 프로덕션 연동 평가 |
| 15 | 관측성, 장애 대응, 비용/성능 Trade-off | 파이프라인별 지표 분리, 인시던트 대응, 파싱/OCR/임베딩 비용 구조 |

## 현재 학습 위치

**Day 1 완료** — 다음: Day 2 — LLM Wiki 지식 큐레이션과 Skill 문서 관리

## 습득한 핵심 개념

- [x] Query-time RAG vs LLM Wiki(사전 큐레이션) 패러다임 차이와 선택 기준 (Day 1)
- [x] 이기종 파일 형식 RAG의 전체 아키텍처(수집→파싱→OCR/표추출→메타데이터→청킹→인덱싱→검색→근거표시→평가/관측) (Day 1)
- [x] 장애 발생 시 어느 계층(수집/파싱/큐레이션/검색/생성/권한)부터 점검할지 좁혀나가는 진단 프레임워크 (Day 1)
- [x] Karpathy LLM Wiki 패턴의 3계층(raw/wiki/schema)과 3연산(ingest/query/lint) 개요 (Day 1)
- [ ] LLM Wiki 지식 큐레이션과 Skill 문서 관리 상세 (예정 Day 2)
- [ ] 이기종 문서 수집 아키텍처와 커넥터 설계 (예정 Day 3)
- [ ] PDF/DOCX/PPTX/XLSX 파싱 전략 (예정 Day 4)
- [ ] HTML/Markdown/코드/CSV/JSON/YAML 파싱 (예정 Day 5)
- [ ] OCR과 Table/Image Extraction (예정 Day 6)
- [ ] Metadata와 Provenance 설계 (예정 Day 7)
- [ ] 문서 구조 기반 Semantic Chunking (예정 Day 8)
- [ ] Incremental Indexing, Deduplication, Versioning (예정 Day 9)
- [ ] Embedding 모델 선택과 Vector Database 운영 (예정 Day 10)
- [ ] Hybrid Search, Metadata Filtering, Reranking (예정 Day 11)
- [ ] Citation Grounding, Context 구성, Prompt Injection 방어 (예정 Day 12)
- [ ] Permission-aware Retrieval과 보안 (예정 Day 13)
- [ ] 평가 지표와 Offline/Online Evaluation (예정 Day 14)
- [ ] 관측성, 장애 대응, 비용/성능 Trade-off (예정 Day 15)
