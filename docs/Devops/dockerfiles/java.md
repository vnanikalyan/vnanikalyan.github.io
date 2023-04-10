---
slug: docker-files
id: docker-files-java
title: Java
authors: [vnk]
tags: [Dockerfiles, Devops]
custom_edit_url: null
---

```dockerfile
FROM alpine:3.17

ARG USER=nani
ARG USER_ID=199
ARG GROUP=nani
ARG GROUP_ID=199
ARG WORK_DIR=/app

WORKDIR ${WORK_DIR}

RUN apk update && \
    apk add openjdk8 --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community;

# set the JAVA location # For java 17 replace 8 with 17
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk
RUN export JAVA_HOME

ADD target/*.jar app.jar

#Create non-root user
RUN addgroup -g ${GROUP_ID} -S ${GROUP} && adduser -u ${USER_ID} -S ${USER} -G ${GROUP}
RUN chown -R ${USER}:${GROUP} ${WORK_DIR}
USER ${USER}

EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "./app.jar" ]
```