---
slug: github-actions
id: github-actions-node-16
title: node
authors: [vnk]
tags: [Github Actions, Devops]
custom_edit_url: null
---

```yaml
name: Build and deploy a website

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
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm install --legacy-peer-deps
      - run: npm run build

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          role-to-assume: arn:aws:iam::account-number:role/role-name
          aws-region: ap-south-1
          role-session-name: GithubActionsSession
      
      #- run: aws sts get-caller-identity

      - name: Set current date as env variable
        run: echo "NOW=$(date +'%Y-%m-%dT%H:%M:%S')" >> $GITHUB_ENV         
      
      - name: Zip the generated build files
        run: zip -r build_${NOW}.zip dist/web-app 
      
      - name: Copy the build zip file to S3 Bucket
        run: aws s3 cp build_${NOW}.zip s3://mywebsite-builds/web-app/
      
      - name: Copy files to S3 bucket with the AWS CLI
        run: |
          aws s3 sync dist/web-app s3://dev.mywebsite.com
```