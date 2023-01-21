---
slug: container custom process
id: container-custom-process
title: Container Custom Process
authors: [vnk]
tags: [Containers, Docker, Podman, Kernel]
custom_edit_url: null
---

We can create a container proces in Golang with less than 100 lines of code. We do not have to be proficient in Golang. But knowing the concepts is enough as they are universal.

#### 1. namespaces
- Will let what container should see.
- What you can See?
    - Unix Timesharing System
    - Process IDs
    - File system (mount points)
    - Network
    - Users (User IDs)
    - IPC (InterProcess Comms)
- namespaces are created with **syscalls**

#### 2. cgroups
- Will let what resources can a container can access.
- What you can use?
    - CPU
    - Memory
    - Disk I/O
    - Network
    - Device Permission (/dev)

#### 3. Rootless Containers
- Even if you are not the root of the host machine still you can create a container process. (for more understanding check the resources mentioned under reference section)

#### 4. Fork Bomb
- :() { : | : & }; :
- We can restrict our container to spawn a maximum of 20 processes. In cases of fork bomb it will not exhaust our entire host's resources that are available to our container process via Kernel.

#### References  
- https://www.youtube.com/watch?v=_TsSmSu57Zo&ab_channel=ContainerCamp
- https://github.com/lizrice/containers-from-scratch/blob/master/main.go