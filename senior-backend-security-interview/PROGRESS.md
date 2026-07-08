# 백엔드 보안 / Secure Coding Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 백엔드 보안 사고 프레임워크와 인증/인가 | [0001-security-framework-authn-authz.html](lessons/0001-security-framework-authn-authz.html) |
| 2 | 2026-07-01 | 세션 관리와 JWT — 설계 판단 | [0002-session-management-jwt.html](lessons/0002-session-management-jwt.html) |
| 3 | 2026-07-02 | SQL Injection — 탐지, 방어, 실무 패턴 | [0003-sql-injection.html](lessons/0003-sql-injection.html) |
| 4 | 2026-07-03 | XSS와 CSRF — 공격 원리와 방어 설계 | [0004-xss-csrf.html](lessons/0004-xss-csrf.html) |
| 5 | 2026-07-04 | 파일 업로드 보안과 SSRF | [0005-file-upload-ssrf.html](lessons/0005-file-upload-ssrf.html) |
| 6 | 2026-07-05 | API 보안 — 인증, 속도 제한, 데이터 노출 | [0006-api-security.html](lessons/0006-api-security.html) |
| 7 | 2026-07-06 | 비밀번호 저장과 크리덴셜 보호 | [0007-password-storage-credential-protection.html](lessons/0007-password-storage-credential-protection.html) |
| 8 | 2026-07-07 | Secret 관리와 환경 변수 전략 | [0008-secret-management.html](lessons/0008-secret-management.html) |
| 9 | 2026-07-08 | Secure Coding 원칙과 코드 리뷰 | [0009-secure-coding-principles-code-review.html](lessons/0009-secure-coding-principles-code-review.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 10 | 종합 케이스 스터디 | 실제 침해 사례 분석, 설계 리뷰 |

## 현재 학습 위치

**Day 9 완료** — Day 10 (종합 보안 설계 케이스 스터디)이 다음 차례.

## 습득한 핵심 개념

- [x] 위협 모델링 프레임워크 — STRIDE 방법론 (Day 1)
- [x] Authentication vs Authorization 구분 (Day 1)
- [x] RBAC vs ABAC 비교와 선택 기준 (Day 1)
- [x] Defense in Depth (계층 방어) 원칙 (Day 1)
- [x] Principle of Least Privilege (최소 권한 원칙) (Day 1)
- [x] 세션 vs JWT trade-off — Stateful/Stateless 선택 기준 (Day 2)
- [x] JWT 구조, 서명 알고리즘(HS256/RS256), alg 화이트리스트 검증 (Day 2)
- [x] 토큰 저장 위치 — localStorage vs httpOnly Cookie, XSS/CSRF trade-off (Day 2)
- [x] Access/Refresh Token 갱신 전략, Refresh Token Rotation (Day 2)
- [x] JWT 취소 문제 — 블랙리스트, 토큰 버전 관리 (Day 2)
- [x] SQL Injection 원리 — 데이터/명령어 경계 붕괴 (Day 3)
- [x] Union/Error/Blind(Boolean, Time-based) SQL Injection 유형 (Day 3)
- [x] Parameterized Query가 이스케이프와 다른 근본 방어인 이유 (Day 3)
- [x] ORM raw query/동적 정렬 컬럼에서의 Injection 잔존 위험 (Day 3)
- [x] 식별자(컬럼명/테이블명) 화이트리스트 방어 패턴 (Day 3)
- [x] XSS 3가지 유형 — Reflected/Stored/DOM-based와 방어 위치 차이 (Day 4)
- [x] 출력 컨텍스트별 인코딩과 프레임워크 자동 이스케이프 우회 위험 (Day 4)
- [x] CSP의 역할과 한계 — unsafe-inline, 공급망 침해 (Day 4)
- [x] CSRF 원리 — 쿠키 자동 첨부라는 브라우저 신뢰 모델 (Day 4)
- [x] SameSite 쿠키 + CSRF 토큰 계층 방어 (Day 4)
- [x] Bearer 토큰 인증과 CSRF/XSS trade-off의 저장 위치 의존성 (Day 4)
- [x] 파일 업로드 위협 모델 — 확장자와 실제 파일 내용의 괴리, 실행 가능 경로의 위험 (Day 5)
- [x] 매직 바이트 검증과 이미지 리사이징 라이브러리의 잔여 위험 (Day 5)
- [x] 업로드 저장소 분리, 서버 생성 파일명, 별도 도메인 서빙 (Day 5)
- [x] SSRF 원리 — 서버 자신의 네트워크 위치·권한이 대리 악용되는 구조 (Day 5)
- [x] 클라우드 메타데이터 엔드포인트 공격과 IMDSv2 (Day 5)
- [x] SSRF 블랙리스트 우회(DNS Rebinding, IP 인코딩, 리다이렉트)와 네트워크 세그멘테이션 방어 (Day 5)
- [x] 인증(Authentication)과 인가(Authorization)를 API 엔드포인트/객체 레벨로 세분화하는 관점 (Day 6)
- [x] BOLA(IDOR) — 객체 단위 인가 누락과 UUID가 근본 방어가 아닌 이유 (Day 6)
- [x] Mass Assignment — 화이트리스트 입력 DTO 설계 (Day 6)
- [x] 과도한 데이터 노출 — 화이트리스트 응답 DTO 설계, GraphQL 필드 레벨 인가 (Day 6)
- [x] Rate Limiting — Gateway/애플리케이션 레이어 역할 구분, IP+계정 복합 키 설계 (Day 6)
- [x] 해시(Hash)와 암호화(Encryption)의 근본적 차이 — 단방향/양방향 구조 (Day 7)
- [x] 솔팅(Salting)과 레인보우 테이블 공격의 무력화 원리 (Day 7)
- [x] bcrypt/scrypt/Argon2 — 의도적으로 느린 해시가 필요한 이유와 알고리즘별 차이 (Day 7)
- [x] cost factor/파라미터 튜닝과 하드웨어 기반 벤치마크 (Day 7)
- [x] 크리덴셜 스터핑 — 저장 방식과 별개인 방어선, 유출 비밀번호 대조와 MFA (Day 7)
- [x] 레거시 시스템 점진적 해시 마이그레이션(lazy migration) 패턴 (Day 7)
- [x] 환경 변수(.env)의 노출 경로 — git 커밋, 로그, 프로세스 덤프, 서브프로세스 상속 (Day 8)
- [x] Vault/AWS Secrets Manager — 접근 제어, 감사 로그, 동적 Secret (Day 8)
- [x] 정적 vs 동적 Secret과 무중단 로테이션(overlap window) 설계 (Day 8)
- [x] CI/CD Secret 노출 위험 — fork PR, pull_request_target, 서드파티 액션 공급망 침해 (Day 8)
- [x] Envelope Encryption — KEK/DEK 계층 구조와 HSM 기반 키 관리 (Day 8)
- [x] 입력 검증 — 화이트리스트 vs 블랙리스트, 클라이언트 검증과 신뢰 경계의 차이 (Day 9)
- [x] 최소 권한 원칙의 코드/인프라 레벨 적용 — DB 계정, 서비스 간 통신, IAM 세분화 (Day 9)
- [x] 보안 기본값 — Fail-Open vs Fail-Closed, 기능 민감도에 따른 trade-off (Day 9)
- [x] 코드 리뷰 프로세스의 구조적 방어 — SAST/SCA, 조건부 체크리스트, 표준 테스트 템플릿 (Day 9)
- [ ] 종합 보안 설계 케이스 스터디 — 실제 침해 사례 분석, 재발 방지 설계 (예정 Day 10)
