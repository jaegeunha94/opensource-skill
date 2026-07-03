# 백엔드 보안 / Secure Coding Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 백엔드 보안 사고 프레임워크와 인증/인가 | [0001-security-framework-authn-authz.html](lessons/0001-security-framework-authn-authz.html) |
| 2 | 2026-07-01 | 세션 관리와 JWT — 설계 판단 | [0002-session-management-jwt.html](lessons/0002-session-management-jwt.html) |
| 3 | 2026-07-02 | SQL Injection — 탐지, 방어, 실무 패턴 | [0003-sql-injection.html](lessons/0003-sql-injection.html) |
| 4 | 2026-07-03 | XSS와 CSRF — 공격 원리와 방어 설계 | [0004-xss-csrf.html](lessons/0004-xss-csrf.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 5 | 파일 업로드 보안과 SSRF | 파일 검증, MIME sniffing, SSRF 방어 |
| 6 | API 보안 | Rate Limiting, 과도한 데이터 노출, Mass Assignment |
| 7 | 비밀번호 저장 | bcrypt vs Argon2, rainbow table, 솔팅 |
| 8 | Secret 관리 | 환경 변수, Vault, KMS, 비밀 로테이션 |
| 9 | Secure Coding 원칙 | 입력 검증, 최소 권한, 보안 기본값, 코드 리뷰 |
| 10 | 종합 케이스 스터디 | 실제 침해 사례 분석, 설계 리뷰 |

## 현재 학습 위치

**Day 4 완료** — Day 5 (파일 업로드 보안과 SSRF)가 다음 차례.

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
- [ ] 파일 업로드 검증과 MIME sniffing (예정 Day 5)
- [ ] SSRF 공격 원리와 방어 (예정 Day 5)
- [ ] bcrypt/Argon2 비교 (예정 Day 7)
