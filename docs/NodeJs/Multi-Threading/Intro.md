---
slug: Intro
id: Intro
title: Introduction
authors: [vnk]
tags: [NodeJs, Multi Threading]
custom_edit_url: null
---

Multi-Threading in NodeJs can be acheived by the module - **worker_threads**
This module is one of the core Node Apis. We can run the synchronous tasks using this module.

**Little Wisdom**
1. Always run the threads equal to the number of the CPU Cores. 
2. Understand thread initialization overhead over parallelism. In some cases its better to run the tasks in main thread instead in worker as the thread initiation might cost more than saving the time complexity.

The following is an example where we are calculating the sum of the given array elements using multi-threading

```js
'use strict'

const { isMainThread, Workder, WorkerData, parentPort} = require('node:worker_threads')
const { eventEmitter } = require('node:events')

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()

let sum = 0

if(isMainThread) {
    console.log('In Main Thread')

    const worker = new Worker(__filename, {workerData: [1,2,3,4,5]})
    console.log('worker.threadId - ', worker.threadId)
    worker.on('message', message => {
        console.log(message)
        myEmitter.emit('message', Number(message))
    })

    //Second worker
    const worker = new Worker(__filename, {workerData: [6,7,8,9,10]})
    console.log('worker.threadId - ', worker.threadId)
    worker.on('message', message => {
        console.log(message)
        myEmitter.emit('message', Number(message))
    })

    myEmitter.on('message', message => {
        sum += message
        console.log('sum - ', sum)
    })
    
} else {
    const sum = workderData.reduce((acc, val) => acc + val, 0)
    parentPort.postMessage(sum)
}

```