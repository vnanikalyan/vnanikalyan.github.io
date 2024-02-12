---
slug: unit-tests-jest
id: unit-tests-jest
title: Using Jest
authors: [vnk]
tags: [NodeJs, unit-tests,Jest]
custom_edit_url: null
---

**How to mock functions called from another functions within the same file?**  
- we need to use ***jest.spyOn***

```js
// index.js
exports.handler = function() =>{
    // Add two numbers
    const sum = add(5,4)
    const mul = mul(5,4)

    console.log('sum - ', sum)
    console.log('mul - ', mul)

    return [sum, mul]
}

function add(x, y) {
    return x + y    
}

function mul(x, y) {
    return x * y
}
```

```js
// index.test.js
const testFile = require('./index')

describe('handler', ()=->{
    afterEach(()=>{
        jest.mockAllClear()
    })

    test('handler', ()=>{
        const sumSpy = jest.spyOn(testFile, 'sum')
        sumSpy.mockResolvedValue(()=>5)

        const mulSpy = jest.spyOn(testFile, 'mul')
        mulSpy.mockResolvedValue(()=>7)
        
        const result = hanlder()
        expect(result).toEqual([5,5])
    })

    test('sum', ()=>{
        const result = add(5,4)
        expect(result).toEqual(9)
    })
})
```