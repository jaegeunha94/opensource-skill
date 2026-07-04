# LLM Wiki / File Format RAG — 10년차 이상 개발자 Interview 대비

## 학습 목표

10년차 이상 백엔드/AI 엔지니어 인터뷰에서 평가하는 **LLM Wiki(지식 큐레이션)**와
**File Format RAG(이기종 문서 검색 증강 생성)** 시스템 설계·운영 역량을 체계적으로 준비한다.

단순 "벡터 DB에 PDF 넣고 챗봇 만들어봤어요" 수준의 데모나 파일 업로드 기능 구현이 아니라,
면접관이 실제로 평가하는:

- **이기종 문서 수집(heterogeneous document ingestion)**: PDF/DOCX/PPTX/XLSX/HTML/Markdown/
  코드/CSV/JSON/YAML처럼 구조가 전혀 다른 포맷을 하나의 파이프라인으로 안정적으로 수집하는 설계
- **지식/위키 큐레이션(knowledge & wiki curation)**: 매 질의마다 원문을 다시 뒤지는 query-time RAG와,
  지식을 구조화된 문서로 미리 정제·누적하는 LLM Wiki(Karpathy 패턴) 중 무엇을 언제 선택하는지,
  그리고 skill/지식 문서를 어떻게 버전 관리하고 큐레이션하는지에 대한 판단
- **검색 품질과 근거 추적**: hybrid search, reranking, metadata filtering, citation grounding으로
  "이 답변의 근거가 어느 문서 몇 페이지인지" 추적 가능하게 만드는 능력
- **권한/보안**: 문서별 접근 권한(ACL)이 검색 결과에 실제로 반영되는지, prompt injection에
  방어적인지 판단하는 능력
- **운영 안정성과 비용/성능 trade-off**: 파싱 실패 감지, incremental indexing, 중복 제거,
  observability, 장애 대응, 임베딩/파싱/OCR 비용 구조를 정량적으로 판단하는 능력

를 면접 현장에서 자연스럽게 말할 수 있도록 훈련한다.

## 전제 지식

- LLM API(OpenAI, Anthropic 등) 호출 경험
- 벡터 검색 또는 전문 검색(Elasticsearch 등) 사용 경험
- RAG(Retrieval-Augmented Generation)의 기본 개념 — 이미 `senior-rag-interview` 트랙을 학습했거나
  동등한 실무 경험이 있다고 가정한다. 이 트랙은 RAG 기초를 반복하지 않고, **이기종 파일 포맷 처리와
  지식 큐레이션이라는 RAG의 특수하고 어려운 하위 영역**에 집중한다.
- 백엔드 API 및 데이터 파이프라인 설계 경험

## 왜 이 주제가 별도 트랙인가

일반 RAG 인터뷰는 "텍스트 문서 하나를 청킹해서 검색한다"는 이상화된 상황을 가정하는 경우가 많다.
그러나 실무에서 다루는 지식 베이스는 스캔된 PDF, 표가 가득한 Excel, 슬라이드, 소스 코드, 설정 파일이
뒤섞여 있고, 문서마다 접근 권한이 다르며, 시간이 지나며 버전이 바뀐다. 이 트랙은 그 현실을 정면으로
다룬다:

1. **포맷별 파싱**: 같은 "문서"라도 PDF의 레이아웃 문제, DOCX/PPTX의 구조 정보, XLSX의 표 구조,
   HTML/Markdown의 시맨틱 태그, 코드/CSV/JSON/YAML의 구문 구조는 서로 다른 파싱 전략이 필요하다.
2. **OCR과 표/이미지 추출**: 스캔 문서, 다단 레이아웃, 병합 셀 표, 이미지 안의 텍스트를 놓치면
   검색이 실패하기 전에 이미 지식이 유실된 것이다.
3. **지식 큐레이션(LLM Wiki)**: 2026년 Andrej Karpathy가 공개한 `llm-wiki` 패턴처럼, 원본을 매번
   재검색하는 대신 LLM이 구조화된 위키 페이지를 점진적으로 만들고 유지하는 접근이 실무에서
   빠르게 확산되고 있다. RAG와 LLM Wiki는 대립이 아니라 **함께 쓰이는 두 계층**이며, 언제 무엇을
   선택할지가 시니어 면접의 핵심 판단 포인트다.
4. **권한/보안**: 이기종 문서는 출처 시스템(Confluence, Google Drive, S3, GitHub 등)마다 서로 다른
   권한 모델을 갖고 있고, 이를 검색 시점까지 정확히 반영하지 못하면 정보 유출 사고로 이어진다.

## 커리큘럼 개요

| Day | 주제 | 핵심 개념 |
|-----|------|-----------|
| 1 | LLM Wiki와 파일 형식 RAG 시스템 설계/운영 프레임워크 | Query-time RAG vs LLM Wiki curation, 전체 아키텍처, 장애 진단 프레임워크 |
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

## 학습 원칙

1. 각 레슨은 면접 질문 → 전제 개념 → 왜 면접에서 묻는가 → 실무 연결 → 답변 사고 순서 →
   핵심 답변 예시 → senior-level follow-up → 좋은/약한 답변 비교 → 자기 점검 rubric 순서로 진행한다.
2. 개념 설명은 "왜 이게 문제가 되는지"부터 시작하고, 어려운 개념은 전제 개념을 쉬운 한국어로
   먼저 풀어준다.
3. 모든 설명은 한국어로 하되, 기술 용어는 원어를 병기한다.
4. LLM Wiki / File Format RAG는 변화가 빠른 영역이므로, 레슨 작성 시점의 최신 공식 문서, changelog,
   deprecation/migration guide, production 사례를 우선 확인하고 커리큘럼과 예시에 반영한다.
   저장된 커리큘럼과 최신 근거가 충돌하면 최신 근거를 우선하고 그 이유를 `PROGRESS.md`,
   `RESOURCES.md`, 레슨에 명시한다.
5. 단순 RAG 데모나 업로드 기능 구현이 아니라, 이기종 수집, 지식 큐레이션, 검색 품질, 근거 추적,
   권한/보안, 운영 안정성, 비용/성능 trade-off를 중심으로 다룬다.
6. 각 레슨 마지막에는 자기 점검 rubric으로 학습 수준을 확인한다.
