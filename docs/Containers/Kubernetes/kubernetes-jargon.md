---
slug: Kubernetes
id: kubernetes-jargon
title: Lingo
authors: [vnk]
tags: [Containers, Docker, Podman, Kubernetes]
custom_edit_url: null
---

Kubernetes - Jargon  
**Pod**
- Pod is an abstraction layer that is created on a container(Docker/any other techonoloy) by Kubernetes.
- There can be numerous pods in a Node (Each node is a physical machine or VM)

**Service**
- Persistent/permenant Static IP Address with a DNS Name (Elastic IP - AWS)
- Every pod in a node will have a unique IP
- Communiation between pods in a node happens with that IP
- What if IP changes then I need to touch all the pods which are using it re-build image etc
- Solution: Instead of IP its better to use Service(service names)

**Ingress**
- route traffic into your cluster
- Your pods can communicate among themselves but if you want your node to expose to the world
- You create an internal service and expose it to the world
	- In that internal service you mention what all services needs to be exposed etc (Like I AM)
- Ingress is tantamount to Nginx

**ConfigMap**
- To store the config data
- Service name so that you can update the name of the service if it is changed
		
**Secrets**
- you cannot use ConfigMap to store passwords (Ofcourse you can but its not a best practise)
- Hence, you store it in Secrets


**Data Storage **
- Its better to have a remote storage(AWS RDS) rather than local storage


**MiniKube** - helps you to run both Master and worker nodes on a single physical machine  
**Kubectl** - command line tool for kubernetes  
**kind**: Deployment/secret/config
