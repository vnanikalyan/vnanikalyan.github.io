---
slug: github-actions
id: github-actions-java-8
title: Java
authors: [vnk]
tags: [Github Actions, Devops]
custom_edit_url: null
---

```yaml
name: Build and deploy an API

on:
  push:
    branches:
      - development
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    # These permissions are needed to interact with GitHub's OIDC Token endpoint.
    permissions:
      id-token: write
      contents: read

    steps:
      - uses: actions/checkout@v3

      - name: Set up Java version
        uses: actions/setup-java@v3
        with:
          distribution: 'zulu'
          java-version: '8' # If you want to use java 17 then replace 8 with 17
      - run: mvn clean install --file pom.xml

      - name: Set current date as env variable
        run: echo "NOW=$(date +'%Y-%m-%dt%H-%M-%S')" >> $GITHUB_ENV  
      
      # Building Docker Image
      - name: Building Docker Image
        run: docker build . -t build
      - run: docker images

      # Get Temp AWS Credentials based on the role
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          role-to-assume: arn:aws:iam::account-number:role/role-name
          aws-region: ap-south-1
          role-session-name: GithubActionsSession
      
      # Get AWS ECR Login Credentials
      - name: Get login credentials for AWS ECR
        run: aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin account-number.dkr.ecr.ap-south-1.amazonaws.com

      # Tag the Docker Image
      - name: Tag the docker Image
        run: docker tag build:latest account-number.dkr.ecr.ap-south-1.amazonaws.com/api:build_${NOW}
      
      # Push the Docker Image to ECR
      - name: Push the Docker Image to ECR
        run: docker push account-number.dkr.ecr.ap-south-1.amazonaws.com/api:build_${NOW}
```