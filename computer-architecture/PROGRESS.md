# 컴퓨터 구조 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-22 | 컴퓨터 구조란 무엇인가? & 폰 노이만 아키텍처 | [0001-what-is-computer-architecture.html](lessons/0001-what-is-computer-architecture.html) |
| 2 | 2026-06-22 | 수의 표현 (Number Representation) | [0002-number-representation.html](lessons/0002-number-representation.html) |
| 3 | 2026-06-23 | 디지털 논리 기초 (Digital Logic) | [0003-digital-logic.html](lessons/0003-digital-logic.html) |
| 4 | 2026-06-24 | 산술 회로 (Arithmetic Circuits) | [0004-arithmetic-circuits.html](lessons/0004-arithmetic-circuits.html) |
| 5 | 2026-06-25 | 순서 논리 회로 (Sequential Logic) | [0005-sequential-logic.html](lessons/0005-sequential-logic.html) |
| 6 | 2026-06-26 | 메모리 계층 1 (Memory Hierarchy) | [0006-memory-hierarchy-1.html](lessons/0006-memory-hierarchy-1.html) |
| 7 | 2026-06-27 | 메모리 계층 2 — 캐시 구조 (Cache Structures) | [0007-cache-structures.html](lessons/0007-cache-structures.html) |
| 8 | 2026-06-28 | 메모리 계층 3 — 캐시 쓰기 정책 & 다단 캐시 | [0008-cache-write-policy.html](lessons/0008-cache-write-policy.html) |
| 9 | 2026-06-29 | 명령어 집합 아키텍처 (ISA) — RISC vs CISC, 명령어 형식, 어드레싱 모드 | [0009-isa.html](lessons/0009-isa.html) |
| 10 | 2026-06-30 | 단순 프로세서 설계 (Simple CPU) — 단일 사이클 데이터패스, 제어 신호 | [0010-simple-cpu.html](lessons/0010-simple-cpu.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| ~~8~~ | ~~메모리 계층 3 (Cache 심화)~~ | ~~완료~~ |
| ~~9~~ | ~~명령어 집합 아키텍처 (ISA)~~ | ~~완료~~ |
| ~~10~~ | ~~단순 프로세서 설계 (Simple CPU)~~ | ~~완료~~ |
| 11 | 파이프라이닝 1 (Pipelining) | 5단계 파이프라인, 처리량 vs 지연 시간 |
| 12 | 파이프라이닝 2 (Hazards) | 데이터 해저드, 제어 해저드, 구조 해저드 |
| 13 | 분기 예측 (Branch Prediction) | 정적/동적 예측, 예측 실패 비용 |
| 14 | 비순서 실행 (Out-of-Order Execution) | 명령어 수준 병렬성, Tomasulo 알고리즘 개요 |
| 15 | 가상 메모리 1 (Virtual Memory) | 페이지 테이블, 주소 변환, TLB |
| 16 | 가상 메모리 2 (Virtual Memory 심화) | 페이지 교체 알고리즘, 스래싱 |
| 17 | I/O 서브시스템 | 폴링 vs 인터럽트, DMA |
| 18 | 멀티코어 기초 (Multicore) | 캐시 일관성, MESI 프로토콜 |
| 19 | SIMD & 벡터 연산 | CPU의 병렬 데이터 처리 |
| 20 | 종합 복습 및 실전 적용 | 코드 성능과 컴퓨터 구조의 연결 |

## 현재 학습 위치

**Day 10 완료** — 단일 사이클 데이터패스 5단계(IF·ID·EX·MEM·WB), 핵심 하드웨어 블록(PC·레지스터 파일·ALU·데이터 메모리), MUX(ALUSrc·MemtoReg·PCSrc), 제어 유닛(opcode → 7가지 제어 신호), ALU 제어 유닛(funct3·funct7), 명령어 타입별 데이터 흐름(R/lw/sw/beq/addi), 클록 주기 = Critical Path(lw) 원리, 하드와이어드 vs 마이크로코드 제어 학습 완료. 다음은 파이프라이닝 1(Pipelining) — 5단계 파이프라인, 처리량 vs 지연 시간.

## 습득한 핵심 개념

- [ ] 폰 노이만 아키텍처 (✓ Day 1)
- [ ] 명령어 사이클 Fetch-Decode-Execute (✓ Day 1)
- [ ] 컴퓨터 구조의 3층위 (✓ Day 1)
- [x] 수의 표현 (✓ Day 2)
- [x] 디지털 논리 기초 (✓ Day 3)
- [x] 산술 회로 / ALU 구조 (✓ Day 4)
- [x] 순서 논리 회로 / 레지스터 (✓ Day 5)
- [x] 메모리 계층 구조 / SRAM vs DRAM (✓ Day 6)
- [x] 캐시 구조 / Tag·Index·Offset·집합 연관 (✓ Day 7)
- [x] 캐시 쓰기 정책 / 다단 캐시 / 포함 정책 (✓ Day 8)
- [x] ISA 개념 (✓ Day 9)
- [x] 단일 사이클 데이터패스 / 제어 유닛 (✓ Day 10)
- [ ] 파이프라이닝 (예정 Day 11-12)
- [ ] 가상 메모리 (예정 Day 15-16)
