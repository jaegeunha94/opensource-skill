# Resources — Linux 서버 운영 인터뷰

## 필수 레퍼런스

### 공식 문서
- [Linux man pages](https://man7.org/linux/man-pages/) — 명령어 옵션과 동작의 최종 레퍼런스. 면접에서 "정확히 어떻게 동작하나요?" 질문에 대비.
- [systemd 공식 문서](https://www.freedesktop.org/software/systemd/man/) — systemctl, journalctl 동작 원리
- [The Linux Kernel documentation](https://www.kernel.org/doc/html/latest/) — load average, 프로세스 상태, /proc 파일시스템 이해

### 서적 (신뢰도 최상)
- **"Systems Performance" by Brendan Gregg (2nd ed, 2021)** — CPU, Memory, Disk, Network 성능 진단의 바이블. USE 방법론 출처. 면접 답변 프레임워크의 근거로 사용하기에 최적.
- **"The Linux Command Line" by William Shotts** — 실무 명령어 기반 이해. 무료 온라인 버전 제공.
- **"Linux System Programming" by Robert Love** — 프로세스, 파일 I/O, 시그널 동작 원리 이해

### 신뢰할 수 있는 온라인 자료
- [Brendan Gregg's Blog](https://www.brendangregg.com/blog/) — 리눅스 성능 진단 방법론의 최고 권위자. Netflix 성능 엔지니어.
- [Linux Performance Analysis in 60 Seconds](https://netflixtechblog.com/linux-performance-analysis-in-60-000-milliseconds-accc10403c55) — Netflix Engineering Blog. Day 1 핵심 자료.
- [Red Hat Customer Portal](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/) — 엔터프라이즈 Linux 운영 실무 가이드
- [Arch Linux Wiki](https://wiki.archlinux.org/) — 시스템 수준 개념 설명이 정확하고 깊음

## 면접 준비 방법론

### 사고 프레임워크
- **USE Method** (Utilization, Saturation, Errors) — Brendan Gregg 제안. 체계적 성능 진단의 표준.
- **5-Why** — 장애 원인 추적. 첫 번째 원인이 진짜 원인이 아닌 경우 대비.
- **장애 대응 단계**: 탐지 → 영향 범위 파악 → 원인 특정 → 조치 → 재발 방지 → 포스트모템

### 핵심 진단 명령어 카테고리
| 범주 | 명령어 | 언제 쓰는가 |
|------|--------|------------|
| 전체 상태 | `uptime`, `top`, `vmstat 1 5` | 장애 신고 즉시 첫 확인 |
| CPU | `mpstat -P ALL 1`, `perf top`, `sar -u` | CPU 사용 패턴 분석 |
| 메모리 | `free -h`, `vmstat`, `/proc/meminfo` | OOM, swap 사용 확인 |
| 디스크 I/O | `iostat -xz 1`, `iotop`, `df -h`, `du -sh` | I/O 병목 확인 |
| 네트워크 | `ss -tuln`, `netstat -s`, `ip -s link` | 포트, 연결 수, 패킷 오류 |
| 프로세스 | `ps aux`, `pstree`, `strace -p`, `lsof -p` | 프로세스 동작 추적 |
| 로그 | `journalctl -xe`, `dmesg -T`, `tail -f /var/log/` | 에러 메시지 확인 |
| 서비스 | `systemctl status`, `systemctl list-units` | 서비스 상태 확인 |
| 권한 | `ls -la`, `stat`, `getfacl`, `id`, `sudo -l` | 권한 문제 진단 |

## 심화 학습 자료
- [perf: Linux profiling](https://perf.wiki.kernel.org/) — CPU 성능 병목 심화 분석
- [bpftrace one-liners](https://github.com/iovisor/bpftrace) — eBPF 기반 실시간 진단 (최신 접근법)
- [SRE Book by Google](https://sre.google/sre-book/table-of-contents/) — 실무 장애 대응 문화와 판단 기준
