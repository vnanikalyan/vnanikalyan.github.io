---
slug: aws-events-input
id: aws-events-input
title: AWS Events - Input parameter
authors: [vnk]
tags: [AWS, SAA, AWS Certification]
---

#### AWS CF Script To trigger a lambda based on Cron expression with **input values**

We are able to give either of two values to Schedule Property
- rate(5 minutes) or rate(1 hour) etc
- cron Expression

And the Input property will take only a string. If we want to send multiple key value pairs then convert that JSON to String and give it as a value to the Input parameter

```
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31

Resources:
  TestTestVnk:
      Type: AWS::Serverless::Function
      Properties:
        FunctionName: 'testvnk-lambda'
        CodeUri:
          Bucket: 'testvnk-s3'
          Key: 'testVnk.zip'
        Handler: index.handler
        Timeout: 30
        Runtime: 'nodejs14.x'      
        VpcConfig:
          SecurityGroupIds: 
            - 'sg-xyz'
          SubnetIds: 
            - 'subnet-xyz'
            - 'subnet-xyz'
        Role: '<give Role ARN>'
        Environment:
          Variables:          
            REGION: 'ap-south-1'
        Events:
          Schedule:
            Type: Schedule
            Properties:
              Schedule: rate(5 minutes)
              Input: "{\"job\": \"cleanup\", \"table\": \"dummy\"}"
```

The lambda will receive Input string as an object.  
Based on the received object you can write your own logic


```js
exports.handler = function(event, context, callback){
    console.log('EVENT - ', event)
    callback(null, event);
}

//Output
EVENT - {job: "cleanup", table: "dummy"}

```