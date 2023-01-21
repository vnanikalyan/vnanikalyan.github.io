---
slug: linux-fundamentals
id: linux-fundamentals
title: Fundamentals
authors: [vnk]
tags: [Linux, OS]
custom_edit_url: null
---

There are two binary folders  
1) bin  
2) sbin (super binaries)

All the commands like the following
```diff
$ ls, cat, cp, rm etc
```
binary files will be there at two locations  
1) /bin & /sbin  
2) /usr/bin & /usr/sbin


We can create our own binaries and keep it in the folder  
- /usr/local

**home**  
1) /home - is where all users live  
2) root has a different home  
```diff
$ cd /root
$ sudo ls root
```

**dev**  
All Devices/Drives are files in linux OS  
1) dev - devices (Just cd and ls to see the directory)
- vda
- vda1 (Virtual disks)
- Command - ls vda (Shows the stuff on your hard disk in binary format)

**etc**  
- All etc files - Our network folder will be there in etc
```diff
$ cd /etc/network
$ ls
$ sudo cat interfaces
```

**mnt/media**  
	- The drives that you want to mount
	- Whenever you plug a pendrive that is when these files will come into picture


**bash** - Bourne-Again Shell

#### adduser 
- Adds a new user to the machine

Check all the users on the system
```diff
$ cat /etc/passwd
```

Passwords are store in shadows file  
```diff
$ cat /etc/shadow
```

Whenever a new user is added to the machine both userid and groupid will be created command 
```diff
$ adduser vnk  
```
userid - vnk  
groupid - vnk will be created (ofcourse ids are integers)
