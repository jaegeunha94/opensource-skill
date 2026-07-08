# LLM Wiki / File Format RAG Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-07-04 | LLM Wiki와 파일 형식 RAG 시스템 설계/운영 프레임워크 | [0001-llm-wiki-file-format-rag-architecture-operations-framework.html](lessons/0001-llm-wiki-file-format-rag-architecture-operations-framework.html) |
| 2 | 2026-07-05 | LLM Wiki 지식 큐레이션과 Skill 문서 관리 | [0002-llm-wiki-knowledge-curation-and-skill-document-management.html](lessons/0002-llm-wiki-knowledge-curation-and-skill-document-management.html) |
| 3 | 2026-07-06 | 이기종 문서 수집 아키텍처와 커넥터 설계 | [0003-heterogeneous-document-ingestion-connector-architecture.html](lessons/0003-heterogeneous-document-ingestion-connector-architecture.html) |
| 4 | 2026-07-07 | PDF/DOCX/PPTX/XLSX 파싱 전략 | [0004-pdf-docx-pptx-xlsx-parsing-strategy.html](lessons/0004-pdf-docx-pptx-xlsx-parsing-strategy.html) |
| 5 | 2026-07-08 | HTML/Markdown/코드/CSV/JSON/YAML 파싱과 구조화 데이터 처리 | [0005-html-markdown-code-csv-json-yaml-parsing-structured-data.html](lessons/0005-html-markdown-code-csv-json-yaml-parsing-structured-data.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
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

**Day 5 완료** — 다음: Day 6 — OCR과 Table/Image Extraction

## 습득한 핵심 개념

- [x] Query-time RAG vs LLM Wiki(사전 큐레이션) 패러다임 차이와 선택 기준 (Day 1)
- [x] 이기종 파일 형식 RAG의 전체 아키텍처(수집→파싱→OCR/표추출→메타데이터→청킹→인덱싱→검색→근거표시→평가/관측) (Day 1)
- [x] 장애 발생 시 어느 계층(수집/파싱/큐레이션/검색/생성/권한)부터 점검할지 좁혀나가는 진단 프레임워크 (Day 1)
- [x] Karpathy LLM Wiki 패턴의 3계층(raw/wiki/schema)과 3연산(ingest/query/lint) 개요 (Day 1)
- [x] raw/wiki/schema 3계층과 ingest/query/lint 3연산의 상세 동작 원리, index.md/log.md 역할 (Day 2)
- [x] 개인용 LLM Wiki 패턴을 조직 규모로 확장할 때 capture/link/compound/stay-current가 각각 어떻게 바뀌어야 하는지 (Day 2)
- [x] Skill 문서(SKILL.md)의 Level 1/2/3 점진적 공개 구조와 위키 계층 구조의 대응 관계 (Day 2)
- [x] 지식/Skill 문서를 코드와 동등하게 버전 관리·리뷰하고, compounding knowledge의 조건부 가치와 오류 확산 위험을 판단하는 능력 (Day 2)
- [x] Extract-Stage-Transform 분리로 파싱 실패와 수집 실패를 격리하는 아키텍처 원칙 (Day 3)
- [x] 확장자/클라이언트 MIME을 신뢰하지 않는 내용 기반 포맷 감지와 ZIP 기반 컨테이너 포맷(DOCX/PPTX/XLSX/EPUB/JAR)의 매직 바이트 모호성 (Day 3)
- [x] Push(웹훅)/Pull(폴링) 하이브리드 증분 동기화 설계와 커넥터 단위 실패 격리(bulkhead, 서킷 브레이커, DLQ) (Day 3)
- [x] PDF(구조 추론)와 DOCX/PPTX/XLSX(구조 보존)의 파싱 문제 본질 차이, Rule-based/ML 레이아웃/VLM 3갈래 레이아웃 분석 접근 (Day 4)
- [x] VLM 직접 파싱의 hallucination 위험(표/수치 데이터 중심)과 2026년 하이브리드 파이프라인 컨센서스 (Day 4)
- [x] 벤더 벤치마크(ParseBench, RD-TableBench 등)를 설계·채점 주체 기준으로 비판적으로 해석하고 도메인 골든셋으로 자체 검증하는 판단력 (Day 4)
- [x] openpyxl 수식 캐싱, 병합 셀, python-docx 추적 변경 내용 같은 오피스 포맷 파싱의 구체적 엣지 케이스 (Day 4)
- [x] HTML 시맨틱 태그(article/nav/main)와 휴리스틱 본문 추출(Trafilatura)로 본문/잡음 분리 (Day 5)
- [x] Markdown 헤더 계층 보존 분할과 frontmatter 메타데이터 분리 (Day 5)
- [x] AST(tree-sitter) 기반 코드 청킹의 4대 설계 원칙(문법 완결성/정보 밀도/언어 불변성/재조립 가능성)과 cAST 실증 성과 (Day 5)
- [x] 구조적 검색(호출 그래프 순회)으로 임베딩 검색을 보완하는 하이브리드 코드 검색 (Day 5)
- [x] CSV/JSON/YAML 구조화 데이터가 임베딩에 원래 적합하지 않은 이유와 서술형/사실형 데이터 분리, Text-to-SQL 하이브리드 (Day 5)
- [x] YAML `yaml.load()`/`unsafe_load()`의 원격 코드 실행(RCE) 위험과 `safe_load()` 강제의 필요성 (Day 5)
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
