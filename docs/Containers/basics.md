---
slug: container-basics
id: container-basics
title: Container Basics
authors: [vnk]
tags: [Containers, Docker, Podman, Kernel]
custom_edit_url: null
---

Any container image you take It will not have kernel. It will use the Host kernel.
For example: ubuntu docker image will have its rootfs (supports apt-get etc) but eventually when it is run. It is just a process
on the host which will be using host's kernel.

Container Enginer (CE)
    1. Docker
    2. CRI-O
    3. containerd
docker is the most popular one.

Underlying the CEs will use the container runtime

Container Runtime (CR)
    1. runc
    2. runhcs (for Windows machines)
    3. crun
    4. runv

