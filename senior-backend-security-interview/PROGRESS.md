# 백엔드 보안 / Secure Coding Interview 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 백엔드 보안 사고 프레임워크와 인증/인가 | [0001-security-framework-authn-authz.html](lessons/0001-security-framework-authn-authz.html) |
| 2 | 2026-07-01 | 세션 관리와 JWT — 설계 판단 | [0002-session-management-jwt.html](lessons/0002-session-management-jwt.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 3 | SQL Injection | Parameterized Query, ORM 한계, Blind SQLi, 방어 계층 |
| 4 | XSS와 CSRF | Reflected/Stored/DOM XSS, SameSite 쿠키, CSRF 토큰 |
| 5 | 파일 업로드 보안과 SSRF | 파일 검증, MIME sniffing, SSRF 방어 |
| 6 | API 보안 | Rate Limiting, 과도한 데이터 노출, Mass Assignment |
| 7 | 비밀번호 저장 | bcrypt vs Argon2, rainbow table, 솔팅 |
| 8 | Secret 관리 | 환경 변수, Vault, KMS, 비밀 로테이션 |
| 9 | Secure Coding 원칙 | 입력 검증, 최소 권한, 보안 기본값, 코드 리뷰 |
| 10 | 종합 케이스 스터디 | 실제 침해 사례 분석, 설계 리뷰 |

## 현재 학습 위치

**Day 2 완료** — Day 3 (SQL Injection)이 다음 차례.

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
- [ ] SQL Injection 방어 계층 (예정 Day 3)
- [ ] XSS 3가지 유형 (예정 Day 4)
- [ ] CSRF 방어 설계 (예정 Day 4)
- [ ] bcrypt/Argon2 비교 (예정 Day 7)
