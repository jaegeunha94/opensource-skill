# Linux 서버 운영 인터뷰 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 리눅스 서버 장애 대응 프레임워크 | [0001-linux-incident-response-framework.html](lessons/0001-linux-incident-response-framework.html) |
| 2 | 2026-07-01 | 프로세스 & CPU 진단 심화 | [0002-process-cpu-diagnostics.html](lessons/0002-process-cpu-diagnostics.html) |
| 3 | 2026-07-02 | 메모리 진단 & OOM | [0003-memory-oom-diagnostics.html](lessons/0003-memory-oom-diagnostics.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 4 | 디스크 I/O 진단 | iostat util, await, iotop, lsof 열린 파일, inode 고갈, df vs du 차이 |
| 5 | 로그 분석 & journalctl | journalctl 필터 옵션, rsyslog, /var/log 구조, grep/awk/sed 조합, 로그 로테이션 |
| 6 | systemd 서비스 관리 | systemctl start/stop/enable/status, unit 파일 구조, ExecStart, Restart 정책, 의존성 After= |
| 7 | 네트워크 진단 | ss -tuln, netstat, LISTEN/ESTABLISHED/TIME_WAIT, tcpdump 기초, ip route, 방화벽(firewalld/ufw) |
| 8 | 권한 & 보안 관리 | chmod/chown 숫자/문자 표기, umask, sudo/sudoers, setuid/setgid, SELinux context, capability |
| 9 | 종합 장애 시나리오 실습 | Day 1~8 개념 종합. 실전 시나리오 3개 — CPU 폭식, 디스크 풀, 서비스 재시작 반복 |

## 현재 학습 위치

**Day 3 완료** — Day 4: 디스크 I/O 진단 예정.

## 습득한 핵심 개념

- [x] 서버 장애 대응 5단계 프레임워크 (영향 범위 → 스냅샷 → 병목 범주 → 원인 특정 → 조치+재발 방지) (Day 1)
- [x] Load average 해석 (코어 수 대비, 1/5/15분 트렌드로 악화/회복 판단) (Day 1)
- [x] CPU 사용률 분류 (us/sy/wa/id 차이, iowait는 CPU 대기가 아닌 I/O 대기) (Day 1)
- [x] 프로세스 상태 (R/D/S/Z, D 상태가 많으면 I/O 병목) (Day 1)
- [x] USE 방법론 (Utilization / Saturation / Errors 체계적 진단) (Day 1)
- [x] 즉각 조치 vs 데이터 확보의 trade-off (kill 전 스택 트레이스 확보) (Day 1)
- [x] Senior 답변 구조: 영향 범위 → 데이터 → 가설 → 조치 → 재발 방지 + 소통 (Day 1)
- [x] ps/top 필드 심화 (VSZ vs RSS, PR/NI 관계, top -H 스레드 단위 진단) (Day 2)
- [x] /proc/PID 활용 (status, stat, fd, limits로 메모리/스레드/fd 고갈 진단) (Day 2)
- [x] strace 활용과 프로덕션 위험 (syscall 패턴 해석, ptrace 오버헤드, 요약 모드) (Day 2)
- [x] CPU 바운드 vs I/O 바운드 구분 (syscall 유무, busy-wait 함정) (Day 2)
- [x] free available vs used 구분 (캐시 회수 가능성, MemAvailable 근거) (Day 3)
- [x] vmstat si/so로 swap 재고 vs 활동 구분 (스래싱 판단 기준) (Day 3)
- [x] OOM Killer 동작 원리 (oom_score/oom_score_adj, 로그 해석) (Day 3)
- [x] swappiness trade-off (응답 지연 vs OOM 발생 시점) (Day 3)
- [x] 메모리 누수 vs 정상 캐시 증가 (VmRSS 추세 관찰법) (Day 3)
- [ ] 디스크 I/O 진단 심화 (예정 Day 4)
- [ ] 로그 분석 & journalctl (예정 Day 5)
- [ ] systemd 서비스 관리 (예정 Day 6)
- [ ] 네트워크 진단 (예정 Day 7)
- [ ] 권한 & 보안 관리 (예정 Day 8)
- [ ] 종합 시나리오 실습 (예정 Day 9)
