# Linux 서버 운영 인터뷰 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-30 | 리눅스 서버 장애 대응 프레임워크 | [0001-linux-incident-response-framework.html](lessons/0001-linux-incident-response-framework.html) |
| 2 | 2026-07-01 | 프로세스 & CPU 진단 심화 | [0002-process-cpu-diagnostics.html](lessons/0002-process-cpu-diagnostics.html) |
| 3 | 2026-07-02 | 메모리 진단 & OOM | [0003-memory-oom-diagnostics.html](lessons/0003-memory-oom-diagnostics.html) |
| 4 | 2026-07-03 | 디스크 I/O 진단 | [0004-disk-io-diagnostics.html](lessons/0004-disk-io-diagnostics.html) |
| 5 | 2026-07-04 | 로그 분석 & journalctl | [0005-log-analysis-journalctl.html](lessons/0005-log-analysis-journalctl.html) |
| 6 | 2026-07-05 | systemd 서비스 관리 | [0006-systemd-service-management.html](lessons/0006-systemd-service-management.html) |
| 7 | 2026-07-06 | 네트워크 진단 | [0007-network-diagnostics.html](lessons/0007-network-diagnostics.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| 8 | 권한 & 보안 관리 | chmod/chown 숫자/문자 표기, umask, sudo/sudoers, setuid/setgid, SELinux context, capability |
| 9 | 종합 장애 시나리오 실습 | Day 1~8 개념 종합. 실전 시나리오 3개 — CPU 폭식, 디스크 풀, 서비스 재시작 반복 |

## 현재 학습 위치

**Day 7 완료** — Day 8: 권한 & 보안 관리 예정.

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
- [x] iostat util vs await 구분 (병렬 장치의 %util 100%가 항상 병목은 아님) (Day 4)
- [x] iostat → iotop 단계적 진단 흐름 (장치 레벨에서 프로세스 레벨로) (Day 4)
- [x] inode 고갈 (df -h와 df -i는 별개 자원, 소용량 파일 대량 생성 시 고갈) (Day 4)
- [x] 삭제된 열린 파일과 참조 카운트 (rm이 즉시 공간을 회수하지 않는 이유, lsof/fd truncate) (Day 4)
- [x] df vs du 불일치 원인 (삭제된 fd, 하위 마운트, root 예약 공간) (Day 4)
- [x] journalctl 필터 조합 (-u/-p/--since/--until/-b로 좁혀나가는 진단 흐름) (Day 5)
- [x] journald vs rsyslog/var/log 역할 차이 및 보존 정책(volatile vs persistent) (Day 5)
- [x] 증상별 로그 소스 선택 (인증→auth.log, 커널/하드웨어→dmesg, 애플리케이션→자체 로그) (Day 5)
- [x] grep/awk/sed 조합으로 정량적 원인 집계 (awk | sort | uniq -c) (Day 5)
- [x] logrotate copytruncate의 유실 가능성 trade-off (Day 5)
- [x] systemctl start/stop vs enable/disable의 독립적인 축 구분 (Day 6)
- [x] unit 파일 구조 ([Unit]/[Service]/[Install]) 와 After= vs Requires= 차이 (Day 6)
- [x] Restart 정책과 StartLimitBurst/RestartSec의 crash loop 방지 trade-off (Day 6)
- [x] systemctl status 필드(Active/Loaded/Process) 해석과 진단 연결 (Day 6)
- [x] TCP 연결 상태 머신 (LISTEN/ESTABLISHED/TIME_WAIT/CLOSE_WAIT) 방향성 구분 (Day 7)
- [x] ss/netstat로 포트 바인딩 주소(0.0.0.0 vs 127.0.0.1)와 연결 상태 분포 확인 (Day 7)
- [x] TIME_WAIT 폭증(트래픽 패턴) vs CLOSE_WAIT 폭증(애플리케이션 버그) 원인 구분 (Day 7)
- [x] tcp_tw_reuse의 NAT 환경 위험 trade-off (Day 7)
- [x] tcpdump로 패킷 도달 여부를 증거로 활용한 계층별 원인 좁히기 (Day 7)
- [x] ip route/ip route get으로 라우팅 테이블과 비대칭 라우팅 진단 (Day 7)
- [x] iptables/nftables/firewalld/ufw 관계와 DROP vs REJECT trade-off, 클라우드 보안그룹 계층 구분 (Day 7)
- [ ] 권한 & 보안 관리 (예정 Day 8)
- [ ] 종합 시나리오 실습 (예정 Day 9)
