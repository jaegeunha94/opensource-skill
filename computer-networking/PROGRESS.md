# 네트워크 학습 진행 상황

## 완료한 내용

| Day | 날짜 | 주제 | 레슨 파일 |
|-----|------|------|-----------|
| 1 | 2026-06-22 | 네트워크 기초 & OSI 모델 | [day-01-network-basics-osi.html](lessons/day-01-network-basics-osi.html) |
| 2 | 2026-06-22 | TCP/IP 모델과 물리·데이터링크 계층 | [day-02-tcpip-datalink.html](lessons/day-02-tcpip-datalink.html) |
| 3 | 2026-06-22 | 네트워크 계층 — IP와 라우팅 | [day-03-network-layer-ip-routing.html](lessons/day-03-network-layer-ip-routing.html) |
| 4 | 2026-06-23 | 전송 계층 — TCP vs UDP | [day-04-transport-tcp-udp.html](lessons/day-04-transport-tcp-udp.html) |
| 5 | 2026-06-24 | 응용 계층 — DNS와 DHCP | [day-05-application-dns-dhcp.html](lessons/day-05-application-dns-dhcp.html) |
| 6 | 2026-06-25 | 응용 계층 — HTTP/HTTPS | [day-06-application-http-https.html](lessons/day-06-application-http-https.html) |
| 7 | 2026-06-26 | 네트워크 보안 기초 | [day-07-network-security.html](lessons/day-07-network-security.html) |
| 8 | 2026-06-27 | 실습 — Wireshark 패킷 분석 | [day-08-wireshark-analysis.html](lessons/day-08-wireshark-analysis.html) |
| 9 | 2026-06-28 | 무선 네트워크 & 최신 트렌드 | [day-09-wireless-sdn-cloud.html](lessons/day-09-wireless-sdn-cloud.html) |
| 10 | 2026-06-29 | 종합 복습 & 실전 문제 | [day-10-final-review.html](lessons/day-10-final-review.html) |
| 11 | 2026-06-30 | 고급 라우팅 프로토콜: OSPF와 BGP | [day-11-routing-protocols-ospf-bgp.html](lessons/day-11-routing-protocols-ospf-bgp.html) |

## 다음 예정 학습

| Day | 예정 주제 | 핵심 개념 |
|-----|-----------|-----------|
| ~~5~~ | ~~응용 계층 — DNS와 DHCP~~ | ~~DNS 계층 구조, 재귀 쿼리, DHCP 임대 과정~~ |
| ~~6~~ | ~~응용 계층 — HTTP/HTTPS~~ | ~~HTTP 메서드, 상태 코드, 쿠키/세션, TLS 핸드셰이크~~ |
| ~~7~~ | ~~네트워크 보안 기초~~ | ~~방화벽, NAT, VPN, TLS/SSL, 일반적인 공격 유형~~ |
| ~~8~~ | ~~실습 — Wireshark 패킷 분석~~ | ~~필터링, TCP 스트림 추적, DNS/HTTP 트래픽 분석~~ |
| ~~9~~ | ~~무선 네트워크 & 최신 트렌드~~ | ~~Wi-Fi 표준, SDN 개념, 클라우드 네트워킹 기초~~ |
| ~~10~~ | ~~종합 복습 & 실전 문제~~ | ~~전체 개념 연결, 서브넷 계산 실전, 프로토콜 흐름 추적~~ |
| ~~11~~ | ~~고급 라우팅 프로토콜: OSPF와 BGP~~ | ~~AS, IGP/EGP, LSA/LSDB/SPF, eBGP/iBGP, AS-PATH/LOCAL_PREF/MED~~ |
| 12 | 네트워크 성능 분석과 최적화 | TCP 처리량 공식, RTT, 병목 진단, netstat/ss/iperf3 |

## 현재 학습 위치

**Day 11 완료** — 고급 라우팅 프로토콜(OSPF & BGP) 완료. 다음: Day 12 네트워크 성능 분석.

## 습득한 핵심 개념

- [x] OSI 7계층 역할 (Day 1 완료)
- [x] TCP/IP 4계층 구조 (Day 2 완료)
- [x] 이더넷 프레임 구조 및 MAC 주소 (Day 2 완료)
- [x] ARP 동작 원리 (Day 2 완료)
- [x] 스위치 MAC 테이블 학습 과정 (Day 2 완료)
- [x] IP 주소와 서브넷 계산 (Day 3 완료)
- [x] CIDR 표기 및 호스트 수 계산 (Day 3 완료)
- [x] 라우팅 테이블 & Longest Prefix Match (Day 3 완료)
- [x] IPv6 기본 구조와 단축 표기 (Day 3 완료)
- [x] ICMP / ping / traceroute 역할 (Day 3 완료)
- [x] TCP 3-way handshake (Day 4 완료)
- [x] TCP vs UDP 특성 비교 (Day 4 완료)
- [x] 포트 번호 및 Well-Known Port (Day 4 완료)
- [x] 흐름 제어 — 슬라이딩 윈도우 / rwnd (Day 4 완료)
- [x] 혼잡 제어 — Slow Start / AIMD / Fast Retransmit (Day 4 완료)
- [x] TCP 4-way handshake 및 TIME_WAIT (Day 4 완료)
- [x] DNS 계층 구조 및 재귀 쿼리 과정 (Day 5 완료)
- [x] DNS 레코드 타입 A/AAAA/CNAME/MX/NS/TXT (Day 5 완료)
- [x] DNS TTL과 캐싱 (Day 5 완료)
- [x] DHCP DORA 4단계 (Day 5 완료)
- [x] DHCP 임대(Lease)와 갱신 (Day 5 완료)
- [x] HTTP 요청/응답 구조 및 메서드 (Day 6 완료)
- [x] HTTP 상태 코드 계열 1xx~5xx (Day 6 완료)
- [x] 쿠키 속성 HttpOnly·Secure·SameSite (Day 6 완료)
- [x] 세션 vs 쿠키 차이와 JWT 개념 (Day 6 완료)
- [x] HTTPS / TLS 핸드셰이크 (Day 6 완료)
- [x] TLS 인증서 체인 및 CA 검증 (Day 6 완료)
- [x] NAT / 방화벽 동작 원리 (Day 7 완료)
- [x] VPN 터널링 및 프로토콜 비교 (Day 7 완료)
- [x] 주요 네트워크 공격 유형 DoS/MitM/IP Spoofing/Replay (Day 7 완료)
- [x] Wireshark 패킷 분석 (Day 8 완료)
- [x] Wi-Fi 표준(802.11 세대별) 및 CSMA/CA (Day 9 완료)
- [x] SDN 제어 평면·데이터 평면 분리 및 OpenFlow (Day 9 완료)
- [x] VPC, NAT Gateway, Security Group, 로드밸런서, CDN, 서비스 메시 (Day 9 완료)
- [x] 전체 개념 연결 및 서브넷 계산 실전 (Day 10 완료)
- [x] AS, IGP, EGP 개념 구분 (Day 11 완료)
- [x] OSPF 링크 상태 라우팅 — LSA/LSDB/SPF/Area 구조 (Day 11 완료)
- [x] BGP 세션 수립 및 경로 선택 알고리즘 (Day 11 완료)
- [x] BGP 핵심 속성 — AS-PATH, NEXT-HOP, LOCAL_PREF, MED (Day 11 완료)
- [x] BGP 라우트 하이재킹과 RPKI (Day 11 완료)
