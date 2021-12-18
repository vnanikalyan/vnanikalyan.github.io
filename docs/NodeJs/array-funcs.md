---
slug: array-funcs
id: array-funcs
title: Array functions
authors: [vnk]
tags: [NodeJs, Array, Functions, Javascript]
---

Array Methods  
- **REDUCE**- has return type - *returns a single value* 
- **FILTER**- has return type - *returns a new array*  
- **MAP**- has return type  
- **FOREACH**- no return type  
- **EVERY**- has return type

### REDUCE

***find the sum of the given numbers array***  
```js const numbers = [1, -1, 2, 3];

//This is what I generally do
for(const i of numbers)
	sum += i;

console.log(sum);
```

**Array.reduce**
 - We use this when we want to reduce an array to a single value
 - Single value can be a   
 	  i) Number  
 	 ii) String  
 	iii) Object
 - returns the final Value

```js
 /*Reduce will take two params
 1) Callback 
 		- accumulator: result will be stored in accumulator 
		 	- It is like Sum in my way of coding
 		- currentValue: Index Value
 2) Initial value of accumulator. In our case we initalized it to zero. 
 If you remove the initialization value then it will be initialized to the first element in the array, 
 here in our case it is 1.*/

 const sum = numbers.reduce((accumulator, currentValue)=>{
 	return accumulator + currentValue;
 }, 0);
```
 
### FILTER
```js
 //Array.filter
 const numbers = [1, -1, 2, 3];

 //To filter only positive numbers from the Array
 //returns a new Array

 numbers.filter((value)=>{
 	return value >= 0;
 });
```

### MAP
Array.Map  
- to map each element to something  
- returns a new Array
```js
const numbers = [1,2,3,4,5];

const newArr = numbers.map(value => {
	return value + 1
})
console.log(newArr)
```


### FOREACH
- calls once for each element in the array .for each element in the array.  
- It doesn't have a return type  
```js
let txt = "";
let numbers = [45, 4, 9, 16, 25];

numbers.forEach((value)=>{
	txt = txt + value + "<br>";
});
```