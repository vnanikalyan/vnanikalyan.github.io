---
slug: oops-in-js
id: oops-in-js
title: Oops in JS
authors: [vnk]
tags: [NodeJs, oops, Javascript]
custom_edit_url: null
---

***OOPS*** - It is a paradigm, programming style rather than a programming language.  
Programming languages that use OOPS  
- Java  
- C#  
- C++

Four pillars of OOPS  
 ***1) Encapsulation***  
Function and the data operating on it will be together  
Ex: Class

In Procedural language they(Data, functions) are decoupled  
- A good function is a function with no arguments  
- In PL you will end up with more functions and more parameters  
- To solve this problem OOPS has come up

***2) Abstraction***  
- Hiding some properties to the outside world  
- Class has properties like public, private, protected

***3) Inheritance***  
- Instead of re-inventing the wheel we can simply inherit the class where in we will get all the properties and methods from the base class
Ex: HtmlElement Class -> derived in select
	
***4) Poly-morphism***  
- render method in will behave differntly 

**OOPs in Javascript**  

1) Object literal  
		let obj = {};

2) Two ways to create Object
	 
i) **Factory Function** - Function that returns an object   		

       function createCircle(radius) {
	 			return {
	 				radius,
	 				draw: function() {
	 				console.log('draw');
	 				}
	 			};
	 		}

      const circle = createCircle(1);        

ii) **Constructor Function** - This is what we used in Grene

			function Circle(radius) {  //this means it is the reference of the object that is executing the code
	 			this.radius = radius,
	 			this.draw = function() {
	 				console.log('draw');
	 				}
	 			}
	 			//You do not write an explicit return statement
	 		}

	 		const another = new Circle(1);      

when you put new three things happen  
1) new operator will create an empty object - {}  
2) will set 'this' to point to that object (created in step 1). By default this will point to global object  
- In browser window is the global object  
- In nodeJs, global is the global object  

3) It will return the object from the function. In our case it is Circle returning an object. We wont explicitly write a return statement. Still it will return an object.


3) **Constructor Property**  
Every Object you create will have a 'constructor' property.
It has the information of which function created it.  
- Quoting the previous example  
- another.constructor - We will be able to see the function that created the object


4) Functions are Objects

5) Datatypes  
- Valuetypes - also called as PRIMITIVES
		Number, String, Boolean, Symbol, undefined, null
- Referencetypes
		Object, Array, Function

6) Getters, Setters
In Constructor function  
If you want a property value to set/get from outside

		function nani() {
		let x = 5;
		Object.defineProperty(this, x, {
			get: function() {
			return x;
			},
			set: function(value) {
				x = value;
			}
		})
		}

**References**
- [youtube link](https://www.youtube.com/watch?v=PFmuCDHHpwk&ab_channel=ProgrammingwithMosh)